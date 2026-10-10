import Link from 'next/link'
import { Sparkles, ArrowRight } from 'lucide-react'
import { getGeoDirectAnswer } from '@/src/lib/pseo-data'

interface GeoDirectAnswerProps {
  slug: string
  /** Proper-cased name for city pages, so umlauts and "am Main" survive. */
  displayName?: string
}

export function GeoDirectAnswer({ slug, displayName }: GeoDirectAnswerProps) {
  const { text, targetPath, entityName } = getGeoDirectAnswer(slug, displayName)

  return (
    <section aria-label="KI-Zusammenfassung" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="my-8 max-w-3xl rounded-xl border border-border/80 bg-card/60 p-6 shadow-sm backdrop-blur-sm">
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              GEO Direct Answer / KI-Zusammenfassung
            </span>
          </div>
          <p className="text-sm font-medium leading-relaxed text-foreground/90 md:text-base">
            {text}
          </p>
          {targetPath && (
            <div className="mt-4 border-t border-border/40 pt-3">
              <Link
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-primary/80"
                href={targetPath}
              >
                Vertiefendes Haupt-Branchenangebot für {entityName} ansehen
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
