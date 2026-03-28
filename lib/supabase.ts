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

export function createBrowserClient() {
  return createClient(supabaseUrl, supabaseAnonKey)
}

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
      products: {
        Row: {
          id: string
          retailer_id: string
          name: string
          description: string | null
          category: string | null
          species: string[]
          price_cents: number | null
          image_url: string | null
          is_available: boolean | null
          created_at: string
        }
      }
      reviews: {
        Row: {
          id: string
          retailer_id: string
          user_id: string | null
          author_name: string | null
          rating: number
          body: string | null
          is_verified_purchase: boolean | null
          created_at: string
        }
        Insert: {
          id?: string
          retailer_id: string
          user_id?: string | null
          author_name?: string | null
          rating: number
          body?: string | null
          is_verified_purchase?: boolean | null
          created_at?: string
        }
      }
      deals: {
        Row: {
          id: string
          retailer_id: string
          title: string
          description: string | null
          discount_pct: number | null
          promo_code: string | null
          expires_at: string | null
          is_featured: boolean | null
          created_at: string
        }
      }
      claims: {
        Row: {
          id: string
          retailer_id: string
          name: string
          email: string
          phone: string | null
          proof_description: string
          status: string
          created_at: string
        }
        Insert: {
          id?: string
          retailer_id: string
          name: string
          email: string
          phone?: string | null
          proof_description: string
          status?: string
          created_at?: string
        }
      }
    }
  }
}
