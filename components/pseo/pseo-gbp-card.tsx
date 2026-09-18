import { MapPin, Star, TrendingUp } from 'lucide-react'
import Link from 'next/link'

interface PseoGbpCardProps {
  heading: string
  focus: string
}

export function PseoGbpCard({ heading, focus }: PseoGbpCardProps) {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-[#F9FAFB] p-8 sm:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600">
                <MapPin className="size-3.5" />
                Local Booster GBP Automator
              </span>
              <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                {heading}
              </h2>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-gray-600 sm:text-base">
                {focus}
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700">
                  <Star className="size-4 text-gray-400" />
                  Automatisches Bewertungsmanagement
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700">
                  <TrendingUp className="size-4 text-gray-400" />
                  Höhere Sichtbarkeit im Local Map Pack
                </div>
              </div>
            </div>

            <Link
              href="#angebot-anfordern"
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-lg bg-gray-900 px-6 text-sm font-medium text-white transition-colors hover:bg-gray-800"
            >
              Local Booster aktivieren
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
