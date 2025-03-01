'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLandmark, FaSchool, FaBook, FaMosque, FaChurch, FaNewspaper, FaRocket } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 pb-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Hero Section */}
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-700 mb-6"
            >
              Çatalca Hakkında
            </motion.h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              İstanbul'un batı kapısı olan Çatalca, zengin tarihi, doğal güzellikleri ve kültürel mirası ile öne çıkan bir ilçedir.
            </p>
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-12">
              <Image
                src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3"
                alt="Çatalca Manzara"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* History Section */}
          <section className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <IoMdTime className="text-4xl text-green-600" />
              <h2 className="text-3xl font-bold text-green-600">Tarihçe</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="prose max-w-none text-gray-700 leading-relaxed">
                <p>
                  Çatalca, tarih boyunca birçok medeniyete ev sahipliği yapmış stratejik bir bölgedir. 
                  M.Ö. 600 yıllarında Traklar tarafından kurulmuş olan şehir, Roma, Bizans ve Osmanlı 
                  dönemlerinde önemli bir yerleşim merkezi olmuştur.
                </p>
                <p className="mt-4">
                  Osmanlı döneminde İstanbul'un önemli bir savunma noktası olan Çatalca, 
                  Balkan Savaşları sırasında kritik bir rol oynamıştır.
                </p>
              </div>
              <div className="relative h-[250px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?ixlib=rb-4.0.3"
                  alt="Tarihi Çatalca"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <FaSchool className="text-4xl text-green-600" />
              <h2 className="text-3xl font-bold text-green-600">Eğitim Kurumları</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <FaSchool className="text-2xl text-green-600" />
                  <h3 className="text-2xl font-semibold text-green-600">Okullar</h3>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-3">
                  <li>Çatalca Anadolu Lisesi</li>
                  <li>Çatalca Mesleki ve Teknik Anadolu Lisesi</li>
                  <li>Çatalca İMKB Fen Lisesi</li>
                  <li>Çatalca Merkez İlkokulu</li>
                  <li>Çatalca Cumhuriyet Ortaokulu</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <FaBook className="text-2xl text-green-600" />
                  <h3 className="text-2xl font-semibold text-green-600">Kütüphaneler</h3>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-3">
                  <li>Çatalca İlçe Halk Kütüphanesi</li>
                  <li>Çatalca Belediyesi Kütüphanesi</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Places of Worship Section */}
          <section className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <FaLandmark className="text-4xl text-green-600" />
              <h2 className="text-3xl font-bold text-green-600">İbadethaneler</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <FaMosque className="text-2xl text-green-600" />
                  <h3 className="text-2xl font-semibold text-green-600">Camiler</h3>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-3">
                  <li>Ferhat Paşa Camii</li>
                  <li>Kaleiçi Camii</li>
                  <li>Çakıl Camii</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <FaChurch className="text-2xl text-green-600" />
                  <h3 className="text-2xl font-semibold text-green-600">Kiliseler</h3>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-3">
                  <li>Aya Nikola Kilisesi</li>
                  <li>Aya Yorgi Kilisesi</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Municipality News Section */}
          <section className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <FaNewspaper className="text-4xl text-green-600" />
              <h2 className="text-3xl font-bold text-green-600">Belediye Haberleri</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-2xl font-semibold text-green-600 mb-3">
                    Çatalca'da Yeni Park ve Bahçe Düzenlemeleri
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Belediyemiz, ilçemizin çeşitli noktalarında yeni park ve bahçe düzenlemeleri 
                    yaparak yeşil alan miktarını artırmaya devam ediyor.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-2xl font-semibold text-green-600 mb-3">
                    Kültür ve Sanat Etkinlikleri
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Çatalca Belediyesi, vatandaşlarımızın kültür ve sanat faaliyetlerine 
                    erişimini artırmak için yeni projeler başlatıyor.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-green-600 mb-3">
                    Altyapı Çalışmaları
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    İlçemizin çeşitli mahallelerinde altyapı yenileme çalışmaları devam ediyor.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3"
                  alt="Çatalca Belediyesi"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Future Projects Section */}
          <section className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <FaRocket className="text-4xl text-green-600" />
              <h2 className="text-3xl font-bold text-green-600">Gelecek Projeleri</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="grid gap-4 text-gray-700">
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span>Yeni Kültür Merkezi Projesi</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span>Çatalca Spor Kompleksi</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span>Tarihi Yapıların Restorasyonu</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span>Akıllı Şehir Uygulamaları</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span>Çevre Dostu Ulaşım Projeleri</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3"
                  alt="Gelecek Projeleri"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  )
} 