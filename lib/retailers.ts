import { supabase } from '@/lib/supabase'
import { mockRetailers, mockProducts, mockReviews, mockDeals } from '@/data/mock-retailers'
import type { Retailer, Product, Review, Deal } from '@/lib/types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function rowToRetailer(row: any): Retailer {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    description: row.description ?? '',
    verticals: row.verticals as Retailer['verticals'],
    address: row.address,
    city: row.city,
    state: row.state,
    zip: row.zip,
    lat: row.lat,
    lng: row.lng,
    phone: row.phone ?? undefined,
    website: row.website ?? undefined,
    email: row.email ?? undefined,
    hours: row.hours as Retailer['hours'],
    logoUrl: row.logo_url ?? undefined,
    coverUrl: row.cover_url ?? undefined,
    photoUrls: row.photo_urls ?? [],
    isVerified: row.is_verified,
    subscriptionTier: row.subscription_tier as Retailer['subscriptionTier'],
    avgRating: row.avg_rating,
    reviewCount: row.review_count,
    tags: [],
  }
}

export async function getRetailers(filters?: {
  vertical?: string
  city?: string
  state?: string
  search?: string
}): Promise<Retailer[]> {
  if (supabase) {
    let query = supabase.from('retailers').select('*')

    if (filters?.vertical) {
      query = query.contains('verticals', [filters.vertical])
    }
    if (filters?.city) {
      query = query.eq('city', filters.city)
    }
    if (filters?.state) {
      query = query.eq('state', filters.state)
    }
    if (filters?.search) {
      const q = filters.search.trim()
      if (q) {
        query = query.or(`name.ilike.%${q}%,city.ilike.%${q}%,description.ilike.%${q}%`)
      }
    }

    const { data, error } = await query.order('subscription_tier', { ascending: false }).order('avg_rating', { ascending: false })

    if (!error && data) {
      return data.map(rowToRetailer)
    }
  }

  // Fallback to mock data
  return mockRetailers.filter((r) => {
    const matchVertical = !filters?.vertical || r.verticals.includes(filters.vertical as Retailer['verticals'][number])
    const matchCity = !filters?.city || r.city === filters.city
    const matchState = !filters?.state || r.state === filters.state
    if (filters?.search) {
      const q = filters.search.toLowerCase()
      if (!r.name.toLowerCase().includes(q) && !r.city.toLowerCase().includes(q) && !r.description.toLowerCase().includes(q)) {
        return false
      }
    }
    return matchVertical && matchCity && matchState
  })
}

export async function getRetailerBySlug(slug: string): Promise<Retailer | null> {
  if (supabase) {
    const { data, error } = await supabase
      .from('retailers')
      .select('*')
      .eq('slug', slug)
      .single()

    if (!error && data) {
      return rowToRetailer(data)
    }
  }

  return mockRetailers.find((r) => r.slug === slug) ?? null
}

export async function searchRetailers(query: string): Promise<Retailer[]> {
  const q = query.trim()
  if (!q) return getRetailers()
  return getRetailers({ search: q })
}

export async function getDistinctCities(): Promise<string[]> {
  if (supabase) {
    const { data, error } = await supabase
      .from('retailers')
      .select('city')

    if (!error && data) {
      const cities = [...new Set(data.map((r) => r.city))].sort()
      return cities
    }
  }

  return [...new Set(mockRetailers.map((r) => r.city))].sort()
}

export async function getAllRetailerSlugs(): Promise<string[]> {
  if (supabase) {
    const { data, error } = await supabase
      .from('retailers')
      .select('slug')

    if (!error && data) {
      return data.map((r) => r.slug)
    }
  }

  return mockRetailers.map((r) => r.slug)
}

export async function getRetailerProducts(retailerId: string): Promise<Product[]> {
  if (supabase) {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('retailer_id', retailerId)

    if (!error && data) {
      return data.map((row) => ({
        id: row.id,
        retailerId: row.retailer_id,
        name: row.name,
        description: row.description ?? '',
        category: row.category ?? '',
        species: row.species ?? [],
        priceCents: row.price_cents ?? 0,
        imageUrl: row.image_url ?? undefined,
        isAvailable: row.is_available ?? true,
      }))
    }
  }

  return mockProducts.filter((p) => p.retailerId === retailerId)
}

export async function getRetailerReviews(retailerId: string): Promise<Review[]> {
  if (supabase) {
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .eq('retailer_id', retailerId)
      .order('created_at', { ascending: false })

    if (!error && data) {
      return data.map((row) => ({
        id: row.id,
        retailerId: row.retailer_id,
        authorName: row.author_name ?? 'Anonymous',
        rating: row.rating,
        body: row.body ?? '',
        isVerifiedPurchase: row.is_verified_purchase ?? false,
        createdAt: row.created_at,
      }))
    }
  }

  return mockReviews.filter((r) => r.retailerId === retailerId)
}

export async function getRetailerDeals(retailerId: string): Promise<Deal[]> {
  if (supabase) {
    const { data, error } = await supabase
      .from('deals')
      .select('*')
      .eq('retailer_id', retailerId)
      .gte('expires_at', new Date().toISOString())

    if (!error && data) {
      return data.map((row) => ({
        id: row.id,
        retailerId: row.retailer_id,
        title: row.title,
        description: row.description ?? '',
        discountPct: row.discount_pct ?? undefined,
        promoCode: row.promo_code ?? undefined,
        expiresAt: row.expires_at ?? undefined,
        isFeatured: row.is_featured ?? false,
      }))
    }
  }

  return mockDeals.filter((d) => d.retailerId === retailerId)
}
