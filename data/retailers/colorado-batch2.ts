/*
 * Colorado mushroom retailers — BATCH 2 (ids m10+). Additional verified businesses
 * beyond the original 9 (m1–m9 in ./colorado.ts). Same two verticals:
 * "gourmet" (culinary/specialty mushroom farms & sellers) and "medicinal"
 * (functional-mushroom supplement retailers / apothecaries / wellness shops).
 * Researched & verified 2026-05-25. Every business below was confirmed REAL and
 * currently operating, each with its OWN working website AND a real street address
 * (storefront, farm with on-site/CSA pickup, or farm with published street/road).
 * Lat/lng geocoded via OpenStreetMap Nominatim. No invented names, addresses,
 * phones, emails, hours, ratings, reviews, or photos. No duplicates of m1–m9.
 *
 * SOURCE URLS (each business verified on its own site):
 *  Berry Fungi Farms (gourmet + medicinal):
 *    https://berryfungifarms.com/  (addr "Minnesota Creek Rd Paonia CO 81428"; phone 720-288-8521;
 *      hours 11am-3pm MST Mon-Sat; contact Kirk Howlett; gourmet oyster + boutique varieties,
 *      grow kits, dried mushrooms, medicinal tinctures/extracts)
 *  Mycolove Farm (medicinal):
 *    https://www.mycolove.farm/  (addr 1811 Lefthand Circle, Longmont, CO 80501; email team@mycolove.farm;
 *      organic functional mushroom extracts/tinctures grown & extracted on-farm — Reishi, Lion's Mane,
 *      Turkey Tail, Cordyceps Militaris; alcohol-free glycerine-based)
 *  Benevolence Orchard & Gardens (gourmet):
 *    https://www.benevolenceorchard.com/  +  https://www.benevolenceorchard.com/store/p/spring-mushroom-csa-1-lb
 *      (addr 6712 Jay Rd, Boulder, CO 80301; phone 720-938-7708; on-site "Orchard Hub" open daily 10am-dusk
 *      honor system; 8-week gourmet mushroom CSA — Lion's Mane, Oyster, Pioppino, Chestnut, Shiitake, etc.)
 *  Alpine Valley Mushrooms LLC (gourmet):
 *    https://www.alpinevalleymushrooms.com/  +  https://www.alpinevalleymushrooms.com/contact
 *      (addr 319 San Juan Ave, Saguache, CO 81149; phone 303-916-2691; email alpinevalleymushrooms@gmail.com;
 *      family-operated certified-organic gourmet mushroom farm in the San Luis Valley, est. 2022, local CO
 *      grains & substrate; tours/consultations by appointment)
 *  Rebecca's Herbal Apothecary & Supply (medicinal):
 *    https://www.rebeccasherbs.com/  +  https://www.rebeccasherbs.com/collections/mushrooms-fungi
 *      (addr 1227 Spruce St, Boulder, CO 80302; phone 303-443-8878; hours Mon-Fri 10-6, Sat 11-5; herbal
 *      apothecary carrying Chaga, Cordyceps, Lion's Mane, Reishi, Turkey Tail in extract/powder/dried forms)
 *  Orion's Apothecary & Mushrooms (medicinal):
 *    https://www.orionsapothecary.com/  +  https://www.orionsapothecary.com/contact-us  +
 *    https://www.orionsapothecary.com/apothecary
 *      (addr 270 E 29th St, Loveland, CO 80538; phone 970-617-2996; email info@orionsapothecary.com;
 *      handcrafted teas/tinctures/tonics, bulk herbs, mushroom products & grow kits, mushroom education classes)
 *  Balanced Root Apothecary (medicinal):
 *    https://www.balancedrootapothecary.com/  +  https://www.balancedrootapothecary.com/contact
 *      (addr 1405 N Ogden St, Denver, CO 80218; phone 720-276-9006; email hello@balancedrootapothecary.com;
 *      hours Mon-Thu 10-6, Fri 9-6, Sat-Sun 9-5; Capitol Hill herbal apothecary w/ "Mushrooms + Superfoods"
 *      category incl. a Functional Mushroom Mix)
 *  Fungus Farm Colorado (gourmet + medicinal):
 *    https://www.fungusfarmcolorado.com/  +  https://www.fungusfarmcolorado.com/products  +
 *    https://www.fungusfarmcolorado.com/find-us
 *      (addr 5117 Half Moon Dr, Colorado Springs, CO 80915 — by appointment; also Back Yard Markets Sat
 *      9-1 May-Oct at 6770 Shoup Rd & Woodland Park Farmers Market; grows fresh/dried gourmet mushrooms
 *      [oak sawdust + soybean hull substrate], grow kits, and dual-extraction medicinal extracts/tinctures)
 *
 * Geocoding (Nominatim, https://nominatim.openstreetmap.org/search?format=json&q=...):
 *    Longmont (1811 Lefthand Circle), Boulder (6712 Jay Rd; 1227 Spruce St), Saguache (319 San Juan Ave),
 *    Loveland (270 E 29th St), Denver (1405 N Ogden St), Colorado Springs (5117 Half Moon Dr).
 *
 * APPROXIMATE geocode (street number not published / road-level only):
 *  - Berry Fungi Farms: site publishes "Minnesota Creek Rd Paonia CO 81428" with no house number
 *    (rural road); lat/lng are the Nominatim road-level coordinate for Minnesota Creek Road, Delta
 *    County, CO -> tagged 'approximate-location'. Address itself is real and published on their site.
 *
 * RE-CHECKED previously-omitted candidates (from ./colorado.ts):
 *  - Fungus Farm Colorado: NOW VERIFIABLE -> ADDED (m17). Their /find-us page now publishes a street
 *    address (5117 Half Moon Dr, Colorado Springs 80915, by appointment) plus farmers-market addresses.
 *  - Boulder Mushroom (bouldermushroom.com): re-checked homepage + /contact. STILL only email
 *    boulder.mushrooms@gmail.com / a wholesale form; NO street address published anywhere -> still omitted.
 *  - Colorado Specialty Mushrooms (coloradospecialtymushrooms.com): site unreachable (ECONNREFUSED) on
 *    re-check; no published street/pickup address -> still omitted.
 *  - Fresh from the Farm Fungi (freshfromthefarmfungi.com): re-checked; only "Sedalia, Colorado" + phone
 *    303-726-9723 + email; NO street/pickup/market address published -> still omitted.
 *  - Colorado Mushrooms, LLC (coloradomushroomsllc.com): re-checked; wholesale/restaurant only, Brighton
 *    city only, no street address or retail/market location -> still omitted.
 *
 * OTHER candidates considered & omitted (this batch):
 *  - Monumental Mushrooms (monumentalmushrooms.com, Palisade): real farm but NO street address on its own
 *    site (homepage + /contact 404); only third-party retail partners listed -> omitted.
 *  - Leafcutter Farms (leafcutterfarms.com, Durango): real gourmet/medicinal farm but own site publishes
 *    only "Durango, Colorado" + email; no street/pickup/market address -> omitted.
 *  - Microvora (microvora.com, Colorado Springs): own site states "currently offline, not accepting orders"
 *    and publishes no street address -> omitted (site not a working own store at this time).
 *  - Lion's Mane Denver (lionsmanedenver.com): real RiNo storefront w/ address 3377 Blake St #103, but it
 *    is strictly a mycology literature/equipment/cultivation-supply shop that "explicitly does not sell
 *    spores or mushrooms" and sells no culinary or functional-supplement product -> outside the gourmet /
 *    medicinal verticals -> omitted.
 *  - Colonizing Colorado (colonizingcolorado.com, Colorado Springs): cultivation supplies + education only;
 *    sells no fresh mushrooms or functional supplements -> outside both verticals -> omitted.
 *  - Monster Mushroom Company (monstermushrooms.com): cultivation grow-bags/supplies; claims "multiple
 *    retail locations" but lists NO street address -> omitted (out of scope + unverifiable address).
 *  - Colorado Cultures LLC (coloradoculturesllc.com, Denver): mycology cultivation supply store -> out of
 *    scope (not gourmet seller / not functional-supplement retailer) -> omitted.
 */

import type { Retailer } from '@/lib/types'

export const coloradoRetailers2: Retailer[] = [
  {
    id: 'm10', slug: 'berry-fungi-farms', name: 'Berry Fungi Farms',
    description: 'Paonia farm on the Western Slope that sustainably and regeneratively cultivates boutique gourmet mushrooms (oyster and other varieties), sold fresh and dried alongside mushroom grow kits and medicinal mushroom tinctures and extracts.',
    verticals: ['gourmet', 'medicinal'],
    address: 'Minnesota Creek Rd', city: 'Paonia', state: 'CO', zip: '81428',
    lat: 38.8695808, lng: -107.5260292,
    phone: '7202888521',
    website: 'https://berryfungifarms.com',
    hours: { mon: '11:00-15:00', tue: '11:00-15:00', wed: '11:00-15:00', thu: '11:00-15:00', fri: '11:00-15:00', sat: '11:00-15:00' },
    photoUrls: [], isVerified: false, subscriptionTier: 'basic',
    avgRating: 0, reviewCount: 0,
    tags: ['gourmet', 'medicinal', 'mushroom-farm', 'fresh-mushrooms', 'dried-mushrooms', 'grow-kits', 'tinctures', 'oyster', 'regenerative', 'western-slope', 'approximate-location'],
    online: false,
  },
  {
    id: 'm11', slug: 'mycolove-farm', name: 'Mycolove Farm',
    description: 'Longmont organic farm that grows and extracts functional mushroom tinctures at the fruiting-body stage (Reishi, Lion\'s Mane, Turkey Tail, Cordyceps Militaris) using an alcohol-free, glycerine-based ultrasonic extraction method.',
    verticals: ['medicinal'],
    address: '1811 Lefthand Circle', city: 'Longmont', state: 'CO', zip: '80501',
    lat: 40.1427235, lng: -105.1226635,
    website: 'https://www.mycolove.farm',
    email: 'team@mycolove.farm',
    hours: {},
    photoUrls: [], isVerified: false, subscriptionTier: 'basic',
    avgRating: 0, reviewCount: 0,
    tags: ['medicinal', 'mushroom-farm', 'mushroom-tinctures', 'functional-mushrooms', 'organic', 'reishi', 'lions-mane', 'turkey-tail', 'cordyceps', 'alcohol-free'],
    online: false,
  },
  {
    id: 'm12', slug: 'benevolence-orchard-gardens', name: 'Benevolence Orchard & Gardens',
    description: 'Boulder farm running an 8-week gourmet mushroom CSA (Lion\'s Mane, Oyster, Pioppino, Chestnut, Shiitake and more) with pickup at its on-site Orchard Hub, open daily 10am to dusk on an honor system, alongside heirloom apples and seasonal farm goods.',
    verticals: ['gourmet'],
    address: '6712 Jay Rd', city: 'Boulder', state: 'CO', zip: '80301',
    lat: 40.0498275, lng: -105.1961804,
    phone: '7209387708',
    website: 'https://www.benevolenceorchard.com',
    hours: { mon: '10:00-19:00', tue: '10:00-19:00', wed: '10:00-19:00', thu: '10:00-19:00', fri: '10:00-19:00', sat: '10:00-19:00', sun: '10:00-19:00' },
    photoUrls: [], isVerified: false, subscriptionTier: 'basic',
    avgRating: 0, reviewCount: 0,
    tags: ['gourmet', 'farm', 'csa', 'farm-stand', 'fresh-mushrooms', 'lions-mane', 'oyster', 'shiitake', 'chestnut', 'pioppino', 'boulder'],
    online: false,
  },
  {
    id: 'm13', slug: 'alpine-valley-mushrooms', name: 'Alpine Valley Mushrooms',
    description: 'Family-operated certified-organic gourmet mushroom farm in the San Luis Valley (Saguache), established 2022, growing mushrooms on local Colorado grains and 100% locally sourced substrate; farm tours and consultations by appointment.',
    verticals: ['gourmet'],
    address: '319 San Juan Ave', city: 'Saguache', state: 'CO', zip: '81149',
    lat: 38.0864024, lng: -106.1361293,
    phone: '3039162691',
    website: 'https://www.alpinevalleymushrooms.com',
    email: 'alpinevalleymushrooms@gmail.com',
    hours: {},
    photoUrls: [], isVerified: false, subscriptionTier: 'basic',
    avgRating: 0, reviewCount: 0,
    tags: ['gourmet', 'mushroom-farm', 'fresh-mushrooms', 'certified-organic', 'family-owned', 'by-appointment', 'san-luis-valley'],
    online: false,
  },
  {
    id: 'm14', slug: 'rebeccas-herbal-apothecary', name: 'Rebecca\'s Herbal Apothecary & Supply',
    description: 'Boulder herbal apothecary on Spruce Street carrying medicinal mushroom products (Chaga, Cordyceps, Lion\'s Mane, Reishi, Turkey Tail) in extract, powder, slice and dried forms, alongside bulk herbs, teas and herbalism supplies.',
    verticals: ['medicinal'],
    address: '1227 Spruce St', city: 'Boulder', state: 'CO', zip: '80302',
    lat: 40.0192627, lng: -105.2796848,
    phone: '3034438878',
    website: 'https://www.rebeccasherbs.com',
    hours: { mon: '10:00-18:00', tue: '10:00-18:00', wed: '10:00-18:00', thu: '10:00-18:00', fri: '10:00-18:00', sat: '11:00-17:00' },
    photoUrls: [], isVerified: false, subscriptionTier: 'basic',
    avgRating: 0, reviewCount: 0,
    tags: ['medicinal', 'apothecary', 'storefront', 'mushroom-extracts', 'chaga', 'cordyceps', 'lions-mane', 'reishi', 'turkey-tail', 'bulk-herbs', 'boulder'],
    online: false,
  },
  {
    id: 'm15', slug: 'orions-apothecary', name: 'Orion\'s Apothecary & Mushrooms',
    description: 'Loveland apothecary offering handcrafted teas, tinctures, tonics and bulk herbs along with mushroom products, mushroom grow kits and mushroom-cultivation education classes.',
    verticals: ['medicinal'],
    address: '270 E 29th St', city: 'Loveland', state: 'CO', zip: '80538',
    lat: 40.4217647, lng: -105.0747876,
    phone: '9706172996',
    website: 'https://www.orionsapothecary.com',
    email: 'info@orionsapothecary.com',
    hours: {},
    photoUrls: [], isVerified: false, subscriptionTier: 'basic',
    avgRating: 0, reviewCount: 0,
    tags: ['medicinal', 'apothecary', 'storefront', 'mushroom-products', 'grow-kits', 'tinctures', 'bulk-herbs', 'classes', 'loveland'],
    online: false,
  },
  {
    id: 'm16', slug: 'balanced-root-apothecary', name: 'Balanced Root Apothecary',
    description: 'Capitol Hill, Denver herbal apothecary stocking medicinal mushroom products, including a Functional Mushroom Mix, within its "Mushrooms + Superfoods" line, alongside organic herbal remedies, tinctures and teas.',
    verticals: ['medicinal'],
    address: '1405 N Ogden St', city: 'Denver', state: 'CO', zip: '80218',
    lat: 39.7336476, lng: -104.9752875,
    phone: '7202769006',
    website: 'https://www.balancedrootapothecary.com',
    email: 'hello@balancedrootapothecary.com',
    hours: { mon: '10:00-18:00', tue: '10:00-18:00', wed: '10:00-18:00', thu: '10:00-18:00', fri: '09:00-18:00', sat: '09:00-17:00', sun: '09:00-17:00' },
    photoUrls: [], isVerified: false, subscriptionTier: 'basic',
    avgRating: 0, reviewCount: 0,
    tags: ['medicinal', 'apothecary', 'storefront', 'functional-mushrooms', 'mushroom-blend', 'superfoods', 'herbs', 'tinctures', 'denver'],
    online: false,
  },
  {
    id: 'm17', slug: 'fungus-farm-colorado', name: 'Fungus Farm Colorado',
    description: 'Colorado Springs gourmet and medicinal mushroom farm growing fresh and dried mushrooms (oak-sawdust and soybean-hull substrate), selling mushroom grow kits and dual-extraction (hot water then alcohol) medicinal extracts and tinctures; farm pickup by appointment plus area farmers markets and retail partners.',
    verticals: ['gourmet', 'medicinal'],
    address: '5117 Half Moon Dr', city: 'Colorado Springs', state: 'CO', zip: '80915',
    lat: 38.8643641, lng: -104.7326395,
    website: 'https://www.fungusfarmcolorado.com',
    hours: {},
    photoUrls: [], isVerified: false, subscriptionTier: 'basic',
    avgRating: 0, reviewCount: 0,
    tags: ['gourmet', 'medicinal', 'mushroom-farm', 'fresh-mushrooms', 'dried-mushrooms', 'grow-kits', 'extracts', 'tinctures', 'farmers-market', 'by-appointment', 'colorado-springs'],
    online: false,
  },
]
