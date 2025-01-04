const express = require('express');
const router = express.Router();
const listingController = require('../controllers/listingController');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload'); // For image upload

router.post('/', auth, upload.array('images', 10), listingController.createListing);
router.get('/', listingController.getListings);
router.get('/:id', listingController.getListingDetails);
router.patch('/:id/availability', auth, listingController.updateAvailability);

module.exports = router;