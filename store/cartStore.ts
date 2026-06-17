'use client'

import { create } from 'zustand'
import type { MenuItem, CartItem } from '@/lib/types'

interface CartStore {
  items:       CartItem[]
  addItem:     (item: MenuItem) => void
  removeItem:  (id: number) => void
  clearCart:   () => void
  getQty:      (id: number) => number
  getTotal:    () => number
  getCount:    () => number
  getWhatsAppMessage: () => string
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addItem: (item) =>
    set((state) => {
      const found = state.items.find((i) => i.item.id === item.id)
      if (found) {
        return {
          items: state.items.map((i) =>
            i.item.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
          ),
        }
      }
      return { items: [...state.items, { item, quantity: 1 }] }
    }),

  removeItem: (id) =>
    set((state) => {
      const found = state.items.find((i) => i.item.id === id)
      if (!found) return state
      if (found.quantity === 1) {
        return { items: state.items.filter((i) => i.item.id !== id) }
      }
      return {
        items: state.items.map((i) =>
          i.item.id === id ? { ...i, quantity: i.quantity - 1 } : i,
        ),
      }
    }),

  clearCart: () => set({ items: [] }),

  getQty:   (id)  => get().items.find((i) => i.item.id === id)?.quantity ?? 0,
  getTotal: ()    => get().items.reduce((t, { item, quantity }) => t + item.price * quantity, 0),
  getCount: ()    => get().items.reduce((t, { quantity }) => t + quantity, 0),

  getWhatsAppMessage: () => {
    const { items, getTotal } = get()
    const lines = items
      .map(({ item, quantity }) => `• ${item.name} ×${quantity} = ₹${item.price * quantity}`)
      .join('\n')
    return `Hi Chaurasiya's! I'd like to place an order:\n\n${lines}\n\nTotal: ₹${getTotal()}\n\nPlease confirm availability.`
  },
}))
