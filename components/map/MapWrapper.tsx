import dynamic from 'next/dynamic'
import type { Retailer } from '@/lib/types'

const LeafletMap = dynamic(() => import('./LeafletMap'), {
  ssr: false,
  loading: () => (
    <div
      style={{
        width: '100%',
        height: '100%',
        minHeight: '400px',
        borderRadius: '12px',
        backgroundColor: '#F0EBE0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '12px',
        color: '#A89278',
        fontFamily: 'var(--font-inter, Inter, sans-serif)',
      }}
    >
      <span style={{ fontSize: '2rem' }}>🗺️</span>
      <span>Loading map...</span>
    </div>
  ),
})

interface Props {
  retailers: Retailer[]
  center?: [number, number]
  zoom?: number
  onRetailerSelect?: (retailer: Retailer) => void
  selectedId?: string
}

export default function MapWrapper(props: Props) {
  return <LeafletMap {...props} />
}
