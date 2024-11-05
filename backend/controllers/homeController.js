// backend/controllers/homeController.js
const Home = require('../models/Home');

exports.getHomePageData = async (req, res) => {
  try {
    const homeData = await Home.findOne()
      .populate('featuredServices')      // Fetch detailed information for featured services
      .populate('testimonials');         // Fetch detailed testimonials
    res.status(200).json(homeData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Home page data', error });
  }
};
