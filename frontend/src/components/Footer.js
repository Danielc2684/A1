// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-[#4A4947] text-[#CBD2A4] py-8 px-6">
    <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
      
      {/* Branding */}
      <div className="mb-4 lg:mb-0">
        <h2 className="text-2xl font-bold text-[#B17457]">AYEONE</h2>
        <p className="text-sm">Where Style Meets Perfection</p>
      </div>

      {/* Links Section */}
      <div className="flex flex-wrap justify-center lg:justify-start space-x-6 mb-4 lg:mb-0">
        <Link to="/" className="hover:text-[#B17457]">Home</Link>
        <Link to="/about" className="hover:text-[#B17457]">About</Link>
        <Link to="/services" className="hover:text-[#B17457]">Services</Link>
        <Link to="/portfolio" className="hover:text-[#B17457]">Portfolio</Link>
        <Link to="/testimonials" className="hover:text-[#B17457]">Testimonials</Link>
        <Link to="/contact" className="hover:text-[#B17457]">Contact</Link>
      </div>

      {/* Social Media Links */}
      <div className="space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B17457]">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B17457]">Instagram</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B17457]">Twitter</a>
      </div>
    </div>
    <div className="text-center text-sm text-gray-400 mt-4">
      &copy; {new Date().getFullYear()} AYEONE. All rights reserved.
    </div>
  </footer>
);

export default Footer;
