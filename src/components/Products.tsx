import React, { useState } from 'react';
import { Eye, ShoppingBag, Plus, Minus, X } from 'lucide-react';
import ProductQuickView from '@/components/ProductQuickView';
import Pic1 from '@/assets/Picture1.png';
import Pic2 from '@/assets/Picture2.png';
import Pic3 from '@/assets/Picture3.png';
import Pic4 from '@/assets/Picture4.png';
import Pic5 from '@/assets/Picture5.png';
import Pic6 from '@/assets/Picture6.png';
import Pic7 from '@/assets/Picture7.png';
import Pic8 from '@/assets/Picture8.png';
import Pic9 from '@/assets/Picture9.png';
import Pic10 from '@/assets/Picture10.png';
import Pic13 from '@/assets/Picture13.png';
import Pic14 from '@/assets/Picture14.png';
import Pic15 from '@/assets/Picture15.png';
import Pic16 from '@/assets/Picture16.png';
import Pic17 from '@/assets/Picture17.png';
import Pic18 from '@/assets/Picture18.png';
import Pic19 from '@/assets/Picture19.png';
import Pic20 from '@/assets/Picture20.png';
import Pic21 from '@/assets/Picture21.png';
import Pic22 from '@/assets/Picture22.png';
import Pic23 from '@/assets/Picture23.png';
import Pic24 from '@/assets/Picture24.png';
import Pic25 from '@/assets/Picture25.png';
import Pic26 from '@/assets/Picture26.png';
import Pic27 from '@/assets/Picture27.png';
import Pic28 from '@/assets/Picture28.png';
import Pic30 from '@/assets/Picture30.png';
import Pic31 from '@/assets/Picture31.png';


const formatPrice = (price: number) => {
  return `₹${price.toLocaleString('en-IN')}`;
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
}

const products: Product[] = [
{
id: 1,
name: "Elegant Silk Saree",
description: "Traditional handwoven silk saree with intricate golden border work",
price: 2999,
originalPrice: 3999,
image: Pic1,
badges: ["New"],
category: "Sarees"
},
{
id: 2,
name: "Designer Bridal Lehenga",
description: "Heavily embroidered bridal lehenga with zari and sequin work",
price: 7999,
image:Pic2,
badges: ["Best"],
category: "Lehengas"
},
{
id: 3,
name: "Floral Summer Dress",
description: "Lightweight cotton dress with beautiful floral prints perfect for summer",
price: 3499,
originalPrice: 4599,
image: Pic3,
badges: ["Best", "New"],
category: "Dresses"
},
{
id: 4,
name: "Banarasi Silk Saree",
description: "Pure Banarasi silk with traditional brocade patterns and rich pallu",
price: 7999,
image: Pic4,
category: "Sarees"
},
{
id: 5,
name: "Pastel Party Lehenga",
description: "Contemporary lehenga in soft pastel shades with mirror work details",
price: 8999,
originalPrice: 9999,
image: Pic5,
badges: ["Trending"],
category: "Lehengas"
},
{
id: 6,
name: "Maxi Evening Dress",
description: "Elegant floor-length evening dress with sequin embellishments",
price: 9999,
image: Pic6,
badges: ["Best"],
category: "Dresses"
},
{
id: 7,
name: "Casual Cotton Kurti",
description: "Comfortable cotton kurti with minimal embroidered neck design",
price: 13999,
image: Pic7,
category: "Kurtis"
},
{
id: 8,
name: "Premium Linen Saree",
description: "Soft linen saree with elegant woven border and pastel shade",
price: 3499,
originalPrice: 14999,
image: Pic8,
badges: ["New"],
category: "Sarees"
},
{
id: 9,
name: "Wedding Designer Gown",
description: "Full-length gown with shimmer fabric and detailed embroidery",
price: 3499,
image: Pic9,
badges: ["Best"],
category: "Dresses"
},
{
id: 10,
name: "Traditional Kanjeevaram Saree",
description: "Handwoven Kanjeevaram with vibrant colors and gold zari",
price: 3499,
image: Pic10,
category: "Sarees"
},
{
id: 11,
name: "Chikankari Anarkali Suit",
description: "Classic Anarkali with fine Lucknowi chikankari work",
price: 299.00,
originalPrice: 350.00,
image: Pic25,
badges: ["Trending"],
category: "Suits"
},
{
id: 12,
name: "Velvet Bridal Lehenga",
description: "Opulent velvet lehenga with heavy zari and bead embroidery",
price: 1100.00,
image: Pic26,
badges: ["Best"],
category: "Lehengas"
},
{
id: 13,
name: "Printed Georgette Saree",
description: "Lightweight georgette saree with modern digital print",
price: 7999,
image: Pic13,
category: "Sarees"
},
{
id: 14,
name: "Casual Summer Frock",
description: "Breathable summer frock with floral pastel colors",
price: 7999,
image: Pic14,
badges: ["New"],
category: "Dresses"
},
{
id: 15,
name: "Party Wear Sharara Set",
description: "Trendy sharara with mirror and gota patti detailing",
price: 6999,
image: Pic15,
category: "Suits"
},
{
id: 16,
name: "Designer Net Saree",
description: "Stylish net saree with sequined border work",
price: 1999,
originalPrice: 2999,
image: Pic16,
badges: ["Trending"],
category: "Sarees"
},
{
id: 17,
name: "Boho Maxi Dress",
description: "Bohemian-style maxi dress with free-flowing silhouette",
price: 140.00,
image: Pic17,
badges: ["Best"],
category: "Dresses"
},
{
id: 18,
name: "Traditional Pattu Saree",
description: "Rich pattu saree featuring pure silk and contrast blouse",
price: 3499,
image: Pic18,
category: "Sarees"
},
{
id: 19,
name: "Modern Indo-Western Gown",
description: "Fusion gown with metallic shimmer and cape sleeves",
price: 3499,
originalPrice: 4499,
image: Pic19,
category: "Dresses"
},
{
id: 20,
name: "Mirror Work Lehenga",
description: "Elegant lehenga set decorated with mirror panel patterns",
price: 3499,
image: Pic20,
badges: ["New"],
category: "Lehengas"
},
{
id: 21,
name: "Designer Palazzo Suit",
description: "Stylish palazzo suit with embroidered kurti and chiffon dupatta",
price: 160.00,
image: Pic21,
category: "Suits"
},
{
id: 22,
name: "Soft Organza Saree",
description: "Beautiful organza saree with floral print and pearl border",
price: 180.00,
originalPrice: 230.00,
image: Pic22,
badges: ["Trending"],
category: "Sarees"
},
{
id: 23,
name: "Heavy Embroidered Gown",
description: "Floor-length gown with intricate embroidery and flare",
price: 3499,
image: Pic23,
category: "Dresses"
},
{
id: 24,
name: "Zardosi Bridal Lehenga",
description: "Luxury bridal lehenga with premium zardosi and stonework",
price: 1300.00,
image: Pic24,
badges: ["Best"],
category: "Lehengas"
},

];

interface CartItem extends Product {
quantity: number;
size: string;
}

type Size = 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL' | 'Custom';

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

const Index: React.FC = () => {
const [visibleCount, setVisibleCount] = useState(6);
const [cart, setCart] = useState<CartItem[]>([]);
const [showCart, setShowCart] = useState(false);
const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
const [selectedSizes, setSelectedSizes] = useState<Record<number, string>>({});
const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

const displayedProducts = products.slice(0, visibleCount);
const hasMoreProducts = visibleCount < products.length;

const loadMoreProducts = () => {
setVisibleCount(prev => Math.min(prev + 6, products.length));
};

const addToCart = (product: Product, size?: string, qty: number = 1) => {
const selectedSize = size || selectedSizes[product.id];
if (!selectedSize) {
return;
}

setCart(prevCart => {
const existingItem = prevCart.find(item => item.id === product.id && item.size === selectedSize);
if (existingItem) {
return prevCart.map(item =>
item.id === product.id && item.size === selectedSize
? { ...item, quantity: item.quantity + qty }
: item
);
}
return [...prevCart, { ...product, quantity: qty, size: selectedSize }];
});

setSelectedSizes(prev => {
const updated = { ...prev };
delete updated[product.id];
return updated;
});
setHoveredProduct(null);
};

const removeFromCart = (productId: number, size: string) => {
setCart(prevCart => {
const existingItem = prevCart.find(item => item.id === productId && item.size === size);
if (existingItem && existingItem.quantity > 1) {
return prevCart.map(item =>
item.id === productId && item.size === size
? { ...item, quantity: item.quantity - 1 }
: item
);
}
return prevCart.filter(item => !(item.id === productId && item.size === size));
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
message += `• ${item.name}\n Size: ${item.size}\n Qty: ${item.quantity}\n Price: ₹${(item.price * item.quantity).toFixed(2)}\n\n`;
});

message += `-\n`;
message += `Total: ₹${cartTotal.toFixed(2)}\n`;
message += `-\n\n`;
message += `Please confirm the order.`;

const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

window.open(url, "_blank");
};

const sizes: Size[] = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'Custom'];

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
</div>

<div className="mt-6 sm:mt-8 overflow-x-auto scrollbar-hide -mx-4 px-4 sm:overflow-visible sm:mx-0 sm:px-0">
<div className="flex gap-4 sm:gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-4">
{/* Featured Card 1 */}
<div
className="group cursor-pointer flex-shrink-0 w-64 sm:w-auto"
onMouseEnter={() => setHoveredProduct(101)}
onMouseLeave={() => setHoveredProduct(null)}
>
<div className="relative bg-gray-100 aspect-[3/4] mb-3 sm:mb-4 overflow-hidden">
<img
src={Pic27}
alt="Elegant Silk Saree"
className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
/>
<button
onClick={() => setQuickViewProduct({
id: 101,
name: "Elegant Silk Saree",
description: "Traditional handwoven silk saree with intricate golden border work",
price: 3499,
image: Pic27,
category: "Sarees"
})}
className="absolute top-3 sm:top-4 right-3 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md z-10"
>
<Eye className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
</button>
<div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<div className="flex flex-wrap gap-2 justify-center px-4">
{['S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'Custom'].map((size) => (
<button
key={size}
onClick={(e) => {
e.stopPropagation();
setSelectedSizes(prev => ({ ...prev, [101]: size }));
}}
className={`px-3 py-1.5 rounded transition-colors text-xs font-medium ${
selectedSizes[101] === size
? 'bg-emerald-500 text-white'
: 'bg-white text-black hover:bg-gray-200'
}`}
>
{size}
</button>
))}
</div>
</div>
</div>
<h3 className="font-medium mb-1 sm:mb-2 text-sm sm:text-base">Elegant Silk Saree</h3>
<p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 line-clamp-2">
Traditional handwoven silk saree with intricate golden border work
</p>
<div className="flex items-center justify-between">
<p className="font-semibold text-base sm:text-lg">₹3499</p>
<button
onClick={() => {
const product = {
id: 101,
name: "Elegant Silk Saree",
description: "Traditional handwoven silk saree with intricate golden border work",
price: 3499,
image: Pic27,
category: "Sarees"
};
addToCart(product);
}}
className={`px-3 sm:px-4 py-1.5 transition-colors text-xs sm:text-sm font-medium ${
selectedSizes[101]
? 'bg-black text-white hover:bg-gray-800'
: 'bg-gray-300 text-gray-500 cursor-not-allowed'
}`}
>
{selectedSizes[101] ? `Add (${selectedSizes[101]})` : 'Select Size'}
</button>
</div>
</div>

{/* Featured Card 2 */}
<div
className="group cursor-pointer flex-shrink-0 w-64 sm:w-auto"
onMouseEnter={() => setHoveredProduct(102)}
onMouseLeave={() => setHoveredProduct(null)}
>
<div className="relative bg-gray-100 aspect-[3/4] mb-3 sm:mb-4 overflow-hidden">
<img
src={Pic28}
alt="Designer Bridal Lehenga"
className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
/>
<button
onClick={() => setQuickViewProduct({
id: 102,
name: "Designer Bridal Lehenga",
description: "Heavily embroidered bridal lehenga with zari and sequin work",
price: 3499,
image: Pic28,
category: "Lehengas"
})}
className="absolute top-3 sm:top-4 right-3 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md z-10"
>
<Eye className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
</button>
<div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<div className="flex flex-wrap gap-2 justify-center px-4">
{['S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'Custom'].map((size) => (
<button
key={size}
onClick={(e) => {
e.stopPropagation();
setSelectedSizes(prev => ({ ...prev, [102]: size }));
}}
className={`px-3 py-1.5 rounded transition-colors text-xs font-medium ${
selectedSizes[102] === size
? 'bg-emerald-500 text-white'
: 'bg-white text-black hover:bg-gray-200'
}`}
>
{size}
</button>
))}
</div>
</div>
</div>
<h3 className="font-medium mb-1 sm:mb-2 text-sm sm:text-base">Designer Bridal Lehenga</h3>
<p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 line-clamp-2">
Heavily embroidered bridal lehenga with zari and sequin work
</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<p className="font-semibold text-base sm:text-lg">₹3499</p>
</div>
<button
onClick={() => {
const product = {
id: 102,
name: "Designer Bridal Lehenga",
description: "Heavily embroidered bridal lehenga with zari and sequin work",
price: 3499,
image: Pic28,
category: "Lehengas"
};
addToCart(product);
}}
className={`px-3 sm:px-4 py-1.5 transition-colors text-xs sm:text-sm font-medium ${
selectedSizes[102]
? 'bg-black text-white hover:bg-gray-800'
: 'bg-gray-300 text-gray-500 cursor-not-allowed'
}`}
>
{selectedSizes[102] ? `Add (${selectedSizes[102]})` : 'Select Size'}
</button>
</div>
</div>

{/* Featured Card 3 */}
<div
className="group cursor-pointer flex-shrink-0 w-64 sm:w-auto"
onMouseEnter={() => setHoveredProduct(103)}
onMouseLeave={() => setHoveredProduct(null)}
>
<div className="relative bg-gray-100 aspect-[3/4] mb-3 sm:mb-4 overflow-hidden">
<img
src={Pic30}
alt="Floral Summer Dress"
className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
/>
<button
onClick={() => setQuickViewProduct({
id: 103,
name: "Floral Summer Dress",
description: "Lightweight cotton dress with beautiful floral prints perfect for summer",
price: 2999,
originalPrice: 3999,
image: Pic30,
category: "Dresses"
})}
className="absolute top-3 sm:top-4 right-3 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md z-10"
>
<Eye className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
</button>
<div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<div className="flex flex-wrap gap-2 justify-center px-4">
{['S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'Custom'].map((size) => (
<button
key={size}
onClick={(e) => {
e.stopPropagation();
setSelectedSizes(prev => ({ ...prev, [103]: size }));
}}
className={`px-3 py-1.5 rounded transition-colors text-xs font-medium ${
selectedSizes[103] === size
? 'bg-emerald-500 text-white'
: 'bg-white text-black hover:bg-gray-200'
}`}
>
{size}
</button>
))}
</div>
</div>
</div>
<h3 className="font-medium mb-1 sm:mb-2 text-sm sm:text-base">Floral Summer Dress</h3>
<p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 line-clamp-2">
Lightweight cotton dress with beautiful floral prints perfect for summer
</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<p className="font-semibold text-base sm:text-lg">₹2999</p>
<p className="text-xs sm:text-sm text-gray-400 line-through">₹3999</p>
</div>
<button
onClick={() => {
const product = {
id: 103,
name: "Floral Summer Dress",
description: "Lightweight cotton dress with beautiful floral prints perfect for summer",
price: 2999,
originalPrice: 3999,
image: Pic30,
category: "Dresses"
};
addToCart(product);
}}
className={`px-3 sm:px-4 py-1.5 transition-colors text-xs sm:text-sm font-medium ${
selectedSizes[103]
? 'bg-black text-white hover:bg-gray-800'
: 'bg-gray-300 text-gray-500 cursor-not-allowed'
}`}
>
{selectedSizes[103] ? `Add (${selectedSizes[103]})` : 'Select Size'}
</button>
</div>
</div>

{/* Featured Card 4 */}
<div
className="group cursor-pointer flex-shrink-0 w-64 sm:w-auto"
onMouseEnter={() => setHoveredProduct(104)}
onMouseLeave={() => setHoveredProduct(null)}
>
<div className="relative bg-gray-100 aspect-[3/4] mb-3 sm:mb-4 overflow-hidden">
<img
src= {Pic31}
alt="Pastel Party Lehenga"
className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
/>
<div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex gap-2 flex-wrap z-10">
<span className="bg-emerald-500 text-white text-xs px-2 sm:px-3 py-1 rounded shadow-sm">Best</span>
<span className="bg-cyan-400 text-white text-xs px-2 sm:px-3 py-1 rounded shadow-sm">New</span>
</div>
<button
onClick={() => setQuickViewProduct({
id: 104,
name: "Pastel Party Lehenga",
description: "Contemporary lehenga in soft pastel shades with mirror work details",
price: 13999,
originalPrice: 14599,
image: Pic31,
badges: ["Best", "New"],
category: "Lehengas"
})}
className="absolute top-3 sm:top-4 right-3 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md z-10"
>
<Eye className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
</button>
<div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<div className="flex flex-wrap gap-2 justify-center px-4">
{['S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'Custom'].map((size) => (
<button
key={size}
onClick={(e) => {
e.stopPropagation();
setSelectedSizes(prev => ({ ...prev, [104]: size }));
}}
className={`px-3 py-1.5 rounded transition-colors text-xs font-medium ${
selectedSizes[104] === size
? 'bg-emerald-500 text-white'
: 'bg-white text-black hover:bg-gray-200'
}`}
>
{size}
</button>
))}
</div>
</div>
</div>
<h3 className="font-medium mb-1 sm:mb-2 text-sm sm:text-base">Pastel Party Lehenga</h3>
<p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 line-clamp-2">
Contemporary lehenga in soft pastel shades with mirror work details
</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<p className="font-semibold text-base sm:text-lg">₹13999</p>
<p className="text-xs sm:text-sm text-gray-400 line-through">₹14599</p>
</div>
<button
onClick={() => {
const product = {
id: 104,
name: "Pastel Party Lehenga",
description: "Contemporary lehenga in soft pastel shades with mirror work details",
price: 650.00,
originalPrice: 800.00,
image: Pic31,
badges: ["Best", "New"],
category: "Lehengas"
};
addToCart(product);
}}
className={`px-3 sm:px-4 py-1.5 transition-colors text-xs sm:text-sm font-medium ${
selectedSizes[104]
? 'bg-black text-white hover:bg-gray-800'
: 'bg-gray-300 text-gray-500 cursor-not-allowed'
}`}
>
{selectedSizes[104] ? `Add (${selectedSizes[104]})` : 'Select Size'}
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
<div
key={product.id}
className="group bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
onMouseEnter={() => setHoveredProduct(product.id)}
onMouseLeave={() => setHoveredProduct(null)}
>
<div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
<img
src={product.image}
alt={product.name}
className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
/>
{product.badges && product.badges.length > 0 && (
<div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-wrap gap-1 sm:gap-2 z-10">
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
<div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<div className="flex flex-wrap gap-2 justify-center px-4">
{['S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'Custom'].map((size) => (
<button
key={size}
onClick={(e) => {
e.stopPropagation();
setSelectedSizes(prev => ({ ...prev, [product.id]: size }));
}}
className={`px-2 py-1 rounded transition-colors text-xs font-medium ${
selectedSizes[product.id] === size
? 'bg-emerald-500 text-white'
: 'bg-white text-black hover:bg-gray-200'
}`}
>
{size}
</button>
))}
</div>
</div>
<button
onClick={() => setQuickViewProduct(product)}
className="absolute top-2 right-2 sm:top-3 sm:right-3 w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md z-10"
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
<span className="text-sm sm:text-base lg:text-lg font-bold">
  {formatPrice(product.price)}
</span>

{product.originalPrice && (
<span className="text-[10px] sm:text-xs text-gray-400 line-through">
{formatPrice(product.originalPrice)}

</span>
)}
</div>
<button
onClick={(e) => {
e.stopPropagation();
if (selectedSizes[product.id]) {
addToCart(product);
}
}}
className={`px-2.5 sm:px-3 lg:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium w-full sm:w-auto transition-colors ${
selectedSizes[product.id]
? 'bg-black text-white hover:bg-gray-800'
: 'bg-gray-300 text-gray-500 cursor-not-allowed'
}`}
>
{selectedSizes[product.id] ? `Add (${selectedSizes[product.id]})` : 'Select Size'}
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
className="inline-flex items-center justify-center bg-black text-white px-8 sm:px-10 py-3 sm:py-4 hover:bg-gray-800 transition-all text-sm sm:text-base font-medium shadow-md hover:shadow-lg"
>
View More Products
</button>
</div>
)}
</div>
</section>

{/* Quick View Modal */}
{quickViewProduct && (
<ProductQuickView
product={quickViewProduct}
onClose={() => setQuickViewProduct(null)}
onAddToCart={(product, size, quantity) => addToCart(product, size, quantity)}
/>
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
<div
key={product.id}
className="group bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
onMouseEnter={() => setHoveredProduct(product.id)}
onMouseLeave={() => setHoveredProduct(null)}
>
<div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
<img
src={product.image}
alt={product.name}
className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
/>

{product.badges && (
<div className="absolute top-2 left-2 flex gap-1 flex-wrap z-10">
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

<div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<div className="flex flex-wrap gap-2 justify-center px-4">
{['S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'Custom'].map((size) => (
<button
key={size}
onClick={(e) => {
e.stopPropagation();
setSelectedSizes(prev => ({ ...prev, [product.id]: size }));
}}
className={`px-2 py-1 rounded transition-colors text-xs font-medium ${
selectedSizes[product.id] === size
? 'bg-emerald-500 text-white'
: 'bg-white text-black hover:bg-gray-200'
}`}
>
{size}
</button>
))}
</div>
</div>

<button
onClick={() => setQuickViewProduct(product)}
className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 z-10"
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
className={`px-3 py-1 text-[10px] sm:text-xs transition ${
selectedSizes[product.id]
? 'bg-black text-white hover:bg-gray-800'
: 'bg-gray-300 text-gray-500 cursor-not-allowed'
}`}
>
{selectedSizes[product.id] ? `Add (${selectedSizes[product.id]})` : 'Select Size'}
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
{cart.map((item, index) => (
<div key={`${item.id}-${item.size}-${index}`} className="flex gap-3 sm:gap-4 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b">
<img
src={item.image}
alt={item.name}
className="w-16 h-20 sm:w-20 sm:h-24 object-cover rounded"
/>
<div className="flex-1 min-w-0">
<h3 className="font-medium text-xs sm:text-sm mb-1 line-clamp-2">{item.name}</h3>
<p className="text-xs sm:text-sm text-gray-600 mb-1">Size: <span className="font-semibold">{item.size}</span></p>
<p className="text-xs sm:text-sm text-gray-600 mb-2">
  {formatPrice(item.price)}
</p>

<div className="flex items-center gap-2 sm:gap-3">
<button
onClick={() => removeFromCart(item.id, item.size)}
className="w-6 h-6 sm:w-7 sm:h-7 border rounded flex items-center justify-center hover:bg-gray-100"
>
<Minus className="w-3 h-3 sm:w-4 sm:h-4" />
</button>
<span className="text-xs sm:text-sm font-medium min-w-[20px] text-center">{item.quantity}</span>
<button
onClick={() => {
setSelectedSizes(prev => ({ ...prev, [item.id]: item.size }));
addToCart(item);
}}
className="w-6 h-6 sm:w-7 sm:h-7 border rounded flex items-center justify-center hover:bg-gray-100"
>
<Plus className="w-3 h-3 sm:w-4 sm:h-4" />
</button>
</div>
</div>
<div className="text-right">
<p className="font-semibold text-sm sm:text-base">
  {formatPrice(item.price * item.quantity)}
</p>

</div>
</div>
))}
</div>

<div className="p-4 sm:p-6 border-t bg-gray-50">
<div className="flex justify-between items-center mb-3 sm:mb-4">
<span className="text-base sm:text-lg font-semibold">Total</span>
<span className="text-xl sm:text-2xl font-bold">
  {formatPrice(cartTotal)}
</span>

</div>
<button
onClick={sendWhatsAppOrder}
className="w-full bg-black text-white py-3 sm:py-4 hover:bg-gray-800 transition-colors font-medium text-sm sm:text-base"
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