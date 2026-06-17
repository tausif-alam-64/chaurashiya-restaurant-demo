'use client'

import Image   from 'next/image'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'
import type { MenuItem } from '@/lib/types'

interface Props {
  item:    MenuItem
  /** 0-based index in the filtered list */
  index:   number
}

export default function MenuCard({ item, index }: Props) {
  const [imgLoaded, setImgLoaded] = useState(false)

  const qty        = useCartStore((s) => s.getQty(item.id))
  const addItem    = useCartStore((s) => s.addItem)
  const removeItem = useCartStore((s) => s.removeItem)

  return (
    <article
      className="flex flex-row bg-white rounded-[20px] overflow-hidden min-h-[175px]
                 shadow-[0_2px_10px_rgba(26,21,16,0.07)]
                 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(26,21,16,0.10)]
                 transition-all duration-300"
    >
      {/* ── Food image — always on left ───────────────────────── */}
      <div className="relative flex-[0_0_42%] min-h-[175px] overflow-hidden">

        {/* Skeleton shimmer — shown until image loads */}
        {!imgLoaded && (
          <div className="absolute inset-0 skeleton" aria-hidden />
        )}

        <Image
          src={item.img}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 42vw, 380px"
          loading="lazy"
          className={`
            object-cover transition-all duration-500
            ${imgLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}
          `}
          onLoad={() => setImgLoaded(true)}
          onError={(e) => {
            ;(e.target as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&auto=format&fit=crop&q=80'
          }}
        />
      </div>

      {/* ── Text body ──────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col justify-between p-[16px_16px_14px]">

        {/* Category + name + description */}
        <div>
          {/* Category label */}
          <span className="font-mono text-[0.6rem] tracking-[0.2em] text-accent uppercase font-medium">
            {item.cat}
          </span>

          <h3 className="font-display font-semibold text-warm-black leading-[1.15] mt-1.5 mb-1.5
                         text-[clamp(1.3rem,2.8vw,1.65rem)]">
            {item.name}
          </h3>

          <p className="font-body font-light text-muted text-[0.74rem] leading-[1.5]
                        max-w-[220px]">
            {item.desc}
          </p>
        </div>

        {/* Price + quantity controls */}
        <div className="flex items-center justify-between mt-3">
          <span className="font-display font-medium text-accent text-[1.15rem]">
            ₹{item.price}
          </span>

          {qty === 0 ? (
            <AddButton onClick={() => addItem(item)} />
          ) : (
            <QtyControl
              qty={qty}
              onAdd={() => addItem(item)}
              onRemove={() => removeItem(item.id)}
            />
          )}
        </div>
      </div>
    </article>
  )
}

// ── Sub-components ────────────────────────────────────────────

function AddButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Add to cart"
      className="w-[34px] h-[34px] rounded-full border-[1.5px] border-accent
                 bg-transparent text-accent flex items-center justify-center
                 hover:bg-accent hover:text-white
                 active:scale-95 transition-all duration-200 flex-shrink-0"
    >
      <Plus size={15} />
    </button>
  )
}

function QtyControl({
  qty,
  onAdd,
  onRemove,
}: {
  qty:      number
  onAdd:    () => void
  onRemove: () => void
}) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onRemove}
        aria-label="Remove one"
        className="w-7 h-7 rounded-full border border-border bg-white text-warm-black
                   flex items-center justify-center hover:border-accent hover:text-accent
                   transition-all duration-200"
      >
        <Minus size={11} />
      </button>
      <span className="font-body text-sm text-warm-black min-w-[18px] text-center">
        {qty}
      </span>
      <button
        onClick={onAdd}
        aria-label="Add one more"
        className="w-7 h-7 rounded-full border-none bg-accent text-white
                   flex items-center justify-center hover:brightness-90
                   transition-all duration-200"
      >
        <Plus size={11} />
      </button>
    </div>
  )
}
