import React from 'react'
import styles from './DashboardButton.module.scss'
import clsx from 'clsx'
const DashboardButton = ({ className, classNameIcon, text, icon, handleClick }) => {
  return (
    <button onClick={handleClick} className={clsx(className, styles.button)}>
      {text}
      <div className={clsx(classNameIcon, styles.button__icon)}>
        <img src={icon} alt="icon" />
      </div>
    </button>
  )
}

export default DashboardButton