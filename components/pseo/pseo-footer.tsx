import Link from 'next/link'

export function PseoFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-sm text-muted-foreground sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <p>&copy; {new Date().getFullYear()} asiaedits.com. Alle Rechte vorbehalten.</p>
        <nav className="flex flex-wrap items-center justify-center gap-6">
          <Link href="/impressum" className="transition-colors hover:text-foreground">
            Impressum
          </Link>
          <Link href="/datenschutz" className="transition-colors hover:text-foreground">
            Datenschutz
          </Link>
          <a href="mailto:john@asiaedits.com" className="transition-colors hover:text-foreground">
            john@asiaedits.com
          </a>
        </nav>
      </div>
    </footer>
  )
}
