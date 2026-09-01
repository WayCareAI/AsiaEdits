'use client'

import * as React from 'react'
import dynamic from 'next/dynamic'
import { FacebookIcon, InstagramIcon, TikTokIcon } from '@/components/social-icons'

const LegalDialog = dynamic(() =>
  import('@/components/legal-dialog').then((mod) => mod.LegalDialog),
)

const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1Bp5PYhZmK/',
    Icon: FacebookIcon,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/asia.edits.asia?igsi=MWdoNzZvODBpOG1hMw==',
    Icon: InstagramIcon,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@asia.edits.asia?_r=1&_t=ZG-99DcuX7dv8q',
    Icon: TikTokIcon,
  },
]

export function SiteFooter() {
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [defaultTab, setDefaultTab] = React.useState<'impressum' | 'datenschutz'>('impressum')

  function openDialog(tab: 'impressum' | 'datenschutz') {
    setDefaultTab(tab)
    setDialogOpen(true)
  }

  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-sm text-muted-foreground sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:w-full sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} asiaedits.com. Alle Rechte vorbehalten.</p>
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => openDialog('impressum')}
              className="text-muted-foreground/70 transition-colors hover:text-foreground"
            >
              Impressum / Legal
            </button>
            <button
              type="button"
              onClick={() => openDialog('datenschutz')}
              className="text-muted-foreground/70 transition-colors hover:text-foreground"
            >
              Datenschutz / Privacy
            </button>
            <a
              href="mailto:john@asiaedits.com"
              className="transition-colors hover:text-foreground"
            >
              john@asiaedits.com
            </a>
          </nav>
        </div>

        <div className="flex flex-col items-center gap-3 border-t border-border/40 pt-6 sm:w-full">
          <span className="text-xs font-medium tracking-wide text-muted-foreground/70 uppercase">
            Folge uns
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="rounded-lg border border-slate-800 bg-slate-900/60 p-2.5 text-slate-400 transition-colors duration-200 hover:border-cyan-500/40 hover:text-cyan-400"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <LegalDialog open={dialogOpen} onOpenChange={setDialogOpen} defaultTab={defaultTab} />
    </footer>
  )
}
