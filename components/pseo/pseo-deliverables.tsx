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
    <section className="bg-[#F9FAFB] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-medium tracking-wide text-gray-500 uppercase">
            Leistungsumfang
          </span>
          <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            {heading}
          </h2>
          <p className="mt-4 text-pretty text-sm leading-relaxed text-gray-600 sm:text-base">
            {intro}
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {items.map((item, index) => {
            const Icon = ICONS[index % ICONS.length]
            return (
              <li key={item.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                <span className="flex size-10 items-center justify-center rounded-lg bg-gray-100 text-gray-900">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
              </li>
            )
          })}
        </ul>

        <p className="mt-8 max-w-3xl text-pretty text-sm leading-relaxed text-gray-600 sm:text-base">
          {outro}
        </p>
      </div>
    </section>
  )
}
