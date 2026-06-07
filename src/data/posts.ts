/**
 * Mock editorial content for the blog. In production these would come from
 * a CMS or content collection; here they're typed records so both the hub
 * and the [slug] route render fully realized articles.
 */

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string; // ISO
  readMins: number;
  cover: string;
  featured?: boolean;
  /** Simple block content rendered by the slug page */
  body: { type: 'p' | 'h2' | 'ul' | 'quote'; text?: string; items?: string[] }[];
};

export const posts: Post[] = [
  {
    slug: 'ultimate-guide-downsizing-estate',
    title: 'The Ultimate Guide to Downsizing Your Estate',
    excerpt:
      'Downsizing a lifetime of belongings is part logistics, part emotion. Here is a calm, room-by-room framework to clear a home without burning out — or throwing away what matters.',
    category: 'Estate & Downsizing',
    author: 'Tasha Greer',
    date: '2026-05-22',
    readMins: 8,
    cover:
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80',
    featured: true,
    body: [
      { type: 'p', text: 'Whether you\'re helping a parent move into assisted living, settling an estate, or simply trading a four-bedroom house for something manageable, downsizing can feel paralyzing. The trick is to stop treating it as one giant task and start treating it as a sequence of small, finishable ones.' },
      { type: 'h2', text: 'Start with a single, low-emotion room' },
      { type: 'p', text: 'Never start in the bedroom or the study — those rooms are landmines of memory. Begin in the garage, the linen closet, or a spare room. Early, easy wins build the momentum you\'ll need for the harder spaces later.' },
      { type: 'h2', text: 'Use the four-pile method' },
      { type: 'ul', items: [
        'Keep — fits the new space and earns its place.',
        'Gift — items a family member has specifically asked for.',
        'Donate — usable goods that deserve a second home.',
        'Haul — broken, worn, or simply unwanted.',
      ] },
      { type: 'p', text: 'Label four areas of the room before you touch a single object. A decision made once is a decision you don\'t have to re-make ten times.' },
      { type: 'quote', text: 'The goal isn\'t an empty house. It\'s a lighter one — for everyone who has to walk through it next.' },
      { type: 'h2', text: 'Photograph before you let go' },
      { type: 'p', text: 'For sentimental items you can\'t keep, a photo preserves the memory without the square footage. This single habit makes parting with things dramatically easier, especially for kids\' artwork, old furniture and collections.' },
      { type: 'h2', text: 'Bring in help for the heavy lifting' },
      { type: 'p', text: 'Once your "haul" and "donate" piles are set, you don\'t have to wrestle them to the curb yourself. A full-service crew can clear a whole home in a day, route the donations to local charities, and leave the property broom-clean and ready to list. That\'s exactly the kind of estate cleanout we handle every week across the Madison metro.' },
    ],
  },
  {
    slug: 'where-does-your-junk-actually-go',
    title: 'Where Does Your Junk Actually Go? Our Eco-Friendly Commitment',
    excerpt:
      'Hauling is easy. Doing it responsibly is the hard part. Follow a single truckload from your driveway through our donate-recycle-dispose pipeline — and see why 68% never reaches a landfill.',
    category: 'Sustainability',
    author: 'Marcus Webb',
    date: '2026-04-30',
    readMins: 6,
    cover:
      'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1600&q=80',
    featured: true,
    body: [
      { type: 'p', text: 'When a junk removal truck pulls away from your home, most people assume there\'s exactly one destination: the dump. For a lot of haulers, that assumption is correct. For us, it isn\'t — and the difference is the entire point of how we operate.' },
      { type: 'h2', text: 'Stop one: the sort' },
      { type: 'p', text: 'Before anything is unloaded at a transfer station, every load gets sorted. Furniture and working appliances are pulled aside. Metal, electronics and cardboard are separated. Yard waste goes in its own stream. What\'s left — genuinely unusable trash — is the only thing destined for disposal.' },
      { type: 'h2', text: 'Stop two: donation' },
      { type: 'p', text: 'Usable furniture, household goods and clothing go to local Madison-area charities, shelters and Habitat ReStore. A couch that\'s "junk" to you might be the first real furniture a resettling family owns. We can even provide a donation receipt for your records.' },
      { type: 'h2', text: 'Stop three: recycling' },
      { type: 'ul', items: [
        'Appliances → certified scrap-metal recyclers (up to 75% reclaimed).',
        'Electronics → DNR-compliant e-waste processors.',
        'Concrete & masonry → crushed into reusable aggregate.',
        'Branches & brush → mulched; leaves → composted.',
      ] },
      { type: 'quote', text: 'Across every load we hauled last year, 68% was diverted from the landfill through donation and recycling.' },
      { type: 'h2', text: 'Stop four: responsible disposal' },
      { type: 'p', text: 'Only what truly can\'t be reused or recycled goes to a licensed transfer station, handled in compliance with Wisconsin DNR rules. It\'s the last resort, not the default — and that\'s a promise baked into every flat-rate quote we give.' },
    ],
  },
  {
    slug: 'junk-removal-cost-madison-2026',
    title: 'How Much Does Junk Removal Cost in Madison? (2026 Pricing Breakdown)',
    excerpt:
      'Truckload pricing, what drives your quote up or down, and how to avoid the "stairs fee" surprise. A transparent look at what you should actually expect to pay.',
    category: 'Pricing & Tips',
    author: 'Ray Delgado',
    date: '2026-04-08',
    readMins: 5,
    cover:
      'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1600&q=80',
    body: [
      { type: 'p', text: 'The honest answer to "how much does junk removal cost?" is: it depends on volume. But that\'s not very useful when you\'re trying to budget. So here\'s how pricing actually works in the Madison area.' },
      { type: 'h2', text: 'You\'re paying for truck space' },
      { type: 'p', text: 'Almost all reputable junk removal is priced by how much of the truck your stuff fills — from a single item up to a full load. A standard dump truck holds roughly 12–15 cubic yards. Your job gets priced against that fraction.' },
      { type: 'h2', text: 'Typical Madison ranges in 2026' },
      { type: 'ul', items: [
        'Single item: $89–$135',
        'Quarter load: $179–$249',
        'Half load: $289–$449',
        'Full load: $519–$749',
      ] },
      { type: 'h2', text: 'What pushes a quote higher' },
      { type: 'p', text: 'Dense, heavy materials (concrete, soil, roofing) are priced partly by weight. Some items — tires, mattresses, appliances with refrigerant — carry small recycling fees because the facilities that handle them charge us. A good hauler tells you all of this upfront.' },
      { type: 'quote', text: 'The number on your quote should be the number you pay. If a hauler adds a "stairs fee" at the curb, that\'s a red flag.' },
      { type: 'h2', text: 'How to get the best price' },
      { type: 'p', text: 'Book a full load rather than several small pickups, combine projects when you can, and always get the all-in quote in writing before the crew starts. With ClearOut, that quote includes labor, loading, stairs, and disposal — every time.' },
    ],
  },
  {
    slug: 'spring-garage-cleanout-checklist',
    title: 'The 7-Step Spring Garage Cleanout Checklist',
    excerpt:
      'Reclaim the most wasted room in your house. A practical weekend checklist to turn a cluttered garage back into usable space — and actually keep it that way.',
    category: 'Home Tips',
    author: 'Diego Santos',
    date: '2026-03-19',
    readMins: 4,
    cover:
      'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1600&q=80',
    body: [
      { type: 'p', text: 'The garage is where good intentions go to pile up. Here\'s a no-nonsense checklist to clear it in a single weekend.' },
      { type: 'h2', text: 'The checklist' },
      { type: 'ul', items: [
        'Pull everything possible out onto the driveway — see what you actually own.',
        'Sort into keep, donate, recycle and haul piles immediately.',
        'Toss anything broken, expired or duplicated without negotiating with yourself.',
        'Group keepers by zone: lawn, tools, sports, seasonal.',
        'Get items off the floor — wall hooks and shelves reclaim square footage.',
        'Sweep and wipe down now-empty surfaces.',
        'Book a haul-away for the donate and trash piles so they don\'t creep back in.',
      ] },
      { type: 'p', text: 'That last step is the one most people skip — and it\'s why the clutter returns. Once your piles are set, a quick garage cleanout pickup gets it all gone in one trip so you can actually park the car again.' },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
export const formatDate = (iso: string) =>
  new Date(iso + 'T12:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
