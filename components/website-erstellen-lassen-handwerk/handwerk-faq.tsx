import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const HANDWERK_FAQ_ITEMS = [
  {
    question: 'Warum ist eine schnelle Website für Handwerker so wichtig?',
    answer:
      'Über 70 % der Kunden suchen Handwerker spontan über das Smartphone (oft direkt von unterwegs oder der Baustelle). Wenn die Website träge lädt, springt der Kunde sofort zum nächsten Betrieb ab.',
  },
  {
    question: 'Hilft mir die Website auch bei der Mitarbeitersuche (Recruiting)?',
    answer:
      'Ja! Ein moderner, blitzschneller Auftritt wirkt hochprofessionell auf Bewerber. Über einfache Schnell-Bewerbungsformulare können sich Fachkräfte direkt per Handy bei Dir melden.',
  },
  {
    question:
      'Ist das Google Maps Profil (Google Business) für Handwerker integriert?',
    answer:
      'Ja, wir verknüpfen Deine neue Website direkt mit Deinem Google Business Profile, damit Du bei lokalen Suchanfragen („Elektriker in meiner Nähe“) ganz oben auf der Karte erscheinst.',
  },
  {
    question: 'Welche Kosten entstehen für meine Handwerker-Website?',
    answer:
      'Du hast die Wahl: Entweder flexibel ab 199 € Setup + 39 €/Monat (Website-as-a-Service) oder als Einmalkauf für 699 € inkl. 24 Monaten Hosting – komplett ohne versteckte Zusatzkosten.',
  },
]

export function HandwerkFaq() {
  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-medium tracking-wide text-primary uppercase">
            FAQ
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Häufige Fragen von Handwerksbetrieben
          </h2>
        </div>

        <div className="mt-10">
          <Accordion multiple>
            {HANDWERK_FAQ_ITEMS.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
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
