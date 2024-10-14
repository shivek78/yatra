// backend/routes/yatra.js

const express = require('express');
const { createYatra, getYatras } = require('../controllers/yatraController');
const router = express.Router();

// Create Yatra route
router.post('/', createYatra);

// Get all Yatras route
router.get('/', getYatras);

module.exports = router;
