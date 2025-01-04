// import mongoose from 'mongoose';

// const ListingSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   price_per_night: { type: Number, required: true },
//   rating: { type: Number },
//   reviews: { type: Number },
//   image_urls: { type: [String], required: true },
//   category: { type: String, required: true }, // Added category field
// });

// const Listing = mongoose.model('Listing', ListingSchema);
// export default Listing;



const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  host: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price_per_night: { type: Number, required: true },
  rating: { type: Number, default: 0 },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  image_urls: [String],
  category: { type: String, required: true },
  location: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    coordinates: {
      lat: { type: Number },
      lng: { type: Number }
    }
  },
  amenities: [String],
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  maxGuests: { type: Number, required: true },
  availability: [{
    startDate: Date,
    endDate: Date
  }],
  createdAt: { type: Date, default: Date.now }
});

// Add indexes for better search performance
listingSchema.index({ 'location.city': 1, 'location.country': 1 });
listingSchema.index({ price_per_night: 1 });
listingSchema.index({ category: 1 });

module.exports = mongoose.model('Listing', listingSchema);





