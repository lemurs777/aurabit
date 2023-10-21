import React from 'react'
import styles from './WalletPrice.module.scss'
import chartImg from './chart.png'
const WalletPrice = () => {
  return (
    <div className={styles.price}>
      <div className={styles.price__head}>
        <div className={styles.price__item}>BTC Price</div>
        <div className={styles.price__total}>$29,252.24</div>
      </div>
      <div className={styles.price__chart}>
        <img src={chartImg} alt="chart" />
      </div>
    </div>
  )
}

export default WalletPrice