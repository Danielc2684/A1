// src/components/About/VideoSection.js
import React from 'react';

const VideoSection = () => (
  <div className="bg-[#CBD2A4] py-16 px-8 font-sans text-[#4A4947] flex flex-col items-center space-y-8">
    <h2 className="text-4xl font-bold mb-6 text-center">Watch Our Story</h2>
    <p className="text-lg text-center max-w-2xl mb-8">
      Discover what makes AYEONE unique and meet the passionate team dedicated to crafting your perfect style.
    </p>
    <div className="w-full max-w-3xl aspect-video bg-[#9A7E6F] rounded-lg shadow-lg overflow-hidden">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/example-video-id"
        title="Promotional Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
);

export default VideoSection;
