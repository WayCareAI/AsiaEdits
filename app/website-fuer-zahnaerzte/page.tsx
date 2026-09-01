import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ZahnarztHero } from '@/components/website-fuer-zahnaerzte/zahnarzt-hero'
import { ZahnarztPainPointsSection } from '@/components/website-fuer-zahnaerzte/zahnarzt-pain-points-section'
import { ZahnarztSolutionSection } from '@/components/website-fuer-zahnaerzte/zahnarzt-solution-section'
import { ZahnarztComparisonTableSection } from '@/components/website-fuer-zahnaerzte/zahnarzt-comparison-table-section'
import { ZahnarztCategoriesSection } from '@/components/website-fuer-zahnaerzte/zahnarzt-categories-section'
import { ZahnarztFaqSection } from '@/components/website-fuer-zahnaerzte/zahnarzt-faq-section'
import { ZahnarztFinalCtaSection } from '@/components/website-fuer-zahnaerzte/zahnarzt-final-cta-section'

export const metadata: Metadata = {
  title:
    'Website für Zahnärzte 2026: Mehr Patienten & Termine ab 199 € | asiaedits',
  description:
    'Moderne Website für Zahnärzte erstellen lassen. Mit schlanken Webformularen, WhatsApp-Contact, 90/100 PageSpeed-Garantie & Local SEO. Jetzt Angebot sichern!',
  keywords: [
    'website für zahnärzte',
    'zahnarzt website',
    'praxis homepage zahnarzt',
    'zahnarzt homepage erstellen',
    'local seo zahnarzt',
    'praxisdesign zahnarzt',
  ],
  alternates: {
    canonical: 'https://www.asiaedits.com/website-fuer-zahnaerzte',
  },
  openGraph: {
    title: 'Website für Zahnärzte 2026: Mehr Patienten & Termine ab 199 €',
    description:
      'Moderne Website für Zahnärzte erstellen lassen. Mit schlanken Webformularen, WhatsApp-Contact, 90/100 PageSpeed-Garantie & Local SEO.',
    url: 'https://www.asiaedits.com/website-fuer-zahnaerzte',
    siteName: 'asiaedits.com',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'asiaedits.com Website für Zahnärzte',
      },
    ],
    locale: 'de_DE',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website für Zahnärzte 2026: Mehr Patienten & Termine ab 199 €',
    description:
      'Moderne Website für Zahnärzte erstellen lassen. Mit schlanken Webformularen, WhatsApp-Contact, 90/100 PageSpeed-Garantie & Local SEO.',
    images: ['/opengraph-image.png'],
  },
}

export default function WebsiteFuerZahnaerztePage() {
  return (
    <>
      <SiteHeader />
      <main className="relative w-full max-w-full overflow-x-hidden">
        <ZahnarztHero />
        <div className="prose prose-invert mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <ZahnarztPainPointsSection />
          <ZahnarztSolutionSection />
          <ZahnarztComparisonTableSection />
          <ZahnarztCategoriesSection />
          <ZahnarztFaqSection />
        </div>
        <ZahnarztFinalCtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
