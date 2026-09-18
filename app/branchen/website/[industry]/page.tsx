import type { Metadata } from 'next'
import { getAllIndustrySlugs } from '@/src/data/pseoDatabase'
import { buildIndustryMetadata } from '@/src/lib/industryMetadata'
import { IndustryLandingPage } from '@/components/pseo/industry-landing-page'

interface PageProps {
  params: Promise<{ industry: string }>
}

export function generateStaticParams() {
  return getAllIndustrySlugs().map((industry) => ({ industry }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { industry } = await params
  return buildIndustryMetadata(industry, 'website')
}

export default async function BranchenWebsiteIndustryPage({ params }: PageProps) {
  const { industry } = await params
  return <IndustryLandingPage industrySlug={industry} keywordType="website" />
}
