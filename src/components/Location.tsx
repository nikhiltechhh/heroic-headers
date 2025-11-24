import React from 'react';

const Location = () => {
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d30435.8204237467!2d78.44534215!3d17.53243585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bcb97fda12a438d%3A0xb949624f9ddbf979!2s4%20%2C%20Plot%2C%20371%2C%20Lanco%20Hills%20Rd%2C%20near%20Genric%20Pharmacy%2C%20opp.%20Annapurna%20hotel%2C%20OU%20Colony%2C%20Shaikpet%2C%20Manikonda%2C%20Hyderabad%2C%20Telangana%20500104!3m2!1d17.4069494!2d78.39092699999999!5e0!3m2!1sen!2sin!4v1763977226412!5m2!1sen!2sin";
  
  const locationAddress = "4, Plot, 371, Lanco Hills Rd, near Generic Pharmacy, opp. Annapurna hotel, OU Colony, Shaikpet, Manikonda, Hyderabad, Telangana 500104";
  
  const handleMapClick = () => {
    window.open(`https://www.google.com/maps/dir//${encodeURIComponent(locationAddress)}`, '_blank');
  };

  return (
    <div className="w-full h-80 relative">
      <div 
        className="w-full h-full cursor-pointer relative group"
        onClick={handleMapClick}
      >
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="50%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Store Location Map"
          className="w-full h-full pointer-events-none"
        ></iframe>
        
        {/* Overlay to capture clicks */}
        <div className="absolute inset-0 bg-transparent group-hover:bg-black group-hover:bg-opacity-5 transition-all duration-200 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white px-6 py-3 rounded-full shadow-lg">
            <p className="text-gray-800 font-semibold text-sm">Tap to open in Google Maps</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;