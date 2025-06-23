const Message = require('../models/Message');
exports.sendMessage = async (req, res) => {
  try {
    const msg = await Message.create({ ...req.body, sender: req.user.id });
    res.status(201).json(msg);
  } catch (err) {
    res.status(500).json({ msg: 'Message failed', error: err });
  }
};
exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find({ dealId: req.params.dealId });
    res.status(200).json(messages);

    console.log("Messages fetched successfully for deal ID:",message);
  } catch (err) {
    res.status(500).json({ msg: 'Fetch failed', error: err });
  }
};