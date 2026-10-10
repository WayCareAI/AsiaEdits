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
    <section id="angebot-anfordern" className="border-t border-border bg-card/30 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-10">
          {status === 'success' ? (
            <div className="flex flex-col items-center gap-3 py-8 text-center">
              <span className="flex size-12 items-center justify-center rounded-full border border-primary/40 bg-primary/5 text-primary">
                <CheckCircle2 className="size-6" aria-hidden="true" />
              </span>
              <p className="max-w-md text-balance text-base leading-relaxed text-foreground">
                Anfrage erhalten! Wir melden uns innerhalb von 12 Stunden mit
                Deinem unverbindlichen Angebot.
              </p>
            </div>
          ) : (
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
              <div>
                <span className="text-sm font-medium tracking-wide text-primary uppercase">
                  Jetzt unverbindlich anfragen
                </span>
                <h2 className="mt-3 text-balance font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {heading}
                </h2>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
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
                    <span className="text-sm font-medium text-foreground/90">Name</span>
                    <input
                      name="Name"
                      required
                      className="h-11 rounded-lg border border-input bg-background px-3 text-sm text-foreground outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-sm font-medium text-foreground/90">
                      E-Mail-Adresse
                    </span>
                    <input
                      name="E-Mail"
                      type="email"
                      required
                      className="h-11 rounded-lg border border-input bg-background px-3 text-sm text-foreground outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-1.5">
                  <span className="text-sm font-medium text-foreground/90">
                    Telefon <span className="text-muted-foreground">(optional)</span>
                  </span>
                  <input
                    name="Telefon"
                    type="tel"
                    className="h-11 rounded-lg border border-input bg-background px-3 text-sm text-foreground outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
                  />
                </label>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="mt-2 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                  ) : (
                    <Zap className="size-4" aria-hidden="true" />
                  )}
                  Angebot kostenlos anfordern
                </button>

                {status === 'error' && (
                  <p role="alert" className="text-center text-sm text-destructive">
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
