import React from 'react'
import styles from './AssetBalance.module.scss'
import VerticalChart from '../../../Charts/VerticalChart'
const AssetBalance = () => {
  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21'],
    datasets: [
      {
        data: [154, 127, 95, 196, 139, 154, 139, 162, 140, 179, 139, 172, 207, 154, 179, 232, 186, 220, 162, 232, 186],

      }
    ]
  }
  return (
    <div className={styles.asset}>
      <div className={styles.asset__inner}>
        <div className={styles.asset__head}>
          <div className={styles.asset__left}>
            <h3 className={styles.asset__title}>Asset balance</h3>
            <div className={styles.asset__currency}>$2100 <span>+0.9%</span></div>
          </div>
          <div className={styles.asset__right}>
            <div className={styles.asset__name}>Payback</div>
            <div className={styles.asset__percent}>41%</div>
          </div>
        </div>
        <div className={styles.asset__chart}>
          <div className={styles.chart}>
            <div className={styles.chart__title}>Profit chart</div>
            <VerticalChart data={data} className={styles.chart__graph} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssetBalance