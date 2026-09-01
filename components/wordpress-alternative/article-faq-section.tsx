const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question:
      'Kann ich meine bestehenden Inhalte und Texte von WordPress übernehmen?',
    answer:
      'Ja, problemlos. Wir exportieren Deine bestehenden Texte, Bilder und Metadaten aus WordPress und übertragen sie strukturiert in die neue Next.js-Website. Dabei optimieren wir die Inhalte zusätzlich nach aktuellen WDF*IDF-Kriterien, damit Deine Rankings nicht nur erhalten bleiben, sondern sich langfristig weiter verbessern.',
  },
  {
    id: 'faq-2',
    question:
      'Wie passe ich später Texte oder Angebote an, wenn ich kein WordPress-Dashboard mehr habe?',
    answer:
      'Kleinere Anpassungen wie Texte, Preise oder Angebote übernehmen wir im Rahmen der Smart Subscription direkt und unkompliziert für Dich. Alternativ statten wir Dein Projekt auf Wunsch mit einem schlanken, headless Content-Management-System aus, über das Du zentrale Inhalte selbst pflegen kannst – ganz ohne die Sicherheitsrisiken eines klassischen CMS-Backends.',
  },
  {
    id: 'faq-3',
    question: 'Bleiben meine bisherigen Google-Rankings beim Umstieg erhalten?',
    answer:
      'Ja. Wir setzen konsequent auf technisches SEO nach Best Practices: korrekte 301-Weiterleitungen aller bestehenden URLs, identische oder verbesserte Meta-Struktur sowie eine aktuelle XML-Sitemap. In den allermeisten Fällen verbessern sich die Rankings durch die deutlich schnelleren Ladezeiten sogar zusätzlich.',
  },
]

export function ArticleFaqSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2
          id="faq-wordpress-alternative"
          className="text-balance font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Häufig gestellte Fragen (FAQ) zur WordPress Alternative
        </h2>

        <div className="mt-8 flex flex-col gap-4">
          {FAQ_ITEMS.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-border bg-card/60 p-6"
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
