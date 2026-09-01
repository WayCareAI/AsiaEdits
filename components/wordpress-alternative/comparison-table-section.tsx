import { Check, X } from 'lucide-react'

const COMPARISON_ROWS = [
  {
    criterion: 'Mobile Ladezeit (PageSpeed)',
    wordpress: 'Oft 40–65 Punkte, häufig über 3 Sekunden Ladezeit',
    asiaedits: '90–100 Punkte, meist unter 0,5 Sekunden',
  },
  {
    criterion: 'Core Web Vitals Performance',
    wordpress: 'Instabile LCP-/CLS-Werte durch Plugin-Overhead',
    asiaedits: 'Konstant im grünen Bereich für alle Metriken',
  },
  {
    criterion: 'Sicherheit & Hacking-Schutz',
    wordpress: 'Hohes Risiko durch Datenbank & Plugin-Lücken',
    asiaedits: 'Keine Datenbank, keine klassische Angriffsfläche',
  },
  {
    criterion: 'Wartungs- & Pflegeaufwand',
    wordpress: 'Regelmäßige Updates & Agentur-Wartungsverträge nötig',
    asiaedits: '0 % laufender Wartungsaufwand',
  },
  {
    criterion: 'Design & Quellcode-Qualität',
    wordpress: 'Theme-Baukasten mit aufgeblähtem Legacy-Code',
    asiaedits: 'Individueller, schlanker React- & Tailwind-Code',
  },
  {
    criterion: 'Preismodell & Transparenz',
    wordpress: 'Günstiger Start, versteckte Folgekosten pro Monat',
    asiaedits: 'Fester Preis ab 199 €, volle Kostentransparenz',
  },
]

export function ComparisonTableSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2
          id="systemvergleich-wordpress-vs-asiaedits"
          className="text-balance font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Direkter Vergleich: Klassisches WordPress vs. asiaedits Next.js
          Webdesign
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
          Die folgende Tabelle stellt die entscheidenden
          Leistungskriterien beider Systeme gegenüber &ndash; von der
          Ladegeschwindigkeit über die Sicherheitslage bis zum
          transparenten Preismodell.
        </p>

        <div className="mt-8 w-full max-w-full overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-card/60">
                <th className="px-4 py-4 font-heading font-semibold text-foreground sm:px-6">
                  Kriterium / Anforderung
                </th>
                <th className="px-4 py-4 font-heading font-semibold text-destructive sm:px-6">
                  Klassisches WordPress
                </th>
                <th className="px-4 py-4 font-heading font-semibold text-primary sm:px-6">
                  asiaedits (Next.js &amp; Tailwind)
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, index) => (
                <tr
                  key={row.criterion}
                  className={
                    index !== COMPARISON_ROWS.length - 1
                      ? 'border-b border-border/60'
                      : ''
                  }
                >
                  <td className="px-4 py-4 font-medium text-foreground sm:px-6">
                    {row.criterion}
                  </td>
                  <td className="px-4 py-4 text-muted-foreground sm:px-6">
                    <span className="flex items-start gap-2">
                      <X className="mt-0.5 size-4 shrink-0 text-destructive" />
                      {row.wordpress}
                    </span>
                  </td>
                  <td className="px-4 py-4 font-semibold text-foreground sm:px-6">
                    <span className="flex items-start gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {row.asiaedits}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
