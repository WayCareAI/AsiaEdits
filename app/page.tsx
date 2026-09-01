import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { SpeedCheckSection } from '@/components/speed-check-section'
import { WhySection } from '@/components/why-section'
import { HowSection } from '@/components/how-section'
import { PricingSection } from '@/components/pricing-section'
import { ShowcaseSection } from '@/components/showcase-section'
import { FaqSection } from '@/components/faq-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="relative w-full max-w-full overflow-x-hidden">
        <HeroSection />
        <SpeedCheckSection />
        <WhySection />
        <HowSection />
        <PricingSection />
        <ShowcaseSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </>
  )
}
