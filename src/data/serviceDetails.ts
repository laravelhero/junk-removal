/**
 * Long-form, SEO-optimized content for each service landing page:
 * intro copy, "what we take", weight/volume guidelines, pricing tiers
 * and localized FAQs. Keyed by the same slug used in site.ts `services`.
 */

export type PricingTier = {
  name: string;
  size: string;
  price: string;
  blurb: string;
  popular?: boolean;
};

export type WeightGuide = { item: string; weight: string; note: string };

export type ServiceDetail = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  heroImage: string;
  takes: string[];
  doesntTake?: string[];
  longCopy: { heading: string; body: string }[];
  weightGuide: WeightGuide[];
  pricing: PricingTier[];
  faqs: { q: string; a: string }[];
};

export const serviceDetails: Record<string, ServiceDetail> = {
  'furniture-removal': {
    slug: 'furniture-removal',
    metaTitle: 'Furniture Removal & Disposal',
    metaDescription:
      'Same-day furniture removal in Madison, WI. We haul sofas, sectionals, mattresses, dressers & more — donated or recycled when possible. Upfront pricing, no stairs surcharge surprises.',
    h1: 'Furniture Removal That Spares Your Back & The Landfill',
    intro:
      'Old couch, broken recliner, a bedroom set you finally upgraded? We carry it out — down stairs, through tight doorways, out of the basement — and route it to donation or recycling whenever it still has life left.',
    heroImage:
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=2000&q=80',
    takes: [
      'Sofas, sectionals & loveseats',
      'Mattresses & box springs',
      'Dressers, armoires & wardrobes',
      'Dining sets & tables',
      'Recliners & office chairs',
      'Bookcases & entertainment centers',
      'Bed frames & headboards',
      'Patio & outdoor furniture',
    ],
    longCopy: [
      {
        heading: 'No item too heavy, no staircase too narrow',
        body: 'Our two-person crews are trained in safe-lift technique and arrive with dollies, straps and furniture sliders. Third-floor walk-up? Tight basement turn? It\'s already included in your quote — we never spring a "stairs fee" on you at the curb.',
      },
      {
        heading: 'Donated first, recycled second',
        body: 'Gently used furniture in the Madison area goes to local charities, Habitat ReStore and family-resource shelters. Worn pieces are broken down so the wood, metal and textiles can be recycled instead of landfilled. You get a clutter-free room and a clear conscience.',
      },
    ],
    weightGuide: [
      { item: 'Three-seat sofa', weight: '90–120 lbs', note: 'Single-item or part of a load' },
      { item: 'Queen mattress + box spring', weight: '70–110 lbs', note: 'Recycled at a certified facility' },
      { item: 'Solid-wood dresser', weight: '100–160 lbs', note: 'Often donation-eligible' },
      { item: 'Sectional (3–4 pc)', weight: '180–260 lbs', note: 'Typically a 1/4–1/2 truckload' },
    ],
    pricing: [
      { name: 'Single Item', size: 'One piece', price: '$89–$129', blurb: 'A lone couch, mattress or dresser hauled away fast.' },
      { name: 'Quarter Load', size: 'Up to 4 pieces', price: '$179–$249', blurb: 'A small room\'s worth of furniture.', popular: true },
      { name: 'Half Load', size: 'Full bedroom or living room', price: '$289–$369', blurb: 'A complete furniture set, cleared in one trip.' },
      { name: 'Full Load', size: 'Whole-home furnishings', price: '$519–$649', blurb: 'Moving out or downsizing? We take it all.' },
    ],
    faqs: [
      { q: 'Do you charge extra for stairs or basement removals in Madison?', a: 'No. Unlike many haulers, our quotes are all-inclusive. Stairs, tight hallways and basement carry-outs are part of the price we give you upfront — never an upcharge at pickup.' },
      { q: 'Can you take just one piece of furniture?', a: 'Absolutely. Single-item pickups start at $89. We\'ll give you an exact, no-obligation price before we load anything.' },
      { q: 'Will my old couch end up in a landfill?', a: 'Only as a last resort. We donate furniture in usable condition to local Madison-area charities and recycle the materials of anything too worn to reuse — diverting the majority of every load.' },
      { q: 'How fast can you pick up?', a: 'Most furniture removals across the Madison metro are scheduled same-day or next-day. Book online in minutes or call our dispatch team.' },
    ],
  },

  'appliance-removal': {
    slug: 'appliance-removal',
    metaTitle: 'Appliance Removal & Recycling',
    metaDescription:
      'Refrigerator, washer, dryer & water-heater removal in Madison, WI. EPA-compliant refrigerant handling and certified appliance recycling. Same-day pickup, upfront pricing.',
    h1: 'Appliance Removal — Hauled Out & Recycled Right',
    intro:
      'That dead fridge in the garage or the washer that finally quit? We disconnect, haul and recycle large appliances the compliant way — including proper refrigerant recovery on units that need it.',
    heroImage:
      'https://images.unsplash.com/photo-1581622558663-b2e33377dfb2?auto=format&fit=crop&w=2000&q=80',
    takes: [
      'Refrigerators & freezers',
      'Washers & dryers',
      'Stoves, ovens & ranges',
      'Dishwashers',
      'Water heaters',
      'Microwaves & small appliances',
      'Air conditioners & dehumidifiers',
      'Trash compactors',
    ],
    longCopy: [
      {
        heading: 'EPA-compliant refrigerant handling',
        body: 'Refrigerators, freezers, AC units and dehumidifiers contain refrigerants that are illegal to dump untreated. We route these units to facilities that recover refrigerants and oils to federal EPA standards — so you stay compliant and the environment stays protected.',
      },
      {
        heading: 'Up to 75% of every appliance recycled',
        body: 'Major appliances are mostly steel, aluminum and copper. We deliver them to certified scrap-metal recyclers where the vast majority of each unit is reclaimed — keeping bulky metal out of Wisconsin landfills.',
      },
    ],
    weightGuide: [
      { item: 'Side-by-side refrigerator', weight: '250–350 lbs', note: 'Refrigerant recovery required' },
      { item: 'Washer or dryer', weight: '150–200 lbs', note: 'Steel recycled' },
      { item: 'Electric range / oven', weight: '130–180 lbs', note: 'Steel recycled' },
      { item: 'Water heater (40–50 gal)', weight: '120–150 lbs', note: 'Drained before haul' },
    ],
    pricing: [
      { name: 'Single Appliance', size: 'One unit', price: '$95–$135', blurb: 'One fridge, washer or stove removed and recycled.' },
      { name: 'Two Appliances', size: 'Pair pickup', price: '$159–$209', blurb: 'Washer + dryer or fridge + range.', popular: true },
      { name: 'Kitchen Set', size: '3–4 units', price: '$249–$329', blurb: 'Clearing out a full kitchen reno.' },
      { name: 'Full Load', size: 'Whole-property', price: '$499–$629', blurb: 'Rental turnovers and full appliance swaps.' },
    ],
    faqs: [
      { q: 'Do I need to disconnect the appliance first?', a: 'You don\'t have to. Our crew can disconnect standard plug-in and water-line appliances. For hardwired or gas units, we ask that a licensed pro disconnect them first for safety.' },
      { q: 'Do you handle refrigerant recovery legally?', a: 'Yes. Refrigerators, freezers and AC units are routed to facilities that recover refrigerants to EPA standards. We never dump units containing refrigerants.' },
      { q: 'Can you get a heavy fridge up from the basement?', a: 'Yes — our crews handle basement and upper-floor appliance removals with proper straps and dollies, included in your quote at no surcharge.' },
      { q: 'Is appliance recycling included in the price?', a: 'Always. Recycling and compliant disposal are built into your flat, upfront price. No hidden environmental fees.' },
    ],
  },

  'garage-cleanouts': {
    slug: 'garage-cleanouts',
    metaTitle: 'Garage Cleanout Services',
    metaDescription:
      'Reclaim your garage in Madison, WI. We clear boxes, old tools, tires, broken equipment and years of clutter in one visit. Sorted, donated, recycled. Free upfront quote.',
    h1: 'Garage Cleanouts — Park Your Car Again',
    intro:
      'Somewhere under the boxes, busted lawn gear and decade-old paint cans is a garage. Our crew sorts, hauls and sweeps so you walk back into usable space in a single afternoon.',
    heroImage:
      'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=2000&q=80',
    takes: [
      'Cardboard boxes & old storage bins',
      'Broken tools & power equipment',
      'Bicycles, sports & exercise gear',
      'Scrap wood & leftover building materials',
      'Old tires & auto parts',
      'Lawn mowers & yard equipment',
      'Shelving units & workbenches',
      'General accumulated clutter',
    ],
    longCopy: [
      {
        heading: 'We do the sorting, not you',
        body: 'You don\'t have to pre-stage a thing. Point us at the pile and our crew separates donate-able items, recyclables and trash on the spot. We load it, you supervise from the driveway with a coffee.',
      },
      {
        heading: 'Swept clean when we leave',
        body: 'A ClearOut garage cleanout isn\'t done until the floor is broom-swept. You\'re left with open, usable space — ready for the car, a workshop, or whatever you\'ve been wanting that room back for.',
      },
    ],
    weightGuide: [
      { item: 'Standard 2-car garage clutter', weight: '600–1,200 lbs', note: 'Typically a 1/2–full truckload' },
      { item: 'Stack of old tires (set of 4)', weight: '80–120 lbs', note: 'Recycled, small per-tire fee' },
      { item: 'Push mower', weight: '60–90 lbs', note: 'Drained & scrapped' },
      { item: 'Metal shelving unit', weight: '40–70 lbs', note: 'Steel recycled' },
    ],
    pricing: [
      { name: 'Corner Clear', size: '1/8 – 1/4 truck', price: '$129–$229', blurb: 'A cluttered corner or a few bays of boxes.' },
      { name: 'Half Garage', size: '1/2 truck', price: '$289–$369', blurb: 'A solid afternoon of accumulated stuff.', popular: true },
      { name: 'Full Garage', size: '3/4 – full truck', price: '$419–$589', blurb: 'Years of clutter, gone in one visit.' },
      { name: 'Garage + Shed', size: 'Multi-truck', price: 'Custom quote', blurb: 'Big jobs get an on-site flat price.' },
    ],
    faqs: [
      { q: 'Do I have to move everything to the driveway first?', a: 'Not at all. That\'s the whole point of hiring us. Our crew does the lifting and carrying straight from where the items sit.' },
      { q: 'Can you take old paint, chemicals or propane tanks?', a: 'We can take latex paint that\'s been dried out, and we\'ll advise you on local drop-off for oil-based paint, automotive fluids and propane, which require special household-hazardous-waste handling.' },
      { q: 'How long does a garage cleanout take?', a: 'Most single-garage jobs in the Madison area take one to three hours depending on volume. We\'ll give you a time estimate with your quote.' },
      { q: 'What happens to the stuff you haul?', a: 'We sort on-site: usable goods are donated locally, metal and electronics are recycled, and only true trash heads to a licensed transfer station.' },
    ],
  },

  'construction-debris': {
    slug: 'construction-debris',
    metaTitle: 'Construction Debris Removal',
    metaDescription:
      'Construction & demolition debris hauling for Madison, WI contractors and homeowners. Drywall, lumber, flooring, concrete, roofing. Fast turnarounds that keep your jobsite on schedule.',
    h1: 'Construction Debris Hauling That Keeps Crews Moving',
    intro:
      'Renovation rubble piling up faster than your dumpster can handle? We clear C&D debris on a contractor\'s timeline so your jobsite stays safe, clean and on schedule.',
    heroImage:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80',
    takes: [
      'Drywall & plaster',
      'Lumber & framing offcuts',
      'Flooring, tile & carpet',
      'Roofing shingles & underlayment',
      'Concrete, brick & masonry',
      'Cabinetry & fixtures',
      'Insulation & subfloor',
      'Pallets & packaging',
    ],
    longCopy: [
      {
        heading: 'On your jobsite schedule, not ours',
        body: 'We work with GCs, remodelers, flooring crews and roofers across the Madison metro. Need a mid-demo clear-out at 7am so the next trade can start? Recurring weekly hauls for a long build? We flex to your timeline and keep the site OSHA-clean.',
      },
      {
        heading: 'Sorted for diversion, documented for LEED',
        body: 'Clean concrete, metal, untreated wood and cardboard are separated and recycled. For projects pursuing LEED or municipal diversion targets, we can provide tonnage and recycling documentation to support your reporting.',
      },
    ],
    weightGuide: [
      { item: 'Drywall (per 4x8 sheet)', weight: '~50 lbs', note: 'Gypsum recycled where available' },
      { item: 'Concrete (per cubic yard)', weight: '~2,000–2,400 lbs', note: 'Crushed & reused as aggregate' },
      { item: 'Roofing shingles (per square)', weight: '~230–250 lbs', note: 'Heavy — priced by weight' },
      { item: 'Mixed framing lumber load', weight: '400–800 lbs', note: 'Untreated wood recycled' },
    ],
    pricing: [
      { name: 'Quick Clear', size: '1/4 truck', price: '$209–$289', blurb: 'A room\'s worth of demo debris.' },
      { name: 'Half Load', size: '1/2 truck', price: '$329–$449', blurb: 'Mid-size reno or flooring tear-out.', popular: true },
      { name: 'Full Load', size: 'Full truck', price: '$549–$749', blurb: 'Full gut or multi-room demolition.' },
      { name: 'Contractor Account', size: 'Recurring / bulk', price: 'Volume pricing', blurb: 'Standing hauls with net terms available.' },
    ],
    faqs: [
      { q: 'Can you haul heavy concrete and masonry?', a: 'Yes. Heavy inert material like concrete, brick and tile is priced by weight and routed to facilities that crush and reuse it as aggregate. Let us know the approximate volume for an accurate quote.' },
      { q: 'Do you offer recurring hauls for ongoing projects?', a: 'We set up contractor accounts with scheduled weekly or on-call pickups and volume pricing. Many Madison-area builders keep us on standing rotation.' },
      { q: 'Can you provide recycling documentation for LEED?', a: 'Yes — for qualifying projects we can supply tonnage and diversion records to support LEED credits and municipal C&D recycling requirements.' },
      { q: 'How quickly can you get to a jobsite?', a: 'For active sites we prioritize fast turnarounds — often same-day across the Madison metro so the next trade isn\'t blocked.' },
    ],
  },

  'yard-waste': {
    slug: 'yard-waste',
    metaTitle: 'Yard Waste & Debris Removal',
    metaDescription:
      'Yard waste removal in Madison, WI: branches, leaves, brush, storm debris, soil and old fencing. Composted and mulched, not landfilled. Same-day hauling and upfront pricing.',
    h1: 'Yard Waste Removal — Reclaim Your Outdoor Space',
    intro:
      'Storm-downed branches, a season of leaf bags, a torn-out hedge or an old fence line? We haul green waste and outdoor debris and route it to composting and mulching — not the dump.',
    heroImage:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=2000&q=80',
    takes: [
      'Branches, limbs & brush',
      'Leaves & grass clippings',
      'Storm & wind debris',
      'Shrubs, hedges & root balls',
      'Old fencing & lattice',
      'Soil, sod & dirt',
      'Mulch & landscaping rock',
      'Garden timbers & planters',
    ],
    longCopy: [
      {
        heading: 'Composted & mulched, not dumped',
        body: 'Organic yard waste is one of the most recyclable materials there is. We deliver branches, leaves and brush to regional composting and mulching operations, where it becomes soil amendment and landscaping mulch instead of taking up landfill space.',
      },
      {
        heading: 'Storm cleanup when you need it most',
        body: 'After a Wisconsin storm rolls through, downed limbs and scattered debris can be overwhelming. Our crews respond quickly to clear fallen branches and wind debris so your yard — and your driveway — are safe and passable again.',
      },
    ],
    weightGuide: [
      { item: 'Pickup-bed of branches', weight: '200–400 lbs', note: 'Mulched' },
      { item: '10 bags of leaves', weight: '150–250 lbs', note: 'Composted' },
      { item: 'Torn-out hedge row', weight: '300–600 lbs', note: 'Includes root balls' },
      { item: 'Cubic yard of soil/sod', weight: '~1,800–2,200 lbs', note: 'Heavy — priced by weight' },
    ],
    pricing: [
      { name: 'Small Pile', size: '1/8 – 1/4 truck', price: '$119–$219', blurb: 'A weekend\'s worth of trimming.' },
      { name: 'Half Load', size: '1/2 truck', price: '$269–$359', blurb: 'A full hedge removal or big cleanup.', popular: true },
      { name: 'Full Load', size: 'Full truck', price: '$399–$559', blurb: 'Major overhaul or storm debris.' },
      { name: 'Storm Response', size: 'Priority / multi-truck', price: 'Fast quote', blurb: 'Rapid post-storm clearing.' },
    ],
    faqs: [
      { q: 'Do you take soil, sod and dirt?', a: 'Yes. Heavy materials like soil, sod and landscaping rock are priced by weight. Give us an approximate volume and we\'ll quote it accurately.' },
      { q: 'Is the yard waste actually composted?', a: 'Yes. Branches and brush are mulched and leaves and clippings are composted at regional facilities — diverted from the landfill into useful soil products.' },
      { q: 'Can you come out after a storm on short notice?', a: 'We prioritize storm-debris cleanup across the Madison metro and can often dispatch a crew same-day to clear fallen limbs and wind debris.' },
      { q: 'Do I need to bag or bundle anything first?', a: 'No prep needed. We\'ll grab loose piles, bagged leaves and bundled branches alike — our crew handles the loading.' },
    ],
  },

  'estate-cleanouts': {
    slug: 'estate-cleanouts',
    metaTitle: 'Estate Cleanout Services',
    metaDescription:
      'Compassionate, full-property estate cleanouts in Madison, WI. Discreet, respectful crews handle whole-home clear-outs with donation routing and family keepsake care. Free on-site quote.',
    h1: 'Estate Cleanouts Handled With Care & Discretion',
    intro:
      'Clearing a loved one\'s home is heavy — emotionally and physically. Our crews handle whole-property cleanouts with patience and respect, working at your pace and routing belongings to good homes.',
    heroImage:
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=2000&q=80',
    takes: [
      'Whole-home furnishings',
      'Appliances & electronics',
      'Clothing, linens & housewares',
      'Garage, attic & basement contents',
      'Years of accumulated belongings',
      'Outdoor & shed items',
      'Hoarding-situation cleanouts',
      'Rental & probate property clear-outs',
    ],
    longCopy: [
      {
        heading: 'We work at your pace, with your blessing',
        body: 'Nothing leaves until you\'re ready. We\'ll walk the property with you, set aside keepsakes and items family members want, and only clear what you\'ve approved. For executors and realtors handling probate or estate sales, we coordinate timelines and leave the home broom-clean and market-ready.',
      },
      {
        heading: 'Belongings sent to second homes',
        body: 'Estate contents are full of usable goods. We donate furniture, clothing and household items to Madison-area charities and shelters — often providing a donation receipt for your records — so a difficult chapter leaves something good behind.',
      },
    ],
    weightGuide: [
      { item: '2-bedroom home contents', weight: '2–4 truckloads', note: 'On-site flat quote' },
      { item: 'Single furnished room', weight: '1/2–full truck', note: 'Donation-prioritized' },
      { item: 'Full basement / attic', weight: '1–2 truckloads', note: 'Sorted & cleared' },
      { item: 'Hoarding-level home', weight: 'Multi-day, multi-truck', note: 'Discreet phased plan' },
    ],
    pricing: [
      { name: 'Single Room', size: '1/2 – full truck', price: '$329–$589', blurb: 'One room cleared with care.' },
      { name: 'Partial Home', size: '2–3 truckloads', price: '$899–$1,499', blurb: 'Several rooms or a full floor.', popular: true },
      { name: 'Full Estate', size: 'Whole property', price: 'On-site quote', blurb: 'Complete home, garage and outbuildings.' },
      { name: 'Sensitive / Hoarding', size: 'Phased plan', price: 'Custom plan', blurb: 'Discreet, compassionate multi-day service.' },
    ],
    faqs: [
      { q: 'Can you provide a donation receipt for tax purposes?', a: 'Yes. When we donate estate items to our local charity partners, we can provide documentation of the donation for your records and the estate\'s accounting.' },
      { q: 'How do you handle keepsakes and important documents?', a: 'We go slowly and set aside anything that looks personal — photos, paperwork, jewelry, mementos — for your review before anything is removed. Nothing leaves without your okay.' },
      { q: 'Do you work with realtors and estate attorneys?', a: 'Frequently. We coordinate with executors, probate attorneys and listing agents across Madison to meet closing and estate-sale deadlines, leaving the property clean and showing-ready.' },
      { q: 'Can you handle a hoarding situation discreetly?', a: 'Yes. We approach sensitive cleanouts without judgment, in unmarked coordination when requested, and build a phased plan that respects the family\'s timeline and privacy.' },
    ],
  },
};
