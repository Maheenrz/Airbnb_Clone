import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResults = () => {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(null);
  const query = useQuery();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const checkIn = query.get('checkIn') || '';
        const checkOut = query.get('checkOut') || '';
        const guests = query.get('guests') || '';
        const destination = query.get('destination') || '';
    
        const params = new URLSearchParams({
          checkIn,
          checkOut,
          guests,
          destination,
        });
    
        const response = await fetch(`http://localhost:5000/api/listings/search?${params.toString()}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error('Data is not an array');
        }
    
        setListings(data);
      } catch (error) {
        console.error('Error fetching listings:', error);
        setError(error.message);
      }
    };

    fetchListings();
  }, [query]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>
      {error && <p className="text-red-600">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {listings.length > 0 ? (
          listings.map((listing) => (
            <div key={listing._id} className="border rounded-lg shadow-sm p-4">
              <img
                src={listing.image_urls[0]}
                alt={listing.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold">{listing.title}</h3>
              <p className="text-gray-600">{listing.location.city}, {listing.location.country}</p>
              <p className="text-gray-600">${listing.price_per_night} per night</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No listings found</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;