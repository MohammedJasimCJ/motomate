const RideLog = require('../models/RideLog');

// Create a new ride log
exports.createRideLog = async (req, res) => {
  try {
    const rideLog = await RideLog.create({
      ...req.body,
      owner: req.user._id // assuming auth middleware attaches user
    });
    res.status(201).json(rideLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all ride logs for a user
exports.getRideLogs = async (req, res) => {
  try {
    const logs = await RideLog.find({ owner: req.user._id })
      .populate('bike', 'make model'); // show basic bike info
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a specific ride log
exports.updateRideLog = async (req, res) => {
  try {
    const updated = await RideLog.findOneAndUpdate(
      { _id: req.params.id, owner: req.user._id },
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: 'Ride log not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a ride log
exports.deleteRideLog = async (req, res) => {
  try {
    const deleted = await RideLog.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id
    });
    if (!deleted) return res.status(404).json({ error: 'Ride log not found' });
    res.json({ message: 'Ride log deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
