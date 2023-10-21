import React from 'react'
import BountyHero from '../components/BountyHero'
import Referral from '../components/Referral'
import Rewards from '../components/Rewards'
import Banner from '../components/Banner'
import Block from '../components/Block'
import promoImg from '../assets/images/page/bounty/promotion.png'
import bonusImg from '../assets/images/page/bounty/bonus.png'

const BountyPage = () => {
  return (
    <main className='main main--bounty'>
      <BountyHero />
      <Referral />
      <Rewards />

      <Banner
        btnText={'START NOW'}
        title={'Join and earn with us'}
        text={
          'Unleash the unlimited potential of the Aurabit bonus program. From small bonuses to solid capital!'
        }
        className={'bounty-banner'}
        classInner={'bounty-banner__inner'}
      />
      <Block
        gradientTitle={'Bonuses'}
        title={'Turnover'}
        textBg={`Aurabit rewards active partners with additional bonuses for the turnover of first level referrals.
`}
        classNameTitle={'bounty__title'}
        btnText={'learn more'}
        img={bonusImg}
        classNameRow={'bounty__row-reverse'}
      >
        <p>
          In addition to the basic 7%, you will receive +300 dollars for every
          $10k
        </p>
      </Block>
      <div className="bounty__last">

        <Block
          textBg={'Participate in periodic promotions to get additional bonuses.'}
          img={promoImg}

          title={'Regular'}
          gradientTitle={'promotions.'}
          classNameTitle={'bounty__title'}
          btnText={'Join now'}
        >
          <p>Follow the news and stay up to date with current offers.</p>
        </Block>
      </div>
    </main>
  )
}

export default BountyPage
