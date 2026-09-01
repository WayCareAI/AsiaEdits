import { Check, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const OLD_WAY = [
  'Träge Ladezeiten durch veraltete Systeme',
  'Teure, langfristige Wartungsverträge',
  'Fehlende SEO-Grundstruktur ab Start',
  '3.000 €+ Startkosten für eine Basis-Website',
  'Anfällig für Sicherheitslücken & Hacks',
]

const NEW_WAY = [
  'Blitzschnelles High-Speed Cloud-Hosting',
  'Maximale Sicherheit durch moderne Code-Architektur',
  'Eingebaute SEO-Optimierung ab Tag 1',
  'Start ab nur 199 € statt Tausenden',
  'Volle Kostenkontrolle, keine versteckten Gebühren',
]

export function WhySection() {
  return (
    <section id="warum-wir" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium tracking-wide text-primary uppercase">
            Warum asiaedits.com
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Der Unterschied ist sofort spürbar.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Klassische Agenturen und Baukasten-Systeme bremsen Dein Wachstum.
            Wir gehen den effizienteren Weg – ohne Kompromisse bei Qualität
            oder Performance.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <ComparisonCard
            title="Der alte Weg"
            subtitle="Klassische Agenturen & Systeme"
            items={OLD_WAY}
            variant="negative"
          />
          <ComparisonCard
            title="Der asiaedits.com Weg"
            subtitle="Modern. Schnell. Fair."
            items={NEW_WAY}
            variant="positive"
          />
        </div>
      </div>
    </section>
  )
}

function ComparisonCard({
  title,
  subtitle,
  items,
  variant,
}: {
  title: string
  subtitle: string
  items: string[]
  variant: 'negative' | 'positive'
}) {
  const isPositive = variant === 'positive'

  return (
    <div
      className={cn(
        'relative rounded-2xl border p-8 sm:p-10',
        isPositive
          ? 'border-primary/30 bg-gradient-to-b from-primary/[0.08] to-card shadow-glow'
          : 'border-border bg-card/60',
      )}
    >
      <h3
        className={cn(
          'font-heading text-xl font-semibold',
          isPositive ? 'text-primary' : 'text-foreground',
        )}
      >
        {title}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>

      <ul className="mt-8 flex flex-col gap-4">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span
              className={cn(
                'mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full',
                isPositive
                  ? 'bg-primary/15 text-primary'
                  : 'bg-destructive/15 text-destructive',
              )}
            >
              {isPositive ? (
                <Check className="size-3.5" />
              ) : (
                <X className="size-3.5" />
              )}
            </span>
            <span className="text-sm leading-relaxed text-foreground/90">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
