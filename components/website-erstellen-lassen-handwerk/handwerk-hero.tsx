import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function HandwerkHero() {
  return (
    <section className="relative max-w-full overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-16">
      <div
        aria-hidden
        className="pointer-events-none absolute top-[-10%] left-1/2 h-[420px] w-[720px] -translate-x-1/2 overflow-hidden rounded-full bg-primary/20 blur-[120px] [contain:strict]"
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Badge
          variant="outline"
          className="h-auto max-w-full border-primary/40 bg-primary/5 px-4 py-1.5 text-center whitespace-normal text-primary shadow-[0_0_20px_-6px_rgba(56,189,248,0.7)]"
        >
          ⚡ Speziell für Handwerk &amp; Bauunternehmen · PageSpeed 90+
          garantiert
        </Badge>

        <h1 className="mt-6 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Website erstellen lassen für Handwerker – Mehr regionale Aufträge
          &amp; Top-Performance.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          Schluss mit langsamen Baukästen und teuren Wartungsverträgen. Wir
          bauen Deine ultraschnelle Next.js Handwerker-Website zum fairen
          Festpreis ab 199 €.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="#preise"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'h-11 w-full bg-primary px-6 text-base text-primary-foreground shadow-[0_0_24px_-4px_rgba(56,189,248,0.7)] hover:bg-primary/90 sm:w-auto',
            )}
          >
            Jetzt Handwerker-Website anfragen
          </Link>
          <Link
            href="/wordpress-alternative-vergleich"
            className={cn(
              buttonVariants({ variant: 'outline', size: 'lg' }),
              'h-11 w-full border-border bg-transparent px-6 text-base text-foreground hover:bg-card sm:w-auto',
            )}
          >
            Live-Performance testen
          </Link>
        </div>
      </div>
    </section>
  )
}
