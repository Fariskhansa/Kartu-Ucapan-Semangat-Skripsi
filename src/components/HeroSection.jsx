import { motion } from 'framer-motion'
import { Heart, X } from 'lucide-react'
import Envelope from './Envelope'
import FloatingDecor from './FloatingDecor'
import PillButton from './ui/PillButton'
import { recipient } from '../data/content'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function HeroSection({ isOpen, hasOpened, onToggle }) {
  const label = isOpen ? 'Close the Letter' : hasOpened ? 'Open It Again' : 'Open Your Letter'

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-svh items-center justify-center overflow-hidden px-5 pb-16 pt-14 sm:px-8"
    >
      <FloatingDecor />

      <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <motion.p
          {...fadeUp(0.05)}
          className="inline-flex items-center gap-2 rounded-full bg-cream/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-berry-deep shadow-sm ring-1 ring-candy/70 backdrop-blur"
        >
          <Heart aria-hidden="true" className="size-3.5 text-rosy" fill="currentColor" />
          Semangat Skripsi
        </motion.p>

        <motion.h1
          id="hero-title"
          {...fadeUp(0.15)}
          className="mt-6 font-serif text-4xl font-semibold leading-[1.15] text-cocoa sm:text-5xl md:text-6xl"
        >
          A Little Reminder <span className="whitespace-nowrap">
            for {recipient.nickname} <span className="text-berry">♡</span>
          </span>
        </motion.h1>

        <motion.p {...fadeUp(0.3)} className="mt-5 max-w-xl text-base leading-relaxed text-cocoa/80 sm:text-lg">
          For {recipient.fullName}, who&apos;s working hard to make her dreams come true.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 mt-32 sm:mt-40"
        >
          <div className="animate-bob motion-reduce:animate-none">
            <Envelope isOpen={isOpen} />
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.65)} className="flex flex-col items-center gap-3">
          <PillButton onClick={onToggle} aria-expanded={isOpen} aria-controls="letter" className="text-base sm:text-lg">
            {isOpen ? (
              <>
                <X aria-hidden="true" className="size-5" /> {label}
              </>
            ) : (
              <>
                {label} <span aria-hidden="true">💌</span>
              </>
            )}
          </PillButton>
          <p className="text-sm text-cocoa/60">
            {isOpen ? 'scroll down to read it ↓' : "psst… it's from someone who cares about you"}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
