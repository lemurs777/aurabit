import React from 'react'
import styles from './ModalGradientButton.module.scss'
import clsx from 'clsx'
const ModalGradientButton = ({ className, title }) => {
  return (
    <button type='button' className={clsx(className, styles.button)}>{title}</button>
  )
}

export default ModalGradientButton