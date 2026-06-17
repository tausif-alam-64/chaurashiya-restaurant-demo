'use client'

import { CATEGORIES } from '@/lib/data'
import type { MenuCategory } from '@/lib/types'

interface Props {
  active:    MenuCategory | 'All'
  onChange:  (cat: MenuCategory | 'All') => void
}

export default function CategoryTabs({ active, onChange }: Props) {
  return (
    <div className="overflow-x-auto scrollbar-hide px-4 pb-5 pt-1">
      <div className="flex gap-2.5 max-w-[880px] mx-auto w-max md:w-auto">
        {CATEGORIES.map(({ id, label, icon }) => {
          const isActive = id === active
          return (
            <button
              key={id}
              onClick={() => onChange(id)}
              className={`
                flex flex-col items-center gap-1.5 px-4 py-3.5 rounded-[14px]
                border-none cursor-pointer whitespace-nowrap flex-shrink-0 min-w-[66px]
                font-body text-[0.68rem] transition-all duration-200
                ${isActive
                  ? 'bg-warm-black text-white shadow-[0_4px_20px_rgba(26,21,16,0.25)]'
                  : 'bg-white text-muted shadow-[0_1px_6px_rgba(26,21,16,0.07)] hover:shadow-[0_2px_12px_rgba(26,21,16,0.1)]'
                }
              `}
            >
              {/* SVG icon from path string */}
              <svg
                width="17" height="17" viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d={icon} />
              </svg>
              {label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
