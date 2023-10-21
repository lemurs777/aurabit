import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import styles from './CircleChart.module.scss'
import clsx from 'clsx'
ChartJS.register(ArcElement, Tooltip, Legend)


export const data = {
  datasets: [
    {
      label: '# of Votes',
      data: [35, 65],
      backgroundColor: [
        '#D9D9D9',
        'rgba(255, 255, 255, 0.10)'
      ],
      borderColor: [
        '#A3A3A3',
        'transparent'
      ],
      borderWidth: 1,
      cutout: '70%',
      borderRadius: 5,
      offset: 15
    },
  ],
}

const CircleChart = ({ classInfo }) => {
  return <div className={styles.chart}>
    <div className={styles.chart__inner}>
      <div className={styles.chart__text}>
        30%
        <span>Active</span>
      </div>
      <Doughnut data={data} />
    </div>
    <div className={styles.chart__info}>
      <div className={clsx(classInfo, styles.info)}>  70 <span>Total referrals</span></div>
      <div className={clsx(classInfo, styles.info)}>  25 <span>Active users</span></div>
    </div>
  </div>
}

export default CircleChart