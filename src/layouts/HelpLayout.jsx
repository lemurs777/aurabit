import React from 'react'
import { Outlet } from 'react-router-dom'

import HeaderProfile from '../components/HeaderProfile'
import Footer from '../components/Footer'
import ScrollUp from '../components/ScrollUp'


const HelpLayout = ({ children }) => {
  return (
    <>
      <div className='wrapper'>
        <HeaderProfile />
        <main className="main main--help">
          <div className="container">
            {children}
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
      <ScrollUp />
    </>
  )
}

export default HelpLayout