import { ClipboardList, MessageCircle, Images, MapPin } from 'lucide-react'

const HIGHLIGHTS = [
  {
    icon: ClipboardList,
    title: 'Interaktives Anfrage-Webformular',
    description:
      'Kundinnen und Kunden wählen Wunsch-Uhrzeit und Dienstleistung direkt per Klick aus – die Anfrage landet strukturiert und sofort in Ihrem Postfach.',
  },
  {
    icon: MessageCircle,
    title: '1-Klick WhatsApp-Kontakt-Widget',
    description:
      'Ein sichtbares WhatsApp-Widget ermöglicht direkte Rückfragen ohne Umwege über E-Mail oder Kontaktformular – ideal für spontane Terminwünsche.',
  },
  {
    icon: Images,
    title: 'Ultra-schnelle Bildgalerien',
    description:
      'Vorher/Nachher-Fotos und Lookbooks laden dank optimierter Next.js-Bildauslieferung mit PageSpeed-Werten von 90–100 nahezu verzögerungsfrei.',
  },
  {
    icon: MapPin,
    title: 'Regionale Google-Dominanz',
    description:
      'Werkseitig integriertes Local SEO sorgt dafür, dass Ihr Salon bei Suchanfragen für Ihre Stadt oder Region sichtbar auf den vorderen Plätzen erscheint.',
  },
]

export function FriseurSolutionSection() {
  return (
    <section className="border-t border-border py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2
          id="vorteile-asiaedits-friseur-website"
          className="text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          Die Lösung: Eine moderne Website für Friseure mit schlanken
          Webformularen & WhatsApp-Direktkontakt
        </h2>

        <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
          Statt auf schwergewichtige Baukasten-Systeme zu setzen, bauen wir
          Ihre Website für Friseure auf einer modernen Jamstack-Architektur
          mit Next.js, React und Tailwind CSS auf. Inhalte werden bereits
          beim Build-Prozess in fertiges HTML umgewandelt und über ein
          globales Edge-Netzwerk ausgeliefert – das Ergebnis ist eine
          Website, die auf dem Smartphone sofort lädt und rund um die Uhr
          neue Terminanfragen entgegennimmt, ganz ohne monatliche
          Zusatzgebühren für externe Buchungstools oder Drittanbieter. So
          wird Ihre Website für Friseure zu einem digitalen Empfangsteam,
          das rund um die Uhr Anfragen entgegennimmt, Ihre Arbeiten
          professionell präsentiert und Neukunden zuverlässig zu Ihnen
          führt – auch dann, wenn Ihr Team gerade voll ausgebucht ist.
        </p>

        <h3
          id="funktionale-highlights-friseur"
          className="mt-10 font-heading text-xl font-semibold text-foreground"
        >
          Was eine performante Website für Ihren Friseursalon leistet:
        </h3>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {HIGHLIGHTS.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="flex gap-4 rounded-xl border border-slate-800 bg-card p-6"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-heading text-sm font-bold text-primary">
                  {index + 1}
                </div>
                <div>
                  <h4 className="flex items-center gap-2 font-heading text-base font-semibold text-foreground">
                    <Icon className="size-4 text-primary" />
                    <span>{item.title}</span>
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
