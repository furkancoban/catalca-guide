'use client';

import React, { useState } from 'react';
import { FaDirections, FaMapMarkerAlt, FaShare, FaHeart, FaImages } from 'react-icons/fa';

interface MapButtonsProps {
  location: string;
  latitude: number;
  longitude: number;
}

const MapButtons: React.FC<MapButtonsProps> = ({ location, latitude, longitude }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const openGoogleMaps = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`, '_blank');
  };

  const openAppleMaps = () => {
    window.open(`http://maps.apple.com/?ll=${latitude},${longitude}&q=${encodeURIComponent(location)}`, '_blank');
  };

  const shareLocation = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: location || 'Shared Location',
          text: `Check out this location in Çatalca!`,
          url: `https://www.google.com/maps?q=${latitude},${longitude}`
        });
      } else {
        navigator.clipboard.writeText(`https://www.google.com/maps?q=${latitude},${longitude}`);
        alert('Location link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing location:', error);
    }
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    const message = isFavorite ? 'Removed from favorites!' : 'Added to favorites!';
    alert(message);
  };

  const viewPhotos = () => {
    // Here you would typically open a modal or navigate to a photos page
    // This function is not provided in the original code or the new implementation
    // It's assumed to exist as it's called in the original code
    // If you want to implement this, you'll need to add the logic here
  };

  const baseButtonClasses = "flex items-center justify-center px-3 py-1.5 rounded-full text-sm font-medium shadow-sm transition-all duration-200 ease-in-out hover:shadow-md hover:scale-105 active:scale-95 whitespace-nowrap";

  return (
    <div className="flex items-center justify-center space-x-2 w-full overflow-x-auto px-2 py-1 no-scrollbar">
      <button
        onClick={openGoogleMaps}
        className={`${baseButtonClasses} bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700`}
      >
        <FaMapMarkerAlt className="mr-1.5" />
        Maps
      </button>
      <button
        onClick={openAppleMaps}
        className={`${baseButtonClasses} bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-900 hover:to-black`}
      >
        <FaDirections className="mr-1.5" />
        Apple
      </button>
      <button
        onClick={shareLocation}
        className={`${baseButtonClasses} bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700`}
      >
        <FaShare className="mr-1.5" />
        Paylaş
      </button>
      <button
        onClick={toggleFavorite}
        className={`${baseButtonClasses} ${
          isFavorite 
            ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700' 
            : 'bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700'
        } text-white`}
      >
        <FaHeart className="mr-1.5" />
        {isFavorite ? 'Favoride' : 'Favori'}
      </button>
      <button
        onClick={viewPhotos}
        className={`${baseButtonClasses} bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700`}
      >
        <FaImages className="mr-1.5" />
        Foto
      </button>
    </div>
  );
};

const styles = `
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export default MapButtons; 