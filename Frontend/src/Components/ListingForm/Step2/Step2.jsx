import React, { useState } from "react";
import camera from "../../../assets/images/camera.png";

const Step2 = ({ setImages }) => {
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleImageChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setImages((prevImages) => [...prevImages, ...filesArray]);

      const previews = filesArray.map((file) => URL.createObjectURL(file));
      setImagePreviews((prevPreviews) => [...prevPreviews, ...previews]);
    }
  };

  return (
    <div className="flex flex-col items-center p-20 m-10">
      <h1 className="font-medium text-4xl text-gray-900">Add Some Photos of your apartment</h1>
      <p className="text-lg text-gray-400 mt-4">
        Upload at least 5 high-quality photos that showcase your place.
      </p>
      <div className="mt-8 grid grid-cols-2 gap-4">
        {imagePreviews.map((src, index) => (
          <img key={index} src={src} alt={`preview ${index}`} className="w-full h-64 object-contain rounded-lg" />
        ))}
      </div>
      <div className="flex flex-col w-96 bg-gray-100 rounded-lg h-72 justify-center items-center mt-8 border border-gray-300 relative">
        <img src={camera} alt="camera.png" className="w-36 object-contain" />
        <input
          type="file"
          name="myfile"
          id="filename"
          className="absolute inset-0 opacity-0 cursor-pointer"
          onChange={handleImageChange}
          multiple
          accept="image/*"
          required
        />
        <button className="bg-white text-sm text-black w-28 h-10 border border-black px-4 py-2 rounded-lg mt-4 hover:bg-gray-100">
          Add Photos
        </button>
      </div>
    </div>
  );
};

export default Step2;