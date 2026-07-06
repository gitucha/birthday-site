import { motion } from 'framer-motion'
import letter from '../data/letter'

export default function LetterModal({ onClose, onDone }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-40 flex items-center justify-center bg-maroon-deep/70 backdrop-blur-sm px-6 py-10"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 8 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-3xl border border-white/20
                   bg-white/10 backdrop-blur-lg shadow-2xl px-8 py-10 sm:px-12 sm:py-14"
      >
        <button
          onClick={onClose}
          aria-label="Close letter"
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full
                     border border-white/20 bg-white/10 text-cream/80 hover:bg-white/20 transition-colors"
        >
          ✕
        </button>

        <p className="font-hand text-3xl text-blush-light mb-6">{letter.greeting}</p>

        {letter.paragraphs.map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.3, duration: 0.5 }}
            className="font-body text-cream/90 leading-relaxed mb-4 text-[0.95rem] sm:text-base"
          >
            {p}
          </motion.p>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 + letter.paragraphs.length * 0.3 + 0.2, duration: 0.5 }}
        >
          <p className="font-hand text-3xl text-cream mt-6">{letter.signoff}</p>
          <p className="font-hand text-xl text-periwinkle-light mt-1">{letter.from}</p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 + letter.paragraphs.length * 0.3 + 0.6 }}
          onClick={onDone}
          className="mt-10 rounded-full border border-white/25 bg-blush/20 px-6 py-2
                     font-body text-cream backdrop-blur-md hover:bg-blush/30 transition-colors"
        >
          continue ✦
        </motion.button>
      </motion.div>
    </motion.div>
  )
}