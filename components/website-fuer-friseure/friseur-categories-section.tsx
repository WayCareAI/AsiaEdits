import { Scissors, Heart, Users, Car } from 'lucide-react'

const CATEGORIES = [
  {
    icon: Scissors,
    title: 'Damen- & Herren-Salons',
    description:
      'Coloration, Balayage und Schnitt-Pakete übersichtlich präsentiert – inklusive schneller Web-Formulare für die passende Terminanfrage.',
  },
  {
    icon: Heart,
    title: 'Brautstyling & Hochzeits-Spezialisten',
    description:
      'Eigene Bereiche für Probestecken, Event-Pakete und stimmungsvolle Galerien, die Ihre Braut-Looks ins beste Licht rücken.',
  },
  {
    icon: Users,
    title: 'Barber Shops',
    description:
      'Maskulines Design für Bartpflege und Cuts, kombiniert mit direktem WhatsApp-Kontakt für spontane Terminwünsche.',
  },
  {
    icon: Car,
    title: 'Mobile Stylisten & Inhouse-Services',
    description:
      'Klar definiertes Einzugsgebiet für Ihre Stadt oder Region, transparente Anfahrts-Konditionen und unkomplizierte Terminabsprache.',
  },
]

export function FriseurCategoriesSection() {
  return (
    <section className="border-t border-border py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2
          id="fuer-welche-salons"
          className="text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          Perfekt abgestimmt auf Ihr Salon-Konzept
        </h2>

        <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
          Jedes Salon-Konzept hat eigene Anforderungen an Inhalte,
          Bildsprache und Anfrage-Prozesse. Unsere Website für Friseure
          wird daher gezielt auf Ihr Konzept zugeschnitten – von der ersten
          Leistungsseite bis zur passenden regionalen SEO-Strategie. Egal
          ob klassischer Familiensalon oder spezialisierter Barber Shop:
          Wir übersetzen Ihr Angebot in eine Website, der potenzielle
          Kundinnen und Kunden auf Anhieb vertrauen. So wirkt Ihr Salon
          von der ersten Sekunde an professionell, vertrauenswürdig und
          genau so hochwertig, wie es Ihre Arbeit tatsächlich ist.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {CATEGORIES.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className="rounded-xl border border-slate-800 bg-card p-6"
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="size-5 text-primary" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
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
