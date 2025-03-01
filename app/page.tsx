import Image from 'next/image';
import InteractiveMap from './components/InteractiveMap';
import WeatherWidget from './components/WeatherWidget';
import { FiMapPin, FiClock, FiCalendar, FiUsers, FiPhone, FiMail, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

export default function Home() {
  return (
    <main className="flex-grow">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/370467553.hd.mp4?s=ce49c8c6d8e28a89298ffb4c53a2e842bdb11546&profile_id=175&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/90 via-green-900/50 to-green-950/90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0),rgba(0,0,0,0.4))]"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <div className="animate-fadeIn max-w-6xl mx-auto w-full">
            <div className="text-center">
              <div className="inline-block mb-6 px-6 py-2 border-2 border-green-500/30 rounded-full bg-white/5 backdrop-blur-sm">
                <span className="text-green-400 font-medium tracking-wide">İstanbul&apos;un Tarihi Kapısı</span>
              </div>
              <h1 className="mb-8">
                <span className="block text-7xl md:text-8xl font-bold mb-2 tracking-tight leading-none animate-fade-in-up">
                  Çatalca&apos;ya
                </span>
                <span className="block text-6xl md:text-7xl font-light bg-gradient-to-r from-green-300 via-white to-green-300 bg-clip-text text-transparent animate-fade-in-up-delay">
                  Hoş Geldiniz
                </span>
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-green-500/50 via-green-400 to-green-500/50 mb-8 mx-auto rounded-full"></div>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-center leading-relaxed mb-12 font-light text-gray-200/90 animate-fade-in">
                Antik surlar, yeşil tepeler ve zengin kültürel mirasın<br className="hidden md:block" /> buluştuğu eşsiz bir deneyim
              </p>
            </div>
            
            {/* Quick Highlights */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-8 px-4">
              <div className="w-full sm:w-auto group flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <span className="text-2xl sm:text-3xl group-hover:scale-125 transition-transform duration-500">🏛️</span>
                <span className="text-sm sm:text-base font-medium">2000+ Yıllık Tarih</span>
              </div>
              <div className="w-full sm:w-auto group flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <span className="text-2xl sm:text-3xl group-hover:scale-125 transition-transform duration-500">🌳</span>
                <span className="text-sm sm:text-base font-medium">Doğal Güzellikler</span>
              </div>
              <div className="w-full sm:w-auto group flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <span className="text-2xl sm:text-3xl group-hover:scale-125 transition-transform duration-500">🎭</span>
                <span className="text-sm sm:text-base font-medium">Zengin Kültür</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 justify-center items-stretch sm:items-center max-w-xl mx-auto px-4">
              <a 
                href="/places" 
                className="group w-full sm:w-auto px-6 py-4 bg-gradient-to-r from-green-600 via-green-500 to-green-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-green-500/20 transition-all duration-500 hover:scale-[1.02] text-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <div className="flex flex-col items-center justify-center relative z-10">
                  <span className="flex items-center text-base font-semibold tracking-wide">
                    Keşfet
                    <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-500">→</span>
                  </span>
                  <span className="text-sm text-white/90 mt-1">50+ Tarihi Mekan</span>
                </div>
              </a>
              <a 
                href="/events" 
                className="group w-full sm:w-auto px-6 py-4 bg-white/10 text-white rounded-xl font-medium backdrop-blur-md transition-all duration-500 hover:scale-[1.02] border border-white/30 text-center relative overflow-hidden hover:bg-white/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <div className="flex flex-col items-center justify-center relative z-10">
                  <span className="flex items-center text-base font-semibold tracking-wide">
                    Etkinlikler
                    <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-500">→</span>
                  </span>
                  <span className="text-sm text-white/90 mt-1">Yıl Boyu Aktiviteler</span>
                </div>
              </a>
            </div>
          </div>

          {/* Floating Stats */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-5xl px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-600">Tarihi Mekan</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
                <div className="text-gray-600">Restoran</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">20+</div>
                <div className="text-gray-600">Otel</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">30+</div>
                <div className="text-gray-600">Etkinlik/Yıl</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Çatalca&apos;dan Haberler</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* News Card 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1589483232748-515c025575bc"
                  alt="Yerel Festival"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-sm text-green-600 font-medium">Kültür & Sanat</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-500">3 Mart 2024</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Bahar Festivali Hazırlıkları Başladı</h3>
                <p className="text-gray-600 mb-4">Çatalca Belediyesi, geleneksel bahar festivalinin hazırlıklarına başladı. Festival, yerel sanatçıların performansları ve el sanatları sergilerini içerecek.</p>
                <a href="#" className="text-green-600 font-medium hover:text-green-700 transition-colors">
                  Devamını Oku →
                </a>
              </div>
            </div>

            {/* News Card 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1579445710183-f9a816f5da05"
                  alt="Tarihi Keşif"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-sm text-green-600 font-medium">Tarih</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-500">1 Mart 2024</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Anastasios Surlarında Yeni Keşif</h3>
                <p className="text-gray-600 mb-4">Arkeologlar, Anastasios Surlarında yeni bir bölüm keşfetti. Bulunan kalıntılar, bölgenin tarihine ışık tutuyor.</p>
                <a href="#" className="text-green-600 font-medium hover:text-green-700 transition-colors">
                  Devamını Oku →
                </a>
              </div>
            </div>

            {/* News Card 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09"
                  alt="Çevre Projesi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-sm text-green-600 font-medium">Çevre</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-500">28 Şubat 2024</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Yeşil Çatalca Projesi Genişliyor</h3>
                <p className="text-gray-600 mb-4">Belediye, çevre dostu projelere yeni yatırımlar yapıyor. Güneş enerjisi ve geri dönüşüm tesisleri planlanıyor.</p>
                <a href="#" className="text-green-600 font-medium hover:text-green-700 transition-colors">
                  Devamını Oku →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center text-gray-900">Çatalca&apos;yı Keşfedin</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-64 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1533387520709-752d83de3630"
                  alt="Tarihi Yerler"
                  width={800}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-2">Tarihi Miras</h3>
                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  Anastasios Surları, Bizans kalıntıları ve Roma döneminden kalma İnceğiz Mağaraları&apos;nı keşfedin.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-64 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1439066615861-d1af74d74000"
                  alt="Doğal Güzellikler"
                  width={800}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-2">Doğal Güzellikler</h3>
                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  Durusu (Terkos) Gölü, Karadeniz kıyıları ve bölgenin ünlü ormanlarını keşfedin.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-64 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3"
                  alt="Yerel Kültür"
                  width={800}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-2">Yerel Kültür</h3>
                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  Geleneksel köy yaşamını deneyimleyin, yerel süt ürünlerinin tadına bakın ve festivallere katılın.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center text-gray-900">Öne Çıkanlar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-64 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8"
                  alt="Tarım"
                  width={800}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="text-green-600 font-medium">Yerel Ürünler</span>
                <h3 className="text-xl font-semibold mt-2 mb-3 text-gray-900">Tarım Mirası</h3>
                <p className="text-gray-600">
                  Ayçiçeği tarlaları, süt çiftlikleri ve organik ürünleriyle İstanbul&apos;un önemli tarım bölgelerinden biri.
                </p>
              </div>
            </div>
            
            <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-64 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1564507592333-c60657eea523"
                  alt="Bizans Mirası"
                  width={800}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="text-green-600 font-medium">Miras</span>
                <h3 className="text-xl font-semibold mt-2 mb-3 text-gray-900">Bizans Tarihi</h3>
                <p className="text-gray-600">
                  Konstantinopolis&apos;i korumak için inşa edilen 56 kilometrelik Anastasios Surları&apos;nın ev sahibi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weather and Map Section */}
      <section className="py-16 bg-gray-50 relative z-0">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Map and Area Guide Column */}
              <div className="lg:col-span-3 border-r border-gray-100">
                <div className="border-b border-gray-100">
                  <h3 className="text-2xl font-semibold p-6 text-gray-900 flex items-center gap-3">
                    <span className="text-green-600">📍</span>
                    Çatalca Haritası
                  </h3>
                </div>
                <div className="p-6">
                  <div className="relative rounded-xl overflow-hidden bg-white shadow-lg">
                    {/* Map Frame */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent pointer-events-none z-10"></div>
                    <div className="relative z-0 h-[550px]">
                      <div className="absolute inset-0">
                        <InteractiveMap />
                      </div>
                    </div>
                    
                    {/* Map Overlay Elements */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md z-20 border border-gray-100">
                      <p className="text-sm font-medium text-gray-700">Çatalca, İstanbul</p>
                    </div>
                    
                    {/* Bottom Gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/20 to-transparent pointer-events-none z-10"></div>
                    
                    {/* Map Controls Frame */}
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-md z-20 border border-gray-100">
                      <div className="flex flex-col gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Area Guide */}
                <div className="border-t border-gray-100">
                  <h3 className="text-2xl font-semibold p-6 text-gray-900">Bölge Rehberi</h3>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-4">
                        <div className="flex items-start gap-4 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                          <span className="text-4xl">🏛️</span>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Tarihi Bölgeler</h4>
                            <ul className="text-sm text-gray-600 space-y-2">
                              <li>• Anastasios Surları</li>
                              <li>• İnceğiz Mağaraları</li>
                              <li>• Kaleiçi Mahallesi</li>
                            </ul>
                          </div>
                        </div>
                        <div className="flex items-start gap-4 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                          <span className="text-4xl">🌊</span>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Doğal Alanlar</h4>
                            <ul className="text-sm text-gray-600 space-y-2">
                              <li>• Durusu (Terkos) Gölü</li>
                              <li>• Çatalca Ormanları</li>
                              <li>• Karadeniz Kıyısı</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                          <span className="text-4xl">🏘️</span>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Köyler</h4>
                            <ul className="text-sm text-gray-600 space-y-2">
                              <li>• Belgrat Köyü</li>
                              <li>• İnceğiz Köyü</li>
                              <li>• Durusu Köyü</li>
                            </ul>
                          </div>
                        </div>
                        <div className="flex items-start gap-4 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                          <span className="text-4xl">🚗</span>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Ulaşım</h4>
                            <ul className="text-sm text-gray-600 space-y-2">
                              <li>• İstanbul merkeze 60 km</li>
                              <li>• Düzenli otobüs seferleri</li>
                              <li>• E6 karayolu bağlantısı</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Weather and Info Column */}
              <div className="lg:col-span-2">
                <div className="border-b border-gray-100">
                  <h4 className="text-2xl font-semibold p-6 text-gray-900">Mevsimsel Öneriler</h4>
                </div>
                <div className="p-8 space-y-8">
                  {/* Weather Widget */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Hava Durumu</h3>
                    <WeatherWidget />
                  </div>

                  {/* Seasonal Cards */}
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-green-50/50 hover:bg-green-50 transition-colors">
                      <span className="text-4xl">🌸</span>
                      <div>
                        <p className="font-semibold text-gray-900 mb-2">İlkbahar</p>
                        <p className="text-sm text-gray-600">Bahar festivalleri ve doğa yürüyüşleri için ideal</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-yellow-50/50 hover:bg-yellow-50 transition-colors">
                      <span className="text-4xl">☀️</span>
                      <div>
                        <p className="font-semibold text-gray-900 mb-2">Yaz</p>
                        <p className="text-sm text-gray-600">Sahil aktiviteleri ve köy pazarları</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-orange-50/50 hover:bg-orange-50 transition-colors">
                      <span className="text-4xl">🍂</span>
                      <div>
                        <p className="font-semibold text-gray-900 mb-2">Sonbahar</p>
                        <p className="text-sm text-gray-600">Fotoğrafçılık ve tarih turları için en iyi zaman</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-blue-50/50 hover:bg-blue-50 transition-colors">
                      <span className="text-4xl">❄️</span>
                      <div>
                        <p className="font-semibold text-gray-900 mb-2">Kış</p>
                        <p className="text-sm text-gray-600">Kış sporları ve sıcak köy kahvaltıları</p>
                      </div>
                    </div>
                  </div>

                  {/* Air Quality Section */}
                  <div className="pt-8 border-t border-gray-100">
                    <h4 className="text-lg font-semibold text-gray-900 mb-6">Hava Kalitesi</h4>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between mb-8 p-6 bg-green-50 rounded-lg">
                        <span className="text-gray-700 font-medium">Hava Kalitesi İndeksi</span>
                        <span className="px-6 py-2 bg-green-500 text-white rounded-full text-sm font-medium">İyi</span>
                      </div>
                      <div className="space-y-6">
                        <div className="flex justify-between items-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-gray-700">PM2.5</span>
                          </div>
                          <span className="font-medium text-gray-900">12 µg/m³</span>
                        </div>
                        <div className="flex justify-between items-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-gray-700">PM10</span>
                          </div>
                          <span className="font-medium text-gray-900">25 µg/m³</span>
                        </div>
                        <div className="flex justify-between items-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-gray-700">O₃</span>
                          </div>
                          <span className="font-medium text-gray-900">48 µg/m³</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-4 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <FiMapPin className="w-8 h-8 text-green-600" />
              <div>
                <h4 className="font-semibold text-gray-900">Konum</h4>
                <p className="text-sm text-gray-600">İstanbul, Türkiye</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <FiClock className="w-8 h-8 text-green-600" />
              <div>
                <h4 className="font-semibold text-gray-900">En İyi Zaman</h4>
                <p className="text-sm text-gray-600">Nisan - Ekim</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <FiCalendar className="w-8 h-8 text-green-600" />
              <div>
                <h4 className="font-semibold text-gray-900">Etkinlikler</h4>
                <p className="text-sm text-gray-600">Yıl Boyunca</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <FiUsers className="w-8 h-8 text-green-600" />
              <div>
                <h4 className="font-semibold text-gray-900">Ziyaretçi Profili</h4>
                <p className="text-sm text-gray-600">Tüm Yaş Grupları</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Haberdar Olun</h2>
          <p className="mb-8 text-gray-300">Çatalca&apos;daki etkinlikler, festivaller ve yerel haberler için bültene abone olun.</p>
          
          <form className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-2 rounded-lg bg-white text-gray-900 border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500 outline-none placeholder-gray-500"
                required
              />
              <button
                type="submit"
                className="group bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-all duration-300 hover:scale-105"
              >
                Abone Ol
                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Çatalca Gezi Rehberi</h3>
              <p className="text-gray-400 leading-relaxed">
                2000 yıllık tarihi, eşsiz doğası ve zengin kültürüyle İstanbul&apos;un saklı hazinesi. Yerel lezzetleri, festivalleri ve misafirperver insanlarıyla keşfedilmeyi bekliyor.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Hızlı Bağlantılar</h4>
              <ul className="space-y-4">
                <li>
                  <a href="/places" className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-green-500 rounded-full group-hover:w-2 transition-all"></span>
                    Gezilecek Yerler
                  </a>
                </li>
                <li>
                  <a href="/restaurants" className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-green-500 rounded-full group-hover:w-2 transition-all"></span>
                    Restoranlar
                  </a>
                </li>
                <li>
                  <a href="/hotels" className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-green-500 rounded-full group-hover:w-2 transition-all"></span>
                    Oteller
                  </a>
                </li>
                <li>
                  <a href="/events" className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-green-500 rounded-full group-hover:w-2 transition-all"></span>
                    Etkinlikler
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">İletişim</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-400">
                  <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center">
                    <FiMapPin className="w-4 h-4 text-green-400" />
                  </div>
                  <span>Çatalca, İstanbul</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center">
                    <FiPhone className="w-4 h-4 text-green-400" />
                  </div>
                  <span>0212-XXX-XXXX</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center">
                    <FiMail className="w-4 h-4 text-green-400" />
                  </div>
                  <span>info@catalca.gov.tr</span>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Sosyal Medya</h4>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-green-600 transition-colors"
                  aria-label="Facebook"
                >
                  <FiFacebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-green-600 transition-colors"
                  aria-label="Twitter"
                >
                  <FiTwitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-green-600 transition-colors"
                  aria-label="Instagram"
                >
                  <FiInstagram className="w-5 h-5" />
                </a>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-800">
                <p className="text-sm text-gray-500">
                  © 2024 Çatalca Rehberi. Tüm hakları saklıdır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
