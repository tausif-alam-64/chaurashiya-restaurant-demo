'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { RESTAURANT } from '@/lib/data'

export default function OpeningStatement() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <section
      ref={ref}
      className="relative bg-warm-black py-20 md:py-28 px-6 text-center overflow-hidden grain-overlay"
    >
      <div className="max-w-[760px] mx-auto relative z-10">

        {/* Top rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ originX: 0.5 }}
          className="w-20 h-px bg-accent mx-auto mb-6"
        />

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display font-normal italic text-ivory leading-[1.35]
                     text-[clamp(1.5rem,3.5vw,2.6rem)] mb-6"
        >
          &ldquo;We don&apos;t cook to feed.<br />
          We cook to remember.&rdquo;
        </motion.p>

        {/* Bottom rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ originX: 0.5 }}
          className="w-20 h-px bg-accent mx-auto mb-4"
        />

        {/* Attribution */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-mono text-[0.62rem] tracking-[0.35em] text-accent-light uppercase"
        >
          — {RESTAURANT.name}, Padrauna, since {RESTAURANT.est}
        </motion.p>
      </div>
    </section>
  )
}
