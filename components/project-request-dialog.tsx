'use client'

import { useState, type ReactElement } from 'react'
import { CheckCircle2, Loader2, Zap } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'

const WEB3FORMS_ACCESS_KEY = '6a222913-ae83-4776-b9ad-f201d34d3347'

const PACKAGE_OPTIONS = [
  {
    value: 'buyout',
    label: 'One-Time Buyout (699 € – 24 Monate Hosting gratis)',
  },
  {
    value: 'subscription',
    label: 'Smart Subscription (199 € Setup + 39 €/Monat)',
  },
  {
    value: 'gbp-care',
    label: 'Local Google Booster Add-on (49 €/Monat)',
  },
  {
    value: 'custom',
    label: 'Individuelles Projekt / Beratung',
  },
]

type Status = 'idle' | 'loading' | 'success' | 'error'

export function ProjectRequestDialog({
  children,
  defaultPackage,
}: {
  children: ReactElement
  defaultPackage?: string
}) {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [pkg, setPkg] = useState(defaultPackage ?? '')

  function handleOpenChange(next: boolean) {
    setOpen(next)
    if (next) {
      setStatus('idle')
      setPkg(defaultPackage ?? '')
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading')

    const formData = new FormData(event.currentTarget)
    const selectedPackage = PACKAGE_OPTIONS.find((p) => p.value === pkg)
    formData.set('Paket', selectedPackage?.label ?? 'Nicht angegeben')

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
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger render={children} />
      <DialogContent className="fixed top-1/2 left-1/2 mx-auto my-0 w-[calc(100vw-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-x-hidden overflow-y-auto border-border bg-card p-4 sm:p-6 sm:max-w-md max-h-[85vh]">
        {status === 'success' ? (
          <div className="flex flex-col items-center gap-4 py-6 text-center">
            <span className="flex size-14 items-center justify-center rounded-full bg-primary/15 text-primary">
              <CheckCircle2 className="size-7" />
            </span>
            <div>
              <DialogTitle className="text-lg">Anfrage erhalten!</DialogTitle>
              <DialogDescription className="mt-2 text-sm">
                Vielen Dank für Deine Projektanfrage. Wir melden uns
                innerhalb von 12 Stunden mit einer unverbindlichen
                Einschätzung bei Dir.
              </DialogDescription>
            </div>
            <Button
              variant="outline"
              className="mt-2 border-border"
              onClick={() => setOpen(false)}
            >
              Schließen
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-heading text-xl">
                Projekt anfragen
              </DialogTitle>
              <DialogDescription>
                Erzähl uns kurz von Deinem Vorhaben – wir melden uns
                unverbindlich innerhalb von 12 Stunden zurück.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="mt-2 w-full max-w-full box-border">
              <input
                type="hidden"
                name="access_key"
                value={WEB3FORMS_ACCESS_KEY}
              />
              <input
                type="hidden"
                name="subject"
                value="⚡ Neue Projektanfrage asiaedits.com"
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
                  <FieldLabel htmlFor="package">Paket-Auswahl</FieldLabel>
                  <Select
                    value={pkg}
                    onValueChange={(value) => setPkg(value as string)}
                    name="package_value"
                    items={PACKAGE_OPTIONS}
                  >
                    <SelectTrigger
                      id="package"
                      className="w-full max-w-full min-w-0 overflow-hidden text-ellipsis whitespace-nowrap"
                    >
                      <SelectValue placeholder="Paket wählen" />
                    </SelectTrigger>
                    <SelectContent>
                      {PACKAGE_OPTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>

                <Field>
                  <FieldLabel htmlFor="website">
                    Bestehende Website-URL{' '}
                    <span className="text-muted-foreground">(optional)</span>
                  </FieldLabel>
                  <Input
                    id="website"
                    name="Bestehende Website"
                    type="text"
                    placeholder="z. B. deine-website.de"
                    className="w-full max-w-full min-w-0 box-border"
                  />
                </Field>

                <div className="grid w-full max-w-full grid-cols-1 gap-4 sm:grid-cols-3">
                  <Field>
                    <FieldLabel htmlFor="name">Dein Name</FieldLabel>
                    <Input
                      id="name"
                      name="Name"
                      required
                      className="w-full max-w-full min-w-0 box-border"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="email">E-Mail Adresse</FieldLabel>
                    <Input
                      id="email"
                      name="E-Mail"
                      type="email"
                      required
                      className="w-full max-w-full min-w-0 box-border"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="phone">
                      Telefon{' '}
                      <span className="text-muted-foreground">
                        (optional)
                      </span>
                    </FieldLabel>
                    <Input
                      id="phone"
                      name="Telefon"
                      type="tel"
                      className="w-full max-w-full min-w-0 box-border"
                    />
                  </Field>
                </div>

                <Field>
                  <FieldLabel htmlFor="description">
                    Kurze Projektbeschreibung{' '}
                    <span className="text-muted-foreground">(optional)</span>
                  </FieldLabel>
                  <Textarea
                    id="description"
                    name="Projektbeschreibung"
                    placeholder="Erzähl uns kurz, was Du Dir vorstellst..."
                    className="min-h-24 w-full max-w-full min-w-0 box-border"
                  />
                </Field>
              </FieldGroup>

              <Button
                type="submit"
                size="lg"
                disabled={status === 'loading'}
                className="mt-6 box-border h-auto min-h-[44px] w-full max-w-full inline-flex items-center justify-center gap-2 whitespace-normal text-center py-3 px-4 bg-primary text-primary-foreground shadow-[0_0_24px_-4px_rgba(56,189,248,0.7)] hover:bg-primary/90"
              >
                {status === 'loading' ? (
                  <Loader2 className="size-4 animate-spin" data-icon="inline-start" />
                ) : (
                  <Zap className="size-4" data-icon="inline-start" />
                )}
                Unverbindliche Anfrage absenden
              </Button>

              {status === 'error' && (
                <p className="mt-3 text-center text-sm text-destructive">
                  Da ist etwas schiefgelaufen. Bitte versuche es erneut oder
                  schreibe uns direkt per E-Mail.
                </p>
              )}
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
