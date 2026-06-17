// ── Menu ─────────────────────────────────────────────────────
export type MenuCategory =
  | 'Starters'
  | 'Mains'
  | 'Pasta'
  | 'Beverages'
  | 'Desserts'

export interface MenuItem {
  id:    number
  cat:   MenuCategory
  name:  string
  desc:  string
  price: number
  /** Unsplash URL in dev, Supabase Storage URL in production */
  img:   string
}

export interface CategoryMeta {
  id:    MenuCategory | 'All'
  label: string
  /** SVG path string for the icon */
  icon:  string
}

// ── Signature Dishes ─────────────────────────────────────────
export interface SignatureDish {
  name:        string
  ingredients: string
  description: string
  price:       string
  image:       string
}

// ── Cart ─────────────────────────────────────────────────────
export interface CartItem {
  item:     MenuItem
  quantity: number
}

// ── Restaurant ───────────────────────────────────────────────
export interface RestaurantInfo {
  name:      string
  subtitle:  string
  hindi:     string
  tagline:   string
  phone:     string
  whatsapp:  string  // digits only with country code e.g. "919118110535"
  address:   string
  fullAddress: string
  hours:     string
  est:       string
  rating:    string
  reviews:   string
}
