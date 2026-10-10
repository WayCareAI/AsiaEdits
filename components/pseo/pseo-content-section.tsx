interface PseoContentSectionProps {
  id?: string
  eyebrow: string
  heading: string
  text: string | string[]
}

export function PseoContentSection({ id, eyebrow, heading, text }: PseoContentSectionProps) {
  const paragraphs = Array.isArray(text) ? text : [text]
  return (
    <section id={id} className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-medium tracking-wide text-primary uppercase">
            {eyebrow}
          </span>
          <h2 className="mt-3 text-balance font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {heading}
          </h2>
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
