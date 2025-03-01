'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center py-20 bg-gradient-to-b from-green-50 to-white"
    >
      <motion.h1 
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Welcome to Çatalca
      </motion.h1>
      <motion.p 
        className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
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
        <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors">
          Explore Now
        </button>
      </motion.div>
    </motion.section>
  );
} 