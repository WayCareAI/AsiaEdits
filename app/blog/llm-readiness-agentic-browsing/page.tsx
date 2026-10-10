import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { JsonLd } from '@/components/json-ld'
import { buildBlogPosting, buildBreadcrumbList } from '@/src/lib/schema'
import { ReadingProgress } from '@/components/blog/reading-progress'
import { QuickTakeaways } from '@/components/blog/quick-takeaways'
import { AudioPlayer } from '@/components/blog/audio-player'
import { RelatedPosts } from '@/components/blog/related-posts'
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

const blogPostingSchema = buildBlogPosting({
  title: TITLE,
  description: DESCRIPTION,
  url: URL,
  section: 'AI Search & Agentic Browsing',
  datePublished: '2026-10-01',
})

const breadcrumbSchema = buildBreadcrumbList([
  { name: 'Blog', path: '/blog' },
  { name: TITLE, path: URL },
])

const TAKEAWAYS = [
  "Automatisierte Beschaffungssysteme und KI-Agenten wählen Anbieter anhand strukturierter Daten.",
  "Vollständiges JSON-LD nach Schema.org macht Ihre Entitäten maschinenlesbar.",
  "Parsing-Zeiten unter 200 ms erhöhen die Chance auf Zitation in KI-Antworten.",
  "API-nahe Frontend-Architekturen sind die Basis für Sichtbarkeit bei ChatGPT, Perplexity und Google AI.",
]

export default function LlmReadinessAgenticBrowsingPage() {
  return (
    <>
      <SiteHeader />
      <ReadingProgress />
      <main className="relative w-full max-w-full overflow-x-hidden">
        <JsonLd data={blogPostingSchema} />
        <JsonLd data={breadcrumbSchema} />
        <ArticleHero />
        <QuickTakeaways items={TAKEAWAYS} />
        <AudioPlayer />
        <article>
          <ArticleBody />
        </article>
        <RelatedPosts currentSlug="llm-readiness-agentic-browsing" category="performance" />
        <AuditCta />
      </main>
      <SiteFooter />
    </>
  )
}
