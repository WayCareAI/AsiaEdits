import { Database, RefreshCw, ShieldAlert, Wallet } from 'lucide-react'

const PAIN_POINTS = [
  {
    icon: Database,
    title: 'Zähe Datenbankabfragen & Träge Serverantworten',
    description:
      'Jeder Seitenaufruf löst dutzende PHP- und MySQL-Abfragen aus. Das Ergebnis: hohe Time-to-First-Byte-Werte und ein spürbar langsames Nutzererlebnis, besonders auf mobilen Verbindungen.',
  },
  {
    icon: RefreshCw,
    title: 'Das gefährliche Plugin-Hamsterrad',
    description:
      'Für nahezu jede Funktion braucht es ein weiteres Drittanbieter-Plugin. Jedes Update kann Konflikte, weiße Bildschirme oder komplette Ausfälle verursachen – ein nie enden wollender Wartungskreislauf.',
  },
  {
    icon: ShieldAlert,
    title: 'Anhaltende Sicherheitslücken & Hacking-Gefahr',
    description:
      'WordPress betreibt weltweit über 40 % aller Websites – und ist damit das Lieblingsziel automatisierter Angriffe. Veraltete Plugins und Themes öffnen Hackern regelmäßig Tür und Tor.',
  },
  {
    icon: Wallet,
    title: 'Versteckte Folgekosten durch Agentur-Wartungsverträge',
    description:
      'Viele Agenturen verkaufen günstige Erstellung, kassieren aber dauerhaft über monatliche "Pflegepakete" für Updates, Backups und Sicherheitspatches, die eigentlich Grundvoraussetzung sein sollten.',
  },
]

export function PainPointsSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2
          id="das-problem-mit-wordpress"
          className="text-balance font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Das Problem mit klassischen Open-Source-Systemen: Der versteckte
          Wartungsfrust
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
          Seit der Veröffentlichung im Jahr 2003 hat sich WordPress zum
          meistgenutzten Content-Management-System der Welt entwickelt.
          Doch die zugrunde liegende Architektur stammt aus einer Zeit, in
          der Websites primär statische Blogs waren. Jeder Aufruf einer
          WordPress-Seite erfordert serverseitiges Rendering per PHP,
          zahlreiche Datenbankabfragen und das Laden von oft dutzenden
          Plugin-Skripten &ndash; ein architektonisches Limit, das sich mit
          steigendem Traffic und wachsender Funktionsvielfalt nur weiter
          verschärft – die Folge sind hohe Ladezeiten, ein wachsendes
          Sicherheitsrisiko und ein Wartungsaufwand, der viele
          Unternehmer:innen Monat für Monat unnötig Zeit und Geld kostet.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {PAIN_POINTS.map((point) => {
            const Icon = point.icon
            return (
              <div
                key={point.title}
                className="flex flex-col gap-3 rounded-2xl border border-border bg-card/60 p-6"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                  <Icon className="size-5" />
                </span>
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {point.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
