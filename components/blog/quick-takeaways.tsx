import { CheckCircle2, Zap } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

type QuickTakeawaysProps = {
  items: string[]
}

export function QuickTakeaways({ items }: QuickTakeawaysProps) {
  return (
    <section
      aria-labelledby="quick-takeaways-heading"
      className="relative px-4 pb-4 sm:px-6"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-primary/30 bg-card/50 p-6 shadow-glow backdrop-blur-md sm:p-8">
        <Badge
          variant="outline"
          className="h-auto border-primary/40 bg-primary/10 px-3 py-1 text-primary uppercase"
        >
          <Zap className="size-3.5" data-icon="inline-start" aria-hidden />
          Schnell-Überblick
        </Badge>
        <h2
          id="quick-takeaways-heading"
          className="mt-4 text-balance font-heading text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
        >
          Das Wichtigste in Kürze
        </h2>
        <ul className="mt-5 flex flex-col gap-3">
          {items.map((item) => (
            <li
              key={item}
              className="flex gap-3 leading-relaxed text-pretty text-muted-foreground"
            >
              <CheckCircle2
                className="mt-1 size-4 shrink-0 text-primary"
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
