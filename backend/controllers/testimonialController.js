const Testimonial = require('../models/Testimonial');

exports.getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching testimonials', error });
  }
};

exports.createTestimonial = async (req, res) => {
  try {
    const testimonial = new Testimonial(req.body);
    await testimonial.save();
    res.status(201).json({ message: 'Testimonial created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating testimonial', error });
  }
};
