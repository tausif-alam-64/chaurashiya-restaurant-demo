import type { Metadata } from 'next'
import {
  Cormorant_Garamond,
  DM_Sans,
  DM_Mono,
} from 'next/font/google'
import './globals.css'
import Navbar  from '@/components/Navbar'
import Loader  from '@/components/Loader'

// ── Google Fonts ──────────────────────────────────────────────
const cormorant = Cormorant_Garamond({
  subsets:  ['latin'],
  weight:   ['300', '400', '500', '600', '700'],
  style:    ['normal', 'italic'],
  variable: '--font-display',
  display:  'swap',
})

const dmSans = DM_Sans({
  subsets:  ['latin'],
  weight:   ['300', '400', '500'],
  variable: '--font-body',
  display:  'swap',
})

const dmMono = DM_Mono({
  subsets:  ['latin'],
  weight:   ['400'],
  variable: '--font-mono',
  display:  'swap',
})

// ── Metadata ──────────────────────────────────────────────────
export const metadata: Metadata = {
  title:       'Chaurasiya Family Restaurant & Bakers | Padrauna',
  description:
    'Pure vegetarian restaurant in Padrauna, UP. Serving authentic Indian food, fresh sweets, ice cream, and bakery items since 2010.',
  keywords:    ['restaurant padrauna', 'vegetarian food kushinagar', 'chaurasiya restaurant'],
  openGraph: {
    title:       'Chaurasiya Family Restaurant & Bakers',
    description: 'Pure vegetarian. Made with heart. Padrauna, UP.',
    type:        'website',
  },
}

// ── Root Layout ───────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body className="bg-ivory font-body antialiased">
        {/* Page loader — client component, exits after 1.6s */}
        <Loader />

        {/* Fixed navigation */}
        <Navbar />

        {/* Page content — offset for fixed navbar */}
        <main className="pt-[72px]">{children}</main>
      </body>
    </html>
  )
}
