'use client'

import { useEffect, useRef, useCallback } from 'react'
import type { ForagingSpot } from '@/lib/types'

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

const SPECIES_COLORS: Record<string, { color: string; emoji: string }> = {
  edible: { color: '#8B6914', emoji: '🟤' },
  medicinal: { color: '#CC3333', emoji: '🔴' },
  caution: { color: '#E89A4A', emoji: '⚠️' },
}

const MEDICINAL_SPECIES = ["Lion's Mane", 'Turkey Tail', 'Reishi']

function getSpotCategory(species: string[]): 'edible' | 'medicinal' | 'caution' {
  if (species.length === 0) return 'caution'
  if (species.some((s) => MEDICINAL_SPECIES.includes(s))) return 'medicinal'
  if (species.includes('Other')) return 'caution'
  return 'edible'
}

export default function ForagingMap({
  spots,
  center = [39.9, -105.1],
  zoom = 9,
  onSpotSelect,
  onMapClick,
  selectedId,
  pickMode = false,
  pickLocation,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapRef = useRef<any>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pickMarkerRef = useRef<any>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const leafletRef = useRef<any>(null)

  const handleMapClick = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (e: any) => {
      if (pickMode && onMapClick) {
        onMapClick(e.latlng.lat, e.latlng.lng)
      }
    },
    [pickMode, onMapClick]
  )

  useEffect(() => {
    if (!containerRef.current) return

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let map: any

    const init = async () => {
      const L = (await import('leaflet')).default
      leafletRef.current = L

      if (!document.getElementById('leaflet-css')) {
        const link = document.createElement('link')
        link.id = 'leaflet-css'
        link.rel = 'stylesheet'
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
        document.head.appendChild(link)
      }

      if (mapRef.current || !containerRef.current) return

      map = L.map(containerRef.current, {
        zoomControl: true,
        scrollWheelZoom: true,
      }).setView(center, zoom)

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map)

      mapRef.current = map

      map.on('click', handleMapClick)

      // Add spot markers
      spots.forEach((spot) => {
        const cat = getSpotCategory(spot.species)
        const { color, emoji } = SPECIES_COLORS[cat]
        const isSelected = spot.id === selectedId
        const privacyIcon = spot.isPrivate ? '🔒' : '🌍'

        const icon = L.divIcon({
          className: '',
          html: `<div style="
            background:${color};
            width:${isSelected ? 36 : 28}px;
            height:${isSelected ? 36 : 28}px;
            border-radius:50%;
            border:3px solid ${spot.isPrivate ? '#E0E0E0' : '#7BC950'};
            box-shadow:0 2px 8px rgba(0,0,0,0.4);
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:${isSelected ? '14px' : '11px'};
            cursor:pointer;
            position:relative;
          ">${emoji}</div>`,
          iconSize: [isSelected ? 36 : 28, isSelected ? 36 : 28],
          iconAnchor: [isSelected ? 18 : 14, isSelected ? 18 : 14],
          popupAnchor: [0, isSelected ? -18 : -14],
        })

        const speciesList = spot.species.length > 0 ? spot.species.slice(0, 3).join(', ') : 'Unknown'
        const seasonStr = spot.season.length > 0 ? spot.season.join(', ') : '—'

        const popup = L.popup({ closeButton: false, className: 'myco-popup' }).setContent(`
          <div style="font-family:var(--font-literata, Literata, serif);padding:4px;min-width:200px;">
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px">
              <span style="font-size:0.75rem">${privacyIcon}</span>
              <span style="font-family:var(--font-fraunces, Fraunces, serif);font-weight:700;font-size:1rem;color:#E0E0E0">${spot.name}</span>
            </div>
            <div style="font-size:0.8rem;color:#8A9A8A;margin-bottom:2px">🍄 ${speciesList}</div>
            <div style="font-size:0.75rem;color:#8A9A8A;margin-bottom:2px">📅 ${seasonStr}</div>
            ${spot.lastVisited ? `<div style="font-size:0.75rem;color:#8A9A8A;margin-bottom:6px">Last visit: ${spot.lastVisited}</div>` : ''}
            <a href="/foraging/${spot.id}" style="
              display:inline-block;
              background:#2D5A27;
              color:#E0E0E0;
              padding:6px 12px;
              border-radius:6px;
              font-size:0.75rem;
              font-weight:600;
              text-decoration:none;
            ">View Spot →</a>
          </div>
        `)

        const marker = L.marker([spot.latitude, spot.longitude], { icon }).addTo(map).bindPopup(popup)

        marker.on('click', () => {
          if (onSpotSelect) onSpotSelect(spot)
        })
      })
    }

    init()

    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
        leafletRef.current = null
        pickMarkerRef.current = null
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spots, selectedId])

  // Update click handler when pickMode changes
  useEffect(() => {
    const map = mapRef.current
    if (!map) return
    map.off('click')
    map.on('click', handleMapClick)
  }, [handleMapClick])

  // Show pick location marker
  useEffect(() => {
    const map = mapRef.current
    const L = leafletRef.current
    if (!map || !L) return

    if (pickMarkerRef.current) {
      map.removeLayer(pickMarkerRef.current)
      pickMarkerRef.current = null
    }

    if (pickLocation) {
      const icon = L.divIcon({
        className: '',
        html: `<div style="
          width:40px;height:40px;border-radius:50%;
          background:#7BC950;border:3px solid white;
          box-shadow:0 0 20px rgba(123,201,80,0.5);
          display:flex;align-items:center;justify-content:center;
          font-size:18px;animation:pulse 1.5s infinite;
        ">📍</div>`,
        iconSize: [40, 40],
        iconAnchor: [20, 20],
      })
      pickMarkerRef.current = L.marker(pickLocation, { icon }).addTo(map)
    }
  }, [pickLocation])

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '400px',
        borderRadius: '12px',
        overflow: 'hidden',
        cursor: pickMode ? 'crosshair' : 'grab',
      }}
    />
  )
}
