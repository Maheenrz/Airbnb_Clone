import React, { useState, useEffect } from "react";
import map from "../../../assets/images/map.png";

const Step1_4 = ({ address, city, state, country, setAddress, setCity, setState, setCountry }) => {
  const [localAddress, updateAddress] = useState(address);
  const [localCity, updateCity] = useState(city);
  const [localState, updateState] = useState(state);
  const [localCountry, updateCountry] = useState(country);

  useEffect(() => {
    updateAddress(address);
    updateCity(city);
    updateState(state);
    updateCountry(country);
  }, [address, city, state, country]);

  const handleAddressChange = (e) => {
    updateAddress(e.target.value);
    setAddress(e.target.value);
  };

  const handleCityChange = (e) => {
    updateCity(e.target.value);
    setCity(e.target.value);
  };

  const handleStateChange = (e) => {
    updateState(e.target.value);
    setState(e.target.value);
  };

  const handleCountryChange = (e) => {
    updateCountry(e.target.value);
    setCountry(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center m-10 p-8">
      {/* Title & Description */}
      <h1 className="font-medium text-4xl text-slate-900 mb-4 text-center">
        Where's your place located?
      </h1>
      <p className="text-lg text-gray-500 mb-8 text-center max-w-md">
        Your address is only shared with guests after they've made a reservation.
      </p>

      {/* Map Image with Inputs Overlay */}
      <div className="relative w-96 h-96 mb-8">
        {/* Map Image */}
        <img src={map} alt="map" className="w-full h-full rounded-xl shadow-lg" />

        {/* Inputs on top of the Map */}
        <div className="absolute inset-0 flex flex-col justify-center items-center space-y-3 p-4">
          <input
            type="text"
            placeholder="Address"
            value={localAddress}
            onChange={handleAddressChange}
            className="w-10/12 p-3 border border-gray-300 rounded-lg bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="text"
            placeholder="City"
            value={localCity}
            onChange={handleCityChange}
            className="w-10/12 p-3 border border-gray-300 rounded-lg bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="text"
            placeholder="State"
            value={localState}
            onChange={handleStateChange}
            className="w-10/12 p-3 border border-gray-300 rounded-lg bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="text"
            placeholder="Country"
            value={localCountry}
            onChange={handleCountryChange}
            className="w-10/12 p-3 border border-gray-300 rounded-lg bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Step1_4;