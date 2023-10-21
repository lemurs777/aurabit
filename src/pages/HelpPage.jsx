import React from 'react'
import HelpSearch from '../components/HelpSearch'
import HelpButton from '../components/Buttons/HelpButton'

import startImg from '../assets/images/svg/triangle.svg'
import securityImg from '../assets/images/svg/security.svg'
import walletImg from '../assets/images/svg/wallet.svg'
import investImg from '../assets/images/svg/invest.svg'
import bonusImg from '../assets/images/svg/bonus.svg'
import financeImg from '../assets/images/svg/finance.svg'
import dashboardImg from '../assets/images/page/profile/dashboard-decor.png'
import { ReactComponent as PlayIcon } from '../assets/images/svg/play.svg'
import Input from '../components/UI/Forms/Input'
import Textarea from '../components/UI/Forms/Textarea'
import ButtonForm from '../components/Buttons/ButtonForm'
const HelpPage = () => {

  const btns = [
    {
      title: 'Get started',
      text: 'General concepts and recommendations',
      icon: startImg,
      path: 'start'
    },
    {
      title: 'Security settings',
      text: 'PIN code, two-factor authentication and password',
      icon: securityImg,
      path: 'security'
    },
    {
      title: 'Wallets',
      text: 'Replenishment, withdrawal of funds and more',
      icon: walletImg,
      path: 'wallets'
    },
    {
      title: 'Investing',
      text: 'Detailed investment guide',
      icon: bonusImg,
      path: 'invest'
    },
    {
      title: 'Bonuses',
      text: 'Referral program, promotions and more',
      icon: startImg,
      path: 'bonus'
    },
    {
      title: 'Financial FAQ',
      text: 'Charges, commissions, limits, currencies',
      icon: financeImg,
      path: 'faq'
    },
  ]
  return (
    <>
      <div className="help__grid">

        <HelpSearch title={'Knowledge base'} text={'Find quickly or explore sections'} />
        <div className="help__btns">
          {btns.map(item => (
            <HelpButton key={item.title} title={item.title} text={item.text} imgBg={item.icon} path={item.path} />
          ))}
        </div>
        <div className="help__row">
          <div className="help__video video">
            <img src={dashboardImg} alt="dashboard" />
            <div className="video__inner">
              <div className="video__text">Watch the full video guide on the Aurabit platform</div>
              <button className='video__btn'><PlayIcon /></button>
            </div>
          </div>
          <div className="help__form form">
            <div className="form__text"><p>Any questions left? write to us</p></div>
            <form className="form__item" action="#">
              <Input label={'Subject'} />
              <Textarea label={'Message'} />
              {/*<button type="submit" className='form__btn'>Send message</button>*/}
              <ButtonForm className={'form__btn'} title={'Send message'} />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default HelpPage