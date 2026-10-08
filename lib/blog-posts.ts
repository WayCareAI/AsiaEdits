export type BlogCluster =
  | 'pseo'
  | 'accessibility'
  | 'performance'
  | 'local'
  | 'conversion'

export type BlogPostMeta = {
  slug: string
  cluster: BlogCluster
  category: string
  title: string
  readingTime: string
}

export const CLUSTER_LABELS: Record<BlogCluster, string> = {
  pseo: 'Programmatic SEO',
  accessibility: 'Accessibility & Audio-UX',
  performance: 'Performance & KI-Readiness',
  local: 'Local SEO',
  conversion: 'Conversion UX',
}

export const COMPLEMENTARY_CLUSTERS: Record<BlogCluster, BlogCluster[]> = {
  pseo: ['local', 'performance'],
  accessibility: ['conversion', 'performance'],
  performance: ['accessibility', 'pseo'],
  local: ['pseo', 'conversion'],
  conversion: ['accessibility', 'local'],
}

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: 'case-study-saaraxt',
    cluster: 'local',
    category: 'Case Study & Local SEO',
    title: 'SaarAxt.de: +10% Lead Conversion & 9,2% CTR im Handwerk',
    readingTime: '6 min Lesezeit',
  },
  {
    slug: 'case-study-the-beach',
    cluster: 'accessibility',
    category: 'Case Study & Accessibility UX',
    title: 'The Beach Altersresidenz: +10% Lead Conversion durch Audio-UX',
    readingTime: '7 min Lesezeit',
  },
  {
    slug: 'b2b-englischer-suchmarkt-metropolen',
    cluster: 'pseo',
    category: 'B2B Strategie & SEO',
    title: 'Der unterschätzte B2B-Markt: Englische Suchanfragen in Metropolen',
    readingTime: '7 min Lesezeit',
  },
  {
    slug: 'barrierefreiheit-seo-booster',
    cluster: 'accessibility',
    category: 'SEO & Accessibility',
    title: 'Barrierefreiheit als SEO-Booster: Rankings 2026 steigern',
    readingTime: '7 min Lesezeit',
  },
  {
    slug: 'core-web-vitals-lcp-guide',
    cluster: 'performance',
    category: 'Web Performance & Tech SEO',
    title: 'Core Web Vitals 2026: LCP unter 1,0s im B2B erreichen',
    readingTime: '8 min Lesezeit',
  },
  {
    slug: 'google-local-pack-dominanz',
    cluster: 'local',
    category: 'Local SEO & Geo-Targeting',
    title: 'Local SEO 2026: Schema.org & Local Pack Dominanz',
    readingTime: '7 min Lesezeit',
  },
  {
    slug: 'keyword-dualismus-pseo-architektur',
    cluster: 'pseo',
    category: 'Programmatic SEO & Keyword-Strategie',
    title: 'Keyword-Dualismus im pSEO: Webdesign vs. Website',
    readingTime: '7 min Lesezeit',
  },
  {
    slug: 'b2b-conversion-ux-lead-pfade',
    cluster: 'conversion',
    category: 'Conversion UX & Architecture',
    title: 'B2B-Conversion-UX: Barrierefreie Lead-Pfade aufbauen',
    readingTime: '7 min Lesezeit',
  },
  {
    slug: 'llm-readiness-agentic-browsing',
    cluster: 'performance',
    category: 'AI Search & Agentic Browsing',
    title: 'LLM-Readiness & Agentic Browsing: KI-Agenten im B2B',
    readingTime: '8 min Lesezeit',
  },
  {
    slug: 'audio-ux-accessible-micro-interactions',
    cluster: 'accessibility',
    category: 'Audio UX & Accessibility',
    title: 'Audio-UX & Barrierefreie Micro-Interactions im B2B',
    readingTime: '7 min Lesezeit',
  },
  {
    slug: 'programmatic-seo-b2b-mittelstand',
    cluster: 'pseo',
    category: 'Programmatic SEO & Scale',
    title: 'Programmatic SEO im B2B-Mittelstand: 100+ Nischen skalieren',
    readingTime: '8 min Lesezeit',
  },
  {
    slug: 'b2c-buchungs-ux-frictionless-flows',
    cluster: 'conversion',
    category: 'B2C UX & Conversion',
    title: 'B2C Buchungs-UX: In 3 Klicks zum Termin',
    readingTime: '8 min Lesezeit',
  },
  {
    slug: 'programmatic-seo-b2b-skalieren',
    cluster: 'pseo',
    category: 'Programmatic SEO',
    title: 'Programmatic SEO im B2B skalieren',
    readingTime: 'Fachartikel',
  },
]

export function getRelatedPosts(
  currentSlug: string,
  cluster: BlogCluster,
  limit = 3,
): BlogPostMeta[] {
  const complementary = COMPLEMENTARY_CLUSTERS[cluster]

  const score = (post: BlogPostMeta) => {
    if (post.cluster === cluster) return 2
    if (complementary.includes(post.cluster)) return 1
    return 0
  }

  return BLOG_POSTS.filter((post) => post.slug !== currentSlug)
    .map((post, index) => ({ post, index, score: score(post) }))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, limit)
    .map(({ post }) => post)
}
