import type { Vertical } from '@/lib/types'
import { VERTICAL_COLORS, VERTICAL_LABELS } from '@/lib/utils'

interface Props {
  vertical: Vertical
  size?: 'sm' | 'md'
}

export default function VerticalBadge({ vertical, size = 'md' }: Props) {
  const color = VERTICAL_COLORS[vertical]
  const label = VERTICAL_LABELS[vertical]

  const textSize = size === 'sm' ? '0.7rem' : '0.75rem'
  const padding = size === 'sm' ? '2px 8px' : '4px 12px'

  return (
    <span
      style={{
        backgroundColor: `${color}18`,
        color: color,
        border: `1px solid ${color}40`,
        borderRadius: '9999px',
        fontSize: textSize,
        fontWeight: 600,
        padding: padding,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        whiteSpace: 'nowrap',
        letterSpacing: '0.01em',
        fontFamily: 'var(--font-inter, Inter, sans-serif)',
      }}
    >
      {label}
    </span>
  )
}
