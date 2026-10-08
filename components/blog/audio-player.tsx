'use client'

import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { AudioLines, LoaderCircle, Pause, Play, RotateCcw } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

type AudioPlayerProps = {
  /** Explicit text to read. When omitted, the text is extracted from `contentSelector`. */
  textToRead?: string
  /** CSS selector of the element whose headings, paragraphs and list items are read. */
  contentSelector?: string
}

type Status = 'idle' | 'loading' | 'playing' | 'paused' | 'ended'

const RATES = [
  { value: 1, label: '1x', aria: 'Geschwindigkeit 1-fach' },
  { value: 1.25, label: '1,25x', aria: 'Geschwindigkeit 1,25-fach' },
  { value: 1.5, label: '1,5x', aria: 'Geschwindigkeit 1,5-fach' },
] as const

const TTS_ENDPOINT = '/api/tts'
const TTS_VOICE = 'onyx'
// Stays below the 4096-character limit of the TTS model, even after whitespace cleanup.
const MAX_REQUEST_CHARS = 3000
const MAX_PARALLEL_REQUESTS = 3

// Playing this inside the click handler unlocks the element on iOS Safari, which
// otherwise rejects play() once the async audio download has finished.
const SILENT_WAV =
  'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA='

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'

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

// Splits at block boundaries, and at sentence boundaries inside oversized blocks,
// so each request stays below the TTS input limit and is stable (cacheable).
function buildRequestTexts(blocks: string[]): string[] {
  const texts: string[] = []
  let current = ''

  const push = (piece: string) => {
    if (current && current.length + piece.length + 1 > MAX_REQUEST_CHARS) {
      texts.push(current)
      current = ''
    }
    current = current ? `${current} ${piece}` : piece
  }

  for (const block of blocks) {
    if (block.length <= MAX_REQUEST_CHARS) {
      push(block)
      continue
    }
    const sentences = block.match(/[^.!?]+[.!?]+["')\]]*\s*|[^.!?]+$/g) ?? [
      block,
    ]
    for (const sentence of sentences) {
      const trimmed = sentence.trim()
      if (!trimmed) continue
      for (let i = 0; i < trimmed.length; i += MAX_REQUEST_CHARS) {
        push(trimmed.slice(i, i + MAX_REQUEST_CHARS))
      }
    }
  }
  if (current) texts.push(current)
  return texts
}

function countWords(texts: string[]): number {
  return texts.reduce(
    (sum, text) => sum + text.split(/\s+/).filter(Boolean).length,
    0,
  )
}

async function fetchSpeech(
  text: string,
  signal: AbortSignal,
): Promise<ArrayBuffer> {
  const params = new URLSearchParams({ text, voice: TTS_VOICE })
  const response = await fetch(`${TTS_ENDPOINT}?${params}`, { signal })
  if (!response.ok) throw new Error(`TTS request failed (${response.status})`)
  return response.arrayBuffer()
}

async function fetchAllSpeech(
  texts: string[],
  signal: AbortSignal,
): Promise<ArrayBuffer[]> {
  const results = new Array<ArrayBuffer>(texts.length)
  let next = 0
  const worker = async () => {
    while (next < texts.length) {
      const index = next++
      results[index] = await fetchSpeech(texts[index], signal)
    }
  }
  await Promise.all(
    Array.from({ length: Math.min(MAX_PARALLEL_REQUESTS, texts.length) }, worker),
  )
  return results
}

function formatClock(seconds: number): string {
  const safe = Number.isFinite(seconds) && seconds > 0 ? Math.floor(seconds) : 0
  const minutes = Math.floor(safe / 60)
  const rest = safe % 60
  return `${String(minutes).padStart(2, '0')}:${String(rest).padStart(2, '0')}`
}

export function AudioPlayer({
  textToRead,
  contentSelector = 'article',
}: AudioPlayerProps) {
  const titleId = useId()

  const [status, setStatus] = useState<Status>('idle')
  const [rate, setRate] = useState<number>(1)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [announcement, setAnnouncement] = useState('')

  const audioRef = useRef<HTMLAudioElement>(null)
  const objectUrlRef = useRef<string | null>(null)
  const abortRef = useRef<AbortController | null>(null)
  const sessionRef = useRef(0)
  const rateRef = useRef(1)

  const isArticleLoaded = () =>
    objectUrlRef.current !== null &&
    audioRef.current?.src === objectUrlRef.current

  const releaseAudio = useCallback(() => {
    sessionRef.current += 1
    abortRef.current?.abort()
    abortRef.current = null
    const audio = audioRef.current
    if (audio) {
      audio.pause()
      audio.removeAttribute('src')
      audio.load()
    }
    if (objectUrlRef.current) {
      URL.revokeObjectURL(objectUrlRef.current)
      objectUrlRef.current = null
    }
  }, [])

  useEffect(() => releaseAudio, [releaseAudio])

  const prepareTexts = (): string[] => {
    const blocks = textToRead
      ? textToRead
          .split(/\n+/)
          .map((line) => line.trim())
          .filter(Boolean)
      : extractBlocks(contentSelector)
    return buildRequestTexts(blocks)
  }

  const startPlayback = async () => {
    const audio = audioRef.current
    if (!audio) return

    const texts = prepareTexts()
    if (texts.length === 0) {
      setErrorMessage('Für diesen Artikel konnte kein Text gefunden werden.')
      return
    }

    // Replaces any previously loaded article; keeps the element for the unlock.
    releaseAudio()
    const session = sessionRef.current
    const controller = new AbortController()
    abortRef.current = controller

    setErrorMessage(null)
    setCurrentTime(0)
    setDuration(0)
    setStatus('loading')
    setAnnouncement('Audio wird geladen')

    audio.src = SILENT_WAV
    audio.play().catch(() => {})

    try {
      const buffers = await fetchAllSpeech(texts, controller.signal)
      if (session !== sessionRef.current) return

      const url = URL.createObjectURL(new Blob(buffers, { type: 'audio/mpeg' }))
      objectUrlRef.current = url
      audio.defaultPlaybackRate = rateRef.current
      audio.src = url
      audio.playbackRate = rateRef.current
      await audio.play()
    } catch (error) {
      if (session !== sessionRef.current) return
      if (error instanceof DOMException && error.name === 'NotAllowedError') {
        // Loaded fine but the browser wants another tap before it will play.
        setStatus('paused')
        setAnnouncement('Bereit, zum Abspielen erneut tippen')
        return
      }
      if (error instanceof DOMException && error.name === 'AbortError') return
      releaseAudio()
      setStatus('idle')
      setErrorMessage(
        'Das Audio konnte nicht geladen werden. Bitte versuchen Sie es erneut.',
      )
    }
  }

  const handlePlayPause = () => {
    const audio = audioRef.current
    if (!audio) return
    setErrorMessage(null)

    if (status === 'loading') {
      releaseAudio()
      setStatus('idle')
      setAnnouncement('Laden abgebrochen')
      return
    }

    if (status === 'playing') {
      audio.pause()
      return
    }

    if (isArticleLoaded()) {
      if (status === 'ended' || status === 'idle') audio.currentTime = 0
      audio.play().catch(() => {
        setErrorMessage(
          'Die Wiedergabe wurde vom Browser blockiert. Bitte versuchen Sie es erneut.',
        )
      })
      return
    }

    void startPlayback()
  }

  const handleReset = () => {
    const audio = audioRef.current
    if (!audio) return
    setErrorMessage(null)

    if (status === 'loading' || !isArticleLoaded()) {
      releaseAudio()
    } else {
      audio.pause()
      audio.currentTime = 0
    }
    setCurrentTime(0)
    setStatus('idle')
    setAnnouncement('Zurückgesetzt, Wiedergabe beginnt wieder von vorn')
  }

  const handleRateChange = (nextRate: number, ariaLabel: string) => {
    if (nextRate === rate) return
    rateRef.current = nextRate
    setRate(nextRate)
    setAnnouncement(ariaLabel)
    const audio = audioRef.current
    if (audio) {
      audio.defaultPlaybackRate = nextRate
      audio.playbackRate = nextRate
    }
  }

  const handleSeek = (value: number) => {
    const audio = audioRef.current
    if (!audio || !isArticleLoaded()) return
    audio.currentTime = value
    setCurrentTime(value)
  }

  const syncDuration = () => {
    const audio = audioRef.current
    if (!audio || !isArticleLoaded()) return
    if (Number.isFinite(audio.duration)) setDuration(audio.duration)
  }

  const isLoading = status === 'loading'
  const isPlaying = status === 'playing'
  const canSeek = (isPlaying || status === 'paused') && duration > 0
  const percent =
    duration > 0 ? Math.min(100, Math.round((currentTime / duration) * 100)) : 0
  const playLabel = isLoading
    ? 'Laden abbrechen'
    : isPlaying
      ? 'Pause'
      : status === 'paused'
        ? 'Wiedergabe fortsetzen'
        : 'Artikel vorlesen lassen'

  const statusText = errorMessage
    ? errorMessage
    : isLoading
      ? 'Audio wird geladen …'
      : null

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
            <span className="sr-only">Wiedergabezeit </span>
            {formatClock(currentTime)} / {formatClock(duration)}
          </p>
        </div>

        <p
          id={titleId}
          className="mt-3 text-balance font-heading text-lg font-semibold tracking-tight text-foreground"
        >
          Diesen Artikel vorlesen lassen
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handlePlayPause}
            aria-label={playLabel}
            aria-busy={isLoading}
            className={`inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-background transition-colors hover:bg-primary/85 disabled:cursor-not-allowed disabled:opacity-60 ${FOCUS_RING}`}
          >
            {isLoading ? (
              <LoaderCircle
                className="size-5 motion-safe:animate-spin"
                aria-hidden
              />
            ) : isPlaying ? (
              <Pause className="size-5" aria-hidden />
            ) : (
              <Play className="size-5" aria-hidden />
            )}
          </button>

          <button
            type="button"
            onClick={handleReset}
            disabled={status === 'idle' && currentTime === 0}
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
                  onClick={() => handleRateChange(option.value, option.aria)}
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

        <div className="relative mt-5 h-2 w-full rounded-full bg-foreground/15 focus-within:ring-4 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background">
          <div className="h-full w-full overflow-hidden rounded-full">
            <div
              className="h-full w-full origin-left rounded-full bg-primary transition-transform duration-300 motion-reduce:transition-none"
              style={{ transform: `scaleX(${percent / 100})` }}
            />
          </div>
          <input
            type="range"
            min={0}
            max={duration > 0 ? duration : 1}
            step={1}
            value={Math.min(currentTime, duration > 0 ? duration : 1)}
            disabled={!canSeek}
            onChange={(event) => handleSeek(Number(event.target.value))}
            aria-label="Position im Artikel-Audio"
            aria-valuetext={`${formatClock(currentTime)} von ${formatClock(duration)}`}
            className="absolute -inset-y-3 inset-x-0 h-8 w-full cursor-pointer appearance-none bg-transparent opacity-0 disabled:cursor-default"
          />
        </div>

        <p
          role={errorMessage ? 'alert' : undefined}
          className="mt-3 min-h-5 text-sm leading-relaxed text-foreground/80"
        >
          {statusText}
        </p>

        <audio
          ref={audioRef}
          preload="none"
          onLoadedMetadata={syncDuration}
          onDurationChange={syncDuration}
          onTimeUpdate={(event) => {
            if (isArticleLoaded()) setCurrentTime(event.currentTarget.currentTime)
          }}
          onPlaying={() => {
            if (!isArticleLoaded()) return
            setStatus('playing')
            setAnnouncement('Wiedergabe gestartet')
          }}
          onPause={(event) => {
            if (!isArticleLoaded() || event.currentTarget.ended) return
            setStatus('paused')
            setAnnouncement('Pausiert')
          }}
          onEnded={(event) => {
            if (!isArticleLoaded()) return
            setStatus('ended')
            setCurrentTime(event.currentTarget.duration)
            setAnnouncement('Wiedergabe beendet')
          }}
          onError={() => {
            if (!isArticleLoaded()) return
            releaseAudio()
            setStatus('idle')
            setErrorMessage(
              'Die Wiedergabe wurde unterbrochen. Bitte versuchen Sie es erneut.',
            )
          }}
        />

        <p role="status" aria-live="polite" className="sr-only">
          {announcement}
        </p>
      </div>
    </section>
  )
}
