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
          Die Psychologie des B2C-Verbrauchers: Keine Zeit für träge
          Formulartreppen
        </H2>
        <P>
          Wer am Smartphone nach einem Termin für eine ästhetische Behandlung,
          ein Personal Training oder die Traum-Location für das nächste
          Familienevent sucht, entscheidet in wenigen Sekunden. Endverbraucher
          sind durch moderne Apps an sofortiges Feedback gewöhnt. Stoßen sie auf
          eine Website, bei der das Buchungsformular nach fünf Sekunden immer
          noch weiße Flächen zeigt oder unübersichtliche Eingabefelder aufdrängt,
          wird der Tab schlicht geschlossen. Der Mitbewerber ist schließlich nur
          einen Daumenwisch entfernt.
        </P>
        <P>
          In der Praxis scheitern viele B2C-Anbieter nicht an der Qualität ihrer
          Dienstleistung, sondern an der Reibung im Buchungsprozess. Zu viele
          Pflichtfelder, fehlende Rückmeldungen in Echtzeit und schwer
          bedienbare Datums-Auswahlen lassen wertvolle Interessenten kurz vor
          dem Ziel abspringen.
        </P>
        <P>
          Wer im B2C-Segment nachhaltig wachsen möchte, muss den Pfad von der
          ersten Aufmerksamkeit bis zur Bestätigung so schlank und intuitiv wie
          möglich gestalten.
        </P>
      </Section>

      <Section>
        <H2>Die Anatomie einer reibungslosen B2C-Buchung</H2>
        <P>
          Eine hürdenfreie UX setzt an den kritischen Stellen an, an denen
          Endkunden typischerweise das Interesse verlieren. Moderne
          Frontend-Architekturen auf Basis von Next.js bieten hierbei völlig neue
          Möglichkeiten, Interaktionen ohne spürbare Verzögerung umzusetzen.
        </P>
        <List>
          <Item>
            <Strong>Progressive Offenlegung statt Formular-Schock:</Strong>{' '}
            Anstatt den Nutzer mit 15 Eingabefeldern gleichzeitig zu überfordern,
            führen schrittweise Abfragen (Multi-Step-Flows) spielerisch durch den
            Prozess. Erst wenn der Termin feststeht, werden die Kontaktdaten
            abgefragt.
          </Item>
          <Item>
            <Strong>Echtzeit-Validierung ohne Neuladen der Seite:</Strong> Fehlt
            eine Angabe oder ist die Telefonnummer unvollständig, gibt das
            Interface sofort dezenten Aufschluss &ndash; ohne dass die gesamte
            Seite neu geladen werden muss.
          </Item>
          <Item>
            <Strong>Intelligente Kalender-Modale:</Strong> Statt starrer
            Dropdown-Menüs sorgen flüssige, touch-optimierte Kalenderansichten
            dafür, dass Wunschtermine direkt auf dem Smartphone ausgewählt
            werden können.
          </Item>
        </List>
      </Section>

      <Section>
        <H2>Praxisbeispiel: Ästhetische Medizin &amp; Premium-Gesundheitszentren</H2>
        <P>
          Die feine Abstimmung zwischen Schnelligkeit, Eleganz und
          Barrierefreiheit lässt sich ideal an einer Fachpraxis für ästhetische
          Dermatologie und Laserbehandlungen demonstrieren.
        </P>

        <H3>Die Ausgangslage</H3>
        <P>
          Die Praxis schaltete erfolgreich regionale Werbeanzeigen auf
          Instagram. Tausende interessierte Endkunden landeten auf der
          Mobilseite. Doch das dort eingebundene Buchungs-Tool stammte aus einem
          veralteten Drittanbieter-Iframe: Die Ladezeit betrug knapp vier
          Sekunden, die Schrift war auf dem Smartphone kaum lesbar und der
          Kalender brach auf kleinen Displays ab. Trotz hoher Besucherzahlen
          blieben die Terminbuchungen weit hinter den Erwartungen zurück.
        </P>

        <H3>Die Umstellung durch AsiaEdits</H3>
        <P>
          AsiaEdits entkoppelte die Buchungs-UX vollständig von der trägen
          Altsoftware. Ein maßgeschneidertes, ultraschnelles Modul auf
          Next.js-Basis wurde direkt in die Website integriert:
        </P>
        <Steps>
          <Step index={1}>
            <span>
              <Strong>Instant-Loading via Edge Network:</Strong> Das
              Buchungs-Modal öffnet sich ohne Ladeverzögerung in unter 100
              Millisekunden.
            </span>
          </Step>
          <Step index={2}>
            <span>
              <Strong>Drei-Schritte-Auswahl:</Strong> Behandlungswunsch wählen,
              passenden Arzt aussuchen, Wunschtermin antippen &ndash; fertig.
            </span>
          </Step>
          <Step index={3}>
            <span>
              <Strong>Automatische Kalender-Integration:</Strong> Der gewählte
              Termin wird dem Patienten auf Wunsch mit einem Klick in Apple
              Wallet oder Google Calendar übertragen.
            </span>
          </Step>
        </Steps>

        <H3>Das Ergebnis</H3>
        <P>
          Die Conversion-Rate der mobilen Besucher verdoppelte sich innerhalb
          der ersten 30 Tage um <Strong>+115&nbsp;%</Strong>. Die Absprungrate
          während des Buchungsvorgangs sank auf ein absolutes Minimum.
        </P>
      </Section>

      <Section>
        <H2>Technische Grundlagen für maximale Buchungs-Conversions</H2>
        <P>
          Damit Buchungs-Systeme im B2C-Umfeld verlässlich performen, müssen
          Code und Design nahtlos zusammengreifen:
        </P>

        <H3>1. Serverseitiges Rendering und Edge Caching</H3>
        <P>
          Durch die Kombination von Server-Side Rendering (SSR) und weltweitem
          Caching stehen alle visuellen Komponenten sofort bereit. Der Nutzer
          spürt keine Wartesekunde.
        </P>

        <H3>2. Barrierefreie Eingabefelder nach WCAG</H3>
        <P>
          Ausreichend große Touch-Flächen (mindestens 44&times;44 Pixel), klare
          Farbkontraste und Screenreader-Unterstützung stellen sicher, dass auch
          ältere Kundengruppen mühelos Termine vereinbaren können.
        </P>

        <H3>3. Direkte Anbindung an bestehende Kalendersysteme</H3>
        <P>
          Über saubere API-Schnittstellen werden die eingegebenen Daten im
          Hintergrund ohne Zeitverlust an das praxis- oder unternehmenseigene
          Verwaltungssystem übermittelt.
        </P>
      </Section>

      <Section>
        <H2>
          Strategische Key Takeaways: Die Buchungs-UX entscheidet über den
          Markterfolg
        </H2>
        <P>
          Ein herausragendes B2C-Angebot entfaltet seine volle Wirkung erst
          dann, wenn der Weg dorthin frei von Barrieren ist. Wer seinen Kunden
          einen schnellen, eleganten und verlässlichen Buchungspfad bietet,
          verwandelt Aufrufe in messbares Wachstum.
        </P>
      </Section>
    </div>
  )
}
