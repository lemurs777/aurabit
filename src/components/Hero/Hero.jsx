import React from 'react'

import styles from './Hero.module.scss'
import clsx from 'clsx'

const Hero = ({ children, image, className }) => {
  return (
    <div className={clsx(className, styles.hero)} style={{ backgroundImage: `url(${image})` }}>
      <div className='container'>
        <div className={styles.hero__row}>{children}</div>
      </div>
    </div>
  )
}

export default Hero
