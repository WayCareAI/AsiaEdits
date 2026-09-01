const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question:
      'Wie lange dauert es, bis meine neue Website für Handwerker online ist?',
    answer:
      'In der Regel 5 bis 7 Werktage. Nach dem kurzen Erstgespräch erstellen wir zunächst den Entwurf, stimmen Inhalte und Struktur mit Ihnen ab und veröffentlichen die fertige Website anschließend zeitnah auf Ihrer eigenen Domain.',
  },
  {
    id: 'faq-2',
    question: 'Muss ich Texte und Fotos für die Website selbst anliefern?',
    answer:
      'Nein, wir optimieren bestehendes Material oder erstellen branchenspezifische Entwürfe. Sie müssen weder Texte selbst formulieren noch aufwendige Fotoshootings organisieren – wir übernehmen die inhaltliche und gestalterische Ausarbeitung für Sie.',
  },
  {
    id: 'faq-3',
    question:
      'Kann die Website für Handwerker auch zur Mitarbeitergewinnung (Recruiting) genutzt werden?',
    answer:
      'Ja, wir binden auf Wunsch einfache Quick-Bewerbungsformulare ein. So können sich Fachkräfte und Azubis direkt über Ihre Website bewerben, ohne einen vollständigen Lebenslauf hochladen zu müssen – das senkt die Einstiegshürde deutlich.',
  },
]

export function HandwerkerFaqSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2
          id="faq-handwerker-website"
          className="text-balance font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Häufig gestellte Fragen (FAQ) zur Website für Handwerker
        </h2>

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
