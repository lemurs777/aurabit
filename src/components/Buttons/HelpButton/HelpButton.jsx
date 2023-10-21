import React from 'react'
import { Link } from 'react-router-dom'
import styles from './HelpButton.module.scss'
const HelpButton = ({ title, text, imgBg, path }) => {
  return (
    <Link className={styles.btn} to={path}>
      <div className={styles.btn__inner}>
        <h6 className={styles.btn__title}>{title}</h6>
        <div className={styles.btn__text}>
          <p>{text}</p>
        </div>
      </div>
      <img src={imgBg} alt="img" />
    </Link>
  )
}

export default HelpButton