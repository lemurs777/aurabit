import React from 'react'
import styles from './BonusBlock.module.scss'
const BonusBlock = ({ current, text }) => {
  return (
    <div className={styles.block}>
      <div className={styles.block__inner}>
        <div className={styles.block__current}>{current}</div>
        <div className={styles.block__text}><span>{text}</span></div>
      </div>
    </div>
  )
}

export default BonusBlock