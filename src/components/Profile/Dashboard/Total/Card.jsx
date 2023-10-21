import React from 'react'
import styles from './Total.module.scss'
const Card = ({ bgImg, name, bonus, current }) => {
  return (
    <div className={styles.card} style={{ backgroundImage: `url(${bgImg})` }}>
      <div className={styles.card__inner}>
        <div className={styles.card__head}>
          <div className={styles.card__name}>{name}</div>
          <div className={styles.card__bonus}>{bonus}</div>
        </div>
        <div className={styles.card__current}>{current}</div>
      </div>
    </div>
  )
}

export default Card