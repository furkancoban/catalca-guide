'use client';

import dynamic from 'next/dynamic';

// Dynamically import the map component to avoid SSR issues
const InteractiveMap = dynamic(
  () => import('../components/InteractiveMap'),
  { ssr: false }
);

export default function MapPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Çatalca Haritası</h1>
      <p className="text-gray-600 mb-8">
        Çatalca&apos;daki önemli noktaları, tarihi yerleri, restoranları ve otelleri keşfedin.
        Harita üzerindeki işaretçilere tıklayarak daha fazla bilgi alabilirsiniz.
      </p>
      <InteractiveMap />
    </main>
  )
} 