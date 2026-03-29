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
          backgroundColor: '#1E2E1E',
          borderRadius: '2px',
          overflow: 'hidden',
          boxShadow: highlighted
            ? '0 4px 20px rgba(123, 201, 80, 0.15)'
            : '0 2px 12px rgba(0,0,0,0.3)',
          transition: 'all 200ms ease',
          cursor: 'pointer',
          border: highlighted ? '1px solid #7BC950' : '1px solid rgba(123, 201, 80, 0.12)',
          display: 'flex',
          flexDirection: 'column',
        }}
        className="hover-card"
      >
        {/* Cover image — specimen plate */}
        <div
          style={{
            height: '160px',
            position: 'relative',
            overflow: 'hidden',
            flexShrink: 0,
            borderBottom: '1px solid rgba(123, 201, 80, 0.15)',
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
                background: 'linear-gradient(135deg, #0D1F0D 0%, #2D5A27 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontSize: '3rem', opacity: 0.6 }}>🍄</span>
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
                backgroundColor: '#2D5A27',
                color: '#7BC950',
                borderRadius: '2px',
                padding: '3px 8px',
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-literata, Literata, serif)',
                border: '1px solid rgba(123, 201, 80, 0.3)',
              }}
            >
              ✓ Verified
            </div>
          )}
        </div>

        {/* Card content — botanical label style */}
        <div style={{ padding: '16px', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <h3
            style={{
              fontFamily: 'var(--font-fraunces, Fraunces, serif)',
              fontSize: '1.05rem',
              fontWeight: 700,
              color: '#E0E0E0',
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            {retailer.name}
          </h3>

          <p
            style={{
              fontSize: '0.8rem',
              color: '#8A9A8A',
              margin: 0,
              fontFamily: 'var(--font-literata, Literata, serif)',
            }}
          >
            📍 {retailer.city}, {retailer.state}
          </p>

          <StarRating rating={retailer.avgRating} reviewCount={retailer.reviewCount} size="sm" />

          <p
            style={{
              fontSize: '0.82rem',
              color: 'rgba(224, 224, 224, 0.6)',
              margin: 0,
              lineHeight: 1.5,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              fontFamily: 'var(--font-literata, Literata, serif)',
            }}
          >
            {retailer.description}
          </p>
        </div>
      </div>
    </Link>
  )
}
