import React, { useState } from 'react';
import { X, Plus, Minus, Heart, MessageCircle } from 'lucide-react';
import Chart from '@/assets/SizeChart.jpeg';

const formatPrice = (price: number) => {
  return '₹ ' + price.toLocaleString('en-IN', { maximumFractionDigits: 0 });
};


interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  badges?: string[];
  category: string;
  vendor?: string;
  availability?: string;
  stock?: number;
  soldRecently?: number;
}

interface ProductQuickViewProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, quantity: number) => void;
}

const ProductQuickView: React.FC<ProductQuickViewProps> = ({ product, onClose, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [showSizeChart, setShowSizeChart] = useState(false);
  const [imageZoom, setImageZoom] = useState({ x: 0, y: 0, isZoomed: false });

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
  const vendor = product.vendor || 'SWANKY STYLES';
  const availability = product.availability || 'In Stock';
  const soldRecently = product.soldRecently || 5;
  const stock = product.stock || 5;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setImageZoom({ x, y, isZoomed: true });
  };

  const handleMouseLeave = () => {
    setImageZoom({ x: 0, y: 0, isZoomed: false });
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      onAddToCart(product, selectedSize, quantity);
      onClose();
    }
  };

  const subtotal = product.price * quantity;

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black bg-opacity-60 backdrop-blur-sm animate-fadeIn" 
        onClick={onClose}
      >
        <div 
          className="bg-white w-full max-w-6xl max-h-[98vh] sm:max-h-[95vh] overflow-hidden rounded-none sm:rounded-xl shadow-2xl animate-slideUp"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full max-h-[98vh] sm:max-h-[95vh] overflow-y-auto">
            {/* Left Side - Image */}
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 aspect-[3/4] lg:aspect-auto lg:min-h-[600px]">
              <button
                onClick={onClose}
                className="absolute top-3 right-3 z-30 w-9 h-9 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-500 hover:rotate-90 transition-all duration-300 shadow-lg group"
              >
                <X className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
              </button>
              
              <div 
                className="w-full h-full overflow-hidden cursor-zoom-in"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-200"
                  style={{
                    transform: imageZoom.isZoomed ? 'scale(2)' : 'scale(1)',
                    transformOrigin: `${imageZoom.x}% ${imageZoom.y}%`
                  }}
                />
              </div>
            </div>

            {/* Right Side - Product Details */}
            <div className="p-4 sm:p-6 lg:p-8 flex flex-col bg-white">
              <div className="flex-1 space-y-4">
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 leading-tight text-gray-900">
                    {product.name}
                  </h2>

                  {soldRecently > 0 && (
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-red-50 border border-red-200 rounded-lg w-fit animate-pulse">
                      <span className="text-lg">🔥</span>
                      <span className="text-xs sm:text-sm font-semibold text-red-600">{soldRecently} sold in last 17 hours</span>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm bg-gray-50 p-3 rounded-lg">
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-500 mb-0.5">Vendor</span>
                    <span className="text-gray-900 font-medium">{vendor}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-500 mb-0.5">Availability</span>
                    <span className="text-green-600 font-medium">{availability}</span>
                  </div>
                  <div className="flex flex-col col-span-2">
                    <span className="font-semibold text-gray-500 mb-0.5">Product Type</span>
                    <span className="text-gray-900 font-medium">{product.category}</span>
                  </div>
                </div>

                <div className="py-3 border-y border-gray-200">
                  <div className="flex items-baseline gap-3">
<span className="text-2xl sm:text-3xl font-bold text-gray-900">{formatPrice(product.price)}</span>

                    {product.originalPrice && (
                      <>
                        <span className="text-base sm:text-lg text-gray-400 line-through">
  {formatPrice(product.originalPrice)}
</span>

                        <span className="text-xs sm:text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                          {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Size Selection */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-bold text-gray-900">
                      Size {selectedSize && <span className="text-gray-500 font-normal">({selectedSize})</span>}
                    </label>
                    <button 
                      onClick={() => setShowSizeChart(true)}
                      className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 underline transition-colors"
                    >
                      Size Chart
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-3 sm:px-4 py-2 border-2 transition-all duration-200 font-semibold text-sm rounded ${
                          selectedSize === size
                            ? 'border-black bg-black text-white shadow-md scale-105'
                            : 'border-gray-300 bg-white text-gray-700 hover:border-gray-900 hover:scale-105'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {stock > 0 && stock <= 10 && (
                  <div className="bg-red-50 border-l-4 border-red-500 p-2.5 rounded">
                    <p className="text-red-700 font-semibold text-xs sm:text-sm flex items-center gap-2">
                      <span className="text-base">⚡</span>
                      Hurry up! Only {stock} left in stock
                    </p>
                  </div>
                )}

                {/* Quantity Selector */}
                <div>
                  <label className="text-sm font-bold block mb-2 text-gray-900">Quantity</label>
                  <div className="flex items-center border-2 border-gray-300 w-fit rounded-lg overflow-hidden hover:border-gray-900 transition-colors">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-all active:scale-95"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-14 h-10 text-center border-x-2 border-gray-300 outline-none font-semibold"
                      min="1"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-all active:scale-95"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Subtotal */}
                <div className="bg-gray-900 text-white p-3 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">Subtotal</span>
<span className="text-xl sm:text-2xl font-bold">{formatPrice(subtotal)}</span>

                  </div>
                </div>

                {/* Ask An Expert */}
                <button className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-orange-600 transition-all hover:gap-3 group">
                  <MessageCircle className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform" />
                  Ask An Expert
                </button>
              </div>

              {/* Add to Cart Button */}
              <div className="flex gap-2 sm:gap-3 mt-4 sticky bottom-0 bg-white pt-4 border-t border-gray-200">
                <button
                  onClick={handleAddToCart}
                  disabled={!selectedSize}
                  className={`flex-1 py-3 sm:py-4 font-bold text-sm sm:text-base text-white transition-all duration-300 rounded-lg ${
                    selectedSize
                      ? 'bg-black hover:bg-gray-800 hover:shadow-lg active:scale-98'
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  ADD TO CART
                </button>
                <button className="w-12 h-12 sm:w-14 sm:h-14 border-2 border-gray-300 flex items-center justify-center hover:border-red-400 hover:bg-red-50 transition-all duration-300 group rounded-lg active:scale-95">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-red-500 group-hover:fill-red-500 transition-all" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Size Chart Popup */}
        {showSizeChart && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 animate-fadeIn"
            onClick={() => setShowSizeChart(false)}
          >
            <div 
              className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden animate-slideUp"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setShowSizeChart(false)}
                  className="absolute top-3 right-3 z-10 w-9 h-9 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-500 hover:rotate-90 transition-all duration-300 shadow-lg group"
                >
                  <X className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
                </button>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Size Chart</h3>
                  <div className="bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center min-h-[400px]">
                    {/* Replace this placeholder with your size chart image */}
                    <img 
                      src={Chart} 
                      alt="Size Chart" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-4 text-center">
                 
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductQuickView;