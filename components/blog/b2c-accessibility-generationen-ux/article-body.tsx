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
          Die unterschätzte Kaufkraft: Warum barrierefreies Design alle
          Generationen gewinnt
        </H2>
        <P>
          In der Diskussion über modernes Webdesign stehen häufig visuelle
          Effekte und komplexe Animationen im Vordergrund. Dabei wird eine der
          kaufkräftigsten Zielgruppen im B2C-Bereich regelmäßig vernachlässigt:
          ältere Menschen, Familien und Personen, die digitale Angebote mit
          kleinen Einschränkungen im Alltag nutzen. Sei es eine nachlassende
          Sehkraft, leichte motorische Unsicherheiten bei der
          Smartphone-Bedienung oder schlichtweg die Hektik des Alltags.
        </P>
        <P>
          Barrierefreiheit im B2C-Segment ist kein trockenes Regelwerk, sondern
          der Schlüssel zu einer herausragenden Nutzererfahrung. Eine Website,
          die klar strukturiert ist, ausreichend große Schriftgrößen bietet und
          sich ohne Verwirrung bedienen lässt, fühlt sich für jeden Besucher
          angenehm an.
        </P>
        <P>
          Wer Hürden abbaut, gewinnt nicht nur das Vertrauen von Senioren und
          Familien, sondern erzielt auch bei jüngeren Zielgruppen deutlich
          höhere Conversion-Raten.
        </P>
      </Section>

      <Section>
        <H2>Die Säulen einer generationenübergreifenden B2C-Experience</H2>
        <P>
          Ein barrierefreier B2C-Webauftritt verbindet Barrierefreiheit mit
          einem modernen, ästhetischen Erscheinungsbild.
        </P>
        <List>
          <Item>
            <Strong>Skalierbarkeit und starke Kontraste:</Strong> Texte müssen
            selbst bei hellem Sonnenlicht auf dem Smartphone mühelos lesbar
            sein. Eine saubere Typografie mit flexiblen Schriftgrößen bildet das
            Fundament.
          </Item>
          <Item>
            <Strong>Großzügige Touch-Zonen:</Strong> Kleine, dicht beieinander
            liegende Links führen auf dem Touchscreen schnell zu Fehleingaben
            und Frustration. Große, klar abgegrenzte Schaltflächen geben
            Sicherheit bei jeder Interaktion.
          </Item>
          <Item>
            <Strong>Integrierte Audio-UX und Sprachausgabe:</Strong> Viele
            Menschen bevorzugen es, sich längere Ratgeber oder Informationen
            vorlesen zu lassen. Ein integrierter Vorlese-Player macht Inhalte
            sofort zugänglich &ndash; ganz ohne zusätzliche Software.
          </Item>
        </List>
      </Section>

      <Section>
        <H2>Praxisbeispiel: Reiseportale für Familien &amp; Seniorenreisen</H2>
        <P>
          Wie stark die barrierefreie Gestaltung die Buchungsergebnisse
          beeinflusst, lässt sich am Beispiel eines spezialisierten
          Reiseanbieters für betreute Seniorenreisen und Drei-Generationen-Urlaube
          verdeutlichen.
        </P>

        <H3>Die Ausgangslage</H3>
        <P>
          Der Reiseanbieter bot hervorragend organisierte Reisen für Senioren
          und Drei-Generationen-Familien an. Die Website war jedoch technisch
          veraltet: Kleine Schriften, kontrastarme Grautöne auf weißem Grund und
          komplizierte Buchungsformulare führten dazu, dass viele ältere
          Interessenten den Buchungsvorgang abbrachen. Die Kinder oder Enkel
          mussten häufig einspringen, um die Buchung telefonisch abzuwickeln.
          Die Online-Conversion-Rate lag bei unter 0,8&nbsp;%.
        </P>

        <H3>Die Umsetzung durch AsiaEdits</H3>
        <P>
          AsiaEdits gestaltete das gesamte Buchungsportal nach den Richtlinien
          der WCAG 2.1 AAA neu:
        </P>
        <Steps>
          <Step index={1}>
            <span>
              <Strong>Barrierefreie Typografie &amp; Audio-Player:</Strong>{' '}
              Sämtliche Reisebeschreibungen wurden in gut lesbarer,
              kontrastreicher Schrift aufbereitet und mit einem nativen
              Vorlese-Player ausgestattet.
            </span>
          </Step>
          <Step index={2}>
            <span>
              <Strong>Einfache Formularführung:</Strong> Das Anfrageformular
              wurde auf die wesentlichen Felder reduziert, mit deutlichen
              Beschriftungen versehen und für Tastatur- sowie Touch-Eingaben
              optimiert.
            </span>
          </Step>
          <Step index={3}>
            <span>
              <Strong>Klar strukturiertes Layout:</Strong> Verwirrende Overlays
              und störende Pop-ups wurden vollständig entfernt.
            </span>
          </Step>
        </Steps>

        <H3>Das Ergebnis</H3>
        <P>
          Die Online-Anfragen stiegen um <Strong>+70&nbsp;%</Strong>. Ältere
          Kunden äußerten in Rückmeldungen begeistert, wie einfach und angenehm
          die Reiseauswahl auf dem Tablet und Smartphone funktionierte. Auch die
          Verweildauer auf den Reiseseiten nahm spürbar zu.
        </P>
      </Section>

      <Section>
        <H2>Qualitätskriterien für barrierefreie B2C-Websites</H2>
        <P>
          Um sicherzustellen, dass eine B2C-Plattform für alle Generationen
          optimal funktioniert, müssen Entwickler auf folgende Details achten:
        </P>

        <H3>1. Keine reinen Farb-Signale</H3>
        <P>
          Wichtige Hinweise oder Fehlermeldungen dürfen nicht ausschließlich
          durch Farben (z.&nbsp;B. rot/grün) vermittelt werden, da Menschen mit
          Farbfehlsichtigkeiten diese sonst übersehen. Symbole und deutliche
          Texthinweise schaffen Klarheit.
        </P>

        <H3>2. Screenreader-Tauglichkeit</H3>
        <P>
          Sämtliche Bilder, Buttons und interaktive Elemente müssen über
          aussagekräftige Alt-Texte und ARIA-Attribute verfügen, damit
          Sprachassistenten die Inhalte korrekt wiedergeben können.
        </P>

        <H3>3. Konsistente und vorhersehbare Navigation</H3>
        <P>
          Verhält sich die Navigation auf jeder Unterseite exakt gleich, finden
          sich Nutzer sofort zurecht. Überraschende Layout-Sprünge werden
          konsequent vermieden.
        </P>
      </Section>

      <Section>
        <H2>
          Strategische Key Takeaways: Zugänglichkeit als stärkster
          Vertrauensbeweis
        </H2>
        <P>
          Barrierefreies B2C-Design öffnet Türen für alle Menschen. Wer seine
          digitalen Angebote einfach, verständlich und zugänglich gestaltet,
          baut eine treue Kundschaft auf und sichert sich einen nachhaltigen
          Wettbewerbsvorteil.
        </P>
      </Section>
    </div>
  )
}
