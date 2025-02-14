import React from 'react'
import place from "../../assets/images/place.png";
import door from "../../assets/images/door.png";
import sofa from "../../assets/images/sofa.png";

const Step0 = () => {
  return (
    <div>
        <div className="md:mx-auto my-20 p-20 w-full justify-between items-center grid grid-cols-2 ">
        <div className="lg:font-medium text-black lg:text-[4rem] py-10">
          It's easy to get started on Airbnb
        </div>
        <div className="grid grid-rows-3">
          <div className="mt-4 border-b-2 border-gray-200 grid grid-cols-2 ">
            <div className="space-y-2">
              <h1 className="font-medium text-2xl">
                1 &nbsp; Tell us about your place
              </h1>
              <p className="text-gray-400">
                Share some basic info, like where it is and how many guests can
                stay.
              </p>
            </div>
            <img
              src={place}
              alt="place image"
              className="w-32 h-32 object-contain ml-20"
            ></img>
          </div>
          <div className="mt-4 border-b-2 border-gray-200 grid grid-cols-2">
            <div className="space-y-2">
              <h1 className="font-medium text-2xl">
                2 &nbsp; Make it stand out
              </h1>
              <p className="text-gray-400">
                Add 5 or more photos plus a title and description --we'll help
                you out.
              </p>
            </div>
            <img
              src={sofa}
              alt=""
              className="w-32 h-32 object-contain ml-20"
            ></img>
          </div>
          <div className="mt-4 grid grid-cols-2 hover:border-black cursor-pointer">
            <div className="space-y-2">
              <h1 className="font-medium text-2xl">
                3 &nbsp; Finish up and publish
              </h1>
              <p className="text-gray-400 leading-relaxed">
                Choose if you'd like to start with an experiences guest, set a
                starting price and publish your listing.
              </p>
            </div>
            <img
              src={door}
              alt=""
              className="w-32 h-32 object-contain ml-20"
            ></img>
          </div>
        </div>        
      </div>
    </div>
  )
}

export default Step0