import { Check, X } from 'lucide-react'

const COMPARISON_ROWS = [
  {
    criterion: 'Investitionsmodell',
    agency: 'Oft ab 3.500 € bis 8.500 €+ (Einmalkosten oder Laufzeitverträge)',
    asiaedits: 'Fair & Transparent: 199 €/Monat (Managed Abo) oder 699 € Buyout',
  },
  {
    criterion: 'Performance & Ladezeit',
    agency: 'Je nach CMS schwankend (3-5 Sek.)',
    asiaedits: 'Mit 90/100 PageSpeed-Garantie (< 0,5 Sek. Ladezeit)',
  },
  {
    criterion: 'Patienten-Anfrageprozess',
    agency: 'Meist Standard-Kontaktformular oder teure Drittanbieter-Tools',
    asiaedits: 'Schlanke Webformulare & WhatsApp-Quick-Contact direkt integriert',
  },
  {
    criterion: 'Erweiterte Praxis-Module',
    agency: 'Anamnesebogen & Recruiting oft mit hohen Aufpreisen',
    asiaedits: 'Integrierte Module für Neupatienten-Anamnese & ZFA-Expressbewerbung',
  },
  {
    criterion: 'Regionale Google-Sichtbarkeit',
    agency: 'Optional oder nach Aufwand',
    asiaedits: 'Werkseitig optimiertes Local SEO für Ihre Region',
  },
  {
    criterion: 'Wartung & Inhaltsänderungen',
    agency: 'Eigenpflege im CMS oder Stundensätze',
    asiaedits: '0 % Stress: Urlaubs- & Textänderungen in 12h per WhatsApp erledigt',
  },
]

export function ZahnarztComparisonTableSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2
          id="vergleich-zahnarzt-websites"
          className="text-balance font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Vergleich der Ansätze: Klassisches Agentur-Webdesign vs.
          asiaedits Zahnarzt-Lösung
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
          Die folgende Tabelle stellt die entscheidenden
          Leistungskriterien beider Lösungen gegenüber – von der
          Investitionshöhe über den Patienten-Anfrageprozess bis zur
          regionalen Google-Sichtbarkeit. So sehen Sie auf einen Blick,
          warum sich für Zahnarztpraxen der Umstieg auf eine moderne,
          speziell auf die Branche zugeschnittene Website-Lösung
          langfristig auszahlt und sich schon nach wenigen zusätzlichen
          Neupatienten im Monat vollständig amortisiert.
        </p>

        <div className="mt-8 w-full max-w-full overflow-x-auto rounded-xl border border-slate-800">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-800 bg-card/60">
                <th className="px-4 py-4 font-heading font-semibold text-foreground sm:px-6">
                  Kriterium / Anforderung
                </th>
                <th className="px-4 py-4 font-heading font-semibold text-destructive sm:px-6">
                  Klassisches Agentur-Webdesign
                </th>
                <th className="px-4 py-4 font-heading font-semibold text-primary sm:px-6">
                  asiaedits Zahnarzt-Lösung
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
