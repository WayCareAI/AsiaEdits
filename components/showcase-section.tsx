import Image from 'next/image'
import { Gauge, ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const SHOWCASE_ITEMS = [
  {
    preview: '/preview-saaraxt.jpg',
    title: 'SaarAxt',
    domain: 'saaraxt.de',
    url: 'https://saaraxt.de/',
    category: 'Event & Freizeit',
    score: '98/100 Speed',
    description:
      'Modernes UI-Redesign mit fokussierter User-Leadership, optimierten Ladezeiten und intuitiver Buchungs-Integration.',
    tags: ['Next.js', 'High-Speed', 'SEO-Optimiert'],
  },
  {
    preview: '/preview-thebeach.jpg',
    title: 'The Beach Altersresidenz',
    domain: 'thebeach-altersresidenzthailand.ch',
    url: 'https://thebeach-altersresidenzthailand.ch/',
    category: 'Hospitality & Senior Living',
    score: '96/100 Speed',
    description:
      'Visuell beeindruckende Brand-Landingpage für exklusives Wohnen im Alter mit blitzschneller Performance & Barrierefreiheit.',
    tags: ['Tailwind CSS', 'Mobile-First', 'UX Design'],
  },
]

export function ShowcaseSection() {
  return (
    <section id="referenzen" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium tracking-wide text-primary uppercase">
            Referenzen
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Live-Demos, die für sich sprechen.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Echte Projekte, echte Ergebnisse – im Google Grünen Bereich
            performant, über alle Branchen hinweg.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {SHOWCASE_ITEMS.map((item) => (
            <div
              key={item.title}
              className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card/60 transition-colors hover:border-primary/40"
            >
              <div className="relative aspect-video overflow-hidden border-b border-slate-800 bg-slate-950">
                <Image
                  src={item.preview || '/placeholder.svg'}
                  alt={`Website-Vorschau von ${item.title}`}
                  fill
                  className="h-full w-full object-cover object-top"
                />
                <Badge className="absolute top-3 right-3 gap-1 border border-primary/30 bg-background/80 px-2.5 py-1 text-primary backdrop-blur-sm">
                  <Gauge className="size-3" />
                  {item.score}
                </Badge>
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener"
                      className="hover:text-primary"
                    >
                      {item.title}
                    </a>
                    <span className="mt-0.5 block text-sm font-normal text-muted-foreground">
                      {item.domain}
                    </span>
                  </h3>
                  <Badge
                    variant="outline"
                    className="shrink-0 border-border text-muted-foreground"
                  >
                    {item.category}
                  </Badge>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-primary/20 bg-primary/5 text-xs text-primary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80"
                >
                  Live-Website ansehen
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
