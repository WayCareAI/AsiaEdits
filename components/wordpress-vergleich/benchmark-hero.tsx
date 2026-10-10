import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function BenchmarkHero() {
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
          Performance-Report 2026
        </Badge>

        <h1 className="mt-6 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          WordPress vs. Next.js Architecture: Der Ladezeiten- &amp;
          Performance-Report 2026
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          Echte Google PageSpeed Insights Livedaten im Vergleich: Warum
          moderne Next.js Web-Interfaces veraltete Monolithen um Längen
          schlagen.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="#vergleichstabelle"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'h-11 w-full bg-primary px-6 text-base text-primary-foreground shadow-[0_0_24px_-4px_rgba(56,189,248,0.7)] hover:bg-primary/90 sm:w-auto',
            )}
          >
            Zum Vergleich
          </Link>
          <Link
            href="/wordpress-alternative"
            className={cn(
              buttonVariants({ variant: 'outline', size: 'lg' }),
              'h-11 w-full border-border bg-transparent px-6 text-base text-foreground hover:bg-card sm:w-auto',
            )}
          >
            Mehr zur WordPress-Alternative
          </Link>
        </div>
      </div>
    </section>
  )
}
