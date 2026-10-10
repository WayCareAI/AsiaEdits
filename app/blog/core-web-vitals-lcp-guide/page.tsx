import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { JsonLd } from '@/components/json-ld'
import { buildBlogPosting, buildBreadcrumbList } from '@/src/lib/schema'
import { ReadingProgress } from '@/components/blog/reading-progress'
import { QuickTakeaways } from '@/components/blog/quick-takeaways'
import { AudioPlayer } from '@/components/blog/audio-player'
import { RelatedPosts } from '@/components/blog/related-posts'
import { ArticleHero } from '@/components/blog/core-web-vitals-lcp-guide/article-hero'
import { ArticleBody } from '@/components/blog/core-web-vitals-lcp-guide/article-body'
import { AuditCta } from '@/components/blog/core-web-vitals-lcp-guide/audit-cta'

const TITLE = 'Core Web Vitals 2026: LCP unter 1,0s im B2B erreichen'
const DESCRIPTION =
  'Core Web Vitals 2026 verstehen: Wie LCP unter 1,0s Ladezeit Google-Rankings und B2B-Conversions steigert. Jetzt Speed-Audit anfordern!'
const URL = 'https://asiaedits.com/blog/core-web-vitals-lcp-guide'

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
  section: 'Web Performance & Tech SEO',
  datePublished: '2026-10-01',
})

const breadcrumbSchema = buildBreadcrumbList([
  { name: 'Blog', path: '/blog' },
  { name: TITLE, path: URL },
])

const TAKEAWAYS = [
  "Ein LCP unter 1,0 Sekunden ist im B2B realistisch und ein klarer Wettbewerbsvorteil.",
  "Schnellere Ladezeiten senken die Absprungrate um bis zu 50 %.",
  "Unmittelbar reagierende Oberflächen steigern die Conversion um 15-20 %.",
  "Mobile PageSpeed von 90+ ist die Grundlage für stabile Google-Spitzenplätze.",
]

export default function CoreWebVitalsLcpGuidePage() {
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
        <RelatedPosts currentSlug="core-web-vitals-lcp-guide" category="performance" />
        <AuditCta />
      </main>
      <SiteFooter />
    </>
  )
}
