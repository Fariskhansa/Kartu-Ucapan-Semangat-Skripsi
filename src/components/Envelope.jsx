import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { recipient } from '../data/content'

const ease = [0.22, 1, 0.36, 1]

/**
 * Pure-CSS envelope illustration.
 * Layer order (back → front): back panel, letter paper, front pocket, flap.
 * When opening, the flap rotates up and slips *behind* the paper, then the paper rises.
 */
export default function Envelope({ isOpen }) {
  return (
    <motion.div
      aria-hidden="true"
      className="relative mx-auto aspect-[3/2] w-64 [perspective:1100px] sm:w-80"
      whileHover={isOpen ? undefined : { rotate: -2, y: -4 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
    >
      {/* ground shadow */}
      <div className="absolute -bottom-6 left-1/2 h-4 w-4/5 -translate-x-1/2 rounded-full bg-berry/15 blur-md" />

      {/* back panel */}
      <div className="absolute inset-0 rounded-2xl bg-candy shadow-[0_20px_40px_-18px_rgb(184_92_120/0.55)]" />

      {/* letter paper */}
      <motion.div
        className="absolute inset-x-4 top-3 bottom-3 z-10 flex flex-col items-center rounded-xl bg-cream px-5 pt-5 shadow-sm ring-1 ring-petal"
        initial={false}
        animate={{ y: isOpen ? '-42%' : '0%' }}
        transition={{ duration: 0.6, ease, delay: isOpen ? 0.45 : 0 }}
      >
        <p className="font-serif text-lg italic text-berry sm:text-xl">for {recipient.nickname} ♡</p>
        <div className="mt-3 w-full space-y-2">
          <span className="block h-1.5 w-full rounded-full bg-petal" />
          <span className="block h-1.5 w-5/6 rounded-full bg-petal" />
          <span className="block h-1.5 w-2/3 rounded-full bg-petal" />
        </div>
      </motion.div>

      {/* front pocket (V-shaped) */}
      <div className="absolute inset-0 z-20 rounded-2xl bg-linear-to-b from-petal to-[#fbd6e2] [clip-path:polygon(0_0,50%_54%,100%_0,100%_100%,0_100%)]" />
      {/* pocket fold lines */}
      <div className="absolute inset-0 z-20 rounded-2xl bg-linear-to-tr from-white/0 via-white/0 to-white/30 [clip-path:polygon(0_100%,50%_54%,100%_100%)]" />

      {/* flap */}
      <motion.div
        className="absolute inset-x-0 top-0 h-[58%] origin-top"
        initial={false}
        animate={{ rotateX: isOpen ? 180 : 0, zIndex: isOpen ? 5 : 30 }}
        transition={{
          rotateX: { duration: 0.6, ease, delay: isOpen ? 0 : 0.35 },
          zIndex: { duration: 0, delay: isOpen ? 0.3 : 0.65 },
        }}
      >
        <div className="size-full bg-linear-to-b from-rosy to-[#f3b3c3] drop-shadow-sm [clip-path:polygon(0_0,100%_0,50%_100%)]" />
      </motion.div>

      {/* wax seal */}
      <div className="absolute left-1/2 top-[58%] z-40 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="grid size-12 place-items-center rounded-full bg-berry shadow-md ring-4 ring-berry/25 sm:size-14"
          initial={false}
          animate={{ scale: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.3, delay: isOpen ? 0 : 0.8 }}
        >
          <Heart className="size-5 text-cream sm:size-6" fill="currentColor" />
        </motion.div>
      </div>
    </motion.div>
  )
}
