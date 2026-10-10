import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { JsonLd } from '@/components/json-ld'
import { buildBlogPosting, buildBreadcrumbList } from '@/src/lib/schema'
import { ReadingProgress } from '@/components/blog/reading-progress'
import { QuickTakeaways } from '@/components/blog/quick-takeaways'
import { AudioPlayer } from '@/components/blog/audio-player'
import { RelatedPosts } from '@/components/blog/related-posts'
import { ArticleHero } from '@/components/blog/local-b2c-dominanz-smartphone-engagement/article-hero'
import { ArticleBody } from '@/components/blog/local-b2c-dominanz-smartphone-engagement/article-body'
import { AuditCta } from '@/components/blog/local-b2c-dominanz-smartphone-engagement/audit-cta'

const TITLE = 'Local B2C SEO: Regionale Kunden mobil abholen'
const DESCRIPTION =
  'Local B2C Dominanz 2026: Wie lokale Dienstleister durch Google Maps, Schema.org & Blitz-Ladezeiten Smartphones erobern. Jetzt Guide lesen!'
const URL =
  'https://asiaedits.com/blog/local-b2c-dominanz-smartphone-engagement'

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
  section: 'Local SEO & B2C',
  datePublished: '2026-10-01',
})

const breadcrumbSchema = buildBreadcrumbList([
  { name: 'Blog', path: '/blog' },
  { name: TITLE, path: URL },
])

const TAKEAWAYS = [
  'Über 80 % der lokalen B2C-Suchanfragen laufen mobil, und das Local Pack zieht die meisten Anrufe und Reservierungen auf sich.',
  'Schema.org-Markup (LocalBusiness, OpeningHoursSpecification, GeoCoordinates) macht Standort und Öffnungszeiten für Google und KI-Systeme sofort verständlich.',
  'Eigene, blitzschnelle Standort-Unterseiten und direkte Buttons für Anruf, Route und Reservierung verkürzen den Weg zur Buchung.',
  'Konsistente NAP-Daten, WebP-Bilder mit Alt-Texten und eingebundene Bewertungen sichern die lokale Sichtbarkeit langfristig ab.',
]

export default function LocalB2cDominanzSmartphoneEngagementPage() {
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
          currentSlug="local-b2c-dominanz-smartphone-engagement"
          category="local"
        />
        <AuditCta />
      </main>
      <SiteFooter />
    </>
  )
}
