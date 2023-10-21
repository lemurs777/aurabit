import clsx from 'clsx'
import React from 'react'
import styles from './ButtonGradient.module.scss'

const ButtonGradient = ({ children, title, className, type = 'button' }) => {
  return (
    <button type={type} className={clsx(styles.btn, className)}>
      <span>{title}</span>
      {children}
    </button>
  )
}

export default ButtonGradient
