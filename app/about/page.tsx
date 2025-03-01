'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLandmark, FaSchool, FaBook, FaMosque, FaChurch, FaNewspaper, FaRocket } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';

export default function About() {
  return (
    <main className="flex-grow bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[300px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1572867141214-88ae6f3c7fb9"
          alt="Çatalca Hakkında"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hakkında</h1>
            <p className="text-xl">Çatalca&apos;yı Keşfedin</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">Çatalca&apos;nın Tarihi</h2>
          <div className="space-y-6 text-gray-700">
            <p>
              Çatalca, İstanbul&apos;un en büyük ilçelerinden biri olup, zengin tarihi ve kültürel mirası ile öne çıkmaktadır. 
              Bizans ve Osmanlı dönemlerinden kalma eserleriyle tarih tutkunlarının ilgisini çekmektedir.
            </p>
            <p>
              Bölge, stratejik konumu nedeniyle tarih boyunca önemli bir yerleşim merkezi olmuştur. 
              Anastasios Surları gibi önemli tarihi yapılar, bölgenin geçmişteki önemini göstermektedir.
            </p>
            <p>
              Günümüzde Çatalca, doğal güzellikleri, plajları, gölleri ve ormanlarıyla 
              İstanbul&apos;un önemli turizm merkezlerinden biri haline gelmiştir.
            </p>
          </div>

          <h2 className="text-3xl font-semibold my-8 text-gray-900">Coğrafi Konum</h2>
          <div className="space-y-6 text-gray-700">
            <p>
              Çatalca, İstanbul&apos;un Avrupa yakasında, Karadeniz ve Marmara Denizi arasında yer almaktadır. 
              Bu benzersiz konum, bölgeye hem iklimsel hem de ekolojik açıdan zenginlik katmaktadır.
            </p>
            <p>
              İlçe sınırları içerisinde bulunan Durusu Gölü, Karaburun Plajı ve geniş orman alanları, 
              bölgenin doğal güzelliklerini oluşturmaktadır.
            </p>
          </div>

          <h2 className="text-3xl font-semibold my-8 text-gray-900">Kültür ve Yaşam</h2>
          <div className="space-y-6 text-gray-700">
            <p>
              Çatalca&apos;nın zengin kültürel yapısı, yöresel festivaller, el sanatları ve geleneksel etkinliklerle yaşatılmaktadır. 
              Yerel halkın misafirperverliği ve zengin mutfak kültürü, ziyaretçilere unutulmaz deneyimler sunmaktadır.
            </p>
            <p>
              Bölgede düzenlenen kültürel etkinlikler ve festivaller, hem yerel halkın hem de 
              ziyaretçilerin bir araya gelmesine vesile olmaktadır.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 