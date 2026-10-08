const metrics = [
  {
    label: 'CTR im Suchergebnis',
    value: '9,2%',
    note: 'Branchendurchschnitt: 2-3%',
  },
  {
    label: 'Lead-Steigerung',
    value: '+10%',
    note: 'Qualifizierte Anfragen seit Go-Live',
  },
  {
    label: 'Rankingsprung',
    value: 'Pos. 14,9',
    note: 'Schnitt in den ersten 28 Tagen',
  },
  {
    label: 'Mobile PageSpeed',
    value: '90+',
    note: 'Garantierte Core Web Vitals',
  },
]

export function CaseStudyMetrics() {
  return (
    <section aria-labelledby="kennzahlen" className="pb-12 sm:pb-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 id="kennzahlen" className="sr-only">
          Die wichtigsten Kennzahlen
        </h2>
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-glow"
            >
              <dt className="text-sm font-medium text-muted-foreground">
                {metric.label}
              </dt>
              <dd className="mt-3 font-heading text-4xl font-semibold tracking-tight text-primary text-glow">
                {metric.value}
              </dd>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {metric.note}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
