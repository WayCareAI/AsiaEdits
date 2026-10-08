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
          Das Ende der Dark Patterns: Verbraucher fordern ehrliche Interfaces
        </H2>
        <P>
          In den vergangenen Jahren wurden Endverbraucher im Internet
          regelmäßig mit irreführenden Design-Tricks konfrontiert &ndash;
          sogenannten &bdquo;Dark Patterns&ldquo;. Aggressive
          Vollbild-Banner, versteckte Abmeldebuttons oder künstlich erzeugter
          Zeitdruck sollten Nutzer zu unüberlegten Aktionen verleiten. Das
          Resultat ist eine tiefgreifende Skepsis der Kunden gegenüber
          unübersichtlichen Angeboten.
        </P>
        <P>
          Im modernen B2C-Umfeld kehrt sich dieser Trend drastisch um.
          Transparenz, klare Informationen und der sichtbare Respekt vor den
          Daten der Nutzer haben sich von einer Rechtspflicht zu einem
          entscheidenden Markenvorteil entwickelt.
        </P>
        <P>
          Wer seinen Besuchern vom ersten Moment an eine aufgeräumte, ehrliche
          und faire Umgebung bietet, hebt sich wohltuend von der Masse ab und
          baut echte Markenloyalität auf.
        </P>
      </Section>

      <Section>
        <H2>Die Bausteine einer verbraucherfreundlichen Trust-UX</H2>
        <P>
          Eine Vertrauen schaffende Benutzeroberfläche zeichnet sich dadurch
          aus, dass sie dem Nutzer stets die volle Kontrolle über seine
          Entscheidung überlässt.
        </P>
        <List>
          <Item>
            <Strong>Elegantes Consent-Management statt Banner-Schock:</Strong>{' '}
            Dezent gestaltete Datenschutz-Hinweise, die wichtige Inhalte nicht
            verdecken und einfache An- und Abwahlmöglichkeiten bieten.
          </Item>
          <Item>
            <Strong>Glasklare Preis- und Leistungskommunikation:</Strong> Keine
            versteckten Zusatzkosten im letzten Buchungsschritt. Alle
            relevanten Faktoren sind auf einen Blick ersichtlich.
          </Item>
          <Item>
            <Strong>Sichtbare Sicherheits- und Qualitätssignale:</Strong>{' '}
            Einbindungen von echten Kundenbewertungen, Prüfsiegeln und klaren
            Ansprechpartnern direkt in den Interaktions-Flows.
          </Item>
        </List>
      </Section>

      <Section>
        <H2>
          Praxisbeispiel: Online-Finanzberatung &amp; Private
          Vorsorge-Dienstleister
        </H2>
        <P>
          Wie vertrauensbildendes Interface-Design die Abschlussquoten bei
          beratungsintensiven B2C-Angeboten steigert, zeigt das Beispiel eines
          Anbieters für private Vorsorgeanalysen.
        </P>

        <H3>Die Ausgangslage</H3>
        <P>
          Der Dienstleister bot hervorragende Analysen für die private
          Altersvorsorge an. Allerdings war die Website überladen mit lauten
          Gütesiegeln, blinkenden Chat-Widgets und einem Cookie-Banner, das das
          Schließen der Seite erschwerte. Viele Interessenten fühlten sich
          unwohl, brachen die Eingabe ihrer persönlichen Daten ab und verließen
          die Seite. Die Conversion-Rate lag bei enttäuschenden
          1,2&nbsp;Prozent.
        </P>

        <H3>Die Umsetzung durch AsiaEdits</H3>
        <P>
          AsiaEdits gestaltete den gesamten Auftritt nach Prinzipien der
          ehrlichen Trust-UX neu:
        </P>
        <Steps>
          <Step index={1}>
            <span>
              <Strong>Ruhiges, transparentes Design:</Strong> Sämtliche
              störenden Pop-ups und unruhigen Animationen wurden entfernt.
            </span>
          </Step>
          <Step index={2}>
            <span>
              <Strong>Klares Datenversprechen:</Strong> Vor jeder Eingabe von
              Kontaktdaten wird in verständlicher Sprache erklärt, wofür die
              Angaben verwendet werden.
            </span>
          </Step>
          <Step index={3}>
            <span>
              <Strong>Schlanker Consent-Flow:</Strong> Ein dezent eingebundenes
              Datenschutz-Element lädt ohne Ladeverzögerung und beeinträchtigt
              das Surferlebnis nicht.
            </span>
          </Step>
        </Steps>

        <H3>Das Ergebnis</H3>
        <P>
          Die Anfragen für Erstgespräche stiegen um <Strong>+45&nbsp;%</Strong>.
          Besucher verbrachten im Schnitt 50&nbsp;Prozent mehr Zeit auf den
          Informationsseiten und gaben in Umfragen an, die Plattform als
          besonders seriös und verlässlich wahrzunehmen.
        </P>
      </Section>

      <Section>
        <H2>Qualitätskriterien für verbrauchernahes Webdesign</H2>
        <P>
          Um Vertrauen im Netz nachhaltig aufzubauen, sollten B2C-Unternehmen
          folgende Prinzipien verankern:
        </P>

        <H3>1. Barrierefreie Lesbarkeit aller Vertrags- und Hinweistexte</H3>
        <P>
          Kein Kleingedrucktes mehr in hellgrauer Schrift auf weißem Grund.
          Alle rechtlich relevanten Texte müssen gut lesbar und verständlich
          formuliert sein.
        </P>

        <H3>2. Einfache Stornierungs- und Kontaktwege</H3>
        <P>
          Ebenso einfach wie der Klick zur Buchung muss auch der Weg zu Fragen
          oder Absagen gestaltet sein. Das schafft maximale Sicherheit beim
          Kunden.
        </P>

        <H3>3. Blitzschnelle Ladezeiten als Qualitätssignal</H3>
        <P>
          Eine Website, die verzögerungsfrei lädt, vermittelt automatisch
          technische Professionalität und Sorgfalt.
        </P>
      </Section>

      <Section>
        <H2>Strategische Key Takeaways: Echte Transparenz gewinnt Märkte</H2>
        <P>
          Vertrauen lässt sich im B2C-Bereich nicht erzwingen, sondern nur
          durch kontinuierlich ehrliche Designentscheidungen verdienen. Wer
          transparent kommuniziert, sichert sich treue Kunden.
        </P>
      </Section>
    </div>
  )
}
