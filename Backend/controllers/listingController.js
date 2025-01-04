const listingController = {
    // Create a new listing
    createListing: async (req, res) => {
      try {
        const listing = new Listing({
          ...req.body,
          host: req.user._id, // From auth middleware
          image_urls: req.files?.map(file => file.path) // Assuming image upload
        });
        await listing.save();
        res.status(201).json(listing);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    },
  
    // Get listings with filters
    getListings: async (req, res) => {
      try {
        const {
          city,
          priceMin,
          priceMax,
          category,
          guests,
          checkIn,
          checkOut
        } = req.query;
  
        let query = {};
  
        // Build filter query
        if (city) query['location.city'] = new RegExp(city, 'i');
        if (category) query.category = category;
        if (priceMin || priceMax) {
          query.price_per_night = {};
          if (priceMin) query.price_per_night.$gte = parseInt(priceMin);
          if (priceMax) query.price_per_night.$lte = parseInt(priceMax);
        }
        if (guests) query.maxGuests = { $gte: parseInt(guests) };
  
        // Check availability if dates are provided
        if (checkIn && checkOut) {
          query.availability = {
            $elemMatch: {
              startDate: { $lte: new Date(checkIn) },
              endDate: { $gte: new Date(checkOut) }
            }
          };
        }
  
        const listings = await Listing.find(query)
          .populate('host', 'name profilePicture rating')
          .populate({
            path: 'reviews',
            select: 'rating comment author',
            populate: {
              path: 'author',
              select: 'name profilePicture'
            }
          })
          .sort({ createdAt: -1 });
  
        res.json(listings);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
  
    // Get single listing details
    getListingDetails: async (req, res) => {
      try {
        const listing = await Listing.findById(req.params.id)
          .populate('host', 'name profilePicture rating')
          .populate({
            path: 'reviews',
            populate: {
              path: 'author',
              select: 'name profilePicture'
            }
          });
  
        if (!listing) {
          return res.status(404).json({ error: 'Listing not found' });
        }
  
        res.json(listing);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
  
    // Update listing availability
    updateAvailability: async (req, res) => {
      try {
        const { startDate, endDate } = req.body;
        const listing = await Listing.findById(req.params.id);
        
        if (!listing) {
          return res.status(404).json({ error: 'Listing not found' });
        }
  
        listing.availability.push({ startDate, endDate });
        await listing.save();
        
        res.json(listing);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  };
  
  module.exports = listingController;