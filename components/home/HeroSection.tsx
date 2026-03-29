import SearchBar from '@/components/ui/SearchBar'

export default function HeroSection() {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #0D1F0D 0%, #1A3A1A 40%, #0D1F0D 70%, #1A1A2E 100%)',
        minHeight: '660px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 24px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle radial glow overlays */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle at 30% 70%, rgba(123, 201, 80, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 70% 30%, rgba(45, 90, 39, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(123, 201, 80, 0.03) 0%, transparent 70%)`,
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
          opacity: 0.03,
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
          opacity: 0.03,
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
            backgroundColor: 'rgba(123, 201, 80, 0.1)',
            border: '1px solid rgba(123, 201, 80, 0.3)',
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
              color: '#7BC950',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-literata, Literata, serif)',
            }}
          >
            Colorado&apos;s Mushroom Marketplace
          </span>
        </div>

        {/* Main heading */}
        <h1
          style={{
            fontFamily: 'var(--font-fraunces, Fraunces, serif)',
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            fontWeight: 900,
            color: '#E0E0E0',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '20px',
          }}
        >
          Find Your{' '}
          <span
            style={{
              color: '#7BC950',
              fontStyle: 'italic',
            }}
          >
            Fungi
          </span>
        </h1>

        {/* Subheading */}
        <p
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            color: 'rgba(224, 224, 224, 0.7)',
            lineHeight: 1.7,
            marginBottom: '40px',
            maxWidth: '560px',
            margin: '0 auto 40px',
            fontFamily: 'var(--font-literata, Literata, serif)',
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
            gap: '48px',
            marginTop: '56px',
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
                  fontFamily: 'var(--font-fraunces, Fraunces, serif)',
                  fontSize: '2.25rem',
                  fontWeight: 800,
                  color: '#7BC950',
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: '0.8rem',
                  color: 'rgba(224, 224, 224, 0.5)',
                  marginTop: '6px',
                  fontFamily: 'var(--font-literata, Literata, serif)',
                  letterSpacing: '0.03em',
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
