'use client'

import { useState } from 'react'
import { createBrowserClient } from '@/lib/supabase'

interface Props {
  retailerId: string
  retailerName: string
}

export default function ClaimForm({ retailerId, retailerName }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [proof, setProof] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    const supabase = createBrowserClient()
    const { error: dbError } = await supabase.from('claims').insert({
      retailer_id: retailerId,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim() || null,
      proof_description: proof.trim(),
      status: 'pending',
    })

    setSubmitting(false)
    if (dbError) {
      setError(dbError.message)
    } else {
      setSubmitted(true)
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px 12px',
    borderRadius: '8px',
    border: '2px solid #E8E0D0',
    fontSize: '0.875rem',
    fontFamily: 'var(--font-inter, Inter, sans-serif)',
    backgroundColor: '#FAF7F0',
    color: '#2C1810',
    outline: 'none',
    boxSizing: 'border-box',
  }

  if (submitted) {
    return (
      <div
        style={{
          backgroundColor: '#E8F5E3',
          borderRadius: '12px',
          padding: '20px',
          textAlign: 'center',
          fontFamily: 'var(--font-inter, Inter, sans-serif)',
        }}
      >
        <p style={{ fontWeight: 700, color: '#2D5016', marginBottom: '4px' }}>Claim Submitted!</p>
        <p style={{ fontSize: '0.85rem', color: '#5C4033' }}>
          We&apos;ll review your claim for {retailerName} and reach out shortly.
        </p>
      </div>
    )
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        style={{
          width: '100%',
          padding: '12px',
          borderRadius: '10px',
          border: '2px dashed #D4A843',
          backgroundColor: 'transparent',
          color: '#D4A843',
          fontSize: '0.85rem',
          fontWeight: 700,
          cursor: 'pointer',
          fontFamily: 'var(--font-inter, Inter, sans-serif)',
        }}
      >
        Claim This Listing
      </button>
    )
  }

  return (
    <div
      style={{
        backgroundColor: '#FBF3DC',
        borderRadius: '12px',
        padding: '20px',
        border: '2px solid #D4A84330',
      }}
    >
      <h4
        style={{
          fontFamily: 'var(--font-playfair, "Playfair Display", serif)',
          fontSize: '1rem',
          fontWeight: 700,
          color: '#2C1810',
          marginBottom: '4px',
        }}
      >
        Claim {retailerName}
      </h4>
      <p
        style={{
          fontSize: '0.8rem',
          color: '#8B6F47',
          marginBottom: '16px',
          fontFamily: 'var(--font-inter, Inter, sans-serif)',
        }}
      >
        Are you the owner? Fill out this form and we&apos;ll verify your claim.
      </p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required style={inputStyle} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={inputStyle} />
        <input type="tel" placeholder="Phone (optional)" value={phone} onChange={(e) => setPhone(e.target.value)} style={inputStyle} />
        <textarea
          placeholder="How can you prove ownership? (e.g., business license number, registered agent info)"
          value={proof}
          onChange={(e) => setProof(e.target.value)}
          required
          rows={3}
          style={{ ...inputStyle, resize: 'vertical' }}
        />

        {error && <p style={{ color: '#D44', fontSize: '0.8rem', fontFamily: 'var(--font-inter, Inter, sans-serif)' }}>{error}</p>}

        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            type="submit"
            disabled={submitting}
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: '#D4A843',
              color: '#2C1810',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: submitting ? 'not-allowed' : 'pointer',
              opacity: submitting ? 0.7 : 1,
              fontFamily: 'var(--font-inter, Inter, sans-serif)',
            }}
          >
            {submitting ? 'Submitting...' : 'Submit Claim'}
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            style={{
              padding: '10px 16px',
              borderRadius: '8px',
              border: '2px solid #E8E0D0',
              backgroundColor: 'transparent',
              color: '#8B6F47',
              fontWeight: 600,
              fontSize: '0.85rem',
              cursor: 'pointer',
              fontFamily: 'var(--font-inter, Inter, sans-serif)',
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
