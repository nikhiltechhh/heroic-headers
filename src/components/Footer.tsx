import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail('');
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-light mb-4 tracking-tight">KITSAC</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Your trusted partner in achieving healthy, radiant skin. We believe in clean, effective skincare that delivers real results.
            </p>
            
            {/* Newsletter */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide mb-3">Stay Connected</h3>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 text-sm"
                />
                <button
                  onClick={handleSubscribe}
                  className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                >
                  Join
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide mb-3">Follow Us</h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">Shop</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                  Cleanser
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                  Serums
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                  Moisturizers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                  Sunscreen
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                  Gift Sets
                </a>
              </li>
            </ul>
          </div>

          {/* Help & Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">Help & Info</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                  Skin Quiz
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">Company</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                  Ingredients
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                  Affiliate Program
                </a>
              </li>
            </ul>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@glowskin.com" className="text-sm text-gray-600 hover:text-emerald-600">
                  info@kitsac.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-sm text-gray-600 hover:text-emerald-600">
                  +91 98783738***
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-600">
                  Hyderabad<br />
                  INDIA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications & Trust Badges */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-xs font-medium text-gray-700">Cruelty-Free</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <p className="text-xs font-medium text-gray-700">Vegan Options</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-xs font-medium text-gray-700">Secure Payment</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <p className="text-xs font-medium text-gray-700">Free Shipping</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-600">
              <p className="flex items-center gap-1">
                © 2025 KITSAC. 
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center items-center gap-4 opacity-50">
            <svg className="h-6" viewBox="0 0 38 24" fill="none">
              <rect width="38" height="24" rx="3" fill="#1434CB"/>
              <text x="19" y="16" fontSize="10" fill="white" textAnchor="middle" fontWeight="bold">VISA</text>
            </svg>
            <svg className="h-6" viewBox="0 0 38 24" fill="none">
              <rect width="38" height="24" rx="3" fill="#EB001B"/>
              <circle cx="14" cy="12" r="7" fill="#FF5F00"/>
              <circle cx="24" cy="12" r="7" fill="#F79E1B"/>
            </svg>
            <svg className="h-6" viewBox="0 0 38 24" fill="none">
              <rect width="38" height="24" rx="3" fill="#0079C1"/>
              <text x="19" y="16" fontSize="8" fill="white" textAnchor="middle" fontWeight="bold">AMEX</text>
            </svg>
            <svg className="h-6" viewBox="0 0 38 24" fill="none">
              <rect width="38" height="24" rx="3" fill="#00457C"/>
              <text x="19" y="16" fontSize="7" fill="white" textAnchor="middle" fontWeight="bold">PayPal</text>
            </svg>
            <svg className="h-6" viewBox="0 0 38 24" fill="none">
              <rect width="38" height="24" rx="3" fill="#5433FF"/>
              <text x="19" y="16" fontSize="8" fill="white" textAnchor="middle" fontWeight="bold">GPay</text>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;