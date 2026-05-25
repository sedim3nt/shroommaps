/*
 * Colorado Licensed Psilocybin "Healing Centers" — BATCH 2 (therapeutic vertical)
 * ------------------------------------------------------------------------------
 * Compiled 2026-05-25 for the MycoMaps directory. This batch verifies the
 * documented backlog of Healing Advocacy Fund (HAF) active-licensee candidates
 * that were NOT individually verified in the first pass (t1–t9). IDs continue
 * from t10.
 *
 * VERIFICATION METHOD (verify-or-omit):
 *  Each center below was confirmed to meet ALL THREE hard rules:
 *   (a) its own working website,
 *   (b) a real street address, AND
 *   (c) traceability to Colorado Natural Medicine licensure — present on the HAF
 *       active-licensee directory AND/OR self-attesting CO healing-center
 *       licensure on its own site (license # cited where published).
 *  Where a center's own site did not publish a street address, the street
 *  address was taken from the HAF active-licensee directory (the same
 *  authoritative cross-reference used for t1–t9). A center was OMITTED whenever
 *  NO real street address could be confirmed anywhere (HAF "contact through
 *  website/email" only), or its own site had no working content / no licensing
 *  attestation as required.
 *  Addresses geocoded via OpenStreetMap Nominatim
 *  (https://nominatim.openstreetmap.org/search?format=json&q=<URL-encoded address>),
 *  reading lat/lon from the first result. Where a full-street geocode returned
 *  no result, the city/ZIP centroid was used and the center tagged
 *  'approximate-location'.
 *  No invented phones/emails/hours/ratings. Fields omitted when not found.
 *
 * SOURCES
 *  License cross-reference (primary establishment list):
 *   - https://healingadvocacyfund.org/co-healing-center  (HAF active-licensee directory)
 *  Center sites (own websites verified live this pass):
 *   - https://neurobloompsychedelic.com/  (and /inquire)
 *   - https://aletheiahealingcenter.com/
 *   - https://theclearingboulder.com/
 *   - https://psychedelictherapyco.com/  (Emergence Psychedelic Therapy)
 *   - https://sacredpeaksretreat.com/
 *   - https://tlcacu.com/  (TLC Acupuncture & Natural Medicine)
 *   - https://solariarising.com/
 *   - https://riversoulhealingcenter.com/
 *   - https://treehousesanctuary.com/
 *   - https://psychedelictherapyden.com/
 *   - https://wildglowalchemy.com/
 *   - https://etc-hospitality.com/
 *   - https://gowithincollective.com/
 *   - https://neuroalchemycenter.com/
 *   - https://rosehealingcenters.com/
 *   - https://wildrootstherapeutics.com/
 *   - https://microhealingcenter.com/
 *   - https://mindfulelevationhealingcenter.com/
 *   - https://reflectivehealing.com/  (and /contact)
 *  Geocoding:
 *   - https://nominatim.openstreetmap.org/search?format=json&q=<URL-encoded address>
 *
 * OMITTED (candidate + reason):
 *   - Memoru Center for Visionary Healing Arts (100 Arapahoe Ave Ste 10,
 *     Boulder; memorucenter.org) — own site offers "psychedelic-assisted
 *     therapy" + training but makes NO Colorado healing-center / licensure
 *     attestation. Omitted (fails rule c on own site; included on HAF list but
 *     no licensing claim surfaced on own site this pass).
 *   - Reset, LLC (Centennial; coloradoreset.com) — own site self-attests
 *     "licensed as a Natural Medicine Healing Center in Colorado," but NO street
 *     address on its own site OR on HAF ("contact through website"). Omitted
 *     (fails rule b — no real street address anywhere).
 *   - Innate Wisdom and Wellness, LLC (Durango; innatewisdomandwellness.com) —
 *     self-describes "a legal, micro healing center for psilocybin assisted
 *     therapy in Durango," but NO street address on own site OR on HAF
 *     ("contact through website"). Omitted (fails rule b).
 *   - Sangam Healing Center (Lakewood; sangamhealingcenter.com) — self-attests
 *     "Licensed micro healing center," but NO street address on own site OR on
 *     HAF ("contact through email"). Omitted (fails rule b).
 *   - Sacred Symbiosis (Westcliffe; sacredsymbiosis.net) — self-attests
 *     operating "at our licensed healing center" under CO's Natural Medicine
 *     Health Act, but NO street address on own site OR on HAF ("contact through
 *     website"). Omitted (fails rule b).
 *   - New Awareness Psychedelic Healing (New Castle; newawarenesspsychedelichealing.com)
 *     — own site is an "under construction" placeholder with no content, address,
 *     or licensing. Omitted (fails rule a — no working website this pass).
 *
 * HAF RE-CHECK: the full HAF active-licensee directory was re-read. Beyond the
 * 9 centers already in t1–t9 and the candidates above, no additional unlisted
 * centers were found.
 *
 * DATA-QUALITY NOTES:
 *   - Psychedelic Therapy Den: own site lists 5335 W 48th Ave (HAF showed 5535);
 *     own-site value used. Own site publishes license refs NMHC-00048 /
 *     NMCF-000017. HAF phone differed; own-site phone (303-927-0233) used.
 *   - Rose Healing Center: own site lists 10450 Park Meadows Dr (HAF showed
 *     11450); own-site value used.
 *   - Reflective Healing: own site lists 605 S College Ave Ste B100 (HAF showed
 *     171 N College Ave); own-site value used. Traceability via HAF active list
 *     (own site lists psilocybin-assisted therapy as a service).
 *   - Aletheia: full-street geocode returned no Nominatim hit; coordinates are
 *     the Aspen 81611 centroid — tagged 'approximate-location'. License #s
 *     published on own site: Healing Center NMHC-00055, Clinical Facilitator
 *     NMCF.0000019.
 *   - Etc Hospitality / TLC / Solaria / Wild Glow / Wild Roots: street address
 *     sourced from the HAF active-licensee directory (own site did not publish a
 *     street address); traceability via HAF active list and, where present,
 *     own-site natural-medicine attestation.
 *   - avgRating/reviewCount are 0 (no first-party reviews collected).
 */

import type { Retailer } from '@/lib/types'

export const therapeuticRetailers2: Retailer[] = [
  {
    id: 't10',
    slug: 'neurobloom-aspen',
    name: 'NeuroBloom (Aspen)',
    description:
      'A licensed Colorado healing center offering psychedelic / natural medicine services at its Aspen location (part of NeuroBloom, with a second location in Basalt).',
    verticals: ['therapeutic'],
    address: '426 E Main St, #1A',
    city: 'Aspen',
    state: 'CO',
    zip: '81611',
    lat: 39.1906682,
    lng: -106.8188121,
    website: 'https://neurobloompsychedelic.com',
    email: 'neurobloom@theneurospa.com',
    hours: {},
    photoUrls: [],
    isVerified: true,
    subscriptionTier: 'basic',
    avgRating: 0,
    reviewCount: 0,
    tags: ['licensed', 'natural-medicine', 'psilocybin'],
    online: false,
    licenseInfo:
      'Self-described "A licensed healing center with locations in Aspen and Basalt, Colorado" on neurobloompsychedelic.com; listed on Healing Advocacy Fund active-licensee directory (healingadvocacyfund.org/co-healing-center).',
  },
  {
    id: 't11',
    slug: 'neurobloom-basalt',
    name: 'NeuroBloom (Basalt)',
    description:
      'A licensed Colorado healing center offering psychedelic / natural medicine services at its Basalt location (part of NeuroBloom, with a second location in Aspen).',
    verticals: ['therapeutic'],
    address: '350 Market St, #001',
    city: 'Basalt',
    state: 'CO',
    zip: '81621',
    lat: 39.3857934,
    lng: -107.0836201,
    website: 'https://neurobloompsychedelic.com',
    email: 'neurobloom@theneurospa.com',
    hours: {},
    photoUrls: [],
    isVerified: true,
    subscriptionTier: 'basic',
    avgRating: 0,
    reviewCount: 0,
    tags: ['licensed', 'natural-medicine', 'psilocybin'],
    online: false,
    licenseInfo:
      'Self-described "A licensed healing center with locations in Aspen and Basalt, Colorado" on neurobloompsychedelic.com; listed on Healing Advocacy Fund active-licensee directory (healingadvocacyfund.org/co-healing-center).',
  },
  {
    id: 't12',
    slug: 'aletheia-healing-center',
    name: 'Aletheia Healing Center',
    description:
      'An Aspen healing center offering psilocybin facilitation under Colorado\'s Regulated Natural Medicine Health Act, led by a Colorado Licensed Clinical Facilitator (also offers ketamine facilitation).',
    verticals: ['therapeutic'],
    address: '111 Aspen Airport Business Center, Suite K',
    city: 'Aspen',
    state: 'CO',
    zip: '81611',
    lat: 39.1911128,
    lng: -106.8235600,
    website: 'https://aletheiahealingcenter.com',
    email: 'returntoyou@proton.me',
    hours: {},
    photoUrls: [],
    isVerified: true,
    subscriptionTier: 'basic',
    avgRating: 0,
    reviewCount: 0,
    tags: ['licensed', 'natural-medicine', 'psilocybin', 'clinical-facilitator', 'approximate-location'],
    online: false,
    licenseInfo:
      'CO Licensed Healing Center NMHC-00055 and Licensed Clinical Facilitator NMCF.0000019 (both published on aletheiahealingcenter.com); listed on Healing Advocacy Fund active-licensee directory (healingadvocacyfund.org/co-healing-center). Coordinates are the Aspen 81611 centroid (full-street geocode unavailable).',
  },
  {
    id: 't13',
    slug: 'the-clearing-boulder',
    name: 'The Clearing',
    description:
      'A licensed psilocybin healing center in Boulder providing guided psilocybin-assisted sessions in a supportive setting.',
    verticals: ['therapeutic'],
    address: '1265 Yellow Pine Ave',
    city: 'Boulder',
    state: 'CO',
    zip: '80304',
    lat: 40.0596630,
    lng: -105.2815328,
    phone: '3035037800',
    website: 'https://theclearingboulder.com',
    email: 'adam@theclearingboulder.com',
    hours: {},
    photoUrls: [],
    isVerified: true,
    subscriptionTier: 'basic',
    avgRating: 0,
    reviewCount: 0,
    tags: ['licensed', 'natural-medicine', 'psilocybin', 'guided-sessions'],
    online: false,
    licenseInfo:
      'Self-described "Licensed Psilocybin Healing Center in Boulder, CO" on theclearingboulder.com; listed on Healing Advocacy Fund active-licensee directory (healingadvocacyfund.org/co-healing-center).',
  },
  {
    id: 't14',
    slug: 'emergence-psychedelic-therapy',
    name: 'Emergence Psychedelic Therapy',
    description:
      'A licensed micro-healing center in Boulder operating within Colorado\'s regulated Natural Medicine framework, where psilocybin is administered by a Natural Medicine clinical facilitator.',
    verticals: ['therapeutic'],
    address: '825 S Broadway, Suite 100',
    city: 'Boulder',
    state: 'CO',
    zip: '80305',
    lat: 39.9766158,
    lng: -105.2420837,
    phone: '3035788845',
    website: 'https://psychedelictherapyco.com',
    hours: {},
    photoUrls: [],
    isVerified: true,
    subscriptionTier: 'basic',
    avgRating: 0,
    reviewCount: 0,
    tags: ['licensed', 'natural-medicine', 'psilocybin', 'micro-healing-center'],
    online: false,
    licenseInfo:
      'Self-described "a licensed micro-healing center based in Boulder, Colorado, operating within Colorado\'s regulated Natural Medicine framework" on psychedelictherapyco.com; listed on Healing Advocacy Fund active-licensee directory (healingadvocacyfund.org/co-healing-center).',
  },
  {
    id: 't15',
    slug: 'sacred-peaks-retreat',
    name: 'Sacred Peaks Retreat',
    description:
      'A Boulder-based state-licensed Natural Medicine Healing Center offering psilocybin mushroom facilitation.',
    verticals: ['therapeutic'],
    address: '134 Canon View Rd, Unit A',
    city: 'Boulder',
    state: 'CO',
    zip: '80302',
    lat: 40.0738652,
    lng: -105.3410755,
    phone: '3038196528',
    website: 'https://sacredpeaksretreat.com',
    hours: {},
    photoUrls: [],
    isVerified: true,
    subscriptionTier: 'basic',
    avgRating: 0,
    reviewCount: 0,
    tags: ['licensed', 'natural-medicine', 'psilocybin', 'retreats'],
    online: false,
    licenseInfo:
      'Self-described "a state-licensed Natural Medicine Healing Center through the Department of Revenue (DOR)" on sacredpeaksretreat.com; listed on Healing Advocacy Fund active-licensee directory (healingadvocacyfund.org/co-healing-center). Street address from HAF directory.',
  },
  {
    id: 't16',
    slug: 'tlc-acupuncture-natural-medicine',
    name: 'TLC Acupuncture & Natural Medicine',
    description:
      'A Breckenridge natural-medicine practice led by Dr. Tami L. Clark, a Colorado-licensed acupuncturist who holds Psilocybin Healing Center / Licensed Facilitator credentials.',
    verticals: ['therapeutic'],
    address: '101 N Main St, Unit 12',
    city: 'Breckenridge',
    state: 'CO',
    zip: '80424',
    lat: 39.4823628,
    lng: -106.0464778,
    phone: '9704858801',
    website: 'https://tlcacu.com',
    hours: {},
    photoUrls: [],
    isVerified: true,
    subscriptionTier: 'basic',
    avgRating: 0,
    reviewCount: 0,
    tags: ['licensed', 'natural-medicine', 'psilocybin', 'acupuncture'],
    online: false,
    licenseInfo:
      'Own site (tlcacu.com) states Dr. Tami L. Clark holds "Psilocybin Healing Center/Licensed Facilitator" credentials; listed on Healing Advocacy Fund active-licensee directory (healingadvocacyfund.org/co-healing-center). Street address from HAF directory.',
  },
  {
    id: 't17',
    slug: 'solaria-rising',
    name: 'Solaria Rising',
    description:
      'A Broomfield natural-medicine healing center providing psilocybin / natural medicine services in accordance with Colorado Natural Medicine regulations.',
    verticals: ['therapeutic'],
    address: '80 Garden Center, Suite 310',
    city: 'Broomfield',
    state: 'CO',
    zip: '80020',
    lat: 39.9234566,
    lng: -105.0893961,
    phone: '3038684548',
    website: 'https://solariarising.com',
    email: 'tonyasmithcounseling@gmail.com',
    hours: {},
    photoUrls: [],
    isVerified: true,
    subscriptionTier: 'basic',
    avgRating: 0,
    reviewCount: 0,
    tags: ['licensed', 'natural-medicine', 'psilocybin'],
    online: false,
    licenseInfo:
      'Own site (solariarising.com) states services are "provided through Solaria Rising (dba), a Natural Medicine Healing Center licensed and regulated by the Colorado Department of Revenue and the Natural Medicine Division"; listed on Healing Advocacy Fund active-licensee directory (healingadvocacyfund.org/co-healing-center). Street address from HAF directory.',
  },
  {
    id: 't18',
    slug: 'river-soul-healing-center',
    name: 'River Soul Healing Center',
    description:
      'A women-owned Denver healing center, newly state-licensed to provide psilocybin-assisted therapy within a Western therapeutic framework.',
    verticals: ['therapeutic'],
    address: '3773 Cherry Creek Dr N, East Tower, Ste 801',
    city: 'Denver',
    state: 'CO',
    zip: '80209',
    lat: 39.6968607,
    lng: -104.9219130,
    phone: '3037265072',
    website: 'https://riversoulhealingcenter.com',
    hours: {},
    photoUrls: [],
    isVerified: true,
    subscriptionTier: 'basic',
    avgRating: 0,
    reviewCount: 0,
    tags: ['licensed', 'natural-medicine', 'psilocybin', 'psychedelic-assisted-therapy'],
    online: false,
    licenseInfo:
      'Reported "newly licensed by the state to provide psilocybin-assisted therapy" (riversoulhealingcenter.com); listed on Healing Advocacy Fund active-licensee directory (healingadvocacyfund.org/co-healing-center).',
  },
  {
    id: 't19',
    slug: 'treehouse-sanctuary',
    name: 'Treehouse Sanctuary',
    description:
      'A Denver healing center operating under Colorado\'s Natural Medicine Health Act, offering natural-medicine services by appointment.',
    verticals: ['therapeutic'],
    address: '1600 N Pennsylvania St, Suite 300',
    city: 'Denver',
    state: 'CO',
    zip: '80203',
    lat: 39.7418503,
    lng: -104.9808389,
    website: 'https://treehousesanctuary.com',
    email: 'info@treehousesanctuary.com',
    hours: {
      mon: 'By appointment',
      tue: 'By appointment',
      wed: 'By appointment',
      thu: 'By appointment',
      fri: 'By appointment',
      sat: 'By appointment',
      sun: 'By appointment',
    },
    photoUrls: [],
    isVerified: true,
    subscriptionTier: 'basic',
    avgRating: 0,
    reviewCount: 0,
    tags: ['licensed', 'natural-medicine', 'psilocybin'],
    online: false,
    licenseInfo:
      'Self-described "a licensed Natural Medicine Healing Center operating under Colorado\'s Natural Medicine Health Act (NMHA)" on treehousesanctuary.com; listed on Healing Advocacy Fund active-licensee directory (healingadvocacyfund.org/co-healing-center).',
  },
  {
    id: 't20',
    slug: 'psychedelic-therapy-den',
    name: 'Psychedelic Therapy Den',
    description:
      'A DORA-licensed Denver healing center providing psychedelic-assisted therapy under Colorado\'s Proposition 122 natural-medicine framework, by appointment.',
    verticals: ['therapeutic'],
    address: '5335 W 48th Ave, Suite 602',
    city: 'Denver',
    state: 'CO',
    zip: '80212',
    lat: 39.7841101,
    lng: -105.0548920,
    phone: '3039270233',
    website: 'https://psychedelictherapyden.com',
    email: 'info@psychedelictherapyden.com',
    hours: {
      mon: 'By appointment',
      tue: 'By appointment',
      wed: 'By appointment',
      thu: 'By appointment',
      fri: 'By appointment',
      sat: 'By appointment',
      sun: 'By appointment',
    },
    photoUrls: [],
    isVerified: true,
    subscriptionTier: 'basic',
    avgRating: 0,
    reviewCount: 0,
    tags: ['licensed', 'natural-medicine', 'psilocybin', 'psychedelic-assisted-therapy'],
    online: false,
    licenseInfo:
      'CO healing center / facilitator references NMHC-00048 and NMCF-000017 published on psychedelictherapyden.com ("DORA-Licensed Healing Center," "100% Legal Under Prop 122"); listed on Healing Advocacy Fund active-licensee directory (healingadvocacyfund.org/co-healing-center).',
  },
  {
    id: 't21',
    slug: 'wild-glow-alchemy',
    name: 'Wild Glow Alchemy',
    description:
      'A licensed Natural Medicine Healing Center in North Denver offering safe, supported psilocybin experiences.',
    verticals: ['therapeutic'],
    address: '8380 Zuni St',
    city: 'Denver',
    state: 'CO',
    zip: '80221',
    lat: 39.7892588,
    lng: -105.0158444,
    phone: '7203369535',
    website: 'https://wildglowalchemy.com',
    hours: {},
    photoUrls: [],
    isVerified: true,
    subscriptionTier: 'basic',
    avgRating: 0,
    reviewCount: 0,
    tags: ['licensed', 'natural-medicine', 'psilocybin'],
    online: false,
    licenseInfo:
      'Self-described "a licensed Natural Medicine Healing Center in North Denver" on wildglowalchemy.com; listed on Healing Advocacy Fund active-licensee directory (healingadvocacyfund.org/co-healing-center). Street address from HAF directory.',
  },
  {
    id: 't22',
    slug: 'etc-hospitality',
    name: 'Etc Hospitality',
    description:
      'A Golden, Colorado provider of natural-medicine journeys held with professional care.',
    verticals: ['therapeutic'],
    address: '16500 S Golden Rd, #105',
    city: 'Golden',
    state: 'CO',
    zip: '80401',
    lat: 39.7354716,
    lng: -105.1858884,
    phone: '2162624445',
    website: 'https://etc-hospitality.com',
    hours: {},
    photoUrls: [],
    isVerified: true,
    subscriptionTier: 'basic',
    avgRating: 0,
    reviewCount: 0,
    tags: ['licensed', 'natural-medicine', 'psilocybin'],
    online: false,
    licenseInfo:
      'Listed on Healing Advocacy Fund active-licensee directory (healingadvocacyfund.org/co-healing-center); own site (etc-hospitality.com) is live and describes "Natural medicine journeys held with professional care." Street address from HAF directory.',
  },
  {
    id: 't23',
    slug: 'go-within-collective',
    name: 'Go Within Collective',
    description:
      'A Colorado Licensed Natural Medicine Healing Center in Lakewood whose licensed facilitators operate under the Natural Medicine Health Act.',
    verticals: ['therapeutic'],
    address: '1785 Kipling St, #8',
    city: 'Lakewood',
    state: 'CO',
    zip: '80215',
    lat: 39.7453540,
    lng: -105.1096800,
    phone: '7202392225',
    website: 'https://gowithincollective.com',
    hours: {},
    photoUrls: [],
    isVerified: true,
    subscriptionTier: 'basic',
    avgRating: 0,
    reviewCount: 0,
    tags: ['licensed', 'natural-medicine', 'psilocybin'],
    online: false,
    licenseInfo:
      'Self-described "Colorado Licensed Natural Medicine Healing Center" on gowithincollective.com; listed on Healing Advocacy Fund active-licensee directory (healingadvocacyfund.org/co-healing-center). Street address from HAF directory.',
  },
  {
    id: 't24',
    slug: 'neuroalchemy',
    name: 'NeuroAlchemy',
    description:
      'A natural-medicine healing center in Littleton offering Natural Medicine services led by licensed clinical facilitators.',
    verticals: ['therapeutic'],
    address: '8500 W Bowles Ave, Ste 200',
    city: 'Littleton',
    state: 'CO',
    zip: '80123',
    lat: 39.6111698,
    lng: -105.0872198,
    phone: '7202586111',
    website: 'https://neuroalchemycenter.com',
    email: 'info@neuroalchemycenter.com',
    hours: {},
    photoUrls: [],
    isVerified: true,
    subscriptionTier: 'basic',
    avgRating: 0,
    reviewCount: 0,
    tags: ['licensed', 'natural-medicine', 'psilocybin', 'clinical-facilitator'],
    online: false,
    licenseInfo:
      'Self-described "a natural-medicine healing center" offering "Natural Medicine services" on neuroalchemycenter.com; listed on Healing Advocacy Fund active-licensee directory (healingadvocacyfund.org/co-healing-center).',
  },
  {
    id: 't25',
    slug: 'rose-healing-center',
    name: 'Rose Healing Center',
    description:
      'A Lone Tree licensed medical clinic and collective of licensed clinical facilitators offering psilocybin-assisted therapy.',
    verticals: ['therapeutic'],
    address: '10450 Park Meadows Dr, Suite 100',
    city: 'Lone Tree',
    state: 'CO',
    zip: '80124',
    lat: 39.5376248,
    lng: -104.8737541,
    phone: '7207076914',
    website: 'https://rosehealingcenters.com',
    email: 'info@rosehealingcenters.com',
    hours: {},
    photoUrls: [],
    isVerified: true,
    subscriptionTier: 'basic',
    avgRating: 0,
    reviewCount: 0,
    tags: ['licensed', 'natural-medicine', 'psilocybin', 'clinical-facilitator'],
    online: false,
    licenseInfo:
      'Self-described "a Colorado-based collective of licensed clinical facilitators devoted to offering psilocybin-assisted therapy" and "a licensed medical clinic" on rosehealingcenters.com; listed on Healing Advocacy Fund active-licensee directory (healingadvocacyfund.org/co-healing-center).',
  },
  {
    id: 't26',
    slug: 'wild-roots-therapeutics',
    name: 'Wild Roots Therapeutics',
    description:
      'A Salida practice offering psilocybin-assisted therapy alongside individual psychotherapy and ketamine-assisted psychotherapy.',
    verticals: ['therapeutic'],
    address: '134 F Street, Suite 201',
    city: 'Salida',
    state: 'CO',
    zip: '81201',
    lat: 38.5357748,
    lng: -105.9924906,
    phone: '7197525672',
    website: 'https://wildrootstherapeutics.com',
    email: 'mamie@wildrootstherapeutics.com',
    hours: {},
    photoUrls: [],
    isVerified: true,
    subscriptionTier: 'basic',
    avgRating: 0,
    reviewCount: 0,
    tags: ['licensed', 'natural-medicine', 'psilocybin', 'psychedelic-assisted-therapy'],
    online: false,
    licenseInfo:
      'Listed on Healing Advocacy Fund active-licensee directory (healingadvocacyfund.org/co-healing-center); own site (wildrootstherapeutics.com) lists "Psilocybin Assisted Therapy" among its services. Street address from HAF directory.',
  },
  {
    id: 't27',
    slug: 'micro-healing-center',
    name: 'Micro Healing Center',
    description:
      'A licensed Colorado center in Westminster providing psychedelic-assisted therapy under Colorado\'s Natural Medicine regulations.',
    verticals: ['therapeutic'],
    address: '8461 Turnpike Dr, Ste 110',
    city: 'Westminster',
    state: 'CO',
    zip: '80031',
    lat: 39.8494486,
    lng: -105.0491357,
    phone: '3032845144',
    website: 'https://microhealingcenter.com',
    email: 'info@microhealingcenter.com',
    hours: {
      mon: '10:00-18:00',
      tue: '10:00-18:00',
      wed: '10:00-18:00',
      thu: '10:00-18:00',
      fri: '10:00-18:00',
      sat: null,
      sun: null,
    },
    photoUrls: [],
    isVerified: true,
    subscriptionTier: 'basic',
    avgRating: 0,
    reviewCount: 0,
    tags: ['licensed', 'natural-medicine', 'psilocybin', 'micro-healing-center'],
    online: false,
    licenseInfo:
      'Self-described "A licensed Colorado center providing psychedelic-assisted therapy" "Operating under Colorado\'s Natural Medicine regulations" on microhealingcenter.com; listed on Healing Advocacy Fund active-licensee directory (healingadvocacyfund.org/co-healing-center).',
  },
  {
    id: 't28',
    slug: 'mindful-elevation',
    name: 'Mindful Elevation Natural Medicine Healing Center',
    description:
      'A lakefront Natural Medicine Healing Center in Evergreen offering legal psilocybin-assisted therapy guided by licensed facilitators, by appointment.',
    verticals: ['therapeutic'],
    address: '29029 Upper Bear Creek Rd, Suite 302-306',
    city: 'Evergreen',
    state: 'CO',
    zip: '80439',
    lat: 39.6336562,
    lng: -105.3299557,
    phone: '2109946336',
    website: 'https://mindfulelevationhealingcenter.com',
    email: 'info@mindfulelevationhealingcenter.com',
    hours: {
      mon: 'By appointment',
      tue: 'By appointment',
      wed: 'By appointment',
      thu: 'By appointment',
      fri: 'By appointment',
      sat: 'By appointment',
      sun: 'By appointment',
    },
    photoUrls: [],
    isVerified: true,
    subscriptionTier: 'basic',
    avgRating: 0,
    reviewCount: 0,
    tags: ['licensed', 'natural-medicine', 'psilocybin', 'psychedelic-assisted-therapy'],
    online: false,
    licenseInfo:
      'Self-described "a lakefront Natural Medicine Healing Center" offering "Legal Psilocybin Assisted Therapy" on mindfulelevationhealingcenter.com; listed on Healing Advocacy Fund active-licensee directory (healingadvocacyfund.org/co-healing-center).',
  },
  {
    id: 't29',
    slug: 'reflective-healing',
    name: 'Reflective Healing',
    description:
      'A Fort Collins practice offering psilocybin-assisted therapy along with ketamine-assisted psychotherapy, psychedelic integration, and microdosing support.',
    verticals: ['therapeutic'],
    address: '605 S College Ave, Suite B100',
    city: 'Fort Collins',
    state: 'CO',
    zip: '80524',
    lat: 40.5798891,
    lng: -105.0768769,
    phone: '9704490853',
    website: 'https://reflectivehealing.com',
    hours: {},
    photoUrls: [],
    isVerified: true,
    subscriptionTier: 'basic',
    avgRating: 0,
    reviewCount: 0,
    tags: ['licensed', 'natural-medicine', 'psilocybin', 'integration'],
    online: false,
    licenseInfo:
      'Listed on Healing Advocacy Fund active-licensee directory (healingadvocacyfund.org/co-healing-center); own site (reflectivehealing.com) lists "Psilocybin-Assisted Therapy" among its services. Own-site address (605 S College Ave) used in place of HAF\'s 171 N College Ave listing.',
  },
]
