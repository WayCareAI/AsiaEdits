import Link from 'next/link'
import { Sparkles, ArrowRight } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ProjectRequestDialog } from '@/components/project-request-dialog'
import { cn } from '@/lib/utils'

export function FriseurHero() {
  return (
    <section className="relative max-w-full overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/3 overflow-hidden rounded-full bg-primary/10 blur-[130px] [contain:strict]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-24 right-0 h-64 w-64 translate-x-1/3 overflow-hidden rounded-full bg-primary/15 blur-[100px] [contain:strict]"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 text-center sm:px-6">
        <Badge
          variant="outline"
          className="h-auto max-w-full border-primary/40 bg-primary/5 px-4 py-1.5 text-center whitespace-normal text-primary shadow-[0_0_20px_-6px_rgba(56,189,248,0.7)]"
        >
          <Sparkles className="size-3.5 shrink-0" />
          Branchen-Lösung für Friseursalons & Barber Shops
        </Badge>

        <h1
          id="friseur-website-nextjs"
          className="mt-6 text-balance font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
        >
          Website für Friseure: Mehr Online-Terminanfragen & Neukunden durch
          Ultra-Speed Webdesign
        </h1>

        <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground sm:text-lg">
          Suchen Sie nach einer modernen Website für Friseure, die Ihren
          Salon perfekt in Szene setzt, Anfragen über einfache Webformulare
          rund um die Uhr entgegennimmt und Neukunden aus Ihrer Stadt /
          Ihrer Region anzieht? Entdecken Sie, wie schlüsselfertiges
          Next.js Webdesign veraltete Baukasten-Homepages ablöst.
        </p>

        <div className="mt-8 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
          <ProjectRequestDialog>
            <Button
              size="lg"
              className="h-11 w-full gap-2 bg-primary px-6 text-base text-primary-foreground shadow-[0_0_24px_-4px_rgba(56,189,248,0.7)] hover:bg-primary/90 sm:w-auto"
            >
              Jetzt Friseur-Website anfragen
              <ArrowRight className="size-4" />
            </Button>
          </ProjectRequestDialog>

          <Link
            href="#vorteile-asiaedits-friseur-website"
            className={cn(
              buttonVariants({ variant: 'outline', size: 'lg' }),
              'h-11 w-full gap-2 border-border px-6 text-base sm:w-auto',
            )}
          >
            Salon-Features & Lösung ansehen
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
