import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { JsonLd } from '@/components/json-ld'
import { buildBlogPosting, buildBreadcrumbList } from '@/src/lib/schema'
import { ReadingProgress } from '@/components/blog/reading-progress'
import { QuickTakeaways } from '@/components/blog/quick-takeaways'
import { AudioPlayer } from '@/components/blog/audio-player'
import { RelatedPosts } from '@/components/blog/related-posts'
import { ArticleHero } from '@/components/blog/b2c-kunden-hubs-custom-webapps/article-hero'
import { ArticleBody } from '@/components/blog/b2c-kunden-hubs-custom-webapps/article-body'
import { AuditCta } from '@/components/blog/b2c-kunden-hubs-custom-webapps/audit-cta'

const TITLE = 'Digitale B2C Kunden-Hubs: Kundenbindung 2026'
const DESCRIPTION =
  'B2C Kunden-Hubs & Webapps 2026: Wie Progressive Web Apps & Next.js klassische Plastikkarten ersetzen. Jetzt Guide lesen!'
const URL = 'https://asiaedits.com/blog/b2c-kunden-hubs-custom-webapps'

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
  section: 'Custom Webapps & B2C',
  datePublished: '2026-10-01',
})

const breadcrumbSchema = buildBreadcrumbList([
  { name: 'Blog', path: '/blog' },
  { name: TITLE, path: URL },
])

const TAKEAWAYS = [
  'Kunden verwalten Bonuspunkte, Termine und Vorteile nicht mehr auf Plastikkarten und laden auch nicht für jeden Anbieter eine eigene App herunter.',
  'Progressive Web Apps laufen direkt im Smartphone-Browser, lassen sich auf dem Startbildschirm ablegen und bieten sofortigen Zugriff ohne Download-Hürde.',
  'Echtzeit-Synchronisation über Edge APIs und Login ohne Passwort-Frust per Magic Link oder Biometrie halten Dashboards aktuell und den Zugang schnell.',
  'Eine entkoppelte Headless-Architektur, verschlüsselte Daten-Caches und barrierefreie Statusmeldungen machen B2C-Plattformen skalierbar und zugänglich.',
]

export default function B2cKundenHubsCustomWebappsPage() {
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
          currentSlug="b2c-kunden-hubs-custom-webapps"
          category="conversion"
        />
        <AuditCta />
      </main>
      <SiteFooter />
    </>
  )
}
