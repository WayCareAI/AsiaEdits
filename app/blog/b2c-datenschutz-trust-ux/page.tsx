import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ReadingProgress } from '@/components/blog/reading-progress'
import { QuickTakeaways } from '@/components/blog/quick-takeaways'
import { AudioPlayer } from '@/components/blog/audio-player'
import { RelatedPosts } from '@/components/blog/related-posts'
import { ArticleHero } from '@/components/blog/b2c-datenschutz-trust-ux/article-hero'
import { ArticleBody } from '@/components/blog/b2c-datenschutz-trust-ux/article-body'
import { AuditCta } from '@/components/blog/b2c-datenschutz-trust-ux/audit-cta'

const TITLE = 'B2C Datenschutz & Trust UX: Vertrauen aufbauen'
const DESCRIPTION =
  'B2C Datenschutz & Trust UX 2026: Wie verbraucherfreundliches Design & transparente Interfaces Kunden binden. Jetzt Guide lesen!'
const URL = 'https://asiaedits.com/blog/b2c-datenschutz-trust-ux'

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
  articleSection: 'B2C Trust & Privacy',
  datePublished: '2026-10-01',
  inLanguage: 'de-DE',
  mainEntityOfPage: URL,
  author: { '@type': 'Organization', name: 'AsiaEdits' },
  publisher: { '@type': 'Organization', name: 'AsiaEdits' },
}

const TAKEAWAYS = [
  'Dark Patterns wie aggressive Vollbild-Banner, versteckte Abmeldebuttons und künstlicher Zeitdruck erzeugen Skepsis; Transparenz ist vom Rechtszwang zum Markenvorteil geworden.',
  'Dezentes Consent-Management, glasklare Preis- und Leistungskommunikation sowie echte Bewertungen und Prüfsiegel geben dem Nutzer die volle Kontrolle über seine Entscheidung.',
  'Ein ruhiges Design ohne Pop-ups, ein klares Datenversprechen vor jeder Eingabe und ein schlanker Consent-Flow steigerten die Erstgespräch-Anfragen eines Vorsorge-Anbieters um 45 Prozent.',
  'Gut lesbare Vertragstexte, einfache Stornierungs- und Kontaktwege sowie blitzschnelle Ladezeiten sind die Qualitätskriterien für verbrauchernahes Webdesign.',
]

export default function B2cDatenschutzTrustUxPage() {
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
          currentSlug="b2c-datenschutz-trust-ux"
          category="conversion"
        />
        <AuditCta />
      </main>
      <SiteFooter />
    </>
  )
}
