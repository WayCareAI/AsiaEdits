import type { ReactNode } from 'react'

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-balance font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
      {children}
    </h2>
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

export function AboutBody() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Section>
        <H2>Unsere Überzeugung: Berufung statt Dienstleistung</H2>
        <P>
          Wir haben das große Glück, unsere absolute Leidenschaft als Beruf
          ausüben zu können. Für uns ist Web-Engineering und Digital-Strategie
          keine Fließbandarbeit. Wir betrachten jeden Kunden als
          gleichwertigen Partner auf Augenhöhe.
        </P>
        <P>
          Wenn eine von uns gebaute Plattform neue Rekorde bei der Ladezeit
          aufstellt, in den Google-Rankings nach oben schießt und messbare
          Leads generiert, ist das für uns weit mehr als nur eine
          Bestätigung unserer Arbeit. Es ist unsere eigentliche Motivation
          und der stärkste Belohnungseffekt, den es in unserem Beruf gibt.{' '}
          <Strong>Wir brennen für sichtbare Ergebnisse.</Strong>
        </P>
      </Section>

      <Section>
        <H2>
          Die Lücke im Markt: Was wir anders machen als klassische Agenturen
        </H2>
        <P>
          Da wir jahrelang in großen Agenturen gearbeitet, eigenständig
          Unternehmen gegründet und Medienhäuser bei der Digitalisierung
          begleitet haben, kennen wir die typischen Schwachstellen des
          Marktes aus beiden Perspektiven:
        </P>
        <List>
          <Item>
            <Strong>Die Lücke bei der Qualität &amp; Geschwindigkeit:</Strong>{' '}
            Statt träger Baukästen oder überladener CMS-Monolithen entwickeln
            wir hochmoderne Edge-Architekturen mit garantierten Ladezeiten
            unter einer Sekunde.
          </Item>
          <Item>
            <Strong>Die Lücke im Preis-Leistungs-Verhältnis:</Strong> Keine
            künstlichen Wasserköpfe, keine überblähten
            Projektmanagement-Gebühren – du zahlst ausschließlich für
            Senior-Expertise und echte Performance.
          </Item>
          <Item>
            <Strong>Die Lücke beim echten Verständnis:</Strong> Wir stülpen
            keinem Unternehmen Schema-F-Lösungen über. Durch unsere eigene
            Gründer-Erfahrung denken wir wie Mitunternehmer und verstehen die
            individuellen Herausforderungen, Margen und Zielgruppen deines
            Geschäfts.
          </Item>
        </List>
      </Section>

      <Section>
        <H2>Unser Fundament: 15+ Jahre High-End Digital-Expertise</H2>
        <P>
          Hinter AsiaEdits steht tiefes Know-how aus prägenden Stationen der
          digitalen Landschaft:
        </P>
        <List>
          <Item>
            <Strong>E-Commerce Scaling:</Strong> Jahrelange Praxiserfahrung in
            der Performance-Optimierung und Skalierung komplexer
            Online-Shop-Systeme.
          </Item>
          <Item>
            <Strong>Google Tier-1 Agentur-Expertise:</Strong> Steuerung von
            Hochleistungs-SEO- und Performance-Kampagnen für internationale
            Top-Marken.
          </Item>
          <Item>
            <Strong>Presse &amp; Medien-Digitalisierung:</Strong> Strategische
            Begleitung und technische Unterstützung renommierter Medienhäuser
            bei der digitalen Transformation.
          </Item>
          <Item>
            <Strong>Aktiv gestaltetes Unternehmertum:</Strong> Eigene
            Gründungen und erfolgreiche Beteiligungen – wir kennen die
            Realität hinter B2B-Entscheidungen aus erster Hand.
          </Item>
        </List>
      </Section>

      <Section>
        <H2>Unsere Kultur: Transparenz, direkte Wege &amp; gemeinsame Mission</H2>
        <P>
          Wir schätzen ehrlichen, direkten Austausch ohne unverständliches
          Fachchinesisch. Wenn wir ein Projekt starten, verschmelzen wir mit
          deinem Team zu einer Einheit. Dein Ziel wird zu unserer gemeinsamen
          Mission – reibungsfrei, transparent und kompromisslos auf
          Performance ausgerichtet.
        </P>
      </Section>
    </div>
  )
}
