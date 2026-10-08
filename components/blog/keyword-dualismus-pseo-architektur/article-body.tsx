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

function Code({ children }: { children: ReactNode }) {
  return (
    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
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
          Einleitung: Warum geringe Nuancen im B2B-Suchverhalten über Tausende
          Klicks entscheiden
        </H2>
        <P>
          Wer im Programmatic SEO (pSEO) automatisierte Landingpage-Cluster für
          Branchen und Regionen aufbaut, stößt in der Keyword-Recherche schnell
          auf ein faszinierendes Phänomen: Potenzielle Kunden suchen nach
          derselben Dienstleistung mit zwei völlig unterschiedlichen
          Suchbegriffen.
        </P>
        <P>
          Auf der einen Seite stehen Anfragen wie{' '}
          <em>„Webdesign für Steuerberater“</em> oder{' '}
          <em>„Webdesign Agentur Handwerk“</em>. Auf der anderen Seite
          existieren tausende monatliche Suchanfragen wie{' '}
          <em>„Website für Steuerberater“</em> oder{' '}
          <em>„Neue Homepage für Handwerker“</em>.
        </P>
        <P>
          Auf den ersten Blick wirken diese Begriffe synonym. Aus der
          Perspektive von Google und der Conversion-Psychologie offenbart sich
          hier jedoch ein gewaltiger <Strong>Keyword-Dualismus</Strong>. Wer
          beide Begriffe stur auf dieselbe Landingpage leitet, verliert
          messbare Relevanz und Conversion-Potenzial.
        </P>
      </Section>

      <Section>
        <H2>Die Analyse: Der Unterschied zwischen „Dienstleistung“ und „Ergebnis“</H2>
        <P>
          Um zu verstehen, warum getrennte Zielseiten-Cluster erforderlich
          sind, muss man die psychologische Suchintention (Search Intent) der
          Nutzer analysieren:
        </P>
        <List>
          <Item>
            <Strong>Der „Webdesign“-Suchende (Dienstleistungs-Fokus):</Strong>{' '}
            Dieser Nutzer sucht primär nach einer kreativen Agentur, einem
            Experten oder einem Entwickler. Er interessiert sich für den
            Prozess, das Design, die Technologie und die professionelle
            Umsetzung. Der Fokus liegt auf der <Strong>Dienstleistung</Strong>.
          </Item>
          <Item>
            <Strong>Der „Website“-Suchende (Ergebnis-Fokus):</Strong> Dieser
            Nutzer hat ein konkretes Problem &ndash; er benötigt ein
            funktionales Werkzeug zur Neukundengewinnung. Er sucht nach einer
            Lösung, Preisen, Beispielen und dem Endergebnis. Der Fokus liegt auf
            dem <Strong>fertigen Produkt</Strong>.
          </Item>
        </List>
        <P>
          Wer diese beiden Nutzergruppen mit identischen Texten anspricht,
          trifft selten die exakte Erwartungshaltung des Suchenden.
        </P>
      </Section>

      <Section>
        <H2>
          Die pSEO-Architektur: Wie AsiaEdits den Keyword-Dualismus auflöst
        </H2>
        <P>
          Anstatt Kompromisse einzugehen, nutzen wir die Skalierbarkeit von
          Programmatic SEO, um zwei perfekt aufeinander abgestimmte
          Inhaltsstränge aufzubauen:
        </P>

        <H3>1. Parallele Inhalts-Matrizen ohne Duplicate Content</H3>
        <P>
          Über unsere Content-Engine generieren wir zwei saubere
          Verzeichnisstrukturen. Der Pfad <Code>/webdesign/[branche]</Code>{' '}
          bedient die Agentur- und Prozess-Suchanfragen mit Schwerpunkten auf
          UI/UX, Technologie und Design-Prozessen. Der Pfad{' '}
          <Code>/website/[branche]</Code> fokussiert sich auf das Endergebnis,
          Anwendungsfälle, Lead-Generierung und fertige Funktionspakete.
        </P>

        <H3>2. Semantische WDF*IDF-Differenzierung</H3>
        <P>
          Beide Stränge greifen auf unterschiedliche Begriffs-Cluster zu.
          Während die <em>„Webdesign“</em>-Seiten Fachbegriffe wie{' '}
          <em>„Informationsarchitektur“</em>, <em>„Screen-Design“</em> und{' '}
          <em>„Responsive Layout“</em> beinhalten, werden die{' '}
          <em>„Website“</em>-Seiten mit Begriffen wie{' '}
          <em>„Kundenanfragen“</em>, <em>„Branchen-Vorlagen“</em>,{' '}
          <em>„Sichtbarkeit“</em> und <em>„Funktionsumfang“</em> angereichert.
        </P>

        <H3>3. Logische Querverlinkung für maximale Domain-Autorität</H3>
        <P>
          Anstatt gegeneinander zu konkurrieren (Keyword-Kannibalisierung),
          stärken sich beide Pfade gegenseitig. Durch intelligente
          In-Text-Verlinkungen leiten wir Nutzer, die vom Design-Fokus zum
          Produkt-Fokus wechseln möchten, nahtlos weiter. Google erkennt
          dadurch eine umfassende Themenabdeckung.
        </P>
      </Section>

      <Section>
        <H2>Die Business-Auswirkung: Exponentielles Wachstum im Long-Tail</H2>
        <P>
          Die strategische Trennung des Keyword-Dualismus liefert messbare
          Wettbewerbsvorteile:
        </P>
        <List>
          <Item>
            <Strong>Doppelte Sichtbarkeit im Suchergebnis:</Strong> Anstatt nur
            mit einer Landingpage zu ranken, belegt das Unternehmen mit beiden
            Pfaden Top-Positionen im Long-Tail.
          </Item>
          <Item>
            <Strong>Höhere Conversion-Rates:</Strong> Der Besucher findet
            exakt die Sprache und die Argumente vor, die seiner ursprünglichen
            Suchintention entsprechen.
          </Item>
          <Item>
            <Strong>Maximale Skalierbarkeit:</Strong> Das System lässt sich
            nahtlos auf hunderte Branchen und Städte erweitern, ohne dass die
            Textqualität oder die Ladezeit leidet.
          </Item>
        </List>
      </Section>

      <Section>
        <H2>
          Strategische Key Takeaways: Präzise Suchintention schlägt
          Pauschal-Landingpages
        </H2>
        <P>
          Die Nuancen in der Wortwahl von B2B-Kunden sind keine Nebensache,
          sondern die Grundlage für erfolgreiches Skalieren im
          Online-Marketing. Wer den Keyword-Dualismus versteht und
          architektonisch sauber im pSEO umsetzt, gewinnt den Markt im
          Long-Tail.
        </P>
      </Section>
    </div>
  )
}
