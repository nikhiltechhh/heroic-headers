import React, { useState } from 'react';
import { Linkedin, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react';

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
           <h2 className="text-3xl font-light mb-4 tracking-tight">SWANKY STYLES</h2>
<p className="text-gray-600 mb-6 leading-relaxed">
  Elevate your wardrobe with our curated collection of chic and timeless pieces. At Swanky Styles, we celebrate individuality, elegance, and effortless fashion that turns heads wherever you go.
</p>

            
          
            {/* Social Media */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide mb-3">Follow Us</h3>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/swankystyles_in/?hl=en"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rojabhaskar/"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
               <a
  href="
https://in.pinterest.com/swankystyles4u/?"
  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors"
>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M12 0C5.372 0 0 5.373 0 12c0 4.99 3.066 9.282 7.44 11.045-.103-.936-.196-2.37.041-3.39.215-.915 1.384-5.83 1.384-5.83s-.355-.71-.355-1.757c0-1.646.954-2.875 2.14-2.875 1.008 0 1.495.756 1.495 1.663 0 1.014-.644 2.527-.976 3.934-.277 1.17.588 2.122 1.744 2.122 2.093 0 3.5-2.755 3.5-6.012 0-2.492-1.677-4.36-4.737-4.36-3.33 0-5.406 2.5-5.406 5.083 0 1.011.39 2.094.877 2.683a.354.354 0 01.082.34c-.09.374-.292 1.17-.331 1.33-.052.212-.17.256-.394.154-1.466-.681-2.383-2.822-2.383-4.543 0-3.69 2.68-7.082 7.732-7.082 4.05 0 7.2 2.888 7.2 6.738 0 4.017-2.528 7.253-6.048 7.253-1.18 0-2.292-.613-2.668-1.338l-.725 2.757c-.262.995-.976 2.236-1.456 2.996 1.09.336 2.242.518 3.438.518 6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
  </svg>
</a>

                <a
                  href="https://www.youtube.com/@Swankystyles_in"
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
                <a href="new-arrivals" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#shop-by" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#trending" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                  Celebrity Corner
                </a>
              </li>
             
            </ul>
          </div>

          {/* Help & Info */}
         

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">Company</h3>
            

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@glowskin.com" className="text-sm text-gray-600 hover:text-emerald-600">
                  swankystyles4u@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-sm text-gray-600 hover:text-emerald-600">
                  +91 99666 56775
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-600">
                  8-1-373, OU Colony, Shaikpet, Manikonda, Hyderabad<br />
                  INDIA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications & Trust Badges */}
      {/* <div className="border-t border-gray-200 bg-gray-50">
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
      </div> */}

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-600">
              <p className="flex items-center gap-1">
                © SWANKY STYLES. 
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