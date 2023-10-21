import React from 'react'

import styles from './Subscribe.module.scss'
import ButtonForm from '../Buttons/ButtonForm'

const Subscribe = ({ btnText, placeholder }) => {
  return (
    <form className={styles.subscribe}>
      <input type='text' placeholder={placeholder} />
      {/*<button className={styles.subscribe__btn} type='submit'>
        {btnText}
      </button>*/}
      <ButtonForm className={styles.subscribe__btn} title={'Subscribe'} />
    </form>
  )
}

export default Subscribe
