import React from 'react'
import styles from './Button.module.scss'
import clsx from 'clsx'
const Button = ({ title, image, handleClick, className }) => {
  return (
    <button className={clsx(className, styles.btn)} onClick={handleClick}>
      {title}
      <img src={image} alt='image' />
    </button>
  )
}

export default Button
