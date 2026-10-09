import { motion } from 'framer-motion'
import { Coffee, Camera, Sprout } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import WashiTape from './ui/WashiTape'

const cards = [
  {
    Icon: Sprout,
    quote: 'Progress is still progress, no matter how small.',
    note: 'Satu kalimat hari ini pun tetap berarti.',
    surface: 'bg-petal',
    iconWrap: 'bg-cream text-berry',
    tilt: '-rotate-2',
    tape: '-top-3 left-1/2 -translate-x-1/2 -rotate-3',
    tapeColor: 'bg-candy/70',
  },
  {
    Icon: Coffee,
    quote: 'You deserve to rest, too.',
    note: 'Istirahat juga bagian dari berjuang.',
    surface: 'bg-peach',
    iconWrap: 'bg-cream text-[#c27257]',
    tilt: 'rotate-1',
    tape: '-top-3 left-1/2 -translate-x-1/2 rotate-2',
    tapeColor: 'bg-[#ffcfb8]/80',
  },
  {
    Icon: Camera,
    quote: 'One day, this will all be a beautiful memory.',
    note: 'Suatu hari kamu akan tersenyum mengingat semua ini.',
    surface: 'bg-lilac',
    iconWrap: 'bg-cream text-[#8e5fa3]',
    tilt: '-rotate-1',
    tape: '-top-3 left-1/2 -translate-x-1/2 -rotate-2',
    tapeColor: 'bg-[#dfc6ec]/80',
  },
]

export default function MotivationCards() {
  return (
    <section aria-labelledby="motivation-title" className="px-5 py-20 sm:px-8 sm:py-24">
      <SectionHeading
        id="motivation-title"
        eyebrow="little notes"
        title="Things I want you to remember"
        description="Tempel di hatimu, baca lagi kapan pun kamu butuh."
      />

      <ul className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        {cards.map(({ Icon, quote, note, surface, iconWrap, tilt, tape, tapeColor }, i) => (
          <motion.li
            key={quote}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className={i === 2 ? 'sm:col-span-2 sm:mx-auto sm:w-1/2 lg:col-span-1 lg:w-full' : ''}
          >
            <article
              className={`group relative flex h-full flex-col rounded-3xl p-7 pt-9 shadow-[0_18px_40px_-24px_rgb(184_92_120/0.5)] ring-1 ring-white/70 transition duration-500 ease-out hover:-translate-y-2 hover:rotate-0 hover:shadow-[0_28px_50px_-24px_rgb(184_92_120/0.6)] motion-reduce:hover:translate-y-0 ${surface} ${tilt}`}
            >
              <WashiTape className={tape} color={tapeColor} />
              <span
                className={`grid size-12 place-items-center rounded-2xl shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 ${iconWrap}`}
              >
                <Icon aria-hidden="true" className="size-6" strokeWidth={1.75} />
              </span>
              <p className="mt-5 font-serif text-xl font-medium leading-snug text-cocoa sm:text-[1.35rem]">
                &ldquo;{quote}&rdquo;
              </p>
              <p className="mt-auto pt-4 text-sm text-cocoa/70">{note}</p>
            </article>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
