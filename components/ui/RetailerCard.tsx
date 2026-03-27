import Link from 'next/link'
import type { Retailer } from '@/lib/types'
import VerticalBadge from './VerticalBadge'
import StarRating from './StarRating'

interface Props {
  retailer: Retailer
  highlighted?: boolean
}

export default function RetailerCard({ retailer, highlighted = false }: Props) {
  return (
    <Link href={`/retailer/${retailer.slug}`} style={{ textDecoration: 'none' }}>
      <div
        style={{
          backgroundColor: '#F0EBE0',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: highlighted
            ? '0 4px 16px rgba(45, 80, 22, 0.15)'
            : '0 2px 8px rgba(0,0,0,0.08)',
          transition: 'all 200ms ease',
          cursor: 'pointer',
          border: highlighted ? '2px solid #2D5016' : '2px solid transparent',
          display: 'flex',
          flexDirection: 'column',
        }}
        className="hover-card"
      >
        {/* Cover image */}
        <div
          style={{
            height: '160px',
            position: 'relative',
            overflow: 'hidden',
            flexShrink: 0,
          }}
        >
          {retailer.coverUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={retailer.coverUrl}
              alt={retailer.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          ) : (
            <div
              style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #2D5016 0%, #8B6F47 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontSize: '3rem' }}>🍄</span>
            </div>
          )}

          {/* Vertical badges overlay */}
          <div
            style={{
              position: 'absolute',
              bottom: '8px',
              left: '8px',
              display: 'flex',
              gap: '4px',
              flexWrap: 'wrap',
            }}
          >
            {retailer.verticals.map((v) => (
              <VerticalBadge key={v} vertical={v} size="sm" />
            ))}
          </div>

          {/* Verified badge */}
          {retailer.isVerified && (
            <div
              style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                backgroundColor: '#2D5016',
                color: '#FAF7F0',
                borderRadius: '9999px',
                padding: '3px 8px',
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-inter, Inter, sans-serif)',
              }}
            >
              ✓ Verified
            </div>
          )}
        </div>

        {/* Card content */}
        <div style={{ padding: '16px', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <h3
            style={{
              fontFamily: 'var(--font-playfair, "Playfair Display", serif)',
              fontSize: '1.05rem',
              fontWeight: 700,
              color: '#2C1810',
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            {retailer.name}
          </h3>

          <p
            style={{
              fontSize: '0.8rem',
              color: '#A89278',
              margin: 0,
              fontFamily: 'var(--font-inter, Inter, sans-serif)',
            }}
          >
            📍 {retailer.city}, {retailer.state}
          </p>

          <StarRating rating={retailer.avgRating} reviewCount={retailer.reviewCount} size="sm" />

          <p
            style={{
              fontSize: '0.82rem',
              color: '#5C4033',
              margin: 0,
              lineHeight: 1.5,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              fontFamily: 'var(--font-inter, Inter, sans-serif)',
            }}
          >
            {retailer.description}
          </p>
        </div>
      </div>
    </Link>
  )
}
