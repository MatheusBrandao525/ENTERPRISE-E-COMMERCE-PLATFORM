const express = require('express');
const router = express.Router();
const { getVendors } = require('../controllers/vendorController');

router.get('/', getVendors);

module.exports = router;
