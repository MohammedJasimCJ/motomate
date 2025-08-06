const express = require('express');
const router = express.Router();
const {
  createRideLog,
  getRideLogs,
  updateRideLog,
  deleteRideLog
} = require('../controllers/rideLogController');
const auth = require('../middleware/auth'); // assuming you have this

router.use(auth);

router.post('/', createRideLog);
router.get('/', getRideLogs);
router.put('/:id', updateRideLog);
router.delete('/:id', deleteRideLog);

module.exports = router;
