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
    <code className="rounded bg-primary/10 px-1.5 py-0.5 font-mono text-[0.9em] text-primary">
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
          Die lokale Suche ist mobil: Warum der erste Eindruck auf der Karte
          entsteht
        </H2>
        <P>
          Ob auf der Suche nach einem hochklassigen Restaurant für den Abend,
          einem Spezialisten für Augenoptik vor Ort oder einem verlässlichen
          Pflegedienst in der Nachbarschaft: Über 80 Prozent aller lokalen
          B2C-Suchanfragen finden heute auf dem Smartphone statt. Nutzer suchen
          nicht mehr am heimischen Desktop-PC, sondern unterwegs oder spontan
          von der Couch.
        </P>
        <P>
          Dabei bestimmt der Algorithmus von Google knallhart, wer gesehen wird.
          Das sogenannte &bdquo;Local Pack&ldquo; &ndash; die obersten drei
          Karteneinträge unter der Suchleiste &ndash; zieht den Großteil aller
          Anrufe, Routenplanungen und Tischreservierungen auf sich.
        </P>
        <P>
          Wer hier nicht auftaucht oder eine Mobilseite betreibt, die auf dem
          Smartphone langsam lädt und schlecht lesbar ist, überlässt den
          regionalen Markt kampflos der Konkurrenz.
        </P>
      </Section>

      <Section>
        <H2>Die Bausteine für eine unfechtbare regionale Dominanz</H2>
        <P>
          Um in regionalen Suchergebnissen dauerhaft auf den vorderen Plätzen zu
          stehen, müssen technische Exzellenz und lokale Suchrelevanz perfekt
          aufeinander abgestimmt sein.
        </P>
        <List>
          <Item>
            <Strong>Strukturierte Daten nach Schema.org:</Strong> Durch exakte
            Auszeichnungen im Quellcode (<Code>LocalBusiness</Code>,{' '}
            <Code>OpeningHoursSpecification</Code>, <Code>GeoCoordinates</Code>)
            verstehen Google und moderne KI-Suchsysteme auf Anhieb, wo sich der
            Betrieb befindet, was er anbietet und wann er geöffnet hat.
          </Item>
          <Item>
            <Strong>Direkte Interaktions-Buttons:</Strong> Auf dem Smartphone
            zählen kurze Wege. Ein Klick auf &bdquo;Jetzt anrufen&ldquo;,
            &bdquo;Route starten&ldquo; oder &bdquo;Tisch reservieren&ldquo;
            muss ohne Umwege zur Aktion führen.
          </Item>
          <Item>
            <Strong>Blitzschnelle Unterseiten für Standorte:</Strong> Betreibt
            ein Unternehmen mehrere Filialen oder Standorte, benötigt jeder Ort
            eine eigene, hochgradig optimierte Unterseite mit individuellen
            Inhalten und regionalem Bezug.
          </Item>
        </List>
      </Section>

      <Section>
        <H2>Praxisbeispiel: Boutique-Hotels &amp; Regionale Gastronomie-Gruppen</H2>
        <P>
          Wie dramatisch sich die Kombination aus lokaler SEO-Struktur und
          modernen Frontend-Technologien auswirkt, zeigt das Beispiel einer
          regionalen Boutique-Hotel- und Restaurant-Gruppe mit drei Standorten.
        </P>

        <H3>Die Ausgangslage</H3>
        <P>
          Obwohl die Küche und das Ambiente herausragend waren, blieben die
          spontanen Tischreservierungen und Zimmerbuchungen über die Website
          überschaubar. Die alte Website war über ein schwerfälliges CMS
          aufgebaut, brauchte auf mobilen Geräten über vier Sekunden zum Laden
          und die Öffnungszeiten im Google-Profil wichen von der Website ab.
          Spontane Gäste wählten stattdessen Mitbewerber, die weiter oben in den
          Kartenergebnissen gelistet waren.
        </P>

        <H3>Die Umsetzung durch AsiaEdits</H3>
        <P>
          AsiaEdits unterzog die digitale Präsenz einer grundlegenden
          Erneuerung:
        </P>
        <Steps>
          <Step index={1}>
            <span>
              <Strong>Einrichtung lokaler Standort-Hubs:</Strong> Jeder
              Standort erhielt eine eigene, extrem schnelle Next.js-Landingpage
              mit integrierten Öffnungszeiten, Speisekarten und
              Standort-Anfahrten.
            </span>
          </Step>
          <Step index={2}>
            <span>
              <Strong>Lückenloses JSON-LD Markup:</Strong> Sämtliche
              Kontaktdaten, Menü-Highlights und Event-Termine wurden
              maschinenlesbar für Google strukturiert.
            </span>
          </Step>
          <Step index={3}>
            <span>
              <Strong>Instant Mobile UX:</Strong> Die Speisekarte und das
              Reservierungs-Modal laden nun in Bruchteilen einer Sekunde
              &ndash; ideal für Gäste, die unterwegs nach einem freien Tisch
              suchen.
            </span>
          </Step>
        </Steps>

        <H3>Das Ergebnis</H3>
        <P>
          Innerhalb von drei Monaten kletterten alle drei Standorte in die
          Top-3 des Google Local Packs für ihre jeweiligen Ziel-Suchbegriffe.
          Die Verkäufe von Gutscheinen und die Online-Tischreservierungen
          stiegen um <Strong>+85&nbsp;%</Strong>, während die Anrufe direkt über
          das Smartphone-Suchfeld drastisch zunahmen.
        </P>
      </Section>

      <Section>
        <H2>Wie man lokale Sichtbarkeit nachhaltig absichert</H2>
        <P>
          Um den erreichten Vorsprung vor Ort langfristig zu halten, sollten
          B2C-Betriebe auf fortlaufende Optimierung setzen:
        </P>

        <H3>1. Konsistente Unternehmensdaten (NAP-Konsistenz)</H3>
        <P>
          Name, Adresse und Telefonnummer (NAP) müssen auf allen Plattformen,
          Verzeichnissen und sozialen Netzwerken exakt identisch geschrieben
          sein. Abweichungen verunsichern den Suchalgorithmus.
        </P>

        <H3>2. Optimierte Bildmedien mit Standort-Bezug</H3>
        <P>
          Fotos von Räumlichkeiten, Speisen oder dem Team sollten komprimiert im
          modernen WebP-Format vorliegen und klare Alt-Texte enthalten. Das
          stärkt die Ladezeit und die Bildersuche gleichermaßen.
        </P>

        <H3>3. Nahtlose Einbindung von Kundenbewertungen</H3>
        <P>
          Echte Bewertungen von zufriedenen Kunden, die direkt auf der Website
          eingebunden sind, schaffen Vertrauen und signalisieren Google
          kontinuierliche Aktivität.
        </P>
      </Section>

      <Section>
        <H2>
          Strategische Key Takeaways: Regionale Nähe digital erlebbar machen
        </H2>
        <P>
          Wer im B2C-Geschäft regional führend sein möchte, muss auf den
          Bildschirmen der Menschen vor Ort präsent sein. Mit einer schnellen,
          durchdachten und lokal optimierten Webpräsenz wird aus regionaler Nähe
          messbarer Erfolg.
        </P>
      </Section>
    </div>
  )
}
