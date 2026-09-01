import { Smile, Sparkles, Syringe } from 'lucide-react'

const CATEGORIES = [
  {
    icon: Smile,
    title: 'Allgemeine Zahnmedizin & Prophylaxe',
    description:
      'Familienfreundliche Praxisdarstellung mit Fokus auf Vorsorge, Recall-Erinnerungen und schnelle Terminanfragen für die ganze Familie.',
  },
  {
    icon: Sparkles,
    title: 'Kieferorthopädie & Ästhetische Zahnheilkunde',
    description:
      'Visuelle Schwerpunkte auf Aligner-Behandlungen, professionelles Bleaching und Veneers – klar präsentiert mit hochwertiger Bildsprache.',
  },
  {
    icon: Syringe,
    title: 'Spezialpraxen (Implantologie, Oralchirurgie & Angstpatienten)',
    description:
      'Sensible Aufklärung zu Narkoseoptionen, Behandlungsabläufen und Angstpatienten-Betreuung schafft von Anfang an Vertrauen.',
  },
]

export function ZahnarztCategoriesSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2
          id="fuer-welche-praxen"
          className="text-balance font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Perfekt abgestimmt auf Ihre Praxis-Spezialisierung
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
          Jede Praxisform hat eigene Anforderungen an Inhalte,
          Bildsprache und Anfrage-Prozesse. Unsere Website für Zahnärzte
          wird daher gezielt auf Ihre Spezialisierung zugeschnitten – von
          der ersten Leistungsseite bis zur passenden regionalen
          SEO-Strategie. Egal ob familienfreundliche Praxis für
          Allgemeinmedizin oder hochspezialisierte Fachpraxis: Wir
          übersetzen Ihr Leistungsspektrum in eine Website, der
          potenzielle Patientinnen und Patienten auf Anhieb vertrauen. So
          wirkt Ihre Praxis von der ersten Sekunde an professionell,
          vertrauenswürdig und genau so hochwertig, wie es Ihre
          Behandlungsqualität tatsächlich verdient.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {CATEGORIES.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className="flex flex-col gap-3 rounded-xl border border-slate-800 bg-card/60 p-6"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {category.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {category.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
