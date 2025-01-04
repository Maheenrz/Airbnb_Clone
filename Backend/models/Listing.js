import mongoose from 'mongoose';

const ListingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price_per_night: { type: Number, required: true },
  rating: { type: Number },
  reviews: { type: Number },
  image_urls: { type: [String], required: true },
  category: { type: String, required: true }, // Added category field
});

const Listing = mongoose.model('Listing', ListingSchema);
export default Listing;