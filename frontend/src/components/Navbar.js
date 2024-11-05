import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-[#CBD2A4] shadow-lg z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-3xl font-bold text-[#4A4947] hover:text-[#B17457] transition-colors duration-300">
          AYEONE
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-[#4A4947] hover:text-[#B17457] transition-colors duration-300">Home</Link>
          <Link to="/about" className="text-[#4A4947] hover:text-[#B17457] transition-colors duration-300">About</Link>
          <Link to="/services" className="text-[#4A4947] hover:text-[#B17457] transition-colors duration-300">Services</Link>
          <Link to="/portfolio" className="text-[#4A4947] hover:text-[#B17457] transition-colors duration-300">Portfolio</Link>
          <Link to="/testimonials" className="text-[#4A4947] hover:text-[#B17457] transition-colors duration-300">Testimonials</Link>
          <Link to="/contact" className="text-[#4A4947] hover:text-[#B17457] transition-colors duration-300">Contact</Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-[#4A4947] focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#CBD2A4] shadow-md">
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link to="/" onClick={toggleMenu} className="text-[#4A4947] hover:text-[#B17457] transition-colors duration-300">Home</Link>
            <Link to="/about" onClick={toggleMenu} className="text-[#4A4947] hover:text-[#B17457] transition-colors duration-300">About</Link>
            <Link to="/services" onClick={toggleMenu} className="text-[#4A4947] hover:text-[#B17457] transition-colors duration-300">Services</Link>
            <Link to="/portfolio" onClick={toggleMenu} className="text-[#4A4947] hover:text-[#B17457] transition-colors duration-300">Portfolio</Link>
            <Link to="/testimonials" onClick={toggleMenu} className="text-[#4A4947] hover:text-[#B17457] transition-colors duration-300">Testimonials</Link>
            <Link to="/contact" onClick={toggleMenu} className="text-[#4A4947] hover:text-[#B17457] transition-colors duration-300">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
