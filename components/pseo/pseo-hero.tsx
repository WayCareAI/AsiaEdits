import { ArrowRight, AlertTriangle, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

interface PseoHeroProps {
  eyebrow: string
  title: string
  subtitle: string
  whyText: string
  badges: string[]
}

export function PseoHero({ eyebrow, title, subtitle, whyText, badges }: PseoHeroProps) {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-medium tracking-wide text-primary uppercase">
            {eyebrow}
          </span>
          <h1 className="mt-3 text-balance font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {subtitle}
          </p>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-border bg-card/50 p-4">
            <AlertTriangle className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
            <p className="text-pretty text-sm leading-relaxed text-foreground/80">
              {whyText}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {Array.from(new Set(badges)).map((badge, index) => (
              <span
                key={`${badge}-${index}`}
                className="rounded-full border border-primary/40 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400">
              <span className="relative flex size-2 shrink-0">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              LCP &lt; 1.0s
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400">
              <CheckCircle2 className="size-3.5" aria-hidden="true" />
              Core Web Vitals: alle grün
            </span>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#angebot-anfordern"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Kostenloses Angebot anfordern
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="#technische-vorteile"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-card/50 px-6 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Technische Vorteile ansehen
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
