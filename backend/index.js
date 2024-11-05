// backend/index.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const bookingRoutes = require('./routes/bookingRoutes');
const contactRoutes = require('./routes/contactRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');
const aboutRoutes = require('./routes/aboutRoutes');
const homeRoutes = require('./routes/homeRoutes');  // Home route
const portfolioRoutes = require('./routes/portfolioRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Request Logging Middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} request to ${req.originalUrl}`);
  next();
});

// API Routes
app.use('/', homeRoutes);                  // Root route for homepage data
app.use('/bookings', bookingRoutes);
app.use('/contact', contactRoutes);
app.use('/services', serviceRoutes);
app.use('/testimonials', testimonialRoutes);
app.use('/about', aboutRoutes);
app.use('/portfolio', portfolioRoutes);

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Catch-all route to serve React's index.html for undefined routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

// Connect to MongoDB and start the server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((error) => console.log('Error connecting to MongoDB:', error.message));
