'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Hero Section */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Çatalca Hakkında</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İstanbul'un batı kapısı olan Çatalca, zengin tarihi, doğal güzellikleri ve kültürel mirası ile öne çıkan bir ilçedir.
            </p>
          </div>

          {/* History Section */}
          <section className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tarihçe</h2>
            <div className="prose max-w-none text-gray-600">
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
          </section>

          {/* Education Section */}
          <section className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Eğitim Kurumları</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Okullar</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Çatalca Anadolu Lisesi</li>
                  <li>Çatalca Mesleki ve Teknik Anadolu Lisesi</li>
                  <li>Çatalca İMKB Fen Lisesi</li>
                  <li>Çatalca Merkez İlkokulu</li>
                  <li>Çatalca Cumhuriyet Ortaokulu</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Kütüphaneler</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Çatalca İlçe Halk Kütüphanesi</li>
                  <li>Çatalca Belediyesi Kütüphanesi</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Places of Worship Section */}
          <section className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">İbadethaneler</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Camiler</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Ferhat Paşa Camii</li>
                  <li>Kaleiçi Camii</li>
                  <li>Çakıl Camii</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Kiliseler</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Aya Nikola Kilisesi</li>
                  <li>Aya Yorgi Kilisesi</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Municipality News Section */}
          <section className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Belediye Haberleri</h2>
            <div className="space-y-6">
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Çatalca'da Yeni Park ve Bahçe Düzenlemeleri
                </h3>
                <p className="text-gray-600">
                  Belediyemiz, ilçemizin çeşitli noktalarında yeni park ve bahçe düzenlemeleri 
                  yaparak yeşil alan miktarını artırmaya devam ediyor.
                </p>
              </div>
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Kültür ve Sanat Etkinlikleri
                </h3>
                <p className="text-gray-600">
                  Çatalca Belediyesi, vatandaşlarımızın kültür ve sanat faaliyetlerine 
                  erişimini artırmak için yeni projeler başlatıyor.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Altyapı Çalışmaları
                </h3>
                <p className="text-gray-600">
                  İlçemizin çeşitli mahallelerinde altyapı yenileme çalışmaları devam ediyor.
                </p>
              </div>
            </div>
          </section>

          {/* Future Projects Section */}
          <section className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Gelecek Projeleri</h2>
            <div className="prose max-w-none text-gray-600">
              <ul className="list-disc list-inside space-y-2">
                <li>Yeni Kültür Merkezi Projesi</li>
                <li>Çatalca Spor Kompleksi</li>
                <li>Tarihi Yapıların Restorasyonu</li>
                <li>Akıllı Şehir Uygulamaları</li>
                <li>Çevre Dostu Ulaşım Projeleri</li>
              </ul>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  )
} 