const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  text: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Testimonial', testimonialSchema);
