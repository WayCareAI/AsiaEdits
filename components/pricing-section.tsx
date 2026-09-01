import dynamic from 'next/dynamic'
import { Check, Rocket, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const ProjectRequestDialog = dynamic(() =>
  import('@/components/project-request-dialog').then(
    (mod) => mod.ProjectRequestDialog,
  ),
)

const SUBSCRIPTION_FEATURES = [
  'Design & Erstellung Deiner Website',
  'Premium High-Speed Cloud-Hosting inklusive',
  'WDF*IDF SEO- & Meta-Setup inklusive',
  'Regelmäßige kleine Content- & Textanpassungen',
  'Monatlich kündbar – keine Vertragsbindung',
  'Google Business Profile Basis-Setup & GEO-Optimierung inklusive',
]

const BUYOUT_FEATURES = [
  'Komplette Erstellung & Quellcode-Übergabe',
  '24 Monate High-Speed Cloud-Hosting GRATIS',
  'Danach nur 19 € / Jahr für Hosting',
  'Volle On-Page SEO-Optimierung (Metas & Schemas)',
  'WDF*IDF-optimierte Texte inklusive',
  'Schlüsselfertiges Google-Maps-Setup & Profile-Verknüpfung',
]

const GBP_ADDON_FEATURES = [
  'Automatisierte 24/7-Bewertungs-Antworten: Jede Google-Rezension wird binnen Minuten professionell, empathisch & SEO-optimiert beantwortet',
  "Local Keyword & Kategorien-Pflege: Optimierung für maximale Sichtbarkeit bei „in meiner Nähe“-Suchen",
  'Reputations-Schutz & Deeskalation: Schnelles Handeln bei kritischen Reviews inklusive Vorlagen-Klärung',
  'Monatliche Google-Posts: 1–2 lokale Beiträge/Aktionen pro Monat für stetige Aktivitäts-Signale an den Google-Algorithmus',
  'Inklusive QR-Code-Druckvorlage: Fertig gestaltete Kärtchen/Aufsteller zum mühelosen Einsammeln von 5-Sterne-Bewertungen vor Ort',
]

export function PricingSection() {
  return (
    <section
      id="preise"
      className="relative max-w-full overflow-hidden py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-primary/10 blur-[140px] [contain:strict]"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium tracking-wide text-primary uppercase">
            Preise
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Faire Preise, volle Transparenz.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Wähle das Modell, das zu Deinem Business passt – beide Pakete
            enthalten volle On-Page SEO & Meta-Tagging.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <PricingCard
            badge="Website-as-a-Service"
            title="Smart Subscription"
            priceLine={
              <>
                <span className="font-heading text-4xl font-semibold text-foreground">
                  199 €
                </span>
                <span className="text-sm text-muted-foreground">
                  {' '}
                  einmalig Setup
                </span>
              </>
            }
            secondaryPrice="+ 39 € / Monat, monatlich kündbar"
            features={SUBSCRIPTION_FEATURES}
            ctaLabel="Abo starten"
            defaultPackage="subscription"
          />
          <PricingCard
            badge="Beliebtester Deal"
            highlight
            title="One-Time Buyout"
            priceLine={
              <span className="font-heading text-4xl font-semibold text-foreground">
                699 €
              </span>
            }
            secondaryPrice="einmalig – Dir gehört alles"
            features={BUYOUT_FEATURES}
            ctaLabel="Projekt anfragen"
            defaultPackage="buyout"
          />
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Beide Pakete: On-Page SEO &amp; Meta-Tagging{' '}
          <span className="font-medium text-primary">INKLUSIVE</span>.
        </p>

        <div className="mt-10 rounded-2xl border border-primary/30 bg-gradient-to-b from-primary/[0.08] to-card p-8 sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl">
              <Badge className="gap-1.5 bg-primary/15 px-3 py-1 text-primary">
                <Rocket className="size-3" />
                Add-on
              </Badge>
              <h3 className="mt-4 font-heading text-2xl font-semibold text-foreground">
                Local Google Booster: GBP Care &amp; Review Push
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                Sichere Dir maximale Sichtbarkeit auf der Google-Karte und
                automatisiere Deine Kunden-Bewertungen auf Autopilot.
              </p>

              <div className="mt-6 flex flex-wrap items-baseline gap-3">
                <span className="font-heading text-3xl font-semibold text-foreground">
                  49 €
                </span>
                <span className="text-sm text-muted-foreground">/ Monat</span>
              </div>
              <Badge
                variant="secondary"
                className="mt-3 gap-1 border-border bg-secondary text-xs text-muted-foreground"
              >
                Monatlich kündbar · Perfekt kombinierbar
              </Badge>

              <ProjectRequestDialog defaultPackage="gbp-care">
                <Button
                  size="lg"
                  className="mt-8 h-11 w-full justify-center text-base bg-primary text-primary-foreground shadow-[0_0_24px_-4px_rgba(56,189,248,0.7)] hover:bg-primary/90 lg:w-auto"
                >
                  GBP-Care dazubuchen
                </Button>
              </ProjectRequestDialog>
            </div>

            <ul className="flex flex-1 flex-col gap-3.5 lg:max-w-xl">
              {GBP_ADDON_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="text-sm leading-relaxed text-foreground/90">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function PricingCard({
  badge,
  title,
  priceLine,
  secondaryPrice,
  features,
  ctaLabel,
  defaultPackage,
  highlight = false,
}: {
  badge: string
  title: string
  priceLine: React.ReactNode
  secondaryPrice: string
  features: string[]
  ctaLabel: string
  defaultPackage: string
  highlight?: boolean
}) {
  return (
    <div
      className={cn(
        'relative flex flex-col rounded-2xl border p-8 sm:p-10',
        highlight
          ? 'border-primary/50 bg-gradient-to-b from-primary/[0.1] to-card shadow-glow'
          : 'border-border bg-card/60',
      )}
    >
      {highlight && (
        <Badge className="absolute -top-3 left-8 gap-1 bg-primary px-3 py-1 text-primary-foreground">
          <Sparkles className="size-3" />
          {badge}
        </Badge>
      )}
      {!highlight && (
        <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          {badge}
        </span>
      )}

      <h3 className="mt-4 font-heading text-2xl font-semibold text-foreground">
        {title}
      </h3>

      <div className="mt-6">{priceLine}</div>
      <p className="mt-1 text-sm text-muted-foreground">{secondaryPrice}</p>

      <ul className="mt-8 flex flex-1 flex-col gap-3.5">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className="mt-0.5 size-4 shrink-0 text-primary" />
            <span className="text-sm leading-relaxed text-foreground/90">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <ProjectRequestDialog defaultPackage={defaultPackage}>
        <Button
          size="lg"
          className={cn(
            'mt-8 h-11 w-full justify-center text-base',
            highlight
              ? 'bg-primary text-primary-foreground shadow-[0_0_24px_-4px_rgba(56,189,248,0.7)] hover:bg-primary/90'
              : 'border border-border bg-transparent text-foreground hover:bg-secondary',
          )}
        >
          {ctaLabel}
        </Button>
      </ProjectRequestDialog>
    </div>
  )
}
