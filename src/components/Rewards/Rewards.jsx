import React from 'react'
import styles from './Rewards.module.scss'

import ButtonGradientSm from '../Buttons/ButtonGradientSm'

import sharingImg from '../../assets/images/page/bounty/sharing.png'

const Rewards = () => {
  return (
    <div className={styles.reward}>
      <div className='container'>
        <h2 className={styles.reward__title}>
          Rewards <span>for social media activity</span>
        </h2>
        <div className="mobile">
          <div className={styles.reward__img}>
            <img src={sharingImg} alt='sharing' />
          </div>
        </div>
        <div className={styles.reward__row}>
          <div className={styles.reward__col}>
            <div className={styles.reward__textBg}>
              <p>
                Are you successfully earning with Aurabit and want to share your
                experience with others?
              </p>
            </div>
            <div className={styles.reward__text}>
              <p>Your feedback will be rewarded!</p>
              <p>Make a post on social networks and send us a link.</p>
            </div>
            <ButtonGradientSm
              title={'Create an account'}
              className={styles.reward__btn}
            />
          </div>
          <div className="desktop">
            <div className={styles.reward__img}>
              <img src={sharingImg} alt='sharing' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rewards
