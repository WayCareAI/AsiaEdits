import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ArticleHero } from '@/components/blog/keyword-dualismus-pseo-architektur/article-hero'
import { ArticleBody } from '@/components/blog/keyword-dualismus-pseo-architektur/article-body'
import { AuditCta } from '@/components/blog/keyword-dualismus-pseo-architektur/audit-cta'

const TITLE = 'Keyword-Dualismus im pSEO: Webdesign vs. Website'
const DESCRIPTION =
  'Keyword-Dualismus im pSEO nutzen: Warum "Webdesign für X" und "Website für X" getrennte pSEO-Pfade brauchen. Jetzt Architektur analysieren!'
const URL = 'https://asiaedits.com/blog/keyword-dualismus-pseo-architektur'

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
  articleSection: 'Programmatic SEO & Keyword-Strategie',
  datePublished: '2026-10-01',
  inLanguage: 'de-DE',
  mainEntityOfPage: URL,
  author: { '@type': 'Organization', name: 'AsiaEdits' },
  publisher: { '@type': 'Organization', name: 'AsiaEdits' },
}

export default function KeywordDualismusPseoArchitekturPage() {
  return (
    <>
      <SiteHeader />
      <main className="relative w-full max-w-full overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <ArticleHero />
        <article>
          <ArticleBody />
        </article>
        <AuditCta />
      </main>
      <SiteFooter />
    </>
  )
}
