// src/components/About/MissionSection.js
import React from 'react';
import { FaStar, FaPaintBrush, FaSmile, FaHandHoldingHeart } from 'react-icons/fa';

const MissionSection = () => (
  <div className="bg-[#CBD2A4] text-[#4A4947] py-16 px-8 rounded-md font-sans flex flex-col items-center space-y-8">
    <h2 className="text-4xl font-bold mb-6 text-center">Our Mission & Goals</h2>
    <p className="text-lg text-center max-w-2xl mb-8">
      At AYEONE, our mission is to redefine hairstyling by providing personalized, high-quality experiences that empower clients to express their unique style and confidence. Here are our guiding principles:
    </p>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 text-center max-w-4xl">
      <div className="flex flex-col items-center space-y-4">
        <FaPaintBrush className="text-[#B17457] text-5xl" />
        <p className="text-xl font-semibold">Creative & Personalized Experiences</p>
        <p className="text-md">We tailor each session to reflect your individual style and vision.</p>
      </div>
      
      <div className="flex flex-col items-center space-y-4">
        <FaStar className="text-[#B17457] text-5xl" />
        <p className="text-xl font-semibold">Highest Standards of Precision</p>
        <p className="text-md">Our stylists are committed to excellence and attention to detail.</p>
      </div>
      
      <div className="flex flex-col items-center space-y-4">
        <FaSmile className="text-[#B17457] text-5xl" />
        <p className="text-xl font-semibold">Empower Unique Style & Confidence</p>
        <p className="text-md">We believe in helping you express your authentic self through style.</p>
      </div>
      
      <div className="flex flex-col items-center space-y-4">
        <FaHandHoldingHeart className="text-[#B17457] text-5xl" />
        <p className="text-xl font-semibold">Welcoming & Innovative Environment</p>
        <p className="text-md">Our salon is a space for all clients to feel comfortable and inspired.</p>
      </div>
    </div>
  </div>
);

export default MissionSection;
