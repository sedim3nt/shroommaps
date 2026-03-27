import { supabase } from '@/lib/supabase'
import type { Database } from '@/lib/supabase'
import { mockRetailers } from '@/data/mock-retailers'
import type { Retailer } from '@/lib/types'

type RetailerRow = Database['public']['Tables']['retailers']['Row']

function rowToRetailer(row: RetailerRow): Retailer {
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

  if (supabase) {
    const { data, error } = await supabase
      .from('retailers')
      .select('*')
      .or(`name.ilike.%${q}%,city.ilike.%${q}%,description.ilike.%${q}%`)
      .order('avg_rating', { ascending: false })

    if (!error && data) {
      return data.map(rowToRetailer)
    }
  }

  const lower = q.toLowerCase()
  return mockRetailers.filter(
    (r) =>
      r.name.toLowerCase().includes(lower) ||
      r.city.toLowerCase().includes(lower) ||
      r.description.toLowerCase().includes(lower)
  )
}
