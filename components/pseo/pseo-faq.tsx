import { ChevronDown } from 'lucide-react'

interface PseoFaqProps {
  heading: string
  intro: string
  items: { question: string; answer: string }[]
}

export function PseoFaq({ heading, intro, items }: PseoFaqProps) {
  return (
    <section id="faq" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-medium tracking-wide text-gray-500 uppercase">
            FAQ & Garantien
          </span>
          <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            {heading}
          </h2>
          <p className="mt-4 text-pretty text-sm leading-relaxed text-gray-600 sm:text-base">
            {intro}
          </p>

          <div className="mt-8 divide-y divide-gray-200 rounded-2xl border border-gray-200">
            {items.map((item) => (
              <details key={item.question} className="group p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-gray-900 [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <ChevronDown
                    className="size-5 shrink-0 text-gray-500 transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-gray-600 sm:text-base">
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
