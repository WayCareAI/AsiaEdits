import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Zap, ArrowRight } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const ProjectRequestDialog = dynamic(() =>
  import('@/components/project-request-dialog').then(
    (mod) => mod.ProjectRequestDialog,
  ),
)

export function HandwerkerHero() {
  return (
    <section className="relative max-w-full overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute top-[-10%] left-1/2 h-[420px] w-[720px] -translate-x-1/2 overflow-hidden rounded-full bg-primary/20 blur-[120px] [contain:strict]"
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Badge
          variant="outline"
          className="h-auto max-w-full border-primary/40 bg-primary/5 px-4 py-1.5 text-center whitespace-normal text-primary shadow-[0_0_20px_-6px_rgba(56,189,248,0.7)]"
        >
          Spezialisierte Branchen-Lösung für das Moderne Handwerk
        </Badge>

        <h1
          id="handwerker-website-nextjs"
          className="mt-6 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
        >
          Website für Handwerker: Mehr qualifizierte Anfragen &amp;
          Mitarbeiter durch Ultra-Speed Webdesign
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          Suchen Sie nach einer modernen Website für Handwerker, die nicht
          nur gut aussieht, sondern auf Smartphones in Sekundenschnelle
          lädt und Anfragen von Kunden aus Ihrer Region generiert?
          Entdecken Sie, wie Next.js-Technologie veraltete
          Baukasten-Homepages ablöst und Ihren Handwerksbetrieb digital an
          die Spitze bringt.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ProjectRequestDialog>
            <Button
              size="lg"
              className="h-11 w-full gap-2 bg-primary px-6 text-base text-primary-foreground shadow-[0_0_24px_-4px_rgba(56,189,248,0.7)] hover:bg-primary/90 sm:w-auto"
            >
              <Zap className="size-4" data-icon="inline-start" />
              Jetzt Handwerker-Website anfragen
            </Button>
          </ProjectRequestDialog>
          <Link
            href="#vorteile-asiaedits-handwerker-website"
            className={cn(
              buttonVariants({ variant: 'outline', size: 'lg' }),
              'h-11 w-full gap-2 border-border px-6 text-base sm:w-auto',
            )}
          >
            Vorteile &amp; Branchen-Lösung ansehen
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
