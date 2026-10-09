import { useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Flower2, Heart, X } from 'lucide-react'
import { letter, recipient } from '../data/content'
import PillButton from './ui/PillButton'
import WashiTape from './ui/WashiTape'

const ease = [0.22, 1, 0.36, 1]

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

export default function LetterCard({ onClose }) {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const reduceMotion = useReducedMotion()

  // Bring the freshly opened letter into view and move focus to it (a11y).
  useEffect(() => {
    const t = setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
      headingRef.current?.focus({ preventScroll: true })
    }, 120)
    return () => clearTimeout(t)
  }, [reduceMotion])

  return (
    <motion.section
      id="letter"
      ref={sectionRef}
      aria-labelledby="letter-title"
      className="relative scroll-mt-4 px-5 py-16 sm:px-8 sm:py-20"
      initial={{ opacity: 0, y: 60, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 40, scale: 0.97, transition: { duration: 0.4 } }}
      transition={{ duration: 0.8, ease }}
    >
      <article className="relative mx-auto max-w-2xl -rotate-[0.6deg] rounded-[2rem] bg-cream p-7 shadow-[0_30px_60px_-30px_rgb(184_92_120/0.45)] ring-1 ring-candy/60 sm:p-12 md:p-14">
        {/* scrapbook details */}
        <WashiTape className="-top-3 left-8 -rotate-6" />
        <WashiTape className="-top-3 right-10 rotate-[8deg]" color="bg-rosy/50" />

        {/* inner dashed border */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-3 rounded-[1.5rem] border border-dashed border-candy sm:inset-4" />

        {/* stamp */}
        <div
          aria-hidden="true"
          className="absolute right-6 top-8 hidden rotate-6 flex-col items-center justify-center rounded-md border-2 border-dashed border-rosy bg-petal px-3 py-2 sm:flex md:right-10 md:top-10"
        >
          <Flower2 className="size-6 text-berry" />
          <span className="mt-1 text-[10px] font-extrabold uppercase tracking-widest text-berry-deep">for {recipient.nickname}</span>
        </div>

        <div className="relative">
          <h2
            id="letter-title"
            ref={headingRef}
            tabIndex={-1}
            className="font-serif text-3xl font-semibold italic text-berry outline-none sm:text-4xl"
          >
            {letter.greeting}
          </h2>

          <motion.div
            variants={listVariants}
            initial="hidden"
            animate="show"
            className="mt-7 space-y-5 text-[1.05rem] leading-relaxed text-cocoa sm:text-lg sm:leading-[1.85]"
          >
            {letter.paragraphs.map(({ text, highlight }) =>
              highlight ? (
                <motion.p
                  key={text}
                  variants={itemVariants}
                  className="border-l-4 border-candy py-1 pl-4 font-serif text-xl italic text-berry-deep sm:text-2xl"
                >
                  {text}
                </motion.p>
              ) : (
                <motion.p key={text} variants={itemVariants}>
                  {text}
                </motion.p>
              ),
            )}

            <motion.footer variants={itemVariants} className="pt-6 text-right">
              <p className="text-cocoa/80">{letter.closing}</p>
              <p className="mt-1 font-serif text-xl italic text-berry sm:text-2xl">{letter.signature}</p>
              <Heart aria-hidden="true" className="ml-auto mt-3 size-5 text-rosy" fill="currentColor" />
            </motion.footer>
          </motion.div>
        </div>
      </article>

      <div className="mt-10 flex justify-center">
        <PillButton variant="soft" onClick={onClose} aria-controls="letter" aria-expanded="true">
          <X aria-hidden="true" className="size-4" /> Fold the Letter
        </PillButton>
      </div>
    </motion.section>
  )
}
