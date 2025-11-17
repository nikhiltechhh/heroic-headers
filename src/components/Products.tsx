import React, { useState } from 'react';
import { Heart, ShoppingBag, Plus, Minus } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  badges?: string[];
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Gentle Foaming Cleanser",
    description: "pH-balanced cleanser that removes impurities without stripping skin",
    price: 22.00,
    originalPrice: 28.00,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=500&fit=crop",
    badges: ["New"],
    category: "Cleanser"
  },
  {
    id: 2,
    name: "Hydrating Toner",
    description: "Alcohol-free toner with hyaluronic acid for instant hydration",
    price: 24.00,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&h=500&fit=crop",
    badges: ["Best"],
    category: "Toner"
  },
  {
    id: 3,
    name: "Vitamin C Serum",
    description: "Brightening serum with 20% vitamin C for radiant skin",
    price: 45.00,
    originalPrice: 55.00,
    image: "https://img.freepik.com/premium-photo/vitamin-c-serum-bottle-with-orange-slice-organic-cosmetics_875825-89523.jpg",
    badges: ["Best", "New"],
    category: "Ampoule & Serum"
  },
  {
    id: 4,
    name: "Rich Moisturizer",
    description: "Deep hydration cream with ceramides for all-day moisture",
    price: 38.00,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&h=500&fit=crop",
    category: "Moisturizer"
  },
  {
    id: 5,
    name: "Clay Purifying Mask",
    description: "Detoxifying clay mask that deep cleans pores",
    price: 28.00,
    originalPrice: 35.00,
    image: "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=500&h=500&fit=crop",
    badges: ["Vegan"],
    category: "Mask & Treatment"
  },
  {
    id: 6,
    name: "SPF 50 Sunscreen",
    description: "Lightweight broad-spectrum protection with no white cast",
    price: 32.00,
    image: "https://img.freepik.com/premium-vector/mobile_907924-18.jpg",
    badges: ["Best"],
    category: "Sunscreen"
  },
  {
    id: 7,
    name: "Nourishing Lip Balm",
    description: "Ultra-hydrating lip treatment with vitamin E",
    price: 12.00,
    image: "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=500&h=500&fit=crop",
    category: "Lip Care"
  },
  {
    id: 8,
    name: "Complete Skincare Set",
    description: "Full routine set with cleanser, toner, serum, and moisturizer",
    price: 95.00,
    originalPrice: 120.00,
    image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=500&h=500&fit=crop",
    badges: ["Best", "New"],
    category: "Sets"
  },
  {
    id: 9,
    name: "Beauty Headband",
    description: "Soft microfiber headband for your skincare routine",
    price: 8.00,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&h=500&fit=crop",
    category: "Merchandise"
  },
  {
    id: 10,
    name: "Acne Spot Treatment",
    description: "Fast-acting treatment with salicylic acid for blemishes",
    price: 18.00,
    image: "https://images.unsplash.com/photo-1556228841-1d99e2f1c4e8?w=500&h=500&fit=crop",
    badges: ["New"],
    category: "Acne & Breakout"
  },
  {
    id: 11,
    name: "Pore Minimizing Toner",
    description: "Niacinamide toner that visibly reduces pore appearance",
    price: 26.00,
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=500&h=500&fit=crop",
    category: "Pores"
  },
  {
    id: 12,
    name: "Brightening Essence",
    description: "Alpha arbutin essence for even skin tone",
    price: 35.00,
    originalPrice: 42.00,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&h=500&fit=crop",
    badges: ["Vegan"],
    category: "Dullness & Tone"
  },
  {
    id: 13,
    name: "Retinol Night Cream",
    description: "Anti-aging cream with retinol for smoother skin",
    price: 48.00,
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=500&h=500&fit=crop",
    category: "Wrinkles"
  },
  {
    id: 14,
    name: "Calming Centella Serum",
    description: "Soothing serum for sensitive and irritated skin",
    price: 30.00,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&h=500&fit=crop",
    badges: ["Best", "Vegan"],
    category: "Sensitive Skin"
  },
  {
    id: 15,
    name: "Hyaluronic Acid Cream",
    description: "Intensive hydration with triple hyaluronic acid complex",
    price: 40.00,
    originalPrice: 50.00,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&h=500&fit=crop",
    badges: ["New"],
    category: "Dry & Dehydrated Skin"
  }
];

interface CartItem extends Product {
  quantity: number;
}

const Products: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [showCart, setShowCart] = useState(false);

  const displayedProducts = showAll ? products : products.slice(0, 6);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === productId);
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      return prevCart.filter(item => item.id !== productId);
    });
  };

  const toggleFavorite = (productId: number) => {
    setFavorites(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const getBadgeColor = (badge: string) => {
    switch (badge.toLowerCase()) {
      case 'best':
        return 'bg-emerald-500 text-white';
      case 'new':
        return 'bg-cyan-400 text-white';
      case 'vegan':
        return 'bg-white text-emerald-600 border border-emerald-600';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };

  return (
    <div id="best" className="min-h-screen bg-neutral-50">
      {/* Best Sellers Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-4 tracking-tight">
                New Arrivals
              </h1>
              <p className="text-lg text-gray-600">Shop our latest products</p>
            </div>
            <button className="text-sm font-medium border-b-2 border-black pb-1 hover:opacity-70 transition-opacity">
              View more
            </button>
          </div>

          {/* Horizontal Scrolling Container - Mobile Only */}
          <div className="mt-8 overflow-x-auto scrollbar-hide -mx-4 px-4 sm:overflow-visible sm:mx-0 sm:px-0">
            <div className="flex gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-4">
              {/* Best Seller Card 1 */}
              <div className="group cursor-pointer flex-shrink-0 w-72 sm:w-auto">
                <div className="relative bg-gray-100 aspect-square mb-4 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=500&fit=crop"
                    alt="Glass Skin Duo Set"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button 
                    onClick={() => toggleFavorite(101)}
                    className={`absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors ${
                      favorites.includes(101) ? 'text-red-500' : 'text-gray-600'
                    }`}
                  >
                    <Heart className="w-5 h-5" fill={favorites.includes(101) ? 'currentColor' : 'none'} />
                  </button>
                </div>
                <h3 className="font-medium mb-2">Glass Skin Duo Set</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  Two Icons, One Ritual — Glass Skin Duo Unwrap radiant, glass-like skin this festive...
                </p>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">$35.00</p>
                  <button
                    onClick={() => addToCart({
                      id: 101,
                      name: "Glass Skin Duo Set",
                      description: "Two Icons, One Ritual — Glass Skin Duo Unwrap radiant, glass-like skin this festive...",
                      price: 35.00,
                      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=500&fit=crop",
                      category: "Sets"
                    })}
                    className="bg-black text-white px-4 py-1.5 rounded-full hover:bg-gray-800 transition-colors text-sm font-medium"
                  >
                    Add
                  </button>
                </div>
              </div>

              {/* Best Seller Card 2 */}
              <div className="group cursor-pointer flex-shrink-0 w-72 sm:w-auto">
                <div className="relative bg-gray-100 aspect-square mb-4 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&h=500&fit=crop"
                    alt="TXA Brightening Cream"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button 
                    onClick={() => toggleFavorite(102)}
                    className={`absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors ${
                      favorites.includes(102) ? 'text-red-500' : 'text-gray-600'
                    }`}
                  >
                    <Heart className="w-5 h-5" fill={favorites.includes(102) ? 'currentColor' : 'none'} />
                  </button>
                </div>
                <h3 className="font-medium mb-2">TXA 2.5% Intensive Brightening Cream</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  Find your Peace of Glow with our new silicone-free, gentle brightening cream...
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold">$19.00</p>
                    <p className="text-sm text-gray-400 line-through">$24.00</p>
                  </div>
                  <button
                    onClick={() => addToCart({
                      id: 102,
                      name: "TXA 2.5% Intensive Brightening Cream",
                      description: "Find your Peace of Glow with our new silicone-free, gentle brightening cream...",
                      price: 19.00,
                      originalPrice: 24.00,
                      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&h=500&fit=crop",
                      category: "Moisturizer"
                    })}
                    className="bg-black text-white px-4 py-1.5 rounded-full hover:bg-gray-800 transition-colors text-sm font-medium"
                  >
                    Add
                  </button>
                </div>
              </div>

              {/* Best Seller Card 3 */}
              <div className="group cursor-pointer flex-shrink-0 w-72 sm:w-auto">
                <div className="relative bg-gray-100 aspect-square mb-4 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1571875257727-256c39da42af?w=500&h=500&fit=crop"
                    alt="Lip & Eye Set"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button 
                    onClick={() => toggleFavorite(103)}
                    className={`absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors ${
                      favorites.includes(103) ? 'text-red-500' : 'text-gray-600'
                    }`}
                  >
                    <Heart className="w-5 h-5" fill={favorites.includes(103) ? 'currentColor' : 'none'} />
                  </button>
                </div>
                <h3 className="font-medium mb-2">Lip & Eye Set</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  Lip and Eye Set Glow meets care in every detail. Complete your self-care ritual with th...
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold">$28.00</p>
                    <p className="text-sm text-gray-400 line-through">$40.00</p>
                  </div>
                  <button
                    onClick={() => addToCart({
                      id: 103,
                      name: "Lip & Eye Set",
                      description: "Lip and Eye Set Glow meets care in every detail. Complete your self-care ritual with th...",
                      price: 28.00,
                      originalPrice: 40.00,
                      image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=500&h=500&fit=crop",
                      category: "Sets"
                    })}
                    className="bg-black text-white px-4 py-1.5 rounded-full hover:bg-gray-800 transition-colors text-sm font-medium"
                  >
                    Add
                  </button>
                </div>
              </div>

              {/* Best Seller Card 4 */}
              <div className="group cursor-pointer flex-shrink-0 w-72 sm:w-auto">
                <div className="relative bg-gray-100 aspect-square mb-4 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1515688594390-b649af70d282?w=500&h=500&fit=crop"
                    alt="Vita Glow Lip Oil"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                    <span className="bg-emerald-500 text-white text-xs px-3 py-1 rounded">Best</span>
                    <span className="bg-cyan-400 text-white text-xs px-3 py-1 rounded">New</span>
                    <span className="bg-white text-emerald-600 border border-emerald-600 text-xs px-3 py-1 rounded">
                      Vegan
                    </span>
                  </div>
                  <button 
                    onClick={() => toggleFavorite(104)}
                    className={`absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors ${
                      favorites.includes(104) ? 'text-red-500' : 'text-gray-600'
                    }`}
                  >
                    <Heart className="w-5 h-5" fill={favorites.includes(104) ? 'currentColor' : 'none'} />
                  </button>
                </div>
                <h3 className="font-medium mb-2">Vita Glow Lip Oil - Dreamy Olive 4.5g</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  Dreamy Olive - Sheer hydration with a dewy, natural glow. Meet the final step in your...
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold">$15.00</p>
                    <p className="text-sm text-gray-400 line-through">$20.00</p>
                  </div>
                  <button
                    onClick={() => addToCart({
                      id: 104,
                      name: "Vita Glow Lip Oil - Dreamy Olive 4.5g",
                      description: "Dreamy Olive - Sheer hydration with a dewy, natural glow. Meet the final step in your...",
                      price: 15.00,
                      originalPrice: 20.00,
                      image: "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=500&h=500&fit=crop",
                      badges: ["Best", "New", "Vegan"],
                      category: "Lip Care"
                    })}
                    className="bg-black text-white px-4 py-1.5 rounded-full hover:bg-gray-800 transition-colors text-sm font-medium"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Products Section */}
      <section id="Products" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight">All Products</h2>
            {!showAll && products.length > 6 && (
              <button
                onClick={() => setShowAll(true)}
                className="text-sm font-medium border-b-2 border-black pb-1 hover:opacity-70 transition-opacity"
              >
                View more
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProducts.map(product => (
              <div key={product.id} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badges && product.badges.length > 0 && (
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {product.badges.map(badge => (
                        <span
                          key={badge}
                          className={`text-xs px-3 py-1 rounded font-medium ${getBadgeColor(badge)}`}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className={`absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors ${
                      favorites.includes(product.id) ? 'text-red-500' : 'text-gray-600'
                    }`}
                  >
                    <Heart
                      className="w-5 h-5"
                      fill={favorites.includes(product.id) ? 'currentColor' : 'none'}
                    />
                  </button>
                </div>

                <div className="p-6">
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
                    {product.category}
                  </p>
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors text-sm font-medium"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {showAll && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAll(false)}
                className="text-sm font-medium border-b-2 border-black pb-1 hover:opacity-70 transition-opacity"
              >
                Show less
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Floating Cart Button */}
      {cartItemCount > 0 && (
        <button
          onClick={() => setShowCart(!showCart)}
          className="fixed bottom-8 right-8 bg-black text-white w-16 h-16 rounded-full shadow-2xl hover:bg-gray-800 transition-all flex items-center justify-center group z-50"
        >
          <ShoppingBag className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
            {cartItemCount}
          </span>
        </button>
      )}

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setShowCart(false)}
          ></div>
          <div className="absolute right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl flex flex-col">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Shopping Cart</h2>
                <button
                  onClick={() => setShowCart(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-1">{cartItemCount} items</p>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cart.map(item => (
                <div key={item.id} className="flex gap-4 mb-6 pb-6 border-b">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-sm mb-1 line-clamp-2">{item.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="w-7 h-7 border rounded flex items-center justify-center hover:bg-gray-100"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-sm font-medium">{item.quantity}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="w-7 h-7 border rounded flex items-center justify-center hover:bg-gray-100"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t bg-gray-50">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-2xl font-bold">${cartTotal.toFixed(2)}</span>
              </div>
              <button className="w-full bg-black text-white py-4 rounded-full hover:bg-gray-800 transition-colors font-medium">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;