import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from '../Searchbar/SearchBar';
import CategoriesBar from '../CategoriesBar/CategoriesBar';
import { getListings } from '../../services/listingservice';

const useQuery = () => new URLSearchParams(useLocation().search);

const ListingCard = () => {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const query = useQuery();
  const category = query.get("category");

  const fetchListings = async () => {
    try {
      const data = await getListings();
      console.log('Initial listings:', data);
      setListings(data);
      setFilteredListings(data);
    } catch (error) {
      console.error('Error fetching listings:', error);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  const handleSearch = (filters) => {
    console.log('Search filters:', filters);
    console.log('Initial listings:', listings);
    
    let filtered = [...listings];

    // Filter by destination
    if (filters.title) {
      filtered = filtered.filter(listing => 
        listing.destination?.toLowerCase().includes(filters.title.toLowerCase())
      );
      console.log('Filtered by destination:', filtered);
    }

    // Filter by guests
    if (filters.guests) {
      filtered = filtered.filter(listing => 
        listing.maxGuests >= parseInt(filters.guests)
      );
      console.log('Filtered by guests:', filtered);
    }

    // Filter by availability
    if (filters.checkIn && filters.checkOut) {
      filtered = filtered.filter(listing => {
        return listing.availability?.some(range => {
          const checkIn = new Date(filters.checkIn);
          const checkOut = new Date(filters.checkOut);
          const rangeStart = new Date(range.startDate);
          const rangeEnd = new Date(range.endDate);
          return checkIn >= rangeStart && checkOut <= rangeEnd;
        });
      });
      console.log('Filtered by availability:', filtered);
    }

    console.log('Filtered by search:', filtered);
    setFilteredListings(filtered);
  };

  const handleCategorySelect = (selectedCategory) => {
    console.log('Selected category:', selectedCategory);
    let filtered = [...listings];

    if (selectedCategory) {
      filtered = filtered.filter(listing => 
        listing.category?.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    console.log('Filtered by category:', filtered);
    setFilteredListings(filtered);
  };

  return (
    <div className="listing-container container mx-auto p-4">
      <SearchBar onSearch={handleSearch} />
      <hr className="mt-6 mb-4 text-gray-200 w-full" />
      <CategoriesBar onCategorySelect={handleCategorySelect} />
      <div className="listings grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
        {Array.isArray(filteredListings) && filteredListings.length > 0 ? (
          filteredListings.map((listing) => (
            <div key={listing._id} className="listing-card rounded-lg overflow-hidden">
              <Link to={`/listings/${listing._id}`} className="block">
                {listing.image_urls && listing.image_urls.length > 0 && (
                  <img
                    src={`http://localhost:5000/uploads/${listing.image_urls[0]}`}
                    alt={listing.title}
                    className="w-[46rem] h-[18rem] object-cover border border-gray-200 rounded-[1rem]"
                  />
                )}
                <div className="p-0 bg-white bg-opacity-80 mt-2">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-sm truncate font-semibold">{listing.title}</h2>
                    <div className="flex items-center space-x-1 text-black text-sm">
                      <span>★</span>
                      <span>{listing.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-900 font-medium">${listing.price_per_night} <span className='font-light text-gray-600'>night</span></p>
                  {listing.host && (
                    <p className="text-gray-600 text-sm mt-2">Hosted by {listing.host.name}</p>
                  )}
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No listings available</p>
        )}
      </div>
    </div>
  );
};

export default ListingCard;