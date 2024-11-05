// backend/models/Portfolio.js
const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  imageUrl: { type: String, required: true },   // URL for portfolio images
  category: { type: String },                   // Optional: category for filtering
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
