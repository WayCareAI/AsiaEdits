import { CircleAlert, CircleCheck } from 'lucide-react'

export function HandwerkProblemSolution() {
  return (
    <section
      aria-labelledby="problem-loesung"
      className="relative pb-16 sm:pb-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2
          id="problem-loesung"
          className="mx-auto max-w-2xl text-center text-balance font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Was Handwerker-Websites heute ausbremst – und wie wir es lösen
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <article className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 sm:p-8">
            <CircleAlert aria-hidden className="size-6 text-muted-foreground" />
            <h3 className="font-heading text-xl font-semibold text-foreground">
              Problem im Handwerk
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              Viele Handwerker-Websites laden langsam auf Smartphones, haben
              keine lokale Sichtbarkeit bei Google Maps und bieten keine
              einfache Kontaktaufnahme für Kunden.
            </p>
          </article>

          <article className="flex flex-col gap-4 rounded-2xl border border-primary/40 bg-gradient-to-b from-primary/[0.08] to-card p-6 sm:p-8">
            <CircleCheck aria-hidden className="size-6 text-primary" />
            <h3 className="font-heading text-xl font-semibold text-foreground">
              Die AsiaEdits Lösung
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              High-Speed Mobil-Ladezeiten (&lt; 0,8 Sek.), schlüsselfertige
              Google Business Profile Anbindung für lokale „in meiner
              Nähe“-Anfragen und einfache Anfrage-Formulare direkt im
              Blickfeld.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
