import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Palette, Zap, Truck } from 'lucide-react';
import Hero1 from '@/assets/Hero1.png';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  tagline: string;
  image: string;
  bgGradient: string;
}

const Hero = () => {
  const slides: Slide[] = [
    {
      id: 1,
      title: 'TIRAA',
      subtitle: "SPRING SUMMER'25",
      tagline: 'New Collection',
      image: Hero1,
      bgGradient: 'linear-gradient(135deg, #2d5016 0%, #3d6b1f 100%)',
    },
    {
      id: 2,
      title: 'TRADITION',
      subtitle: 'MEETS ELEGANCE',
      tagline: 'Discover Craftsmanship',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&h=600&fit=crop',
      bgGradient: 'linear-gradient(135deg, #2d5016 0%, #4a7c2c 100%)',
    },
    {
      id: 3,
      title: 'EXQUISITE',
      subtitle: 'COLLECTIONS',
      tagline: 'Experience Luxury',
      image: 'https://images.unsplash.com/photo-1580162082835-d4f5f2a4e46d?w=1200&h=600&fit=crop',
      bgGradient: 'linear-gradient(135deg, #2d5016 0%, #5a8f3a 100%)',
    },
  ];

  const features = [
    {
      icon: Palette,
      title: 'FREE Customizations',
      description: 'Personalize your collection',
    },
    {
      icon: Zap,
      title: 'Limited Stock Available',
      description: 'Exclusive pieces waiting for you',
    },
    {
      icon: Truck,
      title: 'Fast & Secure Shipping',
      description: 'Delivered with care',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Auto-play carousel
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [autoPlay, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAutoPlay(false);
    setImageLoaded(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoPlay(false);
    setImageLoaded(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoPlay(false);
    setImageLoaded(false);
  };

  const slide = slides[currentSlide];

  return (
    <div className="w-full bg-white">
      {/* Carousel Container */}
      <div className="px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        <div
          className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-xl shadow-lg"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          {/* Full Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover transition-opacity duration-700 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse" />
            )}
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Text Content - Center */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-2 md:mb-4 tracking-widest drop-shadow-lg">
              {slide.title}
            </h2>
            <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-white mb-3 md:mb-4 font-light tracking-wide drop-shadow">
              {slide.subtitle}
            </p>
            <div className="w-12 sm:w-16 h-px bg-white/70 mx-auto mb-3 md:mb-4"></div>
            <p className="text-white font-light italic text-xs sm:text-sm md:text-base lg:text-lg tracking-wide drop-shadow">
              {slide.tagline}
            </p>
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/60 text-white p-2 md:p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} className="md:w-6 md:h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/60 text-white p-2 md:p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight size={20} className="md:w-6 md:h-6" />
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:gap-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentSlide
                    ? 'bg-white w-6 md:w-8 h-2 md:h-3'
                    : 'bg-white/50 hover:bg-white/70 w-2 md:w-3 h-2 md:h-3'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 border-t ">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 py-6 md:py-10">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group flex flex-col items-center text-center p-4 bg-white border border-transparent transition-all duration-300 hover:scale-105"
                >
                  <div className="mb-3 p-2.5  transition-colors duration-300">
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-indigo-600 group-hover:text-indigo-700 transition-colors" />
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-1.5 line-clamp-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;