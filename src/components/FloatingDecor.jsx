import { Flower2, Heart, Sparkles, Star } from 'lucide-react'

// Each decoration is positioned & animated purely with Tailwind classes.
const decorations = [
  { Icon: Heart, filled: true, className: 'left-[7%] top-[14%] size-6 text-rosy animate-float' },
  { Icon: Sparkles, className: 'left-[16%] top-[42%] size-5 text-berry/60 animate-twinkle [animation-delay:0.8s]' },
  { Icon: Flower2, className: 'left-[6%] bottom-[18%] size-7 text-candy animate-float-slow [animation-delay:1.5s]' },
  { Icon: Heart, filled: true, className: 'left-[24%] bottom-[8%] size-4 text-candy animate-float [animation-delay:2.2s] hidden sm:block' },
  { Icon: Star, filled: true, className: 'left-[30%] top-[8%] size-3 text-rosy animate-twinkle [animation-delay:1.2s] hidden md:block' },
  { Icon: Heart, filled: true, className: 'right-[8%] top-[20%] size-5 text-candy animate-float-slow [animation-delay:0.4s]' },
  { Icon: Sparkles, className: 'right-[18%] top-[9%] size-6 text-rosy animate-twinkle [animation-delay:2s]' },
  { Icon: Heart, filled: true, className: 'right-[14%] top-[52%] size-7 text-rosy/80 animate-float [animation-delay:1s] hidden sm:block' },
  { Icon: Flower2, className: 'right-[6%] bottom-[12%] size-6 text-rosy animate-float-slow [animation-delay:2.6s]' },
  { Icon: Star, filled: true, className: 'right-[28%] bottom-[6%] size-3 text-berry/50 animate-twinkle [animation-delay:0.3s] hidden md:block' },
]

/** Minimal floating hearts, flowers & sparkles behind hero content. */
export default function FloatingDecor() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* soft colour blobs */}
      <div className="absolute -left-24 -top-24 size-80 rounded-full bg-candy/40 blur-3xl" />
      <div className="absolute -right-20 top-1/3 size-72 rounded-full bg-petal blur-3xl" />
      <div className="absolute -bottom-32 left-1/3 size-96 rounded-full bg-rosy/20 blur-3xl" />

      {decorations.map(({ Icon, filled, className }, i) => (
        <Icon
          key={i}
          className={`absolute motion-reduce:animate-none ${className}`}
          fill={filled ? 'currentColor' : 'none'}
          strokeWidth={1.75}
        />
      ))}
    </div>
  )
}
