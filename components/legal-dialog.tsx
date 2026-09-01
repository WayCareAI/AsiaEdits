'use client'

import * as React from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

type LegalTab = 'impressum' | 'datenschutz'

interface LegalDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  defaultTab: LegalTab
}

export function LegalDialog({ open, onOpenChange, defaultTab }: LegalDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85vh] w-full max-w-lg overflow-y-auto border border-white/10 bg-background/70 p-0 shadow-2xl backdrop-blur-xl sm:max-w-xl">
        <div className="p-5 sm:p-6">
          <DialogHeader>
            <DialogTitle className="font-heading text-lg">
              Rechtliche Informationen
            </DialogTitle>
            <DialogDescription>
              Angaben gemäß gesetzlichen Vorgaben zu asiaedits.com.
            </DialogDescription>
          </DialogHeader>

          <Tabs defaultValue={defaultTab} className="mt-5">
            <TabsList variant="line" className="w-full border-b border-border/60">
              <TabsTrigger value="impressum">Impressum / Legal</TabsTrigger>
              <TabsTrigger value="datenschutz">Datenschutz / Privacy</TabsTrigger>
            </TabsList>

            <TabsContent value="impressum" className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <section>
                <h3 className="font-heading text-sm font-semibold text-foreground">
                  Angaben gemäß § 5 TMG / Legal Notice
                </h3>
                <p className="mt-2">
                  LocITo Labs LLC
                  <br />
                  Registered in Delaware, USA
                </p>
              </section>
              <section>
                <h3 className="font-heading text-sm font-semibold text-foreground">Kontakt / Contact</h3>
                <p className="mt-2">
                  E-Mail:{' '}
                  <a href="mailto:john@asiaedits.com" className="text-primary hover:underline">
                    john@asiaedits.com
                  </a>
                </p>
              </section>
              <section>
                <h3 className="font-heading text-sm font-semibold text-foreground">
                  Haftungsausschluss
                </h3>
                <p className="mt-2">
                  Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die
                  Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich
                  deren Betreiber verantwortlich.
                </p>
              </section>
            </TabsContent>

            <TabsContent value="datenschutz" className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <section>
                <h3 className="font-heading text-sm font-semibold text-foreground">
                  Verantwortliche Stelle
                </h3>
                <p className="mt-2">
                  LocITo Labs LLC (Delaware, USA)
                  <br />
                  Kontakt:{' '}
                  <a href="mailto:john@asiaedits.com" className="text-primary hover:underline">
                    john@asiaedits.com
                  </a>
                </p>
              </section>
              <section>
                <h3 className="font-heading text-sm font-semibold text-foreground">
                  Erhebung und Verarbeitung von Daten
                </h3>
                <p className="mt-2">
                  Wir erheben und verarbeiten personenbezogene Daten nur, soweit dies für die
                  Bereitstellung dieser Website und die Bearbeitung von Anfragen erforderlich ist,
                  z. B. wenn Sie uns per E-Mail oder Kontaktformular kontaktieren.
                </p>
              </section>
              <section>
                <h3 className="font-heading text-sm font-semibold text-foreground">Cookies & Hosting</h3>
                <p className="mt-2">
                  Diese Website kann technisch notwendige Cookies verwenden, um grundlegende
                  Funktionen zu ermöglichen. Beim Besuch der Website werden zudem automatisch
                  Server-Logdaten (z. B. IP-Adresse, Browsertyp, Zugriffszeit) durch unseren
                  Hosting-Anbieter verarbeitet.
                </p>
              </section>
              <section>
                <h3 className="font-heading text-sm font-semibold text-foreground">Ihre Rechte</h3>
                <p className="mt-2">
                  Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung oder
                  Einschränkung der Verarbeitung Ihrer bei uns gespeicherten personenbezogenen
                  Daten. Kontaktieren Sie uns hierzu unter der oben genannten E-Mail-Adresse.
                </p>
              </section>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  )
}
