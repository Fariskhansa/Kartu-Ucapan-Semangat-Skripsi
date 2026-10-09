import { Flower2, Heart } from 'lucide-react'

/** Small ornamental divider: line · flower · heart · flower · line */
export default function Divider({ className = '' }) {
  return (
    <div aria-hidden="true" className={`flex items-center justify-center gap-3 text-rosy ${className}`}>
      <span className="h-px w-14 bg-linear-to-r from-transparent to-rosy/70 sm:w-24" />
      <Flower2 className="size-4" />
      <Heart className="size-3 text-berry" fill="currentColor" />
      <Flower2 className="size-4" />
      <span className="h-px w-14 bg-linear-to-l from-transparent to-rosy/70 sm:w-24" />
    </div>
  )
}
