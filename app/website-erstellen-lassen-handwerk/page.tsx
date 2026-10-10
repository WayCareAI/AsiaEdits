import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { JsonLd } from '@/components/json-ld'
import { PricingSection } from '@/components/pricing-section'
import { FinalCtaSection } from '@/components/wordpress-alternative/final-cta-section'
import { HandwerkHero } from '@/components/website-erstellen-lassen-handwerk/handwerk-hero'
import { HandwerkProblemSolution } from '@/components/website-erstellen-lassen-handwerk/handwerk-problem-solution'
import { HandwerkMetrics } from '@/components/website-erstellen-lassen-handwerk/handwerk-metrics'
import {
  HandwerkFaq,
  HANDWERK_FAQ_ITEMS,
} from '@/components/website-erstellen-lassen-handwerk/handwerk-faq'
import {
  SITE_URL,
  buildBreadcrumbList,
  buildGraph,
} from '@/src/lib/schema'

const PAGE_URL = `${SITE_URL}/website-erstellen-lassen-handwerk`
const TITLE = 'Website erstellen lassen für Handwerker ab 199 €'
const DESCRIPTION =
  'Website erstellen lassen für Handwerker: ultraschnelles Next.js Webdesign, PageSpeed 95+ & Google-Maps-Anbindung. Festpreis ab 199 €. Jetzt anfragen!'

export const metadata: Metadata = {
  title: `${TITLE} | AsiaEdits`,
  description: DESCRIPTION,
  keywords: [
    'website erstellen lassen handwerker',
    'handwerker website',
    'homepage für handwerker',
    'website für bauunternehmen',
    'website für dachdecker',
    'website für elektriker',
    'website für sanitär',
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: 'asiaedits.com',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Website erstellen lassen für Handwerker – AsiaEdits',
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

const { '@context': _context, ...breadcrumbNode } = buildBreadcrumbList([
  { name: 'Website für Handwerker', path: PAGE_URL },
])

const pageSchema = buildGraph([
  {
    '@type': 'FAQPage',
    mainEntity: HANDWERK_FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  },
  breadcrumbNode,
])

export default function WebsiteErstellenLassenHandwerkPage() {
  return (
    <>
      <SiteHeader />
      <main className="relative w-full max-w-full overflow-x-hidden">
        <JsonLd data={pageSchema} />
        <HandwerkHero />
        <HandwerkProblemSolution />
        <HandwerkMetrics />
        <PricingSection />
        <HandwerkFaq />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
