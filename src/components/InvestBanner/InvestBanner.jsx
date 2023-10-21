import React from 'react'

import Title from '../Title'

import styles from './InvestBanner.module.scss'
const InvestBanner = ({ text, title, decor }) => {
  return (
    <div className={styles.banner}>
      <div className='container'>
        <div className={styles.banner__inner}>
          <div className={styles.banner__content}>
            <Title
              text={title}
              decor={decor}
              className={styles.banner__title}
            />
            <div className={styles.banner__text}>{text}</div>
          </div>
          <button className={styles.banner__btn}>start</button>
        </div>
      </div>
    </div>
  )
}

export default InvestBanner
