import React from 'react'
import styles from './Contacts.module.scss'
import clsx from 'clsx'
import Input from '../../UI/Forms/Input'
import ButtonForm from '../../Buttons/ButtonForm'
const Contacts = () => {
  return (
    <div className={clsx(styles.contact, 'frame')}>
      <div className={styles.contact__inner}>
        <h2 className={styles.contact__title}>Contacts</h2>
        <form className={styles.contact__form} action="#">
          <Input className={styles.contact__input} label={'Telegram'} />
          <Input className={styles.contact__input} label={'WatsApp'} />
          <Input className={styles.contact__input} label={'Facebook'} />
          <Input className={styles.contact__input} label={'Linked In'} />
          <Input className={styles.contact__input} label={'Instagram'} />
          <ButtonForm className={styles.contact__save} title={'Save'} />
        </form>
      </div>
    </div>
  )
}

export default Contacts