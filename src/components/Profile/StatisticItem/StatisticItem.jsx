import React from 'react'
import styles from './StatisticItem.module.scss'
const StatisticItem = ({ total, text }) => {
  return (
    <div className={styles.item}>
      <div className={styles.item__total}>{total}</div>
      <div className={styles.item__text}>{text}</div>
    </div>
  )
}

export default StatisticItem