import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ReadingProgress } from '@/components/blog/reading-progress'
import { QuickTakeaways } from '@/components/blog/quick-takeaways'
import { RelatedPosts } from '@/components/blog/related-posts'
import { ArticleHero } from '@/components/blog/pseo-b2b/article-hero'
import { ArticleBody } from '@/components/blog/pseo-b2b/article-body'
import { AuditCta } from '@/components/blog/pseo-b2b/audit-cta'

const TITLE = 'Programmatic SEO im B2B: Hunderte Zielseiten skalieren'
const DESCRIPTION =
  'Programmatic SEO im B2B nutzen: Hunderte Zielseiten ohne Duplicate-Penalty skalieren. Jetzt Performance-Analyse anfordern!'
const URL = 'https://asiaedits.com/blog/programmatic-seo-b2b-skalieren'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: 'asiaedits.com',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: TITLE,
      },
    ],
    locale: 'de_DE',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/opengraph-image.png'],
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: TITLE,
  description: DESCRIPTION,
  articleSection: 'pSEO & Skalierung',
  datePublished: '2026-10-01',
  inLanguage: 'de-DE',
  mainEntityOfPage: URL,
  author: { '@type': 'Organization', name: 'AsiaEdits' },
  publisher: { '@type': 'Organization', name: 'AsiaEdits' },
}

const TAKEAWAYS = [
  "Technologie und semantisches Varianz-Engineering skalieren Reichweite ohne Qualitätsverlust.",
  "Automatisierte regionale Landingpages erschließen bis zu 100x mehr Suchintentionen.",
  "Dynamische Textvarianz verhindert Duplicate Content auf Skalierungsebene.",
  "Der Long-Tail liefert deutlich mehr Gesamtsichtbarkeit und qualifizierte Anfragen.",
]

export default function ProgrammaticSeoB2bPage() {
  return (
    <>
      <SiteHeader />
      <ReadingProgress />
      <main className="relative w-full max-w-full overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <ArticleHero />
        <QuickTakeaways items={TAKEAWAYS} />
        <article>
          <ArticleBody />
        </article>
        <RelatedPosts currentSlug="programmatic-seo-b2b-skalieren" category="pseo" />
        <AuditCta />
      </main>
      <SiteFooter />
    </>
  )
}
