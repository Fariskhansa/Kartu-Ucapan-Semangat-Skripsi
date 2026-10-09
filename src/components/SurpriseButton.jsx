import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Gift, Heart } from 'lucide-react'
import PillButton from './ui/PillButton'
import { recipient } from '../data/content'

const HEART_COUNT = 14
const COLORS = ['text-rosy', 'text-berry', 'text-candy', 'text-[#f48fb1]']
const rand = (min, max) => Math.random() * (max - min) + min

/** Generate a light ring of hearts that fly outward from the button. */
function createBurst() {
  return Array.from({ length: HEART_COUNT }, (_, i) => {
    const angle = (i / HEART_COUNT) * Math.PI * 2 + rand(-0.2, 0.2)
    const distance = rand(80, 160)
    return {
      id: i,
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance * 0.75 - 20,
      size: Math.round(rand(12, 24)),
      rotate: rand(-35, 35),
      delay: rand(0, 0.12),
      color: COLORS[i % COLORS.length],
    }
  })
}

export default function SurpriseButton() {
  const reduceMotion = useReducedMotion()
  const [burst, setBurst] = useState(null)
  const [hugs, setHugs] = useState(0)
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  const handleClick = () => {
    setHugs((n) => n + 1)
    if (reduceMotion) return
    clearTimeout(timer.current)
    setBurst({ key: Date.now(), hearts: createBurst() })
    timer.current = setTimeout(() => setBurst(null), 1400) // clean up DOM quickly
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <PillButton onClick={handleClick} className="px-8 py-4 text-base sm:text-lg">
          <Gift aria-hidden="true" className="size-5" />
          A Little Surprise for You <span aria-hidden="true">♡</span>
        </PillButton>

        {/* heart burst */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          {burst?.hearts.map((h) => (
            <span key={`${burst.key}-${h.id}`} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.span
                className={`block ${h.color}`}
                initial={{ x: 0, y: 0, scale: 0.2, opacity: 0, rotate: 0 }}
                animate={{ x: h.x, y: h.y, scale: 1, opacity: [0, 1, 1, 0], rotate: h.rotate }}
                transition={{ duration: 1.1, delay: h.delay, ease: 'easeOut' }}
              >
                <Heart size={h.size} fill="currentColor" strokeWidth={1.5} />
              </motion.span>
            </span>
          ))}
        </div>
      </div>

      <div aria-live="polite" className="mt-8 min-h-28 w-full max-w-md">
        <AnimatePresence>
          {hugs > 0 && (
            <motion.div
              key="hug"
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4 rounded-3xl bg-cream px-6 py-5 text-left shadow-[0_18px_40px_-24px_rgb(184_92_120/0.5)] ring-1 ring-candy/70"
            >
              <motion.span
                key={hugs}
                initial={{ scale: 0.6 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 12 }}
                className="grid size-12 shrink-0 place-items-center rounded-full bg-petal text-berry"
              >
                <Heart aria-hidden="true" className="size-6 animate-heartbeat motion-reduce:animate-none" fill="currentColor" />
              </motion.span>
              <div>
                <p className="font-serif text-lg font-medium leading-snug text-cocoa">
                  Sending you the biggest virtual hug, {recipient.nickname}! You got this! ♡
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-widest text-berry-deep/80">
                  {hugs} {hugs === 1 ? 'hug' : 'hugs'} sent
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
