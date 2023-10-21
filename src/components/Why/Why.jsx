import React from 'react'

import Title from '../Title'

import depositImg from '../../assets/images/why/deposit.png'
import yieldImg from '../../assets/images/why/yield.png'
import walletImg from '../../assets/images/why/wallet.png'
import budgetImg from '../../assets/images/why/budget.png'
import safetyImg from '../../assets/images/why/safety.png'
import supportImg from '../../assets/images/why/support.png'

import styles from './Why.module.scss'

const Why = () => {
  const whyList = [
    {
      title: 'Crypto deposits',
      text: 'Make your cryptocurrency work and multiply without converting it into fiat currency',
      img: depositImg,
    },
    {
      title: 'High yield',
      text: 'We bring up to 63% of net profit per month, which ensures a quick return on investment',
      img: yieldImg,
    },
    {
      title: 'Built-in wallet',
      text: 'Aurabit wallet is used to accrue profits, store funds, exchange currency and send payments',
      img: walletImg,
    },
    {
      title: 'Investments for any budget',
      text: 'Investment packages from 10 to 200,000 dollars make the AURABIT service available to everyone',
      img: budgetImg,
    },
    {
      title: 'High safety standards',
      text: 'Aurabit software and hardware meet the highest safety requirements',
      img: safetyImg,
    },
    {
      title: 'Support 24/7/365',
      text: 'We are always happy to help you at any time.',
      img: supportImg,
    },
  ]

  return (
    <div className={styles.why}>
      <div className='container'>
        <div className={styles.why__inner}>
          <Title className={styles.why__title} text={'Why '} decor={'Aurabit ?'} />
          <div className={styles.why__items}>
            {whyList.map(item => (
              <div className={styles.item} key={item.title}>
                <div className={styles.item__row}>
                  <div className={styles.item__content}>
                    <h5 className={styles.item__title}>{item.title}</h5>
                    <div className={styles.item__text}>
                      <p>{item.text}</p>
                    </div>
                  </div>
                  <div className={styles.item__img}>
                    <img src={item.img} alt={item.title} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Why
