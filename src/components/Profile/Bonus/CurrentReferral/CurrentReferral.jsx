import React from 'react'
import styles from './CurrentReferral.module.scss'
import ProgressBar from '../../../ProgressBar'
const CurrentReferral = () => {
  return (
    <div className={styles.referral}>
      <div className={styles.referral__inner}>
        <div className={styles.referral__title}>Current referral %</div>
        <div className={styles.referral__central}>
          <div className={styles.referral__percents}>
            <div className={styles.referral__percent}>5%</div>
            <div className={styles.referral__percent}>2%</div>
            <div className={styles.referral__percent}>1%</div>
            <div className={styles.referral__percent}>1%</div>
            <div className={styles.referral__percent}>1%</div>
          </div>
          <div className={styles.referral__levels}>
            <div className={styles.referral__level}>1st level</div>
            <div className={styles.referral__level}>2 level</div>
            <div className={styles.referral__level}>3 level</div>
            <div className={styles.referral__level}>4 level</div>
            <div className={styles.referral__level}>5 level</div>
          </div>
        </div>
        <ProgressBar className={styles.referral__progress} description={'$650 from 5000 to upgrade'} width={'24%'} classNameDescription={styles.referral__progressDescription} />
      </div>
    </div>
  )
}

export default CurrentReferral