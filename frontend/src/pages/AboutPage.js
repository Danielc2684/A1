// src/pages/AboutPage.js
import React from 'react';
import OriginSection from '../components/About/OriginSection';
import MissionGoalsSection from '../components/About/MissionGoalsSection';
import TeamSection from '../components/About/TeamSection';
import HoursSection from '../components/About/HoursSection';
import VideoSection from '../components/About/VideoSection';

const AboutPage = () => (
  <div className="bg-[#CBD2A4] min-h-screen pt-24 pb-8 text-[#4A4947] font-sans">
    <div className="container mx-auto px-8 space-y-12">
      <h1 className="text-5xl font-bold text-center mb-6">About AYEONE</h1>
      <p className="text-lg text-center max-w-2xl mx-auto mb-8">
        AYEONE is more than just a hairstyling service—it's a creative experience dedicated to providing clients with exceptional, personalized transformations. With years of industry experience, our team is passionate about helping you look and feel your best.
      </p>

      <OriginSection />
      <MissionGoalsSection />
      <TeamSection />
      <HoursSection />
      <VideoSection />
    </div>
  </div>
);

export default AboutPage;
