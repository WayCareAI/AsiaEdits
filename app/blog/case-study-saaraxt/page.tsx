import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ReadingProgress } from '@/components/blog/reading-progress'
import { QuickTakeaways } from '@/components/blog/quick-takeaways'
import { RelatedPosts } from '@/components/blog/related-posts'
import { ArticleHero } from '@/components/blog/case-study-saaraxt/article-hero'
import { ArticleBody } from '@/components/blog/case-study-saaraxt/article-body'
import { AuditCta } from '@/components/blog/case-study-saaraxt/audit-cta'

const TITLE = 'Case Study SaarAxt.de: +10% Lead Conversion im Handwerk'
const DESCRIPTION =
  'SaarAxt.de Case Study: Wie wir mit schneller Web-Architektur, Local SEO und WDF*IDF über +10% Lead Conversion erzielten. Jetzt Performance analysieren!'
const URL = 'https://asiaedits.com/blog/case-study-saaraxt'

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

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: TITLE,
  description: DESCRIPTION,
  articleSection: 'Case Study & Local SEO',
  datePublished: '2026-10-01',
  inLanguage: 'de-DE',
  mainEntityOfPage: URL,
  author: { '@type': 'Organization', name: 'AsiaEdits' },
  publisher: { '@type': 'Organization', name: 'AsiaEdits' },
}

const TAKEAWAYS = [
  "Eine Click-Through-Rate von 9,2 % liegt weit über dem Branchendurchschnitt von 2-3 %.",
  "Rund 10 % mehr qualifizierte Anfragen seit dem Go-Live der neuen Seite.",
  "Entkoppelte Edge-Architektur sorgt für sehr schnelle mobile Ladezeiten.",
  "WDF*IDF Text-Engineering baut lokale Marktführerschaft innerhalb von 30 Tagen auf.",
]

export default function CaseStudySaarAxtPage() {
  return (
    <>
      <SiteHeader />
      <ReadingProgress />
      <main className="relative w-full max-w-full overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <ArticleHero />
        <QuickTakeaways items={TAKEAWAYS} />
        <article>
          <ArticleBody />
        </article>
        <RelatedPosts currentSlug="case-study-saaraxt" category="local" />
        <AuditCta />
      </main>
      <SiteFooter />
    </>
  )
}
