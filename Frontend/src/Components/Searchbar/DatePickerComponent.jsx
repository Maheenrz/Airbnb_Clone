import React, { useState, useRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../customDatePicker.css';

const DatePickerComponent = () => {
  const [checkInDate, setCheckIn] = useState(null); // Check-In date
  const [checkOutDate, setCheckOut] = useState(null); // Check-Out date
  const [focusedInput, setFocusedInput] = useState(null); // Track focused section
  const datepickerRef = useRef(null);

  // Close the date picker when clicking outside
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
    setFocusedInput("checkOut"); // Move focus to Check-Out section
  };

  const handleCheckOut = (date) => {
    setCheckOut(date);
    setFocusedInput(null); // Close date picker
  };

  const dateformat = "MMM d";

  return (
    <div className="relative flex-grow flex items-center justify-center gap-2" ref={datepickerRef}>
      {/* Check-in Section */}
      <div className="w-10 flex-grow rounded-full p-2.5 hover:bg-[hsl(0,0%,94%)] cursor-pointer" onClick={() => setFocusedInput("checkIn")}>
        <label className="text-xs text-gray-900 font-medium">Check in</label>
        <input
          readOnly
          className="outline-none bg-transparent cursor-pointer text-sm font-light text-gray-500 w-full"
          value={checkInDate ? checkInDate.toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "Add dates"}
          onClick={() => setFocusedInput("checkIn")}
        />
      </div>

      {/* Check-out Section */}
      <div className="w-10 flex-grow rounded-full p-2.5 hover:bg-[hsl(0,0%,94%)] cursor-pointer" onClick={() => setFocusedInput("checkOut")}>
        <label className="text-xs text-gray-900 font-medium">Check out</label>
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
          className="absolute top-16 left-1/2 transform -translate-x-1/2 w-full max-w-[900px] bg-white p-2 rounded-2xl shadow-lg custom-datepicker"
          monthsShown={2} // Display 2 months
          minDate={new Date()} // Disable past dates
          selected={focusedInput === "checkIn" ? checkInDate : checkOutDate} // Selected date
          onChange={focusedInput === "checkIn" ? handleCheckIn : handleCheckOut} // Handle date change
          startDate={checkInDate}
          endDate={checkOutDate}
          selectsStart={focusedInput === "checkIn"}
          selectsEnd={focusedInput === "checkOut"}
          shouldCloseOnSelect={false}
          open // Always open
          dateFormat={dateformat}
          calendarClassName="custom-datepicker" // Add custom class to the date picker
        />
      )}
    </div>
  );
};

export default DatePickerComponent;