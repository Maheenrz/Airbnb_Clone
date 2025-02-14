import React from "react";
import { motion } from "framer-motion";
import house from "../../../assets/images/house3.jpg";

const Step1 = () => {
  return (
    <div className="flex w-full p-20">
      <div className="md:mx-auto my-10 p-20 w-full justify-between items-center grid grid-cols-2 gap-32">
        
        {/* Text Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex flex-col"
        >
          <h1 className="font-semibold text-4xl text-gray-900">
            Tell us about your place
          </h1>
          <p className="text-sm text-gray-400 mt-4 text-justify">
            In this step, we'll ask you which type of property you have and if 
            guests will book an entire place or just a room. Then let us know
            the location and how many guests can stay.
          </p>
        </motion.div>

        {/* Image with Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }} 
          className="w-96"
        >
          <img src={house} alt="House preview" className="rounded-xl " />
        </motion.div>

      </div>
    </div>
  );
};

export default Step1;
