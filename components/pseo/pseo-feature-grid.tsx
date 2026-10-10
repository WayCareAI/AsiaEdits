import { Gauge, ShieldCheck, Smartphone, Search, Lock, LineChart } from 'lucide-react'
import { PageSpeedBadge } from '@/components/pseo/pagespeed-badge'

const FEATURES = [
  {
    icon: Gauge,
    title: 'Garantierter Mobile PageSpeed 90+',
    description:
      'Next.js Rendering & Bild-Optimierung sorgen für Ladezeiten unter 1 Sekunde, garantiert.',
  },
  {
    icon: Search,
    title: 'Local SEO Struktur',
    description:
      'Strukturierte Daten, Meta-Tags & saubere URLs für Top-Rankings bei lokalen Suchanfragen.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description:
      'Über 70 % Deiner Kunden suchen mobil – jede Seite ist für Smartphones optimiert.',
  },
  {
    icon: ShieldCheck,
    title: 'Security Headers',
    description:
      'HTTPS, CSP & Hardening nach aktuellem Standard – sicher für Dich und Deine Besucher.',
  },
  {
    icon: Lock,
    title: 'DSGVO-konform',
    description:
      'Datenschutz & Impressum rechtssicher integriert, ohne Cookie-Banner-Chaos.',
  },
  {
    icon: LineChart,
    title: 'Core Web Vitals Monitoring',
    description:
      'Laufende Überwachung von LCP, CLS & INP, damit Deine Website dauerhaft schnell bleibt.',
  },
]

export function PseoFeatureGrid() {
  return (
    <section id="technische-vorteile" className="border-y border-border bg-card/30 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="text-sm font-medium tracking-wide text-primary uppercase">
              Technik im Detail
            </span>
            <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Wie wir Deine Website technisch überlegen machen
            </h2>
          </div>
          <PageSpeedBadge className="sm:hidden" />
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card/50 p-6"
            >
              <span className="flex size-10 items-center justify-center rounded-lg border border-primary/40 bg-primary/5 text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
