import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollUp from '../components/ScrollUp'

const MainLayout = ({ children }) => {
  return (
    <>
      <div className='wrapper'>
        <Header />
        {children}
        <Outlet />
        <Footer />
      </div>
      <ScrollUp />
    </>
  )
}

export default MainLayout
