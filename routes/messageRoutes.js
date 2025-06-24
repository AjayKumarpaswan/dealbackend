const express = require('express');
const { sendMessage, getMessages } = require('../controllers/messageController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();
router.use(auth);

router.post('/', sendMessage);           // POST /api/messages
router.get('/:dealId', getMessages);     // GET /api/messages/:dealId

module.exports = router;
