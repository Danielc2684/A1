// backend/routes/homeRoutes.js
const express = require('express');
const { getHomePageData } = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomePageData); // GET /api/home - Fetch Home page data

module.exports = router;
