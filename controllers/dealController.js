const Deal = require('../models/Deal');
exports.createDeal = async (req, res) => {
  try {
    const { title, description, price, seller } = req.body;
    if (!title || !description || !price || !seller) {
      return res.status(400).json({ msg: 'All fields are required' });
    }

    const deal = await Deal.create({
      title,
      description,
      price,
      seller,
      buyer: req.user.id
    });

    res.status(201).json(deal);
  } catch (err) {
    console.log("Error while creating deal", err);
    res.status(500).json({ msg: 'Failed to create deal', error: err });
  }
};
exports.updateDeal = async (req, res) => {
  try {
    const deal = await Deal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(deal);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to update deal', error: err });
  }
};
exports.getUserDeals = async (req, res) => {
  try {
    const deals = await Deal.find({
      $or: [{ buyer: req.user.id }, { seller: req.user.id }]
    }).populate('buyer', 'username').populate('seller', 'username'); // 💡 Optional: populate usernames

    res.status(200).json(deals);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to fetch deals', error: err });
  }
};

