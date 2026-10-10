import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { JsonLd } from '@/components/json-ld'
import { buildBlogPosting, buildBreadcrumbList } from '@/src/lib/schema'
import { ReadingProgress } from '@/components/blog/reading-progress'
import { QuickTakeaways } from '@/components/blog/quick-takeaways'
import { AudioPlayer } from '@/components/blog/audio-player'
import { RelatedPosts } from '@/components/blog/related-posts'
import { ArticleHero } from '@/components/blog/b2b-englischer-suchmarkt/article-hero'
import { ArticleBody } from '@/components/blog/b2b-englischer-suchmarkt/article-body'
import { AuditCta } from '@/components/blog/b2b-englischer-suchmarkt/audit-cta'

const TITLE = 'B2B-Potenzial: Englische Suchanfragen in Metropolen nutzen'
const DESCRIPTION =
  'B2B-Potenzial in Metropolen heben: Wie englische Suchanfragen ungenutzten Traffic sichern. Jetzt Performance-Analyse anfordern!'
const URL = 'https://asiaedits.com/blog/b2b-englischer-suchmarkt-metropolen'

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
  section: 'B2B Strategie & SEO',
  datePublished: '2026-10-01',
})

const breadcrumbSchema = buildBreadcrumbList([
  { name: 'Blog', path: '/blog' },
  { name: TITLE, path: URL },
])

const TAKEAWAYS = [
  "In deutschen Metropolen suchen internationale Entscheider zunehmend auf Englisch.",
  "Dieser Suchmarkt ist kaufkräftig und wird von B2B-Anbietern bisher kaum bedient.",
  "Eine saubere internationale SEO-Architektur trennt Sprachversionen ohne Duplicate Content.",
  "Wer früh englische Landingpages aufbaut, sichert sich Rankings mit geringem Wettbewerb.",
]

export default function B2BEnglischerSuchmarktPage() {
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
        <RelatedPosts currentSlug="b2b-englischer-suchmarkt-metropolen" category="pseo" />
        <AuditCta />
      </main>
      <SiteFooter />
    </>
  )
}
