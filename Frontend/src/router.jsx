import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './Layout';
import ListingsCard from './Components/Listings/ListingCard';
import ListingForm from './Components/ListingForm/ListingForm';
import AdminPage from './Components/AdminPage/AdminPage';
import ListingDetail from './Components/Listings/ListingDetail';
import Login from './Components/LoginSignup/Login';
import ProtectedRoute from './Components/ProtectedRoute';
import UserProfile from './Components/Profile/UserProfile';
import UserBookings from './Components/Bookings/UserBookings'; // Import the UserBookings component
import HostListings from './Components/HostListings/HostListings';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="admin" element={<AdminPage />} />
      <Route index element={<ListingsCard />} />
      <Route path="/listings/:id" element={<ListingDetail />} />
      <Route path="/listing-form" element={<ProtectedRoute><ListingForm /></ProtectedRoute>} />
      <Route path="/listing-card" element={<ListingsCard />} />
      <Route path="/login" element={<Login />} /> 
      <Route path="/profile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
      <Route path="/bookings" element={<ProtectedRoute><UserBookings /></ProtectedRoute>} /> {/* Add this line */}
      <Route path="/host-listings" element={<ProtectedRoute><HostListings /></ProtectedRoute>} /> {/* Add this route */}
    
    </Route>
  )
);