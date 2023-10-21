import React from 'react'
import styles from './Wallets.module.scss'
const Wallet = ({ data }) => {
  return (
    <div className={styles.wallet}>
      <div className={styles.wallet__icon}><img src={data.icon} alt="" /></div>
      <div className={styles.wallet__info}>
        <h6 className={styles.wallet__title}>{data.title}</h6>
        <div className={styles.wallet__name}><span>{data.name}</span></div>
      </div>
      <div className={styles.wallet__price}>
        <div className={styles.wallet__sum}>{data.sum}</div>
        <span className={styles.wallet__transfer}>{data.transfer}</span>
      </div>
    </div>
  )
}

export default Wallet