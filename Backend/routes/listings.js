const express = require('express');
const router = express.Router();
const listingController = require('../controllers/listingController');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

router.post('/', auth, upload.array('images', 10), listingController.createListing);
router.get('/search', listingController.searchListings); 
router.get('/host', auth, listingController.getHostListings); 
router.get('/', listingController.getListings); 
router.get('/:id', listingController.getListingDetails); 
router.delete('/:id', auth, listingController.deleteListing);
router.patch('/:id/availability', auth, listingController.updateAvailability);


module.exports = router;