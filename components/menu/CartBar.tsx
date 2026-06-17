'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'
import { RESTAURANT } from '@/lib/data'

export default function CartBar() {
  const count      = useCartStore((s) => s.getCount())
  const total      = useCartStore((s) => s.getTotal())
  const getMessage = useCartStore((s) => s.getWhatsAppMessage)

  const waUrl = `https://wa.me/${RESTAURANT.whatsapp}?text=${encodeURIComponent(getMessage())}`

  return (
    <AnimatePresence>
      {count > 0 && (
        <motion.a
          key="cart-bar"
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0,  opacity: 1 }}
          exit={{   y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 inset-x-0 z-[300] bg-warm-black
                     px-5 py-3.5 flex items-center justify-between
                     shadow-[0_-4px_24px_rgba(26,21,16,0.5)]
                     no-underline cursor-pointer"
        >
          {/* Left — icon + label + total */}
          <div className="flex items-center gap-3">
            {/* Plate icon */}
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center
                            justify-center flex-shrink-0">
              <PlateIcon />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-semibold text-white text-[0.85rem]
                                 tracking-[0.12em] uppercase">
                  View Cart
                </span>
                <span className="w-5 h-5 rounded-full bg-accent flex items-center
                                 justify-center text-white text-[0.6rem] font-medium">
                  {count}
                </span>
              </div>
              <span className="font-display font-medium text-ivory/80 text-[0.9rem] block">
                ₹{total}
              </span>
            </div>
          </div>

          {/* Right — arrow */}
          <div className="w-10 h-10 flex items-center justify-center">
            <ArrowRight size={22} className="text-ivory" strokeWidth={1.5} />
          </div>
        </motion.a>
      )}
    </AnimatePresence>
  )
}

// ── Plate / dish icon ────────────────────────────────────────
function PlateIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white"
         strokeWidth="1.2" strokeLinecap="round" aria-hidden>
      {/* Plate base */}
      <ellipse cx="12" cy="16" rx="9" ry="3" />
      {/* Dome / cloche */}
      <path d="M5 16 C5 9, 19 9, 19 16" />
      {/* Handle knob */}
      <line x1="12" y1="7" x2="12" y2="9" />
      <circle cx="12" cy="6" r="1" />
    </svg>
  )
}
