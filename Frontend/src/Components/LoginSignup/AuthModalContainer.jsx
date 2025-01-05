import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const AuthModalContainer = ({ onClose, isLogin, setIsLogin }) => {
  const handleOpenLogin = () => {
    setIsLogin(true);
  };

  const handleOpenSignUp = () => {
    setIsLogin(false);
  };

  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40" onClick={onClose}>
        <div className="relative p-4 w-full max-w-xl bg-white rounded-2xl shadow-lg" onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center justify-between p-2 md:p-5 border-b rounded-t">
            <h3 className="text-medium font-semibold text-gray-900 mx-auto">
              {isLogin ? "Log in or sign up" : "Sign up"}
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
          {isLogin ? (
            <Login show={true} onClose={onClose} onSignUp={handleOpenSignUp} />
          ) : (
            <SignUp show={true} onClose={onClose} onLogin={handleOpenLogin} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModalContainer;