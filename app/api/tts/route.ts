import { generateSpeech } from 'ai'

export const maxDuration = 60

const MODEL = 'openai/tts-1'
// OpenAI's tts-1 rejects inputs longer than 4096 characters.
const MAX_TEXT_LENGTH = 4096
const VOICES = ['onyx', 'alloy'] as const
type Voice = (typeof VOICES)[number]

const IMMUTABLE_CACHE =
  'public, max-age=31536000, s-maxage=31536000, immutable'

function errorResponse(message: string, status: number) {
  return Response.json(
    { error: message },
    { status, headers: { 'Cache-Control': 'no-store' } },
  )
}

function isVoice(value: unknown): value is Voice {
  return VOICES.includes(value as Voice)
}

// Blocks hot-linking from other sites; browsers always send this header on
// fetch/audio requests, so a missing header (curl, server-side) is allowed.
function isSameSite(request: Request): boolean {
  const site = request.headers.get('sec-fetch-site')
  return site === null || site === 'same-origin' || site === 'none'
}

async function synthesize(
  request: Request,
  rawText: unknown,
  rawVoice: unknown,
): Promise<Response> {
  if (!isSameSite(request)) return errorResponse('Forbidden', 403)

  if (typeof rawText !== 'string') {
    return errorResponse('Feld "text" fehlt oder ist kein String.', 400)
  }
  const text = rawText.replace(/\s+/g, ' ').trim()
  if (text.length === 0) return errorResponse('Text ist leer.', 400)
  if (text.length > MAX_TEXT_LENGTH) {
    return errorResponse(
      `Text ist zu lang (maximal ${MAX_TEXT_LENGTH} Zeichen).`,
      413,
    )
  }

  const voice: Voice = isVoice(rawVoice) ? rawVoice : 'onyx'

  try {
    const { audio } = await generateSpeech({
      model: MODEL,
      text,
      voice,
      outputFormat: 'mp3',
      abortSignal: request.signal,
    })

    return new Response(new Blob([audio.uint8Array], { type: 'audio/mpeg' }), {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Cache-Control': IMMUTABLE_CACHE,
        'X-Content-Type-Options': 'nosniff',
      },
    })
  } catch (error) {
    if (request.signal.aborted) return errorResponse('Abgebrochen.', 499)
    console.error('[tts] speech generation failed:', error)
    return errorResponse('Die Sprachausgabe konnte nicht erzeugt werden.', 502)
  }
}

// GET is what the player uses: identical URLs are cached by the browser and the
// Vercel CDN, so every chunk of an article is generated only once.
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  return synthesize(request, searchParams.get('text'), searchParams.get('voice'))
}

// Same contract for `{ text: string, voice?: string }` bodies. CDNs do not cache
// POST responses, so use GET for anything that should be served from the edge.
export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return errorResponse('Ungültiger JSON-Body.', 400)
  }
  const { text, voice } = (body ?? {}) as { text?: unknown; voice?: unknown }
  return synthesize(request, text, voice)
}
