// src/components/GoogleMap.js
import React from 'react';

const GoogleMap = () => (
  <div className="w-full h-64 md:h-full">
    <iframe
      title="AYEONE Location"
      src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAP_EMBED_URL"
      width="100%"
      height="100%"
      frameBorder="0"
      style={{ border: 0 }}
      allowFullScreen=""
      aria-hidden="false"
      tabIndex="0"
    ></iframe>
  </div>
);

export default GoogleMap;
