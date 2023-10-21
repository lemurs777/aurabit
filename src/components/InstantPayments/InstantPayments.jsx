import React from 'react'

import Title from '../Title'

import styles from './InstantPayments.module.scss'

import fastImg from '../../assets/images/page/investment/fast.png'
import Label from '../UI/Label'
const InstantPayments = () => {
  return (
    <div className={styles.instant}>
      <div className='container'>
        <div className={styles.instant__inner}>
          <div className={styles.instant__content}>
            <Title className={styles.instant__title} decor={'Instant payments'} />
            <div className={styles.instant__text}>
              <p>
                Take advantage of payment automation and reduce waiting times
              </p>
            </div>
            <div className="mobile">
              <div className={styles.instant__img}>
                <img src={fastImg} alt='fast payments' />
              </div>
            </div>
            <Label className={styles.instant__label}>
              <div className={styles.instant__labelContent}>
                987 <span>payments for</span> $150K
              </div>
            </Label>
          </div>
          <div className="desktop">
            <div className={styles.instant__img}>
              <img src={fastImg} alt='fast payments' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstantPayments
