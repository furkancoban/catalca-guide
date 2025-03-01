'use client';

import { useState } from 'react';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the search
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-8">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for places, hotels, or restaurants..."
          className="w-full px-4 py-2 rounded-lg border shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
        >
          Search
        </button>
      </form>
    </div>
  );
} 