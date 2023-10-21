import React from 'react'
import styles from './MainData.module.scss'
import avatarImg from '../../../assets/images/avatar/avatar.jpg'
import clsx from 'clsx'
import Input from '../../UI/Forms/Input'
import Checkbox from '../../UI/Forms/Checkbox'
const MainData = () => {
  return (
    <div className={clsx(styles.main, 'frame')}>
      <div className={styles.main__row}>
        <div className={styles.main__left}>
          <div className={styles.main__avatar}><img src={avatarImg} alt="avatar" /></div>
          <div className={styles.main__info}>
            <h2 className={styles.main__userName}>User Name</h2>
            <a className={styles.main__mail} href="mailto:username@gmail.com">username@gmail.com</a>
          </div>
          <div className={clsx(styles.main__upload, styles.upload)}>
            <input type="file" />
            <button className={styles.upload__btn}>Upload photo</button>
          </div>
        </div>
        <div className={styles.main__right}>
          <h1 className={styles.main__title}>Main data</h1>
          <form className={styles.main__form} action="#">
            <Input className={styles.main__input} label={'Full name'} placeholder={'John Doe'} />
            <Input className={styles.main__input} label={'Country'} placeholder={'USA'} />
            <Input className={styles.main__input} label={'Email'} placeholder={'username@gmail.com'} type='email' />
            <Input className={styles.main__input} label={'Phone number'} type='tel' />
            <div className={styles.main__checkboxes}>
              <Checkbox label={'Public email'} className={styles.main__checkbox} />
              <Checkbox label={'Receive news'} className={styles.main__checkbox} />
            </div>
            <button className={styles.main__submit} type="submit">Save</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default MainData