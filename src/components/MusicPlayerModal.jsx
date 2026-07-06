import { motion } from 'framer-motion'

export default function MusicPlayerModal({ song, playing, onToggle, onNext, onPrev, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-40 flex items-center justify-center bg-maroon-deep/70 backdrop-blur-sm px-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 10 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-full max-w-xs flex-col items-center gap-6 rounded-3xl
                   border border-white/20 bg-white/10 backdrop-blur-lg shadow-2xl px-8 py-10"
      >
        <button
          onClick={onClose}
          aria-label="Close music player"
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full
                     border border-white/20 bg-white/10 text-cream/80 hover:bg-white/20 transition-colors"
        >
          ✕
        </button>

        <p className="font-body text-xs uppercase tracking-[0.3em] text-periwinkle-light/70">
          now playing
        </p>

        {/* vinyl */}
        <div
          key={song.src}
          className={`relative flex h-40 w-40 items-center justify-center rounded-full shadow-2xl
                      bg-[radial-gradient(circle_at_center,#3B2354_0%,#1a0f26_55%,#1a0f26_100%)]
                      border border-white/10 ${playing ? 'animate-spin-slow' : ''}`}
        >
          <div className="absolute inset-3 rounded-full border border-periwinkle-light/10" />
          <div className="absolute inset-7 rounded-full border border-periwinkle-light/10" />
          <div className="h-6 w-6 rounded-full bg-blush shadow-inner" />
        </div>

        <div className="text-center">
          <p className="font-hand text-2xl text-cream leading-none">{song.title}</p>
          <p className="mt-1 font-body text-xs text-periwinkle-light/70">{song.artist}</p>
        </div>

        {/* waveform, purely decorative, animates while playing */}
        <div className="flex h-6 items-end gap-1">
          {[0.4, 0.7, 1, 0.5, 0.8, 0.3, 0.9].map((h, i) => (
            <span
              key={i}
              className={`w-1 rounded-full bg-blush ${playing ? 'animate-pulse' : ''}`}
              style={{ height: `${h * 100}%`, animationDelay: `${i * 120}ms` }}
            />
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onPrev}
            aria-label="Previous track"
            className="flex h-10 w-10 items-center justify-center rounded-full
                       border border-white/20 bg-white/10 text-cream hover:bg-white/20 transition-colors"
          >
            ⏮
          </button>

          <button
            onClick={onToggle}
            className="rounded-full border border-white/25 bg-blush/20 px-6 py-2
                       font-body text-cream backdrop-blur-md hover:bg-blush/30 transition-colors"
          >
            {playing ? 'pause' : 'play'}
          </button>

          <button
            onClick={onNext}
            aria-label="Next track"
            className="flex h-10 w-10 items-center justify-center rounded-full
                       border border-white/20 bg-white/10 text-cream hover:bg-white/20 transition-colors"
          >
            ⏭
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}