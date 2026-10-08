import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ArticleHero } from '@/components/blog/b2b-conversion-ux-lead-pfade/article-hero'
import { ArticleBody } from '@/components/blog/b2b-conversion-ux-lead-pfade/article-body'
import { AuditCta } from '@/components/blog/b2b-conversion-ux-lead-pfade/audit-cta'

const TITLE = 'B2B-Conversion-UX: Barrierefreie Lead-Pfade aufbauen'
const DESCRIPTION =
  'B2B-Conversion-UX verstehen: Wie moderne Barrierefreiheit und klare Lead-Pfade Besucher in Anfragen verwandeln. Jetzt UX-Audit anfordern!'
const URL = 'https://asiaedits.com/blog/b2b-conversion-ux-lead-pfade'

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
  articleSection: 'Conversion UX & Architecture',
  datePublished: '2026-10-01',
  inLanguage: 'de-DE',
  mainEntityOfPage: URL,
  author: { '@type': 'Organization', name: 'AsiaEdits' },
  publisher: { '@type': 'Organization', name: 'AsiaEdits' },
}

export default function B2bConversionUxLeadPfadePage() {
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
