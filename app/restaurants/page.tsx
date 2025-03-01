import React from 'react';
import Image from 'next/image';
import Card from '../components/Card';
import MapButtons from '../components/MapButtons';

export default function Restaurants() {
  return (
    <main className="flex-grow bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
          alt="Çatalca Restoranları"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Çatalca&apos;nın En İyi Restoranları</h1>
            <p className="text-xl">Yerel lezzetler ve eşsiz tatlar</p>
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold mb-8 text-gray-900">Öne Çıkan Restoranlar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            title="Çatalca Köy Sofrası"
            subtitle="Türk Mutfağı"
            rating="4.8/5"
            description="Geleneksel Türk mutfağının en güzel örnekleri. Ev yapımı mantı, içli köfte ve dolmalar. Taze bahçe yeşillikleri ve mevsim salataları."
            image="https://images.unsplash.com/photo-1561758033-d89a9ad46330"
            imageAlt="Çatalca Köy Sofrası"
            location="Kaleiçi Mahallesi"
            mapLocation="Kaleiçi Mahallesi"
            details={
              <>
                <p>📍 Konum: Kaleiçi Mahallesi</p>
                <p>⏰ Çalışma Saatleri: 08:00-22:00</p>
                <p>📞 Rezervasyon: 0212-XXX-XXXX</p>
                <p>💰 Fiyat Aralığı: ₺₺</p>
              </>
            }
          />

          <Card
            title="Durusu Balık Evi"
            subtitle="Deniz Mahsülleri"
            rating="4.7/5"
            description="Taze balık çeşitleri ve deniz mahsülleri. Göl manzaralı terasta yemek keyfi. Özel soslu kalamar ve midye dolma öne çıkan lezzetler."
            image="https://images.unsplash.com/photo-1579027989536-b7b1f875659b"
            imageAlt="Durusu Balık Evi"
            location="Durusu Gölü Kenarı"
            mapLocation="Durusu Gölü Kenarı"
            details={
              <>
                <p>📍 Konum: Durusu Gölü Kenarı</p>
                <p>⏰ Çalışma Saatleri: 11:00-23:00</p>
                <p>📞 Rezervasyon: 0212-XXX-XXXX</p>
                <p>💰 Fiyat Aralığı: ₺₺₺</p>
              </>
            }
          />
        </div>
      </section>

      {/* Local Specialties */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-gray-900">Yerel Lezzetler</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              title="Çiftlik Kahvaltı Evi"
              subtitle="Kahvaltı"
              rating="4.6/5"
              description="Organik köy kahvaltısı, ev yapımı reçeller ve taze süt ürünleri. Çiftlik ortamında doğal kahvaltı deneyimi."
              image="https://images.unsplash.com/photo-1628294895950-9805252327bc"
              imageAlt="Yöresel Kahvaltıcı"
              location="İnceğiz Köyü"
              mapLocation="İnceğiz Köyü"
              details={
                <>
                  <p>📍 İnceğiz Köyü</p>
                  <p>⏰ 07:00-15:00</p>
                </>
              }
            />

            <Card
              title="Orman Et Lokantası"
              subtitle="Mangal & Izgara"
              rating="4.9/5"
              description="Kuzu tandır, köfte ve ızgara çeşitleri. Orman manzaralı bahçede mangal keyfi."
              image="https://images.unsplash.com/photo-1603360946369-dc9bb6258143"
              imageAlt="Mangal Keyfi"
              location="Çatalca Ormanı"
              mapLocation="Çatalca Ormanı"
              details={
                <>
                  <p>📍 Çatalca Ormanı</p>
                  <p>⏰ 11:00-22:00</p>
                </>
              }
            />

            <Card
              title="Kaleiçi Kafe"
              subtitle="Kafe & Tatlı"
              rating="4.5/5"
              description="El yapımı pasta ve börekler, Türk kahvesi ve çay. Tarihi atmosferde keyifli molalar."
              image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
              imageAlt="Kafe & Pastane"
              location="Kaleiçi Meydanı"
              mapLocation="Kaleiçi Meydanı"
              details={
                <>
                  <p>📍 Kaleiçi Meydanı</p>
                  <p>⏰ 09:00-23:00</p>
                </>
              }
            />
          </div>
        </div>
      </section>

      {/* More Local Restaurants */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold mb-8 text-gray-900">Diğer Restoranlar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Çatalca Pide Salonu"
            subtitle="Pide & Lahmacun"
            rating="4.7/5"
            description="40 yıllık tecrübe ile hazırlanan özel pideler ve lahmacunlar. Kıymalı, kaşarlı, kuşbaşılı çeşitler mevcut."
            image="https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
            imageAlt="Çatalca Pide Salonu"
            location="Ferhatpaşa Caddesi"
            mapLocation="Ferhatpaşa Caddesi"
            details={
              <>
                <p>📍 Ferhatpaşa Caddesi</p>
                <p>⏰ 10:00-22:00</p>
                <p>💰 Fiyat: ₺</p>
              </>
            }
          />

          <Card
            title="Köy Evi Restaurant"
            subtitle="Ev Yemekleri"
            rating="4.6/5"
            description="Günlük ev yemekleri, taze sebze yemekleri ve dolmalar. Bahçeden toplanan otlarla yapılan özel menüler."
            image="https://images.unsplash.com/photo-1600891964092-4316c288032e"
            imageAlt="Köy Evi Restaurant"
            location="Yazlık Köyü"
            mapLocation="Yazlık Köyü"
            details={
              <>
                <p>📍 Yazlık Köyü</p>
                <p>⏰ 11:00-21:00</p>
                <p>💰 Fiyat: ₺₺</p>
              </>
            }
          />

          <Card
            title="Yeşil Vadi Restaurant"
            subtitle="Izgara & Kebap"
            rating="4.8/5"
            description="Doğa manzaralı bahçede ızgara keyfi. Adana kebap, patlıcan kebabı ve özel soslu kanat çeşitleri."
            image="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d"
            imageAlt="Yeşil Vadi Restaurant"
            location="Çatalca-İstanbul Yolu"
            mapLocation="Çatalca-İstanbul Yolu"
            details={
              <>
                <p>📍 Çatalca-İstanbul Yolu</p>
                <p>⏰ 11:00-23:00</p>
                <p>💰 Fiyat: ₺₺</p>
              </>
            }
          />
        </div>
      </section>

      {/* Food Categories Quick Links */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-gray-900">Yemek Kategorileri</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-4 bg-green-50 rounded-lg text-gray-900 hover:bg-green-100 transition-colors">
              🍳 Kahvaltı Mekanları
            </button>
            <button className="p-4 bg-green-50 rounded-lg text-gray-900 hover:bg-green-100 transition-colors">
              🥘 Geleneksel Restoranlar
            </button>
            <button className="p-4 bg-green-50 rounded-lg text-gray-900 hover:bg-green-100 transition-colors">
              🐟 Balık Restoranları
            </button>
            <button className="p-4 bg-green-50 rounded-lg text-gray-900 hover:bg-green-100 transition-colors">
              🥙 Pide & Lahmacun
            </button>
            <button className="p-4 bg-green-50 rounded-lg text-gray-900 hover:bg-green-100 transition-colors">
              ☕ Kafe & Pastane
            </button>
            <button className="p-4 bg-green-50 rounded-lg text-gray-900 hover:bg-green-100 transition-colors">
              🍖 Izgara & Kebap
            </button>
            <button className="p-4 bg-green-50 rounded-lg text-gray-900 hover:bg-green-100 transition-colors">
              🥗 Ev Yemekleri
            </button>
            <button className="p-4 bg-green-50 rounded-lg text-gray-900 hover:bg-green-100 transition-colors">
              🥪 Fast Food
            </button>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold mb-8 text-gray-900">Öneriler</h2>
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Rezervasyon</h3>
              <ul className="space-y-3 text-gray-700">
                <li>🕒 Hafta sonu için önceden rezervasyon yapın</li>
                <li>👥 Büyük gruplar için 2-3 gün önceden arayın</li>
                <li>📅 Festival zamanları erken rezervasyon şart</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Özel Lezzetler</h3>
              <ul className="space-y-3 text-gray-700">
                <li>🥘 Yöresel mantı mutlaka deneyin</li>
                <li>🐟 Mevsim balıklarını tercih edin</li>
                <li>🥛 Köy kahvaltısında yerel peynirler şart</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Ulaşım</h3>
              <ul className="space-y-3 text-gray-700">
                <li>🚗 Çoğu restoranda otopark mevcut</li>
                <li>🚕 Merkezi lokasyonlarda taksi bulunur</li>
                <li>🚶‍♂️ Kaleiçi restoranları yürüme mesafesinde</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}