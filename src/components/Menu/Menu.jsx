import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Menu.module.scss'
import clsx from 'clsx'
import Login from '../Login'
import Language from '../Language'
const Menu = ({ data, isOpen, handleClick, className }) => {

  return (
    <nav className={clsx(className, styles.menu)}>
      <div className={styles.menu__body}>

        <ul className={styles.menu__list}>
          <li >
            <NavLink
              to={'/all'}
              className={({ isActive, isPending }) =>
                clsx(
                  isPending
                    ? styles.pending
                    : isActive
                      ? styles.activeLink
                      : null,
                  styles.navLink
                )
              }
            >
              All Pages
            </NavLink>
          </li>
          {data.map(item => (
            <li key={item.title} onClick={handleClick}>
              <NavLink
                to={item.path}
                className={({ isActive, isPending }) =>
                  clsx(
                    isPending
                      ? styles.pending
                      : isActive
                        ? styles.activeLink
                        : null,
                    styles.navLink
                  )
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Menu
