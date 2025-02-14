import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaUmbrellaBeach } from "react-icons/fa";
import { HiOutlineHomeModern, HiOutlineHome } from "react-icons/hi2";
import { LiaArchwaySolid } from "react-icons/lia";
import { MdHouseboat } from "react-icons/md";
import {
  GiCastle,
  GiTreehouse,
  GiGrandPiano,
  GiIsland,
  GiGrapes,
  GiWhiteTower,
  GiCampingTent,
} from "react-icons/gi";

const Step1_2 = ({ category, setCategory }) => {
  const [selectedCategory, updateCategory] = useState(category);

  useEffect(() => {
    updateCategory(category);
  }, [category]);

  const handleCategory = (category) => {
    updateCategory(category);
    setCategory(category);
  };

  const categoryList = [
    { id: 1, name: "House", icon: <HiOutlineHome className="text-black text-4xl" /> },
    { id: 2, name: "Tiny Homes", icon: <HiOutlineHomeModern className="text-black text-4xl" /> },
    { id: 3, name: "Beach", icon: <FaUmbrellaBeach className="text-black text-4xl" /> },
    { id: 4, name: "Vineyards", icon: <GiGrapes className="text-black text-4xl" /> },
    { id: 5, name: "Camping", icon: <GiCampingTent className="text-black text-4xl" /> },
    { id: 6, name: "Tower", icon: <GiWhiteTower className="text-black text-4xl" /> },
    { id: 7, name: "Castle", icon: <GiCastle className="text-black text-4xl" /> },
    { id: 8, name: "Treehouses", icon: <GiTreehouse className="text-black text-4xl" /> },
    { id: 9, name: "Islands", icon: <GiIsland className="text-black text-4xl" /> },
    { id: 10, name: "Houseboats", icon: <MdHouseboat className="text-black text-4xl" /> },
    { id: 11, name: "Riads", icon: <LiaArchwaySolid className="text-black text-4xl" /> },
    { id: 12, name: "Grand Piano", icon: <GiGrandPiano className="text-black text-4xl" /> },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut" }} 
      className="m-10 flex flex-col justify-center items-center"
    >
      {/* Centered Heading */}
      <motion.h1
        initial={{ opacity: 2, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="font-medium text-slate-800 text-3xl text-center mb-8"
      >
        Which of these best describes your place?
      </motion.h1>

      {/* Category Grid */}
      <div className="w-[33rem] grid grid-cols-3 gap-4">
        {categoryList.map((category) => (
          <motion.div
            key={category.id}
            onClick={() => handleCategory(category.name)}
            whileHover={{ scale: 1.02 }}
            animate={selectedCategory === category.name ? { scale: 1.1 } : { scale: 1 }}
            className={`rounded-md border p-4 flex flex-col cursor-pointer transition-all 
              ${selectedCategory === category.name ? "border-black bg-gray-100 border-2" : "border-gray-400"}`}
          >
            <div>{category.icon}</div>
            <span>{category.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Step1_2;
