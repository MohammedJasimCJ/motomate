const express = require('express');
const router = express.Router();
const { createBike, getBikes, updateBike, deleteBike } = require('../controllers/bikeController');
const auth = require('../middleware/auth'); // middleware to protect routes

router.use(auth); // Apply auth middleware to all below

router.post('/', createBike);
router.get('/', getBikes);
router.put('/:id', updateBike);
router.delete('/:id', deleteBike);

module.exports = router;
