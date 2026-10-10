import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { JsonLd } from '@/components/json-ld'
import { buildBlogPosting, buildBreadcrumbList } from '@/src/lib/schema'
import { ReadingProgress } from '@/components/blog/reading-progress'
import { QuickTakeaways } from '@/components/blog/quick-takeaways'
import { AudioPlayer } from '@/components/blog/audio-player'
import { RelatedPosts } from '@/components/blog/related-posts'
import { ArticleHero } from '@/components/blog/google-local-pack-dominanz/article-hero'
import { ArticleBody } from '@/components/blog/google-local-pack-dominanz/article-body'
import { AuditCta } from '@/components/blog/google-local-pack-dominanz/audit-cta'

const TITLE = 'Local SEO 2026: Schema.org & Local Pack Dominanz'
const DESCRIPTION =
  'Google Local Pack Dominanz 2026: Wie Schema.org LocalBusiness Markup und Geo-Targeting Spitzenplätze sichern. Jetzt Local-Audit anfordern!'
const URL = 'https://asiaedits.com/blog/google-local-pack-dominanz'

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
  section: 'Local SEO & Geo-Targeting',
  datePublished: '2026-10-01',
})

const breadcrumbSchema = buildBreadcrumbList([
  { name: 'Blog', path: '/blog' },
  { name: TITLE, path: URL },
])

const TAKEAWAYS = [
  "Strukturierte Geodaten nach Schema.org machen Ihren Standort maschinenlesbar.",
  "Anrufe und Routen-Klicks direkt im Snippet steigern die CTR um bis zu 120 %.",
  "Zielgerichtetes Geo-Targeting bringt B2B-Anbieter ins Kartenpaket.",
  "Latenzfreie mobile Seiten sind Voraussetzung für Local-Pack-Sichtbarkeit.",
]

export default function GoogleLocalPackDominanzPage() {
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
        <RelatedPosts currentSlug="google-local-pack-dominanz" category="local" />
        <AuditCta />
      </main>
      <SiteFooter />
    </>
  )
}
