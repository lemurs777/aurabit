import React from 'react'
import clsx from 'clsx'

import ButtonGradient from '../Buttons/ButtonGradient'
import Hero from '../Hero'

import styles from './BountyHero.module.scss'

import heroBgImg from '../../assets/images/page/bounty/hero-bg.png'
const BountyHero = () => {
  return (
    <div className={styles.bounty}>
      <Hero image={heroBgImg} className={styles.bounty__hero}>
        <div className={styles.bounty__content}>
          <h1 className={clsx(styles.bounty__title, 'text-gradient')}>
            Earn even more with us with the help of bonus programs
          </h1>
          <button className={styles.bounty__btn}
          >Create account</button>
        </div>
      </Hero>
    </div>
  )
}

export default BountyHero
