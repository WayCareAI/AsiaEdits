import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ReadingProgress } from '@/components/blog/reading-progress'
import { QuickTakeaways } from '@/components/blog/quick-takeaways'
import { AudioPlayer } from '@/components/blog/audio-player'
import { RelatedPosts } from '@/components/blog/related-posts'
import { ArticleHero } from '@/components/blog/edtech-pwa-plattformen-bildungseinrichtungen/article-hero'
import { ArticleBody } from '@/components/blog/edtech-pwa-plattformen-bildungseinrichtungen/article-body'
import { AuditCta } from '@/components/blog/edtech-pwa-plattformen-bildungseinrichtungen/audit-cta'

const TITLE = 'EdTech & PWA-Plattformen: Digitalisierung im Bildungswesen'
const DESCRIPTION =
  'EdTech & PWA 2026: Wie Progressive Web Apps & Next.js Schulen, Bildungseinrichtungen & Eltern begeistern. Jetzt Guide lesen!'
const URL =
  'https://asiaedits.com/blog/edtech-pwa-plattformen-bildungseinrichtungen'

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
  articleSection: 'EdTech & PWA',
  datePublished: '2026-10-01',
  inLanguage: 'de-DE',
  mainEntityOfPage: URL,
  author: { '@type': 'Organization', name: 'AsiaEdits' },
  publisher: { '@type': 'Organization', name: 'AsiaEdits' },
}

const TAKEAWAYS = [
  'Träge Portale, App-Store-Installationen und fehlende Geräte-Kompatibilität bremsen EdTech im Alltag; entscheidend sind Einfachheit und Geschwindigkeit, denn nur was in Sekunden startet, wird genutzt.',
  'Erfolgreiche PWA-Lernplattformen sind ohne App-Store-Zwang direkt nutzbar, bieten barrierefreie Bedienung mit Audio-Integration und erfüllen die DSGVO auf einer sicheren europäischen Infrastruktur.',
  'Die Grundschul-Plattform My Boardy erreichte mit Next.js, Mascot-Branding und Vorlese-Funktion PageSpeed-Werte von 98 bis 100 und eine um 120 Prozent höhere Registrierungs-Conversion.',
  'Geräte-agnostisches Design, Edge-Skalierung bei Gleichzeitigkeits-Spitzen und saubere APIs für Dashboards, Bezahlsysteme und Schulverwaltung sind die Qualitätskriterien professioneller EdTech-Software.',
]

export default function EdtechPwaPlattformenBildungseinrichtungenPage() {
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
        <AudioPlayer />
        <article>
          <ArticleBody />
        </article>
        <RelatedPosts
          currentSlug="edtech-pwa-plattformen-bildungseinrichtungen"
          category="conversion"
        />
        <AuditCta />
      </main>
      <SiteFooter />
    </>
  )
}
