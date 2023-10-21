import React from 'react'
import styles from './ButtonForm.module.scss'
import clsx from 'clsx'
const ButtonForm = ({ title, className, handleClick }) => {
  return (
    <button onClick={handleClick} className={clsx(className, styles.button)} type='submit'>
      {title}
    </button>
  )
}

export default ButtonForm
