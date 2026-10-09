import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, MotionConfig, useReducedMotion } from 'framer-motion'
import HeroSection from './components/HeroSection'
import LetterCard from './components/LetterCard'
import MotivationCards from './components/MotivationCards'
import SurpriseSection from './components/SurpriseSection'
import Footer from './components/Footer'
import Divider from './components/ui/Divider'

// Envelope flap (0.6s) + paper rise (0.45s delay + 0.6s) ≈ 1.05s before the letter unfolds.
const OPEN_DELAY = 1050
const CLOSE_DELAY = 550

export default function App() {
  const [envelopeOpen, setEnvelopeOpen] = useState(false)
  const [letterVisible, setLetterVisible] = useState(false)
  const [hasOpened, setHasOpened] = useState(false)
  const timer = useRef(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => () => clearTimeout(timer.current), [])

  const openLetter = () => {
    clearTimeout(timer.current)
    setEnvelopeOpen(true)
    setHasOpened(true)
    timer.current = setTimeout(() => setLetterVisible(true), reduceMotion ? 0 : OPEN_DELAY)
  }

  const closeLetter = () => {
    clearTimeout(timer.current)
    setLetterVisible(false)
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
    timer.current = setTimeout(() => setEnvelopeOpen(false), reduceMotion ? 0 : CLOSE_DELAY)
  }

  const toggleLetter = () => (envelopeOpen ? closeLetter() : openLetter())

  return (
    <MotionConfig reducedMotion="user">
      <main className="overflow-x-clip">
        <HeroSection isOpen={envelopeOpen} hasOpened={hasOpened} onToggle={toggleLetter} />

        <AnimatePresence>{letterVisible && <LetterCard key="letter" onClose={closeLetter} />}</AnimatePresence>

        <Divider />
        <MotivationCards />
        <Divider />
        <SurpriseSection />
      </main>
      <Footer />
    </MotionConfig>
  )
}
