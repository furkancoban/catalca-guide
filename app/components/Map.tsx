'use client';

import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl, Circle } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers
interface ExtendedIcon extends L.Icon.Default {
  _getIconUrl?: string;
}

delete (L.Icon.Default.prototype as ExtendedIcon)._getIconUrl;

// Custom icons for different types of locations with modern design
const icons = {
  historical: new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  }),
  attraction: new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  }),
  restaurant: new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  }),
  hotel: new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  })
};

interface PointOfInterest {
  type: 'historical' | 'attraction' | 'restaurant' | 'hotel';
  name: string;
  position: [number, number];
  description: string;
  radius?: number;
}

const Map: React.FC = () => {
  const [points] = useState<PointOfInterest[]>([
    // Historical Sites
    {
      type: 'historical',
      name: 'Anastasios Surları',
      position: [41.1433, 28.4647],
      description: "Bizans döneminden kalma tarihi surlar. Istanbul'un en önemli savunma yapılarından biri.",
      radius: 200
    },
    {
      type: 'historical',
      name: 'İnceğiz Mağaraları',
      position: [41.1234, 28.4789],
      description: 'Roma döneminden kalma mağara kompleksi. Kiliseler, mezar odaları ve tarihi freskler bulunmaktadır.',
      radius: 150
    },
    {
      type: 'historical',
      name: 'Çatalca Kalesi',
      position: [41.1425, 28.4605],
      description: 'Tarihi Çatalca Kalesi kalıntıları ve panoramik şehir manzarası.',
      radius: 100
    },
    {
      type: 'historical',
      name: 'Fatih Camii',
      position: [41.1437, 28.4612],
      description: 'Osmanlı döneminden kalma tarihi cami. Geleneksel mimari özellikleri taşıyan önemli bir ibadet mekanı.',
      radius: 100
    },
    {
      type: 'historical',
      name: 'Kaleiçi Tarihi Evleri',
      position: [41.1428, 28.4608],
      description: 'Geleneksel Osmanlı mimarisini yansıtan restore edilmiş tarihi evler.',
      radius: 150
    },
    // Attractions
    {
      type: 'attraction',
      name: 'Çatalca Meydanı',
      position: [41.1436, 28.4601],
      description: 'Şehrin merkezi meydanı, kültürel etkinlikler ve festivaller için ana buluşma noktası.',
      radius: 150
    },
    {
      type: 'attraction',
      name: 'Ferhatpaşa Çiftliği',
      position: [41.1242, 28.4789],
      description: 'Tarihi çiftlik, mesire alanı ve doğal güzellikleriyle ünlü rekreasyon bölgesi.',
      radius: 300
    },
    {
      type: 'attraction',
      name: 'Çatalca Kent Müzesi',
      position: [41.1432, 28.4605],
      description: 'Şehrin tarihini ve kültürel mirasını sergileyen modern müze.',
      radius: 100
    },
    {
      type: 'attraction',
      name: 'Çatalca Kültür Merkezi',
      position: [41.1439, 28.4597],
      description: 'Tiyatro, konser ve sergi etkinliklerinin düzenlendiği modern kültür merkezi.',
      radius: 120
    },
    {
      type: 'attraction',
      name: 'Çatalca Botanik Parkı',
      position: [41.1445, 28.4615],
      description: 'Çeşitli bitki türleri ve yürüyüş parkurları içeren doğal park alanı.',
      radius: 200
    },
    // Restaurants
    {
      type: 'restaurant',
      name: 'Çatalca Köftecisi',
      position: [41.1438, 28.4599],
      description: 'Meşhur Çatalca köftesi ve yerel lezzetler.',
      radius: 50
    },
    {
      type: 'restaurant',
      name: 'Yöresel Lezzetler Lokantası',
      position: [41.1435, 28.4603],
      description: 'Geleneksel Çatalca mutfağı ve ev yapımı yemekler.',
      radius: 50
    },
    {
      type: 'restaurant',
      name: 'Çatalca Kebap Evi',
      position: [41.1437, 28.4595],
      description: 'Geleneksel Türk kebapları ve mezeler.',
      radius: 50
    },
    {
      type: 'restaurant',
      name: 'Balkan Sofrası',
      position: [41.1442, 28.4598],
      description: 'Balkan mutfağından özel lezzetler sunan restoran.',
      radius: 50
    },
    {
      type: 'restaurant',
      name: 'Çiftlik Kahvaltı Evi',
      position: [41.1430, 28.4610],
      description: 'Organik ürünlerle hazırlanan köy kahvaltısı ve gözleme çeşitleri.',
      radius: 60
    },
    // Hotels
    {
      type: 'hotel',
      name: 'Çatalca Otel',
      position: [41.1440, 28.4595],
      description: 'Şehir merkezinde modern konaklama tesisi.',
      radius: 80
    },
    {
      type: 'hotel',
      name: 'Yeşil Vadi Konağı',
      position: [41.1445, 28.4590],
      description: 'Doğayla iç içe butik otel deneyimi.',
      radius: 100
    },
    {
      type: 'hotel',
      name: 'Tarihi Konak Hotel',
      position: [41.1428, 28.4615],
      description: 'Restore edilmiş tarihi konakta butik konaklama.',
      radius: 70
    },
    {
      type: 'hotel',
      name: 'Park View Hotel',
      position: [41.1443, 28.4608],
      description: 'Modern tasarımlı, şehir manzaralı otel.',
      radius: 90
    },
    {
      type: 'hotel',
      name: 'Çatalca Termal Resort',
      position: [41.1450, 28.4585],
      description: 'Termal havuz ve spa olanaklarına sahip lüks otel.',
      radius: 150
    }
  ]);

  // Color mapping for different types
  const getCircleColor = (type: string) => {
    switch (type) {
      case 'historical':
        return { color: '#9c27b0', fillColor: '#9c27b0' };
      case 'attraction':
        return { color: '#ffd700', fillColor: '#ffd700' };
      case 'restaurant':
        return { color: '#f44336', fillColor: '#f44336' };
      case 'hotel':
        return { color: '#2196f3', fillColor: '#2196f3' };
      default:
        return { color: '#4caf50', fillColor: '#4caf50' };
    }
  };

  return (
    <div className="h-[500px] w-full relative rounded-xl overflow-hidden shadow-lg">
      <MapContainer
        center={[41.1436, 28.4601]}
        zoom={15.5}
        style={{ height: '100%', width: '100%' }}
        zoomControl={false} // We'll add it in a custom position
      >
        {/* Modern map style */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        
        {/* Custom position for zoom control */}
        <ZoomControl position="bottomright" />

        {points.map((point, index) => (
          <React.Fragment key={index}>
            {/* Circular area of influence */}
            {point.radius && (
              <Circle
                center={point.position}
                radius={point.radius}
                pathOptions={{
                  ...getCircleColor(point.type),
                  fillOpacity: 0.1,
                  weight: 1,
                  opacity: 0.5
                }}
              />
            )}
            
            {/* Location marker */}
            <Marker 
              position={point.position}
              icon={icons[point.type]}
            >
              <Popup className="modern-popup">
                <div className="p-3 -mx-3 -mt-3 bg-gradient-to-r from-gray-100 to-gray-50 border-b mb-2">
                  <h3 className="font-semibold text-lg text-gray-800">{point.name}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
              </Popup>
            </Marker>
          </React.Fragment>
        ))}
      </MapContainer>

      {/* Legend */}
      <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg z-[1000] text-sm">
        <h4 className="font-semibold mb-2 text-gray-800">Harita Göstergeleri</h4>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-violet-500"></div>
            <span className="text-gray-700">Tarihi Yerler</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <span className="text-gray-700">Gezilecek Yerler</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-gray-700">Restoranlar</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-gray-700">Oteller</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map; 