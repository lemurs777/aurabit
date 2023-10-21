import React from 'react'
import styles from './InvestmentHero.module.scss'
import Hero from '../Hero'
import investBgImg from '../../assets/images/page/investment/invest-bg.png'
import ButtonGradientSm from '../Buttons/ButtonGradientSm'
const InvestmentHero = () => {
  return (
    <div className={styles.investment}>
      <Hero image={investBgImg} className={styles.investment__hero}>
        <div className={styles.investment__content}>
          <h1 className={styles.investment__title}>
            Experience the full power of AI in finance
          </h1>
          <ButtonGradientSm
            className={styles.investment__btn}
            title={'JOIN NOW'}
          />
        </div>
      </Hero>
    </div>
  )
}

export default InvestmentHero
