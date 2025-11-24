// Header.tsx
import React, { useState } from 'react';
import { X } from 'lucide-react';
import Logoo from '@/assets/Logom.png';

// Continuous Scrolling Promo Banner
const PromoBanner = () => {
  const promos = [
    { icon: '⚡', text: '"Swanky Styles" for 15% Off on Orders above 100k' },
    { icon: '⚡', text: 'Use "Swanky Styles" for 5% Off on Orders above 30k' },
    { icon: '⚡', text: 'Use "Swanky Styles" for 10% Off on Orders above 60k' },
  ];

  const extendedPromos = [...promos, ...promos, ...promos];

  return (
    <div className="bg-slate-800 text-white py-2 px-4 overflow-hidden">
      <div className="flex items-center animate-scroll gap-8">
        {extendedPromos.map((promo, idx) => (
          <div key={idx} className="flex items-center gap-3 whitespace-nowrap min-w-max">
            <span className="text-xl">{promo.icon}</span>
            <span className="text-sm font-medium">{promo.text}</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

// WhatsApp Button Component
const WhatsAppButton = () => (
  <button
    onClick={() => window.open("https://wa.me/+919966656775", "_blank")}
    className="group relative inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 text-xs sm:text-sm"
  >
    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300 -z-10" />
    
    <div className="absolute top-1 right-1 sm:top-2 sm:right-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse" />
    
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 w-4 sm:w-5"
    >
      <path d="M12.04 2C6.58 2 2.11 6.48 2.11 11.94c0 2.1.55 3.92 1.51 5.52L2 22l4.67-1.52c1.55.85 3.32 1.32 5.2 1.32 5.46 0 9.93-4.48 9.93-9.94C21.8 6.48 17.5 2 12.04 2zm5.82 14.3c-.24.67-1.39 1.3-1.96 1.38-.5.08-1.12.11-1.8-.11-.41-.13-.94-.3-1.61-.59-2.83-1.23-4.67-4.12-4.82-4.31-.14-.19-1.15-1.53-1.15-2.92 0-1.39.73-2.07 1-2.35.24-.25.64-.36 1.02-.36.12 0 .23 0 .33.01.29.01.44.03.63.49.24.58.82 2 0.89 2.14.07.14.11.31.02.5-.08.19-.13.31-.25.48-.13.15-.27.34-.38.46-.13.15-.27.31-.12.6.14.29.63 1.04 1.35 1.69.93.83 1.72 1.09 2.01 1.22.29.14.46.12.63-.07.17-.19.73-.85.92-1.14.19-.29.39-.24.66-.14.27.1 1.72.81 2.02.96.3.14.5.22.58.34.08.12.08.69-.16 1.36z" />
    </svg>
    
    <span className="hidden sm:inline transition-all duration-300 group-hover:tracking-wider whitespace-nowrap">
      Ask an Expert
    </span>
    
    <svg
      className="hidden sm:block w-3 h-3 sm:w-4 sm:h-4 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Anchor links for scrolling to sections
  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'NEW ARRIVALS', href: '#new-arrivals' },
    { name: 'BEST SELLERS', href: '#shop-by' },
    { name: 'CELEBRITY CORNER', href: '#trending' },
  ];

  return (
    <header className="bg-[#003300] sticky top-0 z-50">
      {/* Promo Banner */}
      <PromoBanner />

      {/* Main Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Row */}
          <div className="flex items-center justify-between h-16">
            {/* Left - Call Us */}
            <div className="hidden lg:block text-sm font-medium text-[#ffc000] flex-1">
              Call Us: <span className="font-bold">99666 56775</span>
            </div>

            {/* Logo + Title */}
          <div className="flex items-center gap-3">
  <a href="#" className="flex items-center gap-3">
    <div className="w-16 h-16 rounded-full overflow-hidden">
      <img
        src={Logoo}
        alt="Logo"
        className="w-full h-full object-cover scale-[1.65]"
      />
    </div>
    <p className="text-sm tracking-wide font-semibold text-[#D4AF37]">
      SWANKY STYLES
    </p>
  </a>
</div>


            {/* Right - Icons */}
            <div className="flex items-center gap-3 sm:gap-6 flex-1 justify-end">
              {/* WhatsApp Button */}
              <WhatsAppButton />

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-1 hover:bg-gray-100 rounded transition"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X size={24} className="text-[#ffc000]" />
                ) : (
                  <svg className="w-6 h-6 text-[#ffc000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center h-16 text-sm font-bold tracking-wide gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`transition duration-300 pb-2 border-b-2 border-transparent ${
                  item.name === 'SHOP BY'
                    ? 'text-red-600 border-red-600'
                    : 'text-[#ffc000] hover:text-red-600 hover:border-red-600'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <nav className="bg-gray-50 border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)} // Close menu on click
                className={`block py-2 px-4 rounded transition duration-300 font-bold ${
                  item.name === 'SHOP BY'
                    ? 'text-red-600 bg-red-50'
                    : 'text-[#ffc000] hover:bg-gray-200'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;