import { MapPin, PhoneCall, Smartphone } from 'lucide-react'

const METRICS = [
  {
    icon: Smartphone,
    label: 'Mobil-Performance',
    value: '95+ / 100',
    note: 'Google PageSpeed',
  },
  {
    icon: PhoneCall,
    label: 'Kunden-Anfragen',
    value: '100 %',
    note: 'Optimiert für schnelle Lead-Generierung auf der Baustelle / unterwegs',
  },
  {
    icon: MapPin,
    label: 'Lokale Sichtbarkeit',
    value: 'Lückenlos',
    note: 'Google Maps & Schema-Einbindung',
  },
]

export function HandwerkMetrics() {
  return (
    <section aria-labelledby="kennzahlen" className="relative pb-16 sm:pb-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 id="kennzahlen" className="sr-only">
          Die wichtigsten Kennzahlen im Überblick
        </h2>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
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
