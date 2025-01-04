import React from "react";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import apple from "../../assets/apple.svg";

const SignupModal = ({ show, onClose }) => {
  if (!show) return null; // If `show` is false, don't render anything

  return (
    <div
      id="default-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
      onClick={onClose} // Close modal on background click
    >
      <div
        className="relative p-4 w-full max-w-xl bg-white rounded-2xl shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-2 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 className="text-medium font-semibold text-gray-900 dark:text-white mx-auto">
            Log in or sign up
          </h3>
          <button
            type="button"
            className="absolute right-4 top-4 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={onClose}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-3 flex flex-col justify-center">
          <div className="text-xl mb-4 font-medium text-gray-800">
            Welcome to Airbnb
          </div>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full mt-4 py-2 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-lg font-light text-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Continue
            </button>
            <button
              type="submit"
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
              type="submit"
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
              type="submit"
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
              type="submit"
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

export default SignupModal;
