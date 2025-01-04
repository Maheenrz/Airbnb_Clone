import React, { useState } from "react";
import LoginModal from "./LoginModal";


const AuthModalContainer = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleOpenLogin = () => {
    setShowLogin(true);
    setShowSignUp(false);
  };

  const handleOpenSignUp = () => {
    setShowSignUp(true);
    setShowLogin(false);
  };

  const handleClose = () => {
    setShowLogin(false);
    setShowSignUp(false);
  };

  return (
    <div>
      <button onClick={handleOpenLogin}>Login</button>
      <button onClick={handleOpenSignUp}>Sign Up</button>

      <LoginModal show={showLogin} onClose={handleClose} onSignUp={handleOpenSignUp} />
      <SignUpModal show={showSignUp} onClose={handleClose} onLogin={handleOpenLogin} />
    </div>
  );
};

export default AuthModalContainer;