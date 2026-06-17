'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Menu, X } from 'lucide-react'
import { RESTAURANT } from '@/lib/data'

const NAV_LINKS = [
  { label: 'Home',     href: '/'     },
  { label: 'Our Menu', href: '/menu' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close overlay on route change
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      {/* ── Main Navbar ─────────────────────────────────────── */}
      <nav className="fixed top-0 inset-x-0 z-50 h-[72px] flex items-center justify-between px-5
                       bg-warm-black">

        {/* Logo with lotus icon */}
        <Link href="/" className="flex items-center gap-3">
          <LotusIcon />
          <div className="flex flex-col leading-tight">
            <span className="font-display text-[1.1rem] font-semibold tracking-[0.2em]
                             text-ivory uppercase">
              {RESTAURANT.name}
            </span>
            <span className="font-mono text-[0.42rem] tracking-[0.2em] text-accent-light/80
                             uppercase mt-0.5">
              {RESTAURANT.subtitle}
            </span>
          </div>
        </Link>

        {/* Right side — Search + Menu */}
        <div className="flex items-center gap-6">
          <button
            className="flex flex-col items-center gap-1 text-ivory/80 hover:text-ivory
                       transition-colors duration-200"
            aria-label="Search"
          >
            <Search size={17} strokeWidth={1.5} />
            <span className="font-mono text-[0.48rem] tracking-[0.15em] uppercase">
              Search
            </span>
          </button>

          <button
            onClick={() => setOpen(true)}
            className="flex flex-col items-center gap-1 text-ivory/80 hover:text-ivory
                       transition-colors duration-200"
            aria-label="Open menu"
          >
            <Menu size={17} strokeWidth={1.5} />
            <span className="font-mono text-[0.48rem] tracking-[0.15em] uppercase">
              Menu
            </span>
          </button>
        </div>
      </nav>

      {/* ── Mobile Overlay ──────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mob-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[900] bg-warm-black grain-overlay
                       flex flex-col items-center justify-center gap-8"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-5xl font-bold italic text-ivory
                             hover:text-accent-light transition-colors duration-200 z-10 relative"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            {/* WhatsApp Reserve link */}
            <motion.a
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              href={`https://wa.me/${RESTAURANT.whatsapp}?text=${encodeURIComponent("Hi Chaurasiya's, I'd like to reserve a table.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-2xl italic text-accent-light/80
                         hover:text-accent-light transition-colors z-10 relative"
            >
              Reserve a Table ↗
            </motion.a>

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 text-ivory z-10"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// ── Lotus flower icon ────────────────────────────────────────
function LotusIcon() {
  return (
    <svg width="36" height="32" viewBox="0 0 40 34" fill="none" className="flex-shrink-0" aria-hidden>
      {/* Center petal */}
      <path d="M20 2 Q23 10, 20 20 Q17 10, 20 2Z" stroke="#D4956A" strokeWidth="1" />
      {/* Inner left petal */}
      <path d="M14 6 Q18 12, 17 22 Q12 14, 14 6Z" stroke="#D4956A" strokeWidth="1" />
      {/* Inner right petal */}
      <path d="M26 6 Q22 12, 23 22 Q28 14, 26 6Z" stroke="#D4956A" strokeWidth="1" />
      {/* Outer left petal */}
      <path d="M8 12 Q13 16, 14 24 Q8 20, 8 12Z" stroke="#D4956A" strokeWidth="1" />
      {/* Outer right petal */}
      <path d="M32 12 Q27 16, 26 24 Q32 20, 32 12Z" stroke="#D4956A" strokeWidth="1" />
      {/* Base curves */}
      <path d="M14 24 Q17 28, 20 30" stroke="#D4956A" strokeWidth="0.8" fill="none" />
      <path d="M26 24 Q23 28, 20 30" stroke="#D4956A" strokeWidth="0.8" fill="none" />
      {/* Small dot at top */}
      <circle cx="20" cy="4" r="1" fill="#D4956A" />
    </svg>
  )
}
