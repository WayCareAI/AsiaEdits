import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  adjustFontFallback: true,
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  title: 'Website erstellen lassen vom Freelancer | High-Speed Webdesign asiaedits',
  description:
    'Moderne Websites ohne WordPress-Frust. Blitzschnell (90+ PageSpeed), SEO-optimiert & flexibel ab 199 €.',
  generator: 'v0.app',
  metadataBase: new URL('https://asiaedits.com'),
  alternates: {
    canonical: 'https://asiaedits.com',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'asiaedits.com | High-Speed Webdesign & Development',
    description:
      'Garantierte 90+ PageSpeed Performance & SEO-Optimierung ohne Agenturaufschlag.',
    url: 'https://asiaedits.com',
    siteName: 'asiaedits.com',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'asiaedits.com High-Speed Webdesign',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'asiaedits.com | High-Speed Webdesign',
    description: 'Moderne Websites mit 90+ PageSpeed Garantie.',
    images: ['/opengraph-image.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b0f19',
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'asiaedits.com',
  url: 'https://asiaedits.com',
  logo: 'https://asiaedits.com/icon.png',
  image: 'https://asiaedits.com/opengraph-image.png',
  description:
    'High-Speed Webdesign & Development vom Freelancer mit garantierter 90+ Google PageSpeed Performance.',
  parentOrganization: {
    '@type': 'Organization',
    name: 'LocITo Labs LLC',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'DE',
      addressCountry: 'US',
    },
  },
  knowsAbout: [
    'Web Design',
    'Web Development',
    'PageSpeed Optimization',
    'Search Engine Optimization',
    'Next.js',
  ],
  priceRange: '€€',
  email: 'john@asiaedits.com',
  offers: {
    '@type': 'Offer',
    name: 'High-Speed Webdesign Paket',
    priceCurrency: 'EUR',
    price: '199.00',
    url: 'https://asiaedits.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="de"
      className={`dark relative w-full max-w-full overflow-x-hidden bg-background ${spaceGrotesk.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="relative w-full max-w-full overflow-x-hidden font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
