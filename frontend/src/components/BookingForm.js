import React from 'react';

const BookingForm = () => (
  <form className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">Book an Appointment</h2>
    <input className="mb-4 w-full p-2 border rounded" type="text" placeholder="Name" />
    <input className="mb-4 w-full p-2 border rounded" type="email" placeholder="Email" />
    <input className="mb-4 w-full p-2 border rounded" type="date" placeholder="Preferred Date" />
    <button className="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Submit</button>
  </form>
);

export default BookingForm;
