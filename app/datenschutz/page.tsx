import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function DatenschutzPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-4 py-20 sm:px-6">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Zurück zur Startseite
      </Link>
      <h1 className="mt-8 font-heading text-3xl font-semibold text-foreground">
        Datenschutzerklärung
      </h1>
      <div className="mt-8 flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
        <p>
          Wir nehmen den Schutz Deiner persönlichen Daten sehr ernst und
          behandeln Deine personenbezogenen Daten vertraulich und
          entsprechend der gesetzlichen Datenschutzvorschriften.
        </p>
        <p>
          Bei Fragen zum Datenschutz kontaktiere uns jederzeit unter{' '}
          <a href="mailto:hallo@asiaedits.com" className="text-primary">
            hallo@asiaedits.com
          </a>
          .
        </p>
      </div>
    </main>
  )
}
