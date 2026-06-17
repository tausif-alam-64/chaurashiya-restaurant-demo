'use client'

import Image   from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SIGNATURE_DISHES } from '@/lib/data'

export default function SignatureDishes() {
  return (
    <section className="bg-ivory">
      {/* Header */}
      <div className="max-w-[1280px] mx-auto px-6 pt-20 pb-12">
        <p className="font-mono text-[0.62rem] tracking-[0.4em] text-accent uppercase mb-2.5">
          Signature Creations
        </p>
        <h2 className="font-display font-semibold text-warm-black leading-[1.1]
                       text-[clamp(2rem,4vw,3.5rem)]">
          Crafted with intention.
        </h2>
      </div>

      {/* Dishes */}
      {SIGNATURE_DISHES.map((dish, idx) => (
        <DishRow key={dish.name} dish={dish} idx={idx} />
      ))}
    </section>
  )
}

// ── Single dish row ───────────────────────────────────────────
function DishRow({
  dish,
  idx,
}: {
  dish: (typeof SIGNATURE_DISHES)[number]
  idx: number
}) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.25 })
  const isFlip = idx % 2 === 1   // odd → image right

  return (
    <div
      ref={ref}
      className={`flex min-h-[380px] overflow-hidden flex-col
                  ${isFlip ? 'md:flex-row-reverse' : 'md:flex-row'}`}
    >
      {/* ── Photo ─────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: isFlip ? 60 : -60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative w-full h-[260px] md:h-auto md:flex-[0_0_58%] overflow-hidden group"
      >
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          sizes="(max-width: 768px) 100vw, 58vw"
          loading="lazy"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[rgba(40,18,5,0.12)]" />
      </motion.div>

      {/* ── Info ──────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative flex flex-col justify-center flex-1 overflow-hidden
                   bg-ivory px-6 py-10 md:py-0 md:px-[clamp(24px,5vw,72px)]"
      >
        {/* Decorative background number */}
        <span
          className={`absolute top-[-10px] font-display font-light leading-none
                      text-border select-none pointer-events-none
                      text-[7rem] md:text-[8rem]
                      ${isFlip ? 'left-4' : 'right-4'}`}
        >
          0{idx + 1}
        </span>

        <div className="relative z-10">
          <h3 className="font-display font-semibold text-warm-black leading-[1.1] mb-3.5
                         text-[clamp(1.7rem,3vw,2.8rem)]">
            {dish.name}
          </h3>
          <div className="w-10 h-px bg-accent mb-3" />
          <p className="font-mono text-[0.65rem] tracking-[0.1em] text-muted uppercase mb-3">
            {dish.ingredients}
          </p>
          <p className="font-body font-light text-warm-black text-sm leading-[1.8]
                        max-w-[320px] mb-5">
            {dish.description}
          </p>
          <p className="font-mono text-sm text-accent">{dish.price}</p>
        </div>
      </motion.div>
    </div>
  )
}
