// frontend/src/components/SearchBar/SearchBar.jsx
import React from 'react';
import flexible from '../../assets/images/flexible.png';
import europe from '../../assets/images/europe.png';
import east from '../../assets/images/middleeast.png';
import southeast from '../../assets/images/southeastasia.png';
import uae from '../../assets/images/uae.png';
import uk from '../../assets/images/uk.png';
import DestinationInput from './DestinationInput';
import DatePickerComponent from './DatePickerComponent';
import GuestDropdown from './GuestDropdown';

const SearchBar = () => {
  const popularDestinations = [
    { name: "I'm flexible", image: flexible },
    { name: 'Europe', image: europe },
    { name: 'United Kingdom', image: uk },
    { name: 'Southeast Asia', image: southeast },
    { name: 'United Arab Emirates', image: uae },
    { name: 'Middle East', image: east },
  ];

  return (
    <div className="bg-white mt-4 rounded-full border border-gray-200 shadow-lg goDown:mt-20 flex items-center w-full max-w-[900px] min-w-[700px] mx-auto gap-0">
      <DestinationInput popularDestinations={popularDestinations} />
      <DatePickerComponent />
      <GuestDropdown />
    </div>
  );
};

export default SearchBar;