import React from "react";
import { FaWifi, FaSwimmingPool, FaParking, FaUtensils, FaTv, FaDumbbell, FaHotTub } from "react-icons/fa";
import { MdLocalLaundryService, MdOutdoorGrill ,MdOutlineAir} from "react-icons/md";
import {  GiFireplace } from "react-icons/gi";

const amenitiesList = [
  { id: 1, name: "Wi-Fi", icon: <FaWifi /> },
  { id: 2, name: "Swimming Pool", icon: <FaSwimmingPool /> },
  { id: 3, name: "Parking", icon: <FaParking /> },
  { id: 4, name: "Kitchen", icon: <FaUtensils /> },
  { id: 5, name: "TV", icon: <FaTv /> },
  { id: 6, name: "Gym", icon: <FaDumbbell /> },
  { id: 7, name: "Hot Tub", icon: <FaHotTub /> },
  { id: 8, name: "Laundry", icon: <MdLocalLaundryService /> },
  { id: 9, name: "BBQ Grill", icon: <MdOutdoorGrill /> },
  { id: 10, name: "Air Conditioning", icon: <MdOutlineAir /> },
  { id: 11, name: "Fireplace", icon: <GiFireplace /> },
  { id: 12, name: "Dining Area", icon: <FaUtensils /> },
];

const Step2_2 = ({ setAmenities, amenities }) => {
  // Toggle selected amenity
  const toggleAmenity = (amenityName) => {
    setAmenities((prev) =>
      prev.includes(amenityName)
        ? prev.filter((item) => item !== amenityName) // Remove if exists
        : [...prev, amenityName] // Add if not selected
    );
  };


  return (
    <div className="m-10 flex flex-col justify-center items-center p-7">
       <h1 className="font-medium text-slate-800 text-3xl text-center mb-3">
        What amenities do you offer?
      </h1>
      <p className="text-lg text-gray-400 text-center mb-3">
        Select the amenities available at your place.
      </p>

      {/* Amenities Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {amenitiesList.map((amenity) => (
          <div
            key={amenity.id}
            onClick={() => toggleAmenity(amenity.name)}
            className={`p-4 border-2 rounded-lg flex flex-col items-center cursor-pointer transition-all ${
              amenities.includes(amenity.name) ? "border-black bg-gray-100" : "border-gray-300"
            }`}
          >
            <div className="text-3xl">{amenity.icon}</div>
            <span className="mt-2">{amenity.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step2_2;
