'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/lib/auth-context'
import { createBrowserClient } from '@/lib/supabase'
import StarRating from '@/components/ui/StarRating'
import AuthModal from '@/components/auth/AuthModal'
import type { Review } from '@/lib/types'

interface Props {
  retailerId: string
  initialReviews: Review[]
  avgRating: number
  reviewCount: number
}

function StarPicker({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  const [hover, setHover] = useState(0)
  return (
    <div style={{ display: 'flex', gap: '4px' }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          onClick={() => onChange(star)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '2px' }}
        >
          <svg width="28" height="28" viewBox="0 0 20 20" fill={(hover || value) >= star ? '#D4A843' : '#E8E0D0'}>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </button>
      ))}
    </div>
  )
}

export default function ReviewSection({ retailerId, initialReviews, avgRating, reviewCount }: Props) {
  const { user } = useAuth()
  const [reviews, setReviews] = useState<Review[]>(initialReviews)
  const [showForm, setShowForm] = useState(false)
  const [showAuth, setShowAuth] = useState(false)
  const [rating, setRating] = useState(0)
  const [body, setBody] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  // Refresh reviews from Supabase on mount
  useEffect(() => {
    const supabase = createBrowserClient()
    supabase
      .from('reviews')
      .select('*')
      .eq('retailer_id', retailerId)
      .order('created_at', { ascending: false })
      .then(({ data }) => {
        if (data && data.length > 0) {
          setReviews(data.map((row) => ({
            id: row.id,
            retailerId: row.retailer_id,
            authorName: row.author_name ?? 'Anonymous',
            rating: row.rating,
            body: row.body ?? '',
            isVerifiedPurchase: row.is_verified_purchase ?? false,
            createdAt: row.created_at,
          })))
        }
      })
  }, [retailerId])

  const handleWriteReview = () => {
    if (!user) {
      setShowAuth(true)
      return
    }
    setShowForm(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (rating === 0) { setSubmitError('Please select a rating'); return }
    setSubmitting(true)
    setSubmitError(null)

    const supabase = createBrowserClient()
    const { error } = await supabase.from('reviews').insert({
      retailer_id: retailerId,
      user_id: user!.id,
      author_name: user!.email?.split('@')[0] ?? 'Anonymous',
      rating,
      body: body.trim(),
      is_verified_purchase: false,
    })

    setSubmitting(false)
    if (error) {
      setSubmitError(error.message)
    } else {
      // Add to local state
      setReviews((prev) => [{
        id: crypto.randomUUID(),
        retailerId,
        authorName: user!.email?.split('@')[0] ?? 'Anonymous',
        rating,
        body: body.trim(),
        isVerifiedPurchase: false,
        createdAt: new Date().toISOString(),
      }, ...prev])
      setShowForm(false)
      setRating(0)
      setBody('')
    }
  }

  return (
    <section>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap', gap: '12px' }}>
        <h2
          style={{
            fontFamily: 'var(--font-playfair, "Playfair Display", serif)',
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#2C1810',
          }}
        >
          Reviews
        </h2>
        {!showForm && (
          <button
            onClick={handleWriteReview}
            style={{
              padding: '8px 20px',
              borderRadius: '10px',
              border: '2px solid #2D5016',
              backgroundColor: 'transparent',
              color: '#2D5016',
              fontSize: '0.85rem',
              fontWeight: 700,
              cursor: 'pointer',
              fontFamily: 'var(--font-inter, Inter, sans-serif)',
            }}
          >
            Write a Review
          </button>
        )}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <StarRating rating={avgRating} reviewCount={reviewCount} size="lg" />
      </div>

      {/* Review form */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: '#F0EBE0',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <div>
            <label
              style={{
                display: 'block',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#2C1810',
                marginBottom: '8px',
                fontFamily: 'var(--font-inter, Inter, sans-serif)',
              }}
            >
              Your Rating
            </label>
            <StarPicker value={rating} onChange={setRating} />
          </div>

          <div>
            <label
              style={{
                display: 'block',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#2C1810',
                marginBottom: '8px',
                fontFamily: 'var(--font-inter, Inter, sans-serif)',
              }}
            >
              Your Review
            </label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value.slice(0, 2000))}
              placeholder="Share your experience..."
              rows={4}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '2px solid #E8E0D0',
                backgroundColor: '#FAF7F0',
                fontSize: '0.9rem',
                fontFamily: 'var(--font-inter, Inter, sans-serif)',
                color: '#2C1810',
                resize: 'vertical',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
            <span style={{ fontSize: '0.75rem', color: '#A89278', fontFamily: 'var(--font-inter, Inter, sans-serif)' }}>
              {body.length}/2000
            </span>
          </div>

          {submitError && (
            <p style={{ color: '#D44', fontSize: '0.85rem', fontFamily: 'var(--font-inter, Inter, sans-serif)' }}>
              {submitError}
            </p>
          )}

          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              type="submit"
              disabled={submitting}
              style={{
                padding: '10px 24px',
                borderRadius: '10px',
                border: 'none',
                backgroundColor: '#2D5016',
                color: '#FAF7F0',
                fontSize: '0.9rem',
                fontWeight: 700,
                cursor: submitting ? 'not-allowed' : 'pointer',
                opacity: submitting ? 0.7 : 1,
                fontFamily: 'var(--font-inter, Inter, sans-serif)',
              }}
            >
              {submitting ? 'Submitting...' : 'Submit Review'}
            </button>
            <button
              type="button"
              onClick={() => { setShowForm(false); setRating(0); setBody('') }}
              style={{
                padding: '10px 20px',
                borderRadius: '10px',
                border: '2px solid #E8E0D0',
                backgroundColor: 'transparent',
                color: '#8B6F47',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'var(--font-inter, Inter, sans-serif)',
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Reviews list */}
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
                    <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#2C1810', fontFamily: 'var(--font-inter, Inter, sans-serif)' }}>
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
                        Verified
                      </span>
                    )}
                  </div>
                  <StarRating rating={review.rating} size="sm" />
                </div>
                <span style={{ fontSize: '0.8rem', color: '#A89278', fontFamily: 'var(--font-inter, Inter, sans-serif)' }}>
                  {new Date(review.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                </span>
              </div>
              {review.body && (
                <p style={{ fontSize: '0.9rem', color: '#5C4033', lineHeight: 1.7, fontFamily: 'var(--font-inter, Inter, sans-serif)' }}>
                  {review.body}
                </p>
              )}
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

      <AuthModal isOpen={showAuth} onClose={() => setShowAuth(false)} />
    </section>
  )
}
