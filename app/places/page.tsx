'use client';

import React from 'react';
import Image from 'next/image';
import Card from '../components/Card';

export default function Places() {
  return (
    <main className="flex-grow bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1533387520709-752d83de3630"
          alt="Çatalca'nın Tarihi ve Doğal Güzellikleri"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Çatalca&apos;nın Gezilecek Yerleri</h1>
            <p className="text-xl">Tarihi ve doğal güzellikler</p>
          </div>
        </div>
      </section>

      {/* Historical Places */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold mb-8 text-gray-900">Tarihi Yerler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[400px]">
          <Card
            title="Anastasios Surları"
            subtitle="Tarihi Sur"
            rating="4.8/5"
            description="5. yüzyılda inşa edilen ve İstanbul'u koruyan tarihi surlar. Bizans döneminden kalma bu yapı, dönemin mimari özelliklerini yansıtıyor."
            image="https://images.unsplash.com/photo-1564507592333-c60657eea523"
            imageAlt="Anastasios Surları"
            location="Belgrat Köyü"
            latitude={41.1433}
            longitude={28.4597}
            details={
              <>
                <p>📍 Konum: Belgrat Köyü</p>
                <p>⏰ Ziyaret Saatleri: 24 saat açık</p>
                <p>🎫 Giriş: Ücretsiz</p>
                <p>🎯 Öne Çıkan: Tarihi Mimari</p>
                <p>📏 Sur Uzunluğu: ~56 km</p>
                <p>🏛️ Yapım Yılı: M.S. 469</p>
              </>
            }
          />

          <Card
            title="İnceğiz Mağaraları"
            subtitle="Tarihi Mağaralar"
            rating="4.7/5"
            description="Roma döneminden kalma tarihi mağara kompleksi. Kiliseler, mezar odaları ve tarihi fresklerle bezeli bu mağaralar, bölgenin en etkileyici tarihi mekanlarından."
            image="https://images.unsplash.com/photo-1499244571948-7ccddb3583f1"
            imageAlt="İnceğiz Mağaraları"
            location="İnceğiz Köyü"
            latitude={41.1234}
            longitude={28.4789}
            details={
              <>
                <p>📍 Konum: İnceğiz Köyü</p>
                <p>⏰ Ziyaret Saatleri: 09:00-17:00</p>
                <p>🎫 Giriş: ₺20</p>
                <p>🎯 Öne Çıkan: Tarihi Freskler</p>
                <p>🏺 Tarihi Dönem: Roma Dönemi</p>
                <p>🚶‍♂️ Rehberli Tur: Mevcut</p>
              </>
            }
          />

          <Card
            title="Fatih Camii"
            subtitle="Tarihi Cami"
            rating="4.9/5"
            description="Osmanlı döneminden kalma tarihi cami. Geleneksel mimari özellikleri ve el işçiliğiyle bezeli iç mekanıyla görülmeye değer bir yapı."
            image="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f"
            imageAlt="Fatih Camii"
            location="Çatalca Merkez"
            latitude={41.1437}
            longitude={28.4612}
            details={
              <>
                <p>📍 Konum: Çatalca Merkez</p>
                <p>⏰ Ziyaret Saatleri: Namaz vakitleri</p>
                <p>🎫 Giriş: Ücretsiz</p>
                <p>🎯 Öne Çıkan: Osmanlı Mimarisi</p>
                <p>🕌 Yapım Yılı: 1800'ler</p>
                <p>🏺 Tarihi Önemi: Yüksek</p>
              </>
            }
          />
        </div>
      </section>

      {/* Natural Beauties */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-gray-900">Doğal Güzellikler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card
              title="Karaburun Plajı"
              subtitle="Plaj"
              rating="4.7"
              description="Karaburun'un kristal berraklığındaki sularında yüzme ve güneşlenme imkanı. Temiz plajı ve modern tesisleriyle ideal bir tatil noktası."
              image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              imageAlt="Karaburun Plajı"
              location="Karaburun, Çatalca"
              latitude={41.3484}
              longitude={28.6768}
              details={
                <>
                  <p>📍 Konum: Karaburun</p>
                  <p>🕒 En İyi Zaman: Haziran-Eylül</p>
                  <p>💰 Giriş: Ücretsiz</p>
                  <p>🎯 Öne Çıkan: Temiz Plaj</p>
                  <p>🏊‍♂️ Yüzme İmkanı: Var</p>
                  <p>🌊 Su Sporları: Mevcut</p>
                </>
              }
            />

            <Card
              title="Durusu Gölü"
              subtitle="Göl"
              rating="4.6"
              description="Doğal güzellikleri ve zengin kuş çeşitliliğiyle ünlü Durusu Gölü, piknik ve doğa yürüyüşü için ideal bir mekan."
              image="https://images.unsplash.com/photo-1439066615861-d1af74d74000"
              imageAlt="Durusu Gölü"
              location="Durusu, Çatalca"
              latitude={41.3156}
              longitude={28.6313}
              details={
                <>
                  <p>📍 Konum: Durusu</p>
                  <p>🕒 En İyi Zaman: Tüm Yıl</p>
                  <p>💰 Giriş: Ücretsiz</p>
                  <p>🎯 Öne Çıkan: Kuş Gözlemi</p>
                  <p>🚶‍♂️ Yürüyüş Parkuru: Var</p>
                  <p>🍖 Piknik Alanı: Mevcut</p>
                </>
              }
            />

            <Card
              title="Çatalca Ormanları"
              subtitle="Doğa"
              rating="4.8"
              description="Yemyeşil ormanları ve temiz havasıyla doğa yürüyüşü, kamp ve piknik için mükemmel bir seçenek."
              image="https://images.unsplash.com/photo-1448375240586-882707db888b"
              imageAlt="Çatalca Ormanları"
              location="Çatalca"
              latitude={41.1433}
              longitude={28.4597}
              details={
                <>
                  <p>📍 Konum: Çatalca</p>
                  <p>🕒 En İyi Zaman: İlkbahar-Sonbahar</p>
                  <p>💰 Giriş: Ücretsiz</p>
                  <p>🎯 Öne Çıkan: Doğa Yürüyüşü</p>
                  <p>⛺ Kamp Alanı: Mevcut</p>
                  <p>🌿 Flora Çeşitliliği: Yüksek</p>
                </>
              }
            />

            <Card
              title="Yalıköy Sahili"
              subtitle="Sahil"
              rating="4.7"
              description="Karadeniz'in muhteşem manzarasına sahip sahil şeridi. Balık tutma, yürüyüş ve günbatımı izleme imkanı sunan doğal bir güzellik."
              image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              imageAlt="Yalıköy Sahili"
              location="Yalıköy, Çatalca"
              latitude={41.2456}
              longitude={28.5678}
              details={
                <>
                  <p>📍 Konum: Yalıköy</p>
                  <p>🕒 En İyi Zaman: Yaz-Sonbahar</p>
                  <p>💰 Giriş: Ücretsiz</p>
                  <p>🎯 Öne Çıkan: Balık Tutma</p>
                  <p>🌅 Günbatımı Manzarası: Var</p>
                  <p>🎣 Balıkçılık: Mümkün</p>
                </>
              }
            />
          </div>
        </div>
      </section>

      {/* Cultural Places */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold mb-8 text-gray-900">Kültürel Mekanlar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            title="Çatalca Kent Müzesi"
            subtitle="Müze"
            rating="4.6/5"
            description="Çatalca'nın tarihini ve kültürel mirasını sergileyen modern müze. Arkeolojik buluntular ve etnografik eserler sergileniyor."
            image="https://images.unsplash.com/photo-1518998053901-5348d3961a04"
            imageAlt="Çatalca Kent Müzesi"
            location="Çatalca Merkez"
            latitude={41.1433}
            longitude={28.4597}
            details={
              <>
                <p>📍 Konum: Çatalca Merkez</p>
                <p>⏰ Ziyaret Saatleri: 09:00-17:00</p>
                <p>🎫 Giriş: ₺15</p>
                <p>🎯 Öne Çıkan: Tarihi Eserler</p>
                <p>📱 İletişim: (0212) XXX XX XX</p>
                <p>🎪 Özel Sergiler: Düzenli</p>
              </>
            }
          />

          <Card
            title="Kaleiçi Mahallesi"
            subtitle="Tarihi Mahalle"
            rating="4.7/5"
            description="Geleneksel Osmanlı mimarisini yansıtan tarihi evler ve sokaklar. Fotoğraf çekmek ve yerel yaşamı deneyimlemek için ideal."
            image="https://images.unsplash.com/photo-1527838832700-5059252407fa"
            imageAlt="Kaleiçi Mahallesi"
            location="Çatalca Merkez"
            latitude={41.1433}
            longitude={28.4597}
            details={
              <>
                <p>📍 Konum: Çatalca Merkez</p>
                <p>⏰ En İyi Zaman: Sabah ve Akşamüstü</p>
                <p>📸 Önerilen: Fotoğraf Turu, Yürüyüş</p>
                <p>🎯 Öne Çıkan: Osmanlı Mimarisi</p>
                <p>🚶‍♂️ Yürüyüş Süresi: ~2 saat</p>
                <p>🏺 Tarihi Evler: Çok sayıda</p>
              </>
            }
          />

          <Card
            title="Çatalca Kültür Merkezi"
            subtitle="Kültür Merkezi"
            rating="4.8/5"
            description="Modern bir kompleks içinde tiyatro, sergi ve konser salonları. Düzenli kültürel etkinlikler ve workshoplar düzenleniyor."
            image="https://images.unsplash.com/photo-1499364615650-ec38552f4f34"
            imageAlt="Çatalca Kültür Merkezi"
            location="Çatalca Merkez"
            latitude={41.1439}
            longitude={28.4597}
            details={
              <>
                <p>📍 Konum: Çatalca Merkez</p>
                <p>⏰ Çalışma Saatleri: 10:00-22:00</p>
                <p>🎭 Etkinlikler: Düzenli</p>
                <p>🎯 Öne Çıkan: Kültürel Aktiviteler</p>
                <p>🎪 Sergi Salonu: Mevcut</p>
                <p>🎵 Konser Salonu: 500 kişilik</p>
              </>
            }
          />

          <Card
            title="Ferhatpaşa Çiftliği"
            subtitle="Tarihi Çiftlik"
            rating="4.5/5"
            description="Osmanlı döneminden kalma tarihi çiftlik yapısı. Geniş bahçesi ve restore edilmiş binalarıyla kültür ve doğayı birleştiriyor."
            image="https://images.unsplash.com/photo-1500382017468-9049fed747ef"
            imageAlt="Ferhatpaşa Çiftliği"
            location="Ferhatpaşa, Çatalca"
            latitude={41.1242}
            longitude={28.4789}
            details={
              <>
                <p>📍 Konum: Ferhatpaşa</p>
                <p>⏰ Ziyaret Saatleri: 09:00-18:00</p>
                <p>🎫 Giriş: ₺10</p>
                <p>🎯 Öne Çıkan: Tarihi Yapı</p>
                <p>🌳 Bahçe Alanı: Geniş</p>
                <p>☕ Kafe: Mevcut</p>
              </>
            }
          />
        </div>
      </section>

      {/* Visitor Tips */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-gray-900">Ziyaretçi Önerileri</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">En İyi Ziyaret Zamanı</h3>
              <ul className="space-y-3 text-gray-700">
                <li>🌸 İlkbahar: Doğa Fotoğrafçılığı</li>
                <li>☀️ Yaz: Göl ve Piknik Aktiviteleri</li>
                <li>🍂 Sonbahar: Trekking ve Yürüyüş</li>
                <li>❄️ Kış: Tarihi Mekanlar ve Müzeler</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Ulaşım İpuçları</h3>
              <ul className="space-y-3 text-gray-700">
                <li>🚌 Düzenli otobüs seferleri mevcut</li>
                <li>🚗 Özel araç ile kolay ulaşım</li>
                <li>🚶‍♂️ Merkezi yerler yürüme mesafesinde</li>
                <li>🚕 Yerel taksi hizmeti var</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Genel Öneriler</h3>
              <ul className="space-y-3 text-gray-700">
                <li>📸 Fotoğraf makinesi getirin</li>
                <li>👟 Rahat yürüyüş ayakkabısı şart</li>
                <li>🎒 Su ve atıştırmalık bulundurun</li>
                <li>🗺️ Rota planı yapın</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 