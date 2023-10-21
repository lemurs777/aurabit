import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.svg'
import styles from './Logo.module.scss'
const Logo = () => {
  return (
    <Link className={styles.logo} to='/'>
      <img src={logo} alt='logo' />
    </Link>
  )
}

export default Logo
