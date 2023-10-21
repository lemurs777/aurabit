import React from 'react'
import styles from './ChartPercent.module.scss'
import percent95 from '../../../assets/images/percent95.png'
import clsx from 'clsx'
const ChartPercent = ({ bottom, className, text, name, bottomText }) => {
  return (
    <div className={clsx(className, styles.chartPercent)}>
      <div className={styles.chartPercent__top}>
        <div className={styles.chartPercent__icon}><img src={percent95} alt="95%" /></div>
        <div className={styles.chartPercent__content}>
          <div className={styles.chartPercent__title}>95%</div>
          <div className={styles.chartPercent__text}>{text}</div>
        </div>
      </div>
      {bottom && (
        <div className={styles.chartPercent__bottom}>
          <div className={styles.chartPercent__text}>{bottomText}</div>
          <div className={styles.chartPercent__name}><span>{name}</span></div>
        </div>
      )}
    </div>
  )
}

export default ChartPercent