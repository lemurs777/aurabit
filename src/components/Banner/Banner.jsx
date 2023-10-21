import React from 'react'

import Title from '../Title'
import ButtonGradient from '../Buttons/ButtonGradient'

import styles from './Banner.module.scss'
import clsx from 'clsx'

const Banner = ({ text, title, btnText, className, classInner }) => {
  return (
    <div className={clsx(styles.banner, className)}>
      <div className='container'>
        <div className={clsx(classInner, styles.banner__inner)}>
          <div className={styles.banner__content}>
            <Title text={title} className={styles.banner__title} />
            <div className={styles.banner__text}>{text}</div>
          </div>
          <button className={styles.banner__btn}  >{btnText}</button>
        </div>
      </div>
    </div>
  )
}

export default Banner
