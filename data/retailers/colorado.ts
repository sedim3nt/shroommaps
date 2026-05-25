/*
 * Colorado mushroom retailers — "gourmet" (culinary/specialty mushroom farms &
 * sellers) and "medicinal" (functional-mushroom supplement retailers /
 * apothecaries / wellness shops).
 * Researched & verified 2026-05-25. Every business below was confirmed REAL and
 * currently operating, each with its OWN working website AND a real street
 * address (storefront, farm stand, or farm with on-site/CSA pickup). Lat/lng
 * geocoded via OpenStreetMap Nominatim. No invented names, addresses, phones,
 * emails, hours, ratings, reviews, or photos.
 *
 * SOURCE URLS (each business verified on its own site):
 *  Hazel Dell Mushrooms (gourmet):
 *    https://hazeldellmushrooms.com/  (addr 3925 E County Rd 32, Fort Collins, CO 80528; retail M-F 9-5; grows Lion's Mane, King/Golden Oyster, etc.; est. 1997)
 *  Mile High Fungi (gourmet):
 *    https://www.milehighfungi.com/  (addr 19054 Gooseberry Lane, Littleton, CO 80127; phone; email; seasonal May-Dec; markets: S Pearl St & Highlands)
 *  Furst Class Fungi (gourmet):
 *    https://www.furstclassfungi.com/  +  https://www.furstclassfungi.com/where-to-find-us/  (addr 375 Zenobia St, Denver, CO 80219; phones; markets: City Park, Lafayette, Old South Pearl)
 *  Elevated Mushrooms Inc. (gourmet + medicinal):
 *    https://elevatedmushrooms.com/  (addr 4551 S Logan St, Englewood, CO 80113; phone; email; storefront Tue-Sat by appt; grows Lion's Mane, King/Polar White/Grey Oyster, Chestnut, Black Pearl)
 *  Fox Fungi (gourmet + medicinal):
 *    https://www.foxfungi.com/  +  https://www.foxfungi.com/find-us  (addr 2370 S Kalamath St Unit D, Denver, CO 80223; phone; email; storefront w/ daily fresh boxes, functional powders, supplies)
 *  High Balsam Farm (gourmet + medicinal):
 *    https://www.highbalsamfarm.com/  +  https://www.highbalsamfarm.com/our-story  +  https://www.localharvest.org/high-balsam-farm-M81048
 *      (addr 720 Balsam St, Lakewood, CO 80214; phone; email; 1-acre urban farm; oyster, lion's mane, reishi, turkey tail, chestnut, enoki, pioppini; CSA pickup Thu 4-6pm)
 *  SOSS Mushrooms (medicinal):
 *    https://www.sossmushrooms.com/  +  https://www.sossmushrooms.com/collections  (addr 480 S Holly St, Denver, CO 80246; phone; dual-extract tinctures & gummies; sales by appt)
 *  The Mushroom Saloon @ CBD Life (medicinal):
 *    https://themushroomsaloon.com/  (two storefronts in Colorado Springs; phone; email; daily 11-6, Sun til 4; functional mushrooms, cultivation supplies, classes)
 *  Apothecary Tinctura (medicinal):
 *    https://www.apothecarytinctura.com/  +  https://www.apothecarytinctura.com/from-the-herbalist/2020/aprilmushroomlove
 *      (addr 2900 E 6th Ave, Denver, CO 80206; phone; email; hours; herbal apothecary carrying Chaga, Maitake, Reishi, Lion's Mane, Turkey Tail in tincture/capsule/dried forms)
 *
 * Geocoding (Nominatim, https://nominatim.openstreetmap.org/search?format=json&q=...):
 *    Fort Collins (3925 E County Rd 32), Denver (375 Zenobia St; 2370 S Kalamath St; 480 S Holly St; 2900 E 6th Ave),
 *    Englewood (4551 S Logan St), Lakewood (720 Balsam St), Colorado Springs (826 E Fillmore St; 2423 W Colorado Ave).
 *
 * APPROXIMATE geocode (street address would not resolve in Nominatim — used verified 80127 ZIP/city centroid):
 *  - Mile High Fungi: 19054 Gooseberry Lane (Littleton/Conifer foothills) did not geocode; lat/lng are the
 *    Littleton 80127 ZIP centroid (approximate). Address itself is real and published on their site.
 *
 * OMITTED candidates + reasons:
 *  - Colorado Specialty Mushrooms (coloradospecialtymushrooms.com): "online store (pick up only)" + summer
 *    farmers-market stand, but NO street/pickup address published on the site (site also intermittently
 *    unreachable / ECONNREFUSED). Cannot verify a real address -> omitted.
 *  - Colorado Mushrooms, LLC (coloradomushroomsllc.com): real wholesale farm (Brighton, CO) but only the
 *    city is published, no street address, and it's wholesale/restaurant-only with no retail storefront,
 *    farm stand, or market address -> omitted.
 *  - Fresh from the Farm Fungi (freshfromthefarmfungi.com): real business (Sedalia, CO) with phone/email,
 *    but focused on mushroom genetics/cultures (Etsy) + education; no published street address and no
 *    retail storefront/market stand address -> omitted.
 *  - Fungus Farm Colorado (fungusfarmcolorado.com): active Colorado Springs gourmet/medicinal farm with a
 *    Barn2Door online store, but NO street address, phone, email, hours, or market/storefront address on
 *    the site -> omitted.
 *  - Boulder Mushroom (bouldermushroom.com): real Boulder operation selling dual-extract medicinal tinctures
 *    (email boulder.mushrooms@gmail.com), but only "Boulder, CO" with NO street address published anywhere
 *    on the site (incl. contact page) -> omitted (could be added if a verifiable street address surfaces).
 */

import type { Retailer } from '@/lib/types'

export const coloradoRetailers: Retailer[] = [
  {
    id: 'm1', slug: 'hazel-dell-mushrooms', name: 'Hazel Dell Mushrooms',
    description: 'Family-owned mushroom farm operating in Colorado\'s Northern Front Range since 1997, growing gourmet organic mushrooms (Lion\'s Mane, King Oyster, Golden Oyster and more) sold fresh, dried and powdered at its on-site retail store.',
    verticals: ['gourmet'],
    address: '3925 E County Road 32', city: 'Fort Collins', state: 'CO', zip: '80528',
    lat: 40.4795751, lng: -105.0067459,
    website: 'https://hazeldellmushrooms.com',
    hours: { mon: '9:00-17:00', tue: '9:00-17:00', wed: '9:00-17:00', thu: '9:00-17:00', fri: '9:00-17:00' },
    photoUrls: [], isVerified: false, subscriptionTier: 'basic',
    avgRating: 0, reviewCount: 0,
    tags: ['gourmet', 'mushroom-farm', 'farm-store', 'fresh-mushrooms', 'dried-mushrooms', 'organic', 'lions-mane', 'oyster', 'family-owned'],
    online: false,
  },
  {
    id: 'm2', slug: 'mile-high-fungi', name: 'Mile High Fungi',
    description: 'Colorado gourmet mushroom farm growing sustainably-cultivated varieties (shiitake, blue & phoenix oyster, chestnut, pioppini, king trumpet, lion\'s mane, maitake, beech) plus seasonal wild-foraged mushrooms; sold at Denver farmers markets and via CSA partners.',
    verticals: ['gourmet'],
    address: '19054 Gooseberry Lane', city: 'Littleton', state: 'CO', zip: '80127',
    lat: 39.6133210, lng: -105.0166490,
    phone: '7204810770',
    website: 'https://www.milehighfungi.com',
    email: 'info@milehighfungi.com',
    hours: {},
    photoUrls: [], isVerified: false, subscriptionTier: 'basic',
    avgRating: 0, reviewCount: 0,
    tags: ['gourmet', 'mushroom-farm', 'farmers-market', 'csa', 'fresh-mushrooms', 'shiitake', 'oyster', 'lions-mane', 'wild-foraged', 'seasonal', 'approximate-location'],
    online: false,
  },
  {
    id: 'm3', slug: 'furst-class-fungi', name: 'Furst Class Fungi',
    description: 'Denver-based gourmet mushroom farm selling fresh mushrooms at Colorado farmers markets (City Park, Lafayette, Old South Pearl St) and to local restaurants, with a winter CSA offering pickup and delivery.',
    verticals: ['gourmet'],
    address: '375 Zenobia St', city: 'Denver', state: 'CO', zip: '80219',
    lat: 39.7218680, lng: -105.0523530,
    phone: '8607291177',
    website: 'https://www.furstclassfungi.com',
    hours: {},
    photoUrls: [], isVerified: false, subscriptionTier: 'basic',
    avgRating: 0, reviewCount: 0,
    tags: ['gourmet', 'mushroom-farm', 'farmers-market', 'csa', 'fresh-mushrooms', 'restaurant-supply', 'denver'],
    online: false,
  },
  {
    id: 'm4', slug: 'elevated-mushrooms', name: 'Elevated Mushrooms',
    description: 'Englewood mushroom farm and lab growing gourmet and medicinal fungi (Lion\'s Mane, King/Polar White/Grey Oyster, Chestnut, Black Pearl) with a storefront selling fresh mushrooms, supplements, cultivation supplies and gourmet treats.',
    verticals: ['gourmet', 'medicinal'],
    address: '4551 S Logan St', city: 'Englewood', state: 'CO', zip: '80113',
    lat: 39.6340190, lng: -104.9832432,
    phone: '3032492462',
    website: 'https://elevatedmushrooms.com',
    email: 'paul@elevatedmushrooms.net',
    hours: { tue: '10:00-15:00', wed: '10:00-15:00', thu: '10:00-15:00', fri: '10:00-15:00', sat: '10:00-13:00' },
    photoUrls: [], isVerified: false, subscriptionTier: 'basic',
    avgRating: 0, reviewCount: 0,
    tags: ['gourmet', 'medicinal', 'mushroom-farm', 'storefront', 'fresh-mushrooms', 'supplements', 'cultivation-supplies', 'lions-mane', 'oyster'],
    online: false,
  },
  {
    id: 'm5', slug: 'fox-fungi', name: 'Fox Fungi',
    description: 'Denver urban mushroom farm and retail storefront offering daily-restocked fresh gourmet mushrooms (including oyster varieties), functional mushroom powders, pantry items, frozen meals and mycology supplies.',
    verticals: ['gourmet', 'medicinal'],
    address: '2370 S Kalamath St Unit D', city: 'Denver', state: 'CO', zip: '80223',
    lat: 39.6736160, lng: -105.0005056,
    phone: '3036561230',
    website: 'https://www.foxfungi.com',
    email: 'contact@foxfungi.com',
    hours: { mon: '12:00-18:00', tue: '12:00-18:00', wed: '12:00-18:00', thu: '12:00-18:00', fri: '10:00-19:00', sat: '10:00-19:00', sun: '14:00-17:00' },
    photoUrls: [], isVerified: false, subscriptionTier: 'basic',
    avgRating: 0, reviewCount: 0,
    tags: ['gourmet', 'medicinal', 'urban-mushroom-farm', 'storefront', 'fresh-mushrooms', 'oyster', 'functional-powders', 'mycology-supplies', 'denver'],
    online: false,
  },
  {
    id: 'm6', slug: 'high-balsam-farm', name: 'High Balsam Farm',
    description: 'One-acre urban farm in Lakewood growing gourmet and medicinal specialty mushrooms (oyster, lion\'s mane, reishi, turkey tail, chestnut, enoki, pioppini) sold fresh and dried, with a weekly mushroom CSA (Thursday pickup), tours and cultivation classes.',
    verticals: ['gourmet', 'medicinal'],
    address: '720 Balsam St', city: 'Lakewood', state: 'CO', zip: '80214',
    lat: 39.7391754, lng: -105.0884425,
    phone: '7206292171',
    website: 'https://www.highbalsamfarm.com',
    email: 'Bethlloyd7@gmail.com',
    hours: { thu: '16:00-18:00' },
    photoUrls: [], isVerified: false, subscriptionTier: 'basic',
    avgRating: 0, reviewCount: 0,
    tags: ['gourmet', 'medicinal', 'urban-farm', 'csa', 'fresh-mushrooms', 'dried-mushrooms', 'lions-mane', 'oyster', 'reishi', 'turkey-tail', 'farm-tours', 'classes'],
    online: false,
  },
  {
    id: 'm7', slug: 'soss-mushrooms', name: 'SOSS Mushrooms',
    description: 'Denver functional-mushroom retailer offering dual-extracted organic mushroom tinctures and gummies (Lion\'s Mane, Cordyceps, Turkey Tail and a 5-Mushroom Blend); in-person product sales by appointment.',
    verticals: ['medicinal'],
    address: '480 S Holly St', city: 'Denver', state: 'CO', zip: '80246',
    lat: 39.7079270, lng: -104.9219662,
    phone: '3038347673',
    website: 'https://www.sossmushrooms.com',
    hours: {},
    photoUrls: [], isVerified: false, subscriptionTier: 'basic',
    avgRating: 0, reviewCount: 0,
    tags: ['medicinal', 'mushroom-tinctures', 'gummies', 'dual-extract', 'lions-mane', 'cordyceps', 'turkey-tail', 'organic', 'by-appointment', 'denver'],
    online: false,
  },
  {
    id: 'm8', slug: 'mushroom-saloon', name: 'The Mushroom Saloon @ CBD Life',
    description: 'Colorado Springs wellness retail shop with a curated selection of functional mushrooms alongside hemp/CBD products and mushroom-cultivation supplies, plus classes; operates two storefront locations.',
    verticals: ['medicinal'],
    address: '826 E Fillmore St', city: 'Colorado Springs', state: 'CO', zip: '80907',
    lat: 38.8741647, lng: -104.8103330,
    phone: '7199008733',
    website: 'https://themushroomsaloon.com',
    email: 'coloradosbigdiscovery@gmail.com',
    hours: { mon: '11:00-18:00', tue: '11:00-18:00', wed: '11:00-18:00', thu: '11:00-18:00', fri: '11:00-18:00', sat: '11:00-18:00', sun: '11:00-16:00' },
    photoUrls: [], isVerified: false, subscriptionTier: 'basic',
    avgRating: 0, reviewCount: 0,
    tags: ['medicinal', 'wellness-shop', 'storefront', 'functional-mushrooms', 'cultivation-supplies', 'classes', 'cbd', 'colorado-springs'],
    online: false,
  },
  {
    id: 'm9', slug: 'apothecary-tinctura', name: 'Apothecary Tinctura',
    description: 'Denver herbal apothecary and integrative healing practice carrying medicinal mushroom products (Chaga, Maitake, Reishi, Lion\'s Mane, Turkey Tail) in tincture, capsule and dried forms, alongside herbs, teas and wellness services.',
    verticals: ['medicinal'],
    address: '2900 E 6th Ave', city: 'Denver', state: 'CO', zip: '80206',
    lat: 39.7255300, lng: -104.9532590,
    phone: '3033991175',
    website: 'https://www.apothecarytinctura.com',
    email: 'connect@apothecarytinctura.com',
    hours: { mon: '10:00-18:00', tue: '10:00-18:00', wed: '10:00-18:00', thu: '10:00-18:00', fri: '10:00-18:00', sat: '10:00-17:00', sun: '12:00-17:00' },
    photoUrls: [], isVerified: false, subscriptionTier: 'basic',
    avgRating: 0, reviewCount: 0,
    tags: ['medicinal', 'apothecary', 'storefront', 'mushroom-tinctures', 'reishi', 'lions-mane', 'chaga', 'turkey-tail', 'herbs', 'denver'],
    online: false,
  },
]
