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
          Die Herausforderung im EdTech-Sektor: Komplexität abbauen, Zugang
          erleichtern
        </H2>
        <P>
          Die Digitalisierung an Schulen, Kitas, Akademien und in
          Privathaushalten schreitet zügig voran. Doch viele
          Bildungs-Initiativen und EdTech-Anbieter stehen vor einer zentralen
          Hürde: Die Handhabung digitaler Lernmittel ist oft zu kompliziert.
          Träge Portale, unübersichtliche App-Store-Installationen und
          fehlende Kompatibilität mit unterschiedlichen Endgeräten sorgen bei
          Lehrkräften, Schülerinnen, Schülern und Eltern schnell für
          Frustration.
        </P>
        <P>
          Gerade im Bildungsbereich entscheiden Einfachheit und Geschwindigkeit
          über die tatsächliche Nutzung im Alltag. Wenn eine Lern-Anwendung
          auf dem Schul-Tablet oder dem privaten Smartphone der Eltern nicht
          innerhalb von Sekunden einsatzbereit ist, wird sie im Unterricht oder
          zu Hause schlichtweg nicht genutzt.
        </P>
        <P>
          Moderne Progressive Web Apps (PWAs) auf Basis von Next.js schließen
          diese Lücke: Sie verbinden die Leistungsfähigkeit einer
          installierbaren App mit der barrierefreien Zugänglichkeit einer
          blitzschnellen Website.
        </P>
      </Section>

      <Section>
        <H2>Die Erfolgsfaktoren moderner PWA-Lernplattformen</H2>
        <P>
          Eine führende EdTech-Plattform muss den hohen Ansprüchen von
          Bildungseinrichtungen und Privatkunden gleichermaßen gerecht werden.
        </P>
        <List>
          <Item>
            <Strong>Direkte Nutzbarkeit ohne App-Store-Zwang:</Strong> Die
            Anwendung lässt sich mit einem Klick im Browser öffnen oder direkt
            auf dem Startbildschirm von Tablets und Smartphones ablegen.
            Zeitintensive Freigaben in geschlossenen App-Stores entfallen
            vollständig.
          </Item>
          <Item>
            <Strong>Barrierefreie Bedienung &amp; Audio-Integration:</Strong>{' '}
            Junge Lernende und Personen mit unterschiedlichem Leseniveau
            benötigen intuitive Oberflächen, klare Symbole und integrierte
            Sprachausgaben für Arbeitsanweisungen.
          </Item>
          <Item>
            <Strong>DSGVO-Konformität und Datenschutz:</Strong> Der Schutz
            sensibler Daten von Kindern, Eltern und Bildungseinrichtungen hat
            oberste Priorität und erfordert eine sichere, europäische
            Infrastruktur.
          </Item>
        </List>
      </Section>

      <Section>
        <H2>
          Praxisbeispiel: My Boardy &ndash; Die digitale Lern- &amp;
          Grundschul-Plattform
        </H2>
        <P>
          Wie der Aufbau einer hochkonvertierenden, maßgeschneiderten
          Bildungs-Plattform für Bildungseinrichtungen und Privatkunden gelingt,
          zeigt das von AsiaEdits entwickelte Ökosystem{' '}
          <Strong>My Boardy</Strong> (my-boardy.com).
        </P>

        <H3>Die Ausgangslage</H3>
        <P>
          Das Projekt startete mit der Vision, eine moderne, hochmotivierende
          Lernumgebung für die Primarstufe zu schaffen. Herkömmliche
          Baukastensysteme und native App-Lösungen stießen jedoch schnell an
          ihre Grenzen: Unflexible Layouts, lange Ladezeiten und komplizierte
          Zugangshürden erschwerten den Einsatz im Unterricht sowie die Nutzung
          durch Eltern zu Hause.
        </P>

        <H3>Die Umsetzung durch AsiaEdits</H3>
        <P>
          AsiaEdits konzipierte und entwickelte die gesamte digitale Plattform
          auf Basis von Next.js, Tailwind CSS und Vercel Edge:
        </P>
        <Steps>
          <Step index={1}>
            <span>
              <Strong>Liebevolles Mascot-Branding &amp; Instant PWA:</Strong>{' '}
              Die Anwendung wurde um das sympathische Maskottchen
              &bdquo;Boardy&ldquo; herum aufgebaut. Als Progressive Web App
              lässt sie sich mit einem Antippen auf jedem Schul-Tablet oder
              privaten Smartphone speichern und lädt in unter
              200&nbsp;Millisekunden.
            </span>
          </Step>
          <Step index={2}>
            <span>
              <Strong>Integrierte Audio-UX &amp; Vorlese-Funktion:</Strong>{' '}
              Sprachinhalte sind direkt in die Web-App eingebunden, um auch
              jüngeren Lernenden ohne gefestigte Lesekenntnisse eine
              selbstständige Orientierung zu ermöglichen.
            </span>
          </Step>
          <Step index={3}>
            <span>
              <Strong>
                Optimierte Anmelde-Flows für Einrichtungen &amp; Eltern:
              </Strong>{' '}
              Spezifische Zugänge für Lehrkräfte und Eltern bieten
              blitzschnelle Downloads von Arbeitsblättern, Lernmaterialien und
              Registrierungen.
            </span>
          </Step>
        </Steps>

        <H3>Das Ergebnis</H3>
        <P>
          Die Plattform erzielte aus dem Stand{' '}
          <Strong>PageSpeed-Höchstwerte von 98 bis 100</Strong>. Die
          Conversion-Rate bei der Registrierung für exklusive Lernmaterialien
          lag um <Strong>+120&nbsp;%</Strong> über den üblichen Branchenwerten,
          während die Absprungrate bei mobilen Zugriffen nahezu vollständig
          eliminiert wurde.
        </P>
      </Section>

      <Section>
        <H2>Qualitätskriterien für professionelle EdTech-Software</H2>
        <P>
          Beim Aufbau von Bildungsplattformen für öffentliche und private
          Träger stehen Stabilität und Zugänglichkeit an erster Stelle:
        </P>

        <H3>1. Device-Agnostische Flexibilität</H3>
        <P>
          Ob iPads in der Schule, Android-Tablets im Lernzentrum oder das
          private Smartphone der Eltern: Das Interface passt sich allen
          Bildschirmgrößen nahtlos an.
        </P>

        <H3>2. Hohe Skalierbarkeit bei Gleichzeitigkeits-Spitzen</H3>
        <P>
          Wenn hunderte Schulklassen gleichzeitig auf Lerninhalte zugreifen,
          garantiert eine moderne Edge-Server-Architektur unterbrechungsfreie
          Ladezeiten.
        </P>

        <H3>3. Zukunftsfähige Schnittstellen-Architektur</H3>
        <P>
          Über saubere APIs lassen sich Lernstand-Dashboards, Bezahlsysteme für
          Premium-Inhalte oder Verwaltungssysteme für Schulen mühelos anbinden.
        </P>
      </Section>

      <Section>
        <H2>
          Strategische Key Takeaways: Digitale Bildung braucht einfache Zugänge
        </H2>
        <P>
          EdTech-Lösungen setzen sich nur dann durch, wenn die Technik
          unsichtbar bleibt und der Lernerfolg im Mittelpunkt steht. Mit einer
          schnellen, barrierefreien Progressive Web App schaffen Anbieter
          nachhaltiges Vertrauen bei Einrichtungen und Familien.
        </P>
      </Section>
    </div>
  )
}
