import React from 'react'
import StatisticItem from '../components/Profile/StatisticItem'
import graphicImg from '../assets/images/graphic.png'
import graphicMobImg from '../assets/images/mobile/chart.png'
import Trading from '../components/Profile/Trading'
import percent95 from '../assets/images/percent95.png'
import Subtract from '../assets/images/Subtract.png'
import VerticalChart from '../components/Charts/VerticalChart'
import CircleChart from '../components/Charts/CircleChart'
const StatisticProfilePage = () => {
  const statistics = [
    {
      total: '300',
      text: 'Transactions within 24 hours'
    },
    {
      total: '2.1%',
      text: 'Profit in 24 hours'
    },
    {
      total: '300',
      text: 'Open trades'
    },
    {
      total: '0.35%',
      text: 'Average profit per trade'
    },
  ]
  const data = {
    labels: ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
    datasets: [
      {
        data: [3, 6, 9, 3, 6, 9, 3, 6, 9, 3, 6, 9, 3, 6, 9, 3, 6, 9, 8, 7],

      }
    ]
  }
  return (
    <main className="main main--profile">
      <div className="statisticProfile">
        <div className="container">
          <div className="grid">
            <div className="statisticProfile__items">
              {statistics.map((item, index) => (
                <StatisticItem key={index} total={item.total} text={item.text} />
              ))}
            </div>
            <div className="statisticProfile__graphic frame">
              <div className="desktop">
                <img src={graphicImg} alt="graphic" />
              </div>
              <div className="mobile">
                <img src={graphicMobImg} alt="graphic" />
              </div>
            </div>
            <div className="statisticProfile__row--trading row">
              <div className="statisticProfile__trading">
                <Trading />
              </div>
              <div className="statisticProfile__chart frame">
                {/*<DoughnutChart />*/}
                <div className="cartPercent">
                  <div className="cartPercent__icon"><img src={percent95} alt="" /></div>
                  <div className="cartPercent__content">
                    <div className="cartPercent__title">95%</div>
                    <div className="cartPercent__text">Platform Performance</div>
                  </div>
                </div>
                <div className="cartPercent">
                  <div className="cartPercent__icon"><img src={Subtract} alt="" /></div>
                  <div className="cartPercent__content">
                    <div className="cartPercent__title">47%</div>
                    <div className="cartPercent__text">System load</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="statisticProfile__block frame">
              <div className="verticalChart">
                <div className="statisticProfile__row">
                  <div className="verticalChart__left">
                    <div className="verticalChart__head">
                      <div className="verticalChart__title">
                        User Registration Dynamics
                      </div>
                      <div className="verticalChart__text">+24 in the last 24 hours</div>
                    </div>
                    <VerticalChart data={data} />
                  </div>
                  <CircleChart classInfo='circleChart__info' />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default StatisticProfilePage