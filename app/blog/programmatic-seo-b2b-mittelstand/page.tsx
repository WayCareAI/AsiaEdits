import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { JsonLd } from '@/components/json-ld'
import { buildBlogPosting, buildBreadcrumbList } from '@/src/lib/schema'
import { ReadingProgress } from '@/components/blog/reading-progress'
import { QuickTakeaways } from '@/components/blog/quick-takeaways'
import { AudioPlayer } from '@/components/blog/audio-player'
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

const blogPostingSchema = buildBlogPosting({
  title: TITLE,
  description: DESCRIPTION,
  url: URL,
  section: 'Programmatic SEO & Scale',
  datePublished: '2026-10-01',
})

const breadcrumbSchema = buildBreadcrumbList([
  { name: 'Blog', path: '/blog' },
  { name: TITLE, path: URL },
])

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
        <JsonLd data={blogPostingSchema} />
        <JsonLd data={breadcrumbSchema} />
        <ArticleHero />
        <QuickTakeaways items={TAKEAWAYS} />
        <AudioPlayer />
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
