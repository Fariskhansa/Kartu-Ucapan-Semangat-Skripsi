import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Quote, Shuffle } from 'lucide-react'
import { reminders } from '../data/content'
import PillButton from './ui/PillButton'

/** Pick a random index that differs from the current one. */
function pickRandom(current) {
  if (reminders.length < 2) return 0
  let next = current
  while (next === current) next = Math.floor(Math.random() * reminders.length)
  return next
}

export default function OneMoreReminder() {
  const [index, setIndex] = useState(null)
  const [count, setCount] = useState(0)

  const showNext = () => {
    setIndex(pickRandom(index))
    setCount((n) => n + 1)
  }

  return (
    <div className="mx-auto w-full max-w-xl">
      <figure className="relative overflow-hidden rounded-[2rem] bg-cream px-7 py-9 text-center shadow-[0_24px_50px_-30px_rgb(184_92_120/0.55)] ring-1 ring-candy/70 sm:px-12">
        <Quote aria-hidden="true" className="absolute left-5 top-5 size-8 text-petal" fill="currentColor" />
        <figcaption className="text-xs font-extrabold uppercase tracking-[0.25em] text-berry-deep">
          {count > 0 ? `reminder #${count}` : 'one more reminder'}
        </figcaption>

        <div aria-live="polite" className="mt-4 grid min-h-24 place-items-center">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index ?? 'placeholder'}
              initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
              transition={{ duration: 0.35 }}
              className={
                index === null
                  ? 'text-base text-cocoa/70'
                  : 'font-serif text-xl italic leading-snug text-cocoa sm:text-2xl'
              }
            >
              {index === null
                ? 'Butuh satu pengingat kecil lagi? Tekan tombol di bawah, ya ♡'
                : reminders[index]}
            </motion.blockquote>
          </AnimatePresence>
        </div>
      </figure>

      <div className="mt-6 flex justify-center">
        <PillButton variant="soft" onClick={showNext}>
          <Shuffle aria-hidden="true" className="size-4" />
          One More Reminder
        </PillButton>
      </div>
    </div>
  )
}
