import { ArrowRight, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

interface PseoHeroProps {
  eyebrow: string
  title: string
  painPoint: string
  badges: string[]
}

export function PseoHero({ eyebrow, title, painPoint, badges }: PseoHeroProps) {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-medium tracking-wide text-gray-500 uppercase">
            {eyebrow}
          </span>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            {title}
          </h1>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4">
            <AlertTriangle className="mt-0.5 size-5 shrink-0 text-gray-400" />
            <p className="text-pretty text-sm leading-relaxed text-gray-600">
              {painPoint}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {Array.from(new Set(badges)).map((badge, index) => (
              <span
                key={`${badge}-${index}`}
                className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#angebot-anfordern"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-gray-900 px-6 text-sm font-medium text-white transition-colors hover:bg-gray-800"
            >
              Kostenloses Angebot anfordern
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="#technische-vorteile"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-200 bg-white px-6 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50"
            >
              Technische Vorteile ansehen
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
