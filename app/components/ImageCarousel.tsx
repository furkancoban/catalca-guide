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

export default function ImageCarousel({ images, interval = 5000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    const preloadImages = async () => {
      try {
        setIsLoading(true);
        setFailedImages(new Set());

        const results = await Promise.allSettled(
          images.map((image) => {
            return new Promise<string>((resolve, reject) => {
              if (loadedImages.has(image.src)) {
                resolve(image.src);
                return;
              }

              const img = document.createElement('img');
              img.src = image.src;

              img.onload = () => {
                setLoadedImages(prev => new Set([...prev, image.src]));
                resolve(image.src);
              };

              img.onerror = () => {
                setFailedImages(prev => new Set([...prev, image.src]));
                reject(new Error(`Failed to load image: ${image.src}`));
              };
            });
          })
        );

        // Log any failures
        results.forEach((result, index) => {
          if (result.status === 'rejected') {
            console.error(`Failed to load image ${images[index].src}:`, result.reason);
          }
        });

        // If all images failed, throw an error
        const allFailed = results.every(result => result.status === 'rejected');
        if (allFailed) {
          throw new Error('All images failed to load');
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error('Error preloading images:', error.message);
        } else {
          console.error('Error preloading images:', error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    preloadImages();
  }, [images, loadedImages]);

  useEffect(() => {
    if (!isLoading && images.length > 0) {
      const timer = setInterval(() => {
        nextImage();
      }, interval);

      return () => clearInterval(timer);
    }
  }, [currentIndex, interval, isLoading, images.length]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
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
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
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
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 transition-colors"
                onClick={prevImage}
                aria-label="Previous image"
              >
                ←
              </button>
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 transition-colors"
                onClick={nextImage}
                aria-label="Next image"
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
} 