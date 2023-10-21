import React from 'react'
import Promo from '../components/Profile/Dashboard/Promo'
import ChartPercent from '../components/Charts/ChartPercent'
import RecentTransactinos from '../components/Profile/Dashboard/RecentTransactinos'
import News from '../components/Profile/Dashboard/News'
import Slider from '../components/Profile/Dashboard/Slider/Slider'
import NewDeposit from '../components/Profile/Dashboard/NewDeposit/NewDeposit'
import InvestmentPortfolio from '../components/Profile/Dashboard/InvestmentPortfolio'
import BalanceWallet from '../components/Profile/Dashboard/BalanceWallet'
import Balance from '../components/Profile/Dashboard/Balance'
import Total from '../components/Profile/Dashboard/Total'
import AssetBalance from '../components/Profile/Dashboard/AssetBalance'
import ModalAddWallet from '../components/Modals/ModalAddWallet'
import { useState } from 'react'

const DashboardPage = () => {

  return (
    <main className="main main--profile">
      <div className="dashboard">
        <div className="container">

          <div className="dashboard__inner">
            <div className="dashboard__row">
              <AssetBalance />
              <Total />
            </div>
            <div className="dashboard__row">
              <Balance />
              <BalanceWallet />
            </div>
            <div className="dashboard__row">
              <div className="dashboard__page">
                <InvestmentPortfolio />
                <NewDeposit />
                <div className="mobile">
                  <RecentTransactinos />
                </div>
                <div className="mobile">
                  <ChartPercent className='frame dashboard__chartPercent' text={'Platform Usage'} bottom={true} name={'Investor'} bottomText={'Current status'} />
                </div>
                <div className="dashboard__row dashboard__row--sliders">
                  <div className="dashboard__col-md col-md">
                    <Slider />
                  </div>
                  <div className="dashboard__col-md col-md">
                    <News />
                  </div>
                </div>
              </div>
              <div className="dashboard__aside">
                <div className="desktop">
                  <RecentTransactinos />
                </div>
                <div className="desktop">
                  <ChartPercent className='frame dashboard__chartPercent' text={'Platform Usage'} bottom={true} name={'Investor'} bottomText={'Current status'} />
                </div>
                <Promo />
              </div>
            </div></div>
        </div>
      </div>



    </main>
  )
}

export default DashboardPage