// backend/controllers/portfolioController.js
const Portfolio = require('../models/Portfolio');

exports.getPortfolioItems = async (req, res) => {
  try {
    const portfolioItems = await Portfolio.find();
    res.status(200).json(portfolioItems);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching portfolio items', error });
  }
};

// Optional: Create a new portfolio item
exports.createPortfolioItem = async (req, res) => {
  try {
    const portfolioItem = new Portfolio(req.body);
    await portfolioItem.save();
    res.status(201).json({ message: 'Portfolio item created successfully', portfolioItem });
  } catch (error) {
    res.status(500).json({ message: 'Error creating portfolio item', error });
  }
};
