import { Check, X } from 'lucide-react'

const COMPARISON_ROWS = [
  {
    criterion: 'Mobile Ladezeit (3G/4G Netz)',
    agency: 'Träge (3-6 Sek. Ladezeit)',
    asiaedits: 'Ultra-schnell (< 0,5 Sek. Ladezeit)',
  },
  {
    criterion: 'Google PageSpeed Score',
    agency: 'Oft rot oder gelb (30-60 Punkte)',
    asiaedits: 'Garantierter grüner Bereich (90-100 Punkte)',
  },
  {
    criterion: 'Anfrage-Prozess für Kunden',
    agency: 'Starre Mail-Adressen oder lange Formulare',
    asiaedits: 'Smartes Quick-Anfrage-Modal für Mobilgeräte',
  },
  {
    criterion: 'Regionale SEO-Optimierung',
    agency: 'Oft nur als teures Zusatzpaket buchbar',
    asiaedits: 'In allen Paketen werkseitig voll integriert',
  },
  {
    criterion: 'Wartung & Inhaltspflege',
    agency: 'Kunde muss sich selbst im Dashboard einarbeiten',
    asiaedits: '0 % Stress: Text-Änderungen innerhalb von 12h erledigt',
  },
  {
    criterion: 'Preismodell & Transparenz',
    agency: 'Oft 3.000 € bis 6.000 € hohe Einmalkosten',
    asiaedits: 'Fair & Kalkulierbar: 199 €/Monat oder 699 € Buyout',
  },
]

export function HandwerkerComparisonTableSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2
          id="vergleich-handwerker-websites"
          className="text-balance font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Direkter Vergleich: Klassische Agentur-Homepage vs. asiaedits
          Website für Handwerker
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
          Die folgende Tabelle stellt die entscheidenden
          Leistungskriterien beider Lösungen gegenüber – von der mobilen
          Ladegeschwindigkeit über den Anfrage-Prozess bis zum
          transparenten Preismodell. So sehen Sie auf einen Blick, warum
          sich für Handwerksbetriebe der Umstieg auf eine moderne,
          speziell auf die Branche zugeschnittene Website-Lösung
          langfristig auszahlt.
        </p>

        <div className="mt-8 w-full max-w-full overflow-x-auto rounded-xl border border-slate-800">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-800 bg-card/60">
                <th className="px-4 py-4 font-heading font-semibold text-foreground sm:px-6">
                  Kriterium / Anforderung
                </th>
                <th className="px-4 py-4 font-heading font-semibold text-destructive sm:px-6">
                  Klassische Agentur-Website
                </th>
                <th className="px-4 py-4 font-heading font-semibold text-primary sm:px-6">
                  asiaedits Handwerker-Lösung
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, index) => (
                <tr
                  key={row.criterion}
                  className={
                    index !== COMPARISON_ROWS.length - 1
                      ? 'border-b border-slate-800/60'
                      : ''
                  }
                >
                  <td className="px-4 py-4 font-medium text-foreground sm:px-6">
                    {row.criterion}
                  </td>
                  <td className="px-4 py-4 text-muted-foreground sm:px-6">
                    <span className="flex items-start gap-2">
                      <X className="mt-0.5 size-4 shrink-0 text-destructive" />
                      {row.agency}
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
