'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GiCastle, GiPineTree } from 'react-icons/gi';

interface LogoProps {
  isScrolled?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isScrolled = false }) => {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <motion.div
        className={`relative w-12 h-12 flex items-center justify-center transform-gpu overflow-hidden rounded-xl ${
          isScrolled 
            ? 'shadow-sm' 
            : 'shadow-lg shadow-black/10 backdrop-blur-sm'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Background */}
        <div className={`absolute inset-0 transition-colors duration-300 ${
          isScrolled 
            ? 'bg-gradient-to-br from-green-500 to-green-600' 
            : 'bg-gradient-to-br from-green-500/95 to-green-600/95'
        }`} />

        {/* Icons Layer */}
        <div className="relative z-10 flex items-center justify-center gap-1">
          <GiCastle className={`text-3xl transition-all duration-300 transform group-hover:-translate-x-0.5 ${
            isScrolled ? 'text-white' : 'text-white'
          }`} />
          <GiPineTree className={`text-3xl transition-all duration-300 transform group-hover:translate-x-0.5 ${
            isScrolled ? 'text-white' : 'text-white'
          }`} />
        </div>

        {/* Decorative Line */}
        <div className={`absolute bottom-2 left-2 right-2 h-0.5 transition-colors duration-300 ${
          isScrolled ? 'bg-green-400' : 'bg-white/40'
        }`} />
      </motion.div>

      {/* Text */}
      <div className="flex flex-col">
        <span
          className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
            isScrolled ? 'text-gray-800' : 'text-gray-800 drop-shadow-[0_2px_2px_rgba(255,255,255,0.3)]'
          }`}
        >
          Çatalca
        </span>
        <span
          className={`text-xs font-medium transition-colors duration-300 ${
            isScrolled ? 'text-green-700' : 'text-gray-700 drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]'
          }`}
        >
          Tarih ve Doğa
        </span>
      </div>
    </Link>
  );
};

export default Logo; 