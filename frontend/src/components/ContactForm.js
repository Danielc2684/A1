// src/components/ContactForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/contact', formData);
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message", error);
      alert("There was an error sending your message.");
    }
  };

  return (
    <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <input
        className="mb-4 w-full p-2 border rounded"
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        className="mb-4 w-full p-2 border rounded"
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <textarea
        className="mb-4 w-full p-2 border rounded"
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
      />
      <button className="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
