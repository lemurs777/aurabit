import React from 'react'
import styles from './NewsBlock.module.scss'

import Subscribe from '../Subscribe'

const NewsBlock = ({ title, text, children, btnText, placeholder }) => {
  return (
    <div className={styles.block}>
      <div className={styles.block__header}>
        <h3 className={styles.block__title}>{title}</h3>
        <div className={styles.block__text}>
          <p>{text}</p>
        </div>
      </div>
      <div className={styles.block__body}>
        {children}
      </div>
      <div className={styles.block__footer}>
        <Subscribe btnText={btnText} placeholder={placeholder} />
      </div>
    </div>
  )
}

export default NewsBlock