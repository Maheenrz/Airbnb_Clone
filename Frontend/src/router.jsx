import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './Layout';
import ListingsCard from './Components/Listings/ListingCard';
import ListingForm from './Components/ListingForm/ListingForm';
import AdminPage from './Components/AdminPage/AdminPage';
import ListingDetail from './Components/Listings/ListingDetail';


// Creating the router with defined routes
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="admin" element={<AdminPage />} />
      <Route index element={<ListingsCard />} />
      <Route path="/listings/:id" element={<ListingDetail />} />
      <Route path="/listing-form" element={<ListingForm />} />
      <Route path="/listing-card" element={<ListingsCard />} />


    </Route>
  )
);