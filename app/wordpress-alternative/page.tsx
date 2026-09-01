import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ArticleHero } from '@/components/wordpress-alternative/article-hero'
import { PainPointsSection } from '@/components/wordpress-alternative/pain-points-section'
import { ModernAlternativeSection } from '@/components/wordpress-alternative/modern-alternative-section'
import { ComparisonTableSection } from '@/components/wordpress-alternative/comparison-table-section'
import { AudienceSection } from '@/components/wordpress-alternative/audience-section'
import { ArticleFaqSection } from '@/components/wordpress-alternative/article-faq-section'
import { FinalCtaSection } from '@/components/wordpress-alternative/final-cta-section'

export const metadata: Metadata = {
  title: 'WordPress Alternative 2026: Next.js Webdesign ab 199 € | asiaedits',
  description:
    'Schluss mit langsamen WordPress-Themes, Plugin-Frust & Hacking-Risiko. Wir bauen deine Website auf blitzschneller Next.js-Basis (100/100 PageSpeed).',
  alternates: {
    canonical: 'https://www.asiaedits.com/wordpress-alternative',
  },
  openGraph: {
    title: 'WordPress Alternative 2026: Next.js Webdesign ab 199 €',
    description:
      'Schluss mit langsamen WordPress-Themes, Plugin-Frust & Hacking-Risiko. Wir bauen deine Website auf blitzschneller Next.js-Basis (100/100 PageSpeed).',
    url: 'https://www.asiaedits.com/wordpress-alternative',
    siteName: 'asiaedits.com',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'asiaedits.com WordPress Alternative',
      },
    ],
    locale: 'de_DE',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WordPress Alternative 2026: Next.js Webdesign ab 199 €',
    description:
      'Schluss mit langsamen WordPress-Themes, Plugin-Frust & Hacking-Risiko.',
    images: ['/opengraph-image.png'],
  },
}

export default function WordPressAlternativePage() {
  return (
    <>
      <SiteHeader />
      <main className="relative w-full max-w-full overflow-x-hidden">
        <ArticleHero />
        <div className="prose prose-invert mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <PainPointsSection />
          <ModernAlternativeSection />
          <ComparisonTableSection />
          <AudienceSection />
          <ArticleFaqSection />
        </div>
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
