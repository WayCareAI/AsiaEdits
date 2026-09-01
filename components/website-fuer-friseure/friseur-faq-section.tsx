const FAQS = [
  {
    id: 'faq-1',
    question: 'Wie funktionieren die Webformulare für Terminanfragen?',
    answer:
      'Kunden wählen einfach die gewünschte Dienstleistung, geben Wunschtag & Kontaktdaten ein und senden das Formular ab. Die Anfrage landet sofort per E-Mail oder WhatsApp auf Ihrem Telefon.',
  },
  {
    id: 'faq-2',
    question:
      'Brauche ich eine teure Zusatz-Software für die Terminanfragen?',
    answer:
      'Nein, absolut nicht! Bei asiaedits ist alles direkt schlüsselfertig integriert. Ihre Kunden fragen Termine über einfache Webformulare oder per WhatsApp an – ohne monatliche Zusatzgebühren für externe Buchungstools.',
  },
  {
    id: 'faq-3',
    question: 'Wie schnell ist die neue Friseur-Website online?',
    answer: 'In der Regel innerhalb von 5 bis 7 Werktagen.',
  },
]

export function FriseurFaqSection() {
  return (
    <section className="border-t border-border py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2
          id="faq-friseur-website"
          className="text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          Häufig gestellte Fragen (FAQ) zur Website für Friseure
        </h2>

        <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
          Hier finden Sie Antworten auf die Fragen, die uns Friseursalons
          und Barber Shops vor der Beauftragung am häufigsten stellen –
          von der technischen Umsetzung bis zur konkreten Umsetzungsdauer.
        </p>

        <div className="mt-8 space-y-4">
          {FAQS.map((faq) => (
            <div
              key={faq.id}
              className="rounded-xl border border-slate-800 bg-card p-6"
            >
              <h3
                id={faq.id}
                className="font-heading text-lg font-semibold text-foreground"
              >
                {faq.question}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
