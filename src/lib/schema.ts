export const SITE_URL = 'https://asiaedits.com'

const ORGANIZATION_NAME = 'AsiaEdits'
const LOGO_URL = `${SITE_URL}/icon.png`
const DEFAULT_IMAGE_URL = `${SITE_URL}/opengraph-image.png`

export type BreadcrumbCrumb = {
  name: string
  /** Absolute URL or site-relative path such as `/blog`. */
  path: string
}

function toAbsoluteUrl(pathOrUrl: string): string {
  return pathOrUrl.startsWith('http') ? pathOrUrl : `${SITE_URL}${pathOrUrl}`
}

/**
 * Builds a BreadcrumbList. "Home" is always prepended as position 1, so
 * callers only pass the trail below the homepage.
 */
export function buildBreadcrumbList(trail: BreadcrumbCrumb[]) {
  const crumbs: BreadcrumbCrumb[] = [{ name: 'Home', path: SITE_URL }, ...trail]

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: toAbsoluteUrl(crumb.path),
    })),
  }
}

export type TechArticleInput = {
  headline: string
  description: string
  url: string
}

/** Node for use inside an `@graph`, so it carries no `@context` of its own. */
export function buildTechArticle({ headline, description, url }: TechArticleInput) {
  return {
    '@type': 'TechArticle',
    headline,
    description,
    url,
    mainEntityOfPage: url,
    inLanguage: 'de-DE',
    author: {
      '@type': 'Organization',
      name: ORGANIZATION_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: ORGANIZATION_NAME,
      logo: {
        '@type': 'ImageObject',
        url: LOGO_URL,
      },
    },
  }
}

export type ServiceInput = {
  name: string
  description: string
  url: string
  /** Free-text service category, e.g. "Webdesign". */
  serviceType: string
  /** Human-readable area, e.g. a city name or "Deutschland". */
  areaServed: string
}

/** Node for use inside an `@graph`, so it carries no `@context` of its own. */
export function buildService({ name, description, url, serviceType, areaServed }: ServiceInput) {
  return {
    '@type': 'Service',
    name,
    description,
    url,
    serviceType,
    areaServed,
    inLanguage: 'de-DE',
    provider: {
      '@type': 'Organization',
      name: ORGANIZATION_NAME,
      url: SITE_URL,
    },
  }
}

export type FaqItem = {
  question: string
  answer: string
}

/** Node for use inside an `@graph`, so it carries no `@context` of its own. */
export function buildFaqPage(items: FaqItem[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
}

/** Combines nodes into one `@graph` document with a single `@context`. */
export function buildGraph(nodes: Record<string, unknown>[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  }
}

export type BlogPostingInput = {
  title: string
  description: string
  url: string
  datePublished: string
  /** Falls back to `datePublished` when the article was never revised. */
  dateModified?: string
  section?: string
  imageUrl?: string
}

export function buildBlogPosting({
  title,
  description,
  url,
  datePublished,
  dateModified,
  section,
  imageUrl,
}: BlogPostingInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    mainEntityOfPage: url,
    image: imageUrl ?? DEFAULT_IMAGE_URL,
    datePublished,
    dateModified: dateModified ?? datePublished,
    inLanguage: 'de-DE',
    ...(section ? { articleSection: section } : {}),
    author: {
      '@type': 'Organization',
      name: ORGANIZATION_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: ORGANIZATION_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: LOGO_URL,
      },
    },
  }
}
