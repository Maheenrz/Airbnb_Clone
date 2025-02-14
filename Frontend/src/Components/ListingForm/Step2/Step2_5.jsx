import React, { useState } from 'react';

const Step2_5 = ({ setBedrooms, setBathrooms, setAvailability, setDestination }) => {
  const [bedrooms, updateBedrooms] = useState(0);
  const [bathrooms, updateBathrooms] = useState(0);
  const [availability, updateAvailability] = useState([{ startDate: "", endDate: "" }]);
  const [destination, updateDestination] = useState("");

  const handleBedroomsChange = (e) => {
    const value = parseInt(e.target.value, 10);
    updateBedrooms(value);
    setBedrooms(value);
  };

  const handleBathroomsChange = (e) => {
    const value = parseInt(e.target.value, 10);
    updateBathrooms(value);
    setBathrooms(value);
  };

  const handleAvailabilityChange = (index, field, value) => {
    const newAvailability = [...availability];
    newAvailability[index][field] = value;
    updateAvailability(newAvailability);
    setAvailability(newAvailability);
  };

  const addAvailability = () => {
    updateAvailability([...availability, { startDate: "", endDate: "" }]);
  };

  const handleDestinationChange = (e) => {
    const value = e.target.value;
    updateDestination(value);
    setDestination(value);
  };

  

  return (
    <div className="m-10 flex flex-col justify-center items-center p-8">
      <h1 className="font-medium text-slate-800 text-3xl text-center mb-8">
        How many bedrooms and bathrooms does your place have?
      </h1>
      <div className="flex flex-col items-center mb-8">
        <label className="text-lg text-gray-400 mb-2">Bedrooms</label>
        <input
          type="number"
          min="0"
          className="border border-gray-400 focus:outline-none focus:ring-2 focus:ring-black rounded-md p-2 w-[35rem]"
          value={bedrooms}
          onChange={handleBedroomsChange}
          required
        />
      </div>
      <div className="flex flex-col items-center mb-8">
        <label className="text-lg text-gray-400 mb-2">Bathrooms</label>
        <input
          type="number"
          min="0"
          className="border border-gray-400 focus:outline-none focus:ring-2 focus:ring-black rounded-md p-2 w-[35rem]"
          value={bathrooms}
          onChange={handleBathroomsChange}
          required
        />
      </div>
      <div className="flex flex-col items-center mb-8">
        <label className="text-lg text-gray-400 mb-2">Destination</label>
        <input
          type="text"
          className="border border-gray-400 focus:outline-none focus:ring-2 focus:ring-black rounded-md p-2 w-[35rem]"
          value={destination}
          onChange={handleDestinationChange}
          required
        />
      </div>
      <div className="flex flex-col items-center mb-8">
        <label className="text-lg text-gray-400 mb-2">Availability Dates</label>
        {availability.map((date, index) => (
          <div key={index} className="flex space-x-4 mb-4">
            <input
              type="date"
              className="border border-gray-400 focus:outline-none focus:ring-2 focus:ring-black rounded-md p-2"
              value={date.startDate}
              onChange={(e) => handleAvailabilityChange(index, "startDate", e.target.value)}
              required
            />
            <input
              type="date"
              className="border border-gray-400 focus:outline-none focus:ring-2 focus:ring-black rounded-md p-2"
              value={date.endDate}
              onChange={(e) => handleAvailabilityChange(index, "endDate", e.target.value)}
              required
            />
          </div>
        ))}
        <button
          type="button"
          className="mt-2 p-2 bg-black text-white rounded-md"
          onClick={addAvailability}
        >
          Add More Dates
        </button>
      </div>
    </div>
  );
};

export default Step2_5;