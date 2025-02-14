import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import AuthModalContainer from './Components/LoginSignup/AuthModalContainer';

const Layout = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleOpenLogin = () => {
    setIsLogin(true);
    setShowAuthModal(true);
  };

  const handleOpenSignUp = () => {
    setIsLogin(false);
    setShowAuthModal(true);
  };

  const handleCloseAuthModal = () => {
    setShowAuthModal(false);
  };

 

  return (
    <div className='px-9 py-3'>
      <Header onOpenLogin={handleOpenLogin} onOpenSignUp={handleOpenSignUp} />
      <Outlet />
      {showAuthModal && (
        <AuthModalContainer 
          onClose={handleCloseAuthModal} 
          isLogin={isLogin} 
          setIsLogin={setIsLogin} 
        />
      )}
      
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;