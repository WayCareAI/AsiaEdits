import dynamic from 'next/dynamic'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ProjectRequestDialog = dynamic(() =>
  import('@/components/project-request-dialog').then(
    (mod) => mod.ProjectRequestDialog,
  ),
)

export function AuditCta() {
  return (
    <section className="relative pb-20 sm:pb-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl border border-primary/40 bg-gradient-to-b from-primary/[0.1] to-card p-8 text-center shadow-glow sm:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 left-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-primary/25 blur-[100px] [contain:strict]"
          />
          <h2 className="relative mx-auto max-w-2xl text-balance font-heading text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Möchtest du erfahren, wie barrierefreies Design und optimierte
            Nutzersignale deine Google-Rankings steigern können?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Wir analysieren deine Website kostenlos auf Accessibility und
            Performance.
          </p>
          <div className="relative mt-8 flex justify-center">
            <ProjectRequestDialog>
              <Button
                size="lg"
                className="h-11 w-full gap-2 bg-primary px-6 text-base text-primary-foreground shadow-[0_0_24px_-4px_rgba(56,189,248,0.7)] hover:bg-primary/90 sm:w-auto"
              >
                Projekt anfragen
                <ArrowRight className="size-4" />
              </Button>
            </ProjectRequestDialog>
          </div>
        </div>
      </div>
    </section>
  )
}
