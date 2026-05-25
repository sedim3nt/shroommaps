export type Vertical = 'therapeutic' | 'medicinal' | 'gourmet'

export interface Hours {
  mon?: string | null
  tue?: string | null
  wed?: string | null
  thu?: string | null
  fri?: string | null
  sat?: string | null
  sun?: string | null
}

export interface Retailer {
  id: string
  slug: string
  name: string
  description: string
  verticals: Vertical[]
  address: string
  city: string
  state: string
  zip: string
  lat: number
  lng: number
  phone?: string
  website?: string
  email?: string
  hours: Hours
  logoUrl?: string
  coverUrl?: string
  photoUrls: string[]
  isVerified: boolean
  subscriptionTier: 'basic' | 'plus' | 'pro' | 'enterprise'
  avgRating: number
  reviewCount: number
  tags: string[]
  /** True for national online brands that ship nationwide (pinned to their HQ). */
  online?: boolean
  /** Provenance/licensing note for therapeutic centers (e.g. CO Natural Medicine license traceability). */
  licenseInfo?: string
}

export interface Product {
  id: string
  retailerId: string
  name: string
  description: string
  category: string
  species: string[]
  priceCents: number
  imageUrl?: string
  isAvailable: boolean
}

export interface Review {
  id: string
  retailerId: string
  authorName: string
  rating: number
  body: string
  isVerifiedPurchase: boolean
  createdAt: string
}

export interface Deal {
  id: string
  retailerId: string
  title: string
  description: string
  discountPct?: number
  promoCode?: string
  expiresAt?: string
  isFeatured: boolean
}

// Foraging types
export type SpeciesCategory = 'edible' | 'medicinal' | 'caution' | 'deadly'

export interface ForagingSpot {
  id: string
  userId: string
  name: string
  description?: string
  latitude: number
  longitude: number
  isPrivate: boolean
  species: string[]
  habitat?: string
  season: string[]
  terrain?: string
  elevation?: number
  lastVisited?: string
  photos: string[]
  createdAt: string
}

export interface SpotObservation {
  id: string
  spotId: string
  userId: string
  speciesFound: string[]
  date: string
  notes?: string
  conditions?: 'rain' | 'dry' | 'frost'
  quantity?: 'none' | 'few' | 'some' | 'abundant'
  photos: string[]
  createdAt: string
}

export interface MushroomSpecies {
  commonName: string
  scientificName: string
  category: SpeciesCategory
  edibility: string
  season: string
  habitat: string
  idFeatures: string[]
  lookAlikes: string[]
  months: number[] // 1-12
}

export type TherapeuticStatus = 'legal' | 'pending' | 'decriminalized' | 'prohibited'

export interface StateStatus {
  abbreviation: string
  name: string
  therapeuticStatus: TherapeuticStatus
  decrimStatus: 'decriminalized' | 'prohibited' | 'partial'
  notes: string
  effectiveDate?: string
  sourceUrl?: string
}
