import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ListingDetail = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const response = await axios.get(`/api/listings/${id}`);
        setListing(response.data);
      } catch (error) {
        console.error('Error fetching listing:', error);
      }
    };

    fetchListing();
  }, [id]);

  if (!listing) {
    return <div className="text-center p-4">Loading...</div>;
  }

  return (
    <div className="listing-detail container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{listing.title}</h1>
      <img 
        src={listing.image_urls[0]} 
        alt={listing.title} 
        className="w-full h-64 object-cover rounded-md mb-4" 
      />
      <p className="text-gray-700 mb-2">{listing.description}</p>
      <p className="text-gray-900 font-bold">${listing.price_per_night} / night</p>
      <div className="flex items-center mt-2">
        <span className="text-yellow-500 mr-2">{'★'.repeat(listing.rating)}</span>
        <span className="text-gray-600">({listing.reviews} reviews)</span>
      </div>
      <div className="additional-images grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {listing.image_urls.map((url, index) => (
          <img 
            key={index} 
            src={url} 
            alt={`${listing.title} ${index + 1}`} 
            className="w-full h-48 object-cover rounded-md" 
          />
        ))}
      </div>
    </div>
  );
};

export default ListingDetail;