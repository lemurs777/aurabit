import React from 'react'

import HelpSearch from '../components/HelpSearch'
import HelpBlockText from '../components/HelpBlockText'
const HelpInvestPage = () => {
  const text = [
    {
      title: 'Investing',
      text: `<p>In order to start receiving passive income, you need to open a deposit.</p>
      <p>To do this, go to the "investing" page, select the offer that suits you and click the "open deposit" button.</p>
      <p>Campounding is an automatic reinvestment option, which implies that the income received or part of it will be reinvested on the principal amount of the deposit to increase daily income. Choose the option you want: do not use (off), reinvest half of the profit and send the other half to the wallet balance (50/50) or reinvest all the profit (on). Please note that the reinvestment option is selected only once and cannot be changed during the entire term of the deposit.</p>
      <p>To calculate the potential profit from an investment with or without a campaigning option, use the profit calculator.</p>
      <p>Next, select the wallet from which you want to pay and click "confirm"</p>
      <p>The deposit will work in the currency in which the purchase was made. It can also be replenished later.</p>
      <p>Profit is credited once every 24 and accumulates on your wallet. Then you can send this money to another wallet, reinvest it or exchange it for another cryptocurrency.</p>
      `
    }
  ]
  return (
    <div className='help__grid'>
      <HelpSearch title={'Knowledge base'} text={'Find quickly or explore sections'} />
      {text.map(text => (
        <HelpBlockText key={text.title} data={text} />
      ))}
    </div>
  )
}

export default HelpInvestPage