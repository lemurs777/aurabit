import React from 'react'
import styles from './Promo.module.scss'
import ButtonForm from '../../../Buttons/ButtonForm'
const Promo = () => {

  return (
    <div className={styles.promo}>
      <div className={styles.promo__name}><span>Have promo code ?</span></div>
      <input className={styles.promo__input} type="text" placeholder='Enter it here' />
      <ButtonForm className={styles.promo__btn} title={'Apply'} />
    </div>
  )
}

export default Promo