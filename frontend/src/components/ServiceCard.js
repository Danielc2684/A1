import React, { useState } from 'react';

const ServiceCard = ({ service }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => setFlipped(!flipped);

  return (
    <div
      className={`w-full h-64 relative perspective cursor-pointer`}
      onClick={handleFlip}
    >
      <div
        className={`transition-transform duration-500 transform ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front of the card */}
        <div className="absolute w-full h-full bg-white rounded-lg shadow-lg p-6">
          <img
            src={service.image || '/images/default-service.jpg'}
            alt={service.title}
            className="w-full h-32 rounded-lg object-cover mb-4"
          />
          <h3 className="text-2xl font-semibold text-[#4A4947] mb-2">
            {service.title}
          </h3>
          <p className="text-[#B17457] text-sm">Tap to learn more</p>
        </div>

        {/* Back of the card */}
        <div className="absolute w-full h-full bg-[#CBD2A4] rounded-lg shadow-lg p-6 transform rotate-y-180">
          <h3 className="text-2xl font-semibold text-[#4A4947] mb-2">
            {service.title}
          </h3>
          <p className="text-[#4A4947] text-sm mb-4">{service.description}</p>
          <p className="text-[#B17457] font-bold text-lg">Price: ${service.price}</p>
          <button className="mt-4 px-6 py-2 bg-[#B17457] text-white font-semibold rounded-md hover:bg-[#4A4947] transition duration-300 focus:outline-none">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
