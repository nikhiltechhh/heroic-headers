import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Heart, Share2, Bookmark } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Complete Guide to Glass Skin: Achieving That Coveted Korean Glow",
    excerpt: "Discover the secrets behind the viral glass skin trend and learn how to achieve that luminous, translucent complexion that's taken the beauty world by storm.",
    content: "Glass skin has become one of the most sought-after beauty goals...",
    category: "Skincare Trends",
    author: "Dr. Sarah Kim",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    date: "Nov 15, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1200&h=800&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "Vitamin C vs. Niacinamide: Which Brightening Ingredient is Right for You?",
    excerpt: "Both are powerhouse ingredients for radiant skin, but which one should you choose? We break down the science and benefits of each.",
    content: "When it comes to brightening and evening out skin tone...",
    category: "Ingredient Spotlight",
    author: "Emma Chen",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    date: "Nov 12, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=1200&h=800&fit=crop",
    featured: true
  },
  {
    id: 3,
    title: "Your Ultimate Winter Skincare Routine: Combat Dryness and Dehydration",
    excerpt: "As temperatures drop, your skin needs extra care. Learn how to adjust your routine for the colder months and keep your skin hydrated and healthy.",
    content: "Winter weather can wreak havoc on your skin...",
    category: "Seasonal Care",
    author: "Michael Park",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    date: "Nov 10, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=1200&h=800&fit=crop",
    featured: true
  },
  {
    id: 4,
    title: "The Truth About Retinol: When to Start and How to Use It Safely",
    excerpt: "Retinol is the gold standard for anti-aging, but it can be intimidating. Our dermatologist explains everything you need to know.",
    content: "Retinol has long been celebrated as one of the most effective...",
    category: "Anti-Aging",
    author: "Dr. Lisa Martinez",
    authorImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
    date: "Nov 8, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=1200&h=800&fit=crop"
  },
  {
    id: 5,
    title: "Morning vs. Night Skincare: Why Your Routine Should Change",
    excerpt: "Your skin has different needs throughout the day. Learn how to optimize your AM and PM routines for maximum benefits.",
    content: "Many people use the same products morning and night...",
    category: "Routine Tips",
    author: "Jessica Wong",
    authorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    date: "Nov 5, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1200&h=800&fit=crop"
  },
  {
    id: 6,
    title: "Acne-Prone Skin? Here's What You Need to Know About Clay Masks",
    excerpt: "Clay masks can be a game-changer for acne-prone skin. Discover which types work best and how often you should use them.",
    content: "Clay masks have been used for centuries to purify and detoxify...",
    category: "Acne Solutions",
    author: "Daniel Kim",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    date: "Nov 3, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=1200&h=800&fit=crop"
  },
  {
    id: 7,
    title: "Sunscreen Myths Debunked: What You Really Need to Know About SPF",
    excerpt: "Are you making these common sunscreen mistakes? We're separating fact from fiction when it comes to sun protection.",
    content: "Sunscreen is the most important step in any skincare routine...",
    category: "Sun Protection",
    author: "Dr. Rachel Green",
    authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    date: "Nov 1, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1556228841-b3b3eb1c4035?w=1200&h=800&fit=crop"
  },
  {
    id: 8,
    title: "The Minimalist Skincare Routine: Less is More for Sensitive Skin",
    excerpt: "If you have sensitive skin, a simplified routine might be the answer. Learn which products are truly essential.",
    content: "In a world of 10-step skincare routines...",
    category: "Sensitive Skin",
    author: "Amy Liu",
    authorImage: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop",
    date: "Oct 29, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1200&h=800&fit=crop"
  },
  {
    id: 9,
    title: "Hyaluronic Acid 101: The Hydration Hero Your Skin Needs",
    excerpt: "This moisture-binding ingredient is everywhere in skincare. Here's why it deserves a spot in your routine.",
    content: "Hyaluronic acid has become one of the most popular ingredients...",
    category: "Ingredient Spotlight",
    author: "Dr. James Park",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    date: "Oct 26, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=1200&h=800&fit=crop"
  }
];

const categories = [
  "All Posts",
  "Skincare Trends",
  "Ingredient Spotlight",
  "Seasonal Care",
  "Anti-Aging",
  "Routine Tips",
  "Acne Solutions",
  "Sun Protection",
  "Sensitive Skin"
];

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [bookmarks, setBookmarks] = useState<number[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [email, setEmail] = useState("");

  const toggleFavorite = (postId: number) => {
    setFavorites(prev =>
      prev.includes(postId)
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const toggleBookmark = (postId: number) => {
    setBookmarks(prev =>
      prev.includes(postId)
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const handleSubscribe = () => {
    if (email) {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail("");
    }
  };

  const filteredPosts = selectedCategory === "All Posts"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const displayedPosts = showAll ? filteredPosts : filteredPosts.slice(0, 6);
  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-4 tracking-tight">
              Beauty & Skincare Blog
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert insights, skincare tips, and the latest trends to help you achieve your healthiest, most radiant skin
            </p>
          </div>

          {/* Featured Posts - Horizontal Scroll on Mobile */}
          <div className="mb-16">
            <h2 className="text-2xl font-light mb-6">Featured Articles</h2>
            <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 sm:overflow-visible sm:mx-0 sm:px-0">
              <div className="flex gap-6 sm:grid sm:grid-cols-3">
                {featuredPosts.map((post) => (
                  <div
                    key={post.id}
                    className="group cursor-pointer flex-shrink-0 w-80 sm:w-auto"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-white text-black text-xs px-3 py-1 rounded-full font-medium">
                          Featured
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 flex gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(post.id);
                          }}
                          className={`w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors ${
                            favorites.includes(post.id) ? 'text-red-500' : 'text-gray-700'
                          }`}
                        >
                          <Heart
                            className="w-4 h-4"
                            fill={favorites.includes(post.id) ? 'currentColor' : 'none'}
                          />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleBookmark(post.id);
                          }}
                          className={`w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors ${
                            bookmarks.includes(post.id) ? 'text-emerald-500' : 'text-gray-700'
                          }`}
                        >
                          <Bookmark
                            className="w-4 h-4"
                            fill={bookmarks.includes(post.id) ? 'currentColor' : 'none'}
                          />
                        </button>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <span className="text-xs text-emerald-600 font-medium uppercase tracking-wide">
                        {post.category}
                      </span>
                      <h3 className="font-semibold text-xl leading-tight line-clamp-2 group-hover:text-emerald-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-3">
                          <img
                            src={post.authorImage}
                            alt={post.author}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <div className="text-sm">
                            <p className="font-medium text-gray-900">{post.author}</p>
                          </div>
                        </div>
                        <button className="text-emerald-600 hover:text-emerald-700 transition-colors">
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Blog Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
              <div className="flex gap-3 min-w-max sm:flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                      selectedCategory === category
                        ? 'bg-black text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPosts.map((post) => (
              <article
                key={post.id}
                className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(post.id);
                      }}
                      className={`w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors ${
                        favorites.includes(post.id) ? 'text-red-500' : 'text-gray-700'
                      }`}
                    >
                      <Heart
                        className="w-4 h-4"
                        fill={favorites.includes(post.id) ? 'currentColor' : 'none'}
                      />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleBookmark(post.id);
                      }}
                      className={`w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors ${
                        bookmarks.includes(post.id) ? 'text-emerald-500' : 'text-gray-700'
                      }`}
                    >
                      <Bookmark
                        className="w-4 h-4"
                        fill={bookmarks.includes(post.id) ? 'currentColor' : 'none'}
                      />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className="w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors text-gray-700"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-xs text-emerald-600 font-medium uppercase tracking-wide">
                      {post.category}
                    </span>
                  </div>

                  <h2 className="font-semibold text-xl leading-tight line-clamp-2 group-hover:text-emerald-600 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-sm text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-3">
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{post.author}</p>
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className="text-emerald-600 hover:text-emerald-700 transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More / Show Less */}
          {filteredPosts.length > 6 && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-medium"
              >
                {showAll ? 'Show Less' : `Load More Articles (${filteredPosts.length - 6} more)`}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-light mb-4">Stay in the Glow</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for exclusive skincare tips, product launches, and beauty insights delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-emerald-500"
            />
            <button
              onClick={handleSubscribe}
              className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-medium whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates
          </p>
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
    </div>
  );
};

export default Blog;