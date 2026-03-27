import SearchBar from '@/components/ui/SearchBar'

export default function HeroSection() {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #1a3009 0%, #2D5016 40%, #3d6b20 70%, #4a7a2a 100%)',
        minHeight: '620px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background texture overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(139, 111, 71, 0.15) 0%, transparent 60%),
            radial-gradient(circle at 80% 20%, rgba(212, 168, 67, 0.08) 0%, transparent 50%)`,
          pointerEvents: 'none',
        }}
      />

      {/* Decorative mushroom silhouettes */}
      <div
        style={{
          position: 'absolute',
          bottom: '-20px',
          right: '5%',
          fontSize: '12rem',
          opacity: 0.04,
          transform: 'rotate(-10deg)',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        🍄
      </div>
      <div
        style={{
          position: 'absolute',
          top: '-10px',
          left: '3%',
          fontSize: '8rem',
          opacity: 0.04,
          transform: 'rotate(15deg)',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        🍄
      </div>

      {/* Content */}
      <div
        style={{
          maxWidth: '800px',
          width: '100%',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(212, 168, 67, 0.15)',
            border: '1px solid rgba(212, 168, 67, 0.4)',
            borderRadius: '9999px',
            padding: '6px 16px',
            marginBottom: '28px',
          }}
        >
          <span style={{ fontSize: '0.8rem' }}>🌱</span>
          <span
            style={{
              fontSize: '0.8rem',
              fontWeight: 600,
              color: '#D4A843',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-inter, Inter, sans-serif)',
            }}
          >
            Colorado&apos;s Mushroom Marketplace
          </span>
        </div>

        {/* Main heading */}
        <h1
          style={{
            fontFamily: 'var(--font-playfair, "Playfair Display", serif)',
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            fontWeight: 700,
            color: '#FAF7F0',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '20px',
          }}
        >
          Find Your{' '}
          <span
            style={{
              color: '#D4A843',
              fontStyle: 'italic',
            }}
          >
            Fungi
          </span>
        </h1>

        {/* Subheading */}
        <p
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            color: 'rgba(250, 247, 240, 0.75)',
            lineHeight: 1.6,
            marginBottom: '40px',
            maxWidth: '560px',
            margin: '0 auto 40px',
            fontFamily: 'var(--font-inter, Inter, sans-serif)',
          }}
        >
          Discover licensed psilocybin healing centers, medicinal mushroom shops, and
          gourmet farms near you.
        </p>

        {/* Search bar */}
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <SearchBar size="hero" />
        </div>

        {/* Stats row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            marginTop: '48px',
            flexWrap: 'wrap',
          }}
        >
          {[
            { value: '10+', label: 'Colorado Retailers' },
            { value: '3', label: 'Verticals' },
            { value: '2', label: 'Legal States' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: 'var(--font-playfair, "Playfair Display", serif)',
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: '#D4A843',
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: '0.8rem',
                  color: 'rgba(250,247,240,0.6)',
                  marginTop: '4px',
                  fontFamily: 'var(--font-inter, Inter, sans-serif)',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
