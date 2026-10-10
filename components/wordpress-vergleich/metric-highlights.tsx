import { Gauge, ShieldCheck, Smartphone, Timer } from 'lucide-react'

const METRICS = [
  {
    icon: Gauge,
    label: 'Desktop PageSpeed Score',
    value: '100 / 100',
    note: 'Verified by Google PageSpeed Insights',
  },
  {
    icon: Smartphone,
    label: 'Mobile PageSpeed Score',
    value: '95+ / 100',
    note: 'Verified across Live Projects',
  },
  {
    icon: ShieldCheck,
    label: 'SEO & Best Practices',
    value: '100 / 100',
    note: 'Garantierter grüner Bereich',
  },
  {
    icon: Timer,
    label: 'Time to First Byte (TTFB)',
    value: '< 100ms',
    note: 'Ausgeliefert über das Edge-Netzwerk',
  },
]

export function MetricHighlights() {
  return (
    <section aria-labelledby="kennzahlen" className="relative pb-16 sm:pb-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 id="kennzahlen" className="sr-only">
          Die wichtigsten Kennzahlen im Überblick
        </h2>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map(({ icon: Icon, label, value, note }) => (
            <li
              key={label}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6"
            >
              <Icon aria-hidden className="size-5 text-primary" />
              <p className="text-sm text-muted-foreground">{label}</p>
              <p className="font-heading text-3xl font-semibold tracking-tight text-foreground">
                {value}
              </p>
              <p className="text-sm leading-relaxed text-primary">{note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
