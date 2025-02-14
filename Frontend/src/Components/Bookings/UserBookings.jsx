import React, { useEffect, useState } from 'react';
import { getUserBookings, cancelBooking } from '../../services/bookingService';

const UserBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [canceling, setCanceling] = useState(null); // State to track canceling booking

  useEffect(() => {
    let isMounted = true; // Prevent state updates after unmount
    getUserBookings()
      .then((data) => {
        if (isMounted) {
          if (Array.isArray(data)) {
            setBookings(data);
          } else {
            console.error('Unexpected response format:', data);
            setBookings([]);
          }
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error('Error fetching bookings:', error);
        if (isMounted) {
          setBookings([]);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false; // Cleanup to avoid setting state after unmount
    };
  }, []);

  // Function to cancel a booking
  const handleCancel = async (bookingId) => {
    if (!window.confirm("Are you sure you want to cancel this booking?")) return;
    
    setCanceling(bookingId); // Set canceling state

    try {
      console.log(`Attempting to cancel booking with ID: ${bookingId}`); // Debugging log
      await cancelBooking(bookingId);
      setBookings((prevBookings) =>
        prevBookings.filter((booking) => booking._id !== bookingId) // Remove canceled booking from UI
      );
      console.log(`Booking with ID: ${bookingId} canceled successfully`); // Debugging log
    } catch (error) {
      console.error("Error canceling booking:", error);
      alert("Failed to cancel booking. Please try again.");
    } finally {
      setCanceling(null); // Reset canceling state
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">My Bookings</h1>

      {/* Loading State */}
      {loading && <p className="text-center text-gray-500">Loading bookings...</p>}

      {/* No Bookings Message */}
      {!loading && bookings.length === 0 && (
        <p className="text-center text-gray-500">No bookings found.</p>
      )}

      {/* Bookings List */}
      <div className="space-y-6">
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="flex items-center bg-white shadow-md rounded-lg p-4 space-x-4 border border-gray-100"
          >
            {/* Image */}
            <img
              src={ booking.listing.image_urls ? `http://localhost:5000/uploads/${booking.listing.image_urls[0]}` : "/default-image.jpg"}
              alt={booking.listing.title}
              className="w-40 h-40 object-cover rounded-md"
            />

            {/* Booking Details */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-800">{booking.listing.title}</h2>
              <p className="text-gray-600">
                <span className="font-medium">Check-in:</span> {new Date(booking.checkIn).toLocaleDateString()}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Check-out:</span> {new Date(booking.checkOut).toLocaleDateString()}
              </p>
            </div>

            {/* Status */}
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
              Reserved
            </span>

            {/* Cancel Button */}
            <button
              onClick={() => handleCancel(booking._id)}
              className={`mt-2 py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 ${canceling === booking._id ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={canceling === booking._id}
            >
              {canceling === booking._id ? 'Canceling...' : 'Cancel Reservation'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserBookings;