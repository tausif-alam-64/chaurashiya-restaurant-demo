import Link from 'next/link'
import { MapPin, Phone, Clock } from 'lucide-react'
import { RESTAURANT } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-dark-black pt-14 pb-8 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ── Grid ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <p className="font-display text-2xl font-semibold tracking-[0.18em]
                          text-ivory uppercase mb-1">
              {RESTAURANT.name}
            </p>
            <p className="font-display text-sm italic text-accent-light mb-3">
              {RESTAURANT.subtitle}
            </p>
            <p className="font-body text-xs text-ivory/40 font-light leading-relaxed max-w-[220px]">
              Pure vegetarian cooking from the heart of Padrauna, Uttar Pradesh.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-mono text-[0.58rem] tracking-[0.3em] text-accent-light
                          uppercase mb-4">
              Navigate
            </p>
            {[
              { label: 'Home',           href: '/'     },
              { label: 'Our Menu',       href: '/menu' },
              { label: 'Reserve a Table', href: `https://wa.me/${RESTAURANT.whatsapp}`, external: true },
            ].map((l) => (
              l.external ? (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-body text-xs text-ivory/45 mb-2.5
                             hover:text-ivory transition-opacity duration-200"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.label}
                  href={l.href}
                  className="block font-body text-xs text-ivory/45 mb-2.5
                             hover:text-ivory transition-opacity duration-200"
                >
                  {l.label}
                </Link>
              )
            ))}
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-[0.58rem] tracking-[0.3em] text-accent-light
                          uppercase mb-4">
              Find Us
            </p>
            {[
              { icon: <MapPin size={12} />, text: RESTAURANT.fullAddress },
              { icon: <Phone size={12} />,  text: RESTAURANT.phone },
              { icon: <Clock size={12} />,  text: RESTAURANT.hours },
            ].map(({ icon, text }, i) => (
              <div key={i} className="flex gap-2 items-start mb-2.5">
                <span className="text-accent-light flex-shrink-0 mt-0.5">{icon}</span>
                <span className="font-body text-xs text-ivory/45 font-light leading-snug">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ───────────────────────────────────── */}
        <div className="border-t border-ivory/[0.07] pt-5 flex justify-between
                        flex-wrap gap-2">
          <p className="font-mono text-[0.6rem] text-ivory/22">
            © {new Date().getFullYear()} Chaurasiya Family Restaurant & Bakers. All rights reserved.
          </p>
          <p className="font-mono text-[0.6rem] text-ivory/22">
            Made with ♥ in Padrauna, UP
          </p>
        </div>
      </div>
    </footer>
  )
}
