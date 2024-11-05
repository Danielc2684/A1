// src/services/api.js
import axios from 'axios';

// Set base URL dynamically for development and production
const API = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000' });

// Request Interceptor
API.interceptors.request.use(
  (config) => {
    // Attach token to headers for authenticated requests, if available
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// Response Interceptor
API.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle response errors globally
    if (error.response) {
      // Unauthorized access - redirect to login if 401
      if (error.response.status === 401) {
        console.warn("Unauthorized access - redirecting to login.");
        localStorage.removeItem('token'); // Clear the token
        // Uncomment the line below to redirect if you have a login page
        // window.location.href = "/login";
      }
    } else {
      // Network error (e.g., server down or no internet)
      console.error("Network error - please check your connection or try again later.");
    }
    return Promise.reject(error);
  }
);

// API endpoints with error handling in the components for easier debugging

export const fetchServices = async () => {
  try {
    const { data } = await API.get('/api/services');
    return data;
  } catch (error) {
    throw new Error("Failed to fetch services");
  }
};

export const fetchTestimonials = async () => {
  try {
    const { data } = await API.get('/api/testimonials');
    return data;
  } catch (error) {
    throw new Error("Failed to fetch testimonials");
  }
};

export const submitBooking = async (bookingData) => {
  try {
    const { data } = await API.post('/api/bookings', bookingData);
    return data;
  } catch (error) {
    throw new Error("Failed to submit booking");
  }
};

export const fetchServiceById = async (id) => {
  try {
    const { data } = await API.get(`/api/services/${id}`);
    return data;
  } catch (error) {
    throw new Error("Failed to fetch service by ID");
  }
};

export const updateBooking = async (bookingId, bookingData) => {
  try {
    const { data } = await API.put(`/api/bookings/${bookingId}`, bookingData);
    return data;
  } catch (error) {
    throw new Error("Failed to update booking");
  }
};

export const deleteBooking = async (bookingId) => {
  try {
    await API.delete(`/api/bookings/${bookingId}`);
    return "Booking deleted successfully";
  } catch (error) {
    throw new Error("Failed to delete booking");
  }
};
