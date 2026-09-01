import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { HandwerkerHero } from '@/components/website-fuer-handwerker/handwerker-hero'
import { HandwerkerPainPointsSection } from '@/components/website-fuer-handwerker/handwerker-pain-points-section'
import { HandwerkerSolutionSection } from '@/components/website-fuer-handwerker/handwerker-solution-section'
import { HandwerkerComparisonTableSection } from '@/components/website-fuer-handwerker/handwerker-comparison-table-section'
import { HandwerkerBranchesSection } from '@/components/website-fuer-handwerker/handwerker-branches-section'
import { HandwerkerFaqSection } from '@/components/website-fuer-handwerker/handwerker-faq-section'
import { HandwerkerFinalCtaSection } from '@/components/website-fuer-handwerker/handwerker-final-cta-section'

export const metadata: Metadata = {
  title:
    'Website für Handwerker 2026: Mehr Kunden & Anfragen ab 199 € | asiaedits',
  description:
    'Professionelle Website für Handwerker erstellen lassen. Mehr regionale Kunden, 100/100 PageSpeed & 0 % Wartungsstress. Jetzt Angebot anfordern!',
  keywords: [
    'website für handwerker',
    'homepage für handwerker',
    'handwerker website erstellen lassen',
    'internetseite für handwerker',
    'handwerker webdesign',
    'local seo handwerker',
  ],
  alternates: {
    canonical: 'https://www.asiaedits.com/website-fuer-handwerker',
  },
  openGraph: {
    title: 'Website für Handwerker 2026: Mehr Kunden & Anfragen ab 199 €',
    description:
      'Professionelle Website für Handwerker erstellen lassen. Mehr regionale Kunden, 100/100 PageSpeed & 0 % Wartungsstress.',
    url: 'https://www.asiaedits.com/website-fuer-handwerker',
    siteName: 'asiaedits.com',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'asiaedits.com Website für Handwerker',
      },
    ],
    locale: 'de_DE',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website für Handwerker 2026: Mehr Kunden & Anfragen ab 199 €',
    description:
      'Professionelle Website für Handwerker erstellen lassen. Mehr regionale Kunden, 100/100 PageSpeed & 0 % Wartungsstress.',
    images: ['/opengraph-image.png'],
  },
}

export default function WebsiteFuerHandwerkerPage() {
  return (
    <>
      <SiteHeader />
      <main className="relative w-full max-w-full overflow-x-hidden">
        <HandwerkerHero />
        <div className="prose prose-invert mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <HandwerkerPainPointsSection />
          <HandwerkerSolutionSection />
          <HandwerkerComparisonTableSection />
          <HandwerkerBranchesSection />
          <HandwerkerFaqSection />
        </div>
        <HandwerkerFinalCtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
