import React, { useState } from "react";

const DestinationInput = ({ setDestination, popularDestinations, destination }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleDestinationClick = (name) => {
    setDestination(name);
    setShowSuggestions(false); // Hide suggestions after selecting a destination
  };

  return (
    <div className="flex-grow relative rounded-full pl-5 p-2.5 hover:bg-[hsl(0,0%,94%)] cursor-pointer ">
      <label className="text-xs text-gray-900 font-medium ">Where</label>
      <input
        type="text"
        className="block w-full text-left bg-transparent text-sm text-gray-500 font-light outline-none"
        placeholder="Search destinations"
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        readOnly
        value={destination} // Use the destination prop here
      />
      {showSuggestions && (
        <div className="absolute top-20 left-0 w-[26rem] max-w-md bg-white shadow-lg rounded-[2rem] px-6 z-50">
          <div className="mb-3">
            <span className="block text-sm p-5 font-semibold text-gray-700">
              Search by region
            </span>
          </div>
          <div className="grid grid-cols-3 gap-1">
            {popularDestinations.map((dest, index) => (
              <div
                key={index}
                className="flex flex-col cursor-pointer hover:opacity-80"
                onClick={() => handleDestinationClick(dest.name)} // Set destination on click
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-[6.5rem] h-[6.5rem] object-cover rounded-lg border border-gray-200"
                />
                <span className="text-sm truncate font-light mb-8 mt-1 text-gray-600">{dest.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DestinationInput;