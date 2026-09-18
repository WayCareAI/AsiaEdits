import type { MetadataRoute } from "next"
import { getAllCitySlugs, getAllIndustrySlugs } from "@/src/data/pseoDatabase"

const baseUrl = "https://asiaedits.com"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ]

  // Dynamic city pages (/webdesign/[city])
  const citySlugs = getAllCitySlugs()
  const cityPages: MetadataRoute.Sitemap = citySlugs.map((slug) => ({
    url: `${baseUrl}/webdesign/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  // Dynamic industry pages (/branchen/webdesign-[industry] and /branchen/website-[industry])
  const industrySlugs = getAllIndustrySlugs()
  const industryPages: MetadataRoute.Sitemap = industrySlugs.flatMap((slug) => [
    {
      url: `${baseUrl}/branchen/webdesign-${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/branchen/website-${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ])

  return [...staticPages, ...cityPages, ...industryPages]
}
