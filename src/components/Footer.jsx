import { Heart } from 'lucide-react'
import { recipient } from '../data/content'

export default function Footer() {
  return (
    <footer className="relative mt-8 border-t border-candy/60 bg-petal/60 px-5 py-12 text-center">
      <div aria-hidden="true" className="flex items-center justify-center gap-2 text-rosy">
        <Heart className="size-3" fill="currentColor" />
        <Heart className="size-4 text-berry animate-heartbeat motion-reduce:animate-none" fill="currentColor" />
        <Heart className="size-3" fill="currentColor" />
      </div>
      <p className="mx-auto mt-4 max-w-md font-serif text-lg italic leading-relaxed text-cocoa">
        Made with love for {recipient.nickname}, just to remind you that you&apos;re doing amazing. ♡
      </p>
      <p className="mt-3 text-xs font-bold uppercase tracking-[0.25em] text-berry-deep/80">semangat skripsi · always</p>
    </footer>
  )
}
