import { Check, X } from 'lucide-react'

const ROWS = [
  {
    criterion: 'Ladezeit Mobil (Performance)',
    wordpress: '35–55 / 100 (3.8s–5.2s)',
    asiaedits: '95–98 / 100 (< 0.8s)',
  },
  {
    criterion: 'Desktop Performance',
    wordpress: '60–80 / 100',
    asiaedits: '100 / 100',
  },
  {
    criterion: 'Core Web Vitals',
    wordpress: 'Mangelhaft / Gelb',
    asiaedits: '100 % Bestehen (Grüner Bereich)',
  },
  {
    criterion: 'Sicherheit & Hacks',
    wordpress: 'Hohes Risiko durch veraltete PHP-Plugins',
    asiaedits: 'Maximale Sicherheit (Static & API Architecture)',
  },
  {
    criterion: 'Wartungsaufwand',
    wordpress: 'Wöchentliche Plugin-Updates & Breakages',
    asiaedits: '0 % Wartungsfrust',
  },
]

export function BenchmarkTable() {
  return (
    <section className="relative pb-20 sm:pb-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2
          id="vergleichstabelle"
          className="scroll-mt-28 text-balance font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          WordPress vs. AsiaEdits Next.js Stack im direkten Vergleich
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
          Die Tabelle stellt typische Messwerte eines klassischen
          WordPress-Setups mit Theme und Plugins den Ergebnissen des
          AsiaEdits Next.js Stacks gegenüber &ndash; von der mobilen
          Ladezeit über die Core Web Vitals bis zu Sicherheit und
          Wartung.
        </p>

        <div className="mt-8 w-full max-w-full overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <caption className="sr-only">
              Vergleich von WordPress und dem AsiaEdits Next.js Stack nach
              Performance, Core Web Vitals, Sicherheit und Wartungsaufwand
            </caption>
            <thead>
              <tr className="border-b border-border bg-card/60">
                <th
                  scope="col"
                  className="px-4 py-4 font-heading font-semibold text-foreground sm:px-6"
                >
                  Kriterium
                </th>
                <th
                  scope="col"
                  className="px-4 py-4 font-heading font-semibold text-destructive sm:px-6"
                >
                  WordPress
                </th>
                <th
                  scope="col"
                  className="px-4 py-4 font-heading font-semibold text-primary sm:px-6"
                >
                  AsiaEdits (Next.js Stack)
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, index) => (
                <tr
                  key={row.criterion}
                  className={
                    index !== ROWS.length - 1 ? 'border-b border-border/60' : ''
                  }
                >
                  <th
                    scope="row"
                    className="px-4 py-4 text-left font-medium text-foreground sm:px-6"
                  >
                    {row.criterion}
                  </th>
                  <td className="px-4 py-4 text-muted-foreground sm:px-6">
                    <span className="flex items-start gap-2">
                      <X
                        aria-hidden
                        className="mt-0.5 size-4 shrink-0 text-destructive"
                      />
                      {row.wordpress}
                    </span>
                  </td>
                  <td className="px-4 py-4 font-semibold text-foreground sm:px-6">
                    <span className="flex items-start gap-2">
                      <Check
                        aria-hidden
                        className="mt-0.5 size-4 shrink-0 text-primary"
                      />
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
