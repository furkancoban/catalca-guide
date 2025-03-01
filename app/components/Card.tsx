import React from 'react';
import Image from 'next/image';
import MapButtons from './MapButtons';

interface CardProps {
  title: string;
  subtitle?: string;
  rating?: string;
  description?: string;
  image: string;
  imageAlt: string;
  details: React.ReactNode;
  location: string;
  latitude: number;
  longitude: number;
}

export default function Card({
  title,
  subtitle,
  rating,
  description,
  image,
  imageAlt,
  details,
  location,
  latitude,
  longitude
}: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-[520px]">
      <div className="h-48 relative">
        <Image 
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 h-[calc(520px-192px)] relative">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            {subtitle && <p className="text-green-600">{subtitle}</p>}
          </div>
          {rating && <div className="text-green-600">⭐ {rating}</div>}
        </div>
        {description && (
          <div className="mb-4">
            <p className="text-gray-700 line-clamp-2">{description}</p>
          </div>
        )}
        <div className="space-y-2 text-gray-700">
          {details}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <MapButtons latitude={latitude} longitude={longitude} address={location} />
        </div>
      </div>
    </div>
  );
} 