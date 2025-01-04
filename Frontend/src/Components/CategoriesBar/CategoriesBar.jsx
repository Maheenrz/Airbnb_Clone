// import React from "react";
// import {
//   FaUmbrellaBeach,
//   FaHome,
//   FaHotel,
//   FaMountain,
//   FaShip,
//   FaSwimmingPool,
//   FaCampground,
// } from "react-icons/fa";
// import {
//   GiCastle,
//   GiTreehouse,
//   GiFarmTractor,
//   GiGrandPiano,
//   GiIsland,
// } from "react-icons/gi";

// const CategoriesBar = () => {
//   const categories = [
//     { label: "Beach", icon: <FaUmbrellaBeach /> },
//     { label: "Cabins", icon: <FaHome /> },
//     { label: "Villas", icon: <FaHotel /> },
//     { label: "Camping", icon: <FaCampground /> },
//     { label: "Mountains", icon: <FaMountain /> },
//     { label: "Castles", icon: <GiCastle /> },
//     { label: "Farms", icon: <GiFarmTractor /> },
//     { label: "Treehouses", icon: <GiTreehouse /> },
//     { label: "Islands", icon: <GiIsland /> },
//     { label: "Houseboats", icon: <FaShip /> },
//     { label: "Pools", icon: <FaSwimmingPool /> },
//     { label: "Grand Piano", icon: <GiGrandPiano /> },
//   ];

//   return (
//     <div className="flex mt-5 overflow-x-scroll space-x-14 py-4 px-6 justify-center items-center bg-white ">
//       {categories.map((category, index) => (
//     <div
//     key={index}
//     className="flex flex-col items-center justify-center cursor-pointer hover:text-red-500"
//   >
//     <div className="text-xl hover:text-gray-200 mb-2 text-gray-500 transition duration-100">
//       {category.icon}
//     </div>
//     <span className="text-xs text-gray-500 mb-1">{category.label}</span>

//   </div>
  
     
//       ))}
//     </div>
//   );
// };

// export default CategoriesBar;









import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUmbrellaBeach,
  FaHome,
  FaHotel,
  FaMountain,
  FaShip,
  FaSwimmingPool,
  FaCampground,
} from "react-icons/fa";
import {
  GiCastle,
  GiTreehouse,
  GiFarmTractor,
  GiGrandPiano,
  GiIsland,
} from "react-icons/gi";

const CategoriesBar = () => {
  const navigate = useNavigate();

  const categories = [
    { label: "Beach", icon: <FaUmbrellaBeach /> },
    { label: "Cabins", icon: <FaHome /> },
    { label: "Villas", icon: <FaHotel /> },
    { label: "Camping", icon: <FaCampground /> },
    { label: "Mountains", icon: <FaMountain /> },
    { label: "Castles", icon: <GiCastle /> },
    { label: "Farms", icon: <GiFarmTractor /> },
    { label: "Treehouses", icon: <GiTreehouse /> },
    { label: "Islands", icon: <GiIsland /> },
    { label: "Houseboats", icon: <FaShip /> },
    { label: "Pools", icon: <FaSwimmingPool /> },
    { label: "Grand Piano", icon: <GiGrandPiano /> },
  ];

  const handleCategoryClick = (category) => {
    navigate(`/?category=${category}`);
  };

  return (
    <div className="flex mt-5 overflow-x-scroll space-x-14 py-4 px-6 justify-center items-center bg-white">
      {categories.map((category, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center cursor-pointer hover:text-red-500"
          onClick={() => handleCategoryClick(category.label)}
        >
          <div className="text-xl hover:text-gray-200 mb-2 text-gray-500 transition duration-100">
            {category.icon}
          </div>
          <span className="text-xs text-gray-500 mb-1">{category.label}</span>
          </div>
      ))}
    </div>
  );
};

export default CategoriesBar;