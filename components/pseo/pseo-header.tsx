import Link from 'next/link'
import { PageSpeedBadge } from '@/components/pseo/pagespeed-badge'

export function PseoHeader() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-heading text-lg font-semibold tracking-tight text-foreground">
            asiaedits<span className="text-muted-foreground">.com</span>
          </span>
        </Link>

        <div className="hidden sm:block">
          <PageSpeedBadge />
        </div>

        <Link
          href="#angebot-anfordern"
          className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          Angebot anfordern
        </Link>
      </div>
    </header>
  )
}
