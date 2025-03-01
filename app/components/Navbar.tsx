'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          <Link href="/" className="flex items-center space-x-4">
            <div className="relative w-20 h-20">
              {/* Outer circle with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700 rounded-full shadow-lg"></div>
              
              {/* Inner white circle */}
              <div className="absolute inset-[3px] bg-white rounded-full overflow-hidden">
                {/* Artistic Ç letter */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-14 h-14">
                    {/* Main C shape using multiple elements */}
                    <div className="absolute right-0 top-1/2 w-10 h-10 border-r-[4px] border-green-600 rounded-r-full transform -translate-y-1/2"></div>
                    <div className="absolute left-2 top-0 w-8 h-8 border-t-[4px] border-green-600 rounded-tl-full"></div>
                    <div className="absolute left-2 bottom-0 w-8 h-8 border-b-[4px] border-green-600 rounded-bl-full"></div>
                    
                    {/* Cedilla */}
                    <div className="absolute bottom-[-4px] left-1/2 w-4 h-4 transform -translate-x-1/2">
                      <div className="w-3 h-3 border-r-[4px] border-b-[4px] border-green-600 rounded-br-full transform rotate-[-10deg]"></div>
                    </div>

                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 to-transparent rounded-full transform rotate-45"></div>
                  </div>
                </div>

                {/* Background decorative elements */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-50"></div>
                  <div className="absolute top-1 right-1 w-3 h-3 bg-green-200/30 rounded-full blur-sm"></div>
                  <div className="absolute bottom-2 left-2 w-2 h-2 bg-green-200/30 rounded-full blur-sm"></div>
                </div>
              </div>

              {/* Outer decorative dots */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[2px] w-1.5 h-1.5 bg-green-400 rounded-full shadow-sm"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[2px] w-1.5 h-1.5 bg-green-400 rounded-full shadow-sm"></div>
              <div className="absolute left-0 top-1/2 -translate-x-[2px] -translate-y-1/2 w-1.5 h-1.5 bg-green-400 rounded-full shadow-sm"></div>
              <div className="absolute right-0 top-1/2 translate-x-[2px] -translate-y-1/2 w-1.5 h-1.5 bg-green-400 rounded-full shadow-sm"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-gray-900 tracking-wide">Çatalca</span>
              <span className="text-2xl text-green-600 font-semibold tracking-wider">Rehberi</span>
            </div>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
          >
            {isMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/places" className="text-gray-700 hover:text-green-600 transition-colors text-lg">
              Gezilecek Yerler
            </Link>
            <Link href="/restaurants" className="text-gray-700 hover:text-green-600 transition-colors text-lg">
              Restoranlar
            </Link>
            <Link href="/hotels" className="text-gray-700 hover:text-green-600 transition-colors text-lg">
              Oteller
            </Link>
            <Link href="/events" className="text-gray-700 hover:text-green-600 transition-colors text-lg">
              Etkinlikler
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors text-lg">
              İletişim
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:hidden absolute left-0 right-0 bg-white border-b border-gray-200 px-4 pt-2 pb-4 shadow-lg`}
        >
          <div className="flex flex-col space-y-4">
            <Link
              href="/places"
              className="text-gray-700 hover:text-green-600 transition-colors py-2 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Gezilecek Yerler
            </Link>
            <Link
              href="/restaurants"
              className="text-gray-700 hover:text-green-600 transition-colors py-2 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Restoranlar
            </Link>
            <Link
              href="/hotels"
              className="text-gray-700 hover:text-green-600 transition-colors py-2 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Oteller
            </Link>
            <Link
              href="/events"
              className="text-gray-700 hover:text-green-600 transition-colors py-2 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Etkinlikler
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-green-600 transition-colors py-2 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              İletişim
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 