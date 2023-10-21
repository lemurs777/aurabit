import React from 'react'

import Hero from '../Hero'

import styles from './AboutHero.module.scss'

import heroBgImg from '../../assets/images/about-bg.png'

const AboutHero = () => {
  return <Hero className={styles.about} image={heroBgImg}></Hero>
}

export default AboutHero
