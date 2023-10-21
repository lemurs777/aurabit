import React from 'react'

import { Link } from 'react-router-dom'

import styles from './Login.module.scss'

const Login = () => {
  return (

    <ul className={styles.login}>
      <li>
        <Link to='/login' className={styles.loginBtn}>
          Login
        </Link>
      </li>
      <li>
        <Link to='/registration' className={styles.loginBtn}>
          sign up
        </Link>
      </li>
    </ul>

  )
}

export default Login
