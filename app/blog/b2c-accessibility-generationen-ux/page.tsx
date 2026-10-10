import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { JsonLd } from '@/components/json-ld'
import { buildBlogPosting, buildBreadcrumbList } from '@/src/lib/schema'
import { ReadingProgress } from '@/components/blog/reading-progress'
import { QuickTakeaways } from '@/components/blog/quick-takeaways'
import { AudioPlayer } from '@/components/blog/audio-player'
import { RelatedPosts } from '@/components/blog/related-posts'
import { ArticleHero } from '@/components/blog/b2c-accessibility-generationen-ux/article-hero'
import { ArticleBody } from '@/components/blog/b2c-accessibility-generationen-ux/article-body'
import { AuditCta } from '@/components/blog/b2c-accessibility-generationen-ux/audit-cta'

const TITLE = 'B2C Accessibility: Websites für alle Generationen'
const DESCRIPTION =
  'B2C Accessibility 2026: Wie einfache Touch-UX, Vorlese-Player & barrierefreies Design Familien & Senioren gewinnen. Jetzt Guide lesen!'
const URL = 'https://asiaedits.com/blog/b2c-accessibility-generationen-ux'

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
  section: 'B2C Accessibility',
  datePublished: '2026-10-01',
})

const breadcrumbSchema = buildBreadcrumbList([
  { name: 'Blog', path: '/blog' },
  { name: TITLE, path: URL },
])

const TAKEAWAYS = [
  'Ältere Menschen und Familien sind eine kaufkräftige B2C-Zielgruppe, die mit kleinen Schriften, schwachen Kontrasten und komplizierten Formularen verloren geht.',
  'Skalierbare Typografie, starke Kontraste und großzügige Touch-Zonen machen Websites auf jedem Gerät und bei jedem Licht mühelos bedienbar.',
  'Ein integrierter Vorlese-Player macht Ratgeber und Reisebeschreibungen ohne Zusatzsoftware zugänglich und erhöht die Verweildauer.',
  'Keine reinen Farb-Signale, aussagekräftige Alt-Texte und ARIA-Attribute sowie eine konsistente Navigation sichern Zugänglichkeit für alle Generationen.',
]

export default function B2cAccessibilityGenerationenUxPage() {
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
          currentSlug="b2c-accessibility-generationen-ux"
          category="accessibility"
        />
        <AuditCta />
      </main>
      <SiteFooter />
    </>
  )
}
