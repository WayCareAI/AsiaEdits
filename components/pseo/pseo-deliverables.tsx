import { Accessibility, Code2, MapPin, Target, type LucideIcon } from 'lucide-react'

const ICONS: LucideIcon[] = [Code2, MapPin, Accessibility, Target]

interface PseoDeliverablesProps {
  heading: string
  intro: string
  outro: string
  items: { title: string; description: string }[]
}

export function PseoDeliverables({ heading, intro, outro, items }: PseoDeliverablesProps) {
  return (
    <section className="border-y border-border bg-card/30 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-medium tracking-wide text-primary uppercase">
            Leistungsumfang
          </span>
          <h2 className="mt-3 text-balance font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {heading}
          </h2>
          <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            {intro}
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {items.map((item, index) => {
            const Icon = ICONS[index % ICONS.length]
            return (
              <li key={item.title} className="rounded-2xl border border-border bg-card/50 p-6">
                <span className="flex size-10 items-center justify-center rounded-lg border border-primary/40 bg-primary/5 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </li>
            )
          })}
        </ul>

        <p className="mt-8 max-w-3xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          {outro}
        </p>
      </div>
    </section>
  )
}
