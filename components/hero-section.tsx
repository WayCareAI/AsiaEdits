import { ArrowRight, PlayCircle, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative max-w-full overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_40%,transparent_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[-10%] left-1/2 h-[420px] w-[720px] -translate-x-1/2 select-none overflow-hidden rounded-full bg-primary/20 blur-[120px] [contain:strict]"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <Badge className="gap-1.5 border border-primary/30 bg-primary/10 px-3 py-1 text-primary">
          <Zap className="size-3.5" />
          90+ Google PageSpeed garantiert &middot; High-Speed Cloud
          Infrastructure
        </Badge>

        <h1 className="mt-6 text-balance font-heading text-4xl leading-[1.1] font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Website erstellen lassen vom Freelancer –{' '}
          <span className="text-primary text-glow">Ultra-schnell</span>,
          SEO-optimiert &amp; ohne Agenturaufschlag.
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Schluss mit trägen WordPress-Templates und überteuerten Agenturen.
          Wir bauen Deine modernste Webpräsenz zum fairen Festpreis oder
          flexiblen Monatsabo.
        </p>

        <div className="mt-10 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
          <Button
            size="lg"
            render={<a href="#preise" />}
            nativeButton={false}
            className="h-12 w-full gap-2 bg-primary px-6 text-base text-primary-foreground shadow-[0_0_32px_-6px_rgba(56,189,248,0.8)] hover:bg-primary/90 sm:w-auto"
          >
            Jetzt Preis berechnen
            <ArrowRight className="size-4" data-icon="inline-end" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            render={<a href="#referenzen" />}
            nativeButton={false}
            className="h-12 w-full gap-2 border-border bg-transparent px-6 text-base text-foreground hover:bg-secondary sm:w-auto"
          >
            <PlayCircle className="size-4" data-icon="inline-start" />
            Live-Demos ansehen
          </Button>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Inklusive kompletter WDF*IDF-Textoptimierung &amp; Meta-Tags bei
          allen Paketen.
        </p>
      </div>
    </section>
  )
}
