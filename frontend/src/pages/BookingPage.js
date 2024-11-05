// src/pages/BookingPage.js
import React from 'react';
import BookingForm from '../components/BookingForm';

const BookingPage = () => (
  <div className="container mx-auto p-8">
    <h1 className="text-4xl font-bold text-center mb-6">Book an Appointment</h1>
    <BookingForm />
  </div>
);

export default BookingPage;
