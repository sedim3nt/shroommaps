/*
 * Colorado Licensed Psilocybin "Healing Centers" (therapeutic vertical)
 * ---------------------------------------------------------------------
 * Compiled 2026-05-25 for the MycoMaps directory.
 *
 * VERIFICATION METHOD (verify-or-omit):
 *  - State-license traceability: Colorado's Natural Medicine program licenses
 *    healing centers via the CO Dept of Revenue, Natural Medicine Division.
 *    The state's public-facing license verification tool (codor.mylicense.com)
 *    only exposes individual NM Owner / NM Handler records, NOT a downloadable
 *    establishment list, and the state's healing-center page blocked automated
 *    fetching (HTTP 403). The most authoritative public CROSS-REFERENCE is the
 *    Healing Advocacy Fund (HAF) "Colorado Healing Center Directory," which HAF
 *    states is "an updated list of active Healing Centers operating under
 *    Colorado's Natural Medicines Act." Every center below appears on that HAF
 *    directory AND was independently confirmed via its own live website
 *    (address + licensed-healing-center claim and/or contact details).
 *  - Each included center therefore meets all hard rules: own working website,
 *    real street address, and license traceability (HAF active-licensee list,
 *    plus self-attestation of CO Natural Medicine licensure on its own site;
 *    Vivid Minds additionally publishes a license number).
 *  - Addresses geocoded via OpenStreetMap Nominatim
 *    (https://nominatim.openstreetmap.org/search?format=json&q=<address>),
 *    reading lat/lon from the first result.
 *
 * SOURCES
 *  State / program:
 *   - https://dnm.colorado.gov/  (CO Dept of Natural Medicine home)
 *   - https://dnm.colorado.gov/healing-centers  (state healing-center page; 403 to bots)
 *   - https://codor.mylicense.com/NMD_Verification/  (state NMD license lookup; owners/handlers only)
 *   - https://dnm.colorado.gov/accessing-regulated-natural-medicine
 *  License cross-reference (primary establishment list used):
 *   - https://healingadvocacyfund.org/co-healing-center  (HAF active-licensee directory)
 *   - https://healingadvocacyfund.org/colorado
 *  Corroborating news:
 *   - https://www.cpr.org/2025/03/31/colorados-first-licensed-psilocybin-healing-center/
 *   - https://www.axios.com/local/boulder/2025/12/01/colorado-psilocybin-therapy-boulder-healing-centers
 *   - https://boulderreportinglab.org/2025/11/18/boulders-first-psilocybin-healing-centers-open-their-doors/
 *  Center sites (own websites verified live):
 *   - https://www.thecenterorigin.com/
 *   - https://www.happyrebelhealing.com/
 *   - https://chariotspace.com/
 *   - https://psychedelicgrowth.net/  (and /contact)
 *   - https://www.wholeness.com/
 *   - https://numiahealing.com/
 *   - https://www.transcendent.health/
 *   - https://www.sanctumaspen.com/  (and /contact)
 *   - https://vividmindswellness.com/  (and /contact)
 *  Geocoding:
 *   - https://nominatim.openstreetmap.org/search?format=json&q=<URL-encoded address>
 *
 * OMITTED (and why) — present in the HAF directory but NOT independently
 * verified to the standard above within this pass, so left out to protect
 * directory accuracy. These are real candidates worth a future verification
 * pass, not confirmed rejects:
 *   - ETC Hospitality (Golden, etc-hospitality.com): homepage live but no
 *     address / licensing claim surfaced on fetched pages; OMITTED until the
 *     street address + license status are confirmed on its own site.
 *   - Aspen/Basalt NeuroBloom, Aletheia Healing Center, The Clearing,
 *     Memoru Center, Sacred Peaks Retreat, Emergence Psychedelic Therapy,
 *     Safar Healing Center, TLC Acupuncture & Natural Medicine, Solaria Rising,
 *     Reset LLC, River Soul Healing Center, Treehouse Sanctuary, Psychedelic
 *     Therapy Den, Wild Glow Alchemy, Innate Wisdom & Wellness, Mindful
 *     Elevation, Reflective Healing, Go Within Collective, Sangam Healing
 *     Center, NeuroAlchemy, Rose Healing Center, New Awareness Psychedelic
 *     Healing, Wild Roots Therapeutics, Sacred Symbiosis, Micro Healing Center
 *     — all listed in the HAF active-licensee directory with addresses +
 *     websites, but each center's OWN site was not individually fetched/confirmed
 *     in this pass. OMITTED pending per-site verification rather than included
 *     on the directory listing alone.
 *
 * DATA-QUALITY NOTES:
 *   - Psychedelic Growth: HAF lists "3015 47th St, Ste E3, Boulder"; the
 *     center's own /contact page lists "5277 Manhattan Circle, Suite 103,
 *     Boulder 80303." Own-site value used (more authoritative + had phone/email).
 *   - SANCTUM (Aspen): Nominatim matched 535 E Hyman Ave to a building labeled
 *     "Pure Barre" (same downtown Aspen address/building); coordinates reflect
 *     that street address.
 *   - No invented phones/emails/hours/ratings. Fields omitted when not found.
 *   - avgRating/reviewCount are 0 (no first-party reviews collected).
 */

import type { Retailer } from '@/lib/types'

export const therapeuticRetailers: Retailer[] = [
  {
    id: 't1',
    slug: 'the-center-origin',
    name: 'The Center Origin',
    description:
      'A licensed psychedelic-assisted healing center in LoDo Denver specializing in journey work, natural medicine services, post-journey integration, and facilitator training. Reported as Colorado\'s first state-licensed psilocybin healing center.',
    verticals: ['therapeutic'],
    address: '1440 Blake Street, Suite 330',
    city: 'Denver',
    state: 'CO',
    zip: '80202',
    lat: 39.7490933,
    lng: -105.0008779,
    phone: '3032844246',
    website: 'https://www.thecenterorigin.com',
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
    tags: ['licensed', 'natural-medicine', 'psilocybin', 'integration', 'facilitator-training'],
    online: false,
    licenseInfo:
      'Self-attested "Licensed Natural Medicine Healing Center" on thecenterorigin.com; listed on Healing Advocacy Fund active-licensee directory (healingadvocacyfund.org/co-healing-center); reported as Colorado\'s first state-issued healing center license (CPR, 2025-03-31).',
  },
  {
    id: 't2',
    slug: 'happy-rebel-healing',
    name: 'Happy Rebel Healing',
    description:
      'A Colorado state-licensed Natural Medicine healing center in Boulder offering individual and group psilocybin sessions and support in a professionally guided setting.',
    verticals: ['therapeutic'],
    address: '3450 Penrose Place, Suite 220',
    city: 'Boulder',
    state: 'CO',
    zip: '80301',
    lat: 40.0374520,
    lng: -105.2474790,
    phone: '7208009119',
    website: 'https://www.happyrebelhealing.com',
    email: 'teresa@happyrebelhealing.com',
    hours: {},
    photoUrls: [],
    isVerified: true,
    subscriptionTier: 'basic',
    avgRating: 0,
    reviewCount: 0,
    tags: ['licensed', 'natural-medicine', 'psilocybin', 'individual-sessions', 'group-sessions'],
    online: false,
    licenseInfo:
      'Self-described "Colorado state-licensed Natural Medicine Healing Center" on happyrebelhealing.com; listed on Healing Advocacy Fund active-licensee directory (healingadvocacyfund.org/co-healing-center).',
  },
  {
    id: 't3',
    slug: 'chariot-psilocybin-healing-center',
    name: 'Chariot',
    description:
      'A psilocybin service center offering guided psilocybin-assisted sessions in a curated, supervised space with licensed facilitators. Operates a Boulder, Colorado location (also Portland, OR).',
    verticals: ['therapeutic'],
    address: '1240 Pine St',
    city: 'Boulder',
    state: 'CO',
    zip: '80302',
    lat: 40.0198523,
    lng: -105.2794610,
    website: 'https://chariotspace.com',
    hours: {},
    photoUrls: [],
    isVerified: true,
    subscriptionTier: 'basic',
    avgRating: 0,
    reviewCount: 0,
    tags: ['licensed', 'natural-medicine', 'psilocybin', 'guided-sessions'],
    online: false,
    licenseInfo:
      'Listed on Healing Advocacy Fund active-licensee directory (healingadvocacyfund.org/co-healing-center) with the 1240 Pine St Boulder address matching chariotspace.com; reported as an operating Boulder healing center (Axios Boulder, 2025-12-01).',
  },
  {
    id: 't4',
    slug: 'psychedelic-growth',
    name: 'Psychedelic Growth',
    description:
      'A Boulder healing center providing psychedelic-assisted therapy with licensed facilitators, including psilocybin, structured around preparation, the session, and integration.',
    verticals: ['therapeutic'],
    address: '5277 Manhattan Circle, Suite 103',
    city: 'Boulder',
    state: 'CO',
    zip: '80303',
    lat: 39.9850601,
    lng: -105.2294517,
    phone: '7204413992',
    website: 'https://psychedelicgrowth.net',
    email: 'erin@psychedelicgrowth.net',
    hours: {},
    photoUrls: [],
    isVerified: true,
    subscriptionTier: 'basic',
    avgRating: 0,
    reviewCount: 0,
    tags: ['licensed', 'natural-medicine', 'psilocybin', 'psychedelic-assisted-therapy', 'integration'],
    online: false,
    licenseInfo:
      'Listed on Healing Advocacy Fund active-licensee directory (healingadvocacyfund.org/co-healing-center); reported as an operating Boulder healing center (Axios Boulder, 2025-12-01). Note: own /contact page address (5277 Manhattan Circle) differs from HAF listing (3015 47th St); own-site value used.',
  },
  {
    id: 't5',
    slug: 'wholeness-center',
    name: 'Wholeness Center',
    description:
      'An integrative mental-health clinic in Fort Collins that describes itself as a licensed healing center offering psilocybin-assisted therapies alongside psychiatric and functional-medicine care.',
    verticals: ['therapeutic'],
    address: '2620 E Prospect Rd, Suite 190',
    city: 'Fort Collins',
    state: 'CO',
    zip: '80525',
    lat: 40.5687254,
    lng: -105.0280663,
    phone: '9702211106',
    website: 'https://www.wholeness.com',
    email: 'info@wholeness.com',
    hours: {
      mon: '9:00-17:00',
      tue: '9:00-17:00',
      wed: '9:00-17:00',
      thu: '9:00-17:00',
      fri: '9:00-17:00',
      sat: '9:00-13:00',
      sun: null,
    },
    photoUrls: [],
    isVerified: true,
    subscriptionTier: 'basic',
    avgRating: 0,
    reviewCount: 0,
    tags: ['licensed', 'natural-medicine', 'psilocybin', 'integrative-mental-health', 'psychiatry'],
    online: false,
    licenseInfo:
      'Self-described "licensed healing center offering psilocybin-assisted therapies" on wholeness.com; listed on Healing Advocacy Fund active-licensee directory (healingadvocacyfund.org/co-healing-center).',
  },
  {
    id: 't6',
    slug: 'numia-healing',
    name: 'Numia Healing',
    description:
      'A Denver healing center offering legal, therapist-guided psilocybin-assisted therapy in a clinically structured setting for individuals, couples, and small groups, emphasizing preparation, safety, and integration.',
    verticals: ['therapeutic'],
    address: '75 S Madison St, Suite 201',
    city: 'Denver',
    state: 'CO',
    zip: '80209',
    lat: 39.7150043,
    lng: -104.9462760,
    phone: '7203727137',
    website: 'https://numiahealing.com',
    email: 'info@numiahealing.com',
    hours: {},
    photoUrls: [],
    isVerified: true,
    subscriptionTier: 'basic',
    avgRating: 0,
    reviewCount: 0,
    tags: ['licensed', 'natural-medicine', 'psilocybin', 'therapist-guided', 'integration'],
    online: false,
    licenseInfo:
      'Self-described provider of "Legal, Therapist Guided Psilocybin-Assisted Therapy In Denver" on numiahealing.com; listed on Healing Advocacy Fund active-licensee directory (healingadvocacyfund.org/co-healing-center).',
  },
  {
    id: 't7',
    slug: 'transcendent-integrative-health',
    name: 'Transcendent Integrative Health',
    description:
      'An Arvada healing center providing psychedelic-assisted therapy at a licensed natural-medicine facility with on-site mushroom cultivation and licensed facilitators.',
    verticals: ['therapeutic'],
    address: '5511 W 56th Ave, Unit 100',
    city: 'Arvada',
    state: 'CO',
    zip: '80002',
    lat: 39.7989895,
    lng: -105.0560705,
    phone: '3038287473',
    website: 'https://www.transcendent.health',
    email: 'info@transcendent.health',
    hours: {},
    photoUrls: [],
    isVerified: true,
    subscriptionTier: 'basic',
    avgRating: 0,
    reviewCount: 0,
    tags: ['licensed', 'natural-medicine', 'psilocybin', 'on-site-cultivation', 'psychedelic-assisted-therapy'],
    online: false,
    licenseInfo:
      'Self-described "fully licensed" healing center "operating in alignment with Colorado law" on transcendent.health; listed on Healing Advocacy Fund active-licensee directory (healingadvocacyfund.org/co-healing-center).',
  },
  {
    id: 't8',
    slug: 'sanctum-aspen',
    name: 'SANCTUM',
    description:
      'An Aspen healing center offering legal, licensed, and medically supervised psilocybin retreats and natural-medicine services for adults 21+, with a focus on leadership and group transformation.',
    verticals: ['therapeutic'],
    address: '535 E Hyman Ave, Lower Level',
    city: 'Aspen',
    state: 'CO',
    zip: '81611',
    lat: 39.1884328,
    lng: -106.8177770,
    phone: '9702391147',
    website: 'https://www.sanctumaspen.com',
    hours: {},
    photoUrls: [],
    isVerified: true,
    subscriptionTier: 'basic',
    avgRating: 0,
    reviewCount: 0,
    tags: ['licensed', 'natural-medicine', 'psilocybin', 'retreats', 'group-sessions'],
    online: false,
    licenseInfo:
      'Self-described "legal, licensed, and medically supervised" Colorado healing center on sanctumaspen.com; listed on Healing Advocacy Fund active-licensee directory (healingadvocacyfund.org/co-healing-center).',
  },
  {
    id: 't9',
    slug: 'vivid-minds-wellness',
    name: 'Vivid Minds Wellness',
    description:
      'A Denver healing center offering guided psilocybin journeys along with yoga, breathwork, and art therapy in small groups. Describes itself as one of Colorado\'s first licensed healing centers.',
    verticals: ['therapeutic'],
    address: '1545 S Broadway',
    city: 'Denver',
    state: 'CO',
    zip: '80210',
    lat: 39.6885671,
    lng: -104.9876124,
    phone: '7202106553',
    website: 'https://vividmindswellness.com',
    hours: {
      mon: '8:00-18:00',
      tue: '8:00-18:00',
      wed: '8:00-18:00',
      thu: '8:00-18:00',
      fri: '8:00-18:00',
      sat: '8:00-18:00',
      sun: '8:00-18:00',
    },
    photoUrls: [],
    isVerified: true,
    subscriptionTier: 'basic',
    avgRating: 0,
    reviewCount: 0,
    tags: ['licensed', 'natural-medicine', 'psilocybin', 'group-sessions', 'breathwork'],
    online: false,
    licenseInfo:
      'CO Natural Medicine healing center license # NMHC-00003 (published on vividmindswellness.com, "One of Colorado\'s First Licensed Healing Centers"); also listed on Healing Advocacy Fund active-licensee directory (healingadvocacyfund.org/co-healing-center).',
  },
]
