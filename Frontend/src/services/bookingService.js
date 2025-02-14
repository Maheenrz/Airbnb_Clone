import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Add base URL

export const createBooking = async (bookingData) => {
  try {
    const token = localStorage.getItem('token'); // Get auth token
    const response = await axios.post(`${API_BASE_URL}/api/bookings`, bookingData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Add auth header
      }
    });
    return response.data;
  } catch (error) {
    // Improved error handling
    if (error.response) {
      // Server responded with error
      throw new Error(error.response.data.error || 'Error creating booking');
    } else if (error.request) {
      // Request made but no response
      throw new Error('No response from server');
    } else {
      throw new Error('Error creating booking request');
    }
  }
};

export const getUserBookings = async () => {
  try {
    const token = localStorage.getItem('token'); // Retrieve token
    if (!token) {
      throw new Error('No token found'); // Handle missing token
    }

    const response = await axios.get(`${API_BASE_URL}/api/bookings/user`, {
      headers: {
        Authorization: `Bearer ${token}` // Ensure this is correct
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching bookings:', error);
    throw error;
  }
};

// Cancel Booking Function
export const cancelBooking = async (bookingId) => {
  try {
    const token = localStorage.getItem("token"); // Get auth token
    console.log(`Attempting to cancel booking with ID: ${bookingId}`); // Debugging log
    const response = await axios.delete(`${API_BASE_URL}/api/bookings/${bookingId}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Add auth header
      },
    });
    console.log(`Booking with ID: ${bookingId} canceled successfully`); // Debugging log
    return response.data;
  } catch (error) {
    console.error("Error canceling booking:", error);
    throw error;
  }
};