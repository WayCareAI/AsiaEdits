import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import {
  CLUSTER_LABELS,
  getRelatedPosts,
  type BlogCluster,
} from '@/lib/blog-posts'

type RelatedPostsProps = {
  currentSlug: string
  category: BlogCluster
}

const CLUSTER_GRADIENTS: Record<BlogCluster, string> = {
  pseo: 'from-primary/30 via-chart-3/20 to-card',
  accessibility: 'from-chart-2/30 via-primary/15 to-card',
  performance: 'from-chart-3/30 via-primary/20 to-card',
  local: 'from-primary/30 via-chart-2/15 to-card',
  conversion: 'from-chart-2/25 via-chart-3/20 to-card',
}

export function RelatedPosts({ currentSlug, category }: RelatedPostsProps) {
  const posts = getRelatedPosts(currentSlug, category)

  if (posts.length === 0) return null

  return (
    <section
      aria-labelledby="related-posts-heading"
      className="px-4 pt-4 pb-16 sm:px-6"
    >
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-medium tracking-wide text-primary uppercase">
          Weiterlesen
        </p>
        <h2
          id="related-posts-heading"
          className="mt-2 text-balance font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Verwandte Fachartikel
        </h2>

        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/50 focus-visible:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <div
                  aria-hidden
                  className={`h-24 w-full bg-gradient-to-br ${CLUSTER_GRADIENTS[post.cluster]} bg-grid`}
                />
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <span className="w-fit rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {CLUSTER_LABELS[post.cluster]}
                  </span>
                  <h3 className="text-balance font-heading text-lg font-semibold leading-snug text-foreground">
                    {post.title}
                  </h3>
                  <div className="mt-auto flex items-center justify-between pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Clock className="size-4 text-primary" aria-hidden />
                      {post.readingTime}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-medium text-primary">
                      Lesen
                      <ArrowRight
                        className="size-4 transition-transform group-hover:translate-x-1"
                        aria-hidden
                      />
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
