'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const ProjectRequestDialog = dynamic(() =>
  import('@/components/project-request-dialog').then(
    (mod) => mod.ProjectRequestDialog,
  ),
)

const NAV_LINKS = [
  { href: '#warum-wir', label: 'Warum wir' },
  { href: '#workflow', label: 'Workflow' },
  { href: '#referenzen', label: 'Referenzen' },
  { href: '#preise', label: 'Preise' },
  { href: '#faq', label: 'FAQ' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#top" className="flex items-center gap-2">
          <Image
            src="/icon.png"
            alt="asiaedits.com Logo"
            width={32}
            height={32}
            priority
            className="mr-2 h-6 w-6 shrink-0"
          />
          <span className="relative flex size-2 shrink-0">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
            <span className="relative inline-flex size-2 rounded-full bg-primary shadow-[0_0_10px_2px_rgba(56,189,248,0.8)]" />
          </span>
          <span className="whitespace-nowrap font-heading text-lg font-semibold tracking-tight text-foreground">
            asiaedits<span className="text-primary">.com</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ProjectRequestDialog>
            <Button className="bg-primary text-primary-foreground shadow-[0_0_24px_-4px_rgba(56,189,248,0.7)] hover:bg-primary/90">
              Projekt anfragen
            </Button>
          </ProjectRequestDialog>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg border border-border p-2 text-foreground lg:hidden"
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={cn(
          'grid overflow-hidden border-b border-border/60 bg-background transition-[grid-template-rows] duration-300 lg:hidden',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="min-h-0">
          <nav className="flex flex-col gap-1 px-4 py-4 sm:px-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <ProjectRequestDialog>
              <Button
                onClick={() => setOpen(false)}
                className="mt-2 justify-center bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Projekt anfragen
              </Button>
            </ProjectRequestDialog>
          </nav>
        </div>
      </div>
    </header>
  )
}
