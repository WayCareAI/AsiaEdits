interface PseoContentSectionProps {
  id?: string
  eyebrow: string
  heading: string
  text: string
}

export function PseoContentSection({ id, eyebrow, heading, text }: PseoContentSectionProps) {
  return (
    <section id={id} className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-medium tracking-wide text-gray-500 uppercase">
            {eyebrow}
          </span>
          <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            {heading}
          </h2>
          <p className="mt-4 text-pretty text-sm leading-relaxed text-gray-600 sm:text-base">
            {text}
          </p>
        </div>
      </div>
    </section>
  )
}
