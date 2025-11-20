// Header.tsx
import React, { useState, useEffect } from 'react';
import { Search, User, Heart, ShoppingCart, X } from 'lucide-react';

// Continuous Scrolling Promo Banner
const PromoBanner = () => {
  const promos = [
    { icon: '⚡', text: '"Swanky Styles" for 15% Off on Orders above 100k' },
    { icon: '⚡', text: 'Use "Swanky Styles" for 5% Off on Orders above 30k' },
    { icon: '⚡', text: 'Use "Swanky Styles" for 10% Off on Orders above 60k' },
  ];

  // Duplicate promos for continuous scroll effect
  const extendedPromos = [...promos, ...promos, ...promos];

  return (
    <div className="bg-slate-800 text-white py-3 px-4 overflow-hidden">
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
      `}</style>
    </div>
  );
};

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['HOME', 'SHOP ALL', 'SHOP BY', 'NEW ARRIVALS', 'TRENDING'];

  return (
    <header className="bg-white">
      {/* Promo Banner */}
      <PromoBanner />

      {/* Main Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Row */}
          <div className="flex items-center justify-between h-16">
            {/* Left - Call Us */}
            <div className="hidden lg:block text-sm font-medium text-gray-800 flex-1">
              Call Us: <span className="font-bold">99666 56775</span>
            </div>

            {/* Logo - Center */}
<div className="flex items-center gap-3">
  <img
    src="https://i.ibb.co/DDxzqkTG/swankystyles.png"
    alt="Logo"
    className="w-16 h-16 object-contain"
  />

  <p className="text-sm text-gray-700 tracking-wide font-medium">
    Swanky Styles
  </p>
</div>


            {/* Right - Search & Icons */}
            <div className="flex items-center gap-3 sm:gap-6 flex-1 justify-end">
              {/* Search - Hidden on mobile */}
              <div className="hidden lg:flex items-center border-b border-gray-300 hover:border-gray-800 transition">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent outline-none px-2 py-1 text-sm w-40"
                />
                <Search size={18} className="text-gray-600 cursor-pointer" />
              </div>

              {/* Icons */}
              <button className="p-1 hover:bg-gray-100 rounded transition">
                <User size={20} className="text-gray-600 hover:text-gray-900" />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded transition">
                <Heart size={20} className="text-gray-600 hover:text-gray-900" />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded transition relative">
                <ShoppingCart size={20} className="text-gray-600 hover:text-gray-900" />
                <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  0
                </span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden p-1 hover:bg-gray-100 rounded transition"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X size={24} className="text-gray-900" />
                ) : (
                  <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center justify-center h-16 text-sm font-medium tracking-wide gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className={`transition duration-300 pb-2 border-b-2 border-transparent ${
                  item === 'SHOP BY'
                    ? 'text-red-500 border-b-2 border-red-500'
                    : 'text-gray-800 hover:text-red-500 hover:border-b-2 hover:border-red-500'
                }`}
              >
                {item}
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
                key={item}
                href="#"
                className={`block py-2 px-4 rounded transition duration-300 ${
                  item === 'SHOP BY'
                    ? 'text-red-500 bg-red-50 font-medium'
                    : 'text-gray-800 hover:bg-gray-200'
                }`}
              >
                {item}
              </a>
            ))}
            {/* Mobile Search */}
            <div className="flex items-center border border-gray-300 rounded px-3 py-2 mt-4">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none text-sm w-full"
              />
              <Search size={16} className="text-gray-600" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;