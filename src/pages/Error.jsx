import React from 'react'
import errorImg from '../assets/images/error.png'
import ButtonGradient from '../components/Buttons/ButtonGradient'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div className='error'>
      <div className="container">
        <div className="error__inner">
          <img src={errorImg} alt="error" />
          <h1 className="error__title">Page not found</h1>
          <ButtonGradient className='error__btn'><Link to='/'>Home</Link></ButtonGradient>
        </div>
      </div>
    </div>
  )
}

export default Error