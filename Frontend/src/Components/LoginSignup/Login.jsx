// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import google from "../../assets/google.svg";
// import facebook from "../../assets/facebook.svg";
// import apple from "../../assets/apple.svg";
// import AuthModalContainer from './Components/LoginSignup/AuthModalContainer';


// const Login = ({ show, onClose, onSignUp }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const [showAuthModal, setShowAuthModal] = useState(false);
  
//   const handleOpenAuthModal = () => {
//     setShowAuthModal(true);
//   };

//   const handleCloseAuthModal = () => {
//     setShowAuthModal(false);
//   };

//   useEffect(() => {
//     if (show) {
//       setEmail("");
//       setPassword("");
//       setError("");
//     }
//   }, [show]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:5000/api/users/login", {
//         email,
//         password,
//       });
//       localStorage.setItem("token", response.data.token);
//       onClose();
//     } catch (err) {
//       setError("Invalid credentials");
//     }
//   };

//   if (!show) return null;

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
//       onClick={onClose}
//     >
//       <div
//         className="relative p-4 w-full max-w-xl bg-white rounded-2xl shadow-lg"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="flex items-center justify-between p-2 md:p-5 border-b rounded-t">
//           <h3 className="text-medium font-semibold text-gray-900 mx-auto">
//             Log in or sign up
//           </h3>
//           <button
//             type="button"
//             className="absolute right-4 top-4 text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
//             onClick={onClose}
//           >
//             <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
//               <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
//             </svg>
//           </button>
//         </div>

//         <div className="p-3 flex flex-col justify-center">
//           <div className="text-xl mb-4 font-medium text-gray-800">
//             Welcome to Airbnb
//           </div>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="mb-6">
//               <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             {error && <div className="text-red-500 mb-4">{error}</div>}
//             <button
//               type="submit"
//               className="w-full mt-4 py-2 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-lg font-light text-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
//             >
//               Continue
//             </button>
//             <p className="text-center mt-4">
//               Don't have an account?{" "}
//               <button
//                 className="text-blue-500 cursor-pointer"
//                 onClick={handleOpenAuthModal}
//               >
//                 Sign up
//               </button>
//               {showAuthModal && (
//         <AuthModalContainer onClose={handleCloseAuthModal} />
//       )}
//             </p>
//             <button
//               type="button"
//               className="relative flex items-center justify-center w-full space-x-5 mt-4 py-3 text-sm text-gray-800 border border-black rounded-lg font-medium  hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
//             >
//               <img
//                 className="absolute left-4 h-5"
//                 src={google}
//                 alt="Google logo"
//               />
//               Continue with Google
//             </button>
//             <button
//               type="button"
//               className="relative flex items-center justify-center w-full mt-4 py-3 text-sm text-gray-800 border border-black rounded-lg font-medium hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
//             >
//               <img
//                 className="absolute left-4 h-5"
//                 src={apple}
//                 alt="Apple logo"
//               />
//               Continue with Apple
//             </button>

//             <button
//               type="button"
//               className="relative flex items-center justify-center w-full mt-4 py-3 text-sm text-gray-800 border border-black rounded-lg font-medium  hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
//             >
//               <img
//                 className="absolute left-4"
//                 width="22"
//                 height="22"
//                 src="https://img.icons8.com/fluency-systems-regular/50/new-post.png"
//                 alt="new-post"
//               />
//               Continue with email
//             </button>
//             <button
//               type="button"
//               className="relative flex items-center justify-center w-full mt-4 py-3 text-sm text-gray-800 border border-black rounded-lg font-medium  hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
//             >
//               <img className="absolute h-5 left-4" src={facebook} />
//               Continue with Facebook
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;








import React, { useState, useEffect } from "react";
import axios from "axios";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import apple from "../../assets/apple.svg";

const Login = ({ show, onClose, onSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (show) {
      setEmail("");
      setPassword("");
      setError("");
    }
  }, [show]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      onClose();
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
      onClick={onClose}
    >
      <div
        className="relative p-4 w-full max-w-xl bg-white rounded-2xl shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-2 md:p-5 border-b rounded-t">
          <h3 className="text-medium font-semibold text-gray-900 mx-auto">
            Log in or sign up
          </h3>
          <button
            type="button"
            className="absolute right-4 top-4 text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
            onClick={onClose}
          >
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
          </button>
        </div>

        <div className="p-3 flex flex-col justify-center">
          <div className="text-xl mb-4 font-medium text-gray-800">
            Welcome to Airbnb
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <button
              type="submit"
              className="w-full mt-4 py-2 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-lg font-light text-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Continue
            </button>
            <p className="text-center mt-4">
              Don't have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onSignUp();
                }}
              >
                Sign up
              </span>
            </p>
            <button
              type="button"
              className="relative flex items-center justify-center w-full space-x-5 mt-4 py-3 text-sm text-gray-800 border border-black rounded-lg font-medium  hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <img
                className="absolute left-4 h-5"
                src={google}
                alt="Google logo"
              />
              Continue with Google
            </button>
            <button
              type="button"
              className="relative flex items-center justify-center w-full mt-4 py-3 text-sm text-gray-800 border border-black rounded-lg font-medium hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <img
                className="absolute left-4 h-5"
                src={apple}
                alt="Apple logo"
              />
              Continue with Apple
            </button>

            <button
              type="button"
              className="relative flex items-center justify-center w-full mt-4 py-3 text-sm text-gray-800 border border-black rounded-lg font-medium  hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <img
                className="absolute left-4"
                width="22"
                height="22"
                src="https://img.icons8.com/fluency-systems-regular/50/new-post.png"
                alt="new-post"
              />
              Continue with email
            </button>
            <button
              type="button"
              className="relative flex items-center justify-center w-full mt-4 py-3 text-sm text-gray-800 border border-black rounded-lg font-medium  hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <img className="absolute h-5 left-4" src={facebook} />
              Continue with Facebook
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;