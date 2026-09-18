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
  const location = city ? city.name : 'Deiner Region'
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

  // METAS (Exact-Match Keyword Formulas: "Webdesign für [Branche]" / "Webdesign [Stadt]")
  const metaTitleOptions = isCity
    ? [
        `Webdesign ${location} | High-Speed Website (90+)`,
        `Webdesign ${location} | SEO Local Booster Package`,
        `Webdesign & SEO in ${location} | Asia Edits`,
      ]
    : [
        `Webdesign für ${branchPlural} | PageSpeed 90+ & SEO`,
        `Webdesign für ${branchPlural} | SEO Local Booster`,
        `Webdesign & SEO für ${branchPlural} | Asia Edits`,
      ]

  const metaDescription = isCity
    ? `Professionelles Webdesign in ${location}. Garantierter Mobile PageSpeed 90+, LCP < 1,0s & exklusives SEO Local Booster Package. Jetzt Angebot anfordern!`
    : `Professionelles Webdesign für ${branchPlural}. Garantierter Mobile PageSpeed 90+, LCP < 1,0s & exklusives SEO Local Booster Package. Jetzt Angebot sichern!`

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
    `Wir von Asia Edits bauen Deine digitale Präsenz auf Basis des Next.js App Routers. Das garantiert einen Mobile PageSpeed Score von 90+, LCP-Ladezeiten unter 1,0 Sekunde und lückenlose Barrierefreiheit. Auf Wunsch voll integriert mit Multi-Language-Funktion (DE/EN).`,
    `Asia Edits setzt auf moderne Headless-Architekturen statt überladener Baukastensysteme. Durch schlanken Code erreichen wir für Deine Seite den garantierten PageSpeed-Score von 90+ auf Mobilgeräten. Komplett optimiert für exzellente Core Web Vitals und optionale Mehrsprachigkeit (DE/EN).`,
    `Unsere technische Lösung eliminiert unnötigen Ballast: Auf Basis neuester Next.js-Technologie entwickeln wir extrem schnelle Webseiten für Deinen Auftritt mit garantierten 90+ Punkten im Google PageSpeed Insights Test – inklusive zukunftssicherer Multi-Language-Option.`,
  ]

  // GOLDEN CIRCLE: WHAT
  const whatText = isCity
    ? `Du erhältst ein maßgeschneidertes Komplettsystem für Deinen Standort in ${location}: Eine extrem schnelle Website, technisches SEO und unser exklusives SEO Local Booster Package für maximale regionale Präsenz.`
    : `Du erhältst ein schlüsselfertiges System für ${branchPlural}: Von der mobilen High-Speed-Plattform über nischenspezifische WDF*IDF-Texte bis hin zum SEO Local Booster Package.`

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
    metaDescription,
    heroTitle: isCity ? `Webdesign & SEO in ${location}` : `Webdesign & SEO für ${branchPlural}`,
    heroSubtitle: `Garantierter Mobile PageSpeed 90+ • LCP unter 1,0 Sekunde • Inklusive SEO Local Booster Package`,
    whyText: whyOptions[variant],
    howText: howOptions[variant],
    whatText,
    boosterTitle,
    boosterFeatures,
    wdfKeywords,
  }
}
