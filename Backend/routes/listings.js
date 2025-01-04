import express from 'express';
import Listing from '../models/Listing.js';

const router = express.Router();

// Get all listings, optionally filtered by category
router.get('/listings', async (req, res) => {
  const { category } = req.query; // Get category from query parameters
  try {
    const query = category ? { category } : {}; // Build query object
    const listings = await Listing.find(query); // Fetch listings based on the query
    res.json(listings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Create a new listing
router.post('/listings', async (req, res) => {
  const { title, description, price_per_night, rating, reviews, image_urls, category } = req.body;

  // Validate required fields
  if (!title || !description || !price_per_night || !image_urls || !category) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const newListing = new Listing({
    title,
    description,
    price_per_night,
    rating,
    reviews,
    image_urls,
    category,
  });

  try {
    const savedListing = await newListing.save();
    res.status(201).json(savedListing);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;