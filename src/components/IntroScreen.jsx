import { motion } from 'framer-motion'

export default function IntroScreen({ name = 'You', onEnter }) {
  return (
    <motion.div
      key="intro"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(12px)', transition: { duration: 0.6 } }}
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mb-3 font-body text-sm uppercase tracking-[0.3em] text-periwinkle-light/80"
      >
        a little something for
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="font-display italic text-5xl sm:text-7xl text-cream leading-tight"
      >
        {name}
      </motion.h1>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        onClick={onEnter}
        className="mt-12 rounded-full border border-white/25 bg-white/10 px-8 py-3
                   font-body text-cream backdrop-blur-md shadow-lg
                   hover:bg-white/15 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blush"
      >
        tap to open ✦
      </motion.button>
    </motion.div>
  )
}
