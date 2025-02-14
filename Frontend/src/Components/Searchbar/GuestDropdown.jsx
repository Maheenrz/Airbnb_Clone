import React, { useState, useRef, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

const GuestDropdown = ({ setGuests, onSearch, destination, dates }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [guestCounts, setGuestCounts] = useState({
    adults: 1, // Set initial adults to 1
    children: 0,
    infants: 0,
    pets: 0,
  });

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

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
    setGuests((prev) => ({
      ...prev,
      [type]: operation === "increment" ? prev[type] + 1 : Math.max(0, prev[type] - 1),
    }));
  };

  const totalGuests =
    guestCounts.adults +
    guestCounts.children +
    guestCounts.infants +
    guestCounts.pets;

  const handleSearch = () => {
    const filters = {
      title: destination,
      checkIn: dates.checkIn ? dates.checkIn.toISOString() : '',
      checkOut: dates.checkOut ? dates.checkOut.toISOString() : '',
      guests: totalGuests,
    };
    onSearch(filters);
  };

  return (
    <div className="relative w-2/6 ">
      <div
        onClick={() => setShowDropdown((prev) => !prev)}
        className="flex items-center flex-grow p-2 rounded-full hover:bg-[hsl(0,0%,94%)] cursor-pointer"
      >
      <div className='border-l-[0.5px] text-gray-300 h-8 mr-5'></div>

        <div className="flex-grow" ref={dropdownRef}>
          <label className="text-xs text-gray-900 font-medium">Who</label>
          <input
            type="text"
            placeholder={
              totalGuests === 0
                ? "Add guests"
                : `${totalGuests} guest${totalGuests > 1 ? "s" : ""}`
            }
            className="block w-full text-left bg-transparent text-sm text-gray-500 font-light outline-none"
            readOnly
          />
        </div>
        <button
            onClick={handleSearch}
            className="h-12 w-12  bg-[#ed4b69] rounded-3xl flex items-center justify-center cursor-pointer hover:bg-red-600 "
          >
            <FaSearch className="text-white h-4 w-4" />
            {/* <span className="text-white ml-2">Search</span> */}
          </button>
      </div>
      {showDropdown && (
        <div
          className="absolute top-20 w-[26rem] right-0 bg-white shadow-lg rounded-3xl p-8 z-50"
          ref={dropdownRef}
        >
          <div className="m-3">
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
                      onClick={(e) => {
                        e.stopPropagation();
                        updateGuestCount(type, "decrement");
                      }}
                      className="px-3 py-1 bg-white border border-gray-300 rounded-full text-gray-600 hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span>{guestCounts[type]}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        updateGuestCount(type, "increment");
                      }}
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
      )}
    </div>
  );
};

export default GuestDropdown;