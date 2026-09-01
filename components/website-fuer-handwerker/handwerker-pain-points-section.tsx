import { FileWarning, MapPinOff, MessageSquareWarning, SignalLow } from 'lucide-react'

const PAIN_POINTS = [
  {
    icon: SignalLow,
    title: 'Zähe Ladezeiten im mobilen Mobilfunknetz (3G/4G Baustellen-Speed)',
    description:
      'Auf der Baustelle oder beim Kunden vor Ort zählt jede Sekunde. Schwergewichtige Baukasten-Websites brauchen bei schwachem Mobilfunkempfang oft mehrere Sekunden, bis überhaupt etwas sichtbar ist.',
  },
  {
    icon: FileWarning,
    title: 'Unlesbare PDF-Leistungsverzeichnisse auf Smartphones',
    description:
      'Statt klarer, mobil optimierter Leistungsübersichten verstecken viele Handwerker-Websites ihr Angebot in winzig gezoomten PDF-Dateien, die auf dem Smartphone kaum zu bedienen sind.',
  },
  {
    icon: MessageSquareWarning,
    title: 'Umständliche Kontaktwege ohne Schnell-Formular',
    description:
      'Wer erst eine E-Mail-App öffnen oder lange Formularfelder ausfüllen muss, springt ab. Ohne ein schnelles Anfrage-Modal verlieren Sie spontane, kaufbereite Anfragen direkt an die Konkurrenz.',
  },
  {
    icon: MapPinOff,
    title: 'Unsichtbarkeit bei der regionalen Google-Suche (Fehlendes Local SEO)',
    description:
      'Ohne strukturierte, regionale SEO-Optimierung taucht Ihr Betrieb bei Suchanfragen wie "Handwerker in meiner Nähe" schlicht nicht auf – und die Anfrage geht an den sichtbaren Mitbewerber.',
  },
]

export function HandwerkerPainPointsSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2
          id="probleme-klassische-handwerker-websites"
          className="text-balance font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Warum klassische Handwerker-Websites meist scheitern: Die 4
          großen Schwachstellen
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
          Über 80 % aller Anfragen für regionale Handwerksleistungen
          werden heute über das Smartphone recherchiert &ndash; oft direkt
          von der Baustelle, aus dem Auto oder in der kurzen Pause
          zwischen zwei Terminen. Genau in diesem Moment entscheidet sich,
          ob ein potenzieller Kunde bei Ihnen anruft oder bei der
          nächstbesten Alternative in der Suchergebnisliste landet. Viele
          Handwerksbetriebe verlassen sich dabei noch immer auf veraltete
          Baukasten-Homepages, die vor Jahren primär für den
          Desktop-Bildschirm entwickelt wurden und den heutigen mobilen
          Nutzungsgewohnheiten kaum noch gerecht werden.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {PAIN_POINTS.map((point) => {
            const Icon = point.icon
            return (
              <div
                key={point.title}
                className="flex flex-col gap-3 rounded-xl border border-slate-800 bg-card/60 p-6"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                  <Icon className="size-5" />
                </span>
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {point.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
