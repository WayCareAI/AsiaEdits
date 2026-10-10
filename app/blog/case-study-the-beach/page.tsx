import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { JsonLd } from '@/components/json-ld'
import { buildBlogPosting, buildBreadcrumbList } from '@/src/lib/schema'
import { ReadingProgress } from '@/components/blog/reading-progress'
import { QuickTakeaways } from '@/components/blog/quick-takeaways'
import { AudioPlayer } from '@/components/blog/audio-player'
import { RelatedPosts } from '@/components/blog/related-posts'
import { ArticleHero } from '@/components/blog/case-study-the-beach/article-hero'
import { ArticleBody } from '@/components/blog/case-study-the-beach/article-body'
import { AuditCta } from '@/components/blog/case-study-the-beach/audit-cta'

const TITLE = 'Case Study: +10% Lead Conversion durch Audio-UX'
const DESCRIPTION =
  'Case Study The Beach Altersresidenz Thailand: Wie Audio-UX & Barrierefreiheit über +10% Lead Conversion erzielten. Jetzt Performance analysieren!'
const URL = 'https://asiaedits.com/blog/case-study-the-beach'

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
  section: 'Case Study & Accessibility UX',
  datePublished: '2026-10-01',
})

const breadcrumbSchema = buildBreadcrumbList([
  { name: 'Blog', path: '/blog' },
  { name: TITLE, path: URL },
])

const TAKEAWAYS = [
  "Ein integrierter Audio-Ratgeber senkt Hürden für die ältere Zielgruppe spürbar.",
  "Rund 10 % mehr Lead-Conversion durch zielgruppengerechte Bedienung.",
  "Eine CTR von 7,0 % sichert Top-Sichtbarkeit in einer anspruchsvollen Nische.",
  "Grüne Core Web Vitals verbinden Barrierefreiheit mit mobiler Performance.",
]

export default function CaseStudyTheBeachPage() {
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
        <RelatedPosts currentSlug="case-study-the-beach" category="accessibility" />
        <AuditCta />
      </main>
      <SiteFooter />
    </>
  )
}
