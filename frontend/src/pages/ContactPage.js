// src/pages/ContactPage.js
import React from 'react';
import ContactForm from '../components/ContactForm';
import GoogleMap from '../components/GoogleMap';

const ContactPage = () => (
  <div className="container mx-auto p-8">
    <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
    <div className="flex flex-col md:flex-row justify-between items-start">
      <ContactForm />
      <div className="mt-6 md:mt-0 md:ml-10 w-full md:w-1/2">
        <GoogleMap />
      </div>
    </div>
  </div>
);

export default ContactPage;
