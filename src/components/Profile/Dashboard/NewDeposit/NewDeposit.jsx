import React from 'react'
import styles from './NewDeposit.module.scss'
const NewDeposit = () => {
  return (
    <div className={styles.deposit}>
      <div className={styles.deposit__inner}>

        <div className={styles.deposit__text}><p>Earn 1%-3% completely passive income with constantly learning AI algorithms</p></div>
        <button className={styles.deposit__btn} type='button'>NEW DEPOSIT</button>
      </div>
    </div>
  )
}

export default NewDeposit