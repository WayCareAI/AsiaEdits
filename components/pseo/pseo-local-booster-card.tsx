import { MapPin, Braces, Target, Activity } from 'lucide-react'
import Link from 'next/link'

interface PseoLocalBoosterCardProps {
  title: string
  features: string[]
}

const FEATURE_ICONS = [MapPin, Braces, Target, Activity]

export function PseoLocalBoosterCard({ title, features }: PseoLocalBoosterCardProps) {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card/50 p-8 sm:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                <MapPin className="size-3.5" aria-hidden="true" />
                SEO Local Booster Package
              </span>
              <h2 className="mt-4 text-balance font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {title}
              </h2>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {features.map((feature, index) => {
                  const Icon = FEATURE_ICONS[index % FEATURE_ICONS.length]
                  return (
                    <div
                      key={feature}
                      className="flex items-start gap-2 rounded-lg border border-border bg-background/60 px-3 py-2 text-sm text-foreground/90"
                    >
                      <Icon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      {feature}
                    </div>
                  )
                })}
              </div>
            </div>

            <Link
              href="#angebot-anfordern"
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              SEO Local Booster aktivieren
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
