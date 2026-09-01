import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const FAQ_ITEMS = [
  {
    question: 'Ist die SEO-Optimierung wirklich bei jedem Paket inklusive?',
    answer:
      'Ja, absolut. Wir übergeben keine leere Hülle. Jede von uns erstellte Website enthält von Grund auf eine vollständige On-Page-SEO-Struktur: sauber strukturierte HTML-Headings (H1–H3), suchmaschinenrelevante Meta-Titles, Meta-Descriptions, OpenGraph-Tags für Social Media sowie eine WDF*IDF-optimierte Textarchitektur basierend auf aktuellen Keyword-Analysen.',
  },
  {
    question:
      'Warum ist High-Speed Cloud-Hosting besser als herkömmliches Web-Hosting?',
    answer:
      'Traditionelles Webhosting setzt oft auf veraltete Monolithen-Systeme und überlastete Server, was zu trägen Ladezeiten und Sicherheitsrisiken führt. Unser modernes Cloud-Hosting verarbeitet Inhalte weltweit über globale Edge-Netzwerke. Das Ergebnis: Extreme Ladezeiten von unter 0,5 Sekunden, einen garantierten Google Grünen Bereich (90+) bei den Core Web Vitals und höchste Ausfallsicherheit – ganz ohne Wartungsaufwand.',
  },
  {
    question:
      'Was passiert nach den 24 Monaten kostenlosem Hosting im Buyout-Paket?',
    answer:
      'Keine versteckten Kosten oder böse Überraschungen. Nach Ablauf der ersten 24 Monate verlängert sich das High-Speed Cloud-Hosting ganz flexibel für extrem faire 19 € pro Jahr. Damit decken wir die reinen Server- und Infrastrukturkosten ab, damit Deine Seite dauerhaft ultraschnell online bleibt.',
  },
  {
    question: 'Erhalte ich Zugriff auf den Quellcode meiner Website?',
    answer:
      'Ja. Bei unserem One-Time Buyout Paket übergeben wir Dir das vollständige Quellcode-Repository per Git-Übergabe. Die Website gehört damit zu 100 % Dir – vollständig transparent und ohne Abhängigkeit von uns. Beim Smart-Subscription-Modell übernehmen wir die komplette technische Verwaltung und Pflege für Dich, sodass Du Dich um absolut nichts kümmern musst.',
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium tracking-wide text-primary uppercase">
            FAQ
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Häufig gestellte Fragen
          </h2>
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-card/60 px-6 sm:px-8">
          <Accordion multiple>
            {FAQ_ITEMS.map((item) => (
              <AccordionItem
                key={item.question}
                value={item.question}
                className="border-border"
              >
                <AccordionTrigger className="py-5 font-heading text-base font-medium text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
