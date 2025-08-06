const mongoose = require('mongoose');

const bikeSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number },
  vin: { type: String },
  registrationNumber: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Bike', bikeSchema);
