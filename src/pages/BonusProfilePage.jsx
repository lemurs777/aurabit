import React from 'react'
import BonusBlock from '../components/Profile/Bonus/BonusBlock'
import ProgressBar from '../components/ProgressBar'
import CurrentReferral from '../components/Profile/Bonus/CurrentReferral'
import ReferralCode from '../components/Profile/Bonus/ReferralCode'
import ReferralNetwork from '../components/Profile/Bonus/ReferralNetwork/ReferralNetwork'
import StatisticLevel from '../components/Profile/Bonus/StatisticLevel/StatisticLevel'
import Share from '../components/Profile/Bonus/Share'
import Block from '../components/Profile/Bonus/Block'
import CircleChart from '../components/Charts/CircleChart'
import Promo from '../components/Profile/Dashboard/Promo'
const BonusProfilePage = () => {
  return (
    <main className="main main--profile">
      <div className="bonus">
        <div className="container">
          <div className="bonus__row">
            <div className="bonus__page">
              <div className="desktop">
                <ReferralNetwork />
              </div>
              <div className="desktop">
                <StatisticLevel />
              </div>
              <Share />
              <Block />
              <div className="mobile mobile--promo">
                <Promo />
              </div>
            </div>

            <div className="bonus__aside">
              <div className="bonus__row bonus__row--blocks">
                <BonusBlock current={'$33'} text={'Referral bonuses'} />
                <BonusBlock current={'$650'} text={'Referral turnover'} />
              </div>
              <div className="bonus__progressBlock">
                <ProgressBar width={'65%'} description={'$650 from 1000 to bonus'} className={'bonus__progress-bar frame'} />
              </div>

              <CurrentReferral />
              <div className="mobile">
                <ReferralNetwork />
              </div>
              <div className="mobile">
                <StatisticLevel />
              </div>
              <div className="desktop">
                <ReferralCode />
              </div>
              <div className="bonus__chart frame">
                <CircleChart />
              </div>

              <div className="mobile">
                <ReferralCode />
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default BonusProfilePage