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
        <H2>
          Einleitung: Die Symbiose von Google-Algorithmen und menschlicher
          Barrierefreiheit
        </H2>
        <P>
          Über viele Jahre hinweg wurden Search Engine Optimization (SEO) und
          Barrierefreiheit (Digital Accessibility) als zwei getrennte
          Disziplinen behandelt. Während SEO-Spezialisten Keywords und
          technische Ladezeiten optimierten, kümmerten sich UX-Designer um
          visuelle Kontraste und Screenreader-Kompatibilität. Im Jahr 2026 ist
          diese Trennung längst überholt.
        </P>
        <P>
          Suchmaschinen haben gelernt, Webseiten mit den Augen echter Nutzer zu
          bewerten. Algorithmen analysieren längst nicht mehr nur geschriebenen
          Text, sondern bewerten die tatsächliche Nutzbarkeit einer Plattform.
        </P>
        <P>
          Wer Hürden für Menschen mit Sehschwächen, motorischen
          Einschränkungen oder Aufmerksamkeitsdefiziten abbaut, verbessert
          automatisch die zentralen Nutzersignale für Google &ndash; und
          sichert sich damit nachhaltige Top-Rankings.
        </P>
      </Section>

      <Section>
        <H2>Warum Google barrierefreie Webseiten bevorzugt</H2>
        <P>
          Die Parallelen zwischen den Anforderungen moderner
          Suchmaschinen-Bots und den Kriterien für barrierefreies Webdesign
          (gemäß WCAG-Standards) sind verblüffend eindeutig. Google belohnt
          Barrierefreiheit aus drei zentralen Gründen:
        </P>
        <List>
          <Item>
            <Strong>Exzellente Inhaltsstrukturierung:</Strong> Screenreader
            benötigen klare Überschriften-Hierarchien (H1, H2, H3) und
            semantisches HTML5-Markup. Exakt dieselbe Struktur hilft dem
            Google-Bot, den Kontext einer Seite fehlerfrei zu erfassen.
          </Item>
          <Item>
            <Strong>Bildbeschreibung und Kontextualisierung:</Strong>{' '}
            Barrierefreie ALT-Texte für Bilder ermöglichen Blinden das
            Verstehen von Grafiken. Für Suchmaschinen bieten präzise
            Alt-Attribute die primäre Grundlage für das Indexieren in der
            Bildersuche.
          </Item>
          <Item>
            <Strong>Überragende Nutzersignale (User Engagement):</Strong> Wenn
            eine Website barrierefrei gestaltet ist &ndash; durch klare
            Kontraste, lesbare Schriftgrößen und alternative Medien &ndash;,
            verweilen Besucher länger auf der Seite. Hohe Verweildauern und
            niedrige Absprungraten signalisieren der Suchmaschine höchste
            Relevanz.
          </Item>
        </List>
      </Section>

      <Section>
        <H2>
          Audio-Features und Kontraste: Die neuen Erfolgsfaktoren im
          Conversion-Engineering
        </H2>
        <P>
          Barrierefreiheit geht weit über das Einhalten gesetzlicher
          Mindeststandards hinaus. Sie ist einer der stärksten Conversion-Hebel
          im modernen B2B- und B2C-Marketing.
        </P>

        <H3>1. Integration von Audio-Ratgebern und Vorlesefunktionen</H3>
        <P>
          Immer mehr Nutzer bevorzugen das Konsumieren von Inhalten über das
          Gehör &ndash; sei es unterwegs im Auto, beim Multitasking oder
          aufgrund nachlassender Sehkraft im Alter. Indem Magazin-Beiträge und
          Ratgeber mit einem nennenswerten Audio-Player ausgestattet werden,
          vervielfacht sich die Interaktionsrate. Die Nutzer verbleiben
          nachweislich mehrere Minuten länger auf der Domain.
        </P>

        <H3>2. Kontraststarkes UX-Design ohne visuelle Barrieren</H3>
        <P>
          Subtile, grau-auf-grau gestaltete Schriften mögen in Design-Agenturen
          beliebt sein, scheitern jedoch in der Praxis an mobilen Displays
          unter Sonnenlicht und bei älteren Zielgruppen. Kontrastreiche
          Text-Hintergrund-Kombinationen und klare Schriftgrößen stellen
          sicher, dass die Botschaft sofort wahrgenommen wird.
        </P>

        <H3>3. Tastatur-Navigierbarkeit und klare Fokus-Zustände</H3>
        <P>
          Entscheider und Vielnutzer navigieren häufig ohne Maus. Eine
          nahtlose Bedienbarkeit per Tastatur und sichtbare Fokus-Rahmen bei
          Formularfeldern und Buttons verhindern Frustration und
          Kaufabbrüche.
        </P>
      </Section>

      <Section>
        <H2>
          Die technische Umsetzung: Accessibility ohne Geschwindigkeitsverlust
        </H2>
        <P>
          Ein häufiges Vorurteil lautet, dass barrierefreie Features die
          Ladezeit einer Website ausbremsen. Das Gegenteil ist der Fall, wenn
          die zugrundeliegende Architektur stimmt:
        </P>
        <List>
          <Item>
            <Strong>Entkoppeltes Rendering:</Strong> Durch die Trennung von
            Design und Inhaltsdaten laden barrierefreie Elemente ohne
            Verzögerung.
          </Item>
          <Item>
            <Strong>Schlanker Code ohne Script-Ballast:</Strong> Barrierefreie
            HTML-Strukturen verzichten auf unnötige JavaScript-Bibliotheken,
            was die Reaktionszeit der Seite minimiert.
          </Item>
          <Item>
            <Strong>Garantierte Core Web Vitals:</Strong> Mit einem
            garantierten Mobile PageSpeed von <Strong>90+</Strong> wird
            sichergestellt, dass Barrierefreiheit und maximale
            Ladegeschwindigkeit Hand in Hand gehen.
          </Item>
        </List>
      </Section>

      <Section>
        <H2>
          Strategische Key Takeaways: Barrierefreiheit als Wettbewerbsvorteil
          verankern
        </H2>
        <P>
          Barrierefreiheit ist kein lästiges Regelwerk, sondern der effektivste
          Weg zu besseren Google-Rankings und höheren Conversion-Raten. Wer
          heute in barrierefreie User Experience investiert, schützt seine
          Plattform vor rechtlichen Risiken, erweitert seine Zielgruppe und
          setzt sich uneinholbar von der Konkurrenz ab.
        </P>
      </Section>
    </div>
  )
}
