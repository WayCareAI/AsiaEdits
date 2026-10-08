import { Calendar, Clock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

type CaseStudyHeroProps = {
  title: string
  category: string
  readTime: string
  publishDate: string
}

export function CaseStudyHero({
  title,
  category,
  readTime,
  publishDate,
}: CaseStudyHeroProps) {
  return (
    <section className="relative max-w-full overflow-hidden pt-32 pb-10 sm:pt-40 sm:pb-14">
      <div
        aria-hidden
        className="pointer-events-none absolute top-[-10%] left-1/2 h-[420px] w-[720px] -translate-x-1/2 overflow-hidden rounded-full bg-primary/20 blur-[120px] [contain:strict]"
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Badge
          variant="outline"
          className="h-auto max-w-full border-primary/40 bg-primary/5 px-4 py-1.5 text-center whitespace-normal text-primary shadow-[0_0_20px_-6px_rgba(56,189,248,0.7)]"
        >
          {category}
        </Badge>

        <h1 className="mt-6 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <li className="flex items-center gap-2">
            <Calendar className="size-4 text-primary" aria-hidden />
            <time>{publishDate}</time>
          </li>
          <li className="flex items-center gap-2">
            <Clock className="size-4 text-primary" aria-hidden />
            <span>{readTime} Lesezeit</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
