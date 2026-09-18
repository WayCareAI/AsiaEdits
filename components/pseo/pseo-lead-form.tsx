'use client'

import { useState } from 'react'
import { CheckCircle2, Loader2, Zap } from 'lucide-react'

const WEB3FORMS_ACCESS_KEY = '6a222913-ae83-4776-b9ad-f201d34d3347'

type Status = 'idle' | 'loading' | 'success' | 'error'

interface PseoLeadFormProps {
  heading: string
  description: string
  subjectTag: string
}

export function PseoLeadForm({ heading, description, subjectTag }: PseoLeadFormProps) {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading')

    const formData = new FormData(event.currentTarget)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })
      const result = await response.json()
      setStatus(result.success ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="angebot-anfordern" className="bg-gray-900 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-800 bg-white p-6 sm:p-10">
          {status === 'success' ? (
            <div className="flex flex-col items-center gap-3 py-8 text-center">
              <span className="flex size-12 items-center justify-center rounded-full bg-gray-100 text-gray-900">
                <CheckCircle2 className="size-6" />
              </span>
              <p className="max-w-md text-balance text-base leading-relaxed text-gray-900">
                Anfrage erhalten! Wir melden uns innerhalb von 12 Stunden mit
                Deinem unverbindlichen Angebot.
              </p>
            </div>
          ) : (
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
              <div>
                <span className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                  Jetzt unverbindlich anfragen
                </span>
                <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                  {heading}
                </h2>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-gray-600">
                  {description}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
                <input type="hidden" name="subject" value={subjectTag} />
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-1.5">
                    <span className="text-sm font-medium text-gray-700">Name</span>
                    <input
                      name="Name"
                      required
                      className="h-11 rounded-lg border border-gray-200 bg-white px-3 text-sm text-gray-900 outline-none focus:border-gray-400"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-sm font-medium text-gray-700">
                      E-Mail-Adresse
                    </span>
                    <input
                      name="E-Mail"
                      type="email"
                      required
                      className="h-11 rounded-lg border border-gray-200 bg-white px-3 text-sm text-gray-900 outline-none focus:border-gray-400"
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-1.5">
                  <span className="text-sm font-medium text-gray-700">
                    Telefon <span className="text-gray-400">(optional)</span>
                  </span>
                  <input
                    name="Telefon"
                    type="tel"
                    className="h-11 rounded-lg border border-gray-200 bg-white px-3 text-sm text-gray-900 outline-none focus:border-gray-400"
                  />
                </label>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="mt-2 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-gray-900 px-6 text-sm font-medium text-white transition-colors hover:bg-gray-800 disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : (
                    <Zap className="size-4" />
                  )}
                  Angebot kostenlos anfordern
                </button>

                {status === 'error' && (
                  <p className="text-center text-sm text-red-600">
                    Da ist etwas schiefgelaufen. Bitte versuche es erneut.
                  </p>
                )}
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
