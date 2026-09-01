import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProjectRequestDialog } from '@/components/project-request-dialog'

export function FriseurFinalCtaSection() {
  return (
    <section className="border-t border-border py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-b from-primary/[0.08] to-card p-8 text-center shadow-glow sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 left-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-primary/20 blur-[100px] [contain:strict]"
          />

          <h2
            id="jetzt-anfragen"
            className="relative text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Bereit für mehr Neukunden & Anfragen in Ihrem Friseursalon?
          </h2>

          <p className="relative mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Lassen Sie Ihre aktuelle Salon-Website jetzt kostenlos von uns
            auf Ladezeit, mobile Darstellung und lokales Google-Potenzial
            für Ihre Stadt / Ihre Region prüfen.
          </p>

          <div className="relative mt-8 flex justify-center">
            <ProjectRequestDialog>
              <Button
                size="lg"
                className="h-11 w-full max-w-full gap-2 bg-primary px-6 text-base text-primary-foreground shadow-[0_0_24px_-4px_rgba(56,189,248,0.7)] hover:bg-primary/90 sm:w-auto"
              >
                Jetzt Friseur-Website anfragen
                <ArrowRight className="size-4" />
              </Button>
            </ProjectRequestDialog>
          </div>
        </div>
      </div>
    </section>
  )
}
