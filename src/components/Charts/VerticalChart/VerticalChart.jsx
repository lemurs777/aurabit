import React from 'react'
import styles from './VerticalChart.module.scss'
import {
  Chart as ChartJS,
  BarElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import clsx from 'clsx'
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)
const VerticalChart = ({ data, className }) => {

  const options = {
    backgroundColor: (context) => {
      const ctx = context.chart.ctx
      const gradient = ctx.createLinearGradient(0, 0, 0, 200)
      gradient.addColorStop(0, "#93969D")
      gradient.addColorStop(1, "rgba(147, 150, 157, 0.00)")
      return gradient
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    layout: {
      padding: 0,
    },
    borderRadius: 5,
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
          Drawborder: false
        },
        ticks: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          display: false
        }
      }
    }
  }
  return (
    <div className={clsx(className, styles.chart)} >
      <Bar
        data={data}
        options={options}
      >

      </Bar>
    </div >
  )
}

export default VerticalChart