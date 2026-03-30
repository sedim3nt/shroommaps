import dynamic from 'next/dynamic'
import type { ForagingSpot } from '@/lib/types'

const ForagingMap = dynamic(() => import('./ForagingMap'), {
  ssr: false,
  loading: () => (
    <div
      style={{
        width: '100%',
        height: '100%',
        minHeight: '400px',
        borderRadius: '12px',
        backgroundColor: '#1E2E1E',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '12px',
        color: '#8A9A8A',
        fontFamily: 'var(--font-literata, Literata, serif)',
      }}
    >
      <span style={{ fontSize: '2rem' }}>🗺️</span>
      <span>Loading foraging map...</span>
    </div>
  ),
})

interface Props {
  spots: ForagingSpot[]
  center?: [number, number]
  zoom?: number
  onSpotSelect?: (spot: ForagingSpot) => void
  onMapClick?: (lat: number, lng: number) => void
  selectedId?: string
  pickMode?: boolean
  pickLocation?: [number, number] | null
}

export default function ForagingMapWrapper(props: Props) {
  return <ForagingMap {...props} />
}
