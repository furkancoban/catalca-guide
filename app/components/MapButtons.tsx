'use client';

import React from 'react';
import { FaDirections, FaMapMarkerAlt } from 'react-icons/fa';

interface MapButtonsProps {
  latitude: number;
  longitude: number;
  address?: string;
}

const MapButtons: React.FC<MapButtonsProps> = ({ latitude, longitude, address }) => {
  const openGoogleMaps = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    window.open(url, '_blank');
  };

  const openInMaps = () => {
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(url, '_blank');
  };

  return (
    <div className="flex space-x-2 mt-2">
      <button
        onClick={openGoogleMaps}
        className="flex items-center px-3 py-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
      >
        <FaDirections className="mr-1.5" />
        Yol Tarifi
      </button>
      <button
        onClick={openInMaps}
        className="flex items-center px-3 py-1.5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
      >
        <FaMapMarkerAlt className="mr-1.5" />
        Haritada Gör
      </button>
    </div>
  );
};

export default MapButtons; 