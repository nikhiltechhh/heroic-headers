import React, { useState, useEffect } from 'react';
import { X, ShoppingBag, Heart, Star, TrendingUp } from 'lucide-react';

const Notifications = () => {
  const [notification, setNotification] = useState(null);

  const notificationData = [
    {
      type: 'purchase',
      icon: ShoppingBag,
      color: 'bg-blue-500',
      items: [
        { product: 'Chanda dress - Yellow', location: 'Hyderabad, India', time: '2 hours ago' },
        { product: 'Silk Saree - Red', location: 'Hyderabad, India', time: '1 hour ago' },
        { product: 'Kurti Set - Blue', location: 'Hyderabad, India', time: '30 minutes ago' },
        { product: 'Lehenga - Pink', location: 'Hyderabad, India', time: '45 minutes ago' }
      ]
    },
    {
      type: 'wishlist',
      icon: Heart,
      color: 'bg-pink-500',
      items: [
        { product: 'Designer Anarkali', location: 'Chennai, India', time: '15 minutes ago' },
        { product: 'Palazzo Set - Green', location: 'Pune, India', time: '25 minutes ago' },
        { product: 'Ethnic Gown', location: 'Kolkata, India', time: '40 minutes ago' }
      ]
    },
    {
      type: 'review',
      icon: Star,
      color: 'bg-yellow-500',
      items: [
        { product: 'Cotton Kurta - White', location: 'Ahmedabad, India', rating: 5, time: '1 hour ago' },
        { product: 'Half Sarees', location: 'Jaipur, India', rating: 5, time: '2 hours ago' },
        { product: 'Dupatta Set', location: 'Lucknow, India', rating: 4, time: '3 hours ago' }
      ]
    },
    {
      type: 'trending',
      icon: TrendingUp,
      color: 'bg-green-500',
      items: [
        { product: 'Festive Saree Collection', views: 245, time: '10 minutes ago' },
        { product: 'Summer Kurti Range', views: 189, time: '20 minutes ago' },
        { product: 'Wedding Lehenga', views: 312, time: '35 minutes ago' }
      ]
    }
  ];

  const getRandomNotification = () => {
    const randomType = notificationData[Math.floor(Math.random() * notificationData.length)];
    const randomItem = randomType.items[Math.floor(Math.random() * randomType.items.length)];
    
    return {
      id: Date.now(),
      type: randomType.type,
      icon: randomType.icon,
      color: randomType.color,
      data: randomItem
    };
  };

  useEffect(() => {
    // Show first notification immediately
    const showNotification = () => {
      const newNotification = getRandomNotification();
      setNotification(newNotification);

      // Auto remove after 5 seconds
      setTimeout(() => {
        setNotification(null);
      }, 5000);
    };

    // Show first notification
    showNotification();

    // Show new notification every 10-15 seconds (random)
    const scheduleNext = () => {
      const delay = Math.floor(Math.random() * 5000) + 10000; // 10-15 seconds
      setTimeout(() => {
        showNotification();
        scheduleNext();
      }, delay);
    };

    scheduleNext();
  }, []);

  const removeNotification = () => {
    setNotification(null);
  };

  const renderNotificationContent = (notification) => {
    const Icon = notification.icon;
    
    switch (notification.type) {
      case 'purchase':
        return (
          <div className="flex items-start gap-3 flex-1">
            <div className={`${notification.color} p-2 rounded-lg flex-shrink-0`}>
              <Icon className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 mb-0.5">
                Someone recently bought
              </p>
              <p className="text-sm text-gray-700 font-medium truncate">
                {notification.data.product}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {notification.data.time} • {notification.data.location}
              </p>
            </div>
          </div>
        );
      
      case 'wishlist':
        return (
          <div className="flex items-start gap-3 flex-1">
            <div className={`${notification.color} p-2 rounded-lg flex-shrink-0`}>
              <Icon className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 mb-0.5">
                Added to wishlist
              </p>
              <p className="text-sm text-gray-700 font-medium truncate">
                {notification.data.product}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {notification.data.time} • {notification.data.location}
              </p>
            </div>
          </div>
        );
      
      case 'review':
        return (
          <div className="flex items-start gap-3 flex-1">
            <div className={`${notification.color} p-2 rounded-lg flex-shrink-0`}>
              <Icon className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 mb-0.5">
                {notification.data.rating} Star Review
              </p>
              <p className="text-sm text-gray-700 font-medium truncate">
                {notification.data.product}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {notification.data.time} • {notification.data.location}
              </p>
            </div>
          </div>
        );
      
      case 'trending':
        return (
          <div className="flex items-start gap-3 flex-1">
            <div className={`${notification.color} p-2 rounded-lg flex-shrink-0`}>
              <Icon className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 mb-0.5">
                Trending Now 🔥
              </p>
              <p className="text-sm text-gray-700 font-medium truncate">
                {notification.data.product}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {notification.data.views} people viewing • {notification.data.time}
              </p>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm w-full">
      {notification && (
        <div
          key={notification.id}
          className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 flex items-start gap-2 animate-slide-in-left"
        >
          {renderNotificationContent(notification)}
          
          <button
            onClick={removeNotification}
            className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
      
      <style >{`
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.3s ease-out;
        }
        
        @media (max-width: 640px) {
          .fixed {
            left: 0.5rem;
            right: 0.5rem;
            max-width: calc(100% - 1rem);
          }
        }
      `}</style>
    </div>
  );
};

export default Notifications;