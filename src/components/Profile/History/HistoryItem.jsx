import React from 'react'
import styles from './History.module.scss'
import arrowImg from './arrow.svg'
import clsx from 'clsx'
const HistoryItem = ({ data }) => {
  return (
    <div className={styles.item}>
      <div className={clsx(styles.item__icon, data.type === 'send' ? styles.send : styles.receive)}><img src={arrowImg} alt="" /></div>
      <div className={styles.item__col}>
        <div className={styles.item__name}>{data.title}</div>
        <div className={styles.item__text}>{data.date}</div>
      </div>
      <div className={styles.item__col}>
        <div className={styles.item__text}>To : {data.to}</div>
        <div className={styles.item__text}>From : {data.from}</div>
      </div>
      <div className={clsx(styles.item__currency, styles.item__col)}>
        <div className={styles.item__name}>{data.send}</div>
        <div className={styles.item__text}>{data.receive}</div>
      </div>
    </div>
  )
}

export default HistoryItem