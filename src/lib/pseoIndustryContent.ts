import { ALL_INDUSTRIES, type IndustryData } from '../data/pseoDatabase'
import { countWords } from './pseoCityContent'

export type IndustryKeywordType = 'webdesign' | 'website'

export type IndustryGroup = 'medical' | 'craft' | 'legal' | 'beauty' | 'gastro'

export interface PSEOIndustryTextSection {
  heading: string
  paragraphs: string[]
}

export interface PSEOIndustryContent {
  group: IndustryGroup
  terminology: string[]
  hero: { title: string; intro: string }
  challenges: PSEOIndustryTextSection
  tech: PSEOIndustryTextSection
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

export const PRIMARY_TECH_TERMS = [
  'Next.js Agentur',
  'PageSpeed 90+',
  'Server-Side Rendering',
  'Vercel Edge CDN',
  'Schema.org JSON-LD Markup',
] as const

// ---------------------------------------------------------------------------
// Industry terminology profiles
// ---------------------------------------------------------------------------

interface Profile {
  group: IndustryGroup
  lead: string
  leadDat: string
  acq: string
  titleLead: string
  terms: string[]
  mobileMoment: string
  compliance: string
}

const GROUP_PROFILES: Record<IndustryGroup, Profile> = {
  medical: {
    group: 'medical',
    lead: 'Patienten',
    leadDat: 'Patienten',
    acq: 'Patientengewinnung',
    titleLead: 'Patienten- & Kundengewinnung',
    terms: [
      'Online-Terminbuchung',
      'Patientengewinnung',
      'DSGVO & Patientendaten',
      'Praxis-Marketing',
      'WCAG 2.1 Barrierefreiheit',
      'Google Maps Local Pack',
    ],
    mobileMoment: 'im Wartezimmer oder unterwegs',
    compliance:
      'DSGVO & Patientendaten sind dabei von der ersten Zeile an sauber getrennt und geschützt.',
  },
  craft: {
    group: 'craft',
    lead: 'Auftraggeber',
    leadDat: 'Auftraggebern',
    acq: 'Neukundengewinnung',
    titleLead: 'Auftrags- & Kundengewinnung',
    terms: [
      'Qualifizierte Anfragen',
      'Mitarbeitergewinnung / Recruiting',
      'Projekt-Galerie',
      'Schnelle Ladezeiten auf der Baustelle',
      'Google Maps Local Pack',
    ],
    mobileMoment: 'auf der Baustelle oder im Servicewagen',
    compliance:
      'Daten aus Anfrageformularen bleiben dabei verschlüsselt und werden nur zweckgebunden verarbeitet.',
  },
  legal: {
    group: 'legal',
    lead: 'Mandanten',
    leadDat: 'Mandanten',
    acq: 'Mandantengewinnung',
    titleLead: 'Mandanten- & Kundengewinnung',
    terms: [
      'Mandantengewinnung',
      'Vertrauens-UX',
      'Diskrete Kontakt-Flows',
      'Expertise-Aushängeschild',
      'Google Maps Local Pack',
    ],
    mobileMoment: 'im Büro oder auf dem Weg zum Termin',
    compliance:
      'Vertrauliche Anfragen bleiben dabei verschlüsselt und werden diskret sowie zweckgebunden verarbeitet.',
  },
  beauty: {
    group: 'beauty',
    lead: 'Kunden',
    leadDat: 'Kunden',
    acq: 'Neukundengewinnung',
    titleLead: 'Neukunden- & Stammkundengewinnung',
    terms: [
      'Online-Terminbuchung',
      'Portfolio-Galerie',
      'Google-Bewertungen',
      'Social Proof',
      'Google Maps Local Pack',
    ],
    mobileMoment: 'in der Bahn oder in der Mittagspause',
    compliance:
      'Terminbuchungen und Kundendaten werden dabei verschlüsselt und nur zweckgebunden verarbeitet.',
  },
  gastro: {
    group: 'gastro',
    lead: 'Gäste',
    leadDat: 'Gästen',
    acq: 'Gästegewinnung',
    titleLead: 'Gästegewinnung',
    terms: [
      'Online-Reservierung',
      'Digitale Speisekarte',
      'Google-Bewertungen',
      'Google Maps Local Pack',
    ],
    mobileMoment: 'auf dem Weg zum Lokal oder direkt davor',
    compliance:
      'Reservierungsdaten werden dabei verschlüsselt und nur zweckgebunden verarbeitet.',
  },
}

const CATEGORY_GROUP: Record<IndustryData['category'], IndustryGroup> = {
  health: 'medical',
  beauty: 'beauty',
  craft: 'craft',
  legal: 'legal',
  gastro: 'gastro',
  hospitality: 'gastro',
  services: 'craft',
}

const PROFILE_OVERRIDES: Record<string, Partial<Profile>> = {
  immobilienmakler: {
    lead: 'Eigentümer und Interessenten',
    leadDat: 'Eigentümern und Interessenten',
    acq: 'Eigentümerakquise',
    titleLead: 'Eigentümer- & Interessentengewinnung',
    terms: [
      'Eigentümerakquise',
      'Vertrauens-UX',
      'Objekt-Präsentation',
      'Expertise-Aushängeschild',
      'Google Maps Local Pack',
    ],
    mobileMoment: 'auf dem Sofa oder unterwegs',
  },
  'kfz-werkstatt': {
    lead: 'Autofahrer',
    leadDat: 'Autofahrern',
    titleLead: 'Kunden- & Terminanfragen',
    terms: [
      'Online-Terminbuchung',
      'Qualifizierte Anfragen',
      'Mitarbeitergewinnung / Recruiting',
      'Google Maps Local Pack',
    ],
    mobileMoment: 'im Pannenfall oder unterwegs',
  },
  'boutique-hotel': {
    acq: 'Direktbuchungen',
    titleLead: 'Direktbuchungen',
    terms: ['Direktbuchung', 'Zimmer-Galerie', 'Google-Bewertungen', 'Google Maps Local Pack'],
    mobileMoment: 'auf dem Sofa oder unterwegs',
  },
  'bar-club': {
    terms: ['Online-Reservierung', 'Event-Kalender', 'Gästelisten-Anfragen', 'Google Maps Local Pack'],
    mobileMoment: 'auf dem Weg in die Stadt',
  },
  catering: {
    lead: 'Auftraggeber',
    leadDat: 'Auftraggebern',
    acq: 'Event-Anfragen',
    titleLead: 'Event- & Kundengewinnung',
    terms: ['Event-Anfragen', 'Menü-Konfigurator', 'Referenz-Galerie', 'Google Maps Local Pack'],
    mobileMoment: 'im Büro oder unterwegs',
  },
}

function getProfile(industry: IndustryData): Profile {
  const base = GROUP_PROFILES[CATEGORY_GROUP[industry.category]]
  return { ...base, ...PROFILE_OVERRIDES[industry.slug] }
}

export function getIndustryTerms(industry: IndustryData): string[] {
  return getProfile(industry).terms
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

function joinList(items: string[]): string {
  if (items.length <= 1) return items[0] ?? ''
  return `${items.slice(0, -1).join(', ')} und ${items[items.length - 1]}`
}

interface Ctx {
  key: string
  label: 'Webdesign' | 'Website'
  p: string
  lead: string
  leadDat: string
  acq: string
  kw0: string
  kw1: string
  pain: string
  focus: string
  mobileMoment: string
  compliance: string
  termsA: string
  termsB: string
}

type Sentence = (x: Ctx) => string

function pick<T>(key: string, salt: string, options: readonly T[]): T {
  return options[hash(`${key}|${salt}`) % options.length]
}

function build(x: Ctx, salt: string, options: readonly Sentence[]): string {
  return pick(x.key, salt, options)(x)
}

function buildContext(
  industry: IndustryData,
  keywordType: IndustryKeywordType,
  attempt: number,
): Ctx {
  const profile = getProfile(industry)
  const key = `${keywordType}:${industry.slug}#${attempt}`
  const keywords = industry.keywords
  const first = hash(`${key}|kw0`) % keywords.length
  const second = (first + 1 + (hash(`${key}|kw1`) % (keywords.length - 1))) % keywords.length
  const offset = hash(`${key}|terms`) % profile.terms.length
  const rotated = [...profile.terms.slice(offset), ...profile.terms.slice(0, offset)]
  const split = Math.ceil(rotated.length / 2)

  return {
    key,
    label: keywordType === 'website' ? 'Website' : 'Webdesign',
    p: industry.pluralName,
    lead: profile.lead,
    leadDat: profile.leadDat,
    acq: profile.acq,
    kw0: keywords[first],
    kw1: keywords[second],
    pain: industry.heroPainPoint,
    focus: industry.localBoosterFocus,
    mobileMoment: profile.mobileMoment,
    compliance: profile.compliance,
    termsA: joinList(rotated.slice(0, split)),
    termsB: joinList(rotated.slice(split)),
  }
}

// ---------------------------------------------------------------------------
// Section 1: Hero & industry hook
// ---------------------------------------------------------------------------

const HERO_KEYWORD: Sentence[] = [
  ({ label, p }) => `${label} für ${p} mit garantiertem PageSpeed 90+ macht aus Suchenden Anfragen.`,
  ({ label, p }) => `${label} für ${p} beginnt mit PageSpeed 90+ auf dem Smartphone.`,
  ({ label, p }) => `Wer ${label} für ${p} plant, braucht PageSpeed 90+ als messbare Grundlage.`,
]

const HERO_OPENER: Sentence[] = [
  ({ p, lead }) =>
    `Im Wettbewerb der ${p} entscheidet der erste Eindruck im Netz darüber, ob ${lead} anfragen oder zu einem Mitbewerber wechseln.`,
  ({ kw0 }) =>
    `Die Suche nach „${kw0}“ beginnt heute auf dem Smartphone und endet oft nach wenigen Sekunden bei dem Anbieter, dessen Seite am schnellsten überzeugt.`,
  ({ p, lead }) =>
    `Wer sich als einer der ${p} digital behaupten will, braucht eine Website, die ${lead} schon im ersten Moment Orientierung und Vertrauen gibt.`,
]

const HERO_LOSS: Sentence[] = [
  ({ pain, lead }) =>
    `Typisch für diese Branche: ${pain}. Jede dieser Lücken kostet täglich ${lead}, die stattdessen bei einem schnelleren Wettbewerber anfragen.`,
  ({ p, pain, lead }) =>
    `Das größte Hindernis im Alltag der ${p} lässt sich so beschreiben: ${pain}. Genau dadurch gehen ${lead} verloren, bevor ein erstes Gespräch zustande kommt.`,
  ({ pain, lead }) =>
    `Was viele Betriebe ausbremst, ist bekannt: ${pain}. Eine langsame oder unübersichtliche Seite verstärkt dieses Problem und schickt ${lead} direkt zur Konkurrenz.`,
]

const HERO_SEARCH: Sentence[] = [
  ({ kw0, kw1, acq }) =>
    `Suchanfragen wie „${kw0}“ oder „${kw1}“ werden überwiegend mobil gestellt und entscheiden heute über ${acq}.`,
  ({ kw1 }) =>
    `Wer nach „${kw1}“ sucht, erwartet binnen Sekunden eine klare Antwort, einen sichtbaren Ansprechpartner und einen einfachen Weg zum Kontakt.`,
  ({ kw0, lead }) =>
    `„${kw0}“ gehört zu den Begriffen, über die ${lead} den Weg zu Ihnen finden, sofern Ihre Seite sofort lädt und seriös wirkt.`,
]

const HERO_CLOSER: Sentence[] = [
  ({ p, lead }) =>
    `Als spezialisierte Next.js Agentur bauen wir deshalb Websites für ${p}, die schnell laden, Vertrauen aufbauen und Besucher zuverlässig in ${lead} verwandeln.`,
  ({ p }) =>
    `AsiaEdits verbindet dafür Design, Technik und Local SEO zu einem System, das speziell auf die Anforderungen der ${p} zugeschnitten ist.`,
  ({ p, label }) =>
    `Mit einer individuell entwickelten ${label}-Lösung für ${p} sorgen wir dafür, dass Ihre Expertise online genauso überzeugt wie im persönlichen Kontakt.`,
]

// ---------------------------------------------------------------------------
// Section 2: Industry challenges & user intent
// ---------------------------------------------------------------------------

const C_INTENT: Sentence[] = [
  ({ kw0 }) =>
    `Wer „${kw0}“ eingibt, hat ein konkretes Anliegen und vergleicht in Sekundenschnelle mehrere Anbieter nebeneinander.`,
  ({ kw0, lead }) =>
    `Hinter der Suche nach „${kw0}“ steckt fast immer ein dringender Bedarf, und ${lead} wählen den Anbieter, der am schnellsten Klarheit schafft.`,
  ({ kw0, lead }) =>
    `Die Suche nach „${kw0}“ ist selten zufällig: ${lead} verfolgen ein Ziel und entscheiden nach wenigen Sekunden, welcher Seite sie vertrauen.`,
]

const C_TRUST: Sentence[] = [
  ({ p }) =>
    `Im Geschäft der ${p} müssen Vertrauenssignale wie echte Fotos, sichtbare Bewertungen und klare Qualifikationen im ersten Bildschirm erkennbar sein.`,
  ({ p }) =>
    `Glaubwürdigkeit zählt im Umfeld der ${p} mehr als jedes Werbeversprechen und entsteht durch Referenzen, Transparenz und ein ruhiges, professionelles Design.`,
  ({ p }) =>
    `Ein Standard-Template wirkt für ${p} austauschbar, während individuelle Fotos, nachvollziehbare Leistungen und echte Bewertungen sofort Seriosität vermitteln.`,
]

const C_PAIN: Sentence[] = [
  ({ pain }) =>
    `Dazu kommt das Kernproblem vieler Betriebe: ${pain}. Eine veraltete Website verschärft genau dieses Problem, statt es zu lösen.`,
  ({ pain }) =>
    `Besonders kritisch bleibt dieser Punkt: ${pain}. Ohne klare Struktur und schnelle Reaktionswege bleibt das vorhandene Potenzial ungenutzt.`,
  ({ pain }) =>
    `Hinzu kommt eine Herausforderung, die fast alle Anbieter kennen: ${pain}. Starre Baukasten-Seiten bieten dafür keine passende Antwort.`,
]

const C_MOBILE: Sentence[] = [
  ({ p, lead }) =>
    `Die Mehrheit der Suchanfragen im Umfeld der ${p} kommt vom Smartphone, und ${lead} brechen ab, wenn Buttons zu klein oder Formulare unübersichtlich sind.`,
  ({ p, mobileMoment }) =>
    `Mobile Nutzung bestimmt den Alltag der ${p}: Wer ${mobileMoment} sucht, verzeiht weder lange Ladezeiten noch verschobene Layouts.`,
  ({ p, lead, mobileMoment }) =>
    `Ein großer Teil der ${lead}, die ${p} im Netz suchen, liest die Seite ${mobileMoment}; dort entscheidet allein die mobile Darstellung über die Anfrage.`,
]

const C_PATHS: Sentence[] = [
  ({ lead, termsA }) =>
    `Entscheidend sind deshalb direkte Wege zum Kontakt, etwa Bausteine wie ${termsA}, die ${lead} ohne Umweg zum Ziel führen.`,
  ({ p, termsA }) =>
    `Praktisch heißt das: Bausteine wie ${termsA} verkürzen den Weg vom ersten Blick bis zur Anfrage und senken die Absprungrate der ${p} spürbar.`,
  ({ lead, termsA }) =>
    `Darauf antworten wir mit klaren Funktionen wie ${termsA}, die ${lead} sofort verstehen und ohne Registrierung nutzen können.`,
]

const C_PRESENT: Sentence[] = [
  ({ p, lead, termsB }) =>
    `Eine klare visuelle Präsentation und Faktoren wie ${termsB} entscheiden im Geschäft der ${p} darüber, ob ${lead} Kontakt aufnehmen oder weiterklicken.`,
  ({ p, lead, termsB }) =>
    `Klare Bildsprache, verständliche Leistungen und Bausteine wie ${termsB} sorgen dafür, dass ${lead} im Angebot der ${p} sofort den Überblick behalten.`,
  ({ p, lead, termsB }) =>
    `Eine eindeutige Navigation, ruhige Gestaltung und Elemente wie ${termsB} senken für ${lead} die Hürde, sich bei den ${p} zu melden.`,
]

const C_CLOSER: Sentence[] = [
  ({ focus, acq }) =>
    `Unser Anspruch für Ihre Branche: ${focus}. So wird aus einer reinen Visitenkarte ein verlässlicher Kanal für ${acq}.`,
  ({ focus, acq }) =>
    `Der Schwerpunkt unserer Arbeit liegt auf einem klaren Ziel: ${focus}. Damit wird Ihre Website zum aktiven Werkzeug für ${acq}.`,
  ({ focus, acq }) =>
    `Genau darauf richten wir die Konzeption aus: ${focus}. Das macht Ihre Seite zum messbaren Hebel für ${acq}.`,
]

// ---------------------------------------------------------------------------
// Section 3: Technical architecture & performance
// ---------------------------------------------------------------------------

const T_STACK: Sentence[] = [
  ({ p, lead }) =>
    `AsiaEdits entwickelt Websites für ${p} als Next.js Agentur mit Server-Side Rendering, sodass jede Seite vollständig ankommt, bevor ${lead} überhaupt scrollen.`,
  ({ p }) =>
    `Als Next.js Agentur setzen wir für ${p} auf Server-Side Rendering statt auf schwerfällige Baukästen, damit Inhalte sofort sichtbar und für Suchmaschinen lesbar sind.`,
  ({ p }) =>
    `Als Next.js Agentur liefern wir für ${p} eine individuell programmierte Basis mit Server-Side Rendering, die Inhalte ohne Wartezeit ausliefert.`,
]

const T_SPEED: Sentence[] = [
  ({ p }) =>
    `Für ${p} bedeutet das kurze Ladezeiten und PageSpeed 90+ auf Mobilgeräten, gemessen mit Google PageSpeed Insights und nicht nur im Labor.`,
  ({ p }) =>
    `Jede Seite wird auf PageSpeed 90+ im Mobile-Test getrimmt, und der Largest Contentful Paint liegt bei den Websites für ${p} typischerweise unter einer Sekunde.`,
  ({ lead, kw0 }) =>
    `Wir optimieren Core Web Vitals wie LCP, CLS und INP konsequent und erreichen PageSpeed 90+ auch auf Mittelklasse-Smartphones, mit denen ${lead} nach „${kw0}“ suchen.`,
]

const T_EDGE: Sentence[] = [
  ({ p, mobileMoment }) =>
    `Über das Vercel Edge CDN liefern wir die Seiten der ${p} aus einem Rechenzentrum in Ihrer Nähe aus, sodass sie ${mobileMoment} ohne Verzögerung erscheinen.`,
  ({ lead, mobileMoment }) =>
    `Das Vercel Edge CDN verteilt Ihre Website auf Edge-Knoten und hält die Antwortzeiten niedrig, selbst wenn ${lead} ${mobileMoment} nur schwaches Mobilfunknetz haben.`,
  ({ lead, kw0 }) =>
    `Dank Vercel Edge CDN und intelligentem Edge Caching bleibt Ihre Seite auch bei Lastspitzen schnell, etwa wenn viele ${lead} gleichzeitig nach „${kw0}“ suchen.`,
]

const T_IMAGES: Sentence[] = [
  ({ p }) =>
    `Eine automatisierte WebP-Bildpipeline skaliert Fotos aus dem Alltag der ${p} passend zum Gerät und hält Dateien klein, ohne sichtbare Qualitätseinbußen.`,
  ({ p }) =>
    `Bilder liefern wir für ${p} als WebP in mehreren Größen aus, damit Fotos Ihrer Leistungen auf jedem Display scharf bleiben und kaum Ladezeit kosten.`,
  ({ p }) =>
    `Galerie, Teamfotos und Referenzen werden über eine WebP-Pipeline mit Lazy Loading eingebunden, damit die Seite der ${p} schlank und trotzdem hochwertig wirkt.`,
]

const T_SCHEMA: Sentence[] = [
  ({ kw1 }) =>
    `Schema.org JSON-LD Markup beschreibt Ihr Angebot für Suchmaschinen eindeutig, etwa als LocalBusiness mit Öffnungszeiten, Bewertungen und häufigen Fragen zu „${kw1}“.`,
  ({ kw1 }) =>
    `Mit sauberem Schema.org JSON-LD Markup erhalten Rich Snippets, Sternebewertungen und FAQ-Auszüge Ihrer Seite mehr Platz in den Suchergebnissen für „${kw1}“.`,
  ({ p }) =>
    `Schema.org JSON-LD Markup macht Leistungen, Standort und Kontaktwege der ${p} maschinenlesbar und stärkt die Sichtbarkeit im Google Maps Local Pack.`,
]

const T_CONVERT: Sentence[] = [
  ({ p, lead }) =>
    `Technische Exzellenz zahlt direkt auf Ihre Ziele ein: Schnellere Seiten ranken besser und wirken professioneller, was für ${p} unmittelbar mehr ${lead} bedeutet.`,
  ({ p }) =>
    `Jede eingesparte Sekunde Ladezeit erhöht die Conversion-Rate, weshalb Performance für ${p} kein Detail, sondern ein echter Umsatzfaktor ist.`,
  ({ p, acq }) =>
    `Schnelle Ladezeiten verbessern Rankings und Abschlussquote zugleich und machen die Website der ${p} zum zuverlässigen Kanal für ${acq}.`,
]

const T_GUARANTEE: Sentence[] = [
  ({ p }) =>
    `Die PageSpeed 90+ Garantie sichern wir vertraglich zu und messen sie nach dem Launch, damit ${p} dauerhaft von stabilen Core Web Vitals profitieren.`,
  ({ p }) =>
    `Wir garantieren PageSpeed 90+ schriftlich und prüfen den Wert nach dem Go-live, sodass Ihre Seite im Wettbewerb der ${p} langfristig vorne bleibt.`,
  ({ p }) =>
    `Zum Festpreis liefern wir PageSpeed 90+ als vertraglich fixierte Garantie für ${p}, die wir nach dem Launch messen und bei Abweichungen kostenlos nachbessern.`,
]

// ---------------------------------------------------------------------------
// Section 4: Full-service feature matrix
// ---------------------------------------------------------------------------

const D_INTRO: Sentence[] = [
  ({ p, focus }) =>
    `Für ${p} bündeln wir alle Bausteine in einem Paket mit klarem Schwerpunkt: ${focus}.`,
  ({ p, label, focus }) =>
    `Unser ${label}-Paket für ${p} vereint Design, Technik und Local SEO und konzentriert sich auf einen Kernpunkt: ${focus}.`,
  ({ p, label, focus }) =>
    `Alles aus einer Hand: Das ${label}-Paket für ${p} deckt Konzept, Umsetzung und Optimierung ab und setzt dabei den Schwerpunkt: ${focus}.`,
]

const D_OUTRO: Sentence[] = [
  ({ acq }) => `Ein Gesamtsystem aus einer Hand, das ${acq} messbar unterstützt.`,
  ({ p }) => `Technik, Hosting und Updates liegen für ${p} zum Festpreis komplett bei uns.`,
  ({ acq }) => `So wird Ihre Website zum verlässlichen Kanal für ${acq}, zum Festpreis geliefert.`,
]

const D_ITEMS: { title: string; variants: Sentence[] }[] = [
  {
    title: 'Custom High-End Interface',
    variants: [
      ({ p }) =>
        `Kein generisches WordPress-Theme: Wir gestalten ein eigenständiges Interface, das zur Ästhetik der ${p} passt und Ihre Marke sofort erkennbar macht.`,
      ({ p }) =>
        `Statt Standardvorlagen entsteht ein individuelles Design, das den Charakter Ihres Betriebs transportiert und im Umfeld der ${p} klar heraussticht.`,
      ({ p }) =>
        `Wir verzichten bewusst auf Baukästen und entwerfen eine eigene Oberfläche, die zu Ihrer Zielgruppe und zur Bildwelt der ${p} passt.`,
    ],
  },
  {
    title: 'Frictionless Lead & Booking Flows',
    variants: [
      ({ lead, termsA }) =>
        `Kurze Formulare, Kalenderanbindung und Click-to-Call-Buttons bringen ${lead} in wenigen Sekunden zum Kontakt, ergänzt um Bausteine wie ${termsA}.`,
      ({ lead, termsA }) =>
        `Direkte Kontaktwege auf jeder Seite führen ${lead} ohne Umweg zur Anfrage, unterstützt durch Funktionen wie ${termsA}.`,
      ({ kw0, termsA }) =>
        `Sofort sichtbare Formulare und Direktanrufe sorgen dafür, dass jede Suche nach „${kw0}“ in einer konkreten Anfrage enden kann, dank Bausteinen wie ${termsA}.`,
    ],
  },
  {
    title: 'Accessibility & Compliance',
    variants: [
      ({ p, lead, compliance }) =>
        `Volle WCAG 2.1 Barrierefreiheit und eine DSGVO-konforme Architektur öffnen das Angebot der ${p} für alle ${lead}. ${compliance}`,
      ({ p, compliance }) =>
        `Wir setzen WCAG 2.1 Barrierefreiheit konsequent um und bauen die Technik für ${p} DSGVO-konform auf. ${compliance}`,
      ({ p, compliance }) =>
        `Barrierefreiheit nach WCAG 2.1 und eine DSGVO-konforme Struktur machen die Website der ${p} rechtssicher und für jeden Besucher nutzbar. ${compliance}`,
    ],
  },
  {
    title: 'Local SEO & Rich Snippets',
    variants: [
      ({ kw0 }) =>
        `Schema.org Markup und gezielte Optimierung für „${kw0}“ helfen Ihnen, in Google mit Bewertungen, Öffnungszeiten und Antworten aufzufallen.`,
      ({ kw1 }) =>
        `Strukturierte Daten, regionale Landingpages und ein gepflegtes Google-Profil stärken Ihre Position im Local Pack, besonders bei Suchen wie „${kw1}“.`,
      ({ p }) =>
        `Rich Snippets mit Sternen, Fragen und Öffnungszeiten lassen Ihre Einträge im Umfeld der ${p} größer und vertrauenswürdiger erscheinen.`,
    ],
  },
]

// ---------------------------------------------------------------------------
// Section 5: Industry-specific FAQ
// ---------------------------------------------------------------------------

const F_INTRO: Sentence[] = [
  ({ p }) => `Die wichtigsten Antworten für ${p} vor dem Relaunch.`,
  ({ p }) => `Diese Fragen stellen ${p} uns am häufigsten.`,
  ({ p }) => `Kurz beantwortet: Was ${p} vor einem Relaunch wissen sollten.`,
]

const F_ITEMS: {
  question: (x: Ctx) => string
  answers: Sentence[]
}[] = [
  {
    question: ({ leadDat, p }) =>
      `Wie hilft eine neue Website bei der Gewinnung von ${leadDat} im Bereich ${p}?`,
    answers: [
      ({ kw0, lead, termsA }) =>
        `Eine schnelle, vertrauenswürdige Website macht Sie bei Suchanfragen wie „${kw0}“ sichtbar und führt ${lead} über Bausteine wie ${termsA} direkt zur Anfrage. So steigt die Zahl qualifizierter Kontakte spürbar.`,
      ({ kw1, lead, termsA }) =>
        `Mit strukturierten Daten und starken Ladezeiten erscheinen Sie besser bei „${kw1}“, und ${lead} erhalten ohne Umweg Kontaktmöglichkeiten wie ${termsA}. Das erhöht Reichweite und Abschlussquote gleichzeitig.`,
      ({ kw0, termsA }) =>
        `Die neue Seite verbindet Local SEO, Vertrauenselemente und einfache Kontaktwege: Wer „${kw0}“ sucht, findet Sie schneller und entscheidet sich eher für Ihr Angebot, weil ${termsA} den Weg verkürzen.`,
    ],
  },
  {
    question: () => 'Wie wird der Wechsel oder Relaunch ohne Ausfallzeiten durchgeführt?',
    answers: [
      ({ kw1, lead }) =>
        `Wir bauen die neue Website parallel zur bestehenden und schalten erst nach Ihrer Abnahme um. 301-Weiterleitungen sichern Ihre Rankings für „${kw1}“, sodass ${lead} nie vor einer leeren Seite stehen.`,
      ({ kw1 }) =>
        `Der Relaunch läuft im Hintergrund auf einer Staging-Umgebung, während Ihre aktuelle Seite online bleibt. Beim Umschalten übernehmen saubere Weiterleitungen alle URLs, damit Rankings für „${kw1}“ erhalten bleiben.`,
      ({ kw1, lead }) =>
        `Wir testen die neue Seite vollständig vorab und tauschen sie in einem kurzen Zeitfenster aus. Alle bestehenden Adressen werden weitergeleitet, damit ${lead} Ihr Angebot bei „${kw1}“ ohne Unterbrechung finden.`,
    ],
  },
  {
    question: () => 'Welche Garantien bietet AsiaEdits bezüglich Ladezeiten und Technik?',
    answers: [
      ({ p }) =>
        `Wir garantieren einen Mobile PageSpeed Score von 90+ und messen ihn nach dem Launch. Dazu kommen ein transparenter Festpreis, DSGVO-konforme Technik und Barrierefreiheit nach WCAG 2.1, die gerade für ${p} wichtig sind.`,
      ({ p }) =>
        `Zugesichert sind PageSpeed 90+ auf Mobilgeräten, ein Festpreis ohne versteckte Kosten und eine Technik auf Basis von Next.js und Vercel Edge CDN. Weicht ein Wert ab, bessern wir für ${p} kostenlos nach.`,
      ({ p }) =>
        `Sie erhalten schriftlich PageSpeed 90+, einen fixen Preis und eine saubere Umsetzung mit Schema.org Markup. Sollte der Messwert nach dem Launch abweichen, optimieren wir die Seite der ${p} nach, bis er stimmt.`,
    ],
  },
]

// ---------------------------------------------------------------------------
// Composition
// ---------------------------------------------------------------------------

function splitParagraphs(sentences: string[]): string[] {
  const middle = Math.ceil(sentences.length / 2)
  return [sentences.slice(0, middle).join(' '), sentences.slice(middle).join(' ')]
}

function composeIndustryContent(
  industry: IndustryData,
  keywordType: IndustryKeywordType,
  attempt: number,
): PSEOIndustryContent {
  const x = buildContext(industry, keywordType, attempt)
  const profile = getProfile(industry)

  const heroTitle = `${x.label} für ${x.p}: Digitale ${profile.titleLead} auf Höchstniveau`
  const heroIntro = [
    build(x, 'hero-keyword', HERO_KEYWORD),
    build(x, 'hero-opener', HERO_OPENER),
    build(x, 'hero-loss', HERO_LOSS),
    build(x, 'hero-search', HERO_SEARCH),
    build(x, 'hero-closer', HERO_CLOSER),
  ].join(' ')

  const challenges: PSEOIndustryTextSection = {
    heading: `Warum Standard-Websites im Bereich ${x.p} Vertrauen und Kunden verlieren`,
    paragraphs: splitParagraphs([
      build(x, 'c-intent', C_INTENT),
      build(x, 'c-trust', C_TRUST),
      build(x, 'c-pain', C_PAIN),
      build(x, 'c-mobile', C_MOBILE),
      build(x, 'c-paths', C_PATHS),
      build(x, 'c-present', C_PRESENT),
      build(x, 'c-closer', C_CLOSER),
    ]),
  }

  const tech: PSEOIndustryTextSection = {
    heading: 'Maßgeschneiderte Next.js-Architektur & PageSpeed 90+ Garantie',
    paragraphs: splitParagraphs([
      build(x, 't-stack', T_STACK),
      build(x, 't-speed', T_SPEED),
      build(x, 't-edge', T_EDGE),
      build(x, 't-images', T_IMAGES),
      build(x, 't-schema', T_SCHEMA),
      build(x, 't-convert', T_CONVERT),
      build(x, 't-guarantee', T_GUARANTEE),
    ]),
  }

  const deliverables = {
    heading: `Das All-in-One ${x.label}-Paket für ${x.p}`,
    intro: build(x, 'd-intro', D_INTRO),
    items: D_ITEMS.map((item, index) => ({
      title: item.title,
      description: pick(x.key, `d-item-${index}`, item.variants)(x),
    })),
    outro: build(x, 'd-outro', D_OUTRO),
  }

  const faq = {
    heading: `Häufige Fragen zu ${x.label} für ${x.p}`,
    intro: build(x, 'f-intro', F_INTRO),
    items: F_ITEMS.map((item, index) => ({
      question: item.question(x),
      answer: pick(x.key, `f-${index}`, item.answers)(x),
    })),
  }

  const wordCount = countWords([
    heroTitle,
    heroIntro,
    challenges.heading,
    ...challenges.paragraphs,
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
    group: profile.group,
    terminology: profile.terms,
    hero: { title: heroTitle, intro: heroIntro },
    challenges,
    tech,
    deliverables,
    faq,
    wordCount,
  }
}

// ---------------------------------------------------------------------------
// Collision-free registry
//
// Every industry page (28 industries x webdesign/website variant) is composed
// from variant "attempts". An attempt is accepted when the word count is in
// range and none of its 3-sentence windows, deliverable descriptions or FAQ
// answers has been used by another page. Pages are processed in database
// order, so the result is deterministic and independent of render order.
// ---------------------------------------------------------------------------

export const INDUSTRY_WORD_RANGE = { min: 620, max: 750 } as const
const MAX_ATTEMPTS = 400
const KEYWORD_TYPES: IndustryKeywordType[] = ['webdesign', 'website']

export function collectUniqueUnits(content: PSEOIndustryContent): string[] {
  const sections = [
    content.hero.intro,
    content.challenges.paragraphs.join(' '),
    content.tech.paragraphs.join(' '),
  ]
  const units: string[] = []
  for (const section of sections) {
    const sentences = section.split(/(?<=[.!?])\s+/)
    for (let i = 0; i + 2 < sentences.length; i++) {
      units.push(sentences.slice(i, i + 3).join(' '))
    }
  }
  content.deliverables.items.forEach((item) => units.push(item.description))
  content.faq.items.forEach((item) => units.push(item.answer))
  return units
}

let registry: Map<string, PSEOIndustryContent> | null = null

function registryKey(slug: string, keywordType: IndustryKeywordType): string {
  return `${keywordType}:${slug}`
}

function getRegistry(): Map<string, PSEOIndustryContent> {
  if (registry) return registry
  const built = new Map<string, PSEOIndustryContent>()
  const used = new Set<string>()

  for (const keywordType of KEYWORD_TYPES) {
    for (const industry of ALL_INDUSTRIES) {
      let accepted: PSEOIndustryContent | null = null
      let inRange: PSEOIndustryContent | null = null

      for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
        const candidate = composeIndustryContent(industry, keywordType, attempt)
        if (
          candidate.wordCount < INDUSTRY_WORD_RANGE.min ||
          candidate.wordCount > INDUSTRY_WORD_RANGE.max
        ) {
          continue
        }
        inRange ??= candidate
        if (collectUniqueUnits(candidate).every((unit) => !used.has(unit))) {
          accepted = candidate
          break
        }
      }

      const chosen = accepted ?? inRange ?? composeIndustryContent(industry, keywordType, 0)
      collectUniqueUnits(chosen).forEach((unit) => used.add(unit))
      built.set(registryKey(industry.slug, keywordType), chosen)
    }
  }

  registry = built
  return built
}

export function generateIndustryContent(
  industry: IndustryData,
  keywordType: IndustryKeywordType,
): PSEOIndustryContent {
  return (
    getRegistry().get(registryKey(industry.slug, keywordType)) ??
    composeIndustryContent(industry, keywordType, 0)
  )
}
