/**
 * Programmatic SEO (pSEO) data architecture.
 *
 * Provides typed datasets and lookup helpers for generating location x
 * industry landing pages (e.g. /zahnarzt/duesseldorf) across German and
 * European markets.
 */

export interface CityData {
  slug: string
  name: string
  state: string // Bundesland
  regionType: "city" | "district" | "municipality" // Stadt, Landkreis, Gemeinde
  nearbyCities: string[] // Slugs of neighboring locations for dynamic internal linking
}

export interface IndustryData {
  slug: string
  name: string
  pluralName: string
  category: "health" | "beauty" | "craft" | "legal" | "gastro" | "hospitality" | "services"
  heroPainPoint: string
  localBoosterFocus: string
  keywords: string[]
}

// ---------------------------------------------------------------------------
// Cities
// ---------------------------------------------------------------------------

export const ALL_CITIES: CityData[] = [
  // --- Major hubs ---
  {
    slug: "berlin",
    name: "Berlin",
    state: "Berlin",
    regionType: "city",
    nearbyCities: ["potsdam", "brandenburg-an-der-havel", "oranienburg"],
  },
  {
    slug: "hamburg",
    name: "Hamburg",
    state: "Hamburg",
    regionType: "city",
    nearbyCities: ["luebeck", "norderstedt", "pinneberg"],
  },
  {
    slug: "muenchen",
    name: "München",
    state: "Bayern",
    regionType: "city",
    nearbyCities: ["augsburg", "dachau", "freising", "starnberg"],
  },
  {
    slug: "koeln",
    name: "Köln",
    state: "Nordrhein-Westfalen",
    regionType: "city",
    nearbyCities: ["leverkusen", "bonn", "duesseldorf", "bergisch-gladbach"],
  },
  {
    slug: "frankfurt-am-main",
    name: "Frankfurt am Main",
    state: "Hessen",
    regionType: "city",
    nearbyCities: ["offenbach", "wiesbaden", "darmstadt", "hanau"],
  },
  {
    slug: "stuttgart",
    name: "Stuttgart",
    state: "Baden-Württemberg",
    regionType: "city",
    nearbyCities: ["esslingen", "boeblingen", "ludwigsburg"],
  },
  {
    slug: "duesseldorf",
    name: "Düsseldorf",
    state: "Nordrhein-Westfalen",
    regionType: "city",
    nearbyCities: ["neuss", "mettmann", "ratingen", "koeln"],
  },
  {
    slug: "leipzig",
    name: "Leipzig",
    state: "Sachsen",
    regionType: "city",
    nearbyCities: ["halle-saale", "markkleeberg"],
  },
  {
    slug: "dortmund",
    name: "Dortmund",
    state: "Nordrhein-Westfalen",
    regionType: "city",
    nearbyCities: ["bochum", "essen", "unna"],
  },
  {
    slug: "essen",
    name: "Essen",
    state: "Nordrhein-Westfalen",
    regionType: "city",
    nearbyCities: ["dortmund", "duisburg", "muelheim-an-der-ruhr"],
  },
  {
    slug: "bremen",
    name: "Bremen",
    state: "Bremen",
    regionType: "city",
    nearbyCities: ["bremerhaven", "delmenhorst"],
  },
  {
    slug: "dresden",
    name: "Dresden",
    state: "Sachsen",
    regionType: "city",
    nearbyCities: ["freital", "radebeul", "pirna"],
  },
  {
    slug: "hannover",
    name: "Hannover",
    state: "Niedersachsen",
    regionType: "city",
    nearbyCities: ["hildesheim", "garbsen", "langenhagen"],
  },
  {
    slug: "nuernberg",
    name: "Nürnberg",
    state: "Bayern",
    regionType: "city",
    nearbyCities: ["fuerth", "erlangen", "schwabach"],
  },
  {
    slug: "duisburg",
    name: "Duisburg",
    state: "Nordrhein-Westfalen",
    regionType: "city",
    nearbyCities: ["essen", "oberhausen", "moers"],
  },
  {
    slug: "bochum",
    name: "Bochum",
    state: "Nordrhein-Westfalen",
    regionType: "city",
    nearbyCities: ["dortmund", "essen", "herne"],
  },
  {
    slug: "wuppertal",
    name: "Wuppertal",
    state: "Nordrhein-Westfalen",
    regionType: "city",
    nearbyCities: ["solingen", "remscheid", "duesseldorf"],
  },
  {
    slug: "bielefeld",
    name: "Bielefeld",
    state: "Nordrhein-Westfalen",
    regionType: "city",
    nearbyCities: ["guetersloh", "herford"],
  },
  {
    slug: "bonn",
    name: "Bonn",
    state: "Nordrhein-Westfalen",
    regionType: "city",
    nearbyCities: ["koeln", "siegburg"],
  },
  {
    slug: "muenster",
    name: "Münster",
    state: "Nordrhein-Westfalen",
    regionType: "city",
    nearbyCities: ["osnabrueck", "greven"],
  },

  // --- Regional centers ---
  {
    slug: "mannheim",
    name: "Mannheim",
    state: "Baden-Württemberg",
    regionType: "city",
    nearbyCities: ["ludwigshafen", "heidelberg"],
  },
  {
    slug: "karlsruhe",
    name: "Karlsruhe",
    state: "Baden-Württemberg",
    regionType: "city",
    nearbyCities: ["baden-baden", "pforzheim", "ettlingen"],
  },
  {
    slug: "wiesbaden",
    name: "Wiesbaden",
    state: "Hessen",
    regionType: "city",
    nearbyCities: ["mainz", "frankfurt-am-main"],
  },
  {
    slug: "mainz",
    name: "Mainz",
    state: "Rheinland-Pfalz",
    regionType: "city",
    nearbyCities: ["wiesbaden", "ingelheim"],
  },
  {
    slug: "augsburg",
    name: "Augsburg",
    state: "Bayern",
    regionType: "city",
    nearbyCities: ["muenchen", "friedberg"],
  },
  {
    slug: "kiel",
    name: "Kiel",
    state: "Schleswig-Holstein",
    regionType: "city",
    nearbyCities: ["neumuenster", "rendsburg"],
  },
  {
    slug: "aachen",
    name: "Aachen",
    state: "Nordrhein-Westfalen",
    regionType: "city",
    nearbyCities: ["dueren", "eschweiler"],
  },
  {
    slug: "freiburg-im-breisgau",
    name: "Freiburg im Breisgau",
    state: "Baden-Württemberg",
    regionType: "city",
    nearbyCities: ["loerrach", "offenburg"],
  },
  {
    slug: "regensburg",
    name: "Regensburg",
    state: "Bayern",
    regionType: "city",
    nearbyCities: ["straubing", "neutraubling"],
  },
  {
    slug: "luebeck",
    name: "Lübeck",
    state: "Schleswig-Holstein",
    regionType: "city",
    nearbyCities: ["hamburg", "bad-schwartau"],
  },
  {
    slug: "erfurt",
    name: "Erfurt",
    state: "Thüringen",
    regionType: "city",
    nearbyCities: ["weimar", "jena"],
  },
  {
    slug: "rostock",
    name: "Rostock",
    state: "Mecklenburg-Vorpommern",
    regionType: "city",
    nearbyCities: ["stralsund", "guestrow"],
  },
  {
    slug: "kassel",
    name: "Kassel",
    state: "Hessen",
    regionType: "city",
    nearbyCities: ["goettingen", "baunatal"],
  },
  {
    slug: "potsdam",
    name: "Potsdam",
    state: "Brandenburg",
    regionType: "city",
    nearbyCities: ["berlin", "brandenburg-an-der-havel"],
  },
  {
    slug: "saarbruecken",
    name: "Saarbrücken",
    state: "Saarland",
    regionType: "city",
    nearbyCities: ["voelklingen", "saarlouis"],
  },

  // --- Specific districts / municipalities ---
  {
    slug: "mettmann",
    name: "Mettmann",
    state: "Nordrhein-Westfalen",
    regionType: "district",
    nearbyCities: ["duesseldorf", "ratingen", "wuppertal", "solingen"],
  },
  {
    slug: "ratingen",
    name: "Ratingen",
    state: "Nordrhein-Westfalen",
    regionType: "municipality",
    nearbyCities: ["duesseldorf", "mettmann", "essen"],
  },
  {
    slug: "neuss",
    name: "Neuss",
    state: "Nordrhein-Westfalen",
    regionType: "city",
    nearbyCities: ["duesseldorf", "moenchengladbach"],
  },
  {
    slug: "moenchengladbach",
    name: "Mönchengladbach",
    state: "Nordrhein-Westfalen",
    regionType: "city",
    nearbyCities: ["neuss", "viersen"],
  },
  {
    slug: "leverkusen",
    name: "Leverkusen",
    state: "Nordrhein-Westfalen",
    regionType: "city",
    nearbyCities: ["koeln", "bergisch-gladbach"],
  },
  {
    slug: "bergisch-gladbach",
    name: "Bergisch Gladbach",
    state: "Nordrhein-Westfalen",
    regionType: "municipality",
    nearbyCities: ["koeln", "leverkusen"],
  },
  {
    slug: "solingen",
    name: "Solingen",
    state: "Nordrhein-Westfalen",
    regionType: "city",
    nearbyCities: ["wuppertal", "remscheid", "mettmann"],
  },
  {
    slug: "remscheid",
    name: "Remscheid",
    state: "Nordrhein-Westfalen",
    regionType: "city",
    nearbyCities: ["wuppertal", "solingen"],
  },
  {
    slug: "oberhausen",
    name: "Oberhausen",
    state: "Nordrhein-Westfalen",
    regionType: "city",
    nearbyCities: ["duisburg", "essen"],
  },
  {
    slug: "moers",
    name: "Moers",
    state: "Nordrhein-Westfalen",
    regionType: "municipality",
    nearbyCities: ["duisburg", "krefeld"],
  },
  {
    slug: "krefeld",
    name: "Krefeld",
    state: "Nordrhein-Westfalen",
    regionType: "city",
    nearbyCities: ["moers", "moenchengladbach", "duesseldorf"],
  },
  {
    slug: "dachau",
    name: "Dachau",
    state: "Bayern",
    regionType: "district",
    nearbyCities: ["muenchen", "freising"],
  },
  {
    slug: "freising",
    name: "Freising",
    state: "Bayern",
    regionType: "district",
    nearbyCities: ["muenchen", "dachau"],
  },
  {
    slug: "starnberg",
    name: "Starnberg",
    state: "Bayern",
    regionType: "district",
    nearbyCities: ["muenchen", "gauting"],
  },
  {
    slug: "esslingen",
    name: "Esslingen am Neckar",
    state: "Baden-Württemberg",
    regionType: "district",
    nearbyCities: ["stuttgart", "ludwigsburg"],
  },
  {
    slug: "boeblingen",
    name: "Böblingen",
    state: "Baden-Württemberg",
    regionType: "district",
    nearbyCities: ["stuttgart", "sindelfingen"],
  },
  {
    slug: "ludwigsburg",
    name: "Ludwigsburg",
    state: "Baden-Württemberg",
    regionType: "city",
    nearbyCities: ["stuttgart", "esslingen"],
  },
  {
    slug: "offenbach",
    name: "Offenbach am Main",
    state: "Hessen",
    regionType: "city",
    nearbyCities: ["frankfurt-am-main", "hanau"],
  },
  {
    slug: "darmstadt",
    name: "Darmstadt",
    state: "Hessen",
    regionType: "city",
    nearbyCities: ["frankfurt-am-main", "offenbach"],
  },
  {
    slug: "hanau",
    name: "Hanau",
    state: "Hessen",
    regionType: "city",
    nearbyCities: ["frankfurt-am-main", "offenbach"],
  },
  {
    slug: "ludwigshafen",
    name: "Ludwigshafen am Rhein",
    state: "Rheinland-Pfalz",
    regionType: "city",
    nearbyCities: ["mannheim", "heidelberg"],
  },
  {
    slug: "heidelberg",
    name: "Heidelberg",
    state: "Baden-Württemberg",
    regionType: "city",
    nearbyCities: ["mannheim", "ludwigshafen"],
  },
  {
    slug: "pforzheim",
    name: "Pforzheim",
    state: "Baden-Württemberg",
    regionType: "city",
    nearbyCities: ["karlsruhe", "baden-baden"],
  },
  {
    slug: "baden-baden",
    name: "Baden-Baden",
    state: "Baden-Württemberg",
    regionType: "city",
    nearbyCities: ["karlsruhe", "pforzheim"],
  },
  {
    slug: "fuerth",
    name: "Fürth",
    state: "Bayern",
    regionType: "city",
    nearbyCities: ["nuernberg", "erlangen"],
  },
  {
    slug: "erlangen",
    name: "Erlangen",
    state: "Bayern",
    regionType: "city",
    nearbyCities: ["nuernberg", "fuerth"],
  },
  {
    slug: "halle-saale",
    name: "Halle (Saale)",
    state: "Sachsen-Anhalt",
    regionType: "city",
    nearbyCities: ["leipzig"],
  },
  {
    slug: "brandenburg-an-der-havel",
    name: "Brandenburg an der Havel",
    state: "Brandenburg",
    regionType: "city",
    nearbyCities: ["potsdam", "berlin"],
  },
  {
    slug: "oranienburg",
    name: "Oranienburg",
    state: "Brandenburg",
    regionType: "municipality",
    nearbyCities: ["berlin"],
  },
  {
    slug: "norderstedt",
    name: "Norderstedt",
    state: "Schleswig-Holstein",
    regionType: "municipality",
    nearbyCities: ["hamburg"],
  },
  {
    slug: "pinneberg",
    name: "Pinneberg",
    state: "Schleswig-Holstein",
    regionType: "district",
    nearbyCities: ["hamburg", "norderstedt"],
  },

  // --- European destinations (relevant target markets outside Germany) ---
  {
    slug: "palma-de-mallorca",
    name: "Palma de Mallorca",
    state: "Islas Baleares",
    regionType: "city",
    nearbyCities: ["calvia", "manacor"],
  },
  {
    slug: "calvia",
    name: "Calvià",
    state: "Islas Baleares",
    regionType: "municipality",
    nearbyCities: ["palma-de-mallorca"],
  },
  {
    slug: "manacor",
    name: "Manacor",
    state: "Islas Baleares",
    regionType: "municipality",
    nearbyCities: ["palma-de-mallorca"],
  },
  {
    slug: "wien",
    name: "Wien",
    state: "Wien",
    regionType: "city",
    nearbyCities: ["graz", "linz"],
  },
  {
    slug: "graz",
    name: "Graz",
    state: "Steiermark",
    regionType: "city",
    nearbyCities: ["wien", "linz"],
  },
  {
    slug: "linz",
    name: "Linz",
    state: "Oberösterreich",
    regionType: "city",
    nearbyCities: ["wien", "graz"],
  },
  {
    slug: "zuerich",
    name: "Zürich",
    state: "Zürich",
    regionType: "city",
    nearbyCities: ["basel", "bern"],
  },
  {
    slug: "basel",
    name: "Basel",
    state: "Basel-Stadt",
    regionType: "city",
    nearbyCities: ["zuerich", "bern"],
  },
  {
    slug: "bern",
    name: "Bern",
    state: "Bern",
    regionType: "city",
    nearbyCities: ["zuerich", "basel"],
  },
]

// ---------------------------------------------------------------------------
// Industries
// ---------------------------------------------------------------------------

export const ALL_INDUSTRIES: IndustryData[] = [
  // --- Health & Medical Specialists ---
  {
    slug: "zahnarzt",
    name: "Zahnarzt",
    pluralName: "Zahnärzte",
    category: "health",
    heroPainPoint: "Terminausfälle und leere Stühle durch schlechte Online-Sichtbarkeit",
    localBoosterFocus: "Google-Bewertungen und lokale Suchergebnisse für Notfall- und Vorsorgetermine",
    keywords: [
      "zahnarzt in der nähe",
      "zahnarzt notdienst",
      "zahnarztpraxis termin online",
      "zahnreinigung kosten",
      "zahnarzt bewertungen",
    ],
  },
  {
    slug: "dermatologe",
    name: "Dermatologe",
    pluralName: "Dermatologen",
    category: "health",
    heroPainPoint: "Lange Wartezeiten auf Termine trotz hoher Nachfrage nach Hautkrebs-Screenings",
    localBoosterFocus: "Sichtbarkeit für dringende Hautprobleme und Vorsorgeuntersuchungen",
    keywords: [
      "hautarzt termin",
      "dermatologe in der nähe",
      "hautkrebs vorsorge",
      "hautarzt online termin buchen",
      "facharzt für hautkrankheiten",
    ],
  },
  {
    slug: "kieferorthopaede",
    name: "Kieferorthopäde",
    pluralName: "Kieferorthopäden",
    category: "health",
    heroPainPoint: "Eltern finden schwer vertrauenswürdige Praxen für Zahnspangen-Beratung",
    localBoosterFocus: "Vertrauen durch Bewertungen bei kostenintensiven Behandlungen wie Zahnspangen",
    keywords: [
      "kieferorthopäde in der nähe",
      "zahnspange kosten",
      "unsichtbare zahnspange",
      "kfo praxis termin",
      "kieferorthopädie kinder",
    ],
  },
  {
    slug: "orthopaede",
    name: "Orthopäde",
    pluralName: "Orthopäden",
    category: "health",
    heroPainPoint: "Patienten mit akuten Rückenschmerzen finden keinen kurzfristigen Termin",
    localBoosterFocus: "Schnelle Terminfindung für Rücken-, Gelenk- und Sportverletzungen",
    keywords: [
      "orthopäde in der nähe",
      "orthopäde termin ohne wartezeit",
      "rückenschmerzen facharzt",
      "sportorthopädie",
      "orthopäde bewertungen",
    ],
  },
  {
    slug: "augenarzt",
    name: "Augenarzt",
    pluralName: "Augenärzte",
    category: "health",
    heroPainPoint: "Monatelange Wartezeiten für Augenuntersuchungen und Sehtests",
    localBoosterFocus: "Lokale Auffindbarkeit für Sehtests, Grauer-Star-OPs und Kontaktlinsen-Beratung",
    keywords: [
      "augenarzt in der nähe",
      "augenarzt termin",
      "sehtest kosten",
      "grauer star operation",
      "facharzt für augenheilkunde",
    ],
  },
  {
    slug: "kinderarzt",
    name: "Kinderarzt",
    pluralName: "Kinderärzte",
    category: "health",
    heroPainPoint: "Eltern brauchen schnell verfügbare Termine bei akuten Kindererkrankungen",
    localBoosterFocus: "Vertrauen von Eltern durch Bewertungen und schnelle Erreichbarkeit",
    keywords: [
      "kinderarzt in der nähe",
      "kinderarzt notdienst",
      "kinderarzt termin online",
      "kinderärztliche vorsorge",
      "bester kinderarzt",
    ],
  },
  {
    slug: "hausarzt",
    name: "Hausarzt",
    pluralName: "Hausärzte",
    category: "health",
    heroPainPoint: "Volle Praxen und Patientenstopps erschweren die Neupatientengewinnung",
    localBoosterFocus: "Sichtbarkeit als aufnehmende Praxis für neue Kassenpatienten",
    keywords: [
      "hausarzt in der nähe",
      "hausarzt neue patienten",
      "allgemeinmediziner termin",
      "hausarztpraxis bewertungen",
      "hausarzt notdienst",
    ],
  },
  {
    slug: "physiotherapie",
    name: "Physiotherapeut",
    pluralName: "Physiotherapeuten",
    category: "health",
    heroPainPoint: "Rezepte verfallen, weil Patienten keine zeitnahen Behandlungstermine finden",
    localBoosterFocus: "Schnelle Terminvergabe für Krankengymnastik und Sportverletzungen",
    keywords: [
      "physiotherapie in der nähe",
      "physiotherapeut termin",
      "krankengymnastik",
      "physiotherapie hausbesuch",
      "sportphysiotherapie",
    ],
  },

  // --- Beauty & Wellness ---
  {
    slug: "naildesign",
    name: "Nagelstudio",
    pluralName: "Nagelstudios",
    category: "beauty",
    heroPainPoint: "Kundinnen buchen bei Wettbewerbern, weil Terminbuchung online nicht sichtbar ist",
    localBoosterFocus: "Instagram-würdige Ergebnisse und einfache Online-Terminbuchung",
    keywords: [
      "nagelstudio in der nähe",
      "gelnägel termin",
      "naildesign preise",
      "maniküre pediküre",
      "nagelstudio bewertungen",
    ],
  },
  {
    slug: "kosmetikstudio",
    name: "Kosmetikstudio",
    pluralName: "Kosmetikstudios",
    category: "beauty",
    heroPainPoint: "Hohe Konkurrenz bei Google-Suchen nach Gesichtsbehandlungen und Wellness",
    localBoosterFocus: "Differenzierung durch Spezialbehandlungen und Kundenbewertungen",
    keywords: [
      "kosmetikstudio in der nähe",
      "kosmetikerin termin",
      "gesichtsbehandlung kosten",
      "wimpernverlängerung",
      "kosmetikstudio bewertungen",
    ],
  },
  {
    slug: "friseur",
    name: "Friseur & Barber",
    pluralName: "Friseure & Barber",
    category: "beauty",
    heroPainPoint: "Laufkundschaft bleibt aus, weil Online-Terminbuchung fehlt oder unauffindbar ist",
    localBoosterFocus: "Lokale Top-Platzierung für spontane und wiederkehrende Terminbuchungen",
    keywords: [
      "friseur in der nähe",
      "barbershop termin",
      "haarschnitt preise",
      "friseur online termin buchen",
      "bester friseur bewertungen",
    ],
  },
  {
    slug: "tattoostudio",
    name: "Tattoostudio",
    pluralName: "Tattoostudios",
    category: "beauty",
    heroPainPoint: "Vertrauensaufbau ist schwer ohne sichtbares Portfolio und Bewertungen",
    localBoosterFocus: "Portfolio-Präsentation und Vertrauen durch verifizierte Bewertungen",
    keywords: [
      "tattoostudio in der nähe",
      "tattoo termin",
      "tattoo preise pro stunde",
      "tätowierer bewertungen",
      "cover up tattoo",
    ],
  },
  {
    slug: "podologie",
    name: "Fußpflege / Podologie",
    pluralName: "Podologen",
    category: "beauty",
    heroPainPoint: "Ältere Kunden finden schwer vertrauenswürdige medizinische Fußpflege in der Nähe",
    localBoosterFocus: "Vertrauen bei medizinischer Fußpflege und Hausbesuchen für Senioren",
    keywords: [
      "fußpflege in der nähe",
      "medizinische fußpflege",
      "podologe termin",
      "fußpflege hausbesuch",
      "diabetiker fußpflege",
    ],
  },

  // --- Craft & Trades (Handwerk) ---
  {
    slug: "kfz-werkstatt",
    name: "KFZ-Werkstatt",
    pluralName: "KFZ-Werkstätten",
    category: "craft",
    heroPainPoint: "Autofahrer mit Pannen suchen sofort nach der nächstgelegenen Werkstatt",
    localBoosterFocus: "Sichtbarkeit bei dringenden Reparaturen und TÜV-Terminen",
    keywords: [
      "kfz werkstatt in der nähe",
      "autowerkstatt termin",
      "tüv hu termin",
      "reifenwechsel kosten",
      "kfz meister bewertungen",
    ],
  },
  {
    slug: "elektriker",
    name: "Elektriker",
    pluralName: "Elektriker",
    category: "craft",
    heroPainPoint: "Notfälle wie Stromausfall erfordern sofortige lokale Auffindbarkeit",
    localBoosterFocus: "Schnelle Erreichbarkeit für Notdienste und Vertrauen bei Installationen",
    keywords: [
      "elektriker in der nähe",
      "elektriker notdienst",
      "elektroinstallation kosten",
      "elektriker termin",
      "elektromeister bewertungen",
    ],
  },
  {
    slug: "sanitaer-heizung",
    name: "Sanitär & Heizung (SHK)",
    pluralName: "SHK-Betriebe",
    category: "craft",
    heroPainPoint: "Wasserschäden und Heizungsausfälle brauchen sofortige lokale Hilfe",
    localBoosterFocus: "Sichtbarkeit bei Notdiensten für Rohrbrüche und Heizungsausfälle",
    keywords: [
      "sanitär notdienst",
      "heizungsbauer in der nähe",
      "klempner in der nähe",
      "heizung reparatur kosten",
      "shk betrieb bewertungen",
    ],
  },
  {
    slug: "maler-lackierer",
    name: "Maler & Lackierer",
    pluralName: "Maler & Lackierer",
    category: "craft",
    heroPainPoint: "Kunden vergleichen mehrere Angebote und wählen den sichtbarsten Anbieter",
    localBoosterFocus: "Vor-Nachher-Bilder und Bewertungen für Renovierungsentscheidungen",
    keywords: [
      "maler in der nähe",
      "malerbetrieb kosten",
      "tapezieren lassen",
      "fassadenanstrich preise",
      "maler und lackierer bewertungen",
    ],
  },
  {
    slug: "dachdecker",
    name: "Dachdecker",
    pluralName: "Dachdecker",
    category: "craft",
    heroPainPoint: "Sturmschäden erfordern schnelle, vertrauenswürdige Dachdecker in der Nähe",
    localBoosterFocus: "Sichtbarkeit für Notreparaturen und größere Sanierungsprojekte",
    keywords: [
      "dachdecker in der nähe",
      "dachreparatur notdienst",
      "dach sanieren kosten",
      "dachdeckerbetrieb bewertungen",
      "flachdach sanierung",
    ],
  },
  {
    slug: "schreiner",
    name: "Schreiner",
    pluralName: "Schreiner",
    category: "craft",
    heroPainPoint: "Maßanfertigungen erfordern Vertrauen, das online schwer aufzubauen ist",
    localBoosterFocus: "Portfolio individueller Möbelstücke und Einbauten für Vertrauensaufbau",
    keywords: [
      "schreiner in der nähe",
      "möbel nach maß",
      "schreinerei kosten",
      "einbauschrank tischler",
      "schreiner bewertungen",
    ],
  },

  // --- Professional & Legal ---
  {
    slug: "rechtsanwalt",
    name: "Rechtsanwalt",
    pluralName: "Rechtsanwälte",
    category: "legal",
    heroPainPoint: "Mandanten suchen dringend Fachanwälte, finden aber generische Kanzleiseiten",
    localBoosterFocus: "Vertrauen durch Fachgebiets-Spezialisierung und Erstberatungs-Sichtbarkeit",
    keywords: [
      "rechtsanwalt in der nähe",
      "fachanwalt für arbeitsrecht",
      "anwalt kostenlose erstberatung",
      "scheidungsanwalt kosten",
      "rechtsanwalt bewertungen",
    ],
  },
  {
    slug: "steuerberater",
    name: "Steuerberater",
    pluralName: "Steuerberater",
    category: "legal",
    heroPainPoint: "Selbstständige und Unternehmer suchen dringend nach neuen Mandaten aufnehmenden Kanzleien",
    localBoosterFocus: "Sichtbarkeit als Steuerberater mit freien Mandats-Kapazitäten",
    keywords: [
      "steuerberater in der nähe",
      "steuerberater neue mandanten",
      "steuererklärung kosten",
      "steuerberatung für selbstständige",
      "steuerberater bewertungen",
    ],
  },
  {
    slug: "immobilienmakler",
    name: "Immobilienmakler",
    pluralName: "Immobilienmakler",
    category: "legal",
    heroPainPoint: "Verkäufer wählen den Makler mit der besten Online-Reputation und Reichweite",
    localBoosterFocus: "Verkaufserfolge und Bewertungen zur Gewinnung neuer Verkaufsmandate",
    keywords: [
      "immobilienmakler in der nähe",
      "haus verkaufen makler",
      "immobilienbewertung kostenlos",
      "wohnung vermieten makler",
      "immobilienmakler bewertungen",
    ],
  },
  {
    slug: "notar",
    name: "Notar",
    pluralName: "Notare",
    category: "legal",
    heroPainPoint: "Kurzfristige Beurkundungstermine sind schwer zu finden und zu vergleichen",
    localBoosterFocus: "Verfügbarkeit für zeitkritische Beurkundungen wie Immobilienkauf",
    keywords: [
      "notar in der nähe",
      "notartermin kurzfristig",
      "notarkosten hauskauf",
      "notar beglaubigung",
      "notar bewertungen",
    ],
  },

  // --- Gastro & Hospitality ---
  {
    slug: "restaurant",
    name: "Restaurant",
    pluralName: "Restaurants",
    category: "gastro",
    heroPainPoint: "Reservierungen bleiben aus, weil das Restaurant in lokalen Suchen nicht auftaucht",
    localBoosterFocus: "Menüpräsentation und Bewertungen für spontane und geplante Reservierungen",
    keywords: [
      "restaurant in der nähe",
      "restaurant reservierung",
      "bestes restaurant bewertungen",
      "restaurant öffnungszeiten",
      "restaurant lieferservice",
    ],
  },
  {
    slug: "cafe-baeckerei",
    name: "Café & Bäckerei",
    pluralName: "Cafés & Bäckereien",
    category: "gastro",
    heroPainPoint: "Laufkundschaft entscheidet spontan anhand von Google-Bewertungen und Fotos",
    localBoosterFocus: "Ansprechende Fotos und Bewertungen für spontane Vor-Ort-Entscheidungen",
    keywords: [
      "café in der nähe",
      "bäckerei in der nähe",
      "frühstück café",
      "bäckerei öffnungszeiten",
      "café bewertungen",
    ],
  },
  {
    slug: "boutique-hotel",
    name: "Boutique Hotel",
    pluralName: "Boutique Hotels",
    category: "hospitality",
    heroPainPoint: "Direktbuchungen gehen an OTAs verloren, wenn die eigene Sichtbarkeit fehlt",
    localBoosterFocus: "Direktbuchungen durch starke lokale Präsenz und Zimmerbewertungen",
    keywords: [
      "boutique hotel in der nähe",
      "hotel direkt buchen",
      "romantisches hotel",
      "hotel bewertungen",
      "hotel mit spa",
    ],
  },
  {
    slug: "bar-club",
    name: "Bar & Club",
    pluralName: "Bars & Clubs",
    category: "gastro",
    heroPainPoint: "Nachtschwärmer entscheiden spontan basierend auf aktueller Sichtbarkeit und Bewertungen",
    localBoosterFocus: "Event-Sichtbarkeit und Bewertungen für spontane Ausgehentscheidungen",
    keywords: [
      "bar in der nähe",
      "club heute abend",
      "cocktailbar bewertungen",
      "rooftop bar",
      "club eintritt",
    ],
  },
  {
    slug: "catering",
    name: "Catering",
    pluralName: "Catering-Anbieter",
    category: "gastro",
    heroPainPoint: "Veranstalter vergleichen mehrere Caterer und wählen den mit besten Referenzen",
    localBoosterFocus: "Referenzprojekte und Bewertungen für Firmenfeiern und Hochzeiten",
    keywords: [
      "catering in der nähe",
      "catering hochzeit kosten",
      "firmenevent catering",
      "catering anbieter bewertungen",
      "buffet catering preise",
    ],
  },
]

// ---------------------------------------------------------------------------
// Helper functions
// ---------------------------------------------------------------------------

export function getCityBySlug(slug: string): CityData | undefined {
  return ALL_CITIES.find((city) => city.slug === slug)
}

export function getIndustryBySlug(slug: string): IndustryData | undefined {
  return ALL_INDUSTRIES.find((industry) => industry.slug === slug)
}

export function getAllCitySlugs(): string[] {
  return ALL_CITIES.map((city) => city.slug)
}

export function getAllIndustrySlugs(): string[] {
  return ALL_INDUSTRIES.map((industry) => industry.slug)
}
