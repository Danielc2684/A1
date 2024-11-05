// backend/routes/portfolioRoutes.js
const express = require('express');
const { getPortfolioItems, createPortfolioItem } = require('../controllers/portfolioController');
const router = express.Router();

router.get('/', getPortfolioItems);          // GET /api/portfolio - Fetch portfolio items
router.post('/', createPortfolioItem);       // POST /api/portfolio - Add a new portfolio item

module.exports = router;
