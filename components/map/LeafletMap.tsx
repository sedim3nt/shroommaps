'use client'

import { useEffect, useRef } from 'react'
import type { Retailer } from '@/lib/types'
import { VERTICAL_COLORS } from '@/lib/utils'

interface Props {
  retailers: Retailer[]
  center?: [number, number]
  zoom?: number
  onRetailerSelect?: (retailer: Retailer) => void
  selectedId?: string
}

export default function LeafletMap({
  retailers,
  center = [39.9, -105.1],
  zoom = 9,
  onRetailerSelect,
  selectedId,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapRef = useRef<any>(null)
  const markersRef = useRef<Array<{ marker: unknown; retailerId: string }>>([])

  useEffect(() => {
    if (!containerRef.current) return

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let map: any

    const init = async () => {
      const L = (await import('leaflet')).default

      // Import Leaflet CSS dynamically
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
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map)

      mapRef.current = map

      // Add markers
      retailers.forEach((retailer) => {
        const color = VERTICAL_COLORS[retailer.verticals[0]] || '#2D5016'
        const isSelected = retailer.id === selectedId

        const icon = L.divIcon({
          className: '',
          html: `<div style="
            background:${color};
            width:${isSelected ? 36 : 28}px;
            height:${isSelected ? 36 : 28}px;
            border-radius:50%;
            border:3px solid white;
            box-shadow:0 2px 8px rgba(0,0,0,0.3);
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:${isSelected ? '16px' : '12px'};
            transition:all 200ms ease;
            cursor:pointer;
          ">🍄</div>`,
          iconSize: [isSelected ? 36 : 28, isSelected ? 36 : 28],
          iconAnchor: [isSelected ? 18 : 14, isSelected ? 18 : 14],
          popupAnchor: [0, isSelected ? -18 : -14],
        })

        const popup = L.popup({ closeButton: false, className: 'shroom-popup' }).setContent(`
          <div style="font-family:Inter,sans-serif;padding:4px;min-width:180px;">
            <div style="font-family:'Playfair Display',serif;font-weight:700;font-size:1rem;color:#2C1810;margin-bottom:4px">${retailer.name}</div>
            <div style="font-size:0.75rem;color:#A89278;margin-bottom:4px">📍 ${retailer.city}, ${retailer.state}</div>
            <div style="font-size:0.8rem;color:#D4A843;margin-bottom:6px">⭐ ${retailer.avgRating.toFixed(1)} (${retailer.reviewCount} reviews)</div>
            <a href="/retailer/${retailer.slug}" style="
              display:inline-block;
              background:#2D5016;
              color:#FAF7F0;
              padding:6px 12px;
              border-radius:6px;
              font-size:0.75rem;
              font-weight:600;
              text-decoration:none;
            ">View Profile →</a>
          </div>
        `)

        const marker = L.marker([retailer.lat, retailer.lng], { icon }).addTo(map).bindPopup(popup)

        marker.on('click', () => {
          if (onRetailerSelect) onRetailerSelect(retailer)
        })

        markersRef.current.push({ marker, retailerId: retailer.id })
      })
    }

    init()

    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
        markersRef.current = []
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Update markers when selectedId changes
  useEffect(() => {
    // This would re-style the selected marker — simplified for scaffold
  }, [selectedId])

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '400px',
        borderRadius: '12px',
        overflow: 'hidden',
      }}
    />
  )
}
