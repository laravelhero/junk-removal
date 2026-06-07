/**
 * Central business data — single source of truth for NAP, navigation,
 * services and reusable marketing copy. Imported by SEO schema, header,
 * footer and individual pages so the site stays consistent and DRY.
 */

export const business = {
  name: 'ClearOut Junk Removal',
  legalName: 'ClearOut Hauling LLC',
  tagline: 'We Haul It All!',
  phone: '(608) 555-0199',
  phoneHref: 'tel:+16085550199',
  email: 'dispatch@clearoutjunk.com',
  emailHref: 'mailto:dispatch@clearoutjunk.com',
  address: {
    street: '2480 Industrial Park Way',
    city: 'Madison',
    region: 'WI',
    regionName: 'Wisconsin',
    postal: '53713',
    country: 'US',
  },
  geo: { lat: 43.0731, lng: -89.4012 },
  hours: 'Mon–Sat 7:00 AM – 7:00 PM',
  openingHoursSpec: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], open: '07:00', close: '19:00' },
  ],
  rating: { value: '4.6', count: '150' },
  founded: '2014',
  url: 'https://www.clearoutjunk.com',
  social: {
    facebook: 'https://facebook.com/clearoutjunk',
    instagram: 'https://instagram.com/clearoutjunk',
    google: 'https://g.page/clearoutjunk',
  },
  serviceAreas: [
    'Madison',
    'Sun Prairie',
    'Middleton',
    'Fitchburg',
    'Verona',
    'Waunakee',
    'McFarland',
    'Stoughton',
    'DeForest',
    'Monona',
  ],
} as const;

export const primaryNav = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services', hasMenu: true },
  { label: 'Projects', href: '/projects' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
] as const;

export type Service = {
  slug: string;
  title: string;
  short: string;
  category: 'residential' | 'commercial';
  blurb: string;
  hero: string;
  /** Tailwind-friendly icon key resolved in Icon.astro */
  icon:
    | 'sofa'
    | 'appliance'
    | 'garage'
    | 'debris'
    | 'leaf'
    | 'house'
    | 'truck'
    | 'recycle';
};

export const services: Service[] = [
  {
    slug: 'furniture-removal',
    title: 'Furniture Removal',
    short: 'Sofas, beds, tables & more',
    category: 'residential',
    blurb: 'We remove sofas, beds, tables & more.',
    icon: 'sofa',
    hero: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'appliance-removal',
    title: 'Appliance Removal',
    short: "Old appliances? We'll take them",
    category: 'residential',
    blurb: "Old appliances? We'll take them.",
    icon: 'appliance',
    hero: 'https://images.unsplash.com/photo-1581622558663-b2e33377dfb2?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'garage-cleanouts',
    title: 'Garage Cleanouts',
    short: 'Reclaim your space',
    category: 'residential',
    blurb: 'Reclaim your space. We handle the mess.',
    icon: 'garage',
    hero: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'construction-debris',
    title: 'Construction Debris',
    short: 'Keep your project on track',
    category: 'commercial',
    blurb: 'We haul debris so your project stays on track.',
    icon: 'debris',
    hero: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'yard-waste',
    title: 'Yard Waste Removal',
    short: 'Leaves, branches & yard debris',
    category: 'residential',
    blurb: 'Leaves, branches, and yard debris gone.',
    icon: 'leaf',
    hero: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'estate-cleanouts',
    title: 'Estate Cleanouts',
    short: 'Compassionate full-property service',
    category: 'residential',
    blurb: 'Compassionate service when you need it most.',
    icon: 'house',
    hero: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80',
  },
];

export const trustPoints = [
  { label: 'Fast Service', detail: 'Same-day & next-day appointments across the metro.' },
  { label: 'Upfront Pricing', detail: 'You see the all-in price before we lift a finger.' },
  { label: 'Eco-Friendly', detail: 'We donate and recycle to keep junk out of landfills.' },
] as const;

export const howItWorks = [
  { step: '1', title: 'Book', icon: 'phone', detail: 'Call or book online in minutes.' },
  { step: '2', title: 'We Haul', icon: 'truck', detail: 'We show up on time and get to work.' },
  { step: '3', title: 'You Relax', icon: 'thumb', detail: 'Your space is clean. Stress is gone.' },
] as const;
