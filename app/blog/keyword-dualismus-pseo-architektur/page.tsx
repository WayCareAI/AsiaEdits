import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { JsonLd } from '@/components/json-ld'
import { buildBlogPosting, buildBreadcrumbList } from '@/src/lib/schema'
import { ReadingProgress } from '@/components/blog/reading-progress'
import { QuickTakeaways } from '@/components/blog/quick-takeaways'
import { AudioPlayer } from '@/components/blog/audio-player'
import { RelatedPosts } from '@/components/blog/related-posts'
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

const blogPostingSchema = buildBlogPosting({
  title: TITLE,
  description: DESCRIPTION,
  url: URL,
  section: 'Programmatic SEO & Keyword-Strategie',
  datePublished: '2026-10-01',
})

const breadcrumbSchema = buildBreadcrumbList([
  { name: 'Blog', path: '/blog' },
  { name: TITLE, path: URL },
])

const TAKEAWAYS = [
  "Agentur-Suchanfragen und Ergebnis-Suchanfragen brauchen getrennte Inhaltsstränge.",
  "Parallele pSEO-Cluster verdoppeln die Reichweite bei exakt passender Suchintention.",
  "Eine semantische Varianz-Matrix verhindert Duplicate Content zuverlässig.",
  "Die Architektur bleibt trotz großer Seitenzahl schnell, PageSpeed 90+ inklusive.",
]

export default function KeywordDualismusPseoArchitekturPage() {
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
        <RelatedPosts currentSlug="keyword-dualismus-pseo-architektur" category="pseo" />
        <AuditCta />
      </main>
      <SiteFooter />
    </>
  )
}
