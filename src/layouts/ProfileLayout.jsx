import React from 'react'
import HeaderProfile from '../components/HeaderProfile/HeaderProfile'
import { Outlet } from 'react-router-dom'

import Footer from '../components/Footer'
import ScrollUp from '../components/ScrollUp'
const ProfileLayout = ({ children }) => {
  return (
    <>
      <div className='wrapper'>
        <HeaderProfile />
        {children}
        <Outlet />
        <Footer />
      </div>
      <ScrollUp />
    </>
  )
}

export default ProfileLayout