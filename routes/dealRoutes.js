const express = require('express');
const { createDeal, updateDeal, getUserDeals } = require('../controllers/dealController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();
router.use(auth);
router.post('/', createDeal);
router.put('/:id', updateDeal);
router.get('/', getUserDeals);
module.exports = router;