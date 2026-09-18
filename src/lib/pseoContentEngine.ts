import { CityData, IndustryData } from '@/src/data/pseoDatabase'

export interface PSEOContent {
  metaTitle: string
  metaDescription: string
  heroTitle: string
  heroSubtitle: string
  whyText: string
  howText: string
  whatText: string
  boosterTitle: string
  boosterFeatures: string[]
  wdfKeywords: string[]
}

function getVariantIndex(slug: string, variantsCount: number): number {
  let hash = 0
  for (let i = 0; i < slug.length; i++) {
    hash = slug.charCodeAt(i) + ((hash << 5) - hash)
  }
  return Math.abs(hash) % variantsCount
}

export function generatePSEOContent(city?: CityData, industry?: IndustryData): PSEOContent {
  const isCity = !!city
  const slug = city ? city.slug : industry ? industry.slug : 'default'
  const location = city ? city.name : 'Ihrer Region'
  const stateStr = city && city.state !== city.name ? ` in ${city.state}` : ''
  const branch = industry ? industry.name : 'Unternehmen'
  const branchPlural = industry ? industry.pluralName : 'Unternehmen'
  const variant = getVariantIndex(slug, 3)

  const techTerms = [
    'Next.js App Router',
    'Core Web Vitals',
    'LCP-Optimierung',
    'Mobile-First Architecture',
    'Barrierefreiheit',
  ]
  const seoTerms = [
    'Google Maps Local Pack',
    'Schema.org Markup',
    'Geo-Targeting',
    'WDF*IDF Semantik',
    'Konvertierungsrate',
  ]

  // METAS (Deterministic Variations to prevent Duplicate Content)
  const metaTitleOptions = isCity
    ? [
        `Webdesign & SEO in ${location} | High-Speed Websites | Asia Edits`,
        `Webagentur für ${location}${stateStr} | PageSpeed 90+ & SEO Local Booster`,
        `Website erstellen lassen in ${location} | High-Performance & SEO`,
      ]
    : [
        `Website & SEO für ${branchPlural} | High-Speed & KI | Asia Edits`,
        `Webentwicklung für ${branchPlural} | PageSpeed 90+ Garantiert`,
        `Top Google Rankings für ${branchPlural} | SEO Local Booster`,
      ]

  const metaDescOptions = isCity
    ? [
        `High-Performance Webdesign in ${location}. Garantierter Mobile PageSpeed 90+, LCP < 1,0s & exklusives SEO Local Booster Package. Jetzt Festpreis-Angebot anfordern!`,
        `Moderne Websites für Unternehmen in ${location}. Maximale Ladezeit-Performance, barrierefreies Webdesign & regionale SEO-Dominanz ohne Agenturaufschlag.`,
        `Sichern Sie sich den digitalen Vorsprung in ${location}${stateStr}. Sub-Second Webentwicklung mit Next.js & gezieltes Google Maps Geo-Targeting.`,
      ]
    : [
        `Spezialisierte Webentwicklung für ${branchPlural}. PageSpeed 90+ garantiert, lückenloses SEO & exklusiver SEO Local Booster. Jetzt Angebot sichern!`,
        `Neukundengewinnung für ${branchPlural} über blitzschnelle Webseiten. Perfekte Core Web Vitals, Schema.org Markup & lokales WDF*IDF Ranking.`,
        `Mehr digitale Anfragen für ${branchPlural}: Wir bauen maßgeschneiderte High-Speed-Websites mit garantiertem Mobile PageSpeed 90+.`,
      ]

  // GOLDEN CIRCLE: WHY
  const whyOptions = isCity
    ? [
        `Warum verlieren viele Unternehmen in ${location} digitale Interessenten an die regionale Konkurrenz? Träge WordPress-Websites mit Ladezeiten von über 3 Sekunden brechen die Nutzererfahrung mobil ab. Wenn die Performance schwächelt und die Sichtbarkeit in den lokalen Google-Ergebnissen fehlt, wandern potenzielle Kunden ab.`,
        `Der digitale Markt in ${location}${stateStr} vergibt keine zweiten Chancen. Ist eine Website mobil nicht innerhalb einer Sekunde einsatzbereit, brechen über 50 % der Besucher den Vorgang ab. Fehlende lokale Suchmaschinenstruktur verstärkt dieses Problem zusätzlich.`,
        `Sichtbarkeit und Geschwindigkeit entscheiden in ${location} über Geschäftserfolg. Veralterter Code und langsame Ladezeiten bremsen viele etablierte Betriebe aus. Wer auf Smartphones nicht sofort überzeugt, überlässt der Konkurrenz das Feld.`,
      ]
    : [
        `Warum erreichen viele ${branchPlural} trotz hoher Fachkompetenz nicht die gewünschte digitale Reichweite? ${industry?.heroPainPoint || 'Langsame Ladezeiten und fehlende SEO-Struktur kosten täglich wertvolle Anfragen.'} Wer mobil nicht sofort lädt und auf Google nicht unter den ersten Treffern steht, verliert qualifizierte Leads.`,
        `Für ${branchPlural} gilt: Der erste digitale Eindruck ist entscheidend. ${industry?.heroPainPoint || 'Veraltete Webseiten verhindern den nachhaltigen Kundenzulauf.'} Ohne optimierte mobile Ladezeiten und nischenspezifisches WDF*IDF-SEO bleibt wertvolles Potenzial ungenutzt.`,
        `Viele ${branchPlural} kämpfen mit der gleichen Hürde: ${industry?.heroPainPoint || 'Die Online-Präsenz konvertiert zu wenige Besucher in echte Kunden.'} Eine träge Website bremst das Wachstum spürbar aus.`,
      ]

  // GOLDEN CIRCLE: HOW
  const howOptions = [
    `Wir von Asia Edits bauen Ihre digitale Präsenz auf Basis des Next.js App Routers. Das garantiert einen Mobile PageSpeed Score von 90+, LCP-Ladezeiten unter 1,0 Sekunde und lückenlose Barrierefreiheit. Auf Wunsch voll integriert mit Multi-Language-Funktion (DE/EN).`,
    `Asia Edits setzt auf moderne Headless-Architekturen statt überladener Baukastensysteme. Durch schlanken Code erreichen wir für Ihre Seite den garantierten PageSpeed-Score von 90+ auf Mobilgeräten. Komplett optimiert für exzellente Core Web Vitals und optionale Mehrsprachigkeit (DE/EN).`,
    `Unsere technische Lösung eliminiert unnötigen Ballast: Auf Basis neuester Next.js-Technologie entwickeln wir extrem schnelle Webseiten mit garantierten 90+ Punkten im Google PageSpeed Insights Test – inklusive zukunftssicherer Multi-Language-Option.`,
  ]

  // GOLDEN CIRCLE: WHAT
  const whatText = isCity
    ? `Sie erhalten ein maßgeschneidertes Komplettsystem für Ihren Standort in ${location}: Eine extrem schnelle Website, technisches SEO und unser exklusives SEO Local Booster Package für maximale regionale Präsenz.`
    : `Sie erhalten ein schlüsselfertiges System für ${branchPlural}: Von der mobilen High-Speed-Plattform über nischenspezifische WDF*IDF-Texte bis hin zum SEO Local Booster Package.`

  const boosterTitle = `SEO Local Booster Package für ${isCity ? location : branchPlural}`

  const boosterFeatures = [
    `Gezieltes Google Maps & Local Pack Top-3 Geo-Targeting für ${location}`,
    `Strukturierte Daten nach Schema.org (LocalBusiness & Rich Snippets)`,
    `Regionale & branchenspezifische WDF*IDF-Entitäten-Optimierung`,
    `Kontinuierliches Monitoring der Core Web Vitals & Mobile PageSpeed 90+`,
  ]

  const wdfKeywords = industry?.keywords
    ? [...industry.keywords, ...techTerms, ...seoTerms]
    : [...techTerms, ...seoTerms]

  return {
    metaTitle: metaTitleOptions[variant],
    metaDescription: metaDescOptions[variant],
    heroTitle: isCity
      ? `High-Performance Webdesign & SEO in ${location}`
      : `Webentwicklung & SEO-Dominanz für ${branchPlural}`,
    heroSubtitle: `Garantierter Mobile PageSpeed 90+ • LCP unter 1,0 Sekunde • Inklusive SEO Local Booster Package`,
    whyText: whyOptions[variant],
    howText: howOptions[variant],
    whatText,
    boosterTitle,
    boosterFeatures,
    wdfKeywords,
  }
}
