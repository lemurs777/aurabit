import React from 'react'
import InvestmentHero from '../components/InvestmentHero'
import InvestList from '../components/InvestList'
import Rate from '../components/Rate'
import TrialDeposit from '../components/TrialDeposit'
import InvestBanner from '../components/InvestBanner'
import InstantPayments from '../components/InstantPayments/InstantPayments'
import Guarantees from '../components/Guarantees'
import Calculator from '../components/Calculator'
import Title from '../components/Title'

const InvestmentPage = () => {
  return (
    <main className='main main--investment'>
      <InvestmentHero />
      <div className="container">

        <InvestList />
        <div className="investments__calculate investments-calculate">
          <Title
            decor={'Flexible investment options'}
            className={'investments-calculate__title'}
          />
          <div className={'investments-calculate__text'}>
            <p>Calculate your profit</p>
          </div>
          <Calculator />
        </div>
        <div className="investment__rate">
          <Title decor={'Define your strategy'} />
          <Rate />
        </div>
        <div className="investment__trial">
          <TrialDeposit />
        </div>
      </div>
      <InvestBanner

        text={'with Confidence and Expertise'}
        decor={'Unlock Your Financial Potential '}
      />
      <Guarantees />
      <InstantPayments />

    </main>
  )
}

export default InvestmentPage
