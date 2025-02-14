import React, { useState, useRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../datePickerForListing.css';

const DatePickerForListingDetail = ({ setDates }) => {
  const [checkInDate, setCheckIn] = useState(null);
  const [checkOutDate, setCheckOut] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const datepickerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (datepickerRef.current && !datepickerRef.current.contains(event.target)) {
        setFocusedInput(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCheckIn = (date) => {
    setCheckIn(date);
    setFocusedInput("checkOut");
    
    // If selected check-in date is after current check-out date, reset check-out
    if (checkOutDate && date > checkOutDate) {
      setCheckOut(null);
    }
    // Only call onDateChange when we have a valid date
    if (setDates) {
      setDates(date, checkOutDate);
    }
  };

  const handleCheckOut = (date) => {
    setCheckOut(date);
    setFocusedInput(null);
    // Only call onDateChange when we have a valid date
    if (setDates && checkInDate) {
      setDates(checkInDate, date);
    }
  };

  const dateformat = "MMM d";

  return (
    <div className="relative flex-grow flex items-center justify-center gap-2" ref={datepickerRef}>
      {/* Check-in Section */}
      <div className="w-7 flex-grow p-2 cursor-pointer hover:border-1 hover:border-black" onClick={() => setFocusedInput("checkIn")}>
        <label className="text-[0.6rem] text-gray-900 font-semibold">CHECK-IN</label>
        <input
          readOnly
          className="outline-none bg-transparent cursor-pointer text-sm font-light text-gray-500 w-full"
          value={checkInDate ? checkInDate.toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "Add dates"}
          onClick={() => setFocusedInput("checkIn")}
        />
      </div>

      {/* Check-out Section */}
      <div className="w-7 flex-grow border-l-[0.5px] border-black p-2 cursor-pointer hover:border-1 hover:border-black" onClick={() => setFocusedInput("checkOut")}>
        <label className="text-[0.6rem] text-gray-900 font-semibold">CHECK-OUT</label>
        <input
          readOnly
          className="outline-none bg-transparent cursor-pointer text-sm font-light text-gray-500 w-full"
          value={checkOutDate ? checkOutDate.toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "Add dates"}
          onClick={() => setFocusedInput("checkOut")}
        />
      </div>

      {/* Date Picker */}
      {focusedInput && (
        <DatePicker
          className="absolute top-full mt-96 left-0 right-0 w-full max-w-[30rem] bg-white p-2 rounded-2xl border border-gray-200 shadow-2xl listing-datepicker"
          monthsShown={2}
          minDate={focusedInput === "checkIn" ? new Date() : checkInDate || new Date()}
          selected={focusedInput === "checkIn" ? checkInDate : checkOutDate}
          onChange={focusedInput === "checkIn" ? handleCheckIn : handleCheckOut}
          startDate={checkInDate}
          endDate={checkOutDate}
          selectsStart={focusedInput === "checkIn"}
          selectsEnd={focusedInput === "checkOut"}
          shouldCloseOnSelect={false}
          open
          dateFormat={dateformat}
          calendarClassName="listing-datepicker" 
        />
      )}
    </div>
  );
};

export default DatePickerForListingDetail;