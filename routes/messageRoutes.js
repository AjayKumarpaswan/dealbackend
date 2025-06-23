const express = require('express');
const { sendMessage, getMessages } = require('../controllers/messageController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();
router.use(auth);
router.post('/', sendMessage);
router.get('/:dealId', getMessages);
module.exports = router;
