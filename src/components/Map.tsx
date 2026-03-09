"use client";

import { useEffect, useState } from "react";
import { Retailer } from "@/types";

interface MapProps {
  retailers: Retailer[];
  center?: [number, number];
  zoom?: number;
  className?: string;
}

export default function Map({
  retailers,
  center = [39.0, -105.5],
  zoom = 7,
  className = "h-[400px] lg:h-[600px]",
}: MapProps) {
  const [MapComponents, setMapComponents] = useState<{
    MapContainer: typeof import("react-leaflet").MapContainer;
    TileLayer: typeof import("react-leaflet").TileLayer;
    Marker: typeof import("react-leaflet").Marker;
    Popup: typeof import("react-leaflet").Popup;
    L: typeof import("leaflet");
  } | null>(null);

  useEffect(() => {
    // Dynamic import to avoid SSR issues
    Promise.all([import("react-leaflet"), import("leaflet")]).then(
      ([reactLeaflet, leaflet]) => {
        // Fix default marker icons
        leaflet.default.Icon.Default.mergeOptions({
          iconRetinaUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
          iconUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
          shadowUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
        });
        setMapComponents({
          MapContainer: reactLeaflet.MapContainer,
          TileLayer: reactLeaflet.TileLayer,
          Marker: reactLeaflet.Marker,
          Popup: reactLeaflet.Popup,
          L: leaflet.default,
        });
      }
    );
  }, []);

  if (!MapComponents) {
    return (
      <div
        className={`${className} bg-bg-alt rounded-xl flex items-center justify-center`}
      >
        <div className="text-soil-light flex items-center gap-2">
          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Loading map...
        </div>
      </div>
    );
  }

  const { MapContainer, TileLayer, Marker, Popup, L } = MapComponents;

  const verticalColors: Record<string, string> = {
    medicinal: "#87A878",
    therapeutic: "#7B68AE",
    gourmet: "#D4853A",
  };

  function createIcon(vertical: string) {
    const color = verticalColors[vertical] || "#2D5016";
    return L.divIcon({
      className: "custom-marker",
      html: `<div style="
        background: ${color};
        width: 32px;
        height: 32px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 3px solid white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      "><div style="
        transform: rotate(45deg);
        text-align: center;
        line-height: 26px;
        font-size: 14px;
      ">🍄</div></div>`,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });
  }

  return (
    <div className={`${className} rounded-xl overflow-hidden shadow-md`}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css"
      />
      <MapContainer
        center={center}
        zoom={zoom}
        className="h-full w-full"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {retailers.map((retailer) => (
          <Marker
            key={retailer.id}
            position={[retailer.lat, retailer.lng]}
            icon={createIcon(retailer.verticals[0])}
          >
            <Popup>
              <div className="min-w-[200px]">
                <h3 className="font-bold text-sm mb-1">{retailer.name}</h3>
                <p className="text-xs text-gray-600 mb-1">
                  {retailer.city}, {retailer.state}
                </p>
                <p className="text-xs text-gray-500 mb-2">
                  {retailer.description.slice(0, 100)}...
                </p>
                <a
                  href={`/retailer/${retailer.slug}`}
                  className="text-xs font-medium text-[#2D5016] hover:underline"
                >
                  View Profile →
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
