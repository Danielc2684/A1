// backend/models/Home.js
const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
  welcomeMessage: { type: String },
  featuredServices: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service' }],
  testimonials: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Testimonial' }],
});

module.exports = mongoose.model('Home', homeSchema);
