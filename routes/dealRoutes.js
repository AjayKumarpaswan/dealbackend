const express = require('express');
const {
  createDeal,
  updateDeal,
  getUserDeals,
  getDealById
} = require('../controllers/dealController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.use(auth); // All routes below require token

router.post('/', createDeal);
router.put('/:id', updateDeal);
router.get('/', getUserDeals);
router.get('/:id', getDealById); // ✅ MUST be after router.get('/')
 
module.exports = router;
