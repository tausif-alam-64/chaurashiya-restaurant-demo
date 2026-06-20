'use client'

import Image  from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const STATS = [
  { num: '15+',  lbl: 'Years of Craft'     },
  { num: '200+', lbl: 'Recipes Perfected'  },
  { num: '100%', lbl: 'Pure Vegetarian'    },
]

export default function Story() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      ref={ref}
      className="flex flex-col md:flex-row min-h-[540px] overflow-hidden"
    >
      {/* ── Left: Kitchen photo ────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative w-full h-[280px] md:h-auto md:flex-[0_0_42%] overflow-hidden"
      >
        <Image
          src="https://images.unsplash.com/photo-1641536618422-2cf0bbd10014?w=700&auto=format&fit=crop&q=80"
          alt="Our kitchen"
          fill
          sizes="(max-width: 768px) 100vw, 42vw"
          loading="lazy"
          className="object-cover"
          style={{ filter: 'sepia(15%) brightness(0.9)' }}
        />
        {/* Grain */}
        <div className="absolute inset-0 bg-grain opacity-[0.04] pointer-events-none" />
      </motion.div>

      {/* ── Right: Story content ───────────────────────────── */}
      <div className="flex-1 bg-ivory flex flex-col justify-center
                      px-6 py-12 md:py-0 md:px-[clamp(24px,6vw,80px)]">

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col"
        >
          <p className="font-mono text-[0.62rem] tracking-[0.4em] text-accent uppercase mb-3.5">
            Our Story
          </p>

          <h2 className="font-display font-semibold text-warm-black leading-[1.15]
                         text-[clamp(1.7rem,3vw,2.6rem)] mb-6">
            Rooted in Padrauna.<br />Obsessed with flavour.
          </h2>

          <p className="font-body font-light text-warm-black text-sm leading-[1.82]
                        max-w-[420px] mb-6">
            In Padrauna, when people think of a family meal, they think of Chaurasiya&apos;s.
            It began with one kitchen, one family, and a few recipes passed down from our
            grandparents. Everything since has been an attempt to honour that first meal.
          </p>

          {/* Pull quote */}
          <blockquote className="border-l-2 border-accent pl-4 mb-6">
            <p className="font-display italic text-accent leading-[1.55] text-[1.1rem]">
              &ldquo;Every dish we serve carries a memory of someone cooking it
              with love for someone they loved.&rdquo;
            </p>
          </blockquote>

          <p className="font-body font-light text-warm-black text-sm leading-[1.82]
                        max-w-[420px] mb-8">
            We serve only vegetarian food — not because we have to, but because we believe
            in it. Our sweets are made fresh every morning, our dals slow-cooked every
            night, and our bakery wakes up before the city does.
          </p>

          {/* Stats */}
          <div className="flex gap-7 flex-wrap">
            {STATS.map(({ num, lbl }) => (
              <div key={lbl}>
                <p className="font-display font-bold text-accent text-[2rem] leading-none mb-1">
                  {num}
                </p>
                <p className="font-mono text-[0.58rem] tracking-[0.15em] text-muted uppercase">
                  {lbl}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
