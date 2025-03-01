'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import PlaceholderImage from './PlaceholderImage';

interface ImageType {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: ImageType[];
  interval?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  const preloadImage = (src: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (loadedImages.has(src)) {
        resolve(src);
      } else {
        const img = new window.Image();
        img.src = src;
        img.onload = () => {
          setLoadedImages(prev => {
            const newSet = new Set(prev);
            newSet.add(src);
            return newSet;
          });
          resolve(src);
        };
        img.onerror = reject;
      }
    });
  };

  useEffect(() => {
    // Preload all images
    Promise.all(images.map(img => preloadImage(img.src))).catch(console.error);

    // Set up the interval for auto-sliding
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToSlide((currentIndex + 1) % images.length);
    } else if (isRightSwipe) {
      goToSlide((currentIndex - 1 + images.length) % images.length);
    }
  };

  if (images.length === 0) {
    return (
      <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
        <PlaceholderImage />
      </div>
    );
  }

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <div
            className="relative w-full h-full"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {images.map((image, index) => (
              <div
                key={image.src}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {failedImages.has(image.src) ? (
                  <PlaceholderImage />
                ) : (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index === currentIndex}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                    onError={() => setFailedImages(prev => new Set([...prev, image.src]))}
                  />
                )}
              </div>
            ))}
          </div>
          {images.length > 1 && (
            <>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-white scale-125'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => goToSlide((currentIndex - 1 + images.length) % images.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300"
                aria-label="Previous slide"
              >
                ←
              </button>
              <button
                onClick={() => goToSlide((currentIndex + 1) % images.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300"
                aria-label="Next slide"
              >
                →
              </button>
              <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                {currentIndex + 1} / {images.length}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ImageCarousel; 