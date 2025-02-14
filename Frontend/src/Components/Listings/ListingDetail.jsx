import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createBooking } from '../../services/bookingService';
import GuestDropdownForListingDetail from './GuestDropdownForListingDetail';
import DatePickerComponentForListingDetail from './DatePickerForListingDetail';

const ListingDetails = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [guestCounts, setGuestCounts] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0
  });
  const [dates, setDates] = useState({
    checkIn: null,
    checkOut: null
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/listings/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch listing');
        }
        const data = await response.json();
        setListing(data);
      } catch (err) {
        setError('Error fetching listing details');
        console.error('Fetch error:', err);
      }
    };

    fetchListing();
  }, [id]);

  const handleDateChange = (checkIn, checkOut) => {
    setDates({ checkIn, checkOut });
  };

  useEffect(() => {
    if (dates.checkIn && dates.checkOut && listing) {
      setTotalPrice(calculateTotalPrice());
    }
  }, [dates.checkIn, dates.checkOut, listing?.price_per_night]);

  const calculateTotalPrice = () => {
    if (!dates.checkIn || !dates.checkOut || !listing) return 0;
    
    const nights = Math.ceil((dates.checkOut.getTime() - dates.checkIn.getTime()) / (1000 * 60 * 60 * 24));
    
    return listing.price_per_night * nights;
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // 🔹 Validate Check-in and Check-out Dates
    if (!dates.checkIn || !dates.checkOut) {
      setError('Please select check-in and check-out dates.');
      setLoading(false);
      return;
    }

    // 🔹 Validate Guest Selection
    const totalGuests = guestCounts.adults + guestCounts.children;
    if (totalGuests === 0) {
      setError('Please select at least one guest.');
      setLoading(false);
      return;
    }

    if (totalGuests > listing.maxGuests) {
      setError(`Maximum guests allowed: ${listing.maxGuests}`);
      setLoading(false);
      return;
    }

    try {
      const bookingData = {
        listingId: listing._id,
        checkIn: dates.checkIn.toISOString(),
        checkOut: dates.checkOut.toISOString(),
        numberOfGuests: totalGuests,
        totalPrice: calculateTotalPrice()
      };

      const response = await createBooking(bookingData);
      
      if (response) {
        alert('Booking successfully created!');
        setDates({ checkIn: null, checkOut: null });
        setGuestCounts({ adults: 1, children: 0, infants: 0, pets: 0 });
      }
    } catch (err) {
      console.error('Booking error:', err);
      setError(err.message || 'Error creating booking. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!listing) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="container mt-10 mx-auto p-4">
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="col-span-1 row-span-2">
          <img
            src={`http://localhost:5000/uploads/${listing.image_urls[0]}`}
            alt={listing.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        {listing.image_urls.slice(1, 5).map((url, index) => (
          <img
            key={index}
            src={`http://localhost:5000/uploads/${url}`}
            alt={`${listing.title} - ${index + 1}`}
            className="w-full h-48 object-cover rounded-lg"
          />
        ))}
      </div>

      <div className="flex flex-col mt-20 md:flex-row justify-between">
        <div className="md:w-2/3">
          <h1 className="text-2xl font-bold m-7 mb-4">{listing.title}</h1>
          <hr className="text-black mb-6 w-[34rem]" />
          <p className="text-gray-700 text-lg m-7 mt-2">
            Hosted by {listing.host.name}
          </p>
          <hr className="text-black w-[34rem]" />
          <p className="mb-4 w-[30rem] justify-start m-7">
            <span className="flex font-medium text-xl mb-3 text-black">
              About this place
            </span>
            {listing.description}
          </p>
          <p className="mb-2 m-7 font-semibold">
            Price per night: ${listing.price_per_night}
          </p>
          <p className="mb-4 m-7">Max Guests: {listing.maxGuests}</p>
        </div>

        <div className="bg-white p-6 rounded-[1rem] shadow-xl border border-gray-200 w-full md:w-96 relative">
          <form onSubmit={handleBooking} className="space-y-4">
            <h2 className="text-xl font-bold">Reserve</h2>
            
            <div className="flex justify-between items-center">
              <span className="text-lg">
                ${listing.price_per_night} / night
              </span>
            </div>

            <div className="gap-0 border w-80 border-black rounded-lg">
              <div className="relative">
                <DatePickerComponentForListingDetail setDates={handleDateChange} />
              </div>

              <div className="relative border-t-[1px] border-black">
                <GuestDropdownForListingDetail
                  guests={guestCounts}
                  setGuests={setGuestCounts}
                  maxGuests={listing.maxGuests}
                />
              </div>
            </div>

            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}

            {totalPrice > 0 && (
              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">${totalPrice}</span>
                </div>
              </div>
            )}

            <button
              type="submit"
              className={`w-full py-3 px-4 rounded-full text-white font-medium
                ${loading 
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-red-500 hover:bg-red-600 transition-colors'
                }`}
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Reserve Now'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
