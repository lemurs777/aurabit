import React from 'react'
import styles from './Block.module.scss'
import ProgressBar from '../../../ProgressBar'
const Block = () => {
  return (
    <div className={styles.block}>
      <div className={styles.block__inner}>
        <div className={styles.block__text}>
          <p>Your referral partners will receive 1% of all investments on their balance if they use your referral link.</p>
          <p>Important! You must have a deposit of at least $50.</p>
        </div>
        <div className={styles.block__progress}>
          <div className={styles.block__progressText}>65% <span>completed</span></div>
          <ProgressBar classNameDescription={styles.block__progressLabel} description={'$6505 from 10000 to next level'} width={'65%'} />
        </div>
      </div>
    </div>
  )
}

export default Block