import React from 'react'
import styles from './ProgressBar.module.scss'
import clsx from 'clsx'
const ProgressBar = ({ width, description, classNameDescription, className }) => {
  return (
    <div className={clsx(className, styles.progressBar)}>
      <div className={clsx(classNameDescription, styles.progressBar__description)}>{description}</div>
      <div className={styles.progressBar__line}>
        <span style={{ width: width }}></span>
      </div>
    </div>
  )
}

export default ProgressBar