import React, { useState, useRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../customDatePicker.css';

const DatePickerComponent = ({ onDateChange }) => {
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
    if (onDateChange) {
      onDateChange(date, checkOutDate);
    }
  };

  const handleCheckOut = (date) => {
    setCheckOut(date);
    setFocusedInput(null);
    // Only call onDateChange when we have a valid date
    if (onDateChange && checkInDate) {
      onDateChange(checkInDate, date);
    }
  };

  const dateformat = "MMM d";

  return (
    <div className="relative flex-grow  flex items-center justify-center gap-2" ref={datepickerRef}>
      {/* Check-in Section */}
      <div className='border-l-[0.5px] text-gray-300 h-8'></div>
      <div className="w-20 flex-grow  rounded-full p-2 hover:bg-[hsl(0,0%,94%)] cursor-pointer" onClick={() => setFocusedInput("checkIn")}>
        <label className="text-xs text-gray-900 font-medium">Check in</label>
        <input
          readOnly
          className="outline-none bg-transparent cursor-pointer text-sm font-light text-gray-500 w-full"
          value={checkInDate ? checkInDate.toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "Add dates"}
          onClick={() => setFocusedInput("checkIn")}
        />
      </div>

      {/* Check-out Section */}
      <div className='border-l-[0.5px] text-gray-300 h-8'></div>
      <div className="w-20 flex-grow rounded-full p-2 hover:bg-[hsl(0,0%,94%)] cursor-pointer " onClick={() => setFocusedInput("checkOut")}>
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
          className="absolute top-16 left-1/2 transform -translate-x-1/2 w-full max-w-[900px] bg-white p-2 rounded-2xl shadow-lg search-datepicker"
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
          calendarClassName="search-datepicker" 
        />
      )}
    </div>
  );
};

export default DatePickerComponent;
