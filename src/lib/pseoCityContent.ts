import { ALL_CITIES, CityData, getCityBySlug } from '../data/pseoDatabase'

export type CityCategory = 'metropole' | 'industrie' | 'regional'

export interface PSEOCityTextSection {
  heading: string
  paragraphs: string[]
}

export interface PSEOCityContent {
  category: CityCategory
  hero: { title: string; intro: string }
  market: PSEOCityTextSection
  tech: PSEOCityTextSection
  deliverables: {
    heading: string
    intro: string
    items: { title: string; description: string }[]
    outro: string
  }
  faq: {
    heading: string
    intro: string
    items: { question: string; answer: string }[]
  }
  wordCount: number
}

// ---------------------------------------------------------------------------
// City classification matrix
// ---------------------------------------------------------------------------

const METROPOLEN = new Set([
  'berlin',
  'hamburg',
  'muenchen',
  'koeln',
  'frankfurt-am-main',
  'stuttgart',
  'duesseldorf',
  'leipzig',
  'dresden',
  'nuernberg',
  'hannover',
  'wien',
  'zuerich',
])

const INDUSTRIE_STANDORTE = new Set([
  'dortmund',
  'essen',
  'duisburg',
  'bochum',
  'wuppertal',
  'bielefeld',
  'mannheim',
  'karlsruhe',
  'augsburg',
  'ludwigshafen',
  'leverkusen',
  'solingen',
  'remscheid',
  'oberhausen',
  'moers',
  'krefeld',
  'moenchengladbach',
  'neuss',
  'ratingen',
  'mettmann',
  'esslingen',
  'boeblingen',
  'ludwigsburg',
  'pforzheim',
  'fuerth',
  'erlangen',
  'offenbach',
  'hanau',
  'darmstadt',
  'bergisch-gladbach',
  'bremen',
  'kassel',
  'saarbruecken',
  'basel',
  'linz',
  'graz',
])

export function getCityCategory(slug: string): CityCategory {
  if (METROPOLEN.has(slug)) return 'metropole'
  if (INDUSTRIE_STANDORTE.has(slug)) return 'industrie'
  return 'regional'
}

// ---------------------------------------------------------------------------
// Deterministic variant selection
// ---------------------------------------------------------------------------

function hash(input: string): number {
  let h = 2166136261
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

function pick<T>(slug: string, salt: string, options: readonly T[]): T {
  return options[hash(`${slug}|${salt}`) % options.length]
}

interface Ctx {
  key: string
  c: string
  n0: string
  n1: string
  regionPhrase: string
  category: CityCategory
}

type Sentence = (x: Ctx) => string

function build(x: Ctx, salt: string, options: readonly Sentence[]): string {
  return pick(x.key, salt, options)(x)
}

function buildByCategory(
  x: Ctx,
  salt: string,
  options: Record<CityCategory, readonly Sentence[]>,
): string {
  return pick(x.key, salt, options[x.category])(x)
}

function buildContext(city: CityData, attempt: number): Ctx {
  const key = `${city.slug}#${attempt}`
  const nearby = city.nearbyCities
    .map((slug) => getCityBySlug(slug)?.name)
    .filter((name): name is string => Boolean(name))
  const fallback = city.state !== city.name ? city.state : 'dem Umland'
  const first = nearby.length ? hash(`${key}|nearby`) % nearby.length : 0
  const second = nearby.length > 1 ? (first + 1 + (hash(`${key}|nearby2`) % (nearby.length - 1))) % nearby.length : first
  const n0 = nearby[first] ?? fallback
  const n1 = nearby[second] ?? n0
  return {
    key,
    c: city.name,
    n0,
    n1,
    regionPhrase: city.state !== city.name ? city.state : 'der Region',
    category: getCityCategory(city.slug),
  }
}

// ---------------------------------------------------------------------------
// Section 1: Hero & strategic hook
// ---------------------------------------------------------------------------

const HERO_KEYWORD: Sentence[] = [
  ({ c }) => `Webdesign in ${c} mit garantiertem PageSpeed 90+ macht aus Besuchern Anfragen.`,
  ({ c }) => `Gutes Webdesign in ${c} beginnt mit PageSpeed 90+ auf dem Smartphone.`,
  ({ c }) => `Wer Webdesign in ${c} plant, braucht PageSpeed 90+ als messbare Grundlage.`,
  ({ c }) => `Modernes Webdesign in ${c} liefert PageSpeed 90+ und damit spürbar mehr Anfragen.`,
  ({ c }) => `Webdesign in ${c} ist erst dann stark, wenn PageSpeed 90+ garantiert ist.`,
  ({ c }) => `Unser Webdesign in ${c} setzt auf PageSpeed 90+ statt auf leere Versprechen.`,
  ({ c }) => `Für Webdesign in ${c} gilt bei uns ein klares Ziel: PageSpeed 90+ auf Mobilgeräten.`,
  ({ c }) => `Webdesign in ${c} mit PageSpeed 90+ verkürzt den Weg vom Klick zur Kontaktanfrage.`,
  ({ c }) => `Professionelles Webdesign in ${c} bedeutet für uns PageSpeed 90+ ab dem ersten Release.`,
  ({ c }) => `Wer in ${c} online gefunden werden will, braucht Webdesign mit PageSpeed 90+.`,
  ({ c }) => `Webdesign in ${c} liefert bei uns PageSpeed 90+ als festen Bestandteil jedes Projekts.`,
  ({ c }) => `Schnelles Webdesign in ${c} mit PageSpeed 90+ überzeugt Besucher schon beim Laden.`,
]

const HERO_OPENER: Record<CityCategory, Sentence[]> = {
  metropole: [
    ({ c }) =>
      `In ${c} entscheidet sich im Wettbewerb um digitale Marktführerschaft innerhalb von Sekunden, wer den Auftrag bekommt.`,
    ({ c }) =>
      `Kaum ein Markt ist so dicht und so schnell wie ${c}: Wer hier online nicht sofort überzeugt, wird einfach übersprungen.`,
  ],
  industrie: [
    ({ c }) =>
      `Unternehmen in ${c} verlassen sich auf gewachsene Kundenbeziehungen, doch Neukunden suchen heute zuerst online nach Anbietern.`,
    ({ c }) =>
      `Der Mittelstand in ${c} liefert hochwertige Leistungen, verschenkt aber oft Anfragen durch eine technisch veraltete Website.`,
  ],
  regional: [
    ({ c }) =>
      `Als regionales Wirtschaftszentrum lebt ${c} von Empfehlungen, die heute fast immer mit einer Google-Suche beginnen.`,
    ({ c }) =>
      `Wer in ${c} lokal gefunden werden will, steht mit jeder langsamen Seite im direkten Nachteil gegenüber der Konkurrenz.`,
  ],
}

const HERO_LOSS: Sentence[] = [
  () =>
    `Lädt Ihre Website länger als 1,5 Sekunden oder wirkt sie auf dem Smartphone unfertig, gehen B2B-Leads und B2C-Kunden direkt an Wettbewerber verloren.`,
  () =>
    `Jede Ladezeit über 1,5 Sekunden und jeder Layoutfehler auf mobilen Displays kostet Anfragen von Geschäftskunden und Endverbrauchern.`,
  () =>
    `Sobald Ihre Seite mobil mehr als 1,5 Sekunden braucht oder Buttons verrutschen, wandern B2B-Interessenten und B2C-Kunden zum nächsten Anbieter.`,
]

const HERO_NEARBY: Sentence[] = [
  ({ c, n0 }) =>
    `Das betrifft Betriebe in ${c} ebenso wie Anbieter aus ${n0}, denn Nutzer vergleichen Angebote mit einem Fingertipp.`,
  ({ c, n0 }) =>
    `Dabei konkurrieren Sie nicht nur mit Anbietern aus ${c}, sondern auch mit Mitbewerbern aus ${n0}, deren Seiten schneller laden.`,
  ({ c, n0 }) =>
    `Interessenten aus ${n0} und ${c} wechseln ohne Zögern zu dem Anbieter, dessen Seite sofort reagiert.`,
]

const HERO_LEGACY: Sentence[] = [
  () =>
    `Schwerfällige Systeme wie WordPress oder Typo3 laden Plugins, Datenbankabfragen und Skripte bei jedem Aufruf neu, während moderne Next.js-Edge-Technologie fertige Seiten in Millisekunden ausliefert.`,
  () =>
    `Legacy-CMS wie WordPress oder Typo3 erzeugen jede Seite erst beim Aufruf, Next.js auf dem Edge-Netzwerk liefert sie dagegen vorgerendert aus.`,
  () =>
    `Wo WordPress und Typo3 unter Plugin-Ballast leiden, setzt unsere Next.js-Edge-Architektur auf schlanken Code und vorgerenderte Seiten.`,
]

// ---------------------------------------------------------------------------
// Section 2: Regional market dynamics
// ---------------------------------------------------------------------------

const MARKET_OPENER: Record<CityCategory, Sentence[]> = {
  metropole: [
    ({ c }) =>
      `${c} zählt zu den umkämpftesten Märkten im deutschsprachigen Raum: Hunderte Anbieter buhlen um dieselben Suchbegriffe, und Nutzer erwarten digitale Erlebnisse auf Konzernniveau.`,
    ({ c }) =>
      `In ${c} treffen internationale Konzerne, Start-ups und etablierte Dienstleister aufeinander, weshalb jede Seite mit hohen Erwartungen an Tempo und Design konkurriert.`,
  ],
  industrie: [
    ({ c }) =>
      `In ${c} prägen Industrie, Handwerk und Zulieferer die Wirtschaft, und Einkäufer prüfen Lieferanten längst online, bevor sie zum Telefon greifen.`,
    ({ c }) =>
      `Der Mittelstand in ${c} kämpft um qualifizierte Anfragen, weil Entscheider Fachbetriebe zuerst per Smartphone recherchieren und vergleichen.`,
  ],
  regional: [
    ({ c }) =>
      `In ${c} entscheidet lokale Sichtbarkeit: Kunden suchen nach Leistungen in der Nähe und wählen meist einen der ersten drei Treffer.`,
    ({ c }) =>
      `Die Wirtschaft in ${c} ist überschaubar, die Konkurrenz um lokale Suchtreffer aber spürbar, denn jeder Betrieb will in der Google-Karte oben stehen.`,
  ],
}

const MARKET_MOBILE: Sentence[] = [
  ({ c }) =>
    `Die mobile Suche in ${c} verlangt Instant Touch-UX: Click-to-Call, sichtbare Kontaktbuttons und Formulare, die sich mit dem Daumen bedienen lassen.`,
  ({ c }) =>
    `Smartphone-Nutzer in ${c} wollen sofort anrufen, buchen oder anfragen, ohne zu zoomen, zu scrollen oder Formulare mühsam auszufüllen.`,
  ({ c }) =>
    `Mobile Besucher aus ${c} erwarten eine Oberfläche, die auf Berührung reagiert, Telefonnummern direkt wählbar macht und Anfragen in wenigen Schritten ermöglicht.`,
]

const MARKET_REGION: Sentence[] = [
  ({ c, n1, regionPhrase }) =>
    `Zwischen ${c} und ${n1} sowie in ${regionPhrase} vergleichen Nutzer ähnliche Anbieter, und am Ende entscheidet häufig nur die Ladezeit.`,
  ({ c, n1, regionPhrase }) =>
    `Auch Interessenten aus ${n1} und ${regionPhrase} recherchieren zuerst nach Anbietern in ${c}, sodass Ihre Seite im Vergleich bestehen muss.`,
  ({ c, n1 }) =>
    `Der Einzugsbereich von ${c} reicht bis ${n1}, deshalb zählt jede Verzögerung doppelt, weil Nutzer unterwegs mit schwankendem Mobilfunknetz suchen.`,
]

const MARKET_FLOWS: Record<CityCategory, Sentence[]> = {
  metropole: [
    () =>
      `Reibungslose Buchungs- und Anfrageprozesse sind hier Pflicht, denn urbane Nutzer brechen bei jedem überflüssigen Formularfeld ab.`,
    () =>
      `Frictionless Inquiry-Flows mit wenigen Feldern und klarer Rückmeldung senken die Absprungrate und beschleunigen die Lead-Generierung.`,
  ],
  industrie: [
    () =>
      `B2B-Entscheider erwarten klare Leistungsprofile, nachvollziehbare Referenzen und eine Anfrage, die ohne Umwege beim Vertrieb ankommt.`,
    () =>
      `Im B2B-Umfeld zählt ein verlässlicher Anfrageweg: wenige Pflichtfelder, schnelle Antwort und sichtbare Ansprechpartner steigern die Lead-Generierung.`,
  ],
  regional: [
    () =>
      `Für lokale Kunden zählen Öffnungszeiten, Anfahrt und ein direkter Draht zum Betrieb, den eine gute Website mit einem Tipp anbietet.`,
    () =>
      `Ein kurzer Buchungs- oder Anfrageweg ohne Registrierung verwandelt lokale Suchtreffer zuverlässig in Termine und Aufträge.`,
  ],
}

const MARKET_TRUST: Sentence[] = [
  ({ c, n0 }) =>
    `Wer hier vertrauenswürdig auftreten will, braucht eine Website, die in ${c} und ${n0} gleichermaßen schnell, sicher und seriös wirkt.`,
  ({ c, n0 }) =>
    `Vertrauen entsteht in ${c} wie in ${n0} durch Tempo, klare Struktur und eine Oberfläche, die auf jedem Gerät professionell wirkt.`,
  ({ c, n0 }) =>
    `Besucher aus ${n0} und ${c} schließen von der Ladezeit direkt auf die Qualität Ihres Angebots, und diesen ersten Eindruck gibt es nur einmal.`,
]

const MARKET_RANKING: Sentence[] = [
  () =>
    `Für Top-Platzierungen in den lokalen Suchergebnissen reicht Keyword-Dichte längst nicht mehr aus; Google belohnt technische Perfektion, saubere Struktur und messbar schnelle Seiten.`,
  ({ c }) =>
    `Rankings in ${c} entstehen heute durch Core Web Vitals, strukturierte Daten und klare Inhalte statt durch bloße Keyword-Wiederholung.`,
  () =>
    `Wer lokal vorn stehen will, braucht mehr als Schlagworte: Technische Qualität, Schema.org LocalBusiness Markup und konstant gute Ladezeiten entscheiden über die Position.`,
]

const MARKET_CLOSER: Sentence[] = [
  ({ c, n0 }) =>
    `Baukasten-Websites scheitern genau hier, weil sie Besucher aus ${c} und ${n0} mit Ballast, Wartezeiten und unklaren Handlungsaufforderungen verlieren.`,
  ({ c, n0 }) =>
    `Standard-Websites verspielen ihren Vorsprung, sobald Nutzer aus ${n0} oder ${c} auf langsame Ladebalken und überladene Menüs treffen.`,
  ({ c, n0 }) =>
    `Austauschbare Template-Seiten überzeugen weder in ${c} noch in ${n0}, weil sie weder schnell noch klar auf die Anfrage ausgerichtet sind.`,
]

// ---------------------------------------------------------------------------
// Section 3: Technical architecture & Core Web Vitals
// ---------------------------------------------------------------------------

const TECH_STACK: Sentence[] = [
  ({ c }) =>
    `Für Unternehmen in ${c} setzen wir auf eine Headless Architecture mit Next.js, bei der Server-Side Rendering fertige Seiten bereits vor dem Aufruf erzeugt.`,
  ({ c }) =>
    `Unser Stack für ${c} kombiniert Next.js, Server-Side Rendering und Tailwind CSS zu einer schlanken Architektur ohne Plugin-Ballast.`,
  ({ c }) =>
    `Die AsiaEdits-Architektur für ${c} basiert auf Next.js und Server-Side Rendering, damit Inhalte ohne Wartezeit im Browser erscheinen.`,
]

const TECH_LCP: Sentence[] = [
  () =>
    `Das Ergebnis ist ein Largest Contentful Paint von unter 1,0 Sekunden, den wir im Core Web Vitals LCP-Bericht für Ihre Seite nachweisen.`,
  () =>
    `Dadurch erreichen wir einen LCP unter 1,0 Sekunden, also deutlich besser als die von Google empfohlene Grenze von 2,5 Sekunden.`,
  () =>
    `Der Hauptinhalt erscheint nach weniger als einer Sekunde, sodass der LCP klar im grünen Bereich der Core Web Vitals bleibt.`,
]

const TECH_EDGE: Sentence[] = [
  ({ c }) =>
    `Durch feste Platzhalter für Bilder und Schriften entsteht kein Layout Shift (CLS 0), und die globale Edge-Infrastruktur liefert Inhalte aus einem Knoten nahe ${c}.`,
  ({ c, n0 }) =>
    `Weil nichts verspringt, bleibt der CLS bei null, und das globale Enterprise-Edge-Netzwerk bedient Besucher aus ${c} und ${n0} vom nächstgelegenen Standort.`,
  ({ c, n1 }) =>
    `Reservierter Platz für alle Elemente verhindert Layout Shifts, und verteilte Edge-Server beschleunigen jeden Aufruf aus ${c} und ${n1}.`,
]

const TECH_IMAGES: Sentence[] = [
  () =>
    `Bilder werden automatisch in WebP und AVIF konvertiert, responsiv skaliert und erst geladen, wenn sie sichtbar werden.`,
  () =>
    `Eine automatische Bildoptimierung liefert WebP- und AVIF-Dateien in genau der Größe, die das jeweilige Endgerät benötigt.`,
  () =>
    `Moderne Formate wie WebP und AVIF sparen oft mehr als die Hälfte der Dateigröße, ohne dass die Bildqualität sichtbar leidet.`,
]

const TECH_CACHING: Sentence[] = [
  ({ c, n0 }) =>
    `Die Auslieferung über ein europäisches Edge-Netzwerk hält die Wege für Besucher aus ${c} und ${n0} kurz und unterstützt eine DSGVO-konforme Umsetzung.`,
  ({ c, n0 }) =>
    `Zusätzlich sorgen Caching und Prefetching dafür, dass Folgeseiten für Nutzer in ${c} und ${n0} beim Klick praktisch ohne Wartezeit erscheinen.`,
  ({ c, n0 }) =>
    `Intelligentes Caching und vorausschauendes Laden lassen Unterseiten für Besucher aus ${n0} und ${c} nahezu verzögerungsfrei öffnen.`,
]

const TECH_GUARANTEE: Sentence[] = [
  () =>
    `Deshalb garantieren wir einen mobilen PageSpeed-Score von 90+: Er ist für Google ein Rankingfaktor und für Besucher ein sichtbares Vertrauenssignal.`,
  ({ c }) =>
    `Unsere PageSpeed 90+ Garantie ist kein Marketingversprechen, sondern Ranking-Grundlage und Vertrauensanker, den Nutzer in ${c} sofort spüren.`,
  () =>
    `Mit garantiertem PageSpeed 90+ auf Mobilgeräten verbessern wir Ihre Sichtbarkeit bei Google und stärken zugleich das Vertrauen Ihrer Besucher.`,
]

const TECH_MONITORING: Sentence[] = [
  ({ c, n1 }) =>
    `Auch nach dem Launch prüfen wir die Core Web Vitals laufend, damit Besucher aus ${n1} und ${c} dauerhaft dieselbe Geschwindigkeit erleben.`,
  ({ c, n1 }) =>
    `Ein Monitoring der Core Web Vitals stellt sicher, dass Ihre Seite für Nutzer aus ${c} und ${n1} auch nach Änderungen im grünen Bereich bleibt.`,
  ({ c, n1 }) =>
    `Nach dem Launch überwachen wir LCP, CLS und INP weiter, damit neue Inhalte die Geschwindigkeit in ${c} und ${n1} nicht verschlechtern.`,
]

const TECH_CLOSER: Record<CityCategory, Sentence[]> = {
  metropole: [
    ({ c }) =>
      `Gerade im hart umkämpften Umfeld von ${c} sorgt diese Ladezeiten-Optimierung für den entscheidenden Vorsprung.`,
  ],
  industrie: [
    ({ c }) =>
      `Für den Mittelstand in ${c} bedeutet diese Ladezeiten-Optimierung geringere Absprungraten und mehr qualifizierte Anfragen.`,
  ],
  regional: [
    ({ c }) =>
      `Für regionale Anbieter in ${c} wird die Ladezeiten-Optimierung zum Hebel für bessere Platzierungen im lokalen Google-Ranking.`,
  ],
}

// ---------------------------------------------------------------------------
// Section 4: Deliverables
// ---------------------------------------------------------------------------

const DELIVERABLES_INTRO: Sentence[] = [
  ({ c, n0 }) =>
    `Jedes Projekt für ${c} und das Umland um ${n0} umfasst diese vier Leistungsbausteine.`,
  ({ c, n0 }) =>
    `Unser Komplettpaket für Kunden aus ${c} und ${n0} besteht aus vier fest definierten Bausteinen.`,
  ({ c }) =>
    `Für ${c} liefern wir ein Webdesign-Paket mit vier Bausteinen, die zusammen Sichtbarkeit und Umsatz stärken.`,
]

const DELIVERABLES_OUTRO: Sentence[] = [
  ({ c }) =>
    `Alle Bausteine setzen wir zum Festpreis um, sodass Sie in ${c} von Beginn an wissen, welche Kosten und welche Ergebnisse Sie erwarten dürfen.`,
  ({ c }) =>
    `Sie erhalten ein klar definiertes Leistungspaket zum Festpreis, ohne versteckte Folgekosten und mit messbaren Zielwerten für Ihre Website in ${c}.`,
  ({ c }) =>
    `Der Festpreis deckt Konzeption, Entwicklung und Launch ab, damit Ihr Projekt in ${c} planbar und ohne Überraschungen startet.`,
]

const FAQ_INTRO: Sentence[] = [
  ({ c, n0 }) =>
    `Hier beantworten wir die Fragen, die Kunden aus ${c} und ${n0} uns am häufigsten stellen, kompakt und ohne Fachjargon.`,
  ({ c, n0 }) =>
    `Die wichtigsten Antworten für Unternehmen aus ${n0} und ${c} haben wir übersichtlich für Sie zusammengestellt.`,
  ({ c, n1 }) =>
    `Diese Fragen hören wir von Interessenten aus ${c} und ${n1} besonders oft, deshalb beantworten wir sie direkt hier.`,
]

const DELIVERABLE_ITEMS: { title: string; variants: Sentence[] }[] = [
  {
    title: 'Custom Next.js & Tailwind CSS Frontend',
    variants: [
      ({ c }) =>
        `Ein einzigartiges, auf Ihre Marke in ${c} zugeschnittenes Design ohne aufgeblähte Fertig-Templates.`,
      ({ c }) =>
        `Individuell gestaltet und von Hand entwickelt für Ihren Auftritt in ${c}, ohne vorgefertigte Templates und unnötigen Code.`,
    ],
  },
  {
    title: 'Local SEO & Schema.org Integration',
    variants: [
      ({ c }) =>
        `Sauberes LocalBusiness JSON-LD Markup stärkt Ihre Sichtbarkeit im Google Local Pack für ${c}.`,
      ({ c }) =>
        `Strukturierte LocalBusiness-Daten helfen Google, Ihren Standort in ${c} eindeutig zuzuordnen und im Local Pack zu zeigen.`,
    ],
  },
  {
    title: 'Accessibility & WCAG 2.1 Standards',
    variants: [
      ({ c }) =>
        `Eine inklusive Oberfläche für alle Bevölkerungsgruppen in ${c}, konform zu den europäischen Barrierefreiheitsrichtlinien.`,
      ({ c }) =>
        `Kontraste, Tastaturbedienung und Screenreader-Struktur nach WCAG 2.1 machen Ihre Website in ${c} für alle nutzbar und rechtssicher.`,
    ],
  },
  {
    title: 'Conversion-Focused Lead Funnels',
    variants: [
      ({ c }) =>
        `Optimierte CTA-Platzierung, sofortige Dialog-Trigger und reibungslose mehrstufige Anfrageformulare für Interessenten in ${c}.`,
      ({ c }) =>
        `Gezielt platzierte Handlungsaufforderungen und mehrstufige Formulare führen Besucher aus ${c} ohne Umwege zur Anfrage.`,
    ],
  },
]

// ---------------------------------------------------------------------------
// Section 5: FAQ
// ---------------------------------------------------------------------------

const FAQ_ITEMS: {
  question: Sentence
  answers: Sentence[]
}[] = [
  {
    question: ({ c }) =>
      `Wie unterscheidet sich AsiaEdits von traditionellen Werbeagenturen in ${c}?`,
    answers: [
      ({ c }) =>
        `Während viele Agenturen in ${c} auf schwere CMS-Systeme und lange Projektlaufzeiten setzen, entwickeln wir extrem schlanke, wartungsfreie Web-Applikationen auf Next.js-Basis mit garantierter PageSpeed-Performance 90+.`,
      ({ c }) =>
        `Statt schwerer Baukasten-Systeme und langer Projektlaufzeiten liefern wir in ${c} schlanke, wartungsarme Next.js-Anwendungen mit klar zugesicherter PageSpeed-Performance von 90+ zum Festpreis.`,
    ],
  },
  {
    question: ({ c }) =>
      `Wie garantiert AsiaEdits die Ladezeit von PageSpeed 90+ in ${c}?`,
    answers: [
      ({ c }) =>
        `Durch saubere Hand-Coding-Standards, automatische Bildkomprimierung und serverseitiges Edge-Rendering stellen wir sicher, dass Ihre Website in ${c} blitzschnell lädt – vertraglich zugesichert.`,
      ({ c }) =>
        `Wir kombinieren handgeschriebenen Code, automatisch komprimierte Bilder und Edge-Rendering, sodass Ihre Website in ${c} messbar schnell lädt; den Zielwert sichern wir vertraglich zu.`,
    ],
  },
  {
    question: ({ c }) =>
      `Können bestehende SEO-Rankings in ${c} bei einem Relaunch übernommen werden?`,
    answers: [
      ({ c }) =>
        `Ja, wir führen lückenlose 301-Weiterleitungskonzepte und Struktur-Analysen durch, damit Ihre bisherige Autorität in ${c} erhalten bleibt und durch die neue Performance weiter steigt.`,
      ({ c }) =>
        `Das ist möglich: Mit einer Analyse Ihrer bestehenden URLs und sauberen 301-Weiterleitungen bleibt die aufgebaute Autorität in ${c} erhalten und wächst durch die bessere Performance weiter.`,
    ],
  },
]

// ---------------------------------------------------------------------------
// Assembly
// ---------------------------------------------------------------------------

function splitParagraphs(sentences: string[]): string[] {
  const middle = Math.ceil(sentences.length / 2)
  return [sentences.slice(0, middle).join(' '), sentences.slice(middle).join(' ')]
}

export function countWords(parts: string[]): number {
  return parts
    .join(' ')
    .split(/\s+/)
    .filter((token) => /[\p{L}\p{N}]/u.test(token)).length
}

function composeCityContent(city: CityData, attempt: number): PSEOCityContent {
  const x = buildContext(city, attempt)

  const heroTitle = `Webdesign in ${x.c}: Blitzschnelle Web-Interfaces für digitale Marktführer`
  const heroIntro = [
    build(x, 'hero-keyword', HERO_KEYWORD),
    buildByCategory(x, 'hero-opener', HERO_OPENER),
    build(x, 'hero-loss', HERO_LOSS),
    build(x, 'hero-nearby', HERO_NEARBY),
    build(x, 'hero-legacy', HERO_LEGACY),
  ].join(' ')

  const market: PSEOCityTextSection = {
    heading: `Der digitale Wettbewerb in ${x.c}: Warum Standard-Websites nicht mehr konvertieren`,
    paragraphs: splitParagraphs([
      buildByCategory(x, 'market-opener', MARKET_OPENER),
      build(x, 'market-mobile', MARKET_MOBILE),
      build(x, 'market-region', MARKET_REGION),
      buildByCategory(x, 'market-flows', MARKET_FLOWS),
      build(x, 'market-trust', MARKET_TRUST),
      build(x, 'market-ranking', MARKET_RANKING),
      build(x, 'market-closer', MARKET_CLOSER),
    ]),
  }

  const tech: PSEOCityTextSection = {
    heading: 'Höchstleistung nach Maß: Next.js, Edge CDN & PageSpeed 90+ Garantie',
    paragraphs: splitParagraphs([
      build(x, 'tech-stack', TECH_STACK),
      build(x, 'tech-lcp', TECH_LCP),
      build(x, 'tech-edge', TECH_EDGE),
      build(x, 'tech-images', TECH_IMAGES),
      build(x, 'tech-caching', TECH_CACHING),
      build(x, 'tech-guarantee', TECH_GUARANTEE),
      build(x, 'tech-monitoring', TECH_MONITORING),
      buildByCategory(x, 'tech-closer', TECH_CLOSER),
    ]),
  }

  const deliverables = {
    heading: `Ihr maßgeschneidertes Webdesign-Paket für ${x.c}`,
    intro: build(x, 'deliverables-intro', DELIVERABLES_INTRO),
    items: DELIVERABLE_ITEMS.map((item, index) => ({
      title: item.title,
      description: pick(x.key, `deliverable-${index}`, item.variants)(x),
    })),
    outro: build(x, 'deliverables-outro', DELIVERABLES_OUTRO),
  }

  const faq = {
    heading: `Häufige Fragen zu Webdesign in ${x.c}`,
    intro: build(x, 'faq-intro', FAQ_INTRO),
    items: FAQ_ITEMS.map((item, index) => ({
      question: item.question(x),
      answer: pick(x.key, `faq-${index}`, item.answers)(x),
    })),
  }

  const wordCount = countWords([
    heroTitle,
    heroIntro,
    market.heading,
    ...market.paragraphs,
    tech.heading,
    ...tech.paragraphs,
    deliverables.heading,
    deliverables.intro,
    ...deliverables.items.flatMap((item) => [item.title, item.description]),
    deliverables.outro,
    faq.heading,
    faq.intro,
    ...faq.items.flatMap((item) => [item.question, item.answer]),
  ])

  return {
    category: x.category,
    hero: { title: heroTitle, intro: heroIntro },
    market,
    tech,
    deliverables,
    faq,
    wordCount,
  }
}

// ---------------------------------------------------------------------------
// Collision-free registry
//
// Every city is composed from variant "attempts". An attempt is accepted when
// the word count is within the target range and none of its 3-sentence
// windows (city name normalised) has been used by another city. Cities are
// processed in database order, so the result is deterministic and
// independent of the order pages are rendered in.
// ---------------------------------------------------------------------------

export const CITY_WORD_RANGE = { min: 620, max: 750 } as const
const MAX_ATTEMPTS = 400

function sentenceWindows(content: PSEOCityContent, cityName: string): string[] {
  const sections = [
    content.hero.intro,
    content.market.paragraphs.join(' '),
    content.tech.paragraphs.join(' '),
  ]
  const windows: string[] = []
  for (const section of sections) {
    const sentences = section
      .split(/(?<=[.!?])\s+/)
      .map((sentence) => sentence.split(cityName).join('{CITY}'))
    for (let i = 0; i + 2 < sentences.length; i++) {
      windows.push(sentences.slice(i, i + 3).join(' '))
    }
  }
  return windows
}

let registry: Map<string, PSEOCityContent> | null = null

function getRegistry(): Map<string, PSEOCityContent> {
  if (registry) return registry
  const built = new Map<string, PSEOCityContent>()
  const usedWindows = new Set<string>()

  for (const city of ALL_CITIES) {
    let accepted: PSEOCityContent | null = null
    let inRange: PSEOCityContent | null = null

    for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
      const candidate = composeCityContent(city, attempt)
      if (candidate.wordCount < CITY_WORD_RANGE.min || candidate.wordCount > CITY_WORD_RANGE.max) continue
      inRange ??= candidate
      if (sentenceWindows(candidate, city.name).every((window) => !usedWindows.has(window))) {
        accepted = candidate
        break
      }
    }

    const chosen = accepted ?? inRange ?? composeCityContent(city, 0)
    sentenceWindows(chosen, city.name).forEach((window) => usedWindows.add(window))
    built.set(city.slug, chosen)
  }

  registry = built
  return built
}

export function generateCityContent(city: CityData): PSEOCityContent {
  return getRegistry().get(city.slug) ?? composeCityContent(city, 0)
}
