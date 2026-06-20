'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Clock, Navigation } from 'lucide-react'
import { RESTAURANT } from '@/lib/data'

export default function VisitUs() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    RESTAURANT.fullAddress
  )}`

  return (
    <section
      ref={ref}
      className="bg-ivory py-20 md:py-28 px-6 overflow-hidden"
    >
      <div className="max-w-[1000px] mx-auto">

        {/* ── Header ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-14"
        >
          <p className="font-mono text-[0.62rem] tracking-[0.4em] text-accent uppercase mb-3">
            Visit Us
          </p>
          <h2 className="font-display font-semibold text-warm-black leading-[1.15]
                         text-[clamp(1.8rem,3.5vw,2.8rem)]">
            Come say hello.
          </h2>
        </motion.div>

        {/* ── Cards grid ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Address card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-[20px] p-7 shadow-[0_2px_12px_rgba(26,21,16,0.06)]
                       flex flex-col"
          >
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center
                            justify-center mb-5">
              <MapPin size={18} className="text-accent" />
            </div>
            <h3 className="font-display font-semibold text-warm-black text-lg mb-2">
              Our Address
            </h3>
            <p className="font-body font-light text-muted text-sm leading-[1.7] mb-5 flex-1">
              {RESTAURANT.fullAddress}
            </p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent font-body text-xs
                         font-medium hover:brightness-75 transition-all duration-200"
            >
              <Navigation size={13} />
              Get Directions
            </a>
          </motion.div>

          {/* Phone card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-[20px] p-7 shadow-[0_2px_12px_rgba(26,21,16,0.06)]
                       flex flex-col"
          >
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center
                            justify-center mb-5">
              <Phone size={18} className="text-accent" />
            </div>
            <h3 className="font-display font-semibold text-warm-black text-lg mb-2">
              Call Us
            </h3>
            <p className="font-body font-light text-muted text-sm leading-[1.7] mb-1.5">
              For reservations & takeaway orders
            </p>
            <a
              href={`tel:${RESTAURANT.phone}`}
              className="font-display font-semibold text-accent text-xl mb-5 flex-1
                         flex items-end"
            >
              {RESTAURANT.phone}
            </a>
            <a
              href={`https://wa.me/${RESTAURANT.whatsapp}?text=${encodeURIComponent("Hi Chaurasiya's!")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#25D366] font-body text-xs
                         font-medium hover:brightness-75 transition-all duration-200"
            >
              <WhatsAppSmall />
              WhatsApp Us
            </a>
          </motion.div>

          {/* Hours card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-[20px] p-7 shadow-[0_2px_12px_rgba(26,21,16,0.06)]
                       flex flex-col"
          >
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center
                            justify-center mb-5">
              <Clock size={18} className="text-accent" />
            </div>
            <h3 className="font-display font-semibold text-warm-black text-lg mb-2">
              Opening Hours
            </h3>
            <div className="flex-1">
              <div className="flex justify-between py-2.5 border-b border-border/40">
                <span className="font-body text-sm text-muted font-light">Mon – Sun</span>
                <span className="font-body text-sm text-warm-black font-medium">8 AM – 10 PM</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="font-body text-sm text-muted font-light">Bakery</span>
                <span className="font-body text-sm text-warm-black font-medium">7 AM – 10 PM</span>
              </div>
            </div>
            <p className="font-mono text-[0.58rem] tracking-[0.15em] text-accent uppercase mt-3">
              Open every day
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ── Tiny WhatsApp icon ───────────────────────────────────────
function WhatsAppSmall() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M11.99 0C5.37 0 0 5.373 0 12c0 2.119.554 4.107 1.523 5.833L0 24l6.335-1.652A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.617 0 11.99 0zM12 22c-1.848 0-3.576-.5-5.062-1.37l-.362-.215-3.763.981.999-3.662-.236-.376A9.952 9.952 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  )
}
