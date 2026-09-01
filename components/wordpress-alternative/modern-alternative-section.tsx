import { Gauge, ShieldCheck, Sparkles, Timer } from 'lucide-react'

const ADVANTAGES = [
  {
    icon: Gauge,
    title: 'Garantierter PageSpeed-Score von 90–100',
    description:
      'Statisch vorgerenderte Seiten laden nahezu verzögerungsfrei – ganz ohne Server-Roundtrip zur Datenbank bei jedem Aufruf.',
  },
  {
    icon: Timer,
    title: 'Optimale Core Web Vitals (LCP, FID, CLS)',
    description:
      'Kleine, gebündelte JavaScript-Pakete und optimierte Bilder sorgen für schnelle Interaktivität und stabile, sprungfreie Layouts.',
  },
  {
    icon: ShieldCheck,
    title: 'Praktisch unhackbare Edge-Sicherheit',
    description:
      'Ohne Datenbank, Admin-Login oder PHP-Ausführung auf dem Server entfällt die klassische Angriffsfläche komplett.',
  },
  {
    icon: Sparkles,
    title: '0 % laufender Wartungsaufwand',
    description:
      'Keine Plugin-Updates, keine Core-Patches, keine Kompatibilitätskonflikte – die Website läuft einfach, Monat für Monat.',
  },
]

export function ModernAlternativeSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2
          id="die-moderne-alternative-nextjs-react"
          className="text-balance font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Next.js, React &amp; Tailwind CSS: Die schlüsselfertige
          Alternative für maximale Performance
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
          Statt eine klassische Server-Rendering-Pipeline bei jedem
          Seitenaufruf neu zu durchlaufen, setzt die moderne Jamstack-
          Architektur auf konsequente Trennung von Build-Zeit und
          Laufzeit. Mit Next.js und React werden Inhalte durch Static Site
          Generation (SSG) bereits beim Build-Prozess in fertiges HTML
          umgewandelt und anschließend über ein globales Edge-Netzwerk
          verteilt. Nutzer:innen erhalten die fertige Seite direkt vom
          nächstgelegenen Server-Standort &ndash; ganz ohne Wartezeit für
          Datenbankabfragen oder PHP-Kompilierung. Tailwind CSS ergänzt
          dieses Fundament mit einem schlanken, utility-basierten
          Styling-System, das nur exakt den CSS-Code ausliefert, der
          tatsächlich gebraucht wird. Das Resultat ist eine Website, die
          nicht nur beeindruckend schnell wirkt, sondern es auch technisch
          nachweislich ist.
        </p>

        <h3
          id="vorteile-von-nextjs-webdesign"
          className="mt-10 font-heading text-lg font-semibold text-foreground"
        >
          Warum Next.js-Websites Ihrem Unternehmen einen klaren
          Wettbewerbsvorteil verschaffen:
        </h3>

        <ol className="mt-6 grid gap-5 sm:grid-cols-2">
          {ADVANTAGES.map((advantage, index) => {
            const Icon = advantage.icon
            return (
              <li
                key={advantage.title}
                className="flex gap-4 rounded-2xl border border-primary/20 bg-gradient-to-b from-primary/[0.06] to-card p-6"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 font-heading text-sm font-semibold text-primary">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h4 className="flex items-center gap-2 font-heading text-base font-semibold text-foreground">
                    <Icon className="size-4 text-primary" />
                    <span>{advantage.title}</span>
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {advantage.description}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
