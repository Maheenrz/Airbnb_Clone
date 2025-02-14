import React, { useState  , useEffect } from 'react';

const GuestDropdown = ({ setInfants, setAdults, setChildren, setPets, setMaxGuests }) => {
  const [guestCounts, setGuestCounts] = useState({
    adults: 1, // Set initial adults to 1
    children: 0,
    infants: 0,
    pets: 0,
  });

  useEffect(() => {
    const totalGuests = guestCounts.adults + guestCounts.children + guestCounts.infants + guestCounts.pets;
    setMaxGuests(totalGuests);
  }, [guestCounts, setMaxGuests]);

  const updateGuestCount = (type, operation) => {
    setGuestCounts((prev) => {
      const newCounts = { ...prev };

      if (operation === "increment") {
        newCounts[type] += 1;
        if (
          (type === "children" || type === "infants") &&
          newCounts.adults === 0
        ) {
          newCounts.adults = 1;
        }
      } else {
        newCounts[type] = Math.max(0, newCounts[type] - 1);
      }

      return newCounts;
    });

    // Update the parent component with the new guest counts
    if (type === "adults") setAdults(guestCounts.adults);
    if (type === "children") setChildren(guestCounts.children);
    if (type === "infants") setInfants(guestCounts.infants);
    if (type === "pets") setPets(guestCounts.pets);
  };

  return (
    <div className="flex flex-col justify-center items-center m-10 bg-white p-8">
        <h1 className="font-medium text-4xl text-slate-900 text-left mb-4">
        Share some basics about your place?
      </h1>
      <p className="text-lg text-gray-400 mb-8  text-left">
        You'll add more details later, like bed types.
      </p>
      <div className="w-full max-w-lg m-3 bg-white  p-8">
        {[
          {
            label: "Adults",
            type: "adults",
            description: "Ages 13 or above",
          },
          {
            label: "Children",
            type: "children",
            description: "Ages 2 – 12",
          },
          { label: "Infants", type: "infants", description: "Under 2" },
          {
            label: "Pets",
            type: "pets",
            description: "Bringing a service animal?",
          },
        ].map(({ label, type, description }, index) => (
          <div key={type}>
            <div className="flex justify-between items-center mb-3">
              <div className="flex flex-col">
                <span className="text-pretty font-medium text-gray-700">
                  {label}
                </span>
                <span className="text-xs text-gray-500">{description}</span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateGuestCount(type, "decrement")}
                  className="px-3 py-1 bg-white border border-gray-300 rounded-full text-gray-600 hover:bg-gray-300"
                >
                  -
                </button>
                <span>{guestCounts[type]}</span>
                <button
                  onClick={() => updateGuestCount(type, "increment")}
                  className="px-3 py-1 bg-white border border-gray-300 rounded-full text-gray-600 hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>
            {index < 3 && <hr className="my-6 border-gray-200" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuestDropdown;