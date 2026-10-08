import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ArticleHero } from '@/components/blog/case-study-saaraxt/article-hero'
import { ArticleBody } from '@/components/blog/case-study-saaraxt/article-body'
import { AuditCta } from '@/components/blog/case-study-saaraxt/audit-cta'

const TITLE = 'Case Study SaarAxt.de: +10% Lead Conversion im Handwerk'
const DESCRIPTION =
  'SaarAxt.de Case Study: Wie wir mit schneller Web-Architektur, Local SEO und WDF*IDF über +10% Lead Conversion erzielten. Jetzt Performance analysieren!'
const URL = 'https://asiaedits.com/blog/case-study-saaraxt'

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
  articleSection: 'Case Study & Local SEO',
  datePublished: '2026-10-01',
  inLanguage: 'de-DE',
  mainEntityOfPage: URL,
  author: { '@type': 'Organization', name: 'AsiaEdits' },
  publisher: { '@type': 'Organization', name: 'AsiaEdits' },
}

export default function CaseStudySaarAxtPage() {
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
