'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaCalendarAlt, FaUtensils, FaBed } from 'react-icons/fa';
import { motion } from 'framer-motion';
import InteractiveMap from './components/InteractiveMap';
import WeatherWidget from './components/WeatherWidget';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
        <Image
          src="/images/catalca-hero.jpg"
          alt="Çatalca Hero Image"
          fill
          priority
          className="object-cover"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1920&q=80";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-white space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Çatalca'yı Keşfedin
              </h1>
              <p className="text-lg md:text-xl text-gray-200">
                Tarihi zenginlikleri, doğal güzellikleri ve kültürel mirası ile İstanbul'un en büyüleyici ilçelerinden biri
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                href="/places" 
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300"
                >
                  Gezilecek Yerler
                </Link>
                <Link
                  href="/about"
                  className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg backdrop-blur-sm transition-colors duration-300"
                >
                  Hakkında
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/places" className="group block">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                  <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors shrink-0">
                    <FaMapMarkerAlt className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
          </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Gezilecek Yerler</h3>
                    <p className="text-sm text-gray-600 break-words">Tarihi ve doğal mekanlar</p>
                  </div>
                </div>
              </motion.div>
            </Link>

            <Link href="/events" className="group block">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors shrink-0">
                    <FaCalendarAlt className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                          </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Etkinlikler</h3>
                    <p className="text-sm text-gray-600 break-words">Güncel aktiviteler</p>
                  </div>
                </div>
              </motion.div>
            </Link>

            <Link href="/restaurants" className="group block">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                  <div className="p-3 bg-orange-100 rounded-lg group-hover:bg-orange-200 transition-colors shrink-0">
                    <FaUtensils className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Restoranlar</h3>
                    <p className="text-sm text-gray-600 break-words">Yerel lezzetler</p>
                      </div>
                    </div>
              </motion.div>
            </Link>

            <Link href="/hotels" className="group block">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                  <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors shrink-0">
                    <FaBed className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Oteller</h3>
                    <p className="text-sm text-gray-600 break-words">Konaklama seçenekleri</p>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Weather Widget */}
      <WeatherWidget />

      {/* Map Section */}
      <section className="relative py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Keşfedin</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Çatalca'nın önemli noktalarını harita üzerinde görüntüleyin
            </p>
          </motion.div>
              </div>
        
        <div className="relative w-full h-[55vh] min-h-[350px] rounded-lg mx-auto max-w-7xl px-4 pb-4">
          <div className="relative h-full w-full rounded-xl overflow-hidden border-4 border-green-600">
            <div className="absolute inset-0">
              <InteractiveMap />
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg z-[1000] text-sm">
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
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-12 md:py-16 bg-gray-50 z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Tarih ve Doğanın Buluştuğu Nokta
              </h2>
              <p className="text-lg text-gray-600">
                İstanbul'un batı yakasında yer alan Çatalca, zengin tarihi mirası ve doğal güzellikleriyle öne çıkan bir ilçedir. 
                Roma döneminden Osmanlı'ya uzanan tarihi eserleri, yeşil vadileri ve temiz havasıyla ziyaretçilerine unutulmaz deneyimler sunar.
              </p>
              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300"
                >
                  Daha Fazla Bilgi
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 p-3 bg-gradient-to-br from-green-50 via-white to-gray-50 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                <div className="relative h-full w-full rounded-lg overflow-hidden border-[6px] border-white shadow-inner">
                  <Image
                    src="/images/catalca-nature.jpg"
                    alt="Çatalca Nature"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?auto=format&fit=crop&w=1200&q=80";
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
