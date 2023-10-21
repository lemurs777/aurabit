import React from 'react'
import styles from './Identity.module.scss'
import Input from '../../UI/Forms/Input'
import ButtonForm from '../../Buttons/ButtonForm'
import clsx from 'clsx'
const Identity = () => {
  const inputs = [
    {
      label: 'Full name',
    },
    {
      label: 'Phone number',
      type: 'tel'
    },
    {
      label: 'Country ',
    },
    {
      label: 'City ',
    },
    {
      label: 'Region ',
    },
    {
      label: 'Street name ',
    },
    {
      label: 'Address details ',
    },
    {
      label: 'ZIP code ',
    },
    {
      label: 'Passport / id /Driver license number ',
    },
  ]
  return (
    <div className={clsx(styles.identity, 'frame')}>
      <h3 className={styles.identity__title}>Identity verification</h3>
      <form className={styles.identity__form} action="#">
        <div className={styles.identity__inputs}>

          {inputs.map(input => (
            <Input key={input.label} label={input.label} type={input.type} className={styles.identity__input} />
          ))}
        </div>
        <div className={styles.identity__uploads}>
          <div className={styles.identity__upload}>Passport / id /Driver license photo</div>
          <div className={styles.identity__upload}>Selfie with a document</div>
        </div>
        <ButtonForm className={styles.identity__btn} title={'Send to review'} />
      </form>
    </div>
  )
}

export default Identity