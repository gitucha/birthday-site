// Small fixed vinyl icon. Spins while music is playing, and tapping it
// opens the centered "Now Playing" panel (MusicPlayerModal) rather than
// toggling playback directly — play/pause lives inside that panel.
export default function MusicToggle({ playing, onOpen }) {
  return (
    <button
      onClick={onOpen}
      aria-label="Open music player"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full
                 border border-white/25 bg-maroon-deep/60 backdrop-blur-md shadow-lg
                 transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-blush"
    >
      <span
        className={`relative flex h-10 w-10 items-center justify-center rounded-full
                    bg-[radial-gradient(circle_at_center,#3B2354_0%,#1a0f26_60%,#1a0f26_100%)]
                    border border-white/10 ${playing ? 'animate-spin-slow' : ''}`}
      >
        <span className="absolute inset-0 rounded-full border border-periwinkle-light/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-blush" />
      </span>
    </button>
  )
}