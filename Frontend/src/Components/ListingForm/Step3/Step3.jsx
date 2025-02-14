import React, { useEffect, useState } from "react";

const Step3 = ({ pricePerNight, setPricePerNight }) => {
  const [localPrice, updatePrice] = useState(pricePerNight);

  useEffect(() => {
    updatePrice(pricePerNight);
  }, [pricePerNight]);

  const handlePriceChange = (e) => {
    const value = e.target.value;
    updatePrice(value);
    setPricePerNight(value);
  };

  return (
    <div className="m-10 flex flex-col justify-center items-center p-8">
      <h1 className="font-medium text-slate-800 text-4xl text-center mb-8">
        Now, set your price
      </h1>
      <p className="text-lg text-gray-400 text-center mb-8">
        You can change it anytime.
      </p>

      <div className="w-full max-w-md">
        <label className="block mb-2 font-semibold">Price Per Night</label>
        <input
          type="number"
          className="w-full p-3 border border-gray-300 rounded"
          value={localPrice}
          onChange={handlePriceChange}
          required
        />
      </div>
    </div>
  );
};

export default Step3;