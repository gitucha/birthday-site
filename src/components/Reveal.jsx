import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const messages = ['getting something ready', 'almost there', 'okay...']

export default function Reveal({ onDone }) {
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (step >= messages.length) {
      const t = setTimeout(onDone, 500)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setStep((s) => s + 1), 900)
    return () => clearTimeout(t)
  }, [step, onDone])

  return (
    <motion.div
      key="reveal"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <AnimatePresence mode="wait">
        <motion.p
          key={step}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4 }}
          className="font-display italic text-2xl sm:text-3xl text-periwinkle-light"
        >
          {messages[Math.min(step, messages.length - 1)]}
        </motion.p>
      </AnimatePresence>
    </motion.div>
  )
}
