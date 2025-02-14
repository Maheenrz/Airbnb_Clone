import React from "react";
import { FaUmbrellaBeach } from "react-icons/fa";
import { HiOutlineHomeModern, HiOutlineHome } from "react-icons/hi2";
import { LiaArchwaySolid } from "react-icons/lia";
import { MdHouseboat } from "react-icons/md";
import { GiCastle, GiTreehouse, GiGrandPiano, GiIsland, GiGrapes, GiWhiteTower, GiCampingTent } from "react-icons/gi";

const CategoriesBar = ({ onCategorySelect }) => {
  const categories = [
    { label: "Beach", icon: <FaUmbrellaBeach /> },
    { label: "Cabins", icon: <HiOutlineHome /> },
    { label: "Vineyards", icon: <GiGrapes /> },
    { label: "Camping", icon: <GiCampingTent /> },
    { label: "Towers", icon: <GiWhiteTower /> },
    { label: "Castles", icon: <GiCastle /> },
    { label: "Tiny Homes", icon: <HiOutlineHomeModern /> },
    { label: "Treehouses", icon: <GiTreehouse /> },
    { label: "Islands", icon: <GiIsland /> },
    { label: "Houseboats", icon: <MdHouseboat /> },
    { label: "Riads", icon: <LiaArchwaySolid /> },
    { label: "Grand Piano", icon: <GiGrandPiano /> },
  ];

  const [selectedCategory, setSelectedCategory] = React.useState(null);

  const handleCategorySelect = (label) => {
    setSelectedCategory(label);
    onCategorySelect(label);
  };

  return (
    <div className="flex mt-5 overflow-x-scroll space-x-12 py-4 px-6 justify-center items-center bg-white">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center cursor-pointer ${
            selectedCategory === category.label ? "text-gray-800 font-semibold" : ""
          }`}
          onClick={() => handleCategorySelect(category.label)}
        >
          <div className="text-xl hover:text-gray-200 mb-2 text-gray-500 transition duration-100">
            {category.icon}
          </div>
          <span className="text-[0.76rem] text-gray-500 text-center mb-1">
            {category.label}
          </span>
          {selectedCategory === category.label && (
            <div className="w-full h-0.5 bg-gray-600 mt-1"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoriesBar;