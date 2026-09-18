import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

interface PseoLinksGridProps {
  heading: string
  description: string
  items: { label: string; sublabel?: string; href: string }[]
}

export function PseoLinksGrid({ heading, description, items }: PseoLinksGridProps) {
  if (items.length === 0) return null

  return (
    <section className="bg-[#F9FAFB] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <span className="text-sm font-medium tracking-wide text-gray-500 uppercase">
            In der Region
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-gray-600">
            {description}
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-50"
            >
              <span>
                <span className="block text-sm font-medium text-gray-900">
                  {item.label}
                </span>
                {item.sublabel && (
                  <span className="block text-xs text-gray-500">
                    {item.sublabel}
                  </span>
                )}
              </span>
              <ArrowUpRight className="size-4 shrink-0 text-gray-400 transition-colors group-hover:text-gray-900" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
