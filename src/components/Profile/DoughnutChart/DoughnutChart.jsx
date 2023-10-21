import React from 'react'
import styles from './DoughnutChart.module.scss'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
ChartJS.register(ArcElement, Tooltip, Legend)

export const data = {
  datasets: [
    {
      //circumference: 355,
      label: 'Platform Performance',
      data: [95, 5],
      backgroundColor: [
        'red',
        'transparent'
      ],
      borderWidth: 0
    },
  ],
}
//const backgroundCircle = {
//  id: 'backgroundCircle',
//  beforeDatasetsDraw(chart, args, pluginOptions) {
//    const { ctx } = chart
//    ctx.save()
//    const xCoor = chart.getDatasetMeta(0).data[0].x
//    const yCoor = chart.getDatasetMeta(0).data[0].y
//    const innerRadius = chart.getDatasetMeta(0).data[0].innerRadius
//    const outerRadius = chart.getDatasetMeta(0).data[0].outerRadius
//    const width = outerRadius - innerRadius
//    const angle = Math.PI / 180
//    ctx.beginPath()
//    ctx.lineWidth = width
//    ctx.fillStyle = 'conic-gradient(from 136deg at 70.56% 51.51%, #AD00FF 0deg, #0061F2 360deg)'
//    ctx.arc(xCoor, yCoor, outerRadius - width / 2, 0, angle * 360, false)
//    ctx.fill()
//  }
//}
const DoughnutChart = () => {
  return (
    <Doughnut data={data}
    //plugins={[backgroundCircle]}
    />
  )
}

export default DoughnutChart