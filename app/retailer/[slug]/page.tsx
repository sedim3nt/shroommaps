import { notFound } from 'next/navigation'
import Link from 'next/link'
import { mockRetailers, mockProducts, mockReviews, mockDeals } from '@/data/mock-retailers'
import { getRetailerBySlug } from '@/lib/retailers'
import VerticalBadge from '@/components/ui/VerticalBadge'
import StarRating from '@/components/ui/StarRating'
import { formatPhone } from '@/lib/utils'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return mockRetailers.map((r) => ({ slug: r.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const retailer = await getRetailerBySlug(slug)
  if (!retailer) return {}
  return {
    title: retailer.name,
    description: retailer.description,
  }
}

export default async function RetailerPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const retailer = await getRetailerBySlug(slug)
  if (!retailer) notFound()

  const products = mockProducts.filter((p) => p.retailerId === retailer.id)
  const reviews = mockReviews.filter((r) => r.retailerId === retailer.id)
  const deals = mockDeals.filter((d) => d.retailerId === retailer.id)

  const DAYS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
  const DAY_LABELS: Record<string, string> = {
    mon: 'Monday', tue: 'Tuesday', wed: 'Wednesday', thu: 'Thursday',
    fri: 'Friday', sat: 'Saturday', sun: 'Sunday',
  }

  return (
    <div style={{ backgroundColor: '#FAF7F0' }}>
      {/* Hero */}
      <div
        style={{
          height: '360px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {retailer.coverUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={retailer.coverUrl}
            alt={retailer.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #2D5016, #8B6F47)',
            }}
          />
        )}
        {/* Dark overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(28,14,8,0.7) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)',
          }}
        />
        {/* Back button */}
        <Link
          href="/search"
          style={{
            position: 'absolute',
            top: '20px',
            left: '24px',
            backgroundColor: 'rgba(250,247,240,0.9)',
            color: '#2C1810',
            padding: '8px 16px',
            borderRadius: '8px',
            fontWeight: 600,
            fontSize: '0.875rem',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            backdropFilter: 'blur(4px)',
            fontFamily: 'var(--font-inter, Inter, sans-serif)',
          }}
        >
          ← Back to Search
        </Link>

        {/* Hero content */}
        <div
          style={{
            position: 'absolute',
            bottom: '28px',
            left: '24px',
            right: '24px',
          }}
        >
          <div style={{ display: 'flex', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
            {retailer.verticals.map((v) => (
              <VerticalBadge key={v} vertical={v} />
            ))}
            {retailer.isVerified && (
              <span
                style={{
                  backgroundColor: '#2D5016',
                  color: '#FAF7F0',
                  borderRadius: '9999px',
                  padding: '4px 12px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  fontFamily: 'var(--font-inter, Inter, sans-serif)',
                }}
              >
                ✓ Verified
              </span>
            )}
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-playfair, "Playfair Display", serif)',
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#FAF7F0',
              marginBottom: '8px',
              textShadow: '0 2px 8px rgba(0,0,0,0.3)',
            }}
          >
            {retailer.name}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <StarRating rating={retailer.avgRating} reviewCount={retailer.reviewCount} size="md" />
            <span
              style={{
                color: 'rgba(250,247,240,0.8)',
                fontSize: '0.875rem',
                fontFamily: 'var(--font-inter, Inter, sans-serif)',
              }}
            >
              📍 {retailer.address}, {retailer.city}, {retailer.state}
            </span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '32px 24px',
          display: 'grid',
          gridTemplateColumns: '1fr 340px',
          gap: '32px',
          alignItems: 'start',
        }}
        className="retailer-layout"
      >
        {/* Left column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* About */}
          <section>
            <h2
              style={{
                fontFamily: 'var(--font-playfair, "Playfair Display", serif)',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#2C1810',
                marginBottom: '12px',
              }}
            >
              About
            </h2>
            <p
              style={{
                fontSize: '1rem',
                color: '#5C4033',
                lineHeight: 1.8,
                fontFamily: 'var(--font-inter, Inter, sans-serif)',
              }}
            >
              {retailer.description}
            </p>
            {retailer.tags.length > 0 && (
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '16px' }}>
                {retailer.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      backgroundColor: '#F0EBE0',
                      color: '#8B6F47',
                      borderRadius: '9999px',
                      padding: '4px 12px',
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-inter, Inter, sans-serif)',
                    }}
                  >
                    {tag.replace(/-/g, ' ')}
                  </span>
                ))}
              </div>
            )}
          </section>

          {/* Active deals */}
          {deals.length > 0 && (
            <section>
              <h2
                style={{
                  fontFamily: 'var(--font-playfair, "Playfair Display", serif)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#2C1810',
                  marginBottom: '16px',
                }}
              >
                Current Deals
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {deals.map((deal) => (
                  <div
                    key={deal.id}
                    style={{
                      backgroundColor: deal.isFeatured ? '#FBF3DC' : '#F0EBE0',
                      borderRadius: '12px',
                      padding: '20px',
                      border: deal.isFeatured ? '2px solid #D4A843' : '2px solid transparent',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '8px' }}>
                      <h3
                        style={{
                          fontFamily: 'var(--font-playfair, "Playfair Display", serif)',
                          fontSize: '1.1rem',
                          fontWeight: 700,
                          color: '#2C1810',
                        }}
                      >
                        {deal.title}
                      </h3>
                      {deal.discountPct && (
                        <span
                          style={{
                            backgroundColor: '#D4A843',
                            color: '#2C1810',
                            borderRadius: '9999px',
                            padding: '4px 12px',
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            flexShrink: 0,
                            fontFamily: 'var(--font-inter, Inter, sans-serif)',
                          }}
                        >
                          {deal.discountPct}% OFF
                        </span>
                      )}
                    </div>
                    <p style={{ fontSize: '0.9rem', color: '#5C4033', marginBottom: '12px', fontFamily: 'var(--font-inter, Inter, sans-serif)' }}>
                      {deal.description}
                    </p>
                    {deal.promoCode && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '0.8rem', color: '#8B6F47', fontFamily: 'var(--font-inter, Inter, sans-serif)' }}>Code:</span>
                        <code
                          style={{
                            backgroundColor: '#2D5016',
                            color: '#FAF7F0',
                            padding: '4px 10px',
                            borderRadius: '6px',
                            fontSize: '0.875rem',
                            fontWeight: 700,
                            fontFamily: 'var(--font-mono, monospace)',
                            letterSpacing: '0.05em',
                          }}
                        >
                          {deal.promoCode}
                        </code>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Products */}
          {products.length > 0 && (
            <section>
              <h2
                style={{
                  fontFamily: 'var(--font-playfair, "Playfair Display", serif)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#2C1810',
                  marginBottom: '16px',
                }}
              >
                Products
              </h2>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                  gap: '16px',
                }}
              >
                {products.map((product) => (
                  <div
                    key={product.id}
                    style={{
                      backgroundColor: '#F0EBE0',
                      borderRadius: '12px',
                      padding: '16px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <span
                        style={{
                          backgroundColor: '#E8E0D0',
                          color: '#8B6F47',
                          borderRadius: '6px',
                          padding: '3px 8px',
                          fontSize: '0.7rem',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                          fontFamily: 'var(--font-inter, Inter, sans-serif)',
                        }}
                      >
                        {product.category.replace('_', ' ')}
                      </span>
                      {product.priceCents > 0 && (
                        <span
                          style={{
                            fontFamily: 'var(--font-playfair, "Playfair Display", serif)',
                            fontSize: '1.1rem',
                            fontWeight: 700,
                            color: '#2D5016',
                          }}
                        >
                          ${(product.priceCents / 100).toFixed(2)}
                        </span>
                      )}
                    </div>
                    <h4
                      style={{
                        fontFamily: 'var(--font-playfair, "Playfair Display", serif)',
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        color: '#2C1810',
                      }}
                    >
                      {product.name}
                    </h4>
                    <p
                      style={{
                        fontSize: '0.8rem',
                        color: '#8B6F47',
                        lineHeight: 1.5,
                        fontFamily: 'var(--font-inter, Inter, sans-serif)',
                      }}
                    >
                      {product.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Reviews */}
          <section>
            <h2
              style={{
                fontFamily: 'var(--font-playfair, "Playfair Display", serif)',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#2C1810',
                marginBottom: '8px',
              }}
            >
              Reviews
            </h2>
            <div style={{ marginBottom: '20px' }}>
              <StarRating rating={retailer.avgRating} reviewCount={retailer.reviewCount} size="lg" />
            </div>

            {reviews.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    style={{
                      backgroundColor: '#F0EBE0',
                      borderRadius: '12px',
                      padding: '20px',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                          <span
                            style={{
                              fontWeight: 700,
                              fontSize: '0.9rem',
                              color: '#2C1810',
                              fontFamily: 'var(--font-inter, Inter, sans-serif)',
                            }}
                          >
                            {review.authorName}
                          </span>
                          {review.isVerifiedPurchase && (
                            <span
                              style={{
                                backgroundColor: '#87A878',
                                color: '#FAF7F0',
                                borderRadius: '9999px',
                                padding: '2px 8px',
                                fontSize: '0.65rem',
                                fontWeight: 700,
                                fontFamily: 'var(--font-inter, Inter, sans-serif)',
                              }}
                            >
                              ✓ Verified
                            </span>
                          )}
                        </div>
                        <StarRating rating={review.rating} size="sm" />
                      </div>
                      <span style={{ fontSize: '0.8rem', color: '#A89278', fontFamily: 'var(--font-inter, Inter, sans-serif)' }}>
                        {new Date(review.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: '#5C4033', lineHeight: 1.7, fontFamily: 'var(--font-inter, Inter, sans-serif)' }}>
                      {review.body}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div
                style={{
                  backgroundColor: '#F0EBE0',
                  borderRadius: '12px',
                  padding: '32px',
                  textAlign: 'center',
                  color: '#A89278',
                  fontFamily: 'var(--font-inter, Inter, sans-serif)',
                }}
              >
                No reviews yet. Be the first!
              </div>
            )}
          </section>
        </div>

        {/* Right sidebar */}
        <div
          style={{
            position: 'sticky',
            top: '88px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
          className="retailer-sidebar"
        >
          {/* Info card */}
          <div
            style={{
              backgroundColor: '#F0EBE0',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-playfair, "Playfair Display", serif)',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#2C1810',
                marginBottom: '16px',
              }}
            >
              Location & Contact
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* Address */}
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1rem', flexShrink: 0 }}>📍</span>
                <div>
                  <p style={{ fontSize: '0.875rem', color: '#2C1810', fontFamily: 'var(--font-inter, Inter, sans-serif)', lineHeight: 1.4 }}>
                    {retailer.address}
                    <br />
                    {retailer.city}, {retailer.state} {retailer.zip}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${retailer.address}, ${retailer.city}, ${retailer.state}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.8rem', color: '#2D5016', fontWeight: 600, textDecoration: 'none', fontFamily: 'var(--font-inter, Inter, sans-serif)' }}
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              {/* Phone */}
              {retailer.phone && (
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <span style={{ fontSize: '1rem', flexShrink: 0 }}>📞</span>
                  <a
                    href={`tel:${retailer.phone}`}
                    style={{ fontSize: '0.875rem', color: '#2C1810', textDecoration: 'none', fontFamily: 'var(--font-inter, Inter, sans-serif)' }}
                  >
                    {formatPhone(retailer.phone)}
                  </a>
                </div>
              )}

              {/* Website */}
              {retailer.website && (
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <span style={{ fontSize: '1rem', flexShrink: 0 }}>🌐</span>
                  <a
                    href={retailer.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.875rem', color: '#2D5016', fontWeight: 600, textDecoration: 'none', fontFamily: 'var(--font-inter, Inter, sans-serif)', wordBreak: 'break-all' }}
                  >
                    {retailer.website.replace(/^https?:\/\//, '')}
                  </a>
                </div>
              )}
            </div>

            <div
              style={{
                borderTop: '1px solid #E8E0D0',
                marginTop: '20px',
                paddingTop: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              {retailer.website && (
                <a
                  href={retailer.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    backgroundColor: '#2D5016',
                    color: '#FAF7F0',
                    padding: '12px 20px',
                    borderRadius: '10px',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-inter, Inter, sans-serif)',
                  }}
                >
                  Visit Website →
                </a>
              )}
              {retailer.phone && (
                <a
                  href={`tel:${retailer.phone}`}
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    backgroundColor: 'transparent',
                    color: '#2D5016',
                    padding: '12px 20px',
                    borderRadius: '10px',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    border: '2px solid #2D5016',
                    fontFamily: 'var(--font-inter, Inter, sans-serif)',
                  }}
                >
                  Call Now
                </a>
              )}
            </div>
          </div>

          {/* Hours card */}
          <div
            style={{
              backgroundColor: '#F0EBE0',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-playfair, "Playfair Display", serif)',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#2C1810',
                marginBottom: '16px',
              }}
            >
              Hours
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {DAYS.map((day) => {
                const hours = retailer.hours[day as keyof typeof retailer.hours]
                return (
                  <div
                    key={day}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '0.875rem',
                      fontFamily: 'var(--font-inter, Inter, sans-serif)',
                    }}
                  >
                    <span style={{ color: '#8B6F47', fontWeight: 500 }}>
                      {DAY_LABELS[day]}
                    </span>
                    <span style={{ color: hours ? '#2C1810' : '#A89278', fontWeight: hours ? 600 : 400 }}>
                      {hours
                        ? hours.replace(/(\d+):(\d+)-(\d+):(\d+)/, (_, h1, m1, h2, m2) => {
                            const fmt = (h: string, m: string) => {
                              const hour = parseInt(h)
                              const suffix = hour >= 12 ? 'pm' : 'am'
                              const displayHour = hour > 12 ? hour - 12 : hour
                              return `${displayHour}:${m}${suffix}`
                            }
                            return `${fmt(h1, m1)} – ${fmt(h2, m2)}`
                          })
                        : 'Closed'}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Subscription tier */}
          {retailer.subscriptionTier !== 'basic' && (
            <div
              style={{
                backgroundColor: '#FBF3DC',
                borderRadius: '12px',
                padding: '16px',
                border: '2px solid #D4A84330',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <span style={{ fontSize: '1.25rem' }}>⭐</span>
              <div>
                <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#2C1810', fontFamily: 'var(--font-inter, Inter, sans-serif)' }}>
                  {retailer.subscriptionTier.charAt(0).toUpperCase() + retailer.subscriptionTier.slice(1)} Member
                </p>
                <p style={{ fontSize: '0.75rem', color: '#8B6F47', fontFamily: 'var(--font-inter, Inter, sans-serif)' }}>
                  Verified MycoMaps partner
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .retailer-layout {
            grid-template-columns: 1fr !important;
          }
          .retailer-sidebar {
            position: static !important;
            order: -1;
          }
        }
      `}</style>
    </div>
  )
}
