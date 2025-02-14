import React from "react";

const Step3_2 = ({ title, maxGuests, images, destination, availability }) => {
  return (
    <div className="m-10 flex flex-col justify-center items-center p-8">
      {/* Title & Description */}
      <h1 className="font-medium text-slate-800 text-4xl text-center mb-4">
        Review and Submit
      </h1>
      <p className="text-lg text-gray-400 text-center mb-6">
        Review and submit your listing
      </p>

      {/* Image & Details Grid */}
      <div className="grid grid-cols-2  items-start justify-center mb-6">
        {/* Image Preview */}
        <div>
          {images.length > 0 && (
            <img
              src={URL.createObjectURL(images[0])}
              alt="preview"
              className="w-60 h-80 object-cover rounded-lg shadow-md"
            />
          )}
        </div>

        {/* Details Grid */}
        <div className="w-[33rem] grid grid-rows-3 gap-3">
          <div className="p-3 border border-gray-300 bg-gray-100 rounded-lg">
            <strong className="text-gray-600">Title:</strong>
            <span className="flex ml-10 text-sm text-gray-600">{title}</span>
          </div>
          <div className="p-3 border border-gray-300 bg-gray-100 rounded-lg">
            <strong className="text-gray-600">Max Guests:</strong>
            <span className="flex ml-10 text-sm text-gray-600">{maxGuests}</span>
          </div>
          <div className="p-3 border border-gray-300 bg-gray-100 rounded-lg">
            <strong className="text-gray-600">Destination:</strong>
            <span className="flex ml-10 text-sm text-gray-600">{destination}</span>
          </div>
          <div className="p-3 border border-gray-300 bg-gray-100 rounded-lg">
            <strong className="text-gray-600">Availability:</strong>
            <ul>
              {availability.map((date, index) => (
                <li key={index}>
                  <span className="ml-10 text-sm text-gray-600">
                    {new Date(date.startDate).toLocaleDateString()} -{" "}
                  </span>
                  <span className="ml-2 text-sm text-gray-600">
                    {new Date(date.endDate).toLocaleDateString()}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3_2;
