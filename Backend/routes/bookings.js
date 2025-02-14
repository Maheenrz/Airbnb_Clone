const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const auth = require('../middleware/auth');

router.post('/', auth, bookingController.createBooking);
router.get('/user', auth, bookingController.getUserBookings);
router.delete('/:id', auth, bookingController.deleteBooking);
router.get('/listing/:listingId', auth, bookingController.getListingBookings);

module.exports = router;