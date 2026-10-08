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
        <H2>Einleitung: Die neue Ära der automatisierten B2B-Beschaffung</H2>
        <P>
          Die Art und Weise, wie B2B-Kaufentscheidungen getroffen werden,
          durchläuft im Jahr 2026 einen historischen Wandel. Wo früher
          menschliche Einkäufer Tage damit verbrachten, Produktdatenblätter zu
          vergleichen, Spezifikationen zu prüfen und Angebote per Mail
          anzufordern, übernehmen heute zunehmend autonome KI-Agenten (Agentic
          AI) und Large Language Models (LLMs) diesen Prozess.
        </P>
        <P>
          Systeme wie ChatGPT, Perplexity oder Google AI Overviews agieren nicht
          mehr nur als reine Antwort-Generatoren. Sie durchsuchen das Web im
          Auftrag von Unternehmen, filtern Anbieter heraus, bewerten technische
          Kompatibilitäten und bereiten finale Kaufentscheidungen vor.
        </P>
        <P>
          Für B2B-Unternehmen bedeutet das: Wer im digitalen Raum nur für das
          menschliche Auge optimiert, wird für die wichtigsten digitalen
          Einkäufer der Zukunft unsichtbar. Es reicht nicht mehr aus, dass eine
          Website schön aussieht &ndash; sie muss <Strong>LLM-ready</Strong> und
          voll kompatibel mit <Strong>Agentic Browsing</Strong> sein.
        </P>
      </Section>

      <Section>
        <H2>
          Die Architektur von Agentic Browsing: Wie KI-Agenten Websites lesen
        </H2>
        <P>
          KI-Agenten konsumieren Webinhalte völlig anders als klassische
          menschliche Besucher. Während Menschen von visuellen Reizen, Farben
          und Marketing-Slogans angesprochen werden, suchen KI-Bot-Agenten nach
          strukturierter Semantik, Eindeutigkeit und schneller Verarbeitbarkeit.
        </P>
        <List>
          <Item>
            <Strong>
              Strukturierte JSON-LD Daten statt unstrukturierter Werbetexte:
            </Strong>{' '}
            KI-Agenten parsen primär strukturierte Daten im Schema.org-Format.
            Fehlen eindeutige Deklarationen für Produkte, Dienstleistungen,
            Spezifikationen oder Ansprechpartner, muss das LLM Mutmaßungen
            anstellen &ndash; und sortiert den Anbieter im Zweifel aus.
          </Item>
          <Item>
            <Strong>Semantic HTML5 &amp; Accessibility Trees:</Strong> Agenten
            nutzen Barrierefreiheits-Schnittstellen (Accessibility Trees) und
            semantische HTML-Tags (<Code>{'<article>'}</Code>,{' '}
            <Code>{'<section>'}</Code>, <Code>{'<aside>'}</Code>), um den
            Kontext eines Dokuments ohne visuellen Overhead zu verstehen.
          </Item>
          <Item>
            <Strong>Raw Speed &amp; API-nahe Inhaltsbereitstellung:</Strong>{' '}
            Träge Webseiten mit massiven JavaScript-Sperren oder langsamen
            Serverantworten führen bei KI-Agenten zu Timeouts. Eine
            hochperformante Edge-Architektur sorgt dafür, dass Daten in
            Bruchteilen einer Sekunde maschinenlesbar bereitstehen.
          </Item>
        </List>
      </Section>

      <Section>
        <H2>
          Praxisbeispiel: B2B-Industriebedarf &amp; Spezial-Komponentenhersteller
        </H2>
        <P>
          Um die Relevanz von LLM-Readiness zu verdeutlichen, betrachten wir ein
          konkretes Szenario aus der Praxis eines Herstellers von
          Industrie-Spezialbauteilen:
        </P>
        <P>
          Ein B2B-Einkäufer eines Maschinenbaukonzerns weist seinen autonomen
          Beschaffungsagenten an:
        </P>
        <blockquote className="mt-5 rounded-2xl border border-primary/40 bg-primary/5 p-6 leading-relaxed text-pretty text-foreground italic">
          „Finde drei zertifizierte europäische Lieferanten für Edelstahlschrauben
          mit ISO 3506-1 Standard, einer Zugfestigkeit von mindestens 800 MPa
          und direkter Schnittstelle für Mengenrabatte ab 10.000 Stück.“
        </blockquote>

        <H3>Der Fall ohne LLM-Readiness (Klassische Baukasten-Website)</H3>
        <P>
          Der Agent besucht die Website eines traditionellen Anbieters. Die
          Produktdaten liegen in unstrukturierten PDF-Downloads oder flachen
          HTML-Tabellen ohne Schema.org-Markup. Der KI-Agent kann die
          ISO-Zertifizierung und die Mengenstaffel nicht mit 100-prozentiger
          mathematischer Sicherheit verifizieren. Das Risiko einer
          Fehlinformation ist dem System zu hoch &ndash; der Anbieter wird
          verworfen.
        </P>

        <H3>Der Fall mit AsiaEdits LLM-Readiness</H3>
        <P>
          Der Agent steuert die Plattform eines von AsiaEdits optimierten
          Komponentenherstellers an. Die Seite liefert im Quelltext sofort ein
          lückenloses <Code>Product</Code> und <Code>DefinedTerm</Code> JSON-LD
          Markup. Die technischen Parameter (ISO-Norm, Zugfestigkeit,
          Toleranzklassen) sind eindeutig attributiert. Der KI-Agent erkennt
          innerhalb von 120 Millisekunden die vollkommene Übereinstimmung,
          übernimmt den Anbieter in die engere Auswahl und initiiert die
          automatisierte Anfrage.
        </P>
      </Section>

      <Section>
        <H2>
          Die Strategie für B2B-Marktführer: So wird deine Website LLM-ready
        </H2>
        <P>
          Damit dein Unternehmen in den Antworten und Entscheidungen generativer
          KI-Systeme die Spitzenposition einnimmt, setzen wir auf eine
          dreistufige Implementierungsstrategie:
        </P>

        <H3>1. Entitäts-Schärfung über Schema.org</H3>
        <P>
          Wir überziehen deine gesamte Plattform mit einer maßgeschneiderten
          Struktur aus verknüpften JSON-LD Entitäten (<Code>Organization</Code>,{' '}
          <Code>Service</Code>, <Code>Product</Code>, <Code>OfferCatalog</Code>,{' '}
          <Code>TechArticle</Code>). Dadurch wird dein Angebot im Wissensgraphen
          (Knowledge Graph) der großen KI-Modelle fest verankert.
        </P>

        <H3>2. WDF*IDF-Texte mit informativer Informationsdichte</H3>
        <P>
          Generative Sprachmodelle bevorzugen Inhalte mit hoher
          Informationsdichte und präzisen Fachbegriffen. Wir strukturieren deine
          Inhalte so, dass Kernfragen direkt, präzise und barrierefrei
          beantwortet werden &ndash; ideal als direkte Zitationsquelle für AI
          Overviews.
        </P>

        <H3>3. Decoupled Edge Architecture für Barrierefreie Bot-Performance</H3>
        <P>
          Unsere entkoppelten Next.js-Architekturen eliminieren unnötigen
          Ballast. KI-Agenten erhalten blitzschnellen Zugriff auf die
          essenziellen Datenstrukturen, ohne von schwerem Rendering gebremst zu
          werden.
        </P>
      </Section>

      <Section>
        <H2>
          Strategische Key Takeaways: KI-Kompatibilität sichert den B2B-Vertrieb
        </H2>
        <P>
          Die Digitalisierung des B2B-Einkaufs wartet nicht. Wer seine
          Webpräsenz heute nicht nur für Menschen, sondern auch für autonome
          KI-Agenten optimiert, sichert sich den entscheidenden
          Wettbewerbsvorteil in den Beschaffungsmärkten von morgen.
        </P>
      </Section>
    </div>
  )
}
