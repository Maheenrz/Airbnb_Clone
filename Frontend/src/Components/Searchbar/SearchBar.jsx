import React, { useState } from "react";
import flexible from "../../assets/images/flexible.png";
import europe from "../../assets/images/europe.png";
import east from "../../assets/images/middleeast.png";
import southeast from "../../assets/images/southeastasia.png";
import uae from "../../assets/images/uae.png";
import uk from "../../assets/images/uk.png";
import DestinationInput from "./DestinationInput";
import DatePickerComponent from "./DatePickerComponent";
import GuestDropdown from "./GuestDropdown";

const SearchBar = ({ onSearch }) => {
  const popularDestinations = [
    { name: "I'm flexible", image: flexible },
    { name: "Europe", image: europe },
    { name: "United Kingdom", image: uk },
    { name: "Southeast Asia", image: southeast },
    { name: "United Arab Emirates", image: uae },
    { name: "Middle East", image: east },
  ];

  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState({ checkIn: null, checkOut: null });
  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
  });

  return (
    <div className="bg-white mt-4  rounded-full border border-gray-200 shadow-lg flex items-center w-full max-w-[900px] min-w-[700px] mx-auto gap-0">
      <DestinationInput
        setDestination={setDestination}
        popularDestinations={popularDestinations}
        destination={destination}
      />
      <DatePickerComponent setDates={setDates} />
      <GuestDropdown setGuests={setGuests} onSearch={onSearch} destination={destination} dates={dates} />
    </div>
  );
};

export default SearchBar;