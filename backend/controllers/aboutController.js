// backend/controllers/aboutController.js
const About = require('../models/About');

exports.getAboutInfo = async (req, res) => {
  try {
    const aboutInfo = await About.findOne(); // Assuming a single document for the About page
    res.status(200).json(aboutInfo);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching About page information', error });
  }
};

// Optional: Update About information
exports.updateAboutInfo = async (req, res) => {
  try {
    const aboutInfo = await About.findOneAndUpdate({}, req.body, { new: true, upsert: true });
    res.status(200).json(aboutInfo);
  } catch (error) {
    res.status(500).json({ message: 'Error updating About page information', error });
  }
};
