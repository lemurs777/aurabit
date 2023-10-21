import React from 'react'

import ButtonGradient from '../Buttons/ButtonGradient/ButtonGradient'

import clsx from 'clsx'

import styles from './HomeHero.module.scss'

import heroImg from '../../assets/images/hero-logo.png'
import heroBgImg from '../../assets/images/hero.png'
import Hero from '../Hero'

const HomeHero = () => {
  return (
    <Hero image={heroBgImg}>
      <div className={styles.hero__content}>
        <h1 className={clsx(styles.hero__title, 'text-gradient')}>
          Grow your capital quickly and safely
        </h1>
        <div className={clsx(styles.hero__text, 'text-gradient')}>
          <p>Take advantage of cutting-edge AI technology in your pocket</p>
        </div>
        <ButtonGradient title={'JOIN NOW'} className={styles.hero__btn} />
      </div>
      <div className={styles.hero__img}>
        <img src={heroImg} alt='hero aurabit' />
      </div>
    </Hero>
  )
}

export default HomeHero
