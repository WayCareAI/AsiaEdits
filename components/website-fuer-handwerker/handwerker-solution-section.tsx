import { Gauge, MapPinCheck, MessageSquareText, UserPlus } from 'lucide-react'

const HIGHLIGHTS = [
  {
    icon: Gauge,
    title: 'Garantierte mobile Höchstgeschwindigkeit (PageSpeed 90-100)',
    description:
      'Statisch vorgerenderte Seiten laden auf dem Smartphone nahezu verzögerungsfrei – auch bei schwachem 3G/4G-Empfang auf der Baustelle.',
  },
  {
    icon: MapPinCheck,
    title: 'Gezielte Regionale Google-Sichtbarkeit (Local SEO & Schema.org)',
    description:
      'Strukturierte Daten und regionale Keyword-Optimierung sorgen dafür, dass Ihr Betrieb bei lokalen Suchanfragen ganz oben erscheint.',
  },
  {
    icon: MessageSquareText,
    title: 'Interaktives Quick-Anfrage-Modal (unter 30 Sek. ausfüllbar)',
    description:
      'Statt langer Formulare oder E-Mail-Umwege erhalten Kunden ein schlankes Anfrage-Modal, das in weniger als 30 Sekunden ausgefüllt ist.',
  },
  {
    icon: UserPlus,
    title: 'Mitarbeiter- & Azubi-Gewinnung (Express-Bewerbung ohne Lebenslauf)',
    description:
      'Ein integriertes Express-Bewerbungsformular ohne Lebenslauf-Pflicht senkt die Einstiegshürde für Fachkräfte und Azubis deutlich.',
  },
]

export function HandwerkerSolutionSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2
          id="vorteile-asiaedits-handwerker-website"
          className="text-balance font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Die Lösung: Eine moderne Website für Handwerker als digitaler
          24/7-Mitarbeiter
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
          Statt auf schwergewichtige Baukasten-Systeme zu setzen, bauen
          wir Ihre Website für Handwerker auf einer modernen
          Jamstack-Architektur mit Next.js, React und Tailwind CSS auf.
          Inhalte werden bereits beim Build-Prozess in fertiges HTML
          umgewandelt und über ein globales Edge-Netzwerk ausgeliefert
          &ndash; das Ergebnis ist eine Website, die auf dem Smartphone
          sofort lädt, egal wie schwach die Mobilfunkverbindung auf der
          Baustelle gerade ist. So wird Ihre Website für Handwerker zu
          einem digitalen Mitarbeiter, der rund um die Uhr Anfragen
          entgegennimmt, Ihr Leistungsspektrum professionell präsentiert
          und regionale Kunden zuverlässig zu Ihnen führt &ndash; auch
          dann, wenn Ihr Team gerade selbst auf der Baustelle ist.
        </p>

        <h3
          id="funktionale-highlights-handwerker"
          className="mt-10 font-heading text-lg font-semibold text-foreground"
        >
          Was eine performante Website für Handwerker leistet:
        </h3>

        <ol className="mt-6 grid gap-5 sm:grid-cols-2">
          {HIGHLIGHTS.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <li
                key={highlight.title}
                className="flex gap-4 rounded-xl border border-primary/20 bg-gradient-to-b from-primary/[0.06] to-card p-6"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 font-heading text-sm font-semibold text-primary">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h4 className="flex items-center gap-2 font-heading text-base font-semibold text-foreground">
                    <Icon className="size-4 text-primary" />
                    <span>{highlight.title}</span>
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
