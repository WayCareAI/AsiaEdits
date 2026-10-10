import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { JsonLd } from '@/components/json-ld'
import { buildBlogPosting, buildBreadcrumbList } from '@/src/lib/schema'
import { ReadingProgress } from '@/components/blog/reading-progress'
import { QuickTakeaways } from '@/components/blog/quick-takeaways'
import { AudioPlayer } from '@/components/blog/audio-player'
import { RelatedPosts } from '@/components/blog/related-posts'
import { ArticleHero } from '@/components/blog/b2c-buchungs-ux-frictionless-flows/article-hero'
import { ArticleBody } from '@/components/blog/b2c-buchungs-ux-frictionless-flows/article-body'
import { AuditCta } from '@/components/blog/b2c-buchungs-ux-frictionless-flows/audit-cta'

const TITLE = 'B2C Buchungs-UX: In 3 Klicks zum Termin'
const DESCRIPTION =
  'B2C Buchungs-UX 2026: Wie ultraschnelle Formular-Flows & Next.js die Conversion-Rate bei Online-Terminen verdoppeln. Jetzt Guide lesen!'
const URL = 'https://asiaedits.com/blog/b2c-buchungs-ux-frictionless-flows'

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
  section: 'B2C UX & Conversion',
  datePublished: '2026-10-01',
})

const breadcrumbSchema = buildBreadcrumbList([
  { name: 'Blog', path: '/blog' },
  { name: TITLE, path: URL },
])

const TAKEAWAYS = [
  'Ein hürdenfreier Buchungsweg führt in weniger als 3 Klicks vom Besuch zum Termin.',
  'Multi-Step-Flows mit progressiver Offenlegung statt Formular-Schock steigern die mobile Conversion um bis zu 110 %.',
  'Echtzeit-Validierung und touch-optimierte Kalender-Modale senken die Absprungrate um 40 %.',
  'Edge-Caching und SSR halten die Buchungs-Modale bei PageSpeed 95+ und unter 100 ms Öffnungszeit.',
]

export default function B2cBuchungsUxFrictionlessFlowsPage() {
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
        <RelatedPosts
          currentSlug="b2c-buchungs-ux-frictionless-flows"
          category="conversion"
        />
        <AuditCta />
      </main>
      <SiteFooter />
    </>
  )
}
