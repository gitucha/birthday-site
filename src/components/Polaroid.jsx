// A single scattered photo, styled like a taped-down polaroid on a pinboard.
// rotate: degrees to tilt (pass negative/positive values per photo for a scattered feel)
// tape: 'blush' | 'periwinkle' | 'none' — colour of the washi-tape strip on top
export default function Polaroid({ src, caption, rotate = 0, tape = 'blush', className = '' }) {
  const tapeColor =
    tape === 'periwinkle' ? 'bg-periwinkle-light/70' : tape === 'blush' ? 'bg-blush-light/70' : null

  return (
    <div
      className={`relative bg-cream p-2 pb-6 rounded-sm shadow-xl w-32 sm:w-40 ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {tapeColor && (
        <span
          className={`absolute -top-2.5 left-1/2 h-4 w-14 -translate-x-1/2 -rotate-2 ${tapeColor} shadow-sm`}
        />
      )}
      <div className="aspect-square w-full overflow-hidden bg-maroon-deep/40">
        <img
          src={src}
          alt={caption || ''}
          className="h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
      </div>
      {caption && (
        <p className="mt-2 text-center font-hand text-sm text-maroon-deep leading-none">
          {caption}
        </p>
      )}
    </div>
  )
}