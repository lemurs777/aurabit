import React from 'react'
import Calculator from '../components/Calculator'
import Rate from '../components/Rate'
import TrialDeposit from '../components/TrialDeposit'
import investImg from '../assets/images/page/profile/invest.png'
const InvestProfilePage = () => {
  return (
    <main className='main main--profile'>
      <div className="investProfile">
        <div className="container">
          <div className="investProfile__grid">
            <div className="investProfileBlock frame">
              <h1 className="investProfileBlock__title mobile">Use the full potential of modern solutions with an investment in Aurabit.</h1>
              <div className="investProfileBlock__row">
                <div className="investProfileBlock__content">
                  <h1 className="investProfileBlock__title desktop">Use the full potential of modern solutions with an investment in Aurabit.</h1>
                  <div className="investProfileBlock__text">
                    <p>The process of generating profits is completely borne by AI and controlled by our specialists.
                      Our algorithms are capable of working with investment portfolios ranging from $10 to $100,000.
                    </p>
                    <p>
                      You can open an unlimited number of deposits.
                    </p>
                    <p>Use the profit calculator to calculate your potential income</p>
                    <p>Choose the tariff that suits you and get your first profit within 24 hours.</p>
                    <p>Frequently asked questions about investing and answers to financial questions are available in the "help" section</p>
                  </div>
                </div>
                <div className="investProfileBlock__img">
                  <img src={investImg} alt="" />
                </div>
              </div>
            </div>
            <div className="investProfile__calculate">
              <Calculator className='investProfile__calculator ' classNameContent='investProfile__calculator-content frame' />
            </div>
            <div className="investProfile__rate">
              <Rate />
            </div>
            <div className="investProfile__trial">
              <TrialDeposit className='investProfile__trialDeposit' classNameBlock='investProfileTrialBlock' />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default InvestProfilePage