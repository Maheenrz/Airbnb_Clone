










/* Wrapper Styling */
.react-datepicker {
  width: 54rem !important; 
  max-width: none; 
  padding-left: 2rem  ;
  padding-right: 2rem  ;
  padding-top: 4rem; 
  padding-bottom: 4rem; 
  border-radius: 2rem; 
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Corrected box-shadow syntax */
  right: 134px;
  top: 20px;
  border: none;
}

/* Ensure the months are displayed in a row */
.react-datepicker__month-container {
  display: inline-block; /* Change to inline-block to display months side by side */
  vertical-align: top; /* Align the months at the top */
  width: 50%; /* Adjust width to fit two months in a row */
  padding: 1rem;
  /* margin-left: 1px; */
}

.react-datepicker__month-container:last-of-type {
  border-right: none; /* Remove border on the last month container */
}

/* Center the calendar */
.react-datepicker__header {
  background: white;
  border-bottom: 1px solid #e4e4e7;
  padding: 12px 0;
  text-align: center;
}

.react-datepicker__triangle {
  display: none;
}

.react-datepicker__current-month {
  font-size: 18px;
  font-weight:normal;
  color: #303131;
}

/* Weekdays Row Styling */
.react-datepicker__day-names {
  display: flex;
  justify-content: space-between;
  color: #9ca3af;
  font-size: 12px;
  margin-bottom: 10px;
  text-align: center; /* Center align weekday names */
}

.react-datepicker__day-name {
  width: 40px; /* Set the same width as day cells */
  height: 40px; /* Set the same height as day cells */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 2px; /* Add margin to ensure consistent spacing */
}

/* Day Cells Styling */
.react-datepicker__day {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin: 0 8px; /* Add margin to ensure consistent spacing */
  color: #000;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  position: relative;
}

/* Remove unnecessary blue circle */
.react-datepicker__day--keyboard-selected::before,
.react-datepicker__day--keyboard-selected {
  background-color: transparent !important; /* Remove background color */
  color: inherit; /* Inherit the text color */
}

/* Circular background for all states */
.react-datepicker__day::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  z-index: -1;
  transition: all 0.2s ease-in-out;
}

/* Hover Effect */
.react-datepicker__day:hover::before {
  border: 2px solid black; /* Black border */
}

:global(.react-datepicker__day--selected::before),
:global(.react-datepicker__day--in-selecting-range::before),
:global(.react-datepicker__day--in-range::before) {
  background-color: #000 !important; /* Black background */
}


.react-datepicker__day--selected,
.react-datepicker__day--in-selecting-range,
.react-datepicker__day--in-range {
  color: white; /* White text */
  font-weight: 600; /* Semi-bold font */
}

/* Disabled Days */
.react-datepicker__day--disabled {
  color: #d1d5db;
  cursor: not-allowed;
}

.react-datepicker__day--disabled:hover::before {
  border: none;
}

/* Month Layout Styling */
.react-datepicker__month {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

/* Week Layout */
.react-datepicker__week {
  display: flex;
  justify-content: space-between;
}

/* Navigation Buttons */
.react-datepicker__navigation {
  background: none;
  border: none;
  outline: none;
}

.react-datepicker__navigation-icon::before {
  border-color: #9ca3af;
}

/* 

@media (max-width: 1128px) {
  .react-datepicker {
    max-width: 90%; 
    padding: 1.5rem;
  }
}

@media (max-width: 768px) {
  .react-datepicker {
    max-width: 100%; 
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .react-datepicker {
    max-width: 95%; 
    padding: 1rem;
  }
} */
@media (max-width: 768px) {
  .react-datepicker__month-container {
    width: 100%; /* Stack months vertically */
  }
}


/* Responsive Adjustments */
@media (max-width: 1128px) {
  .react-datepicker {
    right: 140px; /* Adjust for medium screens */
    width: 70%; /* Ensure it doesn't overflow */
  }
}

@media (max-width: 768px) {
  .react-datepicker {
    right: 20px; /* Further adjust for smaller screens */
    width: 95%; /* Keep width responsive */
    padding: 2rem;
  }
}

@media (max-width: 480px) {
  .react-datepicker {
    right: 10px; /* Align properly for very small screens */
    width: 100%; /* Full width for mobile */
    padding: 1rem;
  }
}