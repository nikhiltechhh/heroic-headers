import React, { useState } from 'react';
import { Eye, ShoppingBag, Plus, Minus, X } from 'lucide-react';

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
    name: "Elegant Silk Saree",
    description: "Traditional handwoven silk saree with intricate golden border work",
    price: 299.00,
    originalPrice: 399.00,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&h=500&fit=crop",
    badges: ["New"],
    category: "Sarees"
  },
  {
    id: 2,
    name: "Designer Bridal Lehenga",
    description: "Heavily embroidered bridal lehenga with zari and sequin work",
    price: 899.00,
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e6?w=500&h=500&fit=crop",
    badges: ["Best"],
    category: "Lehengas"
  },
  {
    id: 3,
    name: "Floral Summer Dress",
    description: "Lightweight cotton dress with beautiful floral prints perfect for summer",
    price: 89.00,
    originalPrice: 120.00,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=500&fit=crop",
    badges: ["Best", "New"],
    category: "Dresses"
  },
  {
    id: 4,
    name: "Banarasi Silk Saree",
    description: "Pure Banarasi silk with traditional brocade patterns and rich pallu",
    price: 450.00,
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500&h=500&fit=crop",
    category: "Sarees"
  },
  {
    id: 5,
    name: "Pastel Party Lehenga",
    description: "Contemporary lehenga in soft pastel shades with mirror work details",
    price: 650.00,
    originalPrice: 800.00,
    image: "https://images.unsplash.com/photo-1598831541649-05e8248b5a5f?w=500&h=500&fit=crop",
    badges: ["Trending"],
    category: "Lehengas"
  },
  {
    id: 6,
    name: "Maxi Evening Dress",
    description: "Elegant floor-length evening dress with sequin embellishments",
    price: 199.00,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&h=500&fit=crop",
    badges: ["Best"],
    category: "Dresses"
  },
  {
    id: 7,
    name: "Cotton Anarkali Dress",
    description: "Comfortable cotton anarkali with ethnic prints and flared silhouette",
    price: 75.00,
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e6?w=500&h=500&fit=crop",
    category: "Dresses"
  },
  {
    id: 8,
    name: "Festive Collection Set",
    description: "Complete festive outfit with coordinated accessories and dupatta",
    price: 399.00,
    originalPrice: 550.00,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&h=500&fit=crop",
    badges: ["Best", "New"],
    category: "Sets"
  },
  {
    id: 9,
    name: "Designer Clutch Bag",
    description: "Handcrafted clutch with traditional embroidery perfect for any occasion",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500&h=500&fit=crop",
    category: "Accessories"
  },
  {
    id: 10,
    name: "Georgette Cocktail Dress",
    description: "Stylish georgette dress with contemporary cuts and embellishments",
    price: 149.00,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&h=500&fit=crop",
    badges: ["New"],
    category: "Dresses"
  },
  {
    id: 11,
    name: "Kanjivaram Silk Saree",
    description: "Authentic Kanjivaram silk saree with temple border and rich texture",
    price: 550.00,
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500&h=500&fit=crop",
    category: "Sarees"
  },
  {
    id: 12,
    name: "Velvet Wedding Lehenga",
    description: "Luxurious velvet lehenga with stone work and pearl embellishments",
    price: 1200.00,
    originalPrice: 1500.00,
    image: "https://images.unsplash.com/photo-1598831541649-05e8248b5a5f?w=500&h=500&fit=crop",
    badges: ["Premium"],
    category: "Lehengas"
  },
  {
    id: 13,
    name: "Chiffon Print Saree",
    description: "Lightweight chiffon saree with modern digital prints and lace border",
    price: 180.00,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&h=500&fit=crop",
    category: "Sarees"
  },
  {
    id: 14,
    name: "Embroidered Midi Dress",
    description: "Hand-embroidered midi dress with contemporary ethnic fusion design",
    price: 129.00,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=500&fit=crop",
    badges: ["Best", "Trending"],
    category: "Dresses"
  },
  {
    id: 15,
    name: "Net Sangeet Lehenga",
    description: "Glamorous net lehenga with sequin work perfect for sangeet ceremonies",
    price: 750.00,
    originalPrice: 950.00,
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e6?w=500&h=500&fit=crop",
    badges: ["New"],
    category: "Lehengas"
  }
];

interface CartItem extends Product {
  quantity: number;
}

const Index: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const displayedProducts = products.slice(0, visibleCount);
  const hasMoreProducts = visibleCount < products.length;

  const loadMoreProducts = () => {
    setVisibleCount(prev => Math.min(prev + 6, products.length));
  };

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

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const getBadgeColor = (badge: string) => {
    switch (badge.toLowerCase()) {
      case 'best':
        return 'bg-emerald-500 text-white';
      case 'new':
        return 'bg-cyan-400 text-white';
      case 'trending':
        return 'bg-pink-500 text-white';
      case 'premium':
        return 'bg-purple-600 text-white';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };
const sendWhatsAppOrder = () => {
  if (cart.length === 0) return;

  const phoneNumber = "+919966656775"; 

  let message = `New Order from Swanky Styles\n\n`;

  cart.forEach(item => {
    message += `• ${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}\n`;
  });

  message += `\n-\n`;
  message += `Total: $${cartTotal.toFixed(2)}\n`;
  message += `-\n\n`;
  message += `Please confirm the order.`;

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
};

// Celebrity Corner Products
const celebrityProducts: Product[] = [
  {
    id: 201,
    name: "Celebrity Red Carpet Gown",
    description: "Signature red-carpet gown inspired by Bollywood divas",
    price: 499.00,
    originalPrice: 650.00,
    image: "https://images.unsplash.com/photo-1551022377-3af35c7c77b4?w=500&h=500&fit=crop",
    badges: ["Trending", "Best"],
    category: "Celebrity Look"
  },
  {
    id: 202,
    name: "Star Embroidered Lehenga",
    description: "Designer lehenga worn by top movie stars in recent events",
    price: 999.00,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    badges: ["Premium"],
    category: "Celebrity Look"
  },
  {
    id: 203,
    name: "Celebrity Saree Edit",
    description: "Elegant saree inspired by celebrity award show outfits",
    price: 375.00,
    originalPrice: 450.00,
    image: "https://images.unsplash.com/photo-1542060748-10c28b62716b?w=500&h=500&fit=crop",
    badges: ["New"],
    category: "Celebrity Look"
  },
  {
    id: 204,
    name: "Iconic Film Look Dress",
    description: "Recreation of iconic movie costume in premium fabric",
    price: 225.00,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&h=500&fit=crop",
    category: "Celebrity Look"
  }
];


  return (
    <div className="min-h-screen bg-neutral-50">
      {/* New Arrivals Section */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-2 sm:mb-4 tracking-tight">
                New Arrivals
              </h1>
              <p className="text-base sm:text-lg text-gray-600">Discover our latest collection</p>
            </div>
            <button className="text-sm font-medium border-b-2 border-black pb-1 hover:opacity-70 transition-opacity">
              View more
            </button>
          </div>

          {/* Horizontal Scrolling Container - Mobile Optimized */}
          <div className="mt-6 sm:mt-8 overflow-x-auto scrollbar-hide -mx-4 px-4 sm:overflow-visible sm:mx-0 sm:px-0">
            <div className="flex gap-4 sm:gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-4">
              {/* Featured Card 1 */}
              <div className="group cursor-pointer flex-shrink-0 w-64 sm:w-auto">
                <div className="relative bg-gray-100 aspect-[3/4] mb-3 sm:mb-4 overflow-hidden ">
                  <img
                    src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&h=500&fit=crop"
                    alt="Elegant Silk Saree"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button 
                    onClick={() => setPreviewImage("https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1200&h=1200&fit=crop")}
                    className="absolute top-3 sm:top-4 right-3 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md"
                  >
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                  </button>
                </div>
                <h3 className="font-medium mb-1 sm:mb-2 text-sm sm:text-base">Elegant Silk Saree</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 line-clamp-2">
                  Traditional handwoven silk saree with intricate golden border work
                </p>
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-base sm:text-lg">$299.00</p>
                  <button
                    onClick={() => addToCart({
                      id: 101,
                      name: "Elegant Silk Saree",
                      description: "Traditional handwoven silk saree with intricate golden border work",
                      price: 299.00,
                      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&h=500&fit=crop",
                      category: "Sarees"
                    })}
                    className="bg-black text-white px-3 sm:px-4 py-1.5  hover:bg-gray-800 transition-colors text-xs sm:text-sm font-medium"
                  >
                    Add
                  </button>
                </div>
              </div>

              {/* Featured Card 2 */}
              <div className="group cursor-pointer flex-shrink-0 w-64 sm:w-auto">
                <div className="relative bg-gray-100 aspect-[3/4] mb-3 sm:mb-4 overflow-hidden ">
                  <img
                    src="https://images.unsplash.com/photo-1583391733956-6c78276477e6?w=500&h=500&fit=crop"
                    alt="Designer Bridal Lehenga"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button 
                    onClick={() => setPreviewImage("https://images.unsplash.com/photo-1583391733956-6c78276477e6?w=1200&h=1200&fit=crop")}
                    className="absolute top-3 sm:top-4 right-3 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md"
                  >
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                  </button>
                </div>
                <h3 className="font-medium mb-1 sm:mb-2 text-sm sm:text-base">Designer Bridal Lehenga</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 line-clamp-2">
                  Heavily embroidered bridal lehenga with zari and sequin work
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-base sm:text-lg">$899.00</p>
                  </div>
                  <button
                    onClick={() => addToCart({
                      id: 102,
                      name: "Designer Bridal Lehenga",
                      description: "Heavily embroidered bridal lehenga with zari and sequin work",
                      price: 899.00,
                      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e6?w=500&h=500&fit=crop",
                      category: "Lehengas"
                    })}
                    className="bg-black text-white px-3 sm:px-4 py-1.5  hover:bg-gray-800 transition-colors text-xs sm:text-sm font-medium"
                  >
                    Add
                  </button>
                </div>
              </div>

              {/* Featured Card 3 */}
              <div className="group cursor-pointer flex-shrink-0 w-64 sm:w-auto">
                <div className="relative bg-gray-100 aspect-[3/4] mb-3 sm:mb-4 overflow-hidden ">
                  <img
                    src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=500&fit=crop"
                    alt="Floral Summer Dress"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button 
                    onClick={() => setPreviewImage("https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&h=1200&fit=crop")}
                    className="absolute top-3 sm:top-4 right-3 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md"
                  >
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                  </button>
                </div>
                <h3 className="font-medium mb-1 sm:mb-2 text-sm sm:text-base">Floral Summer Dress</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 line-clamp-2">
                  Lightweight cotton dress with beautiful floral prints perfect for summer
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-base sm:text-lg">$89.00</p>
                    <p className="text-xs sm:text-sm text-gray-400 line-through">$120.00</p>
                  </div>
                  <button
                    onClick={() => addToCart({
                      id: 103,
                      name: "Floral Summer Dress",
                      description: "Lightweight cotton dress with beautiful floral prints perfect for summer",
                      price: 89.00,
                      originalPrice: 120.00,
                      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=500&fit=crop",
                      category: "Dresses"
                    })}
                    className="bg-black text-white px-3 sm:px-4 py-1.5  hover:bg-gray-800 transition-colors text-xs sm:text-sm font-medium"
                  >
                    Add
                  </button>
                </div>
              </div>

              {/* Featured Card 4 */}
              <div className="group cursor-pointer flex-shrink-0 w-64 sm:w-auto">
                <div className="relative bg-gray-100 aspect-[3/4] mb-3 sm:mb-4 overflow-hidden ">
                  <img
                    src="https://images.unsplash.com/photo-1598831541649-05e8248b5a5f?w=500&h=500&fit=crop"
                    alt="Pastel Party Lehenga"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex gap-2 flex-wrap">
                    <span className="bg-emerald-500 text-white text-xs px-2 sm:px-3 py-1 rounded shadow-sm">Best</span>
                    <span className="bg-cyan-400 text-white text-xs px-2 sm:px-3 py-1 rounded shadow-sm">New</span>
                  </div>
                  <button 
                    onClick={() => setPreviewImage("https://images.unsplash.com/photo-1598831541649-05e8248b5a5f?w=1200&h=1200&fit=crop")}
                    className="absolute top-3 sm:top-4 right-3 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md"
                  >
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                  </button>
                </div>
                <h3 className="font-medium mb-1 sm:mb-2 text-sm sm:text-base">Pastel Party Lehenga</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 line-clamp-2">
                  Contemporary lehenga in soft pastel shades with mirror work details
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-base sm:text-lg">$650.00</p>
                    <p className="text-xs sm:text-sm text-gray-400 line-through">$800.00</p>
                  </div>
                  <button
                    onClick={() => addToCart({
                      id: 104,
                      name: "Pastel Party Lehenga",
                      description: "Contemporary lehenga in soft pastel shades with mirror work details",
                      price: 650.00,
                      originalPrice: 800.00,
                      image: "https://images.unsplash.com/photo-1598831541649-05e8248b5a5f?w=500&h=500&fit=crop",
                      badges: ["Best", "New"],
                      category: "Lehengas"
                    })}
                    className="bg-black text-white px-3 sm:px-4 py-1.5  hover:bg-gray-800 transition-colors text-xs sm:text-sm font-medium"
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
      <section id="Products" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight">Best Sellers</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {displayedProducts.map(product => (
              <div key={product.id} className="group bg-white  overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 ">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badges && product.badges.length > 0 && (
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-wrap gap-1 sm:gap-2">
                      {product.badges.map(badge => (
                        <span
                          key={badge}
                          className={`text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded font-medium shadow-sm ${getBadgeColor(badge)}`}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                  <button
                    onClick={() => setPreviewImage(product.image.replace('w=500&h=500', 'w=1200&h=1200'))}
                    className="absolute top-2 right-2 sm:top-3 sm:right-3 w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md"
                  >
                    <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-700" />
                  </button>
                </div>

                <div className="p-2 sm:p-3 lg:p-4">
                  <p className="text-[10px] sm:text-xs text-gray-500 mb-0.5 sm:mb-1 uppercase tracking-wide">
                    {product.category}
                  </p>
                  <h3 className="font-semibold text-xs sm:text-sm lg:text-base mb-1 line-clamp-2">{product.name}</h3>
                  <p className="text-[10px] sm:text-xs text-gray-600 mb-2 sm:mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 sm:gap-2">
                    <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
                      <span className="text-sm sm:text-base lg:text-lg font-bold">${product.price.toFixed(2)}</span>
                      {product.originalPrice && (
                        <span className="text-[10px] sm:text-xs text-gray-400 line-through">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-black text-white px-2.5 sm:px-3 lg:px-4 py-1 sm:py-1.5  hover:bg-gray-800 transition-colors text-[10px] sm:text-xs font-medium whitespace-nowrap w-full sm:w-auto"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {hasMoreProducts && (
            <div className="mt-8 sm:mt-12 text-center">
              <button
                onClick={loadMoreProducts}
                className="inline-flex items-center justify-center bg-black text-white px-8 sm:px-10 py-3 sm:py-4  hover:bg-gray-800 transition-all text-sm sm:text-base font-medium shadow-md hover:shadow-lg"
              >
                View More Products
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Image Preview Modal */}
      {previewImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90" onClick={() => setPreviewImage(null)}>
          <button
            onClick={() => setPreviewImage(null)}
            className="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg z-10"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
          </button>
          <div className="max-w-4xl max-h-[90vh] w-full">
            <img
              src={previewImage}
              alt="Product preview"
              className="w-full h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Floating Cart Button */}
      {cartItemCount > 0 && (
        <button
          onClick={() => setShowCart(!showCart)}
          className="fixed bottom-6 sm:bottom-8 right-6 sm:right-8 bg-black text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl hover:bg-gray-800 transition-all flex items-center justify-center group z-50"
        >
          <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
            {cartItemCount}
          </span>
        </button>
      )}

{/* Celebrity Corner Section */}
<section id="CelebrityCorner" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    
    <div className="mb-6 sm:mb-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight">
        Celebrity Corner
      </h2>
      <p className="text-gray-600 text-sm sm:text-base mt-1">
        Shop outfits inspired by celebrities
      </p>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
      {celebrityProducts.map(product => (
        <div key={product.id} className="group bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
          <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {product.badges && (
              <div className="absolute top-2 left-2 flex gap-1 flex-wrap">
                {product.badges.map(badge => (
                  <span
                    key={badge}
                    className={`text-[10px] sm:text-xs px-1.5 py-0.5 rounded shadow-sm ${getBadgeColor(badge)}`}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}

            <button
              onClick={() =>
                setPreviewImage(product.image.replace("w=500&h=500", "w=1200&h=1200"))
              }
              className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100"
            >
              <Eye className="w-4 h-4 text-gray-700" />
            </button>
          </div>

          <div className="p-2 sm:p-3 lg:p-4">
            <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wide mb-1">
              {product.category}
            </p>
            <h3 className="font-semibold text-xs sm:text-sm lg:text-base line-clamp-2">
              {product.name}
            </h3>
            <p className="text-[10px] sm:text-xs text-gray-600 mb-2 line-clamp-2">
              {product.description}
            </p>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <span className="font-bold text-sm sm:text-base">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="line-through text-gray-400 text-[10px] sm:text-xs">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              <button
                onClick={() => addToCart(product)}
                className="bg-black text-white px-3 py-1 text-[10px] sm:text-xs hover:bg-gray-800 transition"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setShowCart(false)}
          ></div>
          <div className="absolute right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl flex flex-col">
            <div className="p-4 sm:p-6 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-xl sm:text-2xl font-semibold">Shopping Cart</h2>
                <button
                  onClick={() => setShowCart(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-1">{cartItemCount} items</p>
            </div>

            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              {cart.map(item => (
                <div key={item.id} className="flex gap-3 sm:gap-4 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-20 sm:w-20 sm:h-24 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-xs sm:text-sm mb-1 line-clamp-2">{item.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-2">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="w-6 h-6 sm:w-7 sm:h-7 border rounded flex items-center justify-center hover:bg-gray-100"
                      >
                        <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                      <span className="text-xs sm:text-sm font-medium min-w-[20px] text-center">{item.quantity}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="w-6 h-6 sm:w-7 sm:h-7 border rounded flex items-center justify-center hover:bg-gray-100"
                      >
                        <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-sm sm:text-base">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 sm:p-6 border-t bg-gray-50">
              <div className="flex justify-between items-center mb-3 sm:mb-4">
                <span className="text-base sm:text-lg font-semibold">Total</span>
                <span className="text-xl sm:text-2xl font-bold">${cartTotal.toFixed(2)}</span>
              </div>
              <button
  onClick={sendWhatsAppOrder}
  className="w-full bg-black text-white py-3 sm:py-4  hover:bg-gray-800 transition-colors font-medium text-sm sm:text-base"
>
  Checkout via WhatsApp
</button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
