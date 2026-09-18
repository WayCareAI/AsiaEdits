import Link from 'next/link'

export function PseoFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-sm text-gray-500 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <p>&copy; {new Date().getFullYear()} asiaedits.com. Alle Rechte vorbehalten.</p>
        <nav className="flex flex-wrap items-center justify-center gap-6">
          <Link href="/impressum" className="transition-colors hover:text-gray-900">
            Impressum
          </Link>
          <Link href="/datenschutz" className="transition-colors hover:text-gray-900">
            Datenschutz
          </Link>
          <a href="mailto:john@asiaedits.com" className="transition-colors hover:text-gray-900">
            john@asiaedits.com
          </a>
        </nav>
      </div>
    </footer>
  )
}
