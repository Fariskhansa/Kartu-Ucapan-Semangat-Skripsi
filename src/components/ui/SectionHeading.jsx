import { Sparkles } from 'lucide-react'

/**
 * Reusable section heading: small eyebrow, serif title and optional description.
 */
export default function SectionHeading({ id, eyebrow, title, description }) {
  return (
    <header className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
      {eyebrow && (
        <p className="mb-3 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.25em] text-berry-deep">
          <Sparkles aria-hidden="true" className="size-3.5 text-rosy" />
          {eyebrow}
          <Sparkles aria-hidden="true" className="size-3.5 text-rosy" />
        </p>
      )}
      <h2 id={id} className="font-serif text-3xl font-semibold leading-tight text-cocoa sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-relaxed text-cocoa/80 sm:text-lg">{description}</p>}
    </header>
  )
}
