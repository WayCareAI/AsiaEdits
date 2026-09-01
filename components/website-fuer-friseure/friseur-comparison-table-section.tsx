import { Check, X } from 'lucide-react'

const ROWS = [
  {
    criterion: 'Mobile Ladezeit & Bildgalerien',
    classic: 'Zäh & ruckelnd (3–6 Sek.)',
    asiaedits: 'Ultra-schnell (< 0,5 Sek. Ladezeit)',
  },
  {
    criterion: 'Termin-Anfrageprozess',
    classic: 'Nur Telefonnummer im Impressum',
    asiaedits: 'Schlanke Webformulare & WhatsApp-Quick-Contact',
  },
  {
    criterion: 'Regionale Google-Sichtbarkeit',
    classic: 'Selten optimiert für Maps & Local SEO',
    asiaedits: 'Werkseitig optimiertes Local SEO für Ihre Stadt / Region',
  },
  {
    criterion: 'Präsentation von Spezialangeboten',
    classic: 'Unübersichtliche Fließtexte',
    asiaedits: 'Gezielte Landing-Bereiche für Brautstyling & Events',
  },
  {
    criterion: 'Wartung & Preisaktualisierungen',
    classic: 'Mühsames Selbst-Tippen im CMS',
    asiaedits: '0 % Stress: Preis- & Textänderungen in 12h erledigt',
  },
  {
    criterion: 'Preismodell & Kosten',
    classic: 'Hohe Agenturpreise + versteckte Gebühren',
    asiaedits: 'Fair & transparent: 199 €/Monat oder 699 € Buyout',
  },
]

export function FriseurComparisonTableSection() {
  return (
    <section className="border-t border-border py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2
          id="vergleich-friseur-websites"
          className="text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          Direkter Vergleich: Klassische Baukasten-Website vs. asiaedits
          Website für Friseure
        </h2>

        <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
          Die folgende Tabelle stellt die entscheidenden Leistungskriterien
          beider Lösungen gegenüber – von der mobilen Ladegeschwindigkeit
          über den Anfrage-Prozess bis zum transparenten Preismodell. So
          sehen Sie auf einen Blick, warum sich für Friseursalons der
          Umstieg auf eine moderne, speziell auf die Branche zugeschnittene
          Website-Lösung langfristig auszahlt und sich schon nach wenigen
          zusätzlichen Terminanfragen im Monat vollständig amortisiert.
        </p>

        <div className="mt-8 overflow-x-auto rounded-xl border border-slate-800">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-800 bg-card">
                <th className="px-4 py-4 font-heading font-semibold text-foreground sm:px-6">
                  Kriterium / Anforderung
                </th>
                <th className="px-4 py-4 font-heading font-semibold text-destructive sm:px-6">
                  Klassische Baukasten-Website
                </th>
                <th className="px-4 py-4 font-heading font-semibold text-primary sm:px-6">
                  asiaedits Friseur-Lösung
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, index) => (
                <tr
                  key={row.criterion}
                  className={
                    index % 2 === 0 ? 'bg-transparent' : 'bg-card/40'
                  }
                >
                  <td className="border-t border-slate-800 px-4 py-4 font-medium text-foreground sm:px-6">
                    {row.criterion}
                  </td>
                  <td className="border-t border-slate-800 px-4 py-4 text-muted-foreground sm:px-6">
                    <span className="flex items-start gap-2">
                      <X className="mt-0.5 size-4 shrink-0 text-destructive" />
                      {row.classic}
                    </span>
                  </td>
                  <td className="border-t border-slate-800 px-4 py-4 font-semibold text-foreground sm:px-6">
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
