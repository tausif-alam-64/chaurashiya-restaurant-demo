export default function MenuHeader() {
  return (
    <div className="relative text-center px-6 pt-10 pb-6 bg-ivory overflow-hidden">
      {/* Decorative leaf illustration — top right */}
      <div className="absolute top-0 right-0 opacity-[0.12] pointer-events-none select-none">
        <LeafDecoration />
      </div>

      <h1
        className="font-display font-semibold text-warm-black tracking-[0.04em]
                   text-[clamp(2.2rem,7vw,3.8rem)] mb-2 relative z-10 uppercase"
      >
        Our Menu
      </h1>

      <p className="font-display italic text-accent text-[1.05rem] mb-5 relative z-10">
        Thoughtfully crafted. Beautifully plated.
      </p>

      {/* Decorative ornament divider */}
      <div className="flex items-center justify-center gap-2.5 relative z-10">
        <div className="w-10 h-px bg-border" />
        <svg
          width="18" height="22" viewBox="0 0 18 22"
          fill="none" aria-hidden
        >
          <path
            d="M9 2C9 2 5.5 7 5.5 11C5.5 13.209 7.015 15 9 15C10.985 15 12.5 13.209 12.5 11C12.5 7 9 2 9 2Z"
            stroke="#C07A45" strokeWidth="1.2"
          />
          <line x1="9" y1="15" x2="9" y2="21" stroke="#C07A45" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="6.5" y1="18.5" x2="11.5" y2="18.5" stroke="#C07A45" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
        <div className="w-10 h-px bg-border" />
      </div>
    </div>
  )
}

// ── Botanical leaf decoration SVG ────────────────────────────
function LeafDecoration() {
  return (
    <svg width="140" height="200" viewBox="0 0 140 200" fill="none" aria-hidden>
      {/* Main stem */}
      <path
        d="M70 200 C68 165, 64 130, 72 90 C76 72, 74 52, 78 28"
        stroke="#8B7355" strokeWidth="1" fill="none"
      />
      {/* Left leaves */}
      <path d="M64 150 C48 138, 34 126, 26 106" stroke="#8B7355" strokeWidth="0.8" fill="none" />
      <path d="M60 122 C44 112, 30 98, 22 78" stroke="#8B7355" strokeWidth="0.8" fill="none" />
      <path d="M66 95 C52 86, 40 74, 34 58" stroke="#8B7355" strokeWidth="0.8" fill="none" />
      {/* Right leaves */}
      <path d="M72 140 C86 128, 96 116, 102 98" stroke="#8B7355" strokeWidth="0.8" fill="none" />
      <path d="M74 108 C88 98, 100 84, 106 68" stroke="#8B7355" strokeWidth="0.8" fill="none" />
      <path d="M76 76 C88 68, 96 54, 102 40" stroke="#8B7355" strokeWidth="0.8" fill="none" />
      {/* Small top leaves */}
      <path d="M78 48 C86 40, 92 30, 94 18" stroke="#8B7355" strokeWidth="0.6" fill="none" />
      <path d="M74 60 C64 50, 56 38, 52 24" stroke="#8B7355" strokeWidth="0.6" fill="none" />
      {/* Leaf shapes (ellipses) */}
      <ellipse cx="26" cy="106" rx="14" ry="6" transform="rotate(-38 26 106)"
               stroke="#8B7355" strokeWidth="0.6" fill="none" />
      <ellipse cx="102" cy="98" rx="14" ry="6" transform="rotate(38 102 98)"
               stroke="#8B7355" strokeWidth="0.6" fill="none" />
      <ellipse cx="22" cy="78" rx="12" ry="5" transform="rotate(-42 22 78)"
               stroke="#8B7355" strokeWidth="0.6" fill="none" />
      <ellipse cx="106" cy="68" rx="12" ry="5" transform="rotate(42 106 68)"
               stroke="#8B7355" strokeWidth="0.6" fill="none" />
      <ellipse cx="34" cy="58" rx="10" ry="4.5" transform="rotate(-36 34 58)"
               stroke="#8B7355" strokeWidth="0.6" fill="none" />
      <ellipse cx="102" cy="40" rx="10" ry="4.5" transform="rotate(36 102 40)"
               stroke="#8B7355" strokeWidth="0.6" fill="none" />
      <ellipse cx="94" cy="18" rx="8" ry="3.5" transform="rotate(32 94 18)"
               stroke="#8B7355" strokeWidth="0.5" fill="none" />
      <ellipse cx="52" cy="24" rx="8" ry="3.5" transform="rotate(-32 52 24)"
               stroke="#8B7355" strokeWidth="0.5" fill="none" />
    </svg>
  )
}
