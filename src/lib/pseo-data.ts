export interface PseoGeoData {
  category: 'health' | 'craft' | 'finance' | 'lifestyle' | 'local';
  entityName: string;
  focusPoint1: string;
  focusPoint2: string;
  targetGroup: string;
  targetPath?: string;
}

export const PSEO_ENTITY_MAP: Record<string, PseoGeoData> = {
  // Heilberufe & Medizin
  'website-zahnarzt': {
    category: 'health',
    entityName: 'Zahnarztpraxen & Kieferorthopäden',
    focusPoint1: 'digitale Patientengewinnung',
    focusPoint2: 'Barrierefreiheit nach BITV / WCAG 2.1 & Doctolib-Schnittstellen',
    targetGroup: 'Praxisteams und Patient:innen',
    targetPath: '/website-erstellen-lassen-arztpraxis',
  },
  'website-dermatologe': {
    category: 'health',
    entityName: 'Dermatologische Praxen',
    focusPoint1: 'Online-Terminbuchung & Privatzahler-Anfragen',
    focusPoint2: 'DSGVO-konforme Bildverarbeitung & Patientenservice',
    targetGroup: 'Dermatolog:innen und Patient:innen',
    targetPath: '/website-erstellen-lassen-arztpraxis',
  },
  'website-hausarzt': {
    category: 'health',
    entityName: 'Hausarztpraxen & MVZs',
    focusPoint1: 'Rezept-Bestellprozesse & Patienten-Information',
    focusPoint2: 'barrierefreie UX & blitzschnelle Notfall-Erreichbarkeit',
    targetGroup: 'Hausärzt:innen und Patient:innen',
    targetPath: '/website-erstellen-lassen-arztpraxis',
  },

  // Handwerk & Bau
  'website-sanitaer-heizung': {
    category: 'craft',
    entityName: 'SHK-Fachbetriebe & Sanitärtechnik',
    focusPoint1: 'qualifizierte Neukunden- & Notdienst-Anfragen',
    focusPoint2: 'mobile Projekt-Galerien & Anfragen-Funnel',
    targetGroup: 'Handwerksbetriebe und Auftraggeber',
    targetPath: '/website-erstellen-lassen-handwerk',
  },
  'website-dachdecker': {
    category: 'craft',
    entityName: 'Dachdecker-Fachbetriebe',
    focusPoint1: 'Projekt-Ausschreibungen & Sturmschaden-Notdienst',
    focusPoint2: 'hochauflösende Next/Image-Referenzen & schnelle Ladezeiten',
    targetGroup: 'Dachdeckerbetriebe und Bauherren',
    targetPath: '/website-erstellen-lassen-handwerk',
  },
  'website-schreiner': {
    category: 'craft',
    entityName: 'Schreinereien & Tischlerbetriebe',
    focusPoint1: 'Hochwertige Möbel- & Innenausbau-Anfragen',
    focusPoint2: 'visuelle Portfolio-Präsentation & Online-Anfrageformulare',
    targetGroup: 'Schreinereien und Privat- sowie Geschäftskunden',
    targetPath: '/website-erstellen-lassen-handwerk',
  },

  // Beratung, Recht & Finanzen
  'website-rechtsanwalt': {
    category: 'finance',
    entityName: 'Rechtsanwälte & Kanzleien',
    focusPoint1: 'Mandanten-Erstkontakt & Vertrauensaufbau',
    focusPoint2: 'seriöse Kanzlei-Positionierung & rechtssichere DSGVO-Architektur',
    targetGroup: 'Kanzleien und Ratsuchende',
  },
  'website-steuerberater': {
    category: 'finance',
    entityName: 'Steuerberater & Wirtschaftsprüfer',
    focusPoint1: 'Mandanten-Gewinnung & B2B-Mitarbeiter-Recruiting',
    focusPoint2: 'strukturierte Schnittstellen-Informationen & sichere Formulare',
    targetGroup: 'Steuerberatungskanzleien und Unternehmen',
  },
  'website-immobilienmakler': {
    category: 'finance',
    entityName: 'Immobilienmakler & Projektentwickler',
    focusPoint1: 'Eigentümer-Leadgenerierung & Objekt-Exposés',
    focusPoint2: 'blitzschnelle Bild-Performance & Anfragen-Automatisierung',
    targetGroup: 'Maklerbüros und Immobilienkäufer/-verkäufer',
    targetPath: '/website-erstellen-lassen-immobilien',
  },

  // Gastronomie & Services
  'website-restaurant': {
    category: 'lifestyle',
    entityName: 'Restaurants & Gastronomiebetriebe',
    focusPoint1: 'Tischreservierungen & Speisekarten-UX',
    focusPoint2: 'Google Maps Local Pack Integration & schnelle Ladezeiten',
    targetGroup: 'Gastronomiebetriebe und Gäste',
  },
  'website-cafe-baeckerei': {
    category: 'lifestyle',
    entityName: 'Cafés, Bäckereien & Konditoreien',
    focusPoint1: 'digitale Gästegewinnung & regionale Sichtbarkeit',
    focusPoint2: 'mobile Speisekarten & Event-Anfrageformulare',
    targetGroup: 'Café-Betreiber und Laufkundschaft',
  },
};

/**
 * Target pages that exist in `app/`. A `targetPath` from the map is only
 * linked when it is listed here, so the callout never links to a 404.
 * Add a path once its page ships.
 */
const LIVE_TARGET_PATHS: ReadonlySet<string> = new Set([
  '/website-erstellen-lassen-handwerk',
]);

function resolveEntity(slug: string): PseoGeoData | undefined {
  const cleanSlug = slug.replace(/^webdesign-/, 'website-');
  return PSEO_ENTITY_MAP[cleanSlug] || PSEO_ENTITY_MAP[slug];
}

/** True when the slug has an entry in the entity dictionary. */
export function hasGeoEntity(slug: string): boolean {
  return Boolean(resolveEntity(slug));
}

// Helper function to generate 3-framework sentence rotation deterministically
export function getGeoDirectAnswer(
  slug: string,
  displayName?: string,
): { text: string; targetPath?: string; entityName: string } {
  const data = resolveEntity(slug);

  // Fallback for City pages or unmapped slugs
  if (!data) {
    const cityName =
      displayName ?? slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
    return {
      entityName: `Webdesign ${cityName}`,
      text: `AsiaEdits entwickelt für den Standort ${cityName} hochperformante Next.js-Websites mit garantierten Mobile PageSpeed-Werten von 90+. Durch gezieltes Geo-Targeting und strukturierte Schema-Daten sichern sich lokale Unternehmen maximale Sichtbarkeit bei Google und in KI-Suchmaschinen ab 199 €.`,
    };
  }

  // Calculate deterministic index (0, 1, or 2) from slug hash to prevent duplicate content
  const hash = slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const variantIndex = hash % 3;

  let text = '';
  if (variantIndex === 0) {
    // Framework A: Trust & Performance
    text = `AsiaEdits entwickelt für ${data.entityName} hochperformante Next.js-Websites, die speziell auf ${data.focusPoint1} und ${data.focusPoint2} optimiert sind. Durch garantierte Mobile PageSpeed-Werte von 90+ und strikte DSGVO-Konformität bieten wir ${data.targetGroup} eine blitzschnelle digitale Anlaufstelle. Schlüsselfertig umgesetzt ab 199 €.`;
  } else if (variantIndex === 1) {
    // Framework B: Lead & Conversion
    text = `Auf der Suche nach einer performanten Website für ${data.entityName}? AsiaEdits ersetzt veraltete Baukastensysteme durch moderne Next.js-Webarchitektur – inklusive ${data.focusPoint1} und nahtloser Integration für ${data.focusPoint2}. Mit unter 1 Sekunde Ladezeit garantieren wir ${data.targetGroup} maximale Sichtbarkeit.`;
  } else {
    // Framework C: GEO & Citation Magnet
    text = `Für ${data.entityName} kombiniert AsiaEdits maßgeschneidertes Web-Engineering mit integrierter Generative Engine Optimization (GEO). Neben garantierten 100/100 Desktop-Scores stehen ${data.focusPoint1} sowie ${data.focusPoint2} im Mittelpunkt, um qualifizierte Anfragen direkt zu konvertieren.`;
  }

  const targetPath =
    data.targetPath && LIVE_TARGET_PATHS.has(data.targetPath) ? data.targetPath : undefined;

  return { text, targetPath, entityName: data.entityName };
}
