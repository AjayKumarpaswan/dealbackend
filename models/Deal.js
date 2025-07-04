const mongoose = require('mongoose');
const dealSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Completed', 'Cancelled'],
    default: 'Pending'
  }
  ,
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true }); // 💡 Add this to auto-track createdAt and updatedAt

module.exports = mongoose.model('Deal', dealSchema);
