import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const TITLE = 'Blog & Case Studies | asiaedits.com'
const DESCRIPTION =
  'Case Studies und Fachartikel zu Webdesign, Local SEO und Programmatic SEO für B2B-Unternehmen und Handwerksbetriebe.'
const URL = 'https://asiaedits.com/blog'

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
      { url: '/opengraph-image.png', width: 1200, height: 630, alt: TITLE },
    ],
    locale: 'de_DE',
    type: 'website',
  },
}

const POSTS = [
  {
    href: '/blog/case-study-saaraxt',
    category: 'Case Study & Local SEO',
    title: 'SaarAxt.de: +10% Lead Conversion & 9,2% CTR im Handwerk',
    description:
      'Wie eine entkoppelte Edge-Architektur und WDF*IDF Text-Engineering innerhalb von 30 Tagen lokale Marktführerschaft aufbauen.',
    meta: '6 min Lesezeit',
  },
  {
    href: '/blog/case-study-the-beach',
    category: 'Case Study & Accessibility UX',
    title:
      'The Beach Altersresidenz Thailand: +10% Lead Conversion durch Audio-UX',
    description:
      'Wie zielgruppengerechte Audio-Funktionen und entkoppelte Web-Performance Vertrauen aufbauen und hochkarätige Anfragen generieren.',
    meta: '7 min Lesezeit',
  },
  {
    href: '/blog/b2b-englischer-suchmarkt-metropolen',
    category: 'B2B Strategie & SEO',
    title:
      'Der unterschätzte B2B-Markt: Englische Suchanfragen in Metropolen',
    description:
      'Wie B2B-Dienstleister in deutschen Großstädten mit internationaler SEO-Architektur kaufkräftige Zielgruppen erschließen.',
    meta: '7 min Lesezeit',
  },
  {
    href: '/blog/barrierefreiheit-seo-booster',
    category: 'SEO & Accessibility',
    title: 'Barrierefreiheit als SEO-Booster: Rankings 2026 steigern',
    description:
      'Wie barrierefreies Webdesign, Kontrast-Optimierung und Audio-Features Nutzersignale maximieren und Google-Vertrauen aufbauen.',
    meta: '7 min Lesezeit',
  },
  {
    href: '/blog/core-web-vitals-lcp-guide',
    category: 'Web Performance & Tech SEO',
    title: 'Core Web Vitals 2026: LCP unter 1,0s im B2B erreichen',
    description:
      'Wie extrem kurze Ladezeiten, geringe Latenzen und optimierte Core Web Vitals die Absprungrate senken und Google-Spitzenplätze sichern.',
    meta: '8 min Lesezeit',
  },
  {
    href: '/blog/google-local-pack-dominanz',
    category: 'Local SEO & Geo-Targeting',
    title: 'Local SEO 2026: Schema.org & Local Pack Dominanz',
    description:
      'Wie B2B-Dienstleister und lokale Spezialisten durch strukturierte Geodaten und zielgerichtetes Geo-Targeting die obersten Plätze im Kartenpaket erobern.',
    meta: '7 min Lesezeit',
  },
  {
    href: '/blog/keyword-dualismus-pseo-architektur',
    category: 'Programmatic SEO & Keyword-Strategie',
    title: 'Keyword-Dualismus im pSEO: Webdesign vs. Website',
    description:
      'Wie B2B-Unternehmen durch die Unterscheidung von Agentur- und Ergebnis-Suchanfragen doppelte Reichweite ohne Duplicate Content aufbauen.',
    meta: '7 min Lesezeit',
  },
  {
    href: '/blog/b2b-conversion-ux-lead-pfade',
    category: 'Conversion UX & Architecture',
    title: 'B2B-Conversion-UX: Barrierefreie Lead-Pfade aufbauen',
    description:
      'Wie barrierefreie Nutzerführung, psychologische Vertrauensanker und reibungslose Lead-Pfade aus anonymem Traffic hochkarätige B2B-Mandate erzeugen.',
    meta: '7 min Lesezeit',
  },
  {
    href: '/blog/llm-readiness-agentic-browsing',
    category: 'AI Search & Agentic Browsing',
    title: 'LLM-Readiness & Agentic Browsing: KI-Agenten im B2B',
    description:
      'Wie B2B-Unternehmen durch maschinenlesbare Datenstrukturen, JSON-LD und API-nahe Frontend-Architekturen von automatisierten Beschaffungssystemen gefunden und gewählt werden.',
    meta: '8 min Lesezeit',
  },
  {
    href: '/blog/audio-ux-accessible-micro-interactions',
    category: 'Audio UX & Accessibility',
    title: 'Audio-UX & Barrierefreie Micro-Interactions im B2B',
    description:
      'Wie integrierte Voice-UI, barrierefreie Vorlese-Player und hochgradig zugängliche Micro-Interactions Hürden abbauen und Anfrageraten verdoppeln.',
    meta: '7 min Lesezeit',
  },
  {
    href: '/blog/programmatic-seo-b2b-mittelstand',
    category: 'Programmatic SEO & Scale',
    title: 'Programmatic SEO im B2B-Mittelstand: 100+ Nischen skalieren',
    description:
      'Wie B2B-Dienstleister und Industrieunternehmen hunderte Branchen-Landingpages ohne Duplicate Content aufbauen und Long-Tail-Nischen im Suchmarkt besetzen.',
    meta: '8 min Lesezeit',
  },
  {
    href: '/blog/b2c-buchungs-ux-frictionless-flows',
    category: 'B2C UX & Conversion',
    title: 'B2C Buchungs-UX: In 3 Klicks zum Termin',
    description:
      'Wie reibungslose Formular-Flows, blitzschnelle Ladezeiten und mobile Erstklasse-Erlebnisse aus spontanen Website-Besuchern feste Termine und Buchungen machen.',
    meta: '8 min Lesezeit',
  },
  {
    href: '/blog/local-b2c-dominanz-smartphone-engagement',
    category: 'Local SEO & B2C',
    title: 'Local B2C SEO: Regionale Kunden mobil abholen',
    description:
      'Wie lokale Dienstleister, Gastronomie-Gruppen und Freizeit-Anbieter durch strukturierte Daten, Google Maps Integration und Instant-Performance die regionale Konkurrenz hinter sich lassen.',
    meta: '7 min Lesezeit',
  },
  {
    href: '/blog/b2c-accessibility-generationen-ux',
    category: 'B2C Accessibility',
    title: 'B2C Accessibility: Websites für alle Generationen',
    description:
      'Wie B2C-Plattformen durch vergrößerbare Schriften, Audio-UX, einfache Touch-Bedienung und klare Strukturen kaufkräftige Zielgruppen von Jung bis Alt begeistern.',
    meta: '8 min Lesezeit',
  },
  {
    href: '/blog/programmatic-seo-b2b-skalieren',
    category: 'Programmatic SEO',
    title: 'Programmatic SEO im B2B skalieren',
    description:
      'Wie Technologie und semantisches Varianz-Engineering Reichweite und Kundenanfragen für B2B-Unternehmen skalieren.',
    meta: 'Fachartikel',
  },
]

export default function BlogIndexPage() {
  return (
    <>
      <SiteHeader />
      <main className="relative w-full max-w-full overflow-x-hidden px-4 pt-32 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <header className="mb-12 text-center">
            <p className="mb-3 text-sm font-medium tracking-wide text-primary uppercase">
              Blog &amp; Case Studies
            </p>
            <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl">
              Wissen und Ergebnisse aus echten Projekten
            </h1>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-pretty text-muted-foreground">
              {DESCRIPTION}
            </p>
          </header>

          <ul className="flex flex-col gap-6">
            {POSTS.map((post) => (
              <li key={post.href}>
                <Link
                  href={post.href}
                  className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50 sm:p-8"
                >
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="font-medium text-primary">
                      {post.category}
                    </span>
                    <span aria-hidden="true">&middot;</span>
                    <span>{post.meta}</span>
                  </div>
                  <h2 className="font-heading text-2xl font-semibold text-balance text-foreground">
                    {post.title}
                  </h2>
                  <p className="leading-relaxed text-pretty text-muted-foreground">
                    {post.description}
                  </p>
                  <span className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-primary">
                    Artikel lesen
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
