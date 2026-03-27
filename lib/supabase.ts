import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'Supabase environment variables not set. Using mock data only. ' +
    'Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to enable live data.'
  )
}

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null

export type Database = {
  public: {
    Tables: {
      retailers: {
        Row: {
          id: string
          owner_id: string | null
          name: string
          slug: string
          description: string | null
          verticals: string[]
          address: string
          city: string
          state: string
          zip: string
          lat: number
          lng: number
          phone: string | null
          website: string | null
          email: string | null
          hours: Record<string, string | null>
          logo_url: string | null
          cover_url: string | null
          photo_urls: string[]
          is_verified: boolean
          verification_type: string | null
          license_number: string | null
          subscription_tier: string
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          avg_rating: number
          review_count: number
          created_at: string
          updated_at: string
        }
      }
    }
  }
}
