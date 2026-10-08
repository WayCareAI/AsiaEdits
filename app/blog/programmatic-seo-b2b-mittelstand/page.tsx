import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ReadingProgress } from '@/components/blog/reading-progress'
import { QuickTakeaways } from '@/components/blog/quick-takeaways'
import { RelatedPosts } from '@/components/blog/related-posts'
import { ArticleHero } from '@/components/blog/programmatic-seo-b2b-mittelstand/article-hero'
import { ArticleBody } from '@/components/blog/programmatic-seo-b2b-mittelstand/article-body'
import { AuditCta } from '@/components/blog/programmatic-seo-b2b-mittelstand/audit-cta'

const TITLE = 'Programmatic SEO im B2B-Mittelstand: 100+ Nischen skalieren'
const DESCRIPTION =
  'Programmatic SEO für den B2B-Mittelstand: Wie Sie hunderte Branchen-Landingpages ohne Duplicate Content aufbauen. Jetzt pSEO-Guide lesen!'
const URL = 'https://asiaedits.com/blog/programmatic-seo-b2b-mittelstand'

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
  articleSection: 'Programmatic SEO & Scale',
  datePublished: '2026-10-01',
  inLanguage: 'de-DE',
  mainEntityOfPage: URL,
  author: { '@type': 'Organization', name: 'AsiaEdits' },
  publisher: { '@type': 'Organization', name: 'AsiaEdits' },
}

const TAKEAWAYS = [
  "Mit Programmatic SEO lassen sich 100+ Branchen-Landingpages automatisiert aufbauen.",
  "Mathematische Varianz-Matrizen halten das Duplicate-Content-Risiko bei 0 %.",
  "Long-Tail-Nischen bringen bis zu 160 % höhere CTR durch hohe Relevanz.",
  "Trotz großer Datenmenge bleibt die Ladezeit mit PageSpeed 90+ konstant schnell.",
]

export default function ProgrammaticSeoB2bMittelstandPage() {
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
        <RelatedPosts currentSlug="programmatic-seo-b2b-mittelstand" category="pseo" />
        <AuditCta />
      </main>
      <SiteFooter />
    </>
  )
}
