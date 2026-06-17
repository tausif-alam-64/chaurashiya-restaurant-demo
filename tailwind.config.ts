import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body:    ['var(--font-body)', 'Helvetica Neue', 'sans-serif'],
        mono:    ['var(--font-mono)', 'Courier New', 'monospace'],
      },
      colors: {
        ivory:        '#F5F0E8',
        'warm-black': '#1A1510',
        'dark-black': '#0F0C08',
        accent:       '#C07A45',
        'accent-light':'#D4956A',
        muted:        '#6B5E52',
        border:       '#D4C4B0',
      },
      fontSize: {
        '7xl': ['7rem',   { lineHeight: '1' }],
        '8xl': ['9rem',   { lineHeight: '1' }],
      },
      spacing: {
        section:        '120px',
        'section-mobile':'80px',
      },
      letterSpacing: {
        widest: '0.3em',
        ultra:  '0.4em',
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}

export default config
