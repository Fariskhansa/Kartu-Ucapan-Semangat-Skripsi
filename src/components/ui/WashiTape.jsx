/** Little strip of washi tape — a scrapbook detail. */
export default function WashiTape({ className = '', color = 'bg-candy/70' }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute block h-7 w-24 rounded-[3px] shadow-sm ring-1 ring-white/50 [background-image:repeating-linear-gradient(45deg,transparent_0_6px,rgb(255_255_255/0.35)_6px_12px)] ${color} ${className}`}
    />
  )
}
