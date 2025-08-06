const Bike = require('../models/Bike');

// Create new bike
exports.createBike = async (req, res) => {
  try {
    const bike = await Bike.create({ ...req.body, owner: req.user._id });
    res.status(201).json(bike);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all bikes for logged-in user
exports.getBikes = async (req, res) => {
  try {
    const bikes = await Bike.find({ owner: req.user._id });
    res.json(bikes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update bike by ID
exports.updateBike = async (req, res) => {
  try {
    const updated = await Bike.findOneAndUpdate(
      { _id: req.params.id, owner: req.user._id },
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: 'Bike not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete bike by ID
exports.deleteBike = async (req, res) => {
  try {
    const deleted = await Bike.findOneAndDelete({ _id: req.params.id, owner: req.user._id });
    if (!deleted) return res.status(404).json({ error: 'Bike not found' });
    res.json({ message: 'Bike deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
