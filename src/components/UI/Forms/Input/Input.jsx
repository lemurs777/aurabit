import React from 'react'
import styles from './Input.module.scss'
import clsx from 'clsx'

const Input = ({ label, type = 'text', placeholder, className }) => {
  return (
    <div className={clsx(className, styles.input)}>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  )
}

export default Input
