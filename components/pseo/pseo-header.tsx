import Link from 'next/link'
import { PageSpeedBadge } from '@/components/pseo/pagespeed-badge'

export function PseoHeader() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-heading text-lg font-semibold tracking-tight text-gray-900">
            asiaedits<span className="text-gray-400">.com</span>
          </span>
        </Link>

        <div className="hidden sm:block">
          <PageSpeedBadge />
        </div>

        <Link
          href="#angebot-anfordern"
          className="inline-flex h-10 items-center justify-center rounded-lg bg-gray-900 px-4 text-sm font-medium text-white transition-colors hover:bg-gray-800"
        >
          Angebot anfordern
        </Link>
      </div>
    </header>
  )
}
