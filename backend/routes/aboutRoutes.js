// backend/routes/aboutRoutes.js
const express = require('express');
const { getAboutInfo, updateAboutInfo } = require('../controllers/aboutController');
const router = express.Router();

router.get('/', getAboutInfo);          // GET /api/about - Fetch About page information
router.put('/', updateAboutInfo);       // PUT /api/about - Update About page information

module.exports = router;
