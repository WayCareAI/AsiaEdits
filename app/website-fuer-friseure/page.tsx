import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FriseurHero } from '@/components/website-fuer-friseure/friseur-hero'
import { FriseurPainPointsSection } from '@/components/website-fuer-friseure/friseur-pain-points-section'
import { FriseurSolutionSection } from '@/components/website-fuer-friseure/friseur-solution-section'
import { FriseurComparisonTableSection } from '@/components/website-fuer-friseure/friseur-comparison-table-section'
import { FriseurCategoriesSection } from '@/components/website-fuer-friseure/friseur-categories-section'
import { FriseurFaqSection } from '@/components/website-fuer-friseure/friseur-faq-section'
import { FriseurFinalCtaSection } from '@/components/website-fuer-friseure/friseur-final-cta-section'

export const metadata: Metadata = {
  title: 'Website für Friseure 2026: Mehr Termine & Kunden ab 199 € | asiaedits',
  description:
    'Moderne Website für Friseure erstellen lassen. Mit schlanken Webformularen, WhatsApp-Contact, 100/100 PageSpeed & Local SEO. Jetzt Angebot sichern!',
  keywords: [
    'website für friseure',
    'friseur website',
    'friseursalon website',
    'friseur homepage erstellen',
    'website friseursalon',
    'local seo friseur',
  ],
  alternates: {
    canonical: 'https://www.asiaedits.com/website-fuer-friseure',
  },
  openGraph: {
    title: 'Website für Friseure 2026: Mehr Termine & Kunden ab 199 €',
    description:
      'Moderne Website für Friseure erstellen lassen. Mit schlanken Webformularen, WhatsApp-Contact, 100/100 PageSpeed & Local SEO.',
    url: 'https://www.asiaedits.com/website-fuer-friseure',
    siteName: 'asiaedits.com',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'asiaedits.com Website für Friseure',
      },
    ],
    locale: 'de_DE',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website für Friseure 2026: Mehr Termine & Kunden ab 199 €',
    description:
      'Moderne Website für Friseure erstellen lassen. Mit schlanken Webformularen, WhatsApp-Contact, 100/100 PageSpeed & Local SEO.',
    images: ['/opengraph-image.png'],
  },
}

export default function WebsiteFuerFriseurePage() {
  return (
    <>
      <SiteHeader />
      <main className="relative w-full max-w-full overflow-x-hidden">
        <FriseurHero />
        <div className="prose prose-invert mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <FriseurPainPointsSection />
          <FriseurSolutionSection />
          <FriseurComparisonTableSection />
          <FriseurCategoriesSection />
          <FriseurFaqSection />
        </div>
        <FriseurFinalCtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
