import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { JsonLd } from '@/components/json-ld'
import { buildBlogPosting, buildBreadcrumbList } from '@/src/lib/schema'
import { ReadingProgress } from '@/components/blog/reading-progress'
import { QuickTakeaways } from '@/components/blog/quick-takeaways'
import { AudioPlayer } from '@/components/blog/audio-player'
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

const blogPostingSchema = buildBlogPosting({
  title: TITLE,
  description: DESCRIPTION,
  url: URL,
  section: 'pSEO & Skalierung',
  datePublished: '2026-10-01',
})

const breadcrumbSchema = buildBreadcrumbList([
  { name: 'Blog', path: '/blog' },
  { name: TITLE, path: URL },
])

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
        <JsonLd data={blogPostingSchema} />
        <JsonLd data={breadcrumbSchema} />
        <ArticleHero />
        <QuickTakeaways items={TAKEAWAYS} />
        <AudioPlayer />
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
