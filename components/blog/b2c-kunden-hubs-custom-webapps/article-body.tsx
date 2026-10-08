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
          Die Evolution der Kundenbindung: Vom Papier-Gutschein zum digitalen
          Hub
        </H2>
        <P>
          In der Kommunikation mit Endverbrauchern hat sich das Nutzerverhalten
          grundlegend gewandelt. Kunden möchten Bonuspunkte, gebuchte Termine,
          Trainingspläne oder exklusive Vorteile nicht mehr auf Papierstreifen
          verwalten oder erst im Geldbeutel nach Plastikkarten suchen.
          Gleichzeitig zeigen Studien, dass B2C-Kunden immer seltener bereit
          sind, für jeden einzelnen Anbieter eine eigene, speicherintensive App
          aus dem App Store herunterzuladen.
        </P>
        <P>
          Die Lösung für diesen Zielkonflikt liegt in maßgeschneiderten, nativ
          wirkenden Web-Applikationen (Progressive Web Apps / PWAs). Diese
          lassen sich direkt über den Smartphone-Browser aufrufen, auf dem
          Startbildschirm speichern und bieten sofortigen Zugriff auf
          persönliche Daten.
        </P>
        <P>
          Wer seinen Kunden einen extrem schnellen, sicheren und hürdenfreien
          digitalen Ort bietet, schafft echten Mehrwert und steigert die
          Markenloyalität nachhaltig.
        </P>
      </Section>

      <Section>
        <H2>Die Erfolgsfaktoren moderner Webapplikationen für Endkunden</H2>
        <P>
          Eine überzeugende B2C-Webapp verbindet Sicherheit und Datenschutz mit
          einer spielerisch einfachen Bedienung.
        </P>
        <List>
          <Item>
            <Strong>Keine Download-Hürden:</Strong> Der Aufruf erfolgt über
            einen einfachen Link oder QR-Code. Der Kunde befindet sich sofort in
            seiner persönlichen Umgebung, ohne zeitraubende Installation.
          </Item>
          <Item>
            <Strong>Echtzeit-Synchronisation via Edge API:</Strong> Ob
            Punktestand, Buchungsbestätigung oder Dokumenten-Download &ndash;
            Änderungen stehen ohne Verzögerung auf allen Geräten bereit.
          </Item>
          <Item>
            <Strong>Sichere Authentifizierung ohne Passwort-Frust:</Strong>{' '}
            Moderne Login-Verfahren wie Magic Links per E-Mail oder
            Biometrie-Schnittstellen machen unmerklich schnelle Zugänge
            möglich.
          </Item>
        </List>
      </Section>

      <Section>
        <H2>
          Praxisbeispiel: Premium Fitness- und Boutique-Gesundheits-Clubs
        </H2>
        <P>
          Wie die Umstellung auf einen browserbasierten Kunden-Hub das
          Nutzererlebnis revolutioniert, verdeutlicht die Entwicklung bei einer
          Kette von Boutique-Fitnessstudios.
        </P>

        <H3>Die Ausgangslage</H3>
        <P>
          Das Unternehmen nutzte eine veraltete native App aus einem
          Standard-Framework. Die Mitglieder beschwerten sich über lange
          Ladezeiten, regelmäßige Abstürze und komplizierte Logins. Nach jedem
          App-Update vergaß das System die Zugangsdaten. Die Folge: Mitglieder
          buchten Kurse stattdessen telefonisch oder wichen auf andere Anbieter
          aus. Die digitale Nutzung lag bei mageren 20&nbsp;Prozent.
        </P>

        <H3>Die Umsetzung durch AsiaEdits</H3>
        <P>
          AsiaEdits konzipierte und entwickelte einen maßgeschneiderten
          B2C-Kunden-Hub auf Basis von Next.js und Tailwind CSS:
        </P>
        <Steps>
          <Step index={1}>
            <span>
              <Strong>Instant PWA auf dem Smartphone:</Strong> Der Hub lässt
              sich mit einem Antippen als Web-App auf dem Homescreen ablegen
              und lädt beim Öffnen in unter 200&nbsp;Millisekunden.
            </span>
          </Step>
          <Step index={2}>
            <span>
              <Strong>Interaktive Kursbuchung:</Strong> Mitglieder sehen freie
              Plätze in Echtzeit, können mit einem Klick reservieren und ihre
              Termine automatisch synchronisieren.
            </span>
          </Step>
          <Step index={3}>
            <span>
              <Strong>Persönliches Fortschritts-Dashboard:</Strong>{' '}
              Trainingserfolge und Gutscheine sind übersichtlich aufbereitet
              und motivieren zur regelmäßigen Nutzung.
            </span>
          </Step>
        </Steps>

        <H3>Das Ergebnis</H3>
        <P>
          Innerhalb von zwei Monaten stieg die aktive Nutzung des digitalen
          Hubs auf <Strong>+85&nbsp;%</Strong> der gesamten Mitgliedschaft. Die
          Anfragen an den Support sanken drastisch, während die Teilnahme an
          Premium-Kursen spürbar zunahm.
        </P>
      </Section>

      <Section>
        <H2>Technische Architektur für krisenfeste B2C-Plattformen</H2>
        <P>
          Damit Webapplikationen hohe Nutzerzahlen ohne Leistungseinbußen
          verarbeiten können, setzt die Entwicklung auf moderne Standards:
        </P>

        <H3>1. Entkoppelte Frontend-Architektur (Headless)</H3>
        <P>
          Durch die Trennung von Benutzeroberfläche und Datenbanksystemen
          bleibt das System flexibel. Erweiterungen oder Design-Anpassungen
          können vorgenommen werden, ohne den laufenden Betrieb zu stören.
        </P>

        <H3>2. Optimierte Daten-Caches</H3>
        <P>
          Sensible Kundendaten werden verschlüsselt und effizient
          zwischengespeichert. Das reduziert Serveranfragen und schont den Akku
          des mobilen Endgeräts.
        </P>

        <H3>3. Barrierefreie System-Rückmeldungen</H3>
        <P>
          Statusmeldungen wie &bdquo;Kurs erfolgreich gebucht&ldquo; oder
          &bdquo;Gutschein eingelöst&ldquo; werden klar visuell und für
          Screenreader aufbereitet.
        </P>
      </Section>

      <Section>
        <H2>
          Strategische Key Takeaways: Digitale Nähe als Wettbewerbsvorteil
        </H2>
        <P>
          Ein durchdachter B2C-Kunden-Hub verwandelt Gelegenheitskunden in
          begeisterte Stammkunden. Wer auf Schnelligkeit, Zugänglichkeit und
          intuitive Bedienung setzt, schafft eine dauerhafte Bindung.
        </P>
      </Section>
    </div>
  )
}
