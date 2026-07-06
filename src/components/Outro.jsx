import { useEffect } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'

export default function Outro({ onReplay }) {
  useEffect(() => {
    const colors = ['#F4A6C8', '#8FA8E8', '#5C1A2B', '#FFF8FA']
    const burst = () =>
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors,
      })

    burst()
    const t1 = setTimeout(
      () => confetti({ particleCount: 60, angle: 60, spread: 60, origin: { x: 0 }, colors }),
      300
    )
    const t2 = setTimeout(
      () => confetti({ particleCount: 60, angle: 120, spread: 60, origin: { x: 1 }, colors }),
      500
    )
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return (
    <motion.div
      key="outro"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="font-display italic text-4xl sm:text-6xl text-cream leading-tight"
      >
        happy birthday
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-4 font-body text-periwinkle-light/80 max-w-sm"
      >
        here's to another year that's entirely yours.
      </motion.p>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={onReplay}
        className="mt-12 rounded-full border border-white/25 bg-white/10 px-6 py-2
                   font-body text-cream backdrop-blur-md hover:bg-white/15 transition-colors"
      >
        watch it again ↺
      </motion.button>
    </motion.div>
  )
}
