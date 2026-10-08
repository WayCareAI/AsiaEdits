import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { AboutHero } from '@/components/ueber-uns/about-hero'
import { AboutBody } from '@/components/ueber-uns/about-body'
import { AboutCta } from '@/components/ueber-uns/about-cta'

const TITLE = 'Über uns | AsiaEdits – Passion, High-Speed Engineering & B2B-UX'
const DESCRIPTION =
  'Über 15 Jahre Erfahrung aus E-Commerce, Google Tier-1 Agenturen & Medienhäusern. Erfahre, wie wir aus Passion deinen Erfolg zur Mission machen.'
const URL = 'https://asiaedits.com/ueber-uns'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  category: 'Über uns',
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
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/opengraph-image.png'],
  },
}

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: TITLE,
  description: DESCRIPTION,
  url: URL,
  inLanguage: 'de-DE',
  datePublished: '2026-10-01',
  publisher: { '@type': 'Organization', name: 'AsiaEdits' },
}

export default function UeberUnsPage() {
  return (
    <>
      <SiteHeader />
      <main className="relative w-full max-w-full overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
        />
        <AboutHero />
        <article>
          <AboutBody />
        </article>
        <AboutCta />
      </main>
      <SiteFooter />
    </>
  )
}
