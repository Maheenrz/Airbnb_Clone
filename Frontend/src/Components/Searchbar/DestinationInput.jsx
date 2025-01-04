// import React, { useState } from "react";

// const DestinationInput = ({ popularDestinations }) => {
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const [isWhite, setbgcolor] = useState(false);
  

 

//   return (
//     <div 
//          className={`flex hover:bg-[hsl(0,0%,94%)] border border-none rounded-full p-4 pl-7 flex-col pr-20`}>
//       {/* Destination Input */}
//       <div className=" pl- flex  flex-col">
//         <label className="text-xs text-zinc-800">Where</label>
//         <input
//           type="text"
//           placeholder="Search destinations"
//           className="bg-transparent outline-none text-sm cursor-pointer text-gray-800"
//           onFocus={() => setShowSuggestions(true)}
//           onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
//         />
//       </div>
//       {/* Dropdown with Suggestions */}
//       {showSuggestions && (
//         <div className="absolute top-20 left-0 w-full max-w-md bg-white shadow-lg rounded-3xl p-2 z-50">
//           {/* Header Section */}
//           <div className="mb-3">
//             <span className="block text-sm  p-5 font-semibold text-gray-700">
//               Search by region
//             </span>
//           </div>

//           {/* Images Grid */}
//           <div className="grid grid-cols-3 gap-1">
//             {popularDestinations.map((dest, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center cursor-pointer hover:opacity-80"
//               >
//                 <img
//                   src={dest.image}
//                   alt={dest.name}
//                   className="w-28 h-28  object-cover rounded-lg border border-gray-200"
//                 />
//                 <span className="text-xs mb-8 mt-1 text-gray-600">
//                   {dest.name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DestinationInput;




















import React, { useState } from "react";

const DestinationInput = ({ popularDestinations }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);

  return (
    <div className="flex-grow relative rounded-full pl-5 p-3 hover:bg-[hsl(0,0%,94%)] cursor-pointer">
        <label className="text-xs text-gray-900 font-medium">Where</label>
        <button className="block w-full text-left text-sm text-gray-500 font-light"
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}>
          Search destinations
        </button>
        {showSuggestions && (
        <div className="absolute top-20 left-0 w-[26rem] max-w-md bg-white shadow-lg rounded-[2rem] px-6 z-50">
          <div className="mb-3">
            <span className="block text-sm p-5 font-semibold text-gray-700">
              Search by region
            </span>
          </div>
          <div className="grid grid-cols-3 gap-1">
            {popularDestinations.map((dest, index) => (
              <div
                key={index}
                className="flex flex-col  cursor-pointer hover:opacity-80"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-[6.5rem] h-[6.5rem] object-cover rounded-lg  border border-gray-200"
                />
                <span className="text-sm truncate font-light mb-8 mt-1 text-gray-600">{dest.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      </div>
);
};

export default DestinationInput;








// import React, { useState } from "react";

// const DestinationInput = ({ popularDestinations }) => {
//   const [showSuggestions, setShowSuggestions] = useState(false);

//   return (
//     <div className="flex-grow hover:bg-[hsl(0,0%,94%)] border border-none rounded-full max-w-[14rem]  relative p-1 pl-3  w-[6rem] ">
//       <label className="block text-xs text-zinc-800">Where</label>
//       <input
//         type="text"
//         placeholder="Search destinations"
//         className="bg-transparent outline-none text-sm cursor-pointer text-gray-800 w-full"
//         onFocus={() => setShowSuggestions(true)}
//         onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
//       />
//       {showSuggestions && (
//         <div className="absolute top-12 left-0 mt-5 w-[80rem] max-w-md bg-white shadow-lg rounded-[2rem] px-6 z-50">
//           <div className="mb-3">
//             <span className="block text-sm p-5 font-semibold text-gray-700">
//               Search by region
//             </span>
//           </div>
//           <div className="grid grid-cols-3 gap-1">
//             {popularDestinations.map((dest, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col  cursor-pointer hover:opacity-80"
//               >
//                 <img
//                   src={dest.image}
//                   alt={dest.name}
//                   className="w-[6.5rem] h-[6.5rem] object-cover rounded-lg  border border-gray-200"
//                 />
//                 <span className="text-sm truncate font-light mb-8 mt-1 text-gray-600">{dest.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DestinationInput;








// import React, { useState } from "react";

// const DestinationInput = ({ popularDestinations }) => {
//   const [showSuggestions, setShowSuggestions] = useState(false);

//   return (
//     <div className="flex-grow relative p-1 lg:px-2 w-1/3"> {/* Updated width */}
//       <label className="block text-xs text-zinc-800">Where</label>
//       <input
//         type="text"
//         placeholder="Search destinations"
//         className="bg-transparent outline-none text-sm cursor-pointer text-gray-800 w-full"
//         onFocus={() => setShowSuggestions(true)}
//         onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
//       />
//       {showSuggestions && (
//         <div className="absolute top-12 left-0 mt-5 w-[80rem] max-w-md bg-white shadow-lg rounded-[2rem] px-6 z-50">
//           <div className="mb-3">
//             <span className="block text-sm p-5 font-semibold text-gray-700">
//               Search by region
//             </span>
//           </div>
//           <div className="grid grid-cols-3 gap-1">
//             {popularDestinations.map((dest, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col cursor-pointer hover:opacity-80"
//               >
//                 <img
//                   src={dest.image}
//                   alt={dest.name}
//                   className="w-[6.5rem] h-[6.5rem] object-cover rounded-lg border border-gray-200"
//                 />
//                 <span className="text-sm truncate font-light mb-8 mt-1 text-gray-600">{dest.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DestinationInput;












// import React, { useState } from "react";

// const DestinationInput = ({ popularDestinations }) => {
//   const [showSuggestions, setShowSuggestions] = useState(false);

//   return (
//     <div className="flex-grow relative p-1 lg:px-2 w-2/5"> {/* Updated width */}
//       <label className="block text-xs text-zinc-800">Where</label>
//       <input
//         type="text"
//         placeholder="Search destinations"
//         className="bg-transparent outline-none text-sm cursor-pointer text-gray-800 w-full"
//         onFocus={() => setShowSuggestions(true)}
//         onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
//       />
//       {showSuggestions && (
//         <div className="absolute top-12 left-0 mt-5 w-full max-w-[40rem] bg-white shadow-lg rounded-[2rem] px-6 z-50">
//           <div className="mb-3">
//             <span className="block text-sm p-5 font-semibold text-gray-700">
//               Search by region
//             </span>
//           </div>
//           <div className="grid grid-cols-3 gap-1">
//             {popularDestinations.map((dest, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col cursor-pointer hover:opacity-80"
//               >
//                 <img
//                   src={dest.image}
//                   alt={dest.name}
//                   className="w-[6.5rem] h-[6.5rem] object-cover rounded-lg border border-gray-200"
//                 />
//                 <span className="text-sm truncate font-light mb-8 mt-1 text-gray-600">{dest.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DestinationInput;