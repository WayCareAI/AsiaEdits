import {
  Clock,
  ImageOff,
  MapPinOff,
  ReceiptText,
} from 'lucide-react'

const PAIN_POINTS = [
  {
    icon: Clock,
    title: 'Verpasste Patientenanfragen außerhalb der Sprechzeiten',
    description:
      'Ohne Online-Formulare gehen Anfragen abends, am Wochenende oder während laufender Behandlungen schlicht verloren – potenzielle Neupatienten wenden sich an die nächste erreichbare Praxis.',
  },
  {
    icon: ImageOff,
    title: 'Träge Ladezeiten bei Team-Fotos & Praxisrundgängen',
    description:
      'Hochauflösende Bilder von Praxisräumen und Team sollen Vertrauen schaffen – laden sie auf dem Smartphone jedoch zu langsam, springen Interessenten vorzeitig ab.',
  },
  {
    icon: MapPinOff,
    title: 'Ungenutztes Potenzial bei lokalen Google-Suchen',
    description:
      'Bei Suchanfragen wie "Zahnarzt in meiner Nähe" oder "Zahnarzt Ihr Stadtname / Ihre Region" taucht Ihre Praxis ohne strukturierte Local-SEO-Optimierung oft gar nicht in den oberen Ergebnissen auf.',
  },
  {
    icon: ReceiptText,
    title: 'Hohe Folgekosten & Pflegeaufwand komplexer CMS-Systeme',
    description:
      'Klassische Praxis-Homepages erfordern oft eine aufwendige Einarbeitung in komplizierte Content-Management-Systeme – Zeit, die am Empfang und bei der Patientenbetreuung fehlt.',
  },
]

export function ZahnarztPainPointsSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2
          id="probleme-klassische-zahnarzt-websites"
          className="text-balance font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Warum veraltete Praxis-Homepages Ihr Geschäft ausbremsen: Die 4
          häufigsten Herausforderungen
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
          Viele Terminanfragen für Zahnarztpraxen entstehen spontan –
          zwischen zwei Behandlungen, nach einem schmerzhaften Vorfall
          oder abends am Smartphone. Wer in diesem Moment keine schnelle,
          mobile Möglichkeit zur Kontaktaufnahme bietet, verpasst wertvolle
          Neupatientenanfragen. Genau hier scheitern viele klassische
          Praxis-Homepages, die primär für den Desktop-Bildschirm
          entwickelt wurden und den heutigen mobilen Nutzungsgewohnheiten
          kaum noch gerecht werden. Viele Praxen verlassen sich noch immer
          auf statische Homepages, die vor Jahren erstellt wurden und
          weder auf schnelle mobile Anfragen noch auf die veränderten
          Erwartungen moderner Patientinnen und Patienten ausgelegt sind.
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
