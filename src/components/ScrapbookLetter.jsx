import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Polaroid from './Polaroid'
import LetterModal from './LetterModal'
import { DoodleHeart, DoodleBalloons, DoodleSquiggle } from './Doodles'
import photos from '../data/photos'

// Pull a handful of photos for the pinboard, each with its own tilt/tape colour
// so it reads as scattered rather than a grid. Add/remove entries freely.
const pinned = [
  { ...photos[0], rotate: -8, tape: 'blush' },
  { ...photos[1], rotate: 6, tape: 'periwinkle' },
  { ...photos[2], rotate: -4, tape: 'periwinkle' },
  { ...photos[3], rotate: 9, tape: 'blush' },
].filter((p) => p.src)

export default function ScrapbookLetter({ onDone }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      key="scrapbook"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="relative flex min-h-screen flex-col items-center justify-center gap-10 overflow-hidden px-6 py-20"
    >
      <DoodleHeart className="absolute top-8 right-6 h-10 w-10 text-cream/40 sm:right-16 sm:h-14 sm:w-14" />
      <DoodleBalloons className="absolute bottom-10 left-4 h-20 w-14 text-blush-light/40 sm:left-14 sm:h-28 sm:w-20" />

      <p className="font-body text-xs uppercase tracking-[0.3em] text-periwinkle-light/70">
        a little scrapbook
      </p>

      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-6 sm:gap-x-6 max-w-2xl">
        {pinned[0] && <Polaroid {...pinned[0]} className="-mb-2 sm:-mb-4" />}
        {pinned[1] && <Polaroid {...pinned[1]} className="mt-4 sm:mt-8" />}

        {/* the note — the click target that opens the full letter */}
        <motion.button
          onClick={() => setOpen(true)}
          whileHover={{ scale: 1.04, rotate: 0 }}
          whileTap={{ scale: 0.97 }}
          style={{ transform: 'rotate(-3deg)' }}
          className="relative flex w-40 sm:w-48 flex-col items-center justify-center gap-2 rounded-sm
                     border border-maroon-deep/10 bg-cream px-4 py-6 text-center shadow-xl focus:outline-none"
        >
          <span className="absolute -top-2.5 left-1/2 h-4 w-14 -translate-x-1/2 rotate-2 bg-periwinkle-light/70 shadow-sm" />
          <DoodleHeart className="h-6 w-6 text-maroon" />
          <span className="font-hand text-2xl text-maroon-deep leading-none">click here</span>
          <span className="font-body text-[0.65rem] uppercase tracking-widest text-maroon-deep/50">
            to open the letter
          </span>
        </motion.button>

        {pinned[2] && <Polaroid {...pinned[2]} className="mt-6 sm:mt-10" />}
        {pinned[3] && <Polaroid {...pinned[3]} className="-mb-2 sm:mb-2" />}
      </div>

      <DoodleSquiggle className="h-3 w-40 text-blush-light/50" />

      <AnimatePresence>
        {open && (
          <LetterModal onClose={() => setOpen(false)} onDone={onDone} />
        )}
      </AnimatePresence>
    </motion.div>
  )
}