import axios from 'axios';

// Function to get listings
export const getListings = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/listings');
    return response.data;
  } catch (error) {
    console.error('Error fetching listings:', error);
    throw error;
  }
};

// Function to create a new listing
export const createListing = async (listingData) => {
  try {
    const response = await axios.post('http://localhost:5000/api/listings', listingData);
    return response.data;
  } catch (error) {
    console.error('Failed to create listing:', error.response ? error.response.data : error.message);
    throw error;
  }
};