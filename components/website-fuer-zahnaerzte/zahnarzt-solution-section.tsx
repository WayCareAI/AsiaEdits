import {
  ClipboardList,
  MapPinCheck,
  MessageSquareHeart,
  Siren,
  UserPlus,
} from 'lucide-react'

const HIGHLIGHTS = [
  {
    icon: MessageSquareHeart,
    title:
      'Interaktives Patienten-Anfrageformular (Wunsch-Behandlung & Termin per Klick)',
    description:
      'Patienten wählen die gewünschte Behandlung, geben einen Wunschtermin an und senden die Anfrage direkt über die Website – ganz ohne Anruf während der Sprechstunde.',
  },
  {
    icon: ClipboardList,
    title:
      'Digitaler Neupatienten-Anamnesebogen (Zeitgewinn am Empfang)',
    description:
      'Neupatienten füllen den Anamnesebogen bequem vorab auf dem Smartphone aus – das spart wertvolle Zeit am Empfang und beim Ersttermin.',
  },
  {
    icon: UserPlus,
    title:
      '1-Klick-Express-Bewerbung für ZFA & Fachkräfte (60-Sekunden-Formular ohne Lebenslauf)',
    description:
      'Ein schlankes Express-Formular ohne Lebenslauf-Pflicht senkt die Einstiegshürde für Zahnmedizinische Fachangestellte und weitere Fachkräfte erheblich.',
  },
  {
    icon: Siren,
    title:
      'Schmerzpatienten- & Notfall-Service (Schnelle Orientierung für Ihre Region)',
    description:
      'Ein klar sichtbarer Notfall-Hinweis mit Kontaktweg und Notdienst-Informationen gibt Schmerzpatienten aus Ihrer Region sofortige Orientierung.',
  },
  {
    icon: MapPinCheck,
    title: 'Regionale Google-Dominanz (Local SEO für Ihre Region)',
    description:
      'Strukturierte Daten und regionale Keyword-Optimierung sorgen dafür, dass Ihre Praxis bei lokalen Suchanfragen ganz oben in den Ergebnissen erscheint.',
  },
]

export function ZahnarztSolutionSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2
          id="vorteile-asiaedits-zahnarzt-website"
          className="text-balance font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Die Lösung: Eine moderne Website für Zahnärzte mit schlanken
          Webformularen &amp; digitalen Praxis-Schnittstellen
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
          Statt auf schwergewichtige Baukasten-Systeme zu setzen, bauen
          wir Ihre Website für Zahnärzte auf einer modernen
          Jamstack-Architektur mit Next.js, React und Tailwind CSS auf.
          Inhalte werden bereits beim Build-Prozess in fertiges HTML
          umgewandelt und über ein globales Edge-Netzwerk ausgeliefert –
          Team-Fotos und Praxisrundgänge laden dadurch nahezu
          verzögerungsfrei, selbst auf mobilen Endgeräten. So wird Ihre
          Website für Zahnärzte zu einem digitalen Empfangsteam, das rund
          um die Uhr Terminanfragen entgegennimmt, Ihre Praxis
          professionell präsentiert und Neupatienten zuverlässig zu Ihnen
          führt – auch dann, wenn Ihr Team gerade voll ausgebucht ist.
          Gleichzeitig entfällt der Aufwand für Sicherheitsupdates,
          Plugin-Pflege und teure Wartungsverträge vollständig, sodass
          sich Ihre Praxis wieder auf das konzentrieren kann, was
          wirklich zählt: die Behandlung Ihrer Patientinnen und
          Patienten. Unser Team übernimmt dabei sämtliche technischen
          Details im Hintergrund, sodass für Sie und Ihr Praxisteam
          keinerlei zusätzlicher Verwaltungsaufwand entsteht.
        </p>

        <h3
          id="funktionale-highlights-zahnarzt"
          className="mt-10 font-heading text-lg font-semibold text-foreground"
        >
          Was eine performante Website für Ihre Zahnarztpraxis leistet:
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
