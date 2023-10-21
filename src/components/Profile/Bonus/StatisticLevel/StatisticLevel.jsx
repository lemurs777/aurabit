import React from 'react'
import styles from './StatisticLevel.module.scss'
const StatisticLevel = () => {
  const statistics = [
    {
      lvl: '1 level',
      users: 7,
      turnover: '$103',
      percent: 33
    },
    {
      lvl: '2 level',
      users: 14,
      turnover: '$230',
      percent: 66
    },
    {
      lvl: '3 level',
      users: 25,
      turnover: '$450',
      percent: 80
    },
  ]
  return (
    <div className={styles.statistic}>
      <div className={styles.statistic__inner}>
        <div className={styles.statistic__head}>
          <h3 className={styles.statistic__title}>Statistics by level</h3>
        </div>
        <div className={styles.table}>
          <div className={styles.table__head}>
            <div className={styles.table__th}>Level</div>
            <div className={styles.table__th}>Users</div>
            <div className={styles.table__th}>Turnover</div>
          </div>
          <div className={styles.table__body}>
            {statistics.map(item => (
              <div className={styles.table__tr} key={item.lvl}>
                <div className={styles.table__td}>{item.lvl}</div>
                <span className={styles.table__progress} style={{ width: `${item.percent}%` }}></span>
                <div className={styles.table__td}>{item.users}</div>
                <div className={styles.table__td}>{item.turnover}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatisticLevel