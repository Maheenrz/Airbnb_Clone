import React, { useState } from 'react';
import axios from 'axios';

const ListingForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [pricePerNight, setPricePerNight] = useState('');
  const [category, setCategory] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [maxGuests, setMaxGuests] = useState('');
  const [imageUrls, setImageUrls] = useState(['']);
  const [amenities, setAmenities] = useState(['']);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:5000/api/listings/upload',
        {
          title,
          description,
          price_per_night: pricePerNight,
          category,
          location: { address, city, state, country },
          bedrooms,
          bathrooms,
          maxGuests,
          image_urls: imageUrls,
          amenities
        },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      setSuccess('Listing uploaded successfully!');
      setError('');
    } catch (err) {
      setError('Error uploading listing. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md border border-gray-300 rounded-[50px] mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Create a New Listing</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {success && <div className="text-green-500 mb-4">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 font-semibold">Title</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Price Per Night</label>
            <input type="number" className="w-full p-3 border border-gray-300 rounded" value={pricePerNight} onChange={(e) => setPricePerNight(e.target.value)} required />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-2 font-semibold">Description</label>
            <textarea className="w-full p-3 border border-gray-300 rounded" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Category</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded" value={category} onChange={(e) => setCategory(e.target.value)} required />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Address</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded" value={address} onChange={(e) => setAddress(e.target.value)} required />
          </div>
          <div>
            <label className="block mb-2 font-semibold">City</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded" value={city} onChange={(e) => setCity(e.target.value)} required />
          </div>
          <div>
            <label className="block mb-2 font-semibold">State</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded" value={state} onChange={(e) => setState(e.target.value)} required />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Country</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded" value={country} onChange={(e) => setCountry(e.target.value)} required />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Bedrooms</label>
            <input type="number" className="w-full p-3 border border-gray-300 rounded" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} required />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Bathrooms</label>
            <input type="number" className="w-full p-3 border border-gray-300 rounded" value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} required />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Max Guests</label>
            <input type="number" className="w-full p-3 border border-gray-300 rounded" value={maxGuests} onChange={(e) => setMaxGuests(e.target.value)} required />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-2 font-semibold">Image URLs</label>
            {imageUrls.map((url, index) => (
              <input
                key={index}
                type="text"
                className="w-full p-3 mb-2 border border-gray-300 rounded"
                value={url}
                onChange={(e) => {
                  const newImageUrls = [...imageUrls];
                  newImageUrls[index] = e.target.value;
                  setImageUrls(newImageUrls);
                }}
              />
            ))}
            <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setImageUrls([...imageUrls, ''])}>
              Add Image URL
            </button>
          </div>
          <div className="md:col-span-2">
            <label className="block mb-2 font-semibold">Amenities</label>
            {amenities.map((amenity, index) => (
              <input
                key={index}
                type="text"
                className="w-full p-3 mb-2 border border-gray-300 rounded"
                value={amenity}
                onChange={(e) => {
                  const newAmenities = [...amenities];
                  newAmenities[index] = e.target.value;
                  setAmenities(newAmenities);
                }}
              />
            ))}
            <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setAmenities([...amenities, ''])}>
              Add Amenity
            </button>
          </div>
        </div>
        <button type="submit" className="w-full mt-6 bg-red-500 text-white p-3 rounded-lg font-semibold hover:bg-red-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ListingForm;