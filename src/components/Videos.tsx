import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Volume2, VolumeX } from 'lucide-react';
import Video3 from '@/assets/Video3.mp4';
import Video2 from  '@/assets/Video2.mp4';
import Video1 from '@/assets/Video1.mp4';
import Video4 from '@/assets/Video4.mp4';
import Video5 from '@/assets/Video5.mp4';
import Video6 from '@/assets/Video6.mp4';
import Video7 from '@/assets/Video7.mp4';
import Video8 from '@/assets/Video8.mp4';
import Video9 from '@/assets/Video9.mp4';



export default function TrendingVideos() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const expandedVideoRef = useRef(null);

  // Sample video data - replace with your actual video URLs
  const videos = [
    {
      id: 1,
      thumbnail: 'https://images.unsplash.com/photo-1595777707802-52b71f3c104f?w=400&h=600&fit=crop',
      video: Video3,
    
    },
    {
      id: 2,
      thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=600&fit=crop',
      video: Video2,
    
    },
    {
      id: 3,
      thumbnail: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=600&fit=crop',
      video: Video1 ,
     
    },
    {
      id: 4,
      thumbnail: 'https://images.unsplash.com/photo-1515602885666-61d8b19b9f38?w=400&h=600&fit=crop',
      video: Video4 ,
      
    },
    
    {
      id: 5,
      thumbnail: 'https://images.unsplash.com/photo-1520591026534-40a2a841d539?w=400&h=600&fit=crop',
      video: Video5,

    },
    {
      id: 6,
      thumbnail: 'https://images.unsplash.com/photo-1520591026534-40a2a841d539?w=400&h=600&fit=crop',
      video: Video6,

    },
    {
      id: 7,
      thumbnail: 'https://images.unsplash.com/photo-1520591026534-40a2a841d539?w=400&h=600&fit=crop',
      video: Video7,

    },
    {
      id: 8,
      thumbnail: 'https://images.unsplash.com/photo-1520591026534-40a2a841d539?w=400&h=600&fit=crop',
      video: Video8,

    },
    {
      id: 9,
      thumbnail: 'https://images.unsplash.com/photo-1520591026534-40a2a841d539?w=400&h=600&fit=crop',
      video: Video9,

    }
  ];

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 320;
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        setCurrentIndex(Math.max(0, currentIndex - 1));
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        setCurrentIndex(Math.min(videos.length - 1, currentIndex + 1));
      }
    }
  };

  useEffect(() => {
    const videoElement = expandedVideoRef.current;
    if (videoElement) {
      videoElement.muted = isMuted;
      videoElement.play().catch(() => {
        // Autoplay was prevented
      });
    }
  }, [isMuted, selectedVideo]);

  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 text-center">
            See What's Trending
          </h1>
        </div>

        {/* Videos Carousel */}
        <div className="relative group">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-12 z-10 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 md:opacity-100"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          {/* Video Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {videos.map((video) => (
              <div
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                className="flex-shrink-0 w-72 h-96 md:w-80 md:h-[450px] cursor-pointer group/card transform transition-all duration-300 hover:scale-105"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">


                  {/* Video Element */}
                  <video
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                    src={video.video}
                  />

                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    {/* <p className="text-white font-medium text-sm">{video.title}</p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-12 z-10 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 md:opacity-100"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {videos.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-gray-900 w-8' : 'bg-gray-300 w-2'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Expanded Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 z-50 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-all duration-300 text-white"
              aria-label="Close video"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Video Player */}
            <div className="relative bg-black rounded-2xl overflow-hidden">
              <video
                ref={expandedVideoRef}
                src={selectedVideo.video}
                autoPlay
                loop
                muted={isMuted}
                className="w-full h-auto max-h-96 md:max-h-[600px]"
              />

              {/* Mute Toggle */}
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="absolute bottom-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-3 transition-all duration-300 text-white backdrop-blur-sm"
                aria-label="Toggle mute"
              >
                {isMuted ? (
                  <VolumeX className="w-6 h-6" />
                ) : (
                  <Volume2 className="w-6 h-6" />
                )}
              </button>
            </div>

            {/* Video Title */}
            <h2 className="text-white text-xl md:text-2xl font-semibold mt-4 text-center">
              {selectedVideo.title}
            </h2>
          </div>
        </div>
      )}

      {/* Custom Scrollbar Hide CSS */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}