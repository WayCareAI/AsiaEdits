import dynamic from 'next/dynamic'
import {
  ArrowRight,
  CalendarDays,
  Clock,
  Gauge,
  Timer,
  TrendingDown,
  TrendingUp,
  Zap,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const ProjectRequestDialog = dynamic(() =>
  import('@/components/project-request-dialog').then(
    (mod) => mod.ProjectRequestDialog,
  ),
)

const METRICS = [
  {
    icon: Timer,
    label: 'Ziel-LCP',
    value: '< 1,0 Sek.',
    description: 'Branchenweit führende Ladezeit',
  },
  {
    icon: Gauge,
    label: 'Mobile PageSpeed',
    value: '90+',
    description: 'Garantierte Höchstnote',
  },
  {
    icon: TrendingDown,
    label: 'Absprungrate',
    value: 'Bis zu -50%',
    description: 'Bei Ladezeiten unter einer Sekunde',
  },
  {
    icon: TrendingUp,
    label: 'Conversion-Plus',
    value: '+15-20%',
    description: 'Durch unmittelbar reagierende Benutzeroberflächen',
  },
]

export function ArticleHero() {
  return (
    <section className="relative max-w-full overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-16">
      <div
        aria-hidden
        className="pointer-events-none absolute top-[-10%] left-1/2 h-[420px] w-[720px] -translate-x-1/2 overflow-hidden rounded-full bg-primary/20 blur-[120px] [contain:strict]"
      />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <Badge
            variant="outline"
            className="h-auto max-w-full border-primary/40 bg-primary/5 px-4 py-1.5 text-center whitespace-normal text-primary uppercase shadow-[0_0_20px_-6px_rgba(56,189,248,0.7)]"
          >
            <Zap className="size-3.5" data-icon="inline-start" />
            Web Performance &amp; Tech SEO
          </Badge>

          <h1 className="mt-6 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Core Web Vitals 2026: Warum LCP unter 1,0 Sekunden über deine
            B2B-Conversions entscheidet
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Wie extrem kurze Ladezeiten, geringe Latenzen und optimierte Core
            Web Vitals die Absprungrate senken und Google-Spitzenplätze
            sichern.
          </p>

          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-1.5">
              <Clock className="size-4 text-primary" aria-hidden />
              <span>8 min Lesezeit</span>
            </li>
            <li className="flex items-center gap-1.5">
              <CalendarDays className="size-4 text-primary" aria-hidden />
              <span>Oktober 2026</span>
            </li>
          </ul>

          <div className="mt-8 flex justify-center">
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

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((metric) => {
            const Icon = metric.icon
            return (
              <li
                key={metric.label}
                className="flex flex-col gap-2 rounded-2xl border border-border bg-card/60 p-5"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden />
                </span>
                <p className="mt-2 text-sm font-medium text-muted-foreground">
                  {metric.label}
                </p>
                <p className="text-balance font-heading text-2xl font-semibold tracking-tight text-foreground">
                  {metric.value}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {metric.description}
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
