import React, { useState, useEffect } from "react";
import { HiOutlineHome } from "react-icons/hi2";
import { BsDoorOpen } from "react-icons/bs";
import { MdPeopleOutline } from "react-icons/md";

const Step1_3 = ({ place, setPlace }) => {
  const [selectedPlace, updatePlace] = useState(place);

  useEffect(() => {
    updatePlace(place);
  }, [place]);

  const handlePlace = (place) => {
    updatePlace(place);
    setPlace(place);
  };

  const placeList = [
    {
      id: 1,
      name: "An entire place",
      description: "Guests have a whole place to themselves.",
      icon: <HiOutlineHome className="text-black text-4xl" />,
    },
    {
      id: 2,
      name: "A room",
      description: "Guests have a private room in a home plus access to shared places.",
      icon: <BsDoorOpen className="text-black text-4xl" />,
    },
    {
      id: 3,
      name: "A shared room",
      description: "Guests sleep in a room or common area that may be shared with you or others.",
      icon: <MdPeopleOutline className="text-black text-4xl" />,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center m-10">
      <h1 className="font-medium text-4xl text-slate-900 mb-8">
        What type of place will guests have?
      </h1>
      <div className="w-[33rem] grid grid-rows-3 gap-4">
        {placeList.map((place) => (
          <div
            key={place.id}
            onClick={() => handlePlace(place.name)}
            className={`border rounded-xl p-3 flex justify-between items-center cursor-pointer transition-all 
              ${selectedPlace === place.name ? "border-black bg-gray-100 border-2" : "border-gray-300"}
              hover:border-black hover:border-2`}
          >
            <div className="flex flex-col">
              <span className="text-black text-lg font-semibold">{place.name}</span>
              <span className="text-gray-400 text-sm">{place.description}</span>
            </div>
            {place.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step1_3;