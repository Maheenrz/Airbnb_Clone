import axios from 'axios';

export const getListings = async (filters = {}) => {
  try {
    let url = 'http://localhost:5000/api/listings';
    if (Object.keys(filters).length > 0) {
      const params = new URLSearchParams(filters).toString();
      url += `/search?${params}`;
    }
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching listings:", error);
    throw error;
  }
};

export const createListing = async (listingData) => {
  const token = localStorage.getItem('token');
  const response = await axios.post('http://localhost:5000/api/listings', listingData, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

export default getListings;