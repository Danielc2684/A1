// src/components/About/OriginSection.js
import React from 'react';

const OriginSection = () => (
  <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8 bg-[#CBD2A4] px-8 py-16 rounded-md text-[#4A4947] font-sans">
    <img
      src="/images/founder.jpg"
      alt="Founder of AYEONE"
      className="w-full max-w-md h-auto lg:max-w-lg rounded-xl object-cover shadow-lg"
    />
    <div className="max-w-2xl lg:ml-6 text-center lg:text-left">
      <h2 className="text-4xl font-bold mb-6">Our Origin</h2>
      <p className="text-lg mb-4 leading-relaxed">
        Founded in <strong>2015</strong> by <strong>Alex Johnson</strong>, a visionary hairstylist driven by passion and innovation, AYEONE began as a humble studio in <strong>Delray Beach</strong> and has blossomed into a renowned name in modern hairstyling.
      </p>
      <p className="text-lg mb-4 leading-relaxed">
        Alex’s commitment to <strong>artistic precision</strong> and <strong>client-centered service</strong> has built AYEONE’s reputation as a brand that delivers not only beauty but also an exceptional experience. Every client is seen as a unique canvas, with a goal to enhance individual style through a mix of creativity and refined techniques.
      </p>
      <p className="text-lg mb-4 leading-relaxed">
        Today, AYEONE is recognized for its <strong>signature cuts</strong>, <strong>vibrant color services</strong>, and unwavering dedication to client satisfaction. Our team continues to push the boundaries of hairstyling by attending global workshops and staying on top of industry trends.
      </p>
      <p className="text-lg leading-relaxed">
        Committed to <strong>sustainable practices</strong> and a welcoming environment, AYEONE is proud to be a trusted name in the community. We are excited to continue expanding our vision of beauty and creativity, one client at a time.
      </p>
    </div>
  </div>
);

export default OriginSection;
