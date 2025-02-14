import React, { useState, useEffect } from 'react';

const Step2_4 = ({ description, setDescription }) => {
  const [localDescription, updateDescription] = useState(description);

  useEffect(() => {
    updateDescription(description);
  }, [description]);

  const handleDescriptionChange = (e) => {
    updateDescription(e.target.value);
    setDescription(e.target.value);
  };

  return (
    <div className="m-10 flex flex-col justify-center items-center p-8">
      <h1 className="font-medium text-slate-800 text-3xl text-center mb-8">
        Create your description
      </h1>
      <p className="text-lg text-gray-400 text-center mb-8">
        Share what makes your place special.
      </p>
      <textarea
        maxLength="500"
        className="border border-gray-400 focus:outline-none focus:ring-2 focus:ring-black rounded-md p-2 w-[35rem] h-40"
        value={localDescription}
        onChange={handleDescriptionChange}
        placeholder="Enter description"
        required
      />
      <p className="text-sm text-start text-gray-500 mt-2">
        {localDescription.length}/500
      </p>
    </div>
  );
};

export default Step2_4;