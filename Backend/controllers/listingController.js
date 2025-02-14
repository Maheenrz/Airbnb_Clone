const User = require('../models/user');
const Listing = require('../models/Listing');

const listingController = {
  // Create a new listing
  createListing: async (req, res) => {
    try {
      const imageFilenames = req.files.map(file => file.filename);
      const listingData = {
        ...req.body,
        host: req.user._id,
        image_urls: imageFilenames
      };
      const newListing = new Listing(listingData);
      await newListing.save();

      const user = await User.findById(req.user._id);
      if (user && !user.isHost) {
        user.isHost = true;
        await user.save();
      }

      res.status(201).json(newListing);
    } catch (error) {
      console.error('Error creating listing:', error.message); // Log the error
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Get listings
  getListings: async (req, res) => {
    try {
      const listings = await Listing.find().populate('host', 'name profilePicture rating');
      res.json(listings);
    } catch (error) {
      console.error('Error fetching listings:', error.message); // Log the error
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Get single listing details
  getListingDetails: async (req, res) => {
    try {
      const listing = await Listing.findById(req.params.id).populate('host', 'name profilePicture rating');
      if (!listing) {
        return res.status(404).json({ error: 'Listing not found' });
      }
      res.json(listing);
    } catch (error) {
      console.error('Error fetching listing details:', error.message); // Log the error
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Update listing availability
   updateAvailability: async (req, res) => {
    try {
      const { startDate, endDate } = req.body;
      const listing = await Listing.findById(req.params.id);
      if (!listing) return res.status(404).json({ error: 'Listing not found' });
  
      // Update the first availability range
      if (listing.availability.length === 0) {
        listing.availability.push({ startDate, endDate });
      } else {
        listing.availability[0].startDate = startDate;
        listing.availability[0].endDate = endDate;
      }
  
      await listing.save();
      res.json(listing);
    } catch (error) {
      console.error('Error updating availability:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Search listings
  searchListings: async (req, res) => {
    try {
      const { checkIn, checkOut, guests, destination } = req.query;

      const query = {};

      // Filter by guests
      if (guests) {
        query.maxGuests = { $gte: parseInt(guests) };
      }

      // Filter by destination
      if (destination) {
        query.destination = { $regex: destination, $options: 'i' }; // Case-insensitive search
      }

      // Filter by availability
      if (checkIn && checkOut) {
        query.availability = {
          $elemMatch: {
            startDate: { $lte: new Date(checkIn) },
            endDate: { $gte: new Date(checkOut) }
          }
        };
      }

      const listings = await Listing.find(query).populate('host', 'name profilePicture rating');
      res.json(listings); // Ensure the response is an array
    } catch (error) {
      console.error('Error searching listings:', error);
      res.status(500).json({ error: error.message });
    }
  },

  // Get listings for the authenticated host
  getHostListings: async (req, res) => {
    try {
      const listings = await Listing.find({ host: req.user._id });
      res.json(listings);
    } catch (error) {
      console.error('Error fetching host listings:', error);
      res.status(500).json({ error: error.message });
    }
  },

  // Delete listing by the authenticated host
   deleteListing: async (req, res) => {
    try {
      const listing = await Listing.findById(req.params.id);
      if (!listing) {
        return res.status(404).json({ error: 'Listing not found' });
      }
  
      // Verify that the authenticated user is the host of the listing
      if (listing.host.toString() !== req.user._id.toString()) {
        return res.status(403).json({ error: 'Unauthorized' });
      }
  
      console.log("Authenticated User:", req.user);
      await listing.deleteOne({ _id: req.params.id });
      res.json({ message: 'Listing deleted successfully' });
    } catch (error) {
      console.error('Error deleting listing:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};


module.exports = listingController;