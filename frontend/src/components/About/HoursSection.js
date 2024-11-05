// src/components/About/HoursSection.js
import React from 'react';

const HoursSection = () => (
  <div className="bg-[#CBD2A4] py-16 px-8 font-sans text-[#4A4947] flex flex-col items-center space-y-8">
    <h2 className="text-4xl font-bold mb-6 text-center">Our Hours</h2>
    <p className="text-lg text-center max-w-2xl mb-8">
      We’re open throughout the week to bring you the best in hairstyling and beauty. Schedule an appointment that fits your needs.
    </p>
    <div className="text-center space-y-4 max-w-xl">
      <div>
        <h3 className="text-2xl font-semibold">Monday - Friday</h3>
        <p className="text-lg font-medium text-[#4A4947]">9:00 AM - 6:00 PM</p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold">Saturday</h3>
        <p className="text-lg font-medium text-[#4A4947]">10:00 AM - 4:00 PM</p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold">Sunday</h3>
        <p className="text-lg font-medium text-[#4A4947]">Closed</p>
      </div>
    </div>
  </div>
);

export default HoursSection;
