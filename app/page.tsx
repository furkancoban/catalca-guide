'use client';

import Image from 'next/image';
import InteractiveMap from './components/InteractiveMap';
import WeatherWidget from './components/WeatherWidget';
import { FiMapPin, FiClock, FiCalendar, FiUsers, FiPhone, FiMail, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

export default function Home() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      fadeInUp.transition.duration = 0;
      staggerContainer.animate.transition.staggerChildren = 0;
    }
  }, []);

  return (
    <main className="flex-grow">
      {/* Hero Section with Video Background */}
      <section className="relative h-[100svh]">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source 
            src="https://player.vimeo.com/external/370467553.hd.mp4?s=ce49c8c6d8e28a89298ffb4c53a2e842bdb11546&profile_id=175&oauth2_token_id=57447761" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/90 via-green-900/50 to-green-950/90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0),rgba(0,0,0,0.4))]"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4"
        >
          <div className="max-w-6xl mx-auto w-full">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="text-center"
            >
              <motion.div 
                variants={fadeInUp}
                className="inline-block mb-4 sm:mb-6 px-4 sm:px-6 py-2 border-2 border-green-500/30 rounded-full bg-white/5 backdrop-blur-sm"
              >
                <span className="text-green-400 text-sm sm:text-base font-medium tracking-wide">İstanbul'un Batı Kapısı</span>
              </motion.div>
              <motion.h1 
                variants={fadeInUp}
                className="mb-6 sm:mb-8"
              >
                <motion.span 
                  variants={fadeInUp}
                  className="block text-5xl sm:text-7xl md:text-8xl font-bold mb-2 tracking-tight leading-none"
                >
                  Çatalca'ya
                </motion.span>
                <motion.span 
                  variants={fadeInUp}
                  className="block text-4xl sm:text-6xl md:text-7xl font-light bg-gradient-to-r from-green-300 via-white to-green-300 bg-clip-text text-transparent"
                >
                  Hoş Geldiniz
                </motion.span>
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-center leading-relaxed mb-8 sm:mb-12 font-light text-gray-200/90 px-4"
              >
                2000 yıllık tarihi, eşsiz doğası ve zengin kültürüyle<br className="hidden md:block" /> İstanbul'un saklı hazinesi
              </motion.p>
            </motion.div>
            
            {/* Quick Highlights */}
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 px-4 max-w-3xl mx-auto"
            >
              {[
                { 
                  emoji: "🏛️", 
                  title: "Zengin Tarih",
                  text: "Roma, Bizans ve Osmanlı dönemlerinden kalma tarihi eserler",
                  details: "Anastasios Surları, İnceğiz Mağaraları ve daha fazlası"
                },
                { 
                  emoji: "🌳", 
                  title: "Doğal Güzellikler",
                  text: "Yemyeşil ormanlar ve masmavi kıyılar",
                  details: "Terkos Gölü, Karadeniz sahili ve mesire alanları"
                },
                { 
                  emoji: "🎭", 
                  title: "Canlı Kültür",
                  text: "Festivaller, yerel lezzetler ve el sanatları",
                  details: "Yıl boyu süren etkinlikler ve geleneksel pazarlar"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex flex-col items-center justify-center gap-2 bg-white/10 backdrop-blur-md px-4 sm:px-6 py-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <span className="text-3xl sm:text-4xl group-hover:scale-125 transition-transform duration-500">{item.emoji}</span>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-center text-gray-200">{item.text}</p>
                  <p className="text-xs text-center text-gray-300">{item.details}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action Buttons */}
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="flex flex-col gap-3 sm:gap-4 justify-center items-center sm:flex-row max-w-md mx-auto px-4"
            >
              <motion.a 
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/places" 
                className="group w-full sm:w-auto flex-1 px-3 py-2 bg-gradient-to-r from-green-600 via-green-500 to-green-600 text-white rounded-md font-medium hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 text-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <div className="flex flex-col items-center justify-center relative z-10">
                  <span className="flex items-center text-xs font-semibold tracking-wide">
                    Keşfet
                    <span className="inline-block ml-1.5 transform group-hover:translate-x-1 transition-transform duration-500">→</span>
                  </span>
                  <span className="text-[10px] text-white/90">50+ Tarihi ve Doğal Güzellik</span>
                </div>
              </motion.a>
              <motion.a 
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/events" 
                className="group w-full sm:w-auto flex-1 px-3 py-2 bg-white/10 text-white rounded-md font-medium backdrop-blur-md transition-all duration-300 border border-white/30 text-center relative overflow-hidden hover:bg-white/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <div className="flex flex-col items-center justify-center relative z-10">
                  <span className="flex items-center text-xs font-semibold tracking-wide">
                    Etkinlikler
                    <span className="inline-block ml-1.5 transform group-hover:translate-x-1 transition-transform duration-500">→</span>
                  </span>
                  <span className="text-[10px] text-white/90">Festival ve Şenlikler</span>
                </div>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Çatalca'yı Keşfedin</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tarihi, doğal ve kültürel zenginlikleriyle dolu bir yolculuğa çıkın
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {[
              {
                image: "https://images.unsplash.com/photo-1533387520709-752d83de3630",
                title: "Tarihi Yerler",
                description: "Roma, Bizans ve Osmanlı dönemlerinden kalma eserler",
                items: [
                  "Anastasios Surları",
                  "İnceğiz Mağaraları",
                  "Tarihi Çatalca Evleri",
                  "Kaleiçi Mahallesi"
                ]
              },
              {
                image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000",
                title: "Doğal Güzellikler",
                description: "Eşsiz doğal manzaralar ve rekreasyon alanları",
                items: [
                  "Terkos (Durusu) Gölü",
                  "Karadeniz Plajları",
                  "Çatalca Ormanları",
                  "Yürüyüş Parkurları"
                ]
              },
              {
                image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
                title: "Yerel Lezzetler",
                description: "Yöresel mutfak ve geleneksel tatlar",
                items: [
                  "Çatalca Köftesi",
                  "Organik Ürünler",
                  "Yöresel Kahvaltılar",
                  "Geleneksel Tatlılar"
                ]
              },
              {
                image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
                title: "Kültürel Miras",
                description: "Festivaller ve yerel etkinlikler",
                items: [
                  "Erguvan Festivali",
                  "Yerel Pazarlar",
                  "El Sanatları",
                  "Halk Oyunları"
                ]
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-600">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Son Gelişmeler</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Çatalca'daki en güncel haberler, etkinlikler ve duyurular
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          >
            {[
              {
                image: "https://images.unsplash.com/photo-1589483232748-515c025575bc",
                category: "Kültür & Sanat",
                date: "3 Mart 2024",
                title: "Bahar Festivali Hazırlıkları Başladı",
                description: "Çatalca Belediyesi, geleneksel bahar festivalinin hazırlıklarına başladı. Festival kapsamında yerel sanatçıların performansları, el sanatları sergileri, yöresel lezzetler ve çeşitli etkinlikler düzenlenecek.",
                details: "15-17 Mart tarihleri arasında gerçekleşecek festival, Çatalca Meydanı'nda yapılacak. Üç gün sürecek etkinlikte canlı müzik performansları, dans gösterileri ve çocuklar için özel aktiviteler yer alacak."
              },
              {
                image: "https://images.unsplash.com/photo-1579445710183-f9a816f5da05",
                category: "Tarih",
                date: "1 Mart 2024",
                title: "Anastasios Surlarında Yeni Keşif",
                description: "Arkeologlar, Anastasios Surlarında yeni bir bölüm keşfetti. Bulunan kalıntılar, bölgenin tarihine ışık tutuyor ve surların yapım tekniği hakkında yeni bilgiler sunuyor.",
                details: "Kazı çalışmaları sırasında bulunan seramik parçaları ve metal objeler, M.S. 5. yüzyıla ait. Buluntular, İstanbul Arkeoloji Müzesi'nde sergilenecek."
              },
              {
                image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
                category: "Çevre",
                date: "28 Şubat 2024",
                title: "Yeşil Çatalca Projesi Genişliyor",
                description: "Belediye, çevre dostu projelere yeni yatırımlar yapıyor. Güneş enerjisi santralleri ve geri dönüşüm tesisleri ile sürdürülebilir bir gelecek hedefleniyor.",
                details: "Proje kapsamında 5 yeni geri dönüşüm merkezi açılacak ve 10.000 ağaç dikilecek. Ayrıca, yenilenebilir enerji kullanımını teşvik etmek için vatandaşlara destek sağlanacak."
              }
            ].map((news, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "50px" }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48 sm:h-56">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-green-600">{news.category}</span>
                    <span className="text-sm text-gray-500">{news.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{news.description}</p>
                  <p className="text-sm text-gray-500 italic">{news.details}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="relative py-16 sm:py-20 bg-gray-50 isolate">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Çatalca Haritası</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              İnteraktif harita üzerinde gezilecek yerleri, restoranları ve etkinlikleri keşfedin
            </p>
          </motion.div>
          
          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden isolate p-1.5 bg-gradient-to-br from-green-500 via-green-400 to-green-600">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 animate-gradient"></div>
            <div className="relative bg-white rounded-lg overflow-hidden">
              <div className="absolute inset-0 pointer-events-none z-10">
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-white/10 to-transparent"></div>
                <div className="absolute inset-0 border-[12px] border-white/10 rounded-lg pointer-events-none"></div>
              </div>
              <div className="relative z-0">
                <InteractiveMap />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weather Widget */}
      <WeatherWidget />
    </main>
  );
}
