import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { JsonLd } from '@/components/json-ld'
import { buildBlogPosting, buildBreadcrumbList } from '@/src/lib/schema'
import { ReadingProgress } from '@/components/blog/reading-progress'
import { QuickTakeaways } from '@/components/blog/quick-takeaways'
import { AudioPlayer } from '@/components/blog/audio-player'
import { RelatedPosts } from '@/components/blog/related-posts'
import { ArticleHero } from '@/components/blog/audio-ux-accessible-micro-interactions/article-hero'
import { ArticleBody } from '@/components/blog/audio-ux-accessible-micro-interactions/article-body'
import { AuditCta } from '@/components/blog/audio-ux-accessible-micro-interactions/audit-cta'

const TITLE = 'Audio-UX & Barrierefreie Micro-Interactions im B2B'
const DESCRIPTION =
  'Audio-UX & barrierefreie Micro-Interactions: Wie Vorlese-Funktionen & WCAG-UX die Conversion in Pflege & Gesundheit steigern. Jetzt Audit anfordern!'
const URL = 'https://asiaedits.com/blog/audio-ux-accessible-micro-interactions'

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
  section: 'Audio UX & Accessibility',
  datePublished: '2026-10-01',
})

const breadcrumbSchema = buildBreadcrumbList([
  { name: 'Blog', path: '/blog' },
  { name: TITLE, path: URL },
])

const TAKEAWAYS = [
  "Integrierte Voice-UI und Vorlese-Player bauen Hürden für viele Nutzergruppen ab.",
  "Audio-Player erhöhen die Verweildauer um rund 45 %.",
  "Barrierefreie Micro-Interactions nach WCAG 2.1 AAA funktionieren auf allen Geräten.",
  "Latenzfreie Audio-Streams halten PageSpeed 90+ trotz Zusatzfunktionen.",
]

export default function AudioUxAccessibleMicroInteractionsPage() {
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
        <RelatedPosts currentSlug="audio-ux-accessible-micro-interactions" category="accessibility" />
        <AuditCta />
      </main>
      <SiteFooter />
    </>
  )
}
