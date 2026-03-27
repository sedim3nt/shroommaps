import Link from 'next/link'
import { mockRetailers } from '@/data/mock-retailers'
import RetailerCard from '@/components/ui/RetailerCard'

export default function FeaturedRetailers() {
  const featured = mockRetailers.filter((r) => r.subscriptionTier === 'pro').slice(0, 4)

  return (
    <section
      style={{
        backgroundColor: '#F0EBE0',
        padding: '80px 24px',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '40px',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                marginBottom: '10px',
              }}
            >
              <span
                style={{
                  backgroundColor: '#D4A843',
                  color: '#2C1810',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  padding: '3px 10px',
                  borderRadius: '9999px',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-inter, Inter, sans-serif)',
                }}
              >
                ★ Featured
              </span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-playfair, "Playfair Display", serif)',
                fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)',
                fontWeight: 700,
                color: '#2C1810',
                letterSpacing: '-0.02em',
              }}
            >
              Top Retailers Near You
            </h2>
            <p
              style={{
                fontSize: '1rem',
                color: '#8B6F47',
                marginTop: '8px',
                fontFamily: 'var(--font-inter, Inter, sans-serif)',
              }}
            >
              Verified, highly-rated mushroom retailers in Colorado
            </p>
          </div>

          <Link
            href="/search"
            style={{
              color: '#2D5016',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-inter, Inter, sans-serif)',
              border: '2px solid #2D5016',
              padding: '8px 20px',
              borderRadius: '8px',
              transition: 'all 200ms ease',
              whiteSpace: 'nowrap',
            }}
          >
            View All Retailers →
          </Link>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {featured.map((retailer) => (
            <RetailerCard key={retailer.id} retailer={retailer} />
          ))}
        </div>
      </div>
    </section>
  )
}
