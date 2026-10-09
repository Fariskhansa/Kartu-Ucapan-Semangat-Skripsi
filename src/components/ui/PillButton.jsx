const variants = {
  primary:
    'bg-linear-to-br from-berry to-berry-deep text-cream shadow-[0_12px_28px_-12px_rgb(184_92_120/0.8)] hover:shadow-[0_18px_34px_-12px_rgb(184_92_120/0.85)]',
  soft: 'bg-cream text-berry-deep ring-1 ring-candy shadow-sm hover:bg-petal hover:shadow-md',
}

/**
 * Reusable rounded "pill" button with a gentle lift + shine on hover.
 */
export default function PillButton({
  variant = 'primary',
  className = '',
  children,
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      className={`group relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full px-7 py-3.5 font-bold tracking-wide transition duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-candy motion-reduce:hover:translate-y-0 ${variants[variant]} ${className}`}
      {...props}
    >
      {/* soft shine sweep */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
      />
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </button>
  )
}
