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
          Einleitung: Warum digitales Handwerk im Jahr 2026 neue Standards
          braucht
        </H2>
        <P>
          Der Markt für regionale Handwerks- und Spezialdienstleistungen hat sich
          drastisch verändert. Potenzielle Auftraggeber suchen heute nicht mehr
          im Branchenbuch oder über Mundpropaganda allein, sondern erwarten eine
          sofort ladende, barrierefreie und auf den Punkt aufgebaute digitale
          Präsenz. Genau hier setzte das Projekt <Strong>SaarAxt.de</Strong> an.
        </P>
        <P>
          Anfang September 2026 ging die neugestaltete Plattform live &ndash; mit
          dem klaren Ziel, in einem hochkompetitiven lokalen Marktumfeld nicht
          nur Sichtbarkeit aufzubauen, sondern aus anonymen Webseitenbesuchern
          echte, qualifizierte Kundenanfragen zu generieren. Das Ergebnis nach
          nicht einmal vier Wochen: eine herausragende Click-Through-Rate (CTR)
          von <Strong>9,2&nbsp;%</Strong> in den organischen Suchergebnissen und
          eine nachhaltige Steigerung der Lead-Conversion-Rate um über{' '}
          <Strong>+10&nbsp;%</Strong>.
        </P>
      </Section>

      <Section>
        <H2>
          Die Herausforderung: Das Problem mit klassischen Standard-Systemen im
          Handwerk
        </H2>
        <P>
          Bevor SaarAxt.de neu aufgesetzt wurde, stand das Projekt vor den
          typischen Hürden, von denen Tausende mittelständische Betriebe
          betroffen sind:
        </P>
        <List>
          <Item>
            <Strong>Träge Ladezeiten:</Strong> Veraltete Baukastensysteme,
            monolithische Content-Management-Systeme und überladene Skripte
            drückten die mobilen Ladezeiten in den roten Bereich. Suchmaschinen
            strafen solche Seiten beim Mobile-First-Indexing gnadenlos ab.
          </Item>
          <Item>
            <Strong>Mangelnde lokale Relevanz:</Strong> Allgemeine Texte ohne
            gezielte semantische Abdeckung (WDF*IDF) führten dazu, dass die Seite
            bei Suchanfragen in der Region nicht auf den vorderen Plätzen
            auftauchte.
          </Item>
          <Item>
            <Strong>Schwache Conversion-Pfade:</Strong> Besucher landeten zwar
            gelegentlich auf der Seite, fanden aber keine klaren
            Handlungsaufforderungen vor. Die Folge waren hohe Absprungraten ohne
            Kontaktaufnahme.
          </Item>
        </List>
      </Section>

      <Section>
        <H2>Die Strategie: Der AsiaEdits Performance-Dreiklang</H2>
        <P>
          Um SaarAxt.de an die Spitze der regionalen Suchergebnisse zu führen,
          haben wir eine Strategie aus drei aufeinander abgestimmten Säulen
          umgesetzt:
        </P>

        <H3>1. High-Performance Edge-Server-Architektur</H3>
        <P>
          Anstelle eines schweren, veralteten Monolithen nutzten wir eine
          modernste, entkoppelte Web-Architektur auf global verteilten
          Edge-Netzwerken. Das Ergebnis ist eine nahezu verzögerungsfreie
          Ladezeit ohne Datenbank-Latenzen. Der LCP (Largest Contentful Paint)
          liegt weit unter 1,0 Sekunden, was die Seite mit einem garantierten{' '}
          <Strong>Mobile PageSpeed Score von 90+</Strong> ausstattet.
          Suchmaschinen belohnen diese technische Exzellenz mit bevorzugtem
          Crawling und höheren Einstiegsrankings.
        </P>

        <H3>2. WDF*IDF Text-Engineering &amp; Local Business Markup</H3>
        <P>
          Anstelle von unprofessionellem Keyword-Stuffing kam unser
          deterministisches WDF*IDF-Content-Engine-Prinzip zum Einsatz. Durch die
          mathematische Analyse der korrelierenden Begriffe im lokalen Umfeld
          wurden die Texte semantisch so angereichert, dass die Suchmaschine die
          absolute Themenrelevanz für die Zielregion erkennt. Zudem wurde die
          Seite mit vollständigen, strukturierten LocalBusiness-Geodaten
          ausgestattet, um die Einblendung in regionalen Suchergebnissen zu
          maximieren.
        </P>

        <H3>3. Conversion-Focused User Experience (UX)</H3>
        <P>
          Ein hoher Rang in der Suche nützt nichts, wenn der Besucher nicht
          anfragt. Wir haben die Informationsarchitektur radikal auf die
          Bedürfnisse von Entscheidern optimiert: Kontrastreiche Layouts, klare
          Vertrauenssignale, exakte Branchenbegriffe und direkt erreichbare
          Anfragepfade führten dazu, dass die Umwandlungsrate von Besuchern zu
          Anfragen rasant anstieg.
        </P>
      </Section>

      <Section>
        <H2>Die Ergebnisse: Messbare Performance ab Tag 1</H2>
        <P>
          Schauen wir auf die harten Fakten, die seit dem Go-Live Anfang
          September 2026 in den Auswertungs-Systemen aufgelaufen sind:
        </P>
        <List>
          <Item>
            <Strong>Ausnahmslose Klickstärke (9,2&nbsp;% CTR):</Strong> Während
            der Branchendurchschnitt bei organischen Suchergebnissen oft zwischen
            2&nbsp;% und 3&nbsp;% liegt, klickt bei SaarAxt.de fast jeder zehnte
            Suchende auf das Ergebnis. Das zeigt, wie perfekt Snippets und
            Suchintention aufeinander abgestimmt sind.
          </Item>
          <Item>
            <Strong>Kontinuierlicher Rankingsprung:</Strong> Innerhalb der ersten
            28 Tage kletterte die durchschnittliche Position der Kern-Keywords
            von Position 18,1 auf Position 14,9 &ndash; Tendenz steil nach oben.
          </Item>
          <Item>
            <Strong>+10&nbsp;% Lead Conversion-Rate:</Strong> Durch die
            Optimierung der Ladezeiten und der Anfragepfade konnte die
            Conversion-Rate nachhaltig um über 10&nbsp;% gesteigert werden.
          </Item>
        </List>
      </Section>

      <Section>
        <H2>Fazit: Was Unternehmen aus dem Case SaarAxt lernen können</H2>
        <P>
          Der Erfolg von SaarAxt.de beweist, dass es im heutigen B2B- und
          Dienstleistungssektor nicht darauf ankommt, das größte Budget zu haben
          &ndash; sondern die beste Technologie und die präziseste Strategie.
          Wenn extrem schnelle Ladezeiten, semantische Inhaltsstruktur und klares
          Conversion-Design ineinandergreifen, stellen sich messbare Ergebnisse
          bereits in den ersten Wochen nach dem Go-Live ein.
        </P>
      </Section>
    </div>
  )
}
