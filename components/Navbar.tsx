'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Clock, MapPin } from 'lucide-react'
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

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

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

        {/* Right side — Menu toggle only (Search removed — non-functional) */}
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
      </nav>

      {/* ── Premium Full-Screen Overlay ──────────────────────── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Dim backdrop — click to close */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[899] bg-black/60 backdrop-blur-sm"
            />

            {/* Slide-in panel */}
            <motion.div
              key="nav-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-[900] w-full sm:w-[400px]
                         bg-warm-black grain-overlay overflow-y-auto
                         flex flex-col"
            >
              {/* ── Close button ────────────────────────────────── */}
              <div className="flex justify-end p-5">
                <button
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 text-ivory/60 hover:text-ivory
                             transition-colors duration-200"
                  aria-label="Close menu"
                >
                  <span className="font-mono text-[0.5rem] tracking-[0.15em] uppercase">
                    Close
                  </span>
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>

              {/* ── Content ─────────────────────────────────────── */}
              <div className="flex-1 flex flex-col justify-center px-10 sm:px-12 pb-12
                              relative z-10">

                {/* Brand */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mb-10"
                >
                  <LotusIcon size="lg" />
                  <p className="font-display text-lg font-semibold tracking-[0.25em]
                               text-ivory uppercase mt-4">
                    {RESTAURANT.name}
                  </p>
                  <p className="font-mono text-[0.52rem] tracking-[0.2em] text-accent-light/70
                               uppercase mt-1">
                    {RESTAURANT.subtitle}
                  </p>
                </motion.div>

                {/* Accent divider */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  style={{ originX: 0 }}
                  className="w-12 h-px bg-accent/50 mb-10"
                />

                {/* Navigation links */}
                <nav className="flex flex-col gap-5 mb-10">
                  {NAV_LINKS.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`font-display text-[2.2rem] font-semibold italic leading-[1.1]
                                   transition-colors duration-200
                                   ${pathname === link.href
                                     ? 'text-accent-light'
                                     : 'text-ivory hover:text-accent-light'
                                   }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* WhatsApp CTA */}
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                  href={`https://wa.me/${RESTAURANT.whatsapp}?text=${encodeURIComponent("Hi Chaurasiya's, I'd like to reserve a table.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#25D366]
                             text-white font-body text-sm rounded-full px-7 py-3.5 w-fit
                             hover:brightness-110 active:scale-[0.97]
                             transition-all duration-200 mb-10"
                >
                  <WhatsAppIcon />
                  Reserve a Table
                </motion.a>

                {/* Thin divider */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  style={{ originX: 0 }}
                  className="w-12 h-px bg-ivory/10 mb-8"
                />

                {/* Contact details */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.55 }}
                  className="flex flex-col gap-3.5"
                >
                  <ContactRow icon={<MapPin size={13} />}>
                    {RESTAURANT.address}
                  </ContactRow>
                  <ContactRow icon={<Phone size={13} />}>
                    <a
                      href={`tel:${RESTAURANT.phone}`}
                      className="hover:text-ivory/70 transition-colors"
                    >
                      {RESTAURANT.phone}
                    </a>
                  </ContactRow>
                  <ContactRow icon={<Clock size={13} />}>
                    {RESTAURANT.hours}
                  </ContactRow>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

// ── Helper: contact info row ─────────────────────────────────
function ContactRow({
  icon,
  children,
}: {
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="text-accent-light/50 mt-0.5 flex-shrink-0">{icon}</span>
      <span className="font-body text-xs text-ivory/40 font-light leading-snug">
        {children}
      </span>
    </div>
  )
}

// ── WhatsApp icon ────────────────────────────────────────────
function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M11.99 0C5.37 0 0 5.373 0 12c0 2.119.554 4.107 1.523 5.833L0 24l6.335-1.652A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.617 0 11.99 0zM12 22c-1.848 0-3.576-.5-5.062-1.37l-.362-.215-3.763.981.999-3.662-.236-.376A9.952 9.952 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  )
}

// ── Lotus flower icon ────────────────────────────────────────
function LotusIcon({ size = 'sm' }: { size?: 'sm' | 'lg' }) {
  const w = size === 'lg' ? 48 : 36
  const h = size === 'lg' ? 42 : 32
  return (
    <svg width={w} height={h} viewBox="0 0 40 34" fill="none" className="flex-shrink-0" aria-hidden>
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
