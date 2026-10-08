import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ArticleHero } from '@/components/blog/llm-readiness-agentic-browsing/article-hero'
import { ArticleBody } from '@/components/blog/llm-readiness-agentic-browsing/article-body'
import { AuditCta } from '@/components/blog/llm-readiness-agentic-browsing/audit-cta'

const TITLE = 'LLM-Readiness & Agentic Browsing: KI-Agenten im B2B'
const DESCRIPTION =
  'LLM-Readiness 2026: Wie Schema.org, JSON-LD & API-Architekturen B2B-Websites für KI-Beschaffungsagenten optimieren. Jetzt KI-Audit starten!'
const URL = 'https://asiaedits.com/blog/llm-readiness-agentic-browsing'

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
  articleSection: 'AI Search & Agentic Browsing',
  datePublished: '2026-10-01',
  inLanguage: 'de-DE',
  mainEntityOfPage: URL,
  author: { '@type': 'Organization', name: 'AsiaEdits' },
  publisher: { '@type': 'Organization', name: 'AsiaEdits' },
}

export default function LlmReadinessAgenticBrowsingPage() {
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
