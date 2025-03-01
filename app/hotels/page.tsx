'use client';

import ImageCarousel from '../components/ImageCarousel';
import { useState } from 'react';

type SortOption = 'rating' | 'priceRange' | 'category';

interface Hotel {
  name: string;
  category: string;
  rating: number;
  priceRange: string;
  description: string;
  amenities: string[];
  location: string;
  contact: string;
  images: {
    src: string;
    alt: string;
  }[];
}

export default function Hotels() {
  const [sortBy, setSortBy] = useState<SortOption>('rating');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const hotels: Hotel[] = [
    {
      name: "Çatalca Palace Hotel",
      category: "5 Yıldızlı",
      rating: 4.8,
      priceRange: "₺₺₺₺",
      description: "Lüks konaklama deneyimi sunan, spa merkezi ve açık yüzme havuzu bulunan modern otel.",
      amenities: ["Spa", "Havuz", "Restoran", "Fitness Merkezi", "Ücretsiz WiFi", "Otopark"],
      location: "Ferhatpaşa Mahallesi",
      contact: "0212-XXX-XXXX",
      images: [
        { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945", alt: "Otel Dış Görünüm" },
        { src: "https://images.unsplash.com/photo-1582719508461-905c673771fd", alt: "Lüks Oda" },
        { src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7", alt: "Havuz" },
        { src: "https://images.unsplash.com/photo-1621293954908-907159247fc8", alt: "Restoran" },
        { src: "https://images.unsplash.com/photo-1617859047452-8510bcf207fd", alt: "Spa" }
      ]
    },
    {
      name: "Durusu Park Hotel",
      category: "4 Yıldızlı",
      rating: 4.6,
      priceRange: "₺₺₺",
      description: "Göl manzaralı, doğayla iç içe konforlu konaklama imkanı sunan otel.",
      amenities: ["Göl Manzarası", "Restoran", "Bar", "Toplantı Salonu", "Ücretsiz WiFi", "Otopark"],
      location: "Durusu Gölü Kenarı",
      contact: "0212-XXX-XXXX",
      images: [
        { src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4", alt: "Göl Manzarası" },
        { src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa", alt: "Otel Odası" },
        { src: "https://images.unsplash.com/photo-1615460549969-36fa19521a4f", alt: "Restoran" },
        { src: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f", alt: "Lobi" },
        { src: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6", alt: "Bar" }
      ]
    },
    {
      name: "Kaleiçi Butik Otel",
      category: "Butik Otel",
      rating: 4.7,
      priceRange: "₺₺₺",
      description: "Tarihi dokuda modern konfor sunan, özenle restore edilmiş butik otel.",
      amenities: ["Tarihi Atmosfer", "Teras", "Kahvaltı", "Bahçe", "Ücretsiz WiFi", "Transfer"],
      location: "Kaleiçi Mahallesi",
      contact: "0212-XXX-XXXX",
      images: [
        { src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb", alt: "Tarihi Bina" },
        { src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39", alt: "Butik Oda" },
        { src: "https://images.unsplash.com/photo-1630660664869-c9d3cc676880", alt: "Kahvaltı Salonu" },
        { src: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0", alt: "Teras" },
        { src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a", alt: "Bahçe" }
      ]
    },
    {
      name: "Çatalca Termal Resort",
      category: "4 Yıldızlı",
      rating: 4.9,
      priceRange: "₺₺₺₺",
      description: "Termal su imkanları ve sağlık hizmetleri sunan lüks resort otel.",
      amenities: ["Termal Havuz", "SPA", "Sağlık Merkezi", "Restoran", "Fitness", "Otopark"],
      location: "Çatalca Merkez",
      contact: "0212-XXX-XXXX",
      images: [
        { src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d", alt: "Termal Havuz" },
        { src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7", alt: "Spa" },
        { src: "https://images.unsplash.com/photo-1590447158019-883d8d5f8bc7", alt: "Oda" },
        { src: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6", alt: "Restoran" },
        { src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115", alt: "Fitness" }
      ]
    },
    {
      name: "Yeşil Vadi Hotel",
      category: "3 Yıldızlı",
      rating: 4.5,
      priceRange: "₺₺",
      description: "Doğa ile iç içe, huzurlu bir konaklama deneyimi sunan otel.",
      amenities: ["Bahçe", "Restoran", "Kahvaltı", "Otopark", "WiFi", "Mangal Alanı"],
      location: "Çatalca-İstanbul Yolu",
      contact: "0212-XXX-XXXX",
      images: [
        { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945", alt: "Otel Dış" },
        { src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a", alt: "Bahçe" },
        { src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39", alt: "Oda" },
        { src: "https://images.unsplash.com/photo-1630660664869-c9d3cc676880", alt: "Kahvaltı" },
        { src: "https://images.unsplash.com/photo-1615460549969-36fa19521a4f", alt: "Restoran" }
      ]
    },
    {
      name: "İnceğiz Konakları",
      category: "Butik Otel",
      rating: 4.7,
      priceRange: "₺₺₺",
      description: "Mağara manzaralı, geleneksel mimaride tasarlanmış konforlu konaklar.",
      amenities: ["Özel Teras", "Şömine", "Kahvaltı", "Otopark", "WiFi", "Manzara"],
      location: "İnceğiz Köyü",
      contact: "0212-XXX-XXXX",
      images: [
        { src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb", alt: "Konak Dış" },
        { src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa", alt: "Oda" },
        { src: "https://images.unsplash.com/photo-1630660664869-c9d3cc676880", alt: "Kahvaltı" },
        { src: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0", alt: "Teras" },
        { src: "https://images.unsplash.com/photo-1617859047452-8510bcf207fd", alt: "Şömine" }
      ]
    },
    {
      name: "Orman Park Hotel",
      category: "4 Yıldızlı",
      rating: 4.6,
      priceRange: "₺₺₺",
      description: "Orman içinde huzurlu bir atmosfer sunan modern otel.",
      amenities: ["Orman Manzarası", "Restoran", "Açık Havuz", "Fitness", "WiFi", "Otopark"],
      location: "Çatalca Ormanı",
      contact: "0212-XXX-XXXX",
      images: [
        { src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4", alt: "Otel Dış" },
        { src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7", alt: "Havuz" },
        { src: "https://images.unsplash.com/photo-1590447158019-883d8d5f8bc7", alt: "Oda" },
        { src: "https://images.unsplash.com/photo-1621293954908-907159247fc8", alt: "Restoran" },
        { src: "https://images.unsplash.com/photo-1617859047452-8510bcf207fd", alt: "Fitness" }
      ]
    },
    {
      name: "Sahil Butik Otel",
      category: "Butik Otel",
      rating: 4.8,
      priceRange: "₺₺₺",
      description: "Karadeniz kıyısında huzurlu bir konaklama deneyimi sunan butik otel.",
      amenities: ["Deniz Manzarası", "Plaj", "Restoran", "Bar", "WiFi", "Otopark"],
      location: "Karacaköy",
      contact: "0212-XXX-XXXX",
      images: [
        { src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d", alt: "Otel Dış" },
        { src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39", alt: "Oda" },
        { src: "https://images.unsplash.com/photo-1615460549969-36fa19521a4f", alt: "Restoran" },
        { src: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6", alt: "Bar" },
        { src: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0", alt: "Plaj" }
      ]
    },
    {
      name: "Çiftlik Hotel",
      category: "3 Yıldızlı",
      rating: 4.5,
      priceRange: "₺₺",
      description: "Çiftlik konseptinde doğal yaşamla iç içe bir konaklama deneyimi.",
      amenities: ["Çiftlik Aktiviteleri", "Organik Kahvaltı", "Bahçe", "WiFi", "Otopark", "Mangal"],
      location: "Yazlık Köyü",
      contact: "0212-XXX-XXXX",
      images: [
        { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945", alt: "Çiftlik" },
        { src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa", alt: "Oda" },
        { src: "https://images.unsplash.com/photo-1630660664869-c9d3cc676880", alt: "Kahvaltı" },
        { src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a", alt: "Bahçe" },
        { src: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0", alt: "Aktivite" }
      ]
    },
    {
      name: "Tarihi Konak Hotel",
      category: "Butik Otel",
      rating: 4.9,
      priceRange: "₺₺₺₺",
      description: "Restore edilmiş tarihi konakta lüks ve nostaljik konaklama deneyimi.",
      amenities: ["Tarihi Atmosfer", "Özel Bahçe", "Restoran", "Toplantı Salonu", "WiFi", "Vale"],
      location: "Kaleiçi Mahallesi",
      contact: "0212-XXX-XXXX",
      images: [
        { src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb", alt: "Konak" },
        { src: "https://images.unsplash.com/photo-1582719508461-905c673771fd", alt: "Oda" },
        { src: "https://images.unsplash.com/photo-1621293954908-907159247fc8", alt: "Restoran" },
        { src: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0", alt: "Bahçe" },
        { src: "https://images.unsplash.com/photo-1617859047452-8510bcf207fd", alt: "Salon" }
      ]
    }
  ];

  const getSortValue = (hotel: Hotel, criteria: SortOption) => {
    switch (criteria) {
      case 'rating':
        return hotel.rating;
      case 'priceRange':
        return hotel.priceRange.length; // Sort by number of '₺' symbols
      case 'category':
        return hotel.category;
      default:
        return hotel.rating;
    }
  };

  const filteredAndSortedHotels = [...hotels]
    .filter(hotel => !selectedCategory || hotel.category === selectedCategory)
    .sort((a, b) => {
      const aValue = getSortValue(a, sortBy);
      const bValue = getSortValue(b, sortBy);

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

  return (
    <main className="flex-grow bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-900 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Çatalca&apos;da Konaklama</h1>
          <p className="text-xl text-gray-300">En iyi oteller ve konforlu konaklama seçenekleri</p>
        </div>
      </section>

      {/* Sorting Controls */}
      <section className="bg-white shadow-sm sticky top-16 z-40 border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="w-full sm:w-auto flex items-center gap-3">
              <label htmlFor="sort-select" className="text-gray-700 font-medium whitespace-nowrap">
                Sıralama:
              </label>
              <div className="relative flex-grow sm:flex-grow-0">
                <select
                  id="sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="w-full sm:w-48 px-4 py-2.5 bg-white border border-gray-300 rounded-lg 
                    focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none cursor-pointer
                    text-gray-700 font-medium"
                >
                  <option value="rating">⭐ Puana Göre</option>
                  <option value="priceRange">💰 Fiyata Göre</option>
                  <option value="category">🏨 Kategoriye Göre</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <span className="text-gray-700 font-medium whitespace-nowrap mr-2">Yön:</span>
              <div className="flex gap-2 flex-1 sm:flex-initial">
                <button
                  onClick={() => setSortOrder('asc')}
                  className={`flex-1 sm:flex-none px-4 py-2.5 rounded-lg transition-all font-medium
                    ${sortOrder === 'asc'
                      ? 'bg-green-600 text-white shadow-sm'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  ↑ Artan
                </button>
                <button
                  onClick={() => setSortOrder('desc')}
                  className={`flex-1 sm:flex-none px-4 py-2.5 rounded-lg transition-all font-medium
                    ${sortOrder === 'desc'
                      ? 'bg-green-600 text-white shadow-sm'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  ↓ Azalan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        {selectedCategory && (
          <div className="mb-6 flex items-center">
            <span className="text-gray-700 mr-2">Seçili Kategori:</span>
            <div className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full">
              <span>{selectedCategory}</span>
              <button
                onClick={() => setSelectedCategory(null)}
                className="ml-2 hover:text-green-600"
              >
                ✕
              </button>
            </div>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAndSortedHotels.map((hotel, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3]">
                <ImageCarousel images={hotel.images} />
              </div>
              <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">{hotel.name}</h2>
                    <p className="text-green-600 text-sm font-medium">{hotel.category}</p>
                  </div>
                  <div className="flex items-center mt-2 sm:mt-0">
                    <span className="text-yellow-500 mr-1">⭐</span>
                    <span className="font-medium">{hotel.rating}/5</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{hotel.description}</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center">
                    <span className="mr-2">📍</span>
                    {hotel.location}
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2">💰</span>
                    {hotel.priceRange}
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2">📞</span>
                    {hotel.contact}
                  </p>
                </div>
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Özellikler:</h3>
                  <div className="flex flex-wrap gap-2">
                    {hotel.amenities.map((amenity, index) => (
                      <span
                        key={index}
                        className="inline-block px-3 py-1 text-xs font-medium text-green-600 bg-green-50 rounded-full"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <a
                    href={`https://www.google.com/maps/search/${encodeURIComponent(hotel.name + ' ' + hotel.location + ' Çatalca, İstanbul')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-3 px-4 py-3.5 bg-gradient-to-b from-white to-gray-50 
                    border border-gray-200 rounded-xl text-gray-700 hover:border-green-300 hover:shadow-md 
                    transition-all duration-200 ease-in-out"
                  >
                    <svg className="w-8 h-8 transition-transform group-hover:scale-110 duration-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C7.589 2 4 5.589 4 10C4 14.411 7.589 18 12 18C16.411 18 20 14.411 20 10C20 5.589 16.411 2 12 2Z" fill="#34A853"/>
                      <path d="M12 2V18C16.411 18 20 14.411 20 10C20 5.589 16.411 2 12 2Z" fill="#4285F4"/>
                      <path d="M12 2C7.589 2 4 5.589 4 10C4 14.411 7.589 18 12 18V2Z" fill="#FBBC05"/>
                      <path d="M12 7V13L16 10L12 7Z" fill="white"/>
                    </svg>
                    <span className="font-medium text-base group-hover:text-green-600 transition-colors">
                      Google Maps
                    </span>
                  </a>
                  <a
                    href={`https://yandex.com.tr/harita/?text=${encodeURIComponent(hotel.name + ' ' + hotel.location + ' Çatalca, İstanbul')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-3 px-4 py-3.5 bg-gradient-to-b from-white to-gray-50 
                    border border-gray-200 rounded-xl text-gray-700 hover:border-green-300 hover:shadow-md 
                    transition-all duration-200 ease-in-out"
                  >
                    <svg className="w-8 h-8 transition-transform group-hover:scale-110 duration-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#FC3F1D"/>
                      <path d="M13.8 7H12.4L11.1 9.7L9.8 7H8.3L10.3 10.8L8.1 15H9.5L11 12L12.5 15H14L11.8 10.8L13.8 7Z" fill="white"/>
                    </svg>
                    <span className="font-medium text-base group-hover:text-green-600 transition-colors">
                      Yandex Harita
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-gray-900">Otel Kategorileri</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button 
              onClick={() => setSelectedCategory('5 Yıldızlı')}
              className={`p-4 rounded-lg text-gray-900 transition-colors ${
                selectedCategory === '5 Yıldızlı' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-green-50 hover:bg-green-100'
              }`}
            >
              ⭐⭐⭐⭐⭐ 5 Yıldızlı
            </button>
            <button 
              onClick={() => setSelectedCategory('4 Yıldızlı')}
              className={`p-4 rounded-lg text-gray-900 transition-colors ${
                selectedCategory === '4 Yıldızlı' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-green-50 hover:bg-green-100'
              }`}
            >
              ⭐⭐⭐⭐ 4 Yıldızlı
            </button>
            <button 
              onClick={() => setSelectedCategory('3 Yıldızlı')}
              className={`p-4 rounded-lg text-gray-900 transition-colors ${
                selectedCategory === '3 Yıldızlı' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-green-50 hover:bg-green-100'
              }`}
            >
              ⭐⭐⭐ 3 Yıldızlı
            </button>
            <button 
              onClick={() => setSelectedCategory('Butik Otel')}
              className={`p-4 rounded-lg text-gray-900 transition-colors ${
                selectedCategory === 'Butik Otel' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-green-50 hover:bg-green-100'
              }`}
            >
              🏰 Butik Oteller
            </button>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold mb-8 text-gray-900">Konaklama Önerileri</h2>
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Rezervasyon</h3>
              <ul className="space-y-3 text-gray-700">
                <li>🕒 Yüksek sezonda erken rezervasyon yapın</li>
                <li>📅 Festival dönemlerinde doluluk yüksek</li>
                <li>💳 Kredi kartı ile ön rezervasyon imkanı</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">En İyi Dönem</h3>
              <ul className="space-y-3 text-gray-700">
                <li>🌸 İlkbahar: Doğa ve festival sezonu</li>
                <li>🌞 Yaz: Plaj ve açık hava aktiviteleri</li>
                <li>🍁 Sonbahar: Uygun fiyatlar ve sakin ortam</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Ulaşım</h3>
              <ul className="space-y-3 text-gray-700">
                <li>🚗 Çoğu otelde ücretsiz otopark</li>
                <li>🚕 Merkezi otellerde transfer hizmeti</li>
                <li>🚌 Toplu taşıma ile kolay ulaşım</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 