import React from 'react'
import clsx from 'clsx'
import styles from './Checkbox.module.scss'
const Checkbox = ({ defaultChecked, label, className }) => {
  return (
    <label className={clsx(styles.checkbox, className)}>
      <input
        defaultChecked={defaultChecked}
        type='checkbox'
      />
      <span></span>
      {label}
    </label>
  )
}

export default Checkbox
