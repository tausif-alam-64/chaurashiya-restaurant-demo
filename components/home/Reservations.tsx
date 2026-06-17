'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Clock, MapPin } from 'lucide-react'
import { RESTAURANT } from '@/lib/data'

const WA_ICON = (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M11.99 0C5.37 0 0 5.373 0 12c0 2.119.554 4.107 1.523 5.833L0 24l6.335-1.652A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.617 0 11.99 0zM12 22c-1.848 0-3.576-.5-5.062-1.37l-.362-.215-3.763.981.999-3.662-.236-.376A9.952 9.952 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
)

export default function Reservations() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  const waUrl = `https://wa.me/${RESTAURANT.whatsapp}?text=${encodeURIComponent(
    "Hi Chaurasiya's, I'd like to reserve a table."
  )}`

  return (
    <section
      ref={ref}
      className="relative bg-warm-black py-24 px-6 text-center overflow-hidden grain-overlay"
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-[560px] mx-auto relative z-10"
      >
        {/* Eyebrow */}
        <p className="font-mono text-[0.62rem] tracking-[0.45em] text-accent-light
                      uppercase mb-3.5">
          Join Us
        </p>

        {/* Title */}
        <h2 className="font-display font-bold italic text-ivory leading-none mb-5
                       text-[clamp(2.4rem,6vw,4.5rem)]">
          A Table Awaits.
        </h2>

        {/* Subtitle */}
        <p className="font-body font-light text-ivory/60 text-sm leading-[1.7] mb-10">
          Drop us a message on WhatsApp or give us a call — we&apos;ll take care of
          everything else.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3.5 justify-center mb-10">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 bg-[#25D366] text-white
                       font-body text-sm rounded-full px-7 py-3.5
                       hover:brightness-110 transition-all duration-200"
          >
            {WA_ICON}
            Message on WhatsApp
          </a>
          <a
            href={`tel:${RESTAURANT.phone}`}
            className="flex items-center justify-center gap-2 text-ivory font-body text-sm
                       border border-ivory/30 rounded-full px-7 py-3.5
                       hover:border-ivory/60 transition-all duration-200"
          >
            <Phone size={15} />
            Call Us
          </a>
        </div>

        {/* Details */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 flex-wrap">
          {[
            { icon: <Clock size={13} />,  text: RESTAURANT.hours   },
            { icon: <MapPin size={13} />, text: RESTAURANT.address  },
          ].map(({ icon, text }, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-ivory/45 text-xs font-light"
            >
              {icon}
              {text}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
