const Booking = require('../models/booking');
const Listing = require('../models/Listing');

module.exports = {
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
        guest: req.user._id,
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
      const bookings = await Booking.find({ guest: req.user._id }).populate('listing');
      if (bookings.length === 0) {
        return res.status(404).json({ message: 'No bookings found' });
      }
      res.json(bookings);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get bookings for a listing
  getListingBookings: async (req, res) => {
    try {
      const bookings = await Booking.find({ listing: req.params.listingId }).populate('guest');
      if (bookings.length === 0) {
        return res.status(404).json({ message: 'No bookings found for this listing' });
      }
      res.json(bookings);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Delete a booking
  deleteBooking: async (req, res) => {
    try {
      console.log(`Attempting to delete booking with ID: ${req.params.id}`); // Debugging log
      const booking = await Booking.findById(req.params.id);
      if (!booking) {
        console.log('Booking not found'); // Debugging log
        return res.status(404).json({ error: 'Booking not found' });
      }

      // Ensure the user requesting the deletion is the owner of the booking
      if (booking.guest.toString() !== req.user._id.toString()) {
        console.log('Unauthorized request'); // Debugging log
        return res.status(403).json({ error: 'Unauthorized' });
      }

      await booking.deleteOne({_id: req.params.id});
      res.json({ message: 'Booking deleted successfully' });
    } catch (error) {
      console.error('Error deleting booking:', error); // Debugging log
      res.status(500).json({ error: error.message });
    }
  }
};