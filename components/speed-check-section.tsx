'use client'

import { useState } from 'react'
import { CheckCircle2, Loader2, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'

const WEB3FORMS_ACCESS_KEY = '6a222913-ae83-4776-b9ad-f201d34d3347'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function SpeedCheckSection() {
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
    <section className="relative py-4 sm:py-6">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-full overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-b from-primary/[0.08] to-card p-6 shadow-glow sm:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 right-0 h-64 w-64 -translate-y-1/3 translate-x-1/4 overflow-hidden rounded-full bg-primary/20 blur-[100px] [contain:strict]"
          />

          {status === 'success' ? (
            <div className="relative flex flex-col items-center gap-3 text-center">
              <span className="flex size-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                <CheckCircle2 className="size-6" />
              </span>
              <p className="max-w-md text-balance text-base leading-relaxed text-foreground">
                Anfrage erhalten! Wir prüfen Deine Ladezeiten und senden Dir
                Deine persönliche Analyse innerhalb von 12 Stunden zu.
              </p>
            </div>
          ) : (
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-sm">
                <h2 className="text-balance font-heading text-xl font-semibold text-foreground sm:text-2xl">
                  <span aria-hidden>⚡ </span>Kostenfreie Website- &amp;
                  Ladezeiten-Analyse anfordern
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Wir analysieren Deine aktuelle Website und senden Dir die
                  Auswertung inkl. Optimierungspotenzial innerhalb von 12
                  Stunden direkt per Mail.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex w-full flex-col gap-3 lg:max-w-md"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value={WEB3FORMS_ACCESS_KEY}
                />
                <input
                  type="hidden"
                  name="subject"
                  value="⚡ Neuer Speed-Check Lead asiaedits.com"
                />
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="speed-url" className="sr-only">
                      Website-URL
                    </FieldLabel>
                    <Input
                      id="speed-url"
                      name="Website-URL"
                      placeholder="Deine Website-URL"
                      required
                      className="h-11 border-border bg-background/60"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="speed-email" className="sr-only">
                      E-Mail-Adresse
                    </FieldLabel>
                    <Input
                      id="speed-email"
                      name="E-Mail"
                      type="email"
                      placeholder="Deine E-Mail-Adresse"
                      required
                      className="h-11 border-border bg-background/60"
                    />
                  </Field>
                </FieldGroup>

                <Button
                  type="submit"
                  size="lg"
                  disabled={status === 'loading'}
                  className="h-11 w-full gap-2 bg-primary text-base text-primary-foreground shadow-[0_0_24px_-4px_rgba(56,189,248,0.7)] hover:bg-primary/90"
                >
                  {status === 'loading' ? (
                    <Loader2
                      className="size-4 animate-spin"
                      data-icon="inline-start"
                    />
                  ) : (
                    <Zap className="size-4" data-icon="inline-start" />
                  )}
                  Analyse jetzt kostenlos anfordern
                </Button>

                {status === 'error' && (
                  <p className="text-center text-sm text-destructive">
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
