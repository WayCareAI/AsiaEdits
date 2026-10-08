import type { ReactNode } from 'react'

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-balance font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
      {children}
    </h2>
  )
}

function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-8 text-balance font-heading text-lg font-semibold text-foreground sm:text-xl">
      {children}
    </h3>
  )
}

function P({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
      {children}
    </p>
  )
}

function Strong({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-foreground">{children}</strong>
}

function List({ children }: { children: ReactNode }) {
  return (
    <ul className="mt-5 flex flex-col gap-3 rounded-2xl border border-border bg-card/60 p-6">
      {children}
    </ul>
  )
}

function Item({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 leading-relaxed text-muted-foreground">
      <span
        aria-hidden
        className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary"
      />
      <span>{children}</span>
    </li>
  )
}

function Section({ children }: { children: ReactNode }) {
  return (
    <section className="border-t border-border py-10 first:border-t-0 first:pt-0">
      {children}
    </section>
  )
}

export function ArticleBody() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Section>
        <H2>Einleitung: Das Google Local Pack als stärkster B2B-Kundenmagnet</H2>
        <P>
          Wenn potenzielle Auftraggeber, regionale Gewerbekunden oder
          B2B-Partner nach spezialisierten Dienstleistungen in ihrer Nähe
          suchen, führt der erste Blick ausnahmslos auf das{' '}
          <Strong>Google Local Pack</Strong> &ndash; den prominenten
          Kartenausschnitt ganz oben in den Suchergebnissen.
        </P>
        <P>
          Position 1 bis 3 in diesem Kartenausschnitt generieren den
          Löwenanteil aller kaufbereiten Klicks und Anrufe. Wer hier nicht
          stattfindet, ist für den lokalen Markt schlichtweg unsichtbar.
        </P>
        <P>
          Doch die Zeiten, in denen ein einfacher Eintrag bei Google Business
          Profile für dauerhafte Spitzenplätze ausreichte, sind im Jahr 2026
          vorbei. Um das Local Pack nachhaltig zu dominieren, braucht es ein
          nahtloses Zusammenspiel aus hochpräzisem{' '}
          <Strong>Schema.org LocalBusiness Markup</Strong>, sauber
          strukturiertem <Strong>Geo-Targeting</Strong> und technischer
          Exzellenz.
        </P>
      </Section>

      <Section>
        <H2>
          Schema.org LocalBusiness Markup: Die Geheimwaffe für Google-Bots
        </H2>
        <P>
          Suchmaschinen-Algorithmen sind darauf angewiesen, Informationen über
          ein Unternehmen eindeutig zu interpretieren. Strukturierte Daten nach
          dem weltweiten Schema.org-Standard übersetzen die Inhalte deiner
          Website in eine mathematisch eindeutige Sprache für den Google-Bot.
        </P>
        <List>
          <Item>
            <Strong>Eindeutige Entitäts-Zuordnung:</Strong> Durch ein
            lückenloses LocalBusiness JSON-LD Script erfährt die Suchmaschine
            exakt, welche Dienstleistungen an welchen Koordinaten und in
            welchen Zielregionen angeboten werden.
          </Item>
          <Item>
            <Strong>Vermeidung von NAP-Inkonsistenzen:</Strong> Name, Adresse
            und Telefonnummer (NAP &ndash; Name, Address, Phone) werden
            systemweit harmonisiert. Das verhindert Missverständnisse beim
            Algorithmus und stärkt die lokale Autorität der Domain.
          </Item>
          <Item>
            <Strong>Geo-Koordinaten &amp; Einzugsgebiete:</Strong> Durch das
            präzise Hinterlegen von Geokoordinaten (Latitude/Longitude) und
            spezifischen Ziel-Regionen (GeoCircle / ServiceArea) versteht
            Google exakt, in welchen Nachbarstädten deine Dienstleistung
            ausgespielt werden soll.
          </Item>
        </List>
      </Section>

      <Section>
        <H2>
          Die Strategie: Wie AsiaEdits Geo-Targeting auf der Website verankert
        </H2>
        <P>
          Ein häufiger Fehler bei lokalen SEO-Strategien besteht darin, das
          Geo-Targeting ausschließlich externen Verzeichnissen zu überlassen.
          Wir verankern die lokale Relevanz tief in der Architektur deiner
          Unternehmenswebsite:
        </P>

        <H3>1. Regionale Inhalts-Cluster mit mathematischer WDF*IDF-Präzision</H3>
        <P>
          Anstatt generischer Standard-Texte erstellen wir Inhalts-Cluster, die
          lokale Fachbegriffe, regionale Gegebenheiten und
          Branchen-Terminologien harmonisch kombinieren. Das signalisiert dem
          Algorithmus eine tiefe Verankerung im jeweiligen Wirtschaftsraum.
        </P>

        <H3>2. Entkoppelte High-Speed-Performance für mobile Anfragen</H3>
        <P>
          Lokale Suchanfragen finden zu über 70 % auf mobilen Endgeräten statt
          &ndash; häufig von unterwegs mit schwankenden Netzabdeckungen. Unsere
          entkoppelte Edge-Architektur sorgt dafür, dass die Seite in
          Bruchteilen einer Sekunde lädt. Das verhindert Abbrüche und belohnt
          die Website mit Top-Werten bei den Core Web Vitals.
        </P>

        <H3>3. Nahtlose Verknüpfung von Website und Kartenprofil</H3>
        <P>
          Wir synchronisieren die Inhaltsstruktur deiner Landingpages mit
          deinem Google-Kartenprofil. Wenn Google erkennt, dass
          Landingpage-Inhalte, Kundenbewertungen und strukturiertes Markup zu
          100 % übereinstimmen, steigt das Ranking im Local Pack rasant an.
        </P>
      </Section>

      <Section>
        <H2>Die Business-Ergebnisse: Direkte Anfragen ohne Streuverlust</H2>
        <P>
          Die konsequente Ausrichtung auf Local Pack Dominanz bringt handfeste
          Vorteile für regionale Marktführer:
        </P>
        <List>
          <Item>
            <Strong>Extrem hohe Klick- und Anrufraten:</Strong> Kunden im Local
            Pack besitzen eine unmittelbare Kaufabsicht. Die Wege zur
            Kontaktaufnahme sind drastisch verkürzt.
          </Item>
          <Item>
            <Strong>Dominanz gegenüber überregionalen Konkurrenten:</Strong>{' '}
            Selbst große, bundesweit agierende Mitbewerber werden in den
            regionalen Suchergebnissen von sauber optimierten lokalen Anbietern
            verdrängt.
          </Item>
          <Item>
            <Strong>Nachhaltiger Vertrauensvorschuss:</Strong> Ein Platz in den
            Top 3 der lokalen Karten-Suchergebnisse strahlt sofortige
            Seriosität und Marktdominanz aus.
          </Item>
        </List>
      </Section>

      <Section>
        <H2>Strategische Key Takeaways: Regionale Marktführerschaft sichern</H2>
        <P>
          Das Google Local Pack ist die wertvollste digitale Immobilie für
          regionale Dienstleister. Wer Schema.org LocalBusiness Markup,
          Geo-Targeting und blitzschnelle Ladezeiten vereint, sichert sich die
          unangefochtene Marktführerschaft in seiner Region.
        </P>
      </Section>
    </div>
  )
}
