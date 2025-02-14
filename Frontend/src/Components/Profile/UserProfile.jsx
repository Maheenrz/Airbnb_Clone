import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch('/api/users/profile', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch profile data');
        }

        const data = await response.json();
        setUserData(data.user);
        setBookings(data.bookings);
      } catch (error) {
        console.error('Error:', error);
        // Redirect to login if unauthorized
        if (error.message.includes('401')) {
          navigate('/login');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {userData && (
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Welcome, {userData.name}</h1>
          <p className="text-gray-600">{userData.email}</p>
        </div>
      )}

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Your Bookings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.map((booking) => (
            <div key={booking._id} className="border rounded-lg shadow-sm p-4">
              <img
                src={booking.listing.image_urls[0]}
                alt={booking.listing.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold">{booking.listing.title}</h3>
              <p className="text-gray-600">
                {new Date(booking.checkIn).toLocaleDateString()} - 
                {new Date(booking.checkOut).toLocaleDateString()}
              </p>
              <p className="text-gray-600">Guests: {booking.numberOfGuests}</p>
              <p className="mt-2 font-semibold">
                Total: ${booking.totalPrice}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;