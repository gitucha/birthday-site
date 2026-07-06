import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import photos from '../data/photos'

export default function Gallery({ onDone }) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const isLast = index === photos.length - 1

  const go = (dir) => {
    if (dir === 1 && isLast) {
      onDone()
      return
    }
    setDirection(dir)
    setIndex((i) => Math.min(Math.max(i + dir, 0), photos.length - 1))
  }

  const photo = photos[index]

  return (
    <motion.div
      key="gallery"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="flex min-h-screen flex-col items-center justify-center px-6 py-16"
    >
      <p className="mb-6 font-body text-xs uppercase tracking-[0.3em] text-periwinkle-light/70">
        {index + 1} / {photos.length}
      </p>

      <div className="relative h-[60vh] w-full max-w-md">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={photo.src}
            custom={direction}
            initial={{ opacity: 0, x: direction * 60, rotate: direction * 3 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            exit={{ opacity: 0, x: -direction * 60, rotate: -direction * 3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="absolute inset-0 flex flex-col overflow-hidden rounded-3xl
                       border border-white/20 bg-white/10 backdrop-blur-lg shadow-2xl"
          >
            <img
              src={photo.src}
              alt={photo.caption}
              className="h-full w-full flex-1 object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            <p className="font-hand text-2xl text-cream text-center py-4 px-4">
              {photo.caption}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center gap-6">
        <button
          onClick={() => go(-1)}
          disabled={index === 0}
          className="rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md
                     disabled:opacity-30 hover:bg-white/15 transition-colors"
        >
          back
        </button>
        <button
          onClick={() => go(1)}
          className="rounded-full border border-white/25 bg-blush/20 px-6 py-2 backdrop-blur-md
                     hover:bg-blush/30 transition-colors"
        >
          {isLast ? 'continue ✦' : 'next'}
        </button>
      </div>
    </motion.div>
  )
}
