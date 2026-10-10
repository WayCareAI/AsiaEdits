import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { JsonLd } from '@/components/json-ld'
import { BenchmarkHero } from '@/components/wordpress-vergleich/benchmark-hero'
import { MetricHighlights } from '@/components/wordpress-vergleich/metric-highlights'
import { BenchmarkTable } from '@/components/wordpress-vergleich/benchmark-table'
import { FinalCtaSection } from '@/components/wordpress-alternative/final-cta-section'
import {
  SITE_URL,
  buildBreadcrumbList,
  buildGraph,
  buildTechArticle,
} from '@/src/lib/schema'

const PAGE_URL = `${SITE_URL}/wordpress-alternative-vergleich`
const TITLE = 'WordPress vs. Next.js 2026: Performance- & PageSpeed-Benchmark'
const DESCRIPTION =
  'Vergleichende Analyse von Google PageSpeed Insights Daten zwischen traditionellem WordPress Hosting und moderner Next.js Web-Architektur.'

export const metadata: Metadata = {
  title: `${TITLE} | AsiaEdits`,
  description: DESCRIPTION,
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
        alt: 'WordPress vs. Next.js Performance-Benchmark 2026',
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

const { '@context': _context, ...breadcrumbNode } = buildBreadcrumbList([
  { name: 'WordPress vs. Next.js Benchmark', path: PAGE_URL },
])

const pageSchema = buildGraph([
  buildTechArticle({ headline: TITLE, description: DESCRIPTION, url: PAGE_URL }),
  breadcrumbNode,
])

export default function WordPressVergleichPage() {
  return (
    <>
      <SiteHeader />
      <main className="relative w-full max-w-full overflow-x-hidden">
        <JsonLd data={pageSchema} />
        <BenchmarkHero />
        <MetricHighlights />
        <BenchmarkTable />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
