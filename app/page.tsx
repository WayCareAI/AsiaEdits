import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { SpeedCheckSection } from '@/components/speed-check-section'
import { WhySection } from '@/components/why-section'
import { HowSection } from '@/components/how-section'
import { PricingSection } from '@/components/pricing-section'
import { GbpBenefitSection } from '@/components/gbp-benefit-section'
import { ShowcaseSection } from '@/components/showcase-section'
import { FaqSection } from '@/components/faq-section'
import { SiteFooter } from '@/components/site-footer'
import { ScrollTopOnLogoNav } from '@/components/scroll-top-on-logo-nav'

export default function Page() {
  return (
    <>
      <ScrollTopOnLogoNav />
      <SiteHeader />
      <main className="relative w-full max-w-full overflow-x-hidden">
        <HeroSection />
        <SpeedCheckSection />
        <WhySection />
        <HowSection />
        <PricingSection />
        <GbpBenefitSection />
        <ShowcaseSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </>
  )
}
