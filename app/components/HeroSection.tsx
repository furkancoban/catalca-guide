'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center py-12 md:py-20 bg-gradient-to-b from-green-50 to-white px-4"
    >
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.h1 
          className="text-3xl md:text-5xl font-bold mb-2 md:mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Çatalca Rehberi
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-gray-600 mb-4 md:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          İstanbul&apos;un Tarihi Kapısı
        </motion.p>
        <motion.p 
          className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Discover the hidden gem of Istanbul&apos;s countryside, where history meets nature
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button className="bg-green-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-green-700 transition-colors text-sm md:text-base">
            Explore Now
          </button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
} 