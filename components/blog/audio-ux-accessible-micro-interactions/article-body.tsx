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
          Einleitung: Warum Barrierefreiheit der Schlüssel zu exzellenter User
          Experience ist
        </H2>
        <P>
          In der modernen Webentwicklung wird Barrierefreiheit (Accessibility)
          noch immer häufig als reine lästige Pflichtaufgabe missverstanden. Das
          am 28. Juni 2025 in Kraft getretene
          Barrierefreiheitsstärkungsgesetz (BFSG) hat den Druck auf Unternehmen
          zwar drastisch erhöht, doch die eigentliche Chance liegt viel tiefer:
          Barrierefreies Webdesign ist der wirkungsvollste Hebel für
          herausragende User Experience und überlegene Conversion-Rates.
        </P>
        <P>
          Besonders im Gesundheitswesen, im Pflegebereich, bei Sanitätshäusern
          oder Augenoptikern treffen digitale Angebote auf Zielgruppen mit
          unterschiedlichsten Einschränkungen &ndash; sei es Sehschwäche,
          motorische Einschränkungen oder schlichtweg temporäre
          Reizüberflutung.
        </P>
        <P>
          Wer diesen Menschen mit durchdachter <Strong>Audio-UX</Strong> und{' '}
          <Strong>barrierefreien Micro-Interactions</Strong> entgegenkommt, baut
          nicht nur Barrieren ab, sondern gewinnt tiefes Vertrauen und messbare
          Neukunden.
        </P>
      </Section>

      <Section>
        <H2>
          Die Bausteine moderner Audio-UX: Mehr als nur ein Text-to-Speech-Button
        </H2>
        <P>
          Audio-UX beschreibt die gezielte Einbindung von akustischen Signalen,
          nativen Sprach-Ausgaben und benutzerfreundlichen
          Vorlese-Schnittstellen. Richtig umgesetzt, verwandelt Audio-UX eine
          reine Textwüste in ein interaktives, barrierefreies Erlebnis:
        </P>
        <List>
          <Item>
            <Strong>Integrierte Vorlese-Player für Fachartikel:</Strong>{' '}
            Besucher können komplexe Ratgeber oder Case Studies mit einem Klick
            anhören &ndash; ob beim Autofahren, unterwegs oder bei
            Sehbeeinträchtigungen.
          </Item>
          <Item>
            <Strong>Barrierefreie Micro-Interactions:</Strong> Subtile,
            akustische oder visuell kontrastreiche Rückmeldungen bei Buttons,
            Modal-Dialogen und Formular-Absendungen geben dem Nutzer sofortige
            Gewissheit über seine Interaktion.
          </Item>
          <Item>
            <Strong>Fokus-Management für Screenreader:</Strong> Bei der
            Navigation mit der Tastatur oder Screenreadern wird der Fokus präzise
            auf wichtige Dialogfenster und Eingabefelder gelenkt, ohne den Nutzer
            im DOM-Baum zu verwirren.
          </Item>
        </List>
      </Section>

      <Section>
        <H2>Praxisbeispiel: Sanitätshäuser, Pflegedienste &amp; Augenoptiker</H2>
        <P>
          Wie drastisch sich barrierefreie Audio-UX auf die Praxis-Ergebnisse
          auswirkt, zeigt die Umstellung eines regionalen Verbunds für
          Sanitätshäuser und ambulante Pflegedienste:
        </P>
        <P>
          Die Zielgruppe besteht hierbei häufig aus älteren Menschen,
          pflegenden Angehörigen oder Personen mit Seheinschränkungen, die nach
          Hilfsmitteln wie Treppenliften, Spezial-Rollstühlen oder
          Pflegeleistungen suchen.
        </P>

        <H3>Die Ausgangslage</H3>
        <P>
          Die ursprüngliche Website setzte auf kleine Schriftgrößen, geringe
          Farbkontraste und verschachtelte Formulare. Ältere Besucher gaben den
          Versuch, eine Beratung zu vereinbaren, häufig frustriert auf. Die
          Absprungrate lag bei über 68&nbsp;%.
        </P>

        <H3>Die Umstellung durch AsiaEdits</H3>
        <Steps>
          <Step index={1}>
            <Strong>Audio-Player Integration:</Strong> Jeder Beitrag zu
            Pflegegraden, Hilfsmittel-Anträgen und Versorgungsabläufen erhielt
            einen prominenten, barrierefreien Audio-Player.
          </Step>
          <Step index={2}>
            <Strong>Accessible Micro-Interactions:</Strong> Alle Anfragemodale
            wurden nach strikten WCAG-Richtlinien überarbeitet. Bei Klick öffnet
            sich das Modal ohne Screen-Flicker, während Screenreader das Modal
            sofort als aktiv ankündigen.
          </Step>
          <Step index={3}>
            <Strong>Optimierte Tastatur-Steuerung:</Strong> Die gesamte
            Menüführung lässt sich mühelos mit der Tab-Taste steuern, unterstützt
            durch hochkontrastreiche Fokus-Ringe.
          </Step>
        </Steps>

        <H3>Das Ergebnis</H3>
        <P>
          Die Verweildauer auf den Ratgeber-Seiten stieg um 45&nbsp;%, während
          die Online-Anfragen für Beratungsgespräche um <Strong>+85&nbsp;%</Strong>{' '}
          zulegten. Die Absprungrate fiel auf ein Rekordtief.
        </P>
      </Section>

      <Section>
        <H2>Die technischen Grundlagen: So gelingt die barrierefreie Umsetzung</H2>
        <P>
          Damit Audio-UX und Micro-Interactions barrierefrei funktionieren,
          müssen Entwickler auf saubersten Code achten:
        </P>
        <List>
          <Item>
            <Strong>ARIA-Attributes korrekt einsetzen:</Strong> Attribute wie{' '}
            <Code>aria-expanded</Code>, <Code>{'aria-live="polite"'}</Code> und{' '}
            <Code>{'aria-modal="true"'}</Code> garantieren, dass assistive
            Technologien Statusänderungen in Echtzeit vorlesen.
          </Item>
          <Item>
            <Strong>Zero-Latenz Audio-Streaming:</Strong> Audio-Dateien müssen
            komprimiert und über weltweite CDNs ausgeliefert werden, damit das
            Abspielen ohne Verzögerung startet.
          </Item>
          <Item>
            <Strong>Vollständige Kontrast- und Skalierungs-Sicherheit:</Strong>{' '}
            Alle visuellen Komponenten bleiben selbst bei 200&nbsp;% Zoom-Stufe
            oder im High-Contrast-Modus lückenlos bedienbar.
          </Item>
        </List>
      </Section>

      <Section>
        <H2>
          Strategische Key Takeaways: Zugänglichkeit als stärkster
          Vertrauensfaktor
        </H2>
        <P>
          Barrierefreie Audio-UX ist kein Extra-Feature für eine kleine
          Minderheit, sondern der Standard für exzellentes, modernes Webdesign.
          Wer Hürden konsequent abbaut, sichert sich begeisterte Nutzer,
          hervorragende Google-Nutzersignale und nachhaltige Marktanteile.
        </P>
      </Section>
    </div>
  )
}
