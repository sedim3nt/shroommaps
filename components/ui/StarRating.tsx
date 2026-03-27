interface Props {
  rating: number
  reviewCount?: number
  size?: 'sm' | 'md' | 'lg'
}

export default function StarRating({ rating, reviewCount, size = 'md' }: Props) {
  const starSize = size === 'sm' ? '12px' : size === 'lg' ? '20px' : '16px'
  const fontSize = size === 'sm' ? '0.75rem' : size === 'lg' ? '1rem' : '0.875rem'

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
      <div style={{ display: 'flex', gap: '1px' }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            width={starSize}
            height={starSize}
            viewBox="0 0 20 20"
            fill={star <= Math.round(rating) ? '#D4A843' : '#E8E0D0'}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span
        style={{
          fontSize,
          fontWeight: 600,
          color: '#2C1810',
          fontFamily: 'var(--font-inter, Inter, sans-serif)',
        }}
      >
        {rating.toFixed(1)}
      </span>
      {reviewCount !== undefined && (
        <span
          style={{
            fontSize,
            color: '#A89278',
            fontFamily: 'var(--font-inter, Inter, sans-serif)',
          }}
        >
          ({reviewCount})
        </span>
      )}
    </div>
  )
}
