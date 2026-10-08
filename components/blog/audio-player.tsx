'use client'

import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { AudioLines, Pause, Play, RotateCcw } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

type AudioPlayerProps = {
  /** Explicit text to read. When omitted, the text is extracted from `contentSelector`. */
  textToRead?: string
  /** CSS selector of the element whose headings, paragraphs and list items are read. */
  contentSelector?: string
}

type Chunk = { text: string; start: number }
type Engine = 'checking' | 'ready' | 'unsupported'
type Status = 'idle' | 'playing' | 'paused' | 'ended'

const RATES = [
  { value: 1, label: '1x', aria: 'Geschwindigkeit 1-fach' },
  { value: 1.25, label: '1,25x', aria: 'Geschwindigkeit 1,25-fach' },
  { value: 1.5, label: '1,5x', aria: 'Geschwindigkeit 1,5-fach' },
] as const

const WORDS_PER_MINUTE = 150
// ~10 s of speech at 1x, safely below Chrome desktop's ~15 s auto-stop for network voices.
const MAX_CHUNK_LENGTH = 160
const VOICE_LOAD_TIMEOUT_MS = 1500
const VOICE_POLL_INTERVAL_MS = 250
const KEEP_ALIVE_INTERVAL_MS = 10000

// Windows Chrome/Edge only: other platforms must not get the pause/resume nudge.
function isWindowsChromium(): boolean {
  if (typeof navigator === 'undefined') return false
  const ua = navigator.userAgent
  return /Windows/.test(ua) && /Chrome\//.test(ua) && !/Mobile/.test(ua)
}

// Earlier entries are ranked higher. Natural/neural voices are boosted separately.
const PREFERRED_VOICE_NAMES = [
  'google deutsch',
  'marlene',
  'viktor',
  'katja',
  'conrad',
  'vicki',
  'anna',
  'markus',
  'petra',
  'yannick',
  'hedda',
  'stefan',
]

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'

function scoreVoice(voice: SpeechSynthesisVoice): number {
  const lang = voice.lang.replace('_', '-').toLowerCase()
  if (!lang.startsWith('de')) return -1

  let score = 1
  if (lang === 'de-de') score += 20
  else if (lang === 'de-at') score += 15
  else score += 5

  const name = voice.name.toLowerCase()
  const preferredIndex = PREFERRED_VOICE_NAMES.findIndex((n) =>
    name.includes(n),
  )
  if (preferredIndex !== -1) score += 30 - preferredIndex
  if (name.includes('natural') || name.includes('neural')) score += 40
  if (name.includes('online')) score += 10
  return score
}

function pickGermanVoice(
  voices: SpeechSynthesisVoice[],
): SpeechSynthesisVoice | null {
  let best: SpeechSynthesisVoice | null = null
  let bestScore = -1
  for (const voice of voices) {
    const score = scoreVoice(voice)
    if (score > bestScore) {
      best = voice
      bestScore = score
    }
  }
  return best
}

function extractBlocks(selector: string): string[] {
  const root = document.querySelector(selector)
  if (!root) return []

  const blocks: string[] = []
  root.querySelectorAll<HTMLElement>('h2, h3, p, li').forEach((node) => {
    if (node.tagName === 'P' && node.closest('li')) return
    if (node.closest('[aria-hidden="true"]')) return
    const text = (node.textContent ?? '').replace(/\s+/g, ' ').trim()
    if (!text) return
    const isHeading = node.tagName === 'H2' || node.tagName === 'H3'
    blocks.push(isHeading && !/[.!?:]$/.test(text) ? `${text}.` : text)
  })
  return blocks
}

// Chrome cuts off long utterances, so text is spoken in sentence-sized chunks.
function buildChunks(blocks: string[]): Chunk[] {
  const pieces: string[] = []
  for (const block of blocks) {
    if (block.length <= MAX_CHUNK_LENGTH) {
      pieces.push(block)
      continue
    }
    const sentences = block.match(/[^.!?]+[.!?]+["')\]]*\s*|[^.!?]+$/g) ?? [
      block,
    ]
    let current = ''
    for (const sentence of sentences) {
      if (current && current.length + sentence.length > MAX_CHUNK_LENGTH) {
        pieces.push(current.trim())
        current = ''
      }
      current += sentence
    }
    if (current.trim()) pieces.push(current.trim())
  }

  let start = 0
  return pieces.map((text) => {
    const chunk = { text, start }
    start += text.length
    return chunk
  })
}

function countWords(chunks: Chunk[]): number {
  return chunks.reduce(
    (sum, chunk) => sum + chunk.text.split(/\s+/).filter(Boolean).length,
    0,
  )
}

function formatMinutes(wordsLeft: number, rate: number): string {
  if (wordsLeft <= 0) return '0 Min.'
  const minutes = wordsLeft / (WORDS_PER_MINUTE * rate)
  return minutes < 1 ? '< 1 Min.' : `${Math.ceil(minutes)} Min.`
}

export function AudioPlayer({
  textToRead,
  contentSelector = 'article',
}: AudioPlayerProps) {
  const titleId = useId()

  const [engine, setEngine] = useState<Engine>('checking')
  const [status, setStatus] = useState<Status>('idle')
  const [rate, setRate] = useState<number>(1)
  const [percent, setPercent] = useState(0)
  const [wordCount, setWordCount] = useState(0)
  const [voiceName, setVoiceName] = useState<string | null>(null)
  const [hasGermanVoice, setHasGermanVoice] = useState(true)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [announcement, setAnnouncement] = useState('')

  const chunksRef = useRef<Chunk[]>([])
  const totalRef = useRef(0)
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null)
  const rateRef = useRef(1)
  const sessionRef = useRef(0)
  const chunkIndexRef = useRef(0)
  const charOffsetRef = useRef(0)
  const restartOnResumeRef = useRef(false)

  const prepareChunks = useCallback((): Chunk[] => {
    const blocks = textToRead
      ? textToRead.split(/\n+/).map((line) => line.trim()).filter(Boolean)
      : extractBlocks(contentSelector)
    const chunks = buildChunks(blocks)
    chunksRef.current = chunks
    totalRef.current =
      chunks.length > 0
        ? chunks[chunks.length - 1].start + chunks[chunks.length - 1].text.length
        : 0
    return chunks
  }, [textToRead, contentSelector])

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setEngine('unsupported')
      return
    }

    const synth = window.speechSynthesis
    setWordCount(countWords(prepareChunks()))

    const updateVoices = () => {
      const voices = synth.getVoices()
      if (voices.length === 0) return
      const german = pickGermanVoice(voices)
      voiceRef.current = german
      setHasGermanVoice(german !== null)
      setVoiceName(german?.name ?? null)
      setEngine('ready')
    }

    updateVoices()
    // Chrome on Windows loads system voices asynchronously and may report an
    // empty list first; onvoiceschanged (plus a short poll) picks them up later.
    synth.onvoiceschanged = updateVoices
    const poll = window.setInterval(() => {
      if (voiceRef.current) {
        window.clearInterval(poll)
        return
      }
      updateVoices()
    }, VOICE_POLL_INTERVAL_MS)
    const timeout = window.setTimeout(() => {
      window.clearInterval(poll)
      if (!voiceRef.current) setHasGermanVoice(false)
      setEngine((current) => (current === 'checking' ? 'ready' : current))
    }, VOICE_LOAD_TIMEOUT_MS)

    const stopSpeaking = () => {
      sessionRef.current += 1
      synth.cancel()
    }
    window.addEventListener('pagehide', stopSpeaking)

    return () => {
      window.clearTimeout(timeout)
      window.clearInterval(poll)
      synth.onvoiceschanged = null
      window.removeEventListener('pagehide', stopSpeaking)
      stopSpeaking()
    }
  }, [prepareChunks])

  // Chrome on Windows silently stops network voices after ~15 s of continuous speech.
  useEffect(() => {
    if (status !== 'playing' || !isWindowsChromium()) return
    const synth = window.speechSynthesis
    const interval = window.setInterval(() => {
      const voice = voiceRef.current
      if (!synth.speaking || synth.paused || (voice && voice.localService)) return
      synth.pause()
      synth.resume()
    }, KEEP_ALIVE_INTERVAL_MS)
    return () => window.clearInterval(interval)
  }, [status])

  const speakFrom = useCallback(
    function speak(index: number, offset = 0) {
      const synth = window.speechSynthesis
      const chunks = chunksRef.current

      if (index >= chunks.length) {
        chunkIndexRef.current = 0
        charOffsetRef.current = 0
        setPercent(100)
        setStatus('ended')
        setAnnouncement('Wiedergabe beendet')
        return
      }

      // Resets Chrome desktop's audio queue to avoid silent hangs. The session is
      // bumped first so end/error events of cancelled utterances (Safari fires
      // `end` on cancel) can never advance playback a second time.
      sessionRef.current += 1
      synth.cancel()
      if (synth.paused) synth.resume()
      const session = sessionRef.current

      const chunk = chunks[index]
      chunkIndexRef.current = index
      charOffsetRef.current = offset

      if (!voiceRef.current) {
        const late = pickGermanVoice(synth.getVoices())
        if (late) {
          voiceRef.current = late
          setHasGermanVoice(true)
          setVoiceName(late.name)
        }
      }

      const utterance = new SpeechSynthesisUtterance(chunk.text.slice(offset))
      const voice = voiceRef.current
      if (voice) utterance.voice = voice
      utterance.lang = voice?.lang ?? 'de-DE'
      utterance.rate = rateRef.current

      const updateProgress = (position: number) => {
        const total = totalRef.current
        if (total === 0) return
        setPercent(Math.min(100, Math.round((position / total) * 100)))
      }

      utterance.onboundary = (event) => {
        if (session !== sessionRef.current) return
        charOffsetRef.current = offset + event.charIndex
        updateProgress(chunk.start + offset + event.charIndex)
      }
      utterance.onend = () => {
        if (session !== sessionRef.current) return
        updateProgress(chunk.start + chunk.text.length)
        speak(index + 1)
      }
      utterance.onerror = (event) => {
        // Every intentional cancel bumps the session, so a matching session means
        // the browser stopped on its own and the UI must not stay in "playing".
        if (session !== sessionRef.current) return
        sessionRef.current += 1
        setStatus('idle')
        if (event.error !== 'canceled' && event.error !== 'interrupted') {
          setErrorMessage(
            'Die Wiedergabe wurde vom Browser unterbrochen. Bitte versuchen Sie es erneut.',
          )
        }
      }

      synth.speak(utterance)
    },
    [],
  )

  const handlePlayPause = () => {
    if (engine !== 'ready') return
    const synth = window.speechSynthesis
    setErrorMessage(null)

    if (status === 'playing') {
      synth.pause()
      setStatus('paused')
      setAnnouncement('Pausiert')
      return
    }

    if (status === 'paused') {
      if (restartOnResumeRef.current) {
        restartOnResumeRef.current = false
        sessionRef.current += 1
        synth.cancel()
        synth.resume()
        speakFrom(chunkIndexRef.current, charOffsetRef.current)
      } else {
        synth.resume()
      }
      setStatus('playing')
      setAnnouncement('Wiedergabe fortgesetzt')
      return
    }

    sessionRef.current += 1
    synth.cancel()
    const chunks = prepareChunks()
    if (chunks.length === 0) {
      setErrorMessage('Für diesen Artikel konnte kein Text gefunden werden.')
      return
    }
    setWordCount(countWords(chunks))
    setPercent(0)
    setStatus('playing')
    setAnnouncement('Wiedergabe gestartet')
    speakFrom(0)
  }

  const handleReset = () => {
    if (engine !== 'ready') return
    sessionRef.current += 1
    window.speechSynthesis.cancel()
    chunkIndexRef.current = 0
    charOffsetRef.current = 0
    restartOnResumeRef.current = false
    setPercent(0)
    setStatus('idle')
    setErrorMessage(null)
    setAnnouncement('Zurückgesetzt, Wiedergabe beginnt wieder von vorn')
  }

  const handleRateChange = (nextRate: number, ariaLabel: string) => {
    if (nextRate === rate) return
    rateRef.current = nextRate
    setRate(nextRate)
    setAnnouncement(ariaLabel)

    if (status === 'playing') {
      sessionRef.current += 1
      window.speechSynthesis.cancel()
      speakFrom(chunkIndexRef.current, charOffsetRef.current)
    } else if (status === 'paused') {
      restartOnResumeRef.current = true
    }
  }

  const isReady = engine === 'ready'
  const isPlaying = status === 'playing'
  const playLabel = isPlaying
    ? 'Pause'
    : status === 'paused'
      ? 'Wiedergabe fortsetzen'
      : 'Artikel vorlesen lassen'

  const wordsLeft = Math.round(wordCount * (1 - percent / 100))
  const timeLabel =
    wordCount === 0
      ? '–'
      : status === 'idle' || status === 'ended'
        ? `ca. ${formatMinutes(wordCount, rate)} Hördauer`
        : `noch ca. ${formatMinutes(wordsLeft, rate)}`

  return (
    <section
      aria-labelledby={titleId}
      className="relative px-4 pb-4 sm:px-6"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-primary/30 bg-card/50 p-5 shadow-glow backdrop-blur-md sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Badge
            variant="outline"
            className="h-auto border-primary/40 bg-primary/10 px-3 py-1 text-primary uppercase"
          >
            <AudioLines
              className={`size-3.5 ${isPlaying ? 'motion-safe:animate-pulse' : ''}`}
              data-icon="inline-start"
              aria-hidden
            />
            Artikel anhören
          </Badge>
          <p
            className="text-sm tabular-nums text-foreground/80"
            data-testid="audio-time"
          >
            {timeLabel}
          </p>
        </div>

        <p
          id={titleId}
          className="mt-3 text-balance font-heading text-lg font-semibold tracking-tight text-foreground"
        >
          Diesen Artikel vorlesen lassen
        </p>

        {engine === 'unsupported' ? (
          <p
            role="status"
            className="mt-3 leading-relaxed text-pretty text-foreground/80"
          >
            Die Vorlesefunktion wird von diesem Browser nicht unterstützt. Der
            vollständige Artikel steht Ihnen weiterhin als Text zur Verfügung.
          </p>
        ) : (
          <>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handlePlayPause}
                disabled={!isReady}
                aria-label={playLabel}
                className={`inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-background transition-colors hover:bg-primary/85 disabled:cursor-not-allowed disabled:opacity-60 ${FOCUS_RING}`}
              >
                {isPlaying ? (
                  <Pause className="size-5" aria-hidden />
                ) : (
                  <Play className="size-5" aria-hidden />
                )}
              </button>

              <button
                type="button"
                onClick={handleReset}
                disabled={!isReady || (status === 'idle' && percent === 0)}
                aria-label="Zurücksetzen und von vorn beginnen"
                className={`inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-primary/40 text-foreground transition-colors hover:bg-primary/10 disabled:cursor-not-allowed disabled:opacity-60 ${FOCUS_RING}`}
              >
                <RotateCcw className="size-4" aria-hidden />
              </button>

              <div
                role="group"
                aria-label="Wiedergabegeschwindigkeit"
                className="ml-auto flex items-center gap-2"
              >
                {RATES.map((option) => {
                  const active = option.value === rate
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() =>
                        handleRateChange(option.value, option.aria)
                      }
                      disabled={!isReady}
                      aria-pressed={active}
                      aria-label={option.aria}
                      className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border px-3 text-sm font-semibold tabular-nums transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${FOCUS_RING} ${
                        active
                          ? 'border-primary bg-primary text-background'
                          : 'border-primary/40 text-foreground hover:bg-primary/10'
                      }`}
                    >
                      {option.label}
                    </button>
                  )
                })}
              </div>
            </div>

            <div
              role="progressbar"
              aria-label="Fortschritt der Vorlesefunktion"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={percent}
              aria-valuetext={`${percent} Prozent vorgelesen`}
              className="mt-5 h-2 w-full overflow-hidden rounded-full bg-foreground/15"
            >
              <div
                className="h-full w-full origin-left rounded-full bg-primary transition-transform duration-300 motion-reduce:transition-none"
                style={{ transform: `scaleX(${percent / 100})` }}
              />
            </div>

            <p className="mt-3 min-h-5 text-sm leading-relaxed text-foreground/80">
              {errorMessage
                ? errorMessage
                : engine === 'checking'
                  ? 'Stimmen werden geladen …'
                  : voiceName
                    ? `Stimme: ${voiceName}`
                    : !hasGermanVoice
                      ? 'Keine deutsche Stimme gefunden – die Standardstimme Ihres Geräts wird verwendet.'
                      : null}
            </p>
          </>
        )}

        <p role="status" aria-live="polite" className="sr-only">
          {announcement}
        </p>
      </div>
    </section>
  )
}
