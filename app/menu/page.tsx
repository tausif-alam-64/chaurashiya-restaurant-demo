'use client'

import { useState, useMemo } from 'react'
import MenuHeader   from '@/components/menu/MenuHeader'
import CategoryTabs from '@/components/menu/CategoryTabs'
import MenuList     from '@/components/menu/MenuList'
import CartBar      from '@/components/menu/CartBar'
import { MENU_ITEMS } from '@/lib/data'
import type { MenuCategory } from '@/lib/types'

export default function MenuPage() {
  const [activeCat, setActiveCat] = useState<MenuCategory | 'All'>('All')

  // Filter items — memoised so it only re-computes when category changes
  const filtered = useMemo(
    () =>
      activeCat === 'All'
        ? MENU_ITEMS
        : MENU_ITEMS.filter((item) => item.cat === activeCat),
    [activeCat],
  )

  return (
    <>
      <div className="bg-ivory min-h-screen pb-24">
        <MenuHeader />

        <CategoryTabs
          active={activeCat}
          onChange={setActiveCat}
        />

        <MenuList
          items={filtered}
          category={activeCat}
        />
      </div>

      {/* Sticky cart bar — appears when cart has items */}
      <CartBar />
    </>
  )
}
