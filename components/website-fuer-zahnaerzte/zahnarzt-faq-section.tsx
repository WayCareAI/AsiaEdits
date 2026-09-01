const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: 'Wie funktionieren die Webformulare für Patientenanfragen?',
    answer:
      'Patienten wählen einfach die gewünschte Behandlungsart, geben Wunschtag & Kontaktdaten ein und senden das Formular ab.',
  },
  {
    id: 'faq-2',
    question: 'Kann ein digitaler Anamnesebogen eingebunden werden?',
    answer:
      'Ja! Wir binden auf Wunsch ein strukturiertes Online-Anamneseformular ein, das Neupatienten bequem vorab ausfüllen können.',
  },
  {
    id: 'faq-3',
    question:
      'Bieten Sie auch Lösungen zur Mitarbeitergewinnung (Recruiting) an?',
    answer:
      'Ja. Über eine integrierte 1-Klick-Expressbewerbung können sich ZFA und Fachkräfte in unter einer Minute bewerben.',
  },
  {
    id: 'faq-4',
    question: 'Wie schnell ist die neue Zahnarzt-Website online?',
    answer: 'In der Regel innerhalb von 5 bis 7 Werktagen.',
  },
]

export function ZahnarztFaqSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2
          id="faq-zahnarzt-website"
          className="text-balance font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Häufig gestellte Fragen (FAQ) zur Website für Zahnärzte
        </h2>

        <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
          Hier finden Sie Antworten auf die Fragen, die uns Zahnarztpraxen
          und Kieferorthopäden vor der Beauftragung am häufigsten stellen
          – von der technischen Umsetzung über die Einbindung digitaler
          Praxis-Module bis zur konkreten Umsetzungsdauer. Sollten weitere
          Fragen offenbleiben, stehen wir Ihnen im persönlichen Erstgespräch
          jederzeit gerne zur Verfügung.
        </p>

        <div className="mt-8 flex flex-col gap-4">
          {FAQ_ITEMS.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-slate-800 bg-card/60 p-6"
            >
              <h3
                id={item.id}
                className="font-heading text-base font-semibold text-foreground"
              >
                {item.question}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
