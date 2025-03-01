'use client';

import React from 'react';
import Image from 'next/image';
import Card from '../components/Card';

export default function Events() {
  return (
    <main className="flex-grow bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3"
          alt="Çatalca Etkinlikleri"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Çatalca&apos;da Etkinlikler</h1>
            <p className="text-xl">Festival, şenlik ve kültürel etkinlikler</p>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold mb-8 text-gray-900">Öne Çıkanlar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            title="Anastasios Surları"
            subtitle="Tarihi Sur"
            rating="4.8"
            description="Anastasios Surları, İstanbul'un Çatalca ilçesinde bulunan tarihi bir savunma yapısıdır. Bizans İmparatorluğu döneminde inşa edilmiştir."
            image="https://images.unsplash.com/photo-1589212987511-4a924cb9d8ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            imageAlt="Anastasios Surları"
            location="Çatalca"
            latitude={41.1433}
            longitude={28.4597}
            details={
              <>
                <p>📍 Konum: Çatalca Merkez</p>
                <p>🕒 Ziyaret Saatleri: Her gün 09:00-17:00</p>
                <p>💰 Giriş: Ücretsiz</p>
                <p>📞 İletişim: (0212) 789 XX XX</p>
              </>
            }
          />

          <Card
            title="İnceğiz Mağaraları"
            subtitle="Tarihi Mağara"
            rating="4.6"
            description="İnceğiz Mağaraları, Çatalca'nın en önemli tarihi ve turistik mekanlarından biridir. Roma döneminden kalma bu mağaralar, dönemin yaşam tarzını yansıtır."
            image="https://images.unsplash.com/photo-1590332634781-c6aa8e681573?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            imageAlt="İnceğiz Mağaraları"
            location="İnceğiz, Çatalca"
            latitude={41.1234}
            longitude={28.4789}
            details={
              <>
                <p>📍 Konum: İnceğiz Mahallesi</p>
                <p>🕒 Ziyaret Saatleri: Her gün 10:00-16:00</p>
                <p>💰 Giriş: 20₺</p>
                <p>📞 İletişim: (0212) 789 XX XX</p>
              </>
            }
          />

          <Card
            title="Çatalca Kalesi"
            subtitle="Tarihi Kale"
            rating="4.5"
            description="Çatalca Kalesi, bölgenin stratejik öneme sahip tarihi yapılarından biridir. Osmanlı döneminden günümüze ulaşan kale, muhteşem manzarası ile ziyaretçilerini bekliyor."
            image="https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            imageAlt="Çatalca Kalesi"
            location="Çatalca Merkez"
            latitude={41.1433}
            longitude={28.4597}
            details={
              <>
                <p>📍 Konum: Çatalca Merkez</p>
                <p>🕒 Ziyaret Saatleri: Her gün 09:00-18:00</p>
                <p>💰 Giriş: Ücretsiz</p>
                <p>📞 İletişim: (0212) 789 XX XX</p>
              </>
            }
          />

          <Card
            title="Karadeniz Sahili"
            subtitle="Doğal Güzellik"
            rating="4.8/5"
            description="Bozulmamış doğal plajlar, balıkçı limanları ve muhteşem gün batımı manzarası."
            image="https://images.unsplash.com/photo-1520520731457-9283dd14aa66"
            imageAlt="Karadeniz Sahili"
            location="Karaburun, Çatalca"
            latitude={41.3484}
            longitude={28.6868}
            details={
              <>
                <p>📍 Konum: Karaburun</p>
                <p>🏖️ En İyi Sezon: Yaz</p>
                <p>🎯 Öne Çıkan: Plajlar</p>
              </>
            }
          />
        </div>
      </section>

      {/* Local Festivals */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold mb-8 text-gray-900">Yerel Festivaller</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            title="Çatalca Tarım Festivali"
            subtitle="Yıllık Festival"
            rating="4.8/5"
            description="Her yıl düzenlenen geleneksel tarım festivali. Yerel ürünler, yemek yarışmaları ve kültürel etkinlikler."
            image="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8"
            imageAlt="Çatalca Tarım Festivali"
            location="Çatalca Merkez"
            latitude={41.1433}
            longitude={28.4597}
            details={
              <>
                <p>📍 Konum: Çatalca Merkez</p>
                <p>📅 Tarih: Eylül Ayı</p>
                <p>⏰ Süre: 3 Gün</p>
                <p>🎫 Giriş: Ücretsiz</p>
              </>
            }
          />

          <Card
            title="Bahar Şenlikleri"
            subtitle="Mevsimlik Festival"
            rating="4.7/5"
            description="Bahar aylarında düzenlenen renkli şenlikler. Konserler, dans gösterileri ve yerel lezzetler."
            image="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3"
            imageAlt="Bahar Şenlikleri"
            location="Kaleiçi Meydanı, Çatalca"
            latitude={41.1433}
            longitude={28.4597}
            details={
              <>
                <p>📍 Konum: Kaleiçi Meydanı</p>
                <p>📅 Tarih: Nisan-Mayıs</p>
                <p>⏰ Süre: 1 Hafta</p>
                <p>🎫 Giriş: Ücretsiz</p>
              </>
            }
          />

          <Card
            title="Çatalca Kültür ve Sanat Festivali"
            subtitle="Yıllık Kültür Etkinliği"
            rating="4.9/5"
            description="Geleneksel el sanatları, yerel müzik grupları, tiyatro gösterileri ve sanat sergileri ile dolu kültürel festival."
            image="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3"
            imageAlt="Çatalca Kültür ve Sanat Festivali"
            location="Çatalca Kültür Merkezi"
            latitude={41.1433}
            longitude={28.4597}
            details={
              <>
                <p>📍 Konum: Çatalca Kültür Merkezi</p>
                <p>📅 Tarih: Temmuz Ayı</p>
                <p>⏰ Süre: 5 Gün</p>
                <p>🎫 Giriş: Ücretsiz</p>
              </>
            }
          />

          <Card
            title="Çatalca Gastronomi Günleri"
            subtitle="Yemek Festivali"
            rating="4.8/5"
            description="Yerel lezzetler, şef gösterileri, yemek yarışmaları ve tadım etkinlikleri ile dolu gastronomi festivali."
            image="https://images.unsplash.com/photo-1555939594-58d7cb561ad1"
            imageAlt="Çatalca Gastronomi Günleri"
            location="Ferhatpaşa Meydanı"
            latitude={41.1433}
            longitude={28.4597}
            details={
              <>
                <p>📍 Konum: Ferhatpaşa Meydanı</p>
                <p>📅 Tarih: Ağustos Ayı</p>
                <p>⏰ Süre: 4 Gün</p>
                <p>🎫 Giriş: Ücretsiz</p>
              </>
            }
          />

          <Card
            title="Çatalca Süt ve Süt Ürünleri Festivali"
            subtitle="Geleneksel Festival"
            rating="4.7/5"
            description="Çatalca'nın meşhur süt ürünlerinin tanıtıldığı, yarışmaların düzenlendiği ve yerel üreticilerin buluştuğu festival."
            image="https://images.unsplash.com/photo-1550583724-b2692b85b150"
            imageAlt="Çatalca Süt Festivali"
            location="Çatalca Fuar Alanı"
            latitude={41.1433}
            longitude={28.4597}
            details={
              <>
                <p>📍 Konum: Çatalca Fuar Alanı</p>
                <p>📅 Tarih: Haziran Ayı</p>
                <p>⏰ Süre: 3 Gün</p>
                <p>🎫 Giriş: Ücretsiz</p>
              </>
            }
          />

          <Card
            title="Çatalca Gençlik Festivali"
            subtitle="Gençlik Etkinliği"
            rating="4.6/5"
            description="Spor müsabakaları, e-spor turnuvaları, konserler ve gençlik aktiviteleri ile dolu festival."
            image="https://images.unsplash.com/photo-1459749411175-04bf5292ceea"
            imageAlt="Çatalca Gençlik Festivali"
            location="Çatalca Spor Kompleksi"
            latitude={41.1433}
            longitude={28.4597}
            details={
              <>
                <p>📍 Konum: Çatalca Spor Kompleksi</p>
                <p>📅 Tarih: Mayıs Ayı</p>
                <p>⏰ Süre: 4 Gün</p>
                <p>🎫 Giriş: Ücretsiz</p>
              </>
            }
          />

          <Card
            title="Çatalca Doğa ve Fotoğraf Festivali"
            subtitle="Doğa Etkinliği"
            rating="4.8/5"
            description="Doğa fotoğrafçılığı workshopları, kuş gözlem turları ve doğa yürüyüşleri içeren festival."
            image="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
            imageAlt="Çatalca Doğa ve Fotoğraf Festivali"
            location="Çatalca Tabiat Parkı"
            latitude={41.1433}
            longitude={28.4597}
            details={
              <>
                <p>📍 Konum: Çatalca Tabiat Parkı</p>
                <p>📅 Tarih: Ekim Ayı</p>
                <p>⏰ Süre: 3 Gün</p>
                <p>🎫 Giriş: Ücretsiz</p>
              </>
            }
          />

          <Card
            title="Çatalca El Sanatları Şenliği"
            subtitle="Kültürel Etkinlik"
            rating="4.7/5"
            description="Geleneksel el sanatları, dokuma, çömlek yapımı ve ahşap işçiliği atölyeleri ile zengin bir kültür şenliği."
            image="https://images.unsplash.com/photo-1528396518501-b53b655eb9b3"
            imageAlt="Çatalca El Sanatları Şenliği"
            location="Çatalca Kültür Merkezi"
            latitude={41.1433}
            longitude={28.4597}
            details={
              <>
                <p>📍 Konum: Çatalca Kültür Merkezi</p>
                <p>📅 Tarih: Kasım Ayı</p>
                <p>⏰ Süre: 4 Gün</p>
                <p>🎫 Giriş: Ücretsiz</p>
              </>
            }
          />

          <Card
            title="Çatalca Bisiklet Festivali"
            subtitle="Spor Etkinliği"
            rating="4.9/5"
            description="Bisiklet turları, yarışmalar ve doğa sporları etkinlikleri içeren festival."
            image="https://images.unsplash.com/photo-1541625602330-2277a4c46182"
            imageAlt="Çatalca Bisiklet Festivali"
            location="Çatalca Merkez"
            latitude={41.1433}
            longitude={28.4597}
            details={
              <>
                <p>📍 Konum: Çatalca Merkez</p>
                <p>📅 Tarih: Nisan Ayı</p>
                <p>⏰ Süre: 2 Gün</p>
                <p>🎫 Giriş: Ücretsiz</p>
              </>
            }
          />

          <Card
            title="Çatalca Balık Festivali"
            subtitle="Gastronomi Etkinliği"
            rating="4.8/5"
            description="Karadeniz'in lezzetli balıklarının sunulduğu, balık pişirme yarışmaları ve deniz ürünleri festivali."
            image="https://images.unsplash.com/photo-1511421585906-57a6e6dc3a2f"
            imageAlt="Çatalca Balık Festivali"
            location="Karaburun Sahili"
            latitude={41.3484}
            longitude={28.6868}
            details={
              <>
                <p>📍 Konum: Karaburun Sahili</p>
                <p>📅 Tarih: Eylül Ayı</p>
                <p>⏰ Süre: 3 Gün</p>
                <p>🎫 Giriş: Ücretsiz</p>
              </>
            }
          />

          <Card
            title="Çatalca Arkeoloji Günleri"
            subtitle="Kültürel Etkinlik"
            rating="4.7/5"
            description="Anastasios Surları ve antik yerleşimlerin tanıtıldığı, arkeoloji söyleşileri ve rehberli turlar."
            image="https://images.unsplash.com/photo-1544967082-d9d25d867d66"
            imageAlt="Çatalca Arkeoloji Günleri"
            location="Anastasios Surları"
            latitude={41.1433}
            longitude={28.4597}
            details={
              <>
                <p>📍 Konum: Anastasios Surları</p>
                <p>📅 Tarih: Mart Ayı</p>
                <p>⏰ Süre: 4 Gün</p>
                <p>🎫 Giriş: Ücretsiz</p>
              </>
            }
          />
        </div>
      </section>

      {/* Transportation Guide */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-gray-900">Ulaşım Rehberi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Toplu Taşıma</h3>
              <ul className="space-y-3 text-gray-700">
                <li>🚌 Düzenli otobüs seferleri</li>
                <li>🚇 Metro bağlantılı hatlar</li>
                <li>🚐 Minibüs servisleri</li>
                <li>⏰ İlk sefer: 06:00</li>
                <li>⏰ Son sefer: 23:00</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Özel Araç</h3>
              <ul className="space-y-3 text-gray-700">
                <li>🚗 Kolay ulaşım imkanı</li>
                <li>🅿️ Ücretsiz otopark</li>
                <li>⛽ Yakıt istasyonları mevcut</li>
                <li>🛣️ D100 ve TEM bağlantısı</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Alternatif Ulaşım</h3>
              <ul className="space-y-3 text-gray-700">
                <li>🚕 Taksi hizmeti</li>
                <li>🚲 Bisiklet kiralama</li>
                <li>🚶‍♂️ Yürüme mesafesinde</li>
                <li>🚌 Servis araçları</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Activities */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold mb-8 text-gray-900">Mevsimlik Etkinlikler</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">İlkbahar</h3>
            <ul className="space-y-3 text-gray-700">
              <li>🌸 Çiçek festivali</li>
              <li>🎨 Sanat atölyeleri</li>
              <li>🚴‍♂️ Bisiklet turları</li>
              <li>🌱 Bahçe etkinlikleri</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Yaz</h3>
            <ul className="space-y-3 text-gray-700">
              <li>🎵 Açık hava konserleri</li>
              <li>🎭 Tiyatro gösterileri</li>
              <li>🏊‍♂️ Su sporları</li>
              <li>🌅 Gün batımı etkinlikleri</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Sonbahar</h3>
            <ul className="space-y-3 text-gray-700">
              <li>🍂 Doğa yürüyüşleri</li>
              <li>🎨 Fotoğraf turları</li>
              <li>🍎 Hasat festivali</li>
              <li>🎭 Kültür günleri</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Kış</h3>
            <ul className="space-y-3 text-gray-700">
              <li>☕ Kış kahvaltıları</li>
              <li>🎭 Kapalı mekan etkinlikleri</li>
              <li>🎨 El sanatları atölyeleri</li>
              <li>🍲 Yemek workshopları</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-gray-900">Yakın Çevre</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              title="Silivri"
              subtitle="Sahil Kenti"
              rating="4.6/5"
              description="Marmara'nın incisi Silivri. Plajları, marinaları ve tarihi yapılarıyla görülmeye değer."
              image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              imageAlt="Silivri"
              location="Silivri, İstanbul"
              latitude={41.1433}
              longitude={28.4597}
              details={
                <>
                  <p>📍 Konum: Silivri, İstanbul</p>
                  <p>🚗 Mesafe: 30 dk</p>
                  <p>🎯 Öne Çıkan: Plajlar ve Marina</p>
                </>
              }
            />

            <Card
              title="Durusu (Terkos) Gölü"
              subtitle="Doğal Güzellik"
              rating="4.8/5"
              description="İstanbul'un önemli su kaynaklarından biri olan, doğal güzelliği ve kuş gözlemciliği için ideal göl."
              image="https://images.unsplash.com/photo-1439066615861-d1af74d74000"
              imageAlt="Durusu Gölü"
              location="Durusu, Çatalca"
              latitude={41.1234}
              longitude={28.4789}
              details={
                <>
                  <p>📍 Konum: Durusu, Çatalca</p>
                  <p>🚗 Mesafe: 25 dk</p>
                  <p>🎯 Öne Çıkan: Doğal Yaşam ve Göl Manzarası</p>
                </>
              }
            />

            <Card
              title="Yalıköy"
              subtitle="Sahil Kasabası"
              rating="4.6/5"
              description="Karadeniz kıyısında şirin bir balıkçı kasabası. Taze deniz ürünleri ve huzurlu plajlarıyla ünlü."
              image="https://images.unsplash.com/photo-1520520731457-9283dd14aa66"
              imageAlt="Yalıköy"
              location="Yalıköy, Çatalca"
              latitude={41.1433}
              longitude={28.4597}
              details={
                <>
                  <p>📍 Konum: Yalıköy, Çatalca</p>
                  <p>🚗 Mesafe: 35 dk</p>
                  <p>🎯 Öne Çıkan: Balıkçı Limanı ve Plajlar</p>
                </>
              }
            />

            <Card
              title="Çilingoz Tabiat Parkı"
              subtitle="Doğa Parkı"
              rating="4.9/5"
              description="Bakir koyları, ormanları ve kamp alanlarıyla doğa tutkunlarının vazgeçilmez adresi."
              image="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
              imageAlt="Çilingoz Tabiat Parkı"
              location="Çilingoz, Çatalca"
              latitude={41.1433}
              longitude={28.4597}
              details={
                <>
                  <p>📍 Konum: Çilingoz, Çatalca</p>
                  <p>🚗 Mesafe: 40 dk</p>
                  <p>🎯 Öne Çıkan: Doğal Plajlar ve Kamp Alanları</p>
                </>
              }
            />

            <Card
              title="Hadımköy"
              subtitle="Tarihi Bölge"
              rating="4.5/5"
              description="Osmanlı döneminden kalma tarihi yapıları ve askeri mirası ile öne çıkan bölge."
              image="https://images.unsplash.com/photo-1606761568499-6d2451b23c66"
              imageAlt="Hadımköy"
              location="Hadımköy, İstanbul"
              latitude={41.1433}
              longitude={28.4597}
              details={
                <>
                  <p>📍 Konum: Hadımköy, İstanbul</p>
                  <p>🚗 Mesafe: 15 dk</p>
                  <p>🎯 Öne Çıkan: Tarihi Yapılar ve Müzeler</p>
                </>
              }
            />

            <Card
              title="Büyükçekmece Gölü"
              subtitle="Doğal Güzellik"
              rating="4.7/5"
              description="Tarihi köprüsü, göl kenarı yürüyüş parkurları ve su sporları aktiviteleriyle popüler rekreasyon alanı."
              image="https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2"
              imageAlt="Büyükçekmece Gölü"
              location="Büyükçekmece, İstanbul"
              latitude={41.1433}
              longitude={28.4597}
              details={
                <>
                  <p>📍 Konum: Büyükçekmece, İstanbul</p>
                  <p>🚗 Mesafe: 25 dk</p>
                  <p>🎯 Öne Çıkan: Göl Manzarası ve Tarihi Köprü</p>
                </>
              }
            />

            <Card
              title="Bizans Tarihi"
              subtitle="Miras"
              rating="4.7/5"
              description="Konstantinopolis'i korumak için inşa edilen 56 kilometrelik Anastasios Surları'nın ev sahibi."
              image="https://images.unsplash.com/photo-1564507592333-c60657eea523"
              imageAlt="Bizans Mirası"
              location="Anastasios Surları"
              latitude={41.1433}
              longitude={28.4597}
              details={
                <>
                  <p>📍 Konum: Anastasios Surları</p>
                  <p>🏛️ Dönem: Bizans</p>
                  <p>🎯 Öne Çıkan: Tarihi Surlar</p>
                </>
              }
            />

            <Card
              title="Çatalca Ayçiçeği Tarlaları"
              subtitle="Doğal Güzellik"
              rating="4.9/5"
              description="Yaz aylarında altın sarısına bürünen, fotoğraf tutkunlarının vazgeçilmez adresi ayçiçeği tarlaları."
              image="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad"
              imageAlt="Ayçiçeği Tarlaları"
              location="Çatalca Ovaları"
              latitude={41.1433}
              longitude={28.4597}
              details={
                <>
                  <p>📍 Konum: Çatalca Ovaları</p>
                  <p>🌻 En İyi Sezon: Temmuz-Ağustos</p>
                  <p>🎯 Öne Çıkan: Ayçiçeği Manzarası</p>
                </>
              }
            />

            <Card
              title="Çatalca Organik Çiftlikler"
              subtitle="Yerel Üretim"
              rating="4.7/5"
              description="Süt ürünleri, organik sebze ve meyveleriyle ünlü çiftlikler. Taze ürün alışverişi ve çiftlik aktiviteleri."
              image="https://images.unsplash.com/photo-1500076656116-558758c991c1"
              imageAlt="Organik Çiftlikler"
              location="Çatalca Köyleri"
              latitude={41.1433}
              longitude={28.4597}
              details={
                <>
                  <p>📍 Konum: Çatalca Köyleri</p>
                  <p>🌱 Aktiviteler: Çiftlik Turu, Ürün Toplama</p>
                  <p>🎯 Öne Çıkan: Organik Ürünler</p>
                </>
              }
            />
          </div>
        </div>
      </section>
    </main>
  );
} 