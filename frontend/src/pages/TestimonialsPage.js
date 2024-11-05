// src/components/TestimonialCarousel.js
import React from 'react';

const TestimonialCarousel = ({ testimonials = [] }) => {
  return (
    <div className="testimonial-carousel">
      {testimonials.length > 0 ? (
        testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <p>{testimonial?.text || "No testimonial text available"}</p>
            <span>- {testimonial?.author || "Anonymous"}</span>
          </div>
        ))
      ) : (
        <p>No testimonials available.</p>
      )}
    </div>
  );
};

export default TestimonialCarousel;
