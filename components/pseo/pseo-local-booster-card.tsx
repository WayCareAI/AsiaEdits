import { MapPin, Braces, Target, Activity } from 'lucide-react'
import Link from 'next/link'

interface PseoLocalBoosterCardProps {
  title: string
  features: string[]
}

const FEATURE_ICONS = [MapPin, Braces, Target, Activity]

export function PseoLocalBoosterCard({ title, features }: PseoLocalBoosterCardProps) {
  return (
    <section className="bg-[#F9FAFB] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 sm:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-[#F9FAFB] px-3 py-1 text-xs font-medium text-gray-600">
                <MapPin className="size-3.5" />
                SEO Local Booster Package
              </span>
              <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                {title}
              </h2>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {features.map((feature, index) => {
                  const Icon = FEATURE_ICONS[index % FEATURE_ICONS.length]
                  return (
                    <div
                      key={feature}
                      className="flex items-start gap-2 rounded-lg border border-gray-200 bg-[#F9FAFB] px-3 py-2 text-sm text-gray-700"
                    >
                      <Icon className="mt-0.5 size-4 shrink-0 text-gray-400" />
                      {feature}
                    </div>
                  )
                })}
              </div>
            </div>

            <Link
              href="#angebot-anfordern"
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-lg bg-gray-900 px-6 text-sm font-medium text-white transition-colors hover:bg-gray-800"
            >
              SEO Local Booster aktivieren
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
