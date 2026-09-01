import { Car, Hammer, Thermometer, Zap } from 'lucide-react'

const BRANCHES = [
  {
    icon: Thermometer,
    title: 'Sanitär, Heizung & Klima (SHK)',
    description:
      'Notfall-Kontaktwege, Wartungsvertrag-Übersichten und regionale Sichtbarkeit für Heizungs- und Klimatechnik-Betriebe.',
  },
  {
    icon: Zap,
    title: 'Elektrotechnik & Elektronik (PV & Wallboxen)',
    description:
      'Speziell aufbereitete Leistungsseiten für Photovoltaik, Wallbox-Installation und klassische Elektroinstallation.',
  },
  {
    icon: Hammer,
    title: 'Bau- & Ausbaugewerke (Schreiner, Maler, Dachdecker, Tischler)',
    description:
      'Bildstarke Projektgalerien und Leistungsübersichten, die handwerkliche Qualität auch auf dem Smartphone überzeugend zeigen.',
  },
  {
    icon: Car,
    title: 'Kfz-Betriebe & Werkstätten',
    description:
      'Schnelle Terminanfragen, Leistungsübersichten und lokale Sichtbarkeit für Werkstätten, Reifenservice und Kfz-Meisterbetriebe.',
  },
]

export function HandwerkerBranchesSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2
          id="fuer-welche-gewerke"
          className="text-balance font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Maßgeschneiderte Lösungen für alle Branchen des Handwerks
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
          Jedes Gewerk hat eigene Anforderungen an Inhalte, Bildsprache
          und Anfrage-Prozesse. Unsere Website für Handwerker wird daher
          gezielt auf Ihre Branche zugeschnitten – von der ersten
          Leistungsseite bis zur passenden regionalen SEO-Strategie.
          Egal ob klassisches Traditionsgewerk oder spezialisierter
          Nischenbetrieb: Wir übersetzen Ihr Leistungsspektrum in eine
          Website, die potenzielle Kunden auf Anhieb verstehen und der
          sie sofort vertrauen.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {BRANCHES.map((branch) => {
            const Icon = branch.icon
            return (
              <div
                key={branch.title}
                className="flex flex-col gap-3 rounded-xl border border-slate-800 bg-card/60 p-6"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {branch.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {branch.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
