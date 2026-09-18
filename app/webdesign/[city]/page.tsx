import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCityBySlug, getAllCitySlugs } from '@/src/data/pseoDatabase'
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
  params: Promise<{ city: string }>
}

export function generateStaticParams() {
  return getAllCitySlugs().map((city) => ({ city }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: citySlug } = await params
  const city = getCityBySlug(citySlug)

  if (!city) {
    return { title: 'Seite nicht gefunden | asiaedits.com' }
  }

  const content = generatePSEOContent(city)

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical: `https://www.asiaedits.com/webdesign/${city.slug}`,
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: `https://www.asiaedits.com/webdesign/${city.slug}`,
      siteName: 'asiaedits.com',
      images: [
        {
          url: '/opengraph-image.png',
          width: 1200,
          height: 630,
          alt: `asiaedits.com Webdesign ${city.name}`,
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

export default async function WebdesignCityPage({ params }: PageProps) {
  const { city: citySlug } = await params
  const city = getCityBySlug(citySlug)

  if (!city) {
    notFound()
  }

  const content = generatePSEOContent(city)

  const regionLabel =
    city.regionType === 'city'
      ? 'Stadt'
      : city.regionType === 'district'
        ? 'Landkreis'
        : 'Gemeinde'

  const nearbyItems = city.nearbyCities
    .map((slug) => getCityBySlug(slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c))
    .map((c) => ({
      label: `Webdesign ${c.name}`,
      sublabel: c.state,
      href: `/webdesign/${c.slug}`,
    }))

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <PseoHeader />
      <main>
        <PseoHero
          eyebrow={`Webdesign ${regionLabel} ${city.name}`}
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
          heading={`Webdesign in der Region ${city.name}`}
          description="Wir erstellen High-Speed Websites auch für diese Städte und Gemeinden in der Nähe."
          items={nearbyItems}
        />
        <PseoLeadForm
          heading={`Website für ${city.name} anfragen`}
          description="Erzähl uns kurz von Deinem Vorhaben – wir melden uns unverbindlich innerhalb von 12 Stunden zurück."
          subjectTag={`⚡ Neue Anfrage Webdesign ${city.name} asiaedits.com`}
        />
      </main>
      <PseoFooter />
    </div>
  )
}
