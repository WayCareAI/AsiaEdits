import dynamic from 'next/dynamic'
import { Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ProjectRequestDialog = dynamic(() =>
  import('@/components/project-request-dialog').then(
    (mod) => mod.ProjectRequestDialog,
  ),
)

export function HandwerkerFinalCtaSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-xl border border-primary/40 bg-gradient-to-b from-primary/[0.1] to-card p-8 text-center shadow-glow sm:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 left-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-primary/25 blur-[100px] [contain:strict]"
          />
          <h2
            id="jetzt-anfragen"
            className="relative text-balance font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            Bereit für mehr Kunden &amp; Anfragen aus Ihrer Region?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Lassen Sie Ihre aktuelle Website jetzt kostenlos von uns auf
            Ladezeit, mobile Darstellung und lokale SEO-Chancen prüfen.
          </p>

          <div className="relative mt-8 flex justify-center">
            <ProjectRequestDialog>
              <Button
                size="lg"
                className="h-11 w-full max-w-full gap-2 bg-primary px-6 text-base whitespace-normal text-primary-foreground shadow-[0_0_24px_-4px_rgba(56,189,248,0.7)] hover:bg-primary/90 sm:w-auto"
              >
                <Zap className="size-4" data-icon="inline-start" />
                Jetzt Handwerker-Website anfragen
              </Button>
            </ProjectRequestDialog>
          </div>
        </div>
      </div>
    </section>
  )
}
