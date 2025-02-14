import React, { useState, useEffect } from 'react';

const Step2_3 = ({ title, setTitle }) => {
  const [localTitle, updateTitle] = useState(title);

  useEffect(() => {
    updateTitle(title);
  }, [title]);

  const handleTitleChange = (e) => {
    updateTitle(e.target.value);
    setTitle(e.target.value);
  };

  return (
    <div className="m-10 flex flex-col justify-center items-center p-8">
      <h1 className="font-medium text-slate-800 text-3xl text-center mb-8">
        Now, let's give your apartment a title.
      </h1>
      <p className="text-lg text-gray-400 text-center mb-8">
        Short titles work best. Have fun with it—you can always change it later.
      </p>
      <input
        type="text"
        maxLength="32"
        className="border border-gray-400 focus:outline-none focus:ring-2 focus:ring-black rounded-lg p-2 w-[35rem]"
        placeholder="Enter title"
        value={localTitle}
        onChange={handleTitleChange}
        required
      />
      <p className="text-sm text-start text-gray-500 mt-2">
        {localTitle.length}/32
      </p>
    </div>
  );
};

export default Step2_3;