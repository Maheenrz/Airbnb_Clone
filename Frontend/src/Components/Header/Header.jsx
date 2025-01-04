import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { FaCircleUser } from "react-icons/fa6";
import ListingCard from "../Listings/ListingCard";
import { LuAlignJustify } from "react-icons/lu";
import LoginModal from "../LoginSignup/LoginModal";
import SignupModal from "../LoginSignup/SignupModal";
import { Link } from "react-router-dom";

const Header = () => {
  const [selected, setSelected] = useState("Stays");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  return (
    <div className="bg-white w-full grid grid-cols-3 items-center headerHidden:hidden">
      {/* Left Section: Logo */}

      <div className="flex items-center space-x-2">
        <Link to={ListingCard}>
          <img className="h-9 text-red-500" src={logo} alt="Airbnb logo" />
        </Link>
        <Link
          to={ListingCard}
          className="hidden lg:flex text-2xl space-x-4 font-semibold text-red-500"
        >
          airbnb
        </Link>
      </div>

      {/* Middle Section: Stays and Experiences */}
      <div className="flex justify-center staysVisible:relative staysVisible:top-16">
        <div className="flex space-x-5 items-center">
          <h6
            className={`px-4 py-2 font-light cursor-pointer ${
              selected === "Stays"
                ? "text-zinc-800 font-medium"
                : "text-gray-500 hover:bg-zinc-50 hover:shadow hover:text-zinc-800 hover:rounded-full"
            }`}
            onClick={() => setSelected("Stays")}
          >
            Stays
          </h6>
          <h6
            className={`px-4 py-2 cursor-pointer font-light ${
              selected === "Experiences"
                ? "font-medium text-zinc-800"
                : "text-gray-500 hover:shadow hover:rounded-full hover:bg-zinc-50 hover:text-zinc-800"
            }`}
            onClick={() => setSelected("Experiences")}
          >
            Experiences
          </h6>
        </div>
      </div>

      {/* Right Section: Profile and Options */}
      <div className="flex items-center space-x-4 justify-end">
        <span className="font-semibold text-sm text-zinc-600">
          Airbnb your home
        </span>
        <div className="relative" tabIndex={0}>
          <div
            className="p-3 flex rounded-full border border-zinc-200 shadow-sm space-x-2 cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <LuAlignJustify className="h-4 w-6 mt-2 text-gray-500" />
            <FaCircleUser className="h-7 w-8 text-gray-500" />
          </div>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-zinc-200 rounded-xl shadow-lg z-10">
              <ul className="py-2">
                <li
                  className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-zinc-100 rounded-t-lg"
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setShowLoginModal(true);
                  }}
                >
                  Login
                </li>
                <li
                  className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-zinc-100 rounded-b-lg"
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setShowSignupModal(true);
                  }}
                >
                  Sign Up
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Render Login Modal */}
      <LoginModal
        show={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />

      {/* Render Signup Modal */}
      <SignupModal
        show={showSignupModal}
        onClose={() => setShowSignupModal(false)}
      />
    </div>
  );
};

export default Header;
