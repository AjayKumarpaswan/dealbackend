const mongoose = require('mongoose');
const messageSchema = new mongoose.Schema({
  dealId: { type: mongoose.Schema.Types.ObjectId, ref: 'Deal' },
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: String,
  timestamp: { type: Date, default: Date.now },
  read: { type: Boolean, default: false }
});
module.exports = mongoose.model('Message', messageSchema);