import React from 'react';

const HeroSection = () => (
  <div className="bg-gradient-to-b from-[#CBD2A4] to-[#9A7E6F] h-screen flex flex-col lg:flex-row items-center justify-center px-8 lg:px-24 py-16 text-[#4A4947] font-sans">
    
    {/* Profile Image Section */}
    <div className="lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0 lg:mr-10">
      <img
        src="/images/stylist-profile.jpg"
        alt="AYEONE Stylist"
        className="w-80 h-60 lg:w-[28rem] lg:h-[20rem] rounded-lg object-cover shadow-xl"
      />
    </div>
    
    {/* Text Section */}
    <div className="lg:w-1/2 flex flex-col items-center lg:items-start space-y-6 text-center lg:text-left">
      <h1 className="text-5xl lg:text-6xl font-bold text-[#4A4947]">
        Welcome to <span className="text-[#B17457]">AYEONE</span>
      </h1>
      <p className="text-lg lg:text-xl max-w-lg">
        Where Style Meets Perfection. Discover the art of hairstyling with precision and creativity for an unforgettable experience.
      </p>
      
      {/* Introduction and CTA Section */}
      <div className="space-y-4 max-w-lg">
        <p className="text-md lg:text-lg">
          AYEONE offers a range of premium hairstyling services—from cuts and coloring to special occasion styling—all with a commitment to excellence and client satisfaction.
        </p>
        <div className="flex justify-center lg:justify-start">
          <button className="px-10 py-3 bg-[#B17457] text-white font-semibold rounded-md hover:bg-[#4A4947] transition duration-300 focus:outline-none focus:ring-4 focus:ring-[#9A7E6F]">
            Book Now
          </button>
        </div>
      </div>
    </div>
    
  </div>
);

export default HeroSection;
