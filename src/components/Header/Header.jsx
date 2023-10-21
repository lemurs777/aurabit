import React, { useState } from 'react'

import Menu from '../Menu'
import Logo from '../Logo'

import styles from './Header.module.scss'
import Login from '../Login'
import { ReactComponent as BurgerCloseIcon } from '../../assets/images/svg/burger-close.svg'
import clsx from 'clsx'
import Language from '../Language'
const Header = () => {
  const [closeMenu, setCloseMenu] = useState(false)
  const menuList = [
    {
      path: '/',
      title: 'HOME',
    },
    {
      path: '/investment',
      title: 'INVESTMENTS',
    },
    {
      path: '/bounty',
      title: 'BOUNTY',
    },
    {
      path: '/about',
      title: 'ABOUT US',
    },
    {
      path: '/news',
      title: 'NEWS',
    },
    {
      path: '/contact',
      title: 'CONTACTS',
    },
  ]
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.header__inner}>
          <Logo />

          <div className={clsx(styles.header__menu, closeMenu ? styles.menuShow : null)}>
            <div className="mobile mobile--lang">
              <Language />
            </div>
            <Menu data={menuList} handleClick={() => setCloseMenu(false)} />
            <Login />
          </div>

          <button className={styles.mobileMenu} onClick={() => setCloseMenu(!closeMenu)}><BurgerCloseIcon /></button>
        </div>
      </div>
    </header>
  )
}

export default Header
