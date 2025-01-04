import React, { useState } from 'react';
import { createListing } from '../../services/listingService'; // Correct import path

const AdminPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [pricePerNight, setPricePerNight] = useState('');
  const [rating, setRating] = useState('');
  const [reviews, setReviews] = useState('');
  const [imageUrls, setImageUrls] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newListing = {
      title,
      description,
      price_per_night: Number(pricePerNight), // Convert to number
      rating: Number(rating), // Convert to number
      reviews: Number(reviews), // Convert to number
      image_urls: imageUrls.split(',').map(url => url.trim()),
    };

    try {
      await createListing(newListing);
      alert('Listing created successfully!');
      // Clear form
      setTitle('');
      setDescription('');
      setPricePerNight('');
      setRating('');
      setReviews('');
      setImageUrls('');
    } catch (error) {
      console.error('Error details:', error);
      alert(`Failed to create listing: ${error.message}`);
    }
  };

  return (
    <div className="admin-page">
      <h1 className="text-2xl font-bold mb-4">Create a New Listing</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 w-full" required />
        </div>
        <div>
          <label className="block">Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="border p-2 w-full" required />
        </div>
        <div>
          <label className="block">Price Per Night</label>
          <input type="number" value={pricePerNight} onChange={(e) => setPricePerNight(e.target.value)} className="border p-2 w-full" required />
        </div>
        <div>
          <label className="block">Rating</label>
          <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} className="border p-2 w-full" required />
        </div>
        <div>
          <label className="block">Reviews</label>
          <input type="number" value={reviews} onChange={(e) => setReviews(e.target.value)} className="border p-2 w-full" required />
        </div>
        <div>
          <label className="block">Image URLs (comma separated)</label>
          <input type="text" value={imageUrls} onChange={(e) => setImageUrls(e.target.value)} className="border p-2 w-full" required />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Create Listing</button>
      </form>
    </div>
  );
};

export default AdminPage;