'use client';

import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiClock, FiChevronDown } from 'react-icons/fi';

interface FAQ {
  question: string;
  answer: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  const faqs: FAQ[] = [
    {
      question: "Çatalca'ya nasıl ulaşabilirim?",
      answer: "İstanbul'dan düzenli otobüs ve minibüs seferleri bulunmaktadır. Ayrıca özel araçla E-80 karayolu üzerinden kolayca ulaşabilirsiniz. Metrobüs ile Beylikdüzü'ne ulaştıktan sonra buradan Çatalca minibüslerine binebilirsiniz."
    },
    {
      question: "En yakın hastane nerede?",
      answer: "Çatalca Devlet Hastanesi şehir merkezinde yer almaktadır ve 24 saat hizmet vermektedir. Hastane modern tıbbi ekipmanlarla donatılmış olup, acil servis hizmeti de sunmaktadır."
    },
    {
      question: "Belediye ile nasıl iletişime geçebilirim?",
      answer: "Belediye ile 0212-XXX-XXXX numaralı telefondan, resmi web sitesi üzerinden veya sosyal medya hesaplarından iletişime geçebilirsiniz. Ayrıca Çatalca Belediyesi mobil uygulaması üzerinden de talep ve önerilerinizi iletebilirsiniz."
    },
    {
      question: "Ziyaret için en uygun mevsim hangisi?",
      answer: "Çatalca'yı ilkbahar ve sonbahar aylarında ziyaret etmenizi öneririz. Bu dönemlerde hava ılıman ve doğa en güzel halindedir. Özellikle Nisan-Mayıs ve Eylül-Ekim ayları ideal ziyaret zamanlarıdır."
    },
    {
      question: "Çatalca'da görülmesi gereken yerler nerelerdir?",
      answer: "Çatalca'da görülmesi gereken başlıca yerler: İnceğiz Mağaraları, Anastasios Surları, Çatalca Kalesi, Ferhatpaşa Çiftliği, Yarımburgaz Mağarası, Balaban Kalesi ve tarihi Çatalca evleridir. Ayrıca bölgedeki göller ve mesire alanları da ziyaret edilmeye değerdir."
    },
    {
      question: "Çatalca'da nerede konaklayabilirim?",
      answer: "Çatalca'da çeşitli konaklama seçenekleri mevcuttur. Şehir merkezinde bulunan oteller, pansiyonlar ve butik otellerin yanı sıra, doğayla iç içe olmak isteyenler için bungalov evler ve kamp alanları bulunmaktadır."
    },
    {
      question: "Çatalca'nın meşhur yemekleri nelerdir?",
      answer: "Çatalca'nın meşhur yemekleri arasında ev yapımı mantı, Çatalca köftesi, keşkek, ev yapımı erişte, kabak çiçeği dolması ve yöresel tatlılar yer alır. Ayrıca bölgede üretilen organik ürünler ve bal da oldukça meşhurdur."
    },
    {
      question: "Toplu taşıma imkanları nasıl?",
      answer: "Çatalca içinde düzenli minibüs ve otobüs seferleri bulunmaktadır. İstanbul'un diğer ilçelerine ve merkeze düzenli ulaşım imkanı vardır. Ayrıca şehir içi ring seferleri de mevcuttur."
    },
    {
      question: "Çatalca'da hangi festivaller düzenleniyor?",
      answer: "Çatalca'da yıl boyunca çeşitli festivaller düzenlenir. Bunlar arasında Erguvan Festivali, Çatalca Kültür ve Sanat Festivali, Yayla Şenlikleri ve Kiraz Festivali en önemlileridir. Bu festivallerde yöresel ürünler, el sanatları ve kültürel etkinlikler sergilenir."
    },
    {
      question: "Çatalca'da spor aktiviteleri var mı?",
      answer: "Çatalca'da çeşitli spor tesisleri bulunmaktadır. Kapalı spor salonu, yüzme havuzu, futbol sahaları ve fitness merkezleri mevcuttur. Ayrıca doğa yürüyüşü, bisiklet ve at binme gibi outdoor aktiviteler için ideal rotalar bulunmaktadır."
    }
  ];

  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">İletişime Geçin</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Sorularınız, önerileriniz veya geri bildirimleriniz için bizimle iletişime geçebilirsiniz.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 -mt-16">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <FiPhone className="w-8 h-8 text-white stroke-[1.5]" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Telefon</h3>
              <p className="text-gray-700 text-lg hover:text-green-600 transition-colors duration-200">0212-XXX-XXXX</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <FiMail className="w-8 h-8 text-white stroke-[1.5]" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3 text-gray-900">E-posta</h3>
              <p className="text-gray-700 text-lg hover:text-green-600 transition-colors duration-200">info@catalca.gov.tr</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <FiMapPin className="w-8 h-8 text-white stroke-[1.5]" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Adres</h3>
              <p className="text-gray-700 text-lg hover:text-green-600 transition-colors duration-200">Çatalca Belediyesi, İstanbul</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <FiClock className="w-8 h-8 text-white stroke-[1.5]" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Çalışma Saatleri</h3>
              <p className="text-gray-700 text-lg hover:text-green-600 transition-colors duration-200">Pzt - Cuma: 09:00 - 17:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Mesaj Gönderin</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    İsim Soyisim
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Konu
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                Gönder
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Konum</h2>
            <div className="aspect-square w-full bg-gray-100 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48239.80759099542!2d28.413650899999998!3d41.143889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b553bd3295cf8d%3A0x5dbbd3858f9bdf0f!2zw4dhdGFsY2EsIMSwc3RhbmJ1bA!5e0!3m2!1str!2str!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Sık Sorulan Sorular</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
                onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <FiChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    activeAccordion === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {activeAccordion === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
} 