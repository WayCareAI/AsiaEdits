import { Camera, Hammer, LineChart, Users } from 'lucide-react'

const AUDIENCE = [
  {
    icon: Hammer,
    title: 'Lokale Dienstleister & Handwerker',
    description:
      'Schnelle Ladezeiten und ein souveräner erster Eindruck sorgen dafür, dass Anfragen ankommen, statt in einer langsam ladenden Seite verloren zu gehen.',
  },
  {
    icon: Users,
    title: 'Berater & B2B-Experten',
    description:
      'Ein professioneller, technisch einwandfreier Auftritt schafft sofort Vertrauen bei anspruchsvollen Entscheider:innen.',
  },
  {
    icon: Camera,
    title: 'Fotografen & Kreative',
    description:
      'Optimierte Bildauslieferung ohne Qualitätsverlust zeigt Portfolios in voller Schärfe – ganz ohne träge Ladezeiten.',
  },
  {
    icon: LineChart,
    title: 'Performance Marketing & Google Ads',
    description:
      'Bessere Core Web Vitals senken den Cost-per-Click und erhöhen den Qualitätsfaktor Deiner Landingpages direkt messbar.',
  },
]

export function AudienceSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2
          id="fuer-wen-eignet-sich-die-alternative"
          className="text-balance font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Für wen eignet sich der Wechsel auf eine moderne Next.js Website?
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
          Der Umstieg auf eine performante Jamstack-Architektur lohnt sich
          besonders für alle, deren Umsatz direkt von schnellen Ladezeiten,
          Sichtbarkeit in Suchmaschinen und einem professionellen ersten
          Eindruck abhängt.
        </p>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2">
          {AUDIENCE.map((item) => {
            const Icon = item.icon
            return (
              <li
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card/60 p-6"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
