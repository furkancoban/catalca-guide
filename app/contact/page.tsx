'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
    <main className="flex-grow bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[300px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e"
          alt="İletişim"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">İletişim</h1>
            <p className="text-xl">Bizimle İletişime Geçin</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">İletişim Bilgileri</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FaPhone className="text-2xl text-blue-600" />
                <div>
                  <h3 className="font-medium text-gray-900">Telefon</h3>
                  <p className="text-gray-600">(0212) XXX XX XX</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-2xl text-blue-600" />
                <div>
                  <h3 className="font-medium text-gray-900">E-posta</h3>
                  <p className="text-gray-600">info@catalca-guide.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-2xl text-blue-600" />
                <div>
                  <h3 className="font-medium text-gray-900">Adres</h3>
                  <p className="text-gray-600">Çatalca, İstanbul</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Bize Ulaşın</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  İsim
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Konu
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                Gönder
              </button>
            </form>
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