const Booking = require('../models/booking');
const Listing = require('../models/Listing');

const bookingController = {
  // Create a new booking
  createBooking: async (req, res) => {
    try {
      const { listingId, checkIn, checkOut, numberOfGuests } = req.body;

      const listing = await Listing.findById(listingId);
      if (!listing) {
        return res.status(404).json({ error: 'Listing not found' });
      }

      const totalPrice = listing.price_per_night * numberOfGuests * ((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24));

      const booking = new Booking({
        listing: listingId,
        guest: req.user.id,
        checkIn,
        checkOut,
        numberOfGuests,
        totalPrice
      });

      await booking.save();
      res.status(201).json(booking);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get bookings for a user
  getUserBookings: async (req, res) => {
    try {
      const bookings = await Booking.find({ guest: req.user.id })
        .populate('listing');
      res.json(bookings);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get bookings for a listing
  getListingBookings: async (req, res) => {
    try {
      const bookings = await Booking.find({ listing: req.params.listingId });
      res.json(bookings);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = bookingController;