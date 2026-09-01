import { CalendarX, ImageOff, MapPinOff, FileWarning } from 'lucide-react'

const PAIN_POINTS = [
  {
    icon: CalendarX,
    title: 'Verpasste Anfragen außerhalb der Öffnungszeiten',
    description:
      'Ohne Online-Formular können Kundinnen und Kunden nur während der Salon-Öffnungszeiten anrufen. Jede Anfrage am Abend oder am Wochenende geht schlicht verloren.',
  },
  {
    icon: ImageOff,
    title: 'Träge Ladezeiten bei Bildgalerien auf Smartphones',
    description:
      'Unkomprimierte Vorher/Nachher-Fotos und Lookbooks lassen klassische Baukasten-Websites auf dem Handy quälend langsam laden – potenzielle Neukunden springen vorher ab.',
  },
  {
    icon: MapPinOff,
    title: 'Keine Sichtbarkeit bei lokalen Google-Suchen',
    description:
      'Ohne strukturierte, regionale SEO-Optimierung erscheint Ihr Salon bei Suchanfragen wie "Friseur in meiner Nähe" gar nicht – und die Anfrage geht an den sichtbaren Mitbewerber.',
  },
  {
    icon: FileWarning,
    title: 'Unübersichtliche Preistabellen & schwer lesbare PDFs',
    description:
      'Eingescannte Preislisten als PDF-Download sind auf dem Smartphone kaum lesbar und schrecken Interessent:innen ab, bevor überhaupt eine Anfrage gestellt wird.',
  },
]

export function FriseurPainPointsSection() {
  return (
    <section className="border-t border-border py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2
          id="probleme-klassische-friseur-websites"
          className="text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          Warum veraltete Friseur-Homepages Ihr Geschäft ausbremsen: Die 4
          häufigsten Hürden
        </h2>

        <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
          Viele Terminanfragen für Friseursalons entstehen spontan – abends
          auf dem Sofa, in der Mittagspause oder direkt nach dem Blick in
          den Spiegel. Wer in diesem Moment keine schnelle, mobile
          Möglichkeit zur Kontaktaufnahme bietet, verliert die Anfrage an
          den nächsten Salon in der Google-Ergebnisliste. Genau hier
          scheitern klassische Baukasten-Homepages regelmäßig. Viele
          Salons verlassen sich noch immer auf statische Homepages, die
          vor Jahren primär für den Desktop-Bildschirm entwickelt wurden
          und den heutigen mobilen Nutzungsgewohnheiten Ihrer Kundinnen
          und Kunden kaum noch gerecht werden.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {PAIN_POINTS.map((point) => {
            const Icon = point.icon
            return (
              <div
                key={point.title}
                className="rounded-xl border border-slate-800 bg-card p-6"
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-destructive/10">
                  <Icon className="size-5 text-destructive" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
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
