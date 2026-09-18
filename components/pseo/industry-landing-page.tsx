import { notFound } from 'next/navigation'
import { getIndustryBySlug, ALL_CITIES } from '@/src/data/pseoDatabase'
import { generatePSEOContent } from '@/src/lib/pseoContentEngine'
import type { IndustryKeywordType } from '@/src/lib/industryMetadata'
import { PseoHeader } from './pseo-header'
import { PseoFooter } from './pseo-footer'
import { PseoHero } from './pseo-hero'
import { PseoContentSection } from './pseo-content-section'
import { PseoFeatureGrid } from './pseo-feature-grid'
import { PseoLocalBoosterCard } from './pseo-local-booster-card'
import { PseoLinksGrid } from './pseo-links-grid'
import { PseoLeadForm } from './pseo-lead-form'

interface IndustryLandingPageProps {
  industrySlug: string
  keywordType: IndustryKeywordType
}

export function IndustryLandingPage({ industrySlug, keywordType }: IndustryLandingPageProps) {
  const industry = getIndustryBySlug(industrySlug)

  if (!industry) {
    notFound()
  }

  const content = generatePSEOContent(undefined, industry, keywordType)
  const eyebrowLabel = keywordType === 'website' ? 'Website für' : 'Webdesign für'
  const ctaLabel = keywordType === 'website' ? 'Website' : 'Webdesign'

  const featuredCityItems = ALL_CITIES.filter((c) => c.regionType === 'city')
    .slice(0, 6)
    .map((c) => ({
      label: `${industry.name} Website ${c.name}`,
      sublabel: c.state,
      href: `/webdesign/${c.slug}`,
    }))

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <PseoHeader />
      <main>
        <PseoHero
          eyebrow={`${eyebrowLabel} ${industry.pluralName}`}
          title={content.heroTitle}
          subtitle={content.heroSubtitle}
          whyText={content.whyText}
          badges={content.wdfKeywords}
        />
        <PseoContentSection
          id="unsere-loesung"
          eyebrow="Wie wir es lösen"
          heading="Unsere technische Lösung"
          text={content.howText}
        />
        <PseoFeatureGrid />
        <PseoContentSection
          eyebrow="Was Du bekommst"
          heading="Dein Komplettpaket"
          text={content.whatText}
        />
        <PseoLocalBoosterCard title={content.boosterTitle} features={content.boosterFeatures} />
        <PseoLinksGrid
          heading={`${industry.pluralName} Websites in diesen Städten`}
          description={`Wir erstellen High-Speed Websites für ${industry.pluralName} auch in diesen Regionen.`}
          items={featuredCityItems}
        />
        <PseoLeadForm
          heading={`${ctaLabel} für Deine ${industry.name}-Praxis anfragen`}
          description="Erzähl uns kurz von Deinem Vorhaben – wir melden uns unverbindlich innerhalb von 12 Stunden zurück."
          subjectTag={`⚡ Neue Anfrage ${ctaLabel} ${industry.name} asiaedits.com`}
        />
      </main>
      <PseoFooter />
    </div>
  )
}
