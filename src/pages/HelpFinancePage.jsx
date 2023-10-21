import React from 'react'

import HelpSearch from '../components/HelpSearch'
import HelpBlockText from '../components/HelpBlockText'
const HelpFinancePage = () => {
  const text = [
    {
      title: 'Financial FAQ ',
      text: `<p>How to replenish the balance?</p>
      <p>Go to the "wallets" section in the control panel, click "top up". Next, select the desired currency and send money to the specified details.</p>
      <p>How long does it take to receive funds?</p>
      <p>The speed of receipt of funds depends on blockchain networks. Enrollment occurs automatically.</p>
      <p>What is the minimum amount for replenishment and investment?</p>
      <p>There are no restrictions on the minimum deposit amount. You can top up your wallet with any amount. <br/>
The minimum investment amount is $10.
</p>
<p>How often can I withdraw funds from my wallet?</p>
<p>Withdrawals can be an unlimited number of times a day.</p>
<p>Can I top up my active deposit?</p>
<p>Yes, you can replenish an active deposit in the currency in which it was activated.</p>
<p>What are the minimum amounts I can withdraw and what are the withdrawal fees?</p><br/>
<span>Currency minimum commission</span>
<span>Currency minimum commission</span>
<span>Currency minimum commission</span>
<p>When is the profit accrued on my investment?</p>
<p>Profit on each deposit is accrued every 24 hours from the moment the investment is activated.</p>
<p>How does currency exchange work?</p>
<p>The exchange is available only to verified users. The number of currency exchange operations is limited to 5 per day. The commission for the exchange is 1.5% of the transaction amount. <br/>
No commission is charged when exchanging Auara for another cryptocurrency.
</p>
<p>Is the deposit returned to the balance after the end of the investment period?</p>
<p>Yes. The deposit will be returned in the currency in which it was purchased.</p>
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

export default HelpFinancePage