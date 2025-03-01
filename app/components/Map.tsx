'use client';

import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers
interface ExtendedIcon extends L.Icon.Default {
  _getIconUrl?: string;
}

delete (L.Icon.Default.prototype as ExtendedIcon)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface PointOfInterest {
  type: 'historical' | 'attraction' | 'restaurant' | 'hotel';
  name: string;
  position: [number, number];
  description: string;
}

const Map: React.FC = () => {
  const [points] = useState<PointOfInterest[]>([
    {
      type: 'historical',
      name: 'Anastasios Surları',
      position: [41.1433, 28.4647],
      description: 'Bizans döneminden kalma tarihi surlar',
    },
    {
      type: 'attraction',
      name: 'İnceğiz Mağaraları',
      position: [41.1234, 28.4789],
      description: 'Roma döneminden kalma mağara kompleksi. Kiliseler, mezar odaları ve tarihi freskler bulunmaktadır.',
    },
    {
      type: 'historical',
      name: 'Çatalca Kalesi',
      position: [41.1425, 28.4605],
      description: 'Tarihi Çatalca Kalesi kalıntıları',
    },
    {
      type: 'attraction',
      name: 'Çatalca Belediye Meydanı',
      position: [41.1436, 28.4601],
      description: 'Şehrin merkezi meydanı ve buluşma noktası',
    },
    {
      type: 'attraction',
      name: 'Ferhatpaşa Çiftliği',
      position: [41.1242, 28.4789],
      description: 'Tarihi çiftlik ve mesire alanı',
    }
  ]);

  return (
    <div className="h-[400px] w-full relative">
      <MapContainer
        center={[41.1433, 28.4647]}
        zoom={12}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {points.map((point, index) => (
          <Marker key={index} position={point.position}>
            <Popup>
              <div>
                <h3 className="font-semibold">{point.name}</h3>
                <p>{point.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map; 