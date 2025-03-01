import React from 'react';

interface MapButtonsProps {
  name: string;
  location: string;
}

export default function MapButtons({ name, location }: MapButtonsProps) {
  const searchQuery = encodeURIComponent(`${name} ${location} Çatalca, İstanbul`);
  
  return (
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100">
      <div className="grid grid-cols-2 gap-3">
        <a
          href={`https://www.google.com/maps/search/${searchQuery}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-b from-white to-gray-50 
          border border-gray-200 rounded-xl text-gray-700 hover:border-green-300 hover:shadow-md 
          transition-all duration-200 ease-in-out h-10"
        >
          <svg className="w-5 h-5 flex-shrink-0 transition-transform group-hover:scale-110 duration-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C7.589 2 4 5.589 4 10C4 14.411 7.589 18 12 18C16.411 18 20 14.411 20 10C20 5.589 16.411 2 12 2Z" fill="#34A853"/>
            <path d="M12 2V18C16.411 18 20 14.411 20 10C20 5.589 16.411 2 12 2Z" fill="#4285F4"/>
            <path d="M12 2C7.589 2 4 5.589 4 10C4 14.411 7.589 18 12 18V2Z" fill="#FBBC05"/>
            <path d="M12 7V13L16 10L12 7Z" fill="white"/>
          </svg>
          <span className="font-medium text-sm whitespace-nowrap group-hover:text-green-600 transition-colors">
            Google Maps
          </span>
        </a>
        <a
          href={`https://yandex.com.tr/harita/?text=${searchQuery}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-b from-white to-gray-50 
          border border-gray-200 rounded-xl text-gray-700 hover:border-red-300 hover:shadow-md 
          transition-all duration-200 ease-in-out h-10"
        >
          <svg className="w-5 h-5 flex-shrink-0 transition-transform group-hover:scale-110 duration-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#FC3F1D"/>
            <path d="M13.8 7H12.4L11.1 9.7L9.8 7H8.3L10.3 10.8L8.1 15H9.5L11 12L12.5 15H14L11.8 10.8L13.8 7Z" fill="white"/>
          </svg>
          <span className="font-medium text-sm whitespace-nowrap group-hover:text-red-600 transition-colors">
            Yandex Harita
          </span>
        </a>
      </div>
    </div>
  );
} 