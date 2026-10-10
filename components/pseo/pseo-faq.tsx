import { ChevronDown } from 'lucide-react'

interface PseoFaqProps {
  heading: string
  intro: string
  items: { question: string; answer: string }[]
}

export function PseoFaq({ heading, intro, items }: PseoFaqProps) {
  return (
    <section id="faq" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-medium tracking-wide text-primary uppercase">
            FAQ & Garantien
          </span>
          <h2 className="mt-3 text-balance font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {heading}
          </h2>
          <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            {intro}
          </p>

          <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card/50">
            {items.map((item) => (
              <details key={item.question} className="group p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <ChevronDown
                    className="size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
