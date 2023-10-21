import React from 'react'

import Title from '../Title'

import bountyImg from '../../assets/images/bonuses.png'

import styles from './Bounty.module.scss'

const Bounty = () => {
  const bountyList = [
    'Recommend Aurabit and receive bonuses.',
    'Expand your partner network.',
    'Bonuses for you and your partners.',
    'Rewards for social media activity.',
    'Additional bonuses.',
    'Regular promotions.',
    'Special offers.',
  ]

  return (
    <div className={styles.bounty}>
      <div className='container'>
        <div className={styles.bounty__inner}>
          <Title className={styles.bounty__title} text={'Bounty program'} />
          <div className={styles.bounty__row}>
            <div className={styles.bounty__content}>
              <h2 className={styles.bounty__subtitle}>
                Aurabit rewards its clients for their activity and promotion of
                our business online.
              </h2>
              <ul className={styles.bounty__list}>
                {bountyList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.bounty__img}>
              <img src={bountyImg} alt='bounty program' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bounty
