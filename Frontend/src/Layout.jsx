import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'

const Layout = () => {
  return (
    <div className='px-9 py-3'>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout