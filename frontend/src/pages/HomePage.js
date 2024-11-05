// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import ServicesAndTestimonials from '../components/ServicesAndTestimonials';
import { fetchServices, fetchTestimonials } from '../services/api';

const HomePage = () => {
  const [services, setServices] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getServices = async () => {
      try {
        const { data } = await fetchServices();
        setServices(data || []);
      } catch (err) {
        setError("Failed to load services");
      }
    };

    const getTestimonials = async () => {
      try {
        const { data } = await fetchTestimonials();
        setTestimonials(data || []);
      } catch (err) {
        setError("Failed to load testimonials");
      }
    };

    getServices();
    getTestimonials();
  }, []);

  return (
    <div>
      <HeroSection />
      {error && <p className="text-red-500 text-center p-4">{error}</p>}
      <ServicesAndTestimonials services={services} testimonials={testimonials} />
    </div>
  );
};

export default HomePage;
