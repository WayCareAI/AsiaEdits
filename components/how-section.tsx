import { LineChart, Rocket, Wand2 } from 'lucide-react'

const STEPS = [
  {
    number: '01',
    icon: LineChart,
    title: 'Datengestütztes SEO-Briefing',
    description:
      'Wir analysieren Deine Nische & erstellen WDF*IDF-optimierte Texte sowie perfekte Meta-Tags für maximale Google-Sichtbarkeit.',
  },
  {
    number: '02',
    icon: Wand2,
    title: 'High-End Component Engineering',
    description:
      'Erstellung maßgeschneiderter, ultraschneller UI-Komponenten exakt nach Deinen Wünschen über modernste Entwicklungsumgebungen.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Global High-Speed Deployment',
    description:
      'Live-Schaltung auf weltweiter Enterprise-Cloud-Infrastruktur mit garantierter Spitzen-Performance.',
  },
]

export function HowSection() {
  return (
    <section id="workflow" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium tracking-wide text-primary uppercase">
            Der Workflow
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Der High-Speed Workflow
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Von der ersten Analyse bis zum Live-Gang – ein klar strukturierter
            Prozess ohne Reibungsverluste.
          </p>
        </div>

        <div className="relative mt-16 grid gap-6 lg:grid-cols-3">
          <div
            aria-hidden
            className="absolute top-14 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block"
          />
          {STEPS.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="group relative flex flex-col rounded-2xl border border-border bg-card/60 p-8 transition-colors hover:border-primary/40"
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-shadow group-hover:shadow-[0_0_24px_-4px_rgba(56,189,248,0.7)]">
                    <Icon className="size-5" />
                  </div>
                  <span className="font-heading text-4xl font-semibold text-foreground/10">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-6 font-heading text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
