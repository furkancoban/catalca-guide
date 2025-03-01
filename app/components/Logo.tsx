import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <Link href="/">
      <motion.div
        className="flex items-center gap-2 group"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="relative">
          <svg
            width="48"
            height="48"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transform group-hover:rotate-12 transition-transform duration-300"
          >
            {/* Stylized Tree */}
            <path
              d="M20 5L30 25H10L20 5Z"
              className="fill-green-600"
            />
            {/* Ground/Hills */}
            <path
              d="M5 30C5 30 10 25 20 25C30 25 35 30 35 30C35 30 30 35 20 35C10 35 5 30 5 30Z"
              className="fill-green-700"
            />
            {/* Sun */}
            <circle
              cx="20"
              cy="15"
              r="3"
              className="fill-yellow-400"
            />
          </svg>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-700 tracking-tight leading-none font-['Cormorant_Garamond']">
            Çatalca
          </span>
          <span className="text-lg md:text-xl text-green-700 font-bold tracking-wider leading-tight -mt-0.5 font-['Cormorant_Garamond']">
            Rehberi
          </span>
        </div>
      </motion.div>
    </Link>
  );
} 