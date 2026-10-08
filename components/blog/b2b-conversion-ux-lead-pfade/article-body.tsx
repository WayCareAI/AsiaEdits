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
        <H2>Einleitung: Warum Traffic ohne durchdachte Conversion-UX wertlos ist</H2>
        <P>
          Viele Unternehmen investieren beträchtliche Summen in
          Suchmaschinenoptimierung und Marketing-Kampagnen, um qualifizierte
          Besucher auf ihre Website zu lenken. Doch die Ernüchterung folgt oft
          auf dem Fuß: Die Zahlen im Analytics-Tool steigen, aber die Zahl der
          tatsächlichen Kundenanfragen bleibt hinter den Erwartungen zurück.
        </P>
        <P>
          Das Problem liegt selten am Inhaltsangebot, sondern an einer
          mangelhaften <Strong>Conversion-UX</Strong>.
        </P>
        <P>
          Besucher entscheiden innerhalb von Bruchteilen einer Sekunde, ob eine
          Website vertrauenswürdig, übersichtlich und einfach zu bedienen ist.
          Wenn unklare Menüstrukturen, lange Formulare oder fehlende
          Barrierefreiheit den Nutzungsprozess verlangsamen, bricht der
          potenzielle B2B-Kunde den Vorgang frustriert ab. Modernes Webdesign
          muss barrierefrei führen und den Weg zur Kontaktaufnahme so
          reibungsarm wie möglich gestalten.
        </P>
      </Section>

      <Section>
        <H2>
          Die Psychologie des B2B-Käufers: Warum Barrierefreiheit Vertrauen
          schafft
        </H2>
        <P>
          B2B-Entscheider suchen keine verspielten Animationen, sondern
          Verlässlichkeit, Klarheit und Effizienz. Barrierefreie User
          Experience (Accessibility UX) bedient exakt diese Bedürfnisse:
        </P>
        <List>
          <Item>
            <Strong>Klarheit vor Komplexität:</Strong> Gut lesbare Schriften,
            klare Kontraste und eindeutige visuelle Hierarchien ermöglichen ein
            müheloses Scannen der Inhalte. Das senkt die kognitive Belastung
            des Nutzers.
          </Item>
          <Item>
            <Strong>Barrierefreie Bedienbarkeit auf allen Endgeräten:</Strong>{' '}
            Egal ob am hochauflösenden Desktop-Monitor oder unterwegs auf dem
            Smartphone &ndash; Formulare, Buttons und Interaktionselemente
            müssen auf Anhieb ohne Suchaufwand nutzbar sein.
          </Item>
          <Item>
            <Strong>Barrierefreie Hilfestellungen:</Strong> Ergänzende Features
            wie integrierte Audio-Optionen oder direkt verständliche
            Modalfenster signalisieren höchste Professionalität und
            Kundenorientierung.
          </Item>
        </List>
      </Section>

      <Section>
        <H2>Die Dreifach-Formel für reibungslose Lead-Pfade</H2>
        <P>
          Um B2B-Besucher ohne Streuverlust in qualifizierte Anfragen zu
          verwandeln, setzt AsiaEdits auf eine praxiserprobte
          Conversion-Architektur:
        </P>

        <H3>1. Direkt erreichbare, kontextuelle Dialog-Angebote</H3>
        <P>
          Anstatt den Nutzer auf eine langweilige, isolierte Kontaktseite
          umzuleiten, integrieren wir dynamische Anfragemodals direkt im
          Sichtfeld. Ein Klick auf „Projekt anfragen“ öffnet ohne Ladezeit ein
          aufgeräumtes Dialogfenster. Der Nutzer verbleibt im gewohnten Kontext
          der Seite.
        </P>

        <H3>2. Reduzierung der Formular-Reibung (Friction Reduction)</H3>
        <P>
          Jedes zusätzliche Pflichtfeld in einem Formular senkt die
          Conversion-Rate um mehrere Prozentpunkte. Wir beschränken
          Erstkontakt-Abfragen auf das absolute Minimum (Paketauswahl, Name,
          E-Mail-Adresse und kurze Projektbeschreibung). Alle weiteren Details
          werden entspannt im persönlichen Erstgespräch geklärt.
        </P>

        <H3>3. Sichtbare Vertrauenssignale (Trust Elements)</H3>
        <P>
          Direkt im Umfeld der Handlungsauslöser platzieren wir subtile
          Vertrauensanker: Garantierte Reaktionszeiten (z.&nbsp;B.{' '}
          <em>„Antwort innerhalb von 12 Stunden“</em>), transparente
          Preis-Pakete und Hinweise auf DSGVO-Konformität nehmen letzte Zweifel
          vor dem Absenden.
        </P>
      </Section>

      <Section>
        <H2>Die Business-Ergebnisse: Höhere Anfragedichte bei identischem Budget</H2>
        <P>
          Die Optimierung der B2B-Conversion-UX zeigt direkte Auswirkungen auf
          die Rentabilität der gesamten digitalen Plattform:
        </P>
        <List>
          <Item>
            <Strong>Messbare Steigerung der Conversion-Rate:</Strong> Durch den
            Abbau technischer und organisatorischer Hürden verwandelt sich ein
            deutlich höherer Prozentsatz des bestehenden Traffics in Anfragen.
          </Item>
          <Item>
            <Strong>Höhere Lead-Qualität:</Strong> Klare Paket- und
            Positionsentscheidungen im Vorfeld filtern unpassende Anfragen
            automatisch heraus.
          </Item>
          <Item>
            <Strong>Zukunftssicherheit:</Strong> Eine barrierefreie, schnelle UX
            erfüllt alle rechtlichen Kriterien und baut einen dauerhaften
            Vertrauensvorsprung auf.
          </Item>
        </List>
      </Section>

      <Section>
        <H2>Strategische Key Takeaways: Barrierefreiheit als Conversion-Treiber</H2>
        <P>
          Die beste SEO-Strategie entfaltet ihre volle Wirkung erst durch
          exzellente Conversion-UX. Wer Barrierefreiheit, klare Lead-Pfade und
          kompromisslose Ladezeiten vereint, verwandelt seine Unternehmenswebsite
          in ein verlässliches System zur Kundengewinnung.
        </P>
      </Section>
    </div>
  )
}
