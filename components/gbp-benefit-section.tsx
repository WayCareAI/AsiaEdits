import { MapPin, TrendingUp } from 'lucide-react'

export function GbpBenefitSection() {
  return (
    <section id="google-business-profile" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium tracking-wide text-primary uppercase">
            Google Business Profile
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Warum eine Top-Website ohne Google Business Profile nur die
            halbe Miete ist
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <BenefitCard icon={MapPin}>
            Über 60 % aller lokalen Suchanfragen („Friseur in meiner Nähe“,
            „Dachdecker München“) laufen direkt über die Google-Karte (Local
            Map Pack). Wenn Dein Profil nicht optimal verknüpft ist,
            verlierst Du täglich heiße Neukunden.
          </BenefitCard>
          <BenefitCard icon={TrendingUp}>
            Wir verbinden Deine neue High-Performance Website nahtlos mit
            Deinem Google-Eintrag. Das Ergebnis: Höhere Ränge in den
            Suchergebnissen, lückenlos gepflegte Bewertungen und mehr
            Vertrauen bei lokalen Kunden.
          </BenefitCard>
        </div>
      </div>
    </section>
  )
}

function BenefitCard({
  icon: Icon,
  children,
}: {
  icon: typeof MapPin
  children: React.ReactNode
}) {
  return (
    <div className="relative rounded-2xl border border-border bg-card/60 p-8 sm:p-10">
      <span className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
        <Icon className="size-5" />
      </span>
      <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
        {children}
      </p>
    </div>
  )
}
