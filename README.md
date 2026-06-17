# Chaurasiya Family Restaurant & Bakers

Premium Next.js restaurant website — pure vegetarian, Padrauna UP.

---

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
app/
  layout.tsx          ← fonts (Cormorant Garamond, DM Sans, DM Mono), metadata
  page.tsx            ← home page
  menu/page.tsx       ← menu page

components/
  Loader.tsx          ← page reveal animation
  Navbar.tsx          ← fixed dark nav + mobile overlay
  Footer.tsx          ← minimal dark footer
  home/
    Hero.tsx          ← 60/40 split hero
    OpeningStatement.tsx
    SignatureDishes.tsx ← editorial alternating layout
    Story.tsx         ← magazine spread
    Reservations.tsx  ← WhatsApp-first CTA
  menu/
    MenuHeader.tsx    ← "Our Menu" + ornament
    CategoryTabs.tsx  ← scrollable category pills
    MenuCard.tsx      ← alternating dish card with lazy image
    MenuList.tsx      ← filtered list with AnimatePresence
    CartBar.tsx       ← sticky bottom cart

lib/
  data.ts             ← ALL restaurant info + menu items (edit here)
  types.ts            ← TypeScript interfaces

store/
  cartStore.ts        ← Zustand cart (add/remove/WhatsApp message)
```

---

## Adding More Menu Items (30-40+ dishes)

Open `lib/data.ts` and add to the `MENU_ITEMS` array.
Images load lazily — 40 items = zero performance problem.

```typescript
{
  id: 29, cat: 'Mains',
  name: 'New Dish',
  desc: 'Description of the dish.',
  price: 149,
  img: 'https://images.unsplash.com/photo-XXXX?w=500&auto=format&fit=crop&q=80',
},
```

---

## Production Images (Supabase Storage)

For real food photos instead of Unsplash placeholders:

1. Go to Supabase → Storage → Create bucket `menu-images` (public)
2. Upload your food photos as WebP (recommended) or JPEG
3. In `lib/data.ts`, replace `img` values:
   ```typescript
   img: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/menu-images/dal-makhani.webp`
   ```
4. In `next.config.js`, uncomment the Supabase hostname block
5. Add to `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-ref.supabase.co
   ```

Supabase Storage auto-serves from a global CDN — zero extra config needed.

---

## Deployment (Vercel)

```bash
# 1. Push to GitHub
git init && git add . && git commit -m "init"
git remote add origin https://github.com/YOUR_USERNAME/chaurasiya-restaurant.git
git push -u origin main

# 2. Go to vercel.com → Import → Select repo → Deploy
# 3. Add NEXT_PUBLIC_SUPABASE_URL in Vercel environment variables
```

---

## Customisation

All content lives in `lib/data.ts`:
- `RESTAURANT` — name, phone, WhatsApp, address, hours
- `SIGNATURE_DISHES` — 3 featured dishes on home page
- `MENU_ITEMS` — full menu (add as many as you want)
- `CATEGORIES` — tab labels and icons

Colors in `tailwind.config.ts` → `theme.extend.colors`
Fonts in `app/layout.tsx` → Google Fonts imports
