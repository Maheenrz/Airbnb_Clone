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
  },
  amenities: [String],
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  maxGuests: { type: Number, required: true },
  infants: { type: Number, default: 0 },
  adults: { type: Number, default: 1 },
  children: { type: Number, default: 0 },
  pets: { type: Number, default: 0 },
  availability: [{
    startDate: Date,
    endDate: Date
  }],
  destination: { type: String, required: true }, // Add destination field
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Listing', listingSchema);

// Add indexes for better search performance
listingSchema.index({ 'location.city': 1, 'location.country': 1 });
listingSchema.index({ price_per_night: 1 });
listingSchema.index({ category: 1 });

module.exports = mongoose.models.Listing || mongoose.model('Listing', listingSchema);