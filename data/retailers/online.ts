/*
 * Online functional-mushroom retailers (medicinal vertical)
 * Researched & verified 2026-05-25. All brands confirmed REAL + currently operating
 * with a live website and a findable HQ/business address. Lat/lng geocoded via
 * OpenStreetMap Nominatim. No invented addresses, phones, ratings, reviews, or photos.
 *
 * SOURCE URLS:
 *  Real Mushrooms:
 *    https://www.realmushrooms.com/contact/  (HQ: 330 5th Ave SW Tower 1 Ste 1800, Calgary, AB; phone; email; hours)
 *  Host Defense / Fungi Perfecti:
 *    https://fungi.com/pages/contact-us  (HQ: Olympia, WA 98507; PO Box only — no public street address; phone; email)
 *    https://www.linkedin.com/company/fungi-perfecti-llc
 *  FreshCap Mushrooms:
 *    https://www.freshcap.com/  (email support@freshcap.com)
 *    https://opengovca.com/importer/FRESHCAP_MUSHROOMS_LTD.  (registered office: Sherwood Park, AB T8G 1A6)
 *    https://albertacorporations.com/freshcap-mushrooms-ltd
 *  Four Sigmatic (Four Sigma Foods, Inc.):
 *    https://craft.co/four-sigmatic/locations  (HQ: 1450 2nd St Ste 210, Santa Monica, CA 90401)
 *    https://www.dnb.com/business-directory/company-profiles.four_sigma_foods_inc.faf3e25d44d7de020a5519a08054c648.html
 *  Om Mushroom Superfood:
 *    https://ommushrooms.com/pages/about-us
 *    https://www.linkedin.com/company/ommushroom  (HQ: 5931 Priestly Dr Ste 101, Carlsbad, CA 92008)
 *  Nootropics Depot:
 *    https://support.nootropicsdepot.com/article/41-what-is-your-mailing-address
 *    https://www.bbb.org/us/az/tempe/profile/health-and-wellness/nootropics-depot-1126-1000043557  (HQ: 8380 S Kyrene Rd Ste 110, Tempe, AZ 85284)
 *  Mushroom Revival:
 *    https://www.mushroomrevival.com/pages/contact-us  (mailing addr on site: 301 West Ave 5501, Austin, TX 78701; email)
 *  North Spore:
 *    https://northspore.com/pages/contact-our-team  (HQ: 921 Riverside St, Portland, ME 04103; phone; email)
 *  Troop (Troop Nutrition):
 *    https://trytroop.com/  +  https://trytroop.com/pages/contact  (Los Angeles, CA — city only, no public street address; phone (424) 234-9097; email)
 *
 * Geocoding (Nominatim, https://nominatim.openstreetmap.org/search?format=json&q=...):
 *    Calgary AB, Olympia WA, Sherwood Park AB, Santa Monica CA, Carlsbad CA,
 *    Tempe AZ, Austin TX, Portland ME, Los Angeles CA.
 *
 * OMITTED brands + reasons:
 *  - Oriveda: HQ/logistics relocated to Hong Kong (trademark licensed to EOS Ventures Ltd.,
 *    Kowloon, HK) as of Nov 2024; no longer a US/national-facing HQ. Source: oriveda.com / contact pages.
 *  - Fungtn: UK company (London), alcohol-free mushroom beer; not a US national retailer and
 *    no findable public street address. Source: uk.linkedin.com/company/fungtn + press coverage.
 *
 * NOTES on approximate geocodes (city/state only — no public street address):
 *  - Host Defense / Fungi Perfecti: only a PO Box is published; lat/lng are for Olympia, WA (approximate).
 *  - Troop: only "Los Angeles, CA" is published; lat/lng are for Los Angeles (approximate).
 *
 * NOTE: Real Mushrooms and FreshCap are HQ'd in Canada (Alberta) but are well-known brands
 * that ship across North America; included per candidate list with their real Canadian HQ.
 */

import type { Retailer } from '@/lib/types'

export const onlineRetailers: Retailer[] = [
  {
    id: 'o1', slug: 'real-mushrooms', name: 'Real Mushrooms',
    description: 'Sells 100% mushroom-fruiting-body extract supplements (Lion\'s Mane, Reishi, Cordyceps, Chaga, Turkey Tail, and the 5 Defenders blend) in powders and capsules for people and pets, with no grain fillers.',
    verticals: ['medicinal'],
    address: '330 5th Avenue SW, Tower 1, Suite 1800', city: 'Calgary', state: 'AB', zip: 'T2P 0L4',
    lat: 51.0488256, lng: -114.0692040,
    phone: '18002634387',
    website: 'https://www.realmushrooms.com',
    email: 'hello@realmushrooms.com',
    hours: {},
    photoUrls: [], isVerified: false, subscriptionTier: 'basic',
    avgRating: 0, reviewCount: 0,
    tags: ['online', 'ships-nationally', 'mushroom-extracts', 'capsules', 'powders', 'fruiting-body', 'organic', 'pet-supplements'],
    online: true,
  },
  {
    id: 'o2', slug: 'host-defense', name: 'Host Defense (Fungi Perfecti)',
    description: 'Paul Stamets\' mycelium-based mushroom supplement line (Lion\'s Mane, Reishi, Turkey Tail, Chaga, Cordyceps, MyCommunity and other blends) sold as capsules, powders, gummies, extracts, sprays and drink mixes.',
    verticals: ['medicinal'],
    address: '', city: 'Olympia', state: 'WA', zip: '98507',
    lat: 47.0451022, lng: -122.8950075,
    phone: '3604269292',
    website: 'https://fungi.com',
    email: 'info@fungi.com',
    hours: {},
    photoUrls: [], isVerified: false, subscriptionTier: 'basic',
    avgRating: 0, reviewCount: 0,
    tags: ['online', 'ships-nationally', 'mushroom-supplements', 'mycelium', 'capsules', 'powders', 'extracts', 'approximate-location'],
    online: true,
  },
  {
    id: 'o3', slug: 'freshcap-mushrooms', name: 'FreshCap Mushrooms',
    description: 'Organic functional-mushroom supplements (Lion\'s Mane, Cordyceps, Reishi, Chaga, Turkey Tail, Tremella, Maitake, the Ultimate Mushroom Complex blend, and mushroom coffee) in capsules and powders, plus pet products.',
    verticals: ['medicinal'],
    address: '57-52343 Range Road 211', city: 'Sherwood Park', state: 'AB', zip: 'T8G 1A6',
    lat: 53.5256963, lng: -113.2966310,
    phone: '8558135808',
    website: 'https://www.freshcap.com',
    email: 'support@freshcap.com',
    hours: {},
    photoUrls: [], isVerified: false, subscriptionTier: 'basic',
    avgRating: 0, reviewCount: 0,
    tags: ['online', 'ships-nationally', 'mushroom-supplements', 'capsules', 'powders', 'organic', 'mushroom-coffee', 'pet-supplements'],
    online: true,
  },
  {
    id: 'o4', slug: 'four-sigmatic', name: 'Four Sigmatic',
    description: 'Functional-mushroom coffees, lattes, hot cocoa, protein and supplements featuring Lion\'s Mane, Chaga, Cordyceps and Reishi.',
    verticals: ['medicinal'],
    address: '1450 2nd St, Suite 210', city: 'Santa Monica', state: 'CA', zip: '90401',
    lat: 34.0136602, lng: -118.4961426,
    phone: '8554008584',
    website: 'https://us.foursigmatic.com',
    hours: {},
    photoUrls: [], isVerified: false, subscriptionTier: 'basic',
    avgRating: 0, reviewCount: 0,
    tags: ['online', 'ships-nationally', 'mushroom-coffee', 'mushroom-lattes', 'drink-mixes', 'supplements'],
    online: true,
  },
  {
    id: 'o5', slug: 'om-mushroom-superfood', name: 'Om Mushroom Superfood',
    description: 'Whole-food cultivated functional-mushroom powders, capsules, drink mixes and broths (Lion\'s Mane, Reishi, Cordyceps, Chaga, Turkey Tail and blends).',
    verticals: ['medicinal'],
    address: '5931 Priestly Drive, Suite 101', city: 'Carlsbad', state: 'CA', zip: '92008',
    lat: 33.1327084, lng: -117.2731506,
    website: 'https://ommushrooms.com',
    hours: {},
    photoUrls: [], isVerified: false, subscriptionTier: 'basic',
    avgRating: 0, reviewCount: 0,
    tags: ['online', 'ships-nationally', 'mushroom-powders', 'capsules', 'drink-mixes', 'whole-food'],
    online: true,
  },
  {
    id: 'o6', slug: 'nootropics-depot', name: 'Nootropics Depot',
    description: 'Online retailer of nootropics and supplements including lab-tested functional-mushroom extracts (Lion\'s Mane, Reishi, Cordyceps, Chaga and others) in capsules and powders.',
    verticals: ['medicinal'],
    address: '8380 S Kyrene Rd, Suite 110', city: 'Tempe', state: 'AZ', zip: '85284',
    lat: 33.3383851, lng: -111.9457878,
    phone: '4807790257',
    website: 'https://nootropicsdepot.com',
    hours: {},
    photoUrls: [], isVerified: false, subscriptionTier: 'basic',
    avgRating: 0, reviewCount: 0,
    tags: ['online', 'ships-nationally', 'mushroom-extracts', 'nootropics', 'capsules', 'powders', 'lab-tested'],
    online: true,
  },
  {
    id: 'o7', slug: 'mushroom-revival', name: 'Mushroom Revival',
    description: 'USDA Organic functional-mushroom supplements in capsules, tinctures, powders and gummies (Lion\'s Mane, Reishi, Cordyceps, Turkey Tail, Chaga and blends).',
    verticals: ['medicinal'],
    address: '301 West Ave, 5501', city: 'Austin', state: 'TX', zip: '78701',
    lat: 30.2678018, lng: -97.7511675,
    website: 'https://www.mushroomrevival.com',
    email: 'support@mushroomrevival.com',
    hours: {},
    photoUrls: [], isVerified: false, subscriptionTier: 'basic',
    avgRating: 0, reviewCount: 0,
    tags: ['online', 'ships-nationally', 'mushroom-supplements', 'tinctures', 'capsules', 'powders', 'gummies', 'organic'],
    online: true,
  },
  {
    id: 'o8', slug: 'north-spore', name: 'North Spore',
    description: 'Mushroom cultivation supplies (spawn, grow kits, substrates) plus a wellness line of mushroom tinctures, capsules, mushroom coffee, chocolate and dried mushrooms.',
    verticals: ['medicinal'],
    address: '921 Riverside Street', city: 'Portland', state: 'ME', zip: '04103',
    lat: 43.7062909, lng: -70.3180425,
    phone: '2073520264',
    website: 'https://northspore.com',
    email: 'info@northspore.com',
    hours: {},
    photoUrls: [], isVerified: false, subscriptionTier: 'basic',
    avgRating: 0, reviewCount: 0,
    tags: ['online', 'ships-nationally', 'grow-kits', 'mushroom-spawn', 'tinctures', 'capsules', 'cultivation-supplies'],
    online: true,
  },
  {
    id: 'o9', slug: 'troop', name: 'Troop',
    description: 'Functional-mushroom daily gummies and blends (Lion\'s Mane, Reishi and the Super Troop multi-mushroom blend).',
    verticals: ['medicinal'],
    address: '', city: 'Los Angeles', state: 'CA', zip: '',
    lat: 34.0536909, lng: -118.2427660,
    phone: '4242349097',
    website: 'https://trytroop.com',
    email: 'info@trytroop.com',
    hours: {},
    photoUrls: [], isVerified: false, subscriptionTier: 'basic',
    avgRating: 0, reviewCount: 0,
    tags: ['online', 'ships-nationally', 'mushroom-gummies', 'lions-mane', 'reishi', 'approximate-location'],
    online: true,
  },
];
