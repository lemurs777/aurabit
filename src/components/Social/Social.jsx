import React from 'react'
import styles from './Social.module.scss'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
const Social = ({ title, list, className }) => {
  return (
    <div className={clsx(className, styles.social)}>
      <h6 className={styles.social__title}>{title}</h6>
      <ul className={styles.social__list}>
        {list.map((item, index) => (
          <li key={index}>
            <Link className={styles.item} to={item.path}>
              {item.icon}
              <img src={item.img} alt="" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Social
