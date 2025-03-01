'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the map component with ssr disabled
const MapComponent = dynamic(
  () => import('./Map'),
  { 
    ssr: false,
    loading: () => <div className="h-[400px] bg-gray-100 flex items-center justify-center">Loading map...</div>
  }
);

const InteractiveMap: React.FC = () => {
  return <MapComponent />;
};

export default InteractiveMap; 