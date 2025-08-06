const mongoose = require('mongoose');

const rideLogSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bike: { type: mongoose.Schema.Types.ObjectId, ref: 'Bike', required: true },
  date: { type: Date, default: Date.now, required: true },
  distance: { type: Number, required: true }, // in kilometers or miles
  startLocation: { type: String },
  endLocation: { type: String },
  notes: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('RideLog', rideLogSchema);
