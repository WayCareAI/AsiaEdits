import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getIndustryBySlug, getAllIndustrySlugs, ALL_CITIES } from '@/src/data/pseoDatabase'
import { generatePSEOContent } from '@/src/lib/pseoContentEngine'
import { PseoHeader } from '@/components/pseo/pseo-header'
import { PseoFooter } from '@/components/pseo/pseo-footer'
import { PseoHero } from '@/components/pseo/pseo-hero'
import { PseoContentSection } from '@/components/pseo/pseo-content-section'
import { PseoFeatureGrid } from '@/components/pseo/pseo-feature-grid'
import { PseoLocalBoosterCard } from '@/components/pseo/pseo-local-booster-card'
import { PseoLinksGrid } from '@/components/pseo/pseo-links-grid'
import { PseoLeadForm } from '@/components/pseo/pseo-lead-form'

interface PageProps {
  params: Promise<{ industry: string }>
}

export function generateStaticParams() {
  return getAllIndustrySlugs().map((industry) => ({ industry }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { industry: industrySlug } = await params
  const industry = getIndustryBySlug(industrySlug)

  if (!industry) {
    return { title: 'Seite nicht gefunden | asiaedits.com' }
  }

  const content = generatePSEOContent(undefined, industry)

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    keywords: industry.keywords,
    alternates: {
      canonical: `https://www.asiaedits.com/branchen/${industry.slug}`,
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: `https://www.asiaedits.com/branchen/${industry.slug}`,
      siteName: 'asiaedits.com',
      images: [
        {
          url: '/opengraph-image.png',
          width: 1200,
          height: 630,
          alt: `asiaedits.com Website für ${industry.pluralName}`,
        },
      ],
      locale: 'de_DE',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: content.metaTitle,
      description: content.metaDescription,
      images: ['/opengraph-image.png'],
    },
  }
}

export default async function BranchenIndustryPage({ params }: PageProps) {
  const { industry: industrySlug } = await params
  const industry = getIndustryBySlug(industrySlug)

  if (!industry) {
    notFound()
  }

  const content = generatePSEOContent(undefined, industry)

  const featuredCityItems = ALL_CITIES.filter((c) => c.regionType === 'city')
    .slice(0, 6)
    .map((c) => ({
      label: `${industry.name} Website ${c.name}`,
      sublabel: c.state,
      href: `/webdesign-${c.slug}`,
    }))

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <PseoHeader />
      <main>
        <PseoHero
          eyebrow={`Webdesign für ${industry.pluralName}`}
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
          heading={`Website für Deine ${industry.name}-Praxis anfragen`}
          description="Erzähl uns kurz von Deinem Vorhaben – wir melden uns unverbindlich innerhalb von 12 Stunden zurück."
          subjectTag={`⚡ Neue Anfrage Website ${industry.name} asiaedits.com`}
        />
      </main>
      <PseoFooter />
    </div>
  )
}
