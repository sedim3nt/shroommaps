import type { Retailer, Product, Review, Deal } from '@/lib/types'
import { therapeuticRetailers } from '@/data/retailers/therapeutic'
import { coloradoRetailers } from '@/data/retailers/colorado'
import { onlineRetailers } from '@/data/retailers/online'

/**
 * Real, verified retailer directory (compiled 2026-05-25).
 *
 * Replaces the original placeholder/demo dataset (fabricated names, "555" phone
 * numbers, stock photos, and invented reviews) with businesses confirmed to be
 * real and operating: each has its own working website + a real street address,
 * and coordinates geocoded via OpenStreetMap Nominatim. See the per-source files
 * in data/retailers/ for full provenance + the verify-or-omit notes.
 *
 *  - therapeutic: Colorado licensed psilocybin healing centers (Natural Medicine Act),
 *    cross-referenced to the Healing Advocacy Fund active-licensee directory.
 *  - colorado:    Colorado functional-mushroom shops + gourmet/medicinal farms.
 *  - online:      national functional-mushroom brands (pinned to real HQ, `online: true`).
 *
 * No reviews/ratings are seeded — these are real businesses that have not been
 * reviewed on this platform, so avgRating/reviewCount are 0 (UI shows "New").
 */
export const mockRetailers: Retailer[] = [
  ...therapeuticRetailers,
  ...coloradoRetailers,
  ...onlineRetailers,
]

// No fabricated products, reviews, or deals. These populate from Supabase once
// real retailers add them (or via the claim flow). Empty until then.
export const mockProducts: Product[] = []
export const mockReviews: Review[] = []
export const mockDeals: Deal[] = []
