// Small hand-drawn-style line doodles for the scrapbook board.
// Kept as plain stroked SVGs so they stay lightweight and recolor with currentColor.

export function DoodleHeart({ className = '' }) {
  return (
    <svg viewBox="0 0 64 56" fill="none" className={className}>
      <path
        d="M32 50C14 38 4 27 4 16.5 4 8 10.5 2 18.5 2c5 0 9.5 2.7 13.5 8 4-5.3 8.5-8 13.5-8C53.5 2 60 8 60 16.5 60 27 50 38 32 50Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function DoodleBalloons({ className = '' }) {
  return (
    <svg viewBox="0 0 90 120" fill="none" className={className}>
      <ellipse cx="22" cy="26" rx="18" ry="22" stroke="currentColor" strokeWidth="2.2" />
      <ellipse cx="55" cy="20" rx="15" ry="19" stroke="currentColor" strokeWidth="2.2" />
      <ellipse cx="45" cy="52" rx="13" ry="16" stroke="currentColor" strokeWidth="2.2" />
      <path d="M22 48c2 8-2 14 0 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M55 39c-2 8 3 15 0 22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M45 68c1 10-3 18 2 30" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function DoodleSquiggle({ className = '' }) {
  return (
    <svg viewBox="0 0 200 16" fill="none" className={className}>
      <path
        d="M2 8c6-8 12-8 18 0s12 8 18 0 12-8 18 0 12 8 18 0 12-8 18 0 12 8 18 0 12-8 18 0 12 8 18 0 12-8 18 0 12 8 18 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}