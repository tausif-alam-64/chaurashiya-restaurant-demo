'use client'

import Image from 'next/image'
import Link  from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { RESTAURANT } from '@/lib/data'

// Stagger config for right-side content
const container = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] flex-col md:flex-row">

      {/* ── Left: Atmospheric image (60%) ─────────────────── */}
      <div className="relative w-full md:w-[60%] h-[65vw] min-h-[280px] md:h-auto overflow-hidden flex-shrink-0">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1400&auto=format&fit=crop&q=80"
          alt="Chaurasiya Restaurant"
          fill
          priority          /* hero is above fold — eager load */
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover scale-105 animate-[kenBurns_12s_ease_forwards]"
        />
        {/* Warm overlay */}
        <div className="absolute inset-0 bg-[rgba(40,18,5,0.22)]" />
        {/* Grain */}
        <div className="absolute inset-0 bg-grain opacity-[0.04] pointer-events-none" />
      </div>

      {/* ── Right: Content (40%) ───────────────────────────── */}
      <div className="relative w-full md:w-[40%] bg-ivory flex flex-col
                      justify-center px-6 md:px-12 py-10 md:py-0 min-h-[auto] md:min-h-[calc(100vh-4rem)]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col"
        >
          {/* Established */}
          <motion.p variants={item}
            className="font-mono text-[0.6rem] tracking-ultra text-muted uppercase mb-11">
            Est. {RESTAURANT.est} · Padrauna, UP
          </motion.p>

          {/* Name */}
          <motion.h1 variants={item}
            className="font-display font-bold text-warm-black leading-[1.0]
                       text-[clamp(2.4rem,4.5vw,4.2rem)] mb-2.5">
            {RESTAURANT.name}
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={item}
            className="font-display font-light text-muted leading-[1.15]
                       text-[clamp(1.2rem,2.2vw,1.8rem)] mb-5">
            {RESTAURANT.subtitle}
          </motion.p>

          {/* Rule */}
          <motion.div variants={item}
            className="w-14 h-px bg-accent mb-5" />

          {/* Tagline */}
          <motion.p variants={item}
            className="font-body font-light text-muted text-sm leading-[1.8]
                       max-w-[300px] mb-9">
            Pure vegetarian cooking from the heart of Padrauna. Every recipe carries
            the warmth of a family kitchen.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item}
            className="flex flex-wrap items-center gap-4">
            <Link
              href="/menu"
              className="bg-accent text-white font-body text-xs tracking-wide
                         rounded-full px-7 py-3.5 hover:brightness-90
                         active:scale-[0.97] transition-all duration-200"
            >
              View Our Menu
            </Link>
            <a
              href={`https://wa.me/${RESTAURANT.whatsapp}?text=${encodeURIComponent("Hi Chaurasiya's, I'd like to reserve a table.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-warm-black font-body text-xs
                         hover:text-accent transition-colors duration-200"
            >
              Reserve a Table
              <ArrowRight size={13} className="text-accent" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-6 md:left-12 hidden md:flex items-center gap-2.5"
        >
          <div className="w-px h-7 bg-accent opacity-50" />
          <span className="font-mono text-[0.58rem] tracking-[0.35em] text-muted uppercase">
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  )
}
