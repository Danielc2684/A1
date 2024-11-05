import React from 'react';

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-[#CBD2A4] p-6 rounded-lg shadow-md max-w-md transition-transform duration-300 hover:scale-105">
    <p className="text-[#4A4947] italic mb-4">"{testimonial.text}"</p>
    <div className="flex flex-col items-center">
      <img
        src={testimonial.image || '/images/default-avatar.jpg'}
        alt={testimonial.author}
        className="w-16 h-16 rounded-full object-cover mb-2"
      />
      <p className="text-[#4A4947] font-bold">{testimonial.author}</p>
      <p className="text-sm text-[#9A7E6F]">{testimonial.date}</p>
    </div>
  </div>
);

export default TestimonialCard;
