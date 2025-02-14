import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const HostListings = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const token = localStorage.getItem("token"); // Get token from localStorage
        const response = await fetch(
          "http://localhost:5000/api/listings/host",
          {
            headers: {
              Authorization: `Bearer ${token}`, // Send token
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Failed to fetch listings: ${errorText}`);
        }
        const data = await response.json();
        setListings(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  const handleDelete = async (listingId) => {
    try {
      const token = localStorage.getItem("token"); // Get the token from localStorage
      const response = await fetch(`http://localhost:5000/api/listings/${listingId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`, // Include the token in the headers
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to delete listing: ${errorText}`);
      }
      console.log("Token:", token);
      // Remove the deleted listing from the state
      setListings(listings.filter(listing => listing._id !== listingId));
    } catch (error) {
      setError(error.message);
    }
  };

  const handleUpdate = async (listingId, updatedDates) => {
    try {
      const response = await fetch(`http://localhost:5000/api/listings/${listingId}/availability`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          startDate: updatedDates.startDate,
          endDate: updatedDates.endDate
        }),
      });
  
      if (!response.ok) throw new Error(`Failed to update listing: ${await response.text()}`);
  
      const updatedListing = await response.json();
      setListings(listings.map(listing => 
        listing._id === listingId ? updatedListing : listing
      ));
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Your Listings</h1>
      {listings.length === 0 ? (
        <div>No listings found</div>
      ) : (
        listings.map((listing) => (
          <div
            key={listing._id}
            className="bg-white p-6 rounded-lg shadow-lg mb-4"
          >
            <h2 className="text-xl font-bold mb-2">{listing.title}</h2>
            <p className="mb-2">Price per night: ${listing.price_per_night}</p>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Update Dates
              </label>
              <DatePicker
                selected={
                  listing.availability?.[0]?.startDate
                    ? new Date(listing.availability[0].startDate)
                    : null
                }
                onChange={(date) =>
                  handleUpdate(listing._id, {
                    startDate: date,
                    endDate: listing.availability?.[0]?.endDate,
                  })
                }
                selectsStart
                startDate={
                  listing.availability?.[0]?.startDate
                    ? new Date(listing.availability[0].startDate)
                    : null
                }
                endDate={
                  listing.availability?.[0]?.endDate
                    ? new Date(listing.availability[0].endDate)
                    : null
                }
                minDate={new Date()}
                placeholderText="Select check-in date"
                className="w-full px-3 py-2 border rounded"
              />
              <DatePicker
                selected={
                  listing.availability?.[0]?.endDate
                    ? new Date(listing.availability[0].endDate)
                    : null
                }
                onChange={(date) =>
                  handleUpdate(listing._id, {
                    startDate: listing.availability?.[0]?.startDate,
                    endDate: date,
                  })
                }
                selectsEnd
                startDate={
                  listing.availability?.[0]?.startDate
                    ? new Date(listing.availability[0].startDate)
                    : null
                }
                endDate={
                  listing.availability?.[0]?.endDate
                    ? new Date(listing.availability[0].endDate)
                    : null
                }
                minDate={
                  listing.availability?.[0]?.startDate
                    ? new Date(listing.availability[0].startDate)
                    : new Date()
                }
                placeholderText="Select check-out date"
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <button
              onClick={() => handleDelete(listing._id)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Delete Listing
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default HostListings;
