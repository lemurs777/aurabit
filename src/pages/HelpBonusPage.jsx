import React from 'react'

import HelpSearch from '../components/HelpSearch'
import HelpBlockText from '../components/HelpBlockText'
const HelpBonusPage = () => {
  const text = [
    {
      title: 'Bonuses',
      text: `<p>A bounty is a set of bonus programs, such as activity bonuses, a referral program, bonuses for promotional codes, bonuses for platform experience, a system of promotional codes, and additional bonuses for affiliate turnover.</p>
      <p>All bonuses are credited in the internal currency Aura (1Aura = 1 USDT). You can convert bonuses into cryptocurrency and withdraw it or reinvest it into a deposit.</p>
      <p>Referral program. Get rewarded for referring investors to Aurabit. Build your affiliate network up to 3 levels deep. The bonus for the first level is 5%, for the second 2% and 1% for the third level.</p>
      <p>Affiliate Turnover Rewards. Earn an additional 100 Aura for every $10,000 invested by your affiliate structure. Along with a one-time bonus, the % of remuneration will also increase + 0.5% for every 10,000 for a first-level affiliate structure. The maximum that can be achieved is a reward of 7% on the first level.</p>
      <p>Partners who join through your affiliate link also receive a bonus on their Aura balance. The initial bonus for your partners is 1%. Its size increases for every 10,000 dollars of turnover of the first level affiliate structure. Attention ! For this bonus to work, you must have an investment of at least $100.</p>
      <p>Activity bonuses. If you are an active investor and would like to share your experience with others, this will also be encouraged. Make a short video in YouTube shorts, tiktok or instagram post and get a nice bonus. The amount of the bonus will be determined by our employees. We reserve the right to refuse to accrue a bonus for such reasons as: closed account, lack of subscribers on your channel, poor quality of the social network design.
</p>
<span>Bonus for experience on the platform. Follow the next steps and get 10 Aura bonus:</span>
<ol>
<li>Connect account protection (2FA and pincode)</li>
<li>Complete identity verification (KYC)</li>
<li>Make an investment from $100</li>
<li>Make at least one withdrawal.</li>
<li>Invite at least one active investor through a referral program in the amount of $50 or more.
</li>
</ol>
<p>Promo codes. Promo codes are special coupons with various gifts. Follow our news to learn about prizes and draws of promotional codes.</p>
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

export default HelpBonusPage