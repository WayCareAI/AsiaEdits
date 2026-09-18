import type { Metadata } from 'next'
import { getIndustryBySlug } from '@/src/data/pseoDatabase'
import { generatePSEOContent } from './pseoContentEngine'

export type IndustryKeywordType = 'webdesign' | 'website'

export function buildIndustryMetadata(
  industrySlug: string,
  keywordType: IndustryKeywordType,
): Metadata {
  const industry = getIndustryBySlug(industrySlug)

  if (!industry) {
    return { title: 'Seite nicht gefunden | asiaedits.com' }
  }

  const content = generatePSEOContent(undefined, industry, keywordType)
  const canonicalUrl = `https://www.asiaedits.com/branchen/${keywordType}-${industry.slug}`

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    keywords: industry.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: canonicalUrl,
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
