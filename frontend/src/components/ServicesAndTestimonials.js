import React from 'react';
import ServiceCard from './ServiceCard';
import TestimonialCard from './TestimonialCard';

const ServicesAndTestimonials = ({ services = [], testimonials = [] }) => (
  <div className="bg-gradient-to-b from-[#9A7E6F] to-[#CBD2A4] py-16 px-8 lg:px-24 text-[#4A4947] font-sans">
    
    {/* Featured Services Section */}
    <section className="mb-16">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#4A4947]">
        Our Featured Services
      </h2>
      <p className="text-center text-lg mb-10 text-[#B17457]">
        Discover our premium hairstyling services designed to enhance your style.
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.length > 0 ? (
          services.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">
            Currently, no services are available. Check back soon!
          </p>
        )}
      </div>
    </section>

    {/* Client Testimonials Section */}
    <section className="bg-[#4A4947] py-12 px-6 lg:px-16 rounded-lg shadow-lg text-[#CBD2A4]">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#CBD2A4]">
        What Our Clients Say
      </h2>
      <p className="text-center text-lg mb-10 text-[#B17457]">
        Hear from clients who have experienced the AYEONE difference.
      </p>
      <div className="flex flex-col items-center space-y-8">
        {testimonials.length > 0 ? (
          testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial._id} testimonial={testimonial} />
          ))
        ) : (
          <p className="text-center text-gray-200">
            No testimonials available at the moment.
          </p>
        )}
      </div>
    </section>
    
  </div>
);

export default ServicesAndTestimonials;
