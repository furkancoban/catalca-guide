import React from 'react';
import Image from 'next/image';
import MapButtons from './MapButtons';

interface CardProps {
  title: string;
  subtitle: string;
  rating: string;
  description: string;
  image: string;
  imageAlt: string;
  location: string;
  latitude: number;
  longitude: number;
  details: React.ReactNode;
}

export default function Card({
  title,
  subtitle,
  rating,
  description,
  image,
  imageAlt,
  location,
  latitude,
  longitude,
  details,
}: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transform transition duration-300 hover:scale-[1.02]">
      {/* Image container with fixed aspect ratio */}
      <div className="relative w-full pt-[56.25%]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          loading="lazy"
          quality={75}
        />
      </div>

      <div className="p-6">
        <div className="space-y-2 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-600">{subtitle}</p>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
              {rating}
            </span>
          </div>
          <p className="text-gray-700 text-sm line-clamp-3">{description}</p>
        </div>

        <div className="space-y-4">
          <div className="text-sm text-gray-700">{details}</div>
          <div className="-mx-6 px-2">
            <MapButtons location={location} latitude={latitude} longitude={longitude} />
          </div>
        </div>
      </div>
    </div>
  );
} 