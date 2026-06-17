'use client'

import { motion, AnimatePresence } from 'framer-motion'
import MenuCard from './MenuCard'
import type { MenuItem } from '@/lib/types'

interface Props {
  items: MenuItem[]
  /** Used as AnimatePresence key so list re-animates on category change */
  category: string
}

export default function MenuList({ items, category }: Props) {
  return (
    <div className="max-w-[880px] mx-auto px-4 pb-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="flex flex-col gap-3.5"
        >
          {items.length === 0 ? (
            <p className="text-center text-muted font-body font-light py-16">
              No items in this category yet.
            </p>
          ) : (
            items.map((item, idx) => (
              <MenuCard key={item.id} item={item} index={idx} />
            ))
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
