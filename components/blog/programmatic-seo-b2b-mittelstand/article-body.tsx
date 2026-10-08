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

function Em({ children }: { children: ReactNode }) {
  return <em className="italic text-foreground">{children}</em>
}

function Code({ children }: { children: ReactNode }) {
  return (
    <code className="rounded-md bg-primary/10 px-1.5 py-0.5 font-mono text-[0.9em] text-foreground">
      {children}
    </code>
  )
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

function Steps({ children }: { children: ReactNode }) {
  return (
    <ol className="mt-5 flex flex-col gap-3 rounded-2xl border border-border bg-card/60 p-6">
      {children}
    </ol>
  )
}

function Step({ index, children }: { index: number; children: ReactNode }) {
  return (
    <li className="flex gap-3 leading-relaxed text-muted-foreground">
      <span
        aria-hidden
        className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary"
      >
        {index}
      </span>
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
        <H2>
          Einleitung: Warum pauschale Angebot-Seiten im B2B-Marketing scheitern
        </H2>
        <P>
          B2B-Unternehmen und Spezialdienstleister stehen im Online-Marketing
          vor einer zentralen Herausforderung: Ihre Zielgruppen suchen selten
          nach pauschalen Begriffen. Ein Einkäufer aus der Pharmaindustrie sucht
          nicht nach <Em>&bdquo;Logistikunternehmen&ldquo;</Em>, sondern nach{' '}
          <Em>&bdquo;Kühltransport Pharma GMP-zertifiziert&ldquo;</Em>. Ein
          Spezialist aus dem Maschinenbau sucht nicht nach{' '}
          <Em>&bdquo;Software&ldquo;</Em>, sondern nach{' '}
          <Em>&bdquo;ERP-System für Einzelfertiger Maschinenbau&ldquo;</Em>.
        </P>
        <P>
          Wer diese spezifischen Long-Tail-Suchanfragen mit einer einzigen
          generischen Leistungsseite abdecken möchte, verliert in den
          Suchergebnissen gegen spezialisierte Wettbewerber.
        </P>
        <P>
          Die Lösung für dieses Problem heißt{' '}
          <Strong>Programmatic SEO (pSEO)</Strong>. Richtig aufgebaut,
          ermöglicht pSEO dem B2B-Mittelstand das automatisierte Erstellen von
          hunderten, hochspezifischen Zielseiten &ndash; ohne Qualitätsverluste,
          ohne Duplicate Content und mit maximaler Relevanz für jede einzelne
          Nische.
        </P>
      </Section>

      <Section>
        <H2>Die Anatomie einer erfolgreichen B2B-pSEO-Architektur</H2>
        <P>
          Programmatic SEO hat nichts mit minderwertigem Content-Spam zu tun. Im
          modernen B2B-Kontext basiert pSEO auf einer hocheffektiven
          Drei-Säulen-Architektur:
        </P>
        <List>
          <Item>
            <Strong>Die Datenbank-Matrix (Structured Data Foundation):</Strong>{' '}
            Eine saubere Datenbasis definiert alle Branchen, Anwendungsfälle,
            Regulierungen und spezifischen Schmerzpunkte der Zielgruppen.
          </Item>
          <Item>
            <Strong>Die dynamische Content-Engine (Semantische Varianz):</Strong>{' '}
            Über intelligente Variablen-Templates und mathematische
            WDF*IDF-Muster wird sichergestellt, dass jeder Text einzigartige
            Fachbegriffe, relevante Synonyme und spezifische Nutzenargumente
            enthält.
          </Item>
          <Item>
            <Strong>Die entkoppelte URL-Hierarchie:</Strong> Ein lückenloses
            Verzeichnis-System (z.&nbsp;B. <Code>/branchen/[branche]</Code> oder{' '}
            <Code>/leistungen/[anwendungsfall]</Code>) garantiert klare
            Strukturierung für User und Google-Bots.
          </Item>
        </List>
      </Section>

      <Section>
        <H2>Praxisbeispiel: Spezial-Transport &amp; Logistikunternehmen</H2>
        <P>
          Um die gewaltige Skalierbarkeit von pSEO zu verdeutlichen, betrachten
          wir ein reales Anwendungsszenario eines mittelständischen
          Logistikunternehmens:
        </P>
        <P>
          Das Logistikunternehmen verfügt über einen Fuhrpark für
          Spezialtransporte. Anstatt nur eine allgemeine Unterseite für
          &bdquo;Spezialtransporte&ldquo; zu betreiben, soll das Unternehmen für
          hunderte Branchen-Nischen gefunden werden.
        </P>

        <H3>Die Umsetzung mit der AsiaEdits pSEO-Matrix</H3>
        <P>
          Über unsere pSEO-Engine haben wir eine skalierbare Verzeichnisstruktur
          aufgebaut:
        </P>
        <Steps>
          <Step index={1}>
            <span>
              <Strong>Pharmaindustrie</Strong> (
              <Code>/branchen/pharma-kuehltransport</Code>): Der Fokus liegt auf
              temperierter Logistik, GDP-Konformität, lückenloser
              Temperaturüberwachung und Hygiene-Standards.
            </span>
          </Step>
          <Step index={2}>
            <span>
              <Strong>Chemie &amp; Gefahrgut</Strong> (
              <Code>/branchen/chemie-gefahrgut</Code>): Der Fokus verschiebt sich
              auf ADR-Zertifizierungen, geschulte Gefahrgut-Fahrer und spezielle
              Sicherheitsbehälter.
            </span>
          </Step>
          <Step index={3}>
            <span>
              <Strong>Maschinenbau &amp; Schwertransport</Strong> (
              <Code>/branchen/maschinenbau-schwertransport</Code>): Hier stehen
              Ladekapazitäten, Ausnahmegenehmigungen, Begleitfahrzeuge und
              Achslasten im Mittelpunkt.
            </span>
          </Step>
        </Steps>

        <H3>Das Ergebnis</H3>
        <P>
          Anstatt mit einer einzigen Seite im Mittelfeld zu ranken, belegt das
          Logistikunternehmen für über{' '}
          <Strong>120 spezifische Branchen-Kombinationen</Strong> Top-3-Plätze
          bei Google. Die Anfragerate stieg um das Dreifache, weil der Besucher
          sofort erkennt:{' '}
          <Em>
            &bdquo;Dieser Anbieter versteht die exakten Anforderungen meiner
            Branche.&ldquo;
          </Em>
        </P>
      </Section>

      <Section>
        <H2>Die Erfolgsfaktoren: Wie man Google-Penalties sicher vermeidet</H2>
        <P>
          Wer pSEO falsch umsetzt, riskiert Abstrafungen durch Googles Helpful
          Content Systeme. Um langfristige Top-Rankings zu garantieren, halten
          wir strikte Qualitätsstandards ein:
        </P>

        <H3>1. Keine hohlen Textbausteine</H3>
        <P>
          Jede pSEO-Seite muss echten Mehrwert bieten. Branchenspezifische
          Regulierungen, konkrete Praxis-Beispiele und maßgeschneiderte
          Checklisten unterscheiden unsere Seiten radikal von billigen
          Template-Texten.
        </P>

        <H3>2. Lückenlose interne Verlinkung (Interlinking Matrix)</H3>
        <P>
          Die pSEO-Seiten stehen nicht isoliert im Raum. Über logische
          Querverweise verlinken sie auf passende Case Studies,
          Haupt-Leistungsseiten und das zentrale Anfragemodal.
        </P>

        <H3>3. Kompromisslose Ladezeiten bei riesigen Seiten-Clustern</H3>
        <P>
          Egal ob Ihre Website aus 10 Seiten oder 1.000 pSEO-Hubs besteht: Durch
          unsere Next.js Edge-Architektur lädt jede einzelne Unterseite in unter
          1,0 Sekunde.
        </P>
      </Section>

      <Section>
        <H2>Strategische Key Takeaways: Nischen-Dominanz auf Knopfdruck</H2>
        <P>
          Programmatic SEO ist die mächtigste Strategie für den B2B-Mittelstand,
          um ohne unbezahlbaren Aufwand die komplette Bandbreite der eigenen
          Zielgruppen-Nischen im Suchmarkt zu besetzen.
        </P>
      </Section>
    </div>
  )
}
