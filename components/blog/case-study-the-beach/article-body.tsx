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
          Einleitung: Warum echte Barrierefreiheit im Premium-Segment
          entscheidet
        </H2>
        <P>
          Im digitalen Marketing wird Barrierefreiheit (Accessibility) häufig
          als reine Compliance-Pflicht abgetan. Dass barrierefreie User
          Experience (UX) jedoch einer der stärksten Treiber für Vertrauen,
          Verweildauer und messbare Kundenanfragen ist, zeigt das Projekt der{' '}
          <Strong>The Beach Altersresidenz Thailand</Strong>.
        </P>
        <P>
          Bei einem hochpreisigen Nischenangebot wie einer betreuten
          Altersresidenz im Ausland richtet sich die Website an zwei
          hochsensible Zielgruppen: Seniorinnen und Senioren sowie deren
          Angehörige. Wer hier auf komplizierte Layouts, kleine Schriftgrößen
          oder lange, anstrengende Textblöcke setzt, verliert potenzielle
          Interessenten bereits in den ersten Sekunden.
        </P>
        <P>
          Mit dem Re-Design der Plattform wählten wir einen radikal
          nutzerzentrierten Ansatz: Neben einer exzellenten Ladezeit führten wir
          einen integrierten Audio-Ratgeber ein. Das Ergebnis: Eine
          herausragende organische Click-Through-Rate von{' '}
          <Strong>7,0&nbsp;%</Strong> in den Suchergebnissen und eine
          nachhaltige Steigerung der Lead-Conversion-Rate um über{' '}
          <Strong>+10&nbsp;%</Strong>.
        </P>
      </Section>

      <Section>
        <H2>
          Die Herausforderung: Komplexer Content trifft auf anspruchsvolle Seh-
          und Hörgewohnheiten
        </H2>
        <P>
          Vor der Neugestaltung stand die The Beach Altersresidenz Thailand vor
          zentralen Hürden, die bei hochpreisigen Beratungsprodukten
          regelmäßig auftreten:
        </P>
        <List>
          <Item>
            <Strong>Informationsverlust durch Seh-Ermüdung:</Strong> Längere
            Ratgeber-Beiträge zu rechtlichen, medizinischen und
            organisatorischen Aspekten des Auswanderns wurden auf mobilen
            Geräten häufig abgebrochen.
          </Item>
          <Item>
            <Strong>Mangelnde Barrierefreiheit:</Strong> Klassische Webseiten
            berücksichtigen selten die veränderten Wahrnehmungsbedürfnisse
            älterer Zielgruppen (Kontraste, Lesbarkeit, intuitive Bedienung).
          </Item>
          <Item>
            <Strong>Hohe Absprungraten bei Informations-Suchanfragen:</Strong>{' '}
            Besucher suchten zwar nach Antworten, traten aber aufgrund
            fehlender emotionaler Vertrauenssignale nicht mit dem Team in
            Kontakt.
          </Item>
        </List>
      </Section>

      <Section>
        <H2>Die Strategie: Der dreifache Accessibility- &amp; Performance-Ansatz</H2>
        <P>
          Um das Projekt digital optimal aufzustellen, entwickelte AsiaEdits ein
          maßgeschneidertes Gesamtkonzept:
        </P>

        <H3>1. Integration eines nativen Audio-Ratgebers für maximale Barrierefreiheit</H3>
        <P>
          Wir haben das Magazin und die zentralen Landingpages der The Beach
          Altersresidenz Thailand um eine integrierte Audio-Vorlesefunktion
          ergänzt. Besucher können sich jeden Ratgeber-Artikel per Knopfdruck in
          bester Audioqualität vorlesen lassen. Das senkt die Einstiegshürde
          drastisch, erhöht die Verweildauer auf der Seite und ermöglicht es
          Interessenten, Inhalte bequem nebenbei zu konsumieren. Die
          unmittelbare Barrierefreiheit erzeugte sofortiges Vertrauen.
        </P>

        <H3>2. Entkoppelte High-Speed Web-Architektur</H3>
        <P>
          Gerade im Ausland mit schwankenden mobilen Datennetzen ist Ladezeit
          der kritischste Erfolgsfaktor. Durch den Einsatz einer modernen,
          entkoppelten Frontend-Architektur ohne schwere Datenbankabfragen lädt
          die Plattform in Bruchteilen einer Sekunde. Die Seiteninhalte stehen
          sofort zur Verfügung, was Verweildauer und Google-Sichtbarkeit massiv
          steigert.
        </P>

        <H3>3. Vertrauensbasierte Lead-Pfade (Conversion-UX)</H3>
        <P>
          Wir haben die Kontakt- und Beratungspfade komplett neu strukturiert.
          Anstatt anstrengender Formulare bieten wir klare, barrierefreie
          Anfragewege, die Schritt für Schritt durch die wichtigsten Fragen
          leiten. In Kombination mit echten Testimonials und transparenten
          Informationen stieg die Bereitschaft zur Kontaktaufnahme spürbar an.
        </P>
      </Section>

      <Section>
        <H2>
          Die Ergebnisse: Über +10&nbsp;% Lead-Conversion-Rate im Nischenmarkt
        </H2>
        <P>
          Die Umstellung auf kompromisslose Barrierefreiheit und Schnelligkeit
          spiegelt sich klar in den Leistungskennzahlen wider:
        </P>
        <List>
          <Item>
            <Strong>+10&nbsp;% Lead Conversion-Rate:</Strong> Aus organischen
            Besuchern werden überdurchschnittlich viele qualifizierte Anfragen
            generiert.
          </Item>
          <Item>
            <Strong>7,0&nbsp;% CTR in der Suchmaschine:</Strong> Das Snippet
            hebt sich in den Suchergebnissen durch klare Strukturierung ab und
            zieht kaufbereite Interessenten an.
          </Item>
          <Item>
            <Strong>Signifikante Steigerung der Verweildauer:</Strong> Durch die
            Audio-Funktion verbleiben Besucher nachweislich länger auf den
            Informationsseiten, was positive Nutzersignale an Suchmaschinen
            sendet.
          </Item>
        </List>
      </Section>

      <Section>
        <H2>Erkenntnisse &amp; Potenziale für Unternehmen</H2>
        <P>
          Der Case der The Beach Altersresidenz Thailand beweist eindrucksvoll:
          Wer Barrierefreiheit nicht als lästige Pflicht versteht, sondern als
          Chance zur Optimierung der User Experience nutzt, sichert sich
          uneinholbare Wettbewerbsvorteile. Ob Audio-Features, kontraststarke
          Bedienelemente oder kompromisslose Ladezeiten &ndash; Barrierefreiheit
          zahlt direkt auf die B2B-Conversion-Rate ein.
        </P>
      </Section>
    </div>
  )
}
