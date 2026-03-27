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
