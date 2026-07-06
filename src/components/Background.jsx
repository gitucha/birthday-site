export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-maroon-deep">
      {/* base gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-maroon-deep via-twilight to-maroon" />

      {/* drifting ink blooms — the signature motif, not a static blob */}
      <div className="absolute -top-1/4 -left-1/4 h-[70vh] w-[70vh] rounded-full bg-periwinkle/30 blur-[100px] animate-drift" />
      <div className="absolute top-1/3 -right-1/4 h-[60vh] w-[60vh] rounded-full bg-blush/25 blur-[110px] animate-drift-slow" />
      <div className="absolute bottom-0 left-1/4 h-[55vh] w-[55vh] rounded-full bg-twilight-light/40 blur-[100px] animate-drift" />

      {/* subtle grain overlay so gradients don't look flat/plastic */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  )
}
