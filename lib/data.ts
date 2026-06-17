import type {
  RestaurantInfo,
  MenuItem,
  CategoryMeta,
  SignatureDish,
} from './types'

// ─────────────────────────────────────────────────────────────
// RESTAURANT INFO
// ─────────────────────────────────────────────────────────────
export const RESTAURANT: RestaurantInfo = {
  name:        'Chaurasiya',
  subtitle:    'Family Restaurant & Bakers',
  hindi:       'चौरसिया फैमिली रेस्टोरेंट',
  tagline:     'Pure vegetarian. Made with heart.',
  phone:       '09118110535',
  whatsapp:    '919118110535',
  address:     'Jaisawal Petrol Pump, Ramkola Road, Padrauna',
  fullAddress: 'Jaisawal Petrol Pump, Ramkola Rd, Padrauna, UP 274304',
  hours:       '8:00 AM – 10:00 PM, Every Day',
  est:         '2010',
  rating:      '3.8',
  reviews:     '652',
}

// ─────────────────────────────────────────────────────────────
// SIGNATURE DISHES  (home page editorial section)
// ─────────────────────────────────────────────────────────────
export const SIGNATURE_DISHES: SignatureDish[] = [
  {
    name:        'Dal Makhani',
    ingredients: 'Black lentils · desi butter · cream · whole spices',
    description:
      'Cooked overnight on a slow flame. The kind of patience that turns a humble lentil into something people drive across town for.',
    price: '₹129',
    image:
      'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=900&auto=format&fit=crop&q=80',
  },
  {
    name:        'Shahi Paneer',
    ingredients: 'Cottage cheese · tomato · cashew · cardamom · cream',
    description:
      'Three generations of this family have grown up eating this gravy. Rich, warming, and unmistakably Chaurasiya\'s.',
    price: '₹149',
    image:
      'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=900&auto=format&fit=crop&q=80',
  },
  {
    name:        'Mango Kulfi',
    ingredients: 'Alphonso mango · full-cream milk · cardamom · saffron',
    description:
      'No shortcuts. Just slow-frozen pure mango and cream — the way it has always been made in Uttar Pradesh kitchens.',
    price: '₹79',
    image:
      'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=900&auto=format&fit=crop&q=80',
  },
]

// ─────────────────────────────────────────────────────────────
// MENU CATEGORIES
// ─────────────────────────────────────────────────────────────
export const CATEGORIES: CategoryMeta[] = [
  {
    id:    'All',
    label: 'All',
    icon:  'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z',
  },
  {
    id:    'Starters',
    label: 'Starters',
    icon:  'M4 15h16M6 15c0-5 2.7-8 6-8s6 3 6 8M12 7V4M9 9L7.5 6M15 9l1.5-3',
  },
  {
    id:    'Mains',
    label: 'Mains',
    icon:  'M3 12h18M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7M3 12a9 9 0 0118 0M8 4v4M12 2v5M16 4v4',
  },
  {
    id:    'Pasta',
    label: 'Pasta',
    icon:  'M12 3v7M9 3c0 4 3 5 3 7M15 3c0 4-3 5-3 7M9 13h6M11 13v6a1 1 0 002 0v-6',
  },
  {
    id:    'Beverages',
    label: 'Beverages',
    icon:  'M17 9h1a3 3 0 010 6h-1M4 9h13v7a4 4 0 01-4 4H8a4 4 0 01-4-4V9zM7 3v3M11 2v4M15 3v3',
  },
  {
    id:    'Desserts',
    label: 'Desserts',
    icon:  'M6 14h12l-1 6a1 1 0 01-1 1H8a1 1 0 01-1-1l-1-6zM6 14a6 6 0 0112 0M12 8V6M10 10l-1-2M14 10l1-2',
  },
]

// ─────────────────────────────────────────────────────────────
// MENU ITEMS
// ─────────────────────────────────────────────────────────────
export const MENU_ITEMS: MenuItem[] = [
  // ── Starters ────────────────────────────────────────────────
  {
    id: 1, cat: 'Starters',
    name: 'Crispy Corn Bites',
    desc: 'Crispy corn nuggets tossed with herbs & spices. Served with mint dip.',
    price: 229,
    img: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&auto=format&fit=crop&q=80',
    
  },
  {
    id: 2, cat: 'Starters',
    name: 'Paneer Tikka',
    desc: 'Cottage cheese in hung curd marinade, chargrilled on skewers in our tandoor.',
    price: 249,
    img: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 3, cat: 'Starters',
    name: 'Hara Bhara Kebab',
    desc: 'Spinach and green pea patties with cottage cheese, shallow fried golden.',
    price: 199,
    img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 4, cat: 'Starters',
    name: 'Veg Spring Rolls',
    desc: 'Crispy golden rolls filled with spiced cabbage, carrots & glass noodles.',
    price: 189,
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=80',
  },

  // ── Mains ───────────────────────────────────────────────────
  {
    id: 5, cat: 'Mains',
    name: 'Paneer Tikka Sizzler',
    desc: 'Cottage cheese marinated in Indian spices, grilled with peppers & onions.',
    price: 299,
    img: 'https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 6, cat: 'Mains',
    name: 'Dal Makhani',
    desc: 'Black lentils slow-cooked overnight with desi butter, cream & aromatic whole spices.',
    price: 249,
    img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 7, cat: 'Mains',
    name: 'Kadai Paneer',
    desc: 'Paneer and capsicum cooked in a robust tomato-onion base with kadai masala.',
    price: 269,
    img: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 8, cat: 'Mains',
    name: 'Veg Biryani',
    desc: 'Fragrant basmati rice layered with seasonal vegetables, saffron & fried onions.',
    price: 279,
    img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=80',
  },

  // ── Pasta ───────────────────────────────────────────────────
  {
    id: 9, cat: 'Pasta',
    name: 'Creamy Pesto Pasta',
    desc: 'Penne pasta in a creamy basil pesto sauce with veggies & parmesan.',
    price: 349,
    img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 10, cat: 'Pasta',
    name: 'Alfredo Penne',
    desc: 'Penne in a rich parmesan cream sauce with sautéed mushrooms & fresh herbs.',
    price: 329,
    img: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 11, cat: 'Pasta',
    name: 'Arrabiata Spaghetti',
    desc: 'Spaghetti in spicy tomato sauce with olives, capers & fresh basil leaves.',
    price: 299,
    img: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 12, cat: 'Pasta',
    name: 'Mac & Cheese',
    desc: 'Elbow macaroni baked in a three-cheese sauce with a golden herb crust.',
    price: 319,
    img: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=500&auto=format&fit=crop&q=80',
  },

  // ── Beverages ───────────────────────────────────────────────
  {
    id: 13, cat: 'Beverages',
    name: 'Masala Chai',
    desc: 'Ginger, cardamom & cinnamon steeped in Assam tea with fresh farm milk.',
    price: 79,
    img: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 14, cat: 'Beverages',
    name: 'Cold Coffee',
    desc: 'Strong brewed coffee blended with chilled milk and a scoop of vanilla ice cream.',
    price: 149,
    img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 15, cat: 'Beverages',
    name: 'Fresh Lime Soda',
    desc: 'Freshly squeezed lime with chilled soda. Sweet, salted, or both — you choose.',
    price: 99,
    img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 16, cat: 'Beverages',
    name: 'Mango Lassi',
    desc: 'Thick churned yoghurt blended with Alphonso mango pulp & a hint of cardamom.',
    price: 129,
    img: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=500&auto=format&fit=crop&q=80',
  },

  // ── Desserts ────────────────────────────────────────────────
  {
    id: 17, cat: 'Desserts',
    name: 'Gulab Jamun',
    desc: 'Soft khoya dumplings soaked in warm rose-cardamom syrup. Served warm.',
    price: 149,
    img: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 18, cat: 'Desserts',
    name: 'Chocolate Brownie',
    desc: 'Dense dark chocolate brownie served warm with a scoop of vanilla ice cream.',
    price: 199,
    img: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 19, cat: 'Desserts',
    name: 'Rasmalai',
    desc: 'Flattened paneer discs in sweetened saffron milk with crushed pistachios.',
    price: 179,
    img: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 20, cat: 'Desserts',
    name: 'Gajar Halwa',
    desc: 'Red carrots slow-cooked in desi ghee, full-cream milk & cardamom. Seasonal.',
    price: 169,
    img: 'https://images.unsplash.com/photo-1662116765994-1e4200c43589?w=500&auto=format&fit=crop&q=80',
  },
]
