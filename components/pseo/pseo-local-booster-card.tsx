import { MapPin, Braces, Target, Activity } from 'lucide-react'
import Link from 'next/link'

interface PseoLocalBoosterCardProps {
  heading: string
  focus: string
}

const BOOSTER_FEATURES = [
  {
    icon: MapPin,
    label: 'Google Maps & Local Pack Top-3',
  },
  {
    icon: Braces,
    label: 'Schema.org LocalBusiness Markup',
  },
  {
    icon: Target,
    label: 'WDF*IDF Entity-Mapping & Geo-Targeting',
  },
  {
    icon: Activity,
    label: 'Core Web Vitals & Speed Monitoring',
  },
]

export function PseoLocalBoosterCard({ heading, focus }: PseoLocalBoosterCardProps) {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-[#F9FAFB] p-8 sm:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600">
                <MapPin className="size-3.5" />
                SEO Local Booster Package
              </span>
              <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                {heading}
              </h2>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-gray-600 sm:text-base">
                {focus}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {BOOSTER_FEATURES.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700"
                  >
                    <Icon className="size-4 shrink-0 text-gray-400" />
                    {label}
                  </div>
                ))}
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
