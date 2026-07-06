import { useEffect, useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Background from './components/Background'
import MusicToggle from './components/MusicToggle'
import MusicPlayerModal from './components/MusicPlayerModal'
import IntroScreen from './components/IntroScreen'
import Reveal from './components/Reveal'
import Gallery from './components/Gallery'
import ScrapbookLetter from './components/ScrapbookLetter'
import Outro from './components/Outro'
import songs from './data/song'

const STEPS = ['intro', 'reveal', 'gallery', 'letter', 'outro']

// Floating hearts drifting up in the background — subtle, not overwhelming
function FloatingHearts() {
  const hearts = Array.from({ length: 8 })
  return (
    <div className="pointer-events-none fixed inset-0 -z-[5] overflow-hidden">
      {hearts.map((_, i) => (
        <span
          key={i}
          className="absolute text-blush-light animate-float"
          style={{
            left: `${(i * 13 + 5) % 100}%`,
            fontSize: `${14 + (i % 3) * 6}px`,
            animationDuration: `${14 + i * 2}s`,
            animationDelay: `${i * 1.7}s`,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  )
}

export default function App() {
  const [stepIndex, setStepIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [playerOpen, setPlayerOpen] = useState(false)
  const [trackIndex, setTrackIndex] = useState(0)
  const audioRef = useRef(null)
  const step = STEPS[stepIndex]

  const next = () => setStepIndex((i) => Math.min(i + 1, STEPS.length - 1))
  const restart = () => setStepIndex(0)

  // Swap the audio source whenever the track changes, and keep playing
  // through the change if music was already playing.
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.src = songs[trackIndex].src
    audio.load()
    if (playing) {
      audio.play().catch(() => {})
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackIndex])

  const enterSite = () => {
    // First user gesture — safe point to attempt audio autoplay
    audioRef.current
      ?.play()
      .then(() => setPlaying(true))
      .catch(() => {})
    next()
  }

  const togglePlayback = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {})
    }
  }

  const nextTrack = () => setTrackIndex((i) => (i + 1) % songs.length)
  const prevTrack = () => setTrackIndex((i) => (i - 1 + songs.length) % songs.length)

  return (
    <>
      <Background />
      <FloatingHearts />
      <audio ref={audioRef} src={songs[trackIndex].src} onEnded={nextTrack} />
      <MusicToggle playing={playing} onOpen={() => setPlayerOpen(true)} />

      <AnimatePresence mode="wait">
        {step === 'intro' && <IntroScreen name="Mellisah" onEnter={enterSite} />}
        {step === 'reveal' && <Reveal onDone={next} />}
        {step === 'gallery' && <Gallery onDone={next} />}
        {step === 'letter' && <ScrapbookLetter onDone={next} />}
        {step === 'outro' && <Outro onReplay={restart} />}
      </AnimatePresence>

      <AnimatePresence>
        {playerOpen && (
          <MusicPlayerModal
            song={songs[trackIndex]}
            playing={playing}
            onToggle={togglePlayback}
            onNext={nextTrack}
            onPrev={prevTrack}
            onClose={() => setPlayerOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}