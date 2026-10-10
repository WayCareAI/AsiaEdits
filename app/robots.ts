import type { MetadataRoute } from "next"

const AI_CRAWLERS = [
  // OpenAI
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  // Anthropic
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Google and Apple AI training/grounding controls
  "Google-Extended",
  "Applebot-Extended",
  // Meta, Amazon, Mistral, Cohere, DuckDuckGo, Common Crawl
  "Meta-ExternalAgent",
  "Meta-ExternalFetcher",
  "Amazonbot",
  "MistralAI-User",
  "cohere-ai",
  "DuckAssistBot",
  "CCBot",
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_CRAWLERS, allow: "/" },
    ],
    sitemap: "https://asiaedits.com/sitemap.xml",
    host: "https://asiaedits.com",
  }
}
