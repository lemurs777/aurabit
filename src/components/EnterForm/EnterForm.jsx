import React from 'react'
import styles from './EnterForm.module.scss'
import clsx from 'clsx'

import Input from '../UI/Forms/Input'

import googleImg from '../../assets/images/social/google.png'
import { Link } from 'react-router-dom'
const EnterForm = ({ title }) => {
  return (
    <div className={styles.enter}>
      <h3 className={styles.enter__title}>Login</h3>
      <div className={styles.enter__block}>
        <form className={styles.enter__form} action="#">
          <Input label={'Email or username'} />
          <Input label={'Password'} type='password' />
          <Input label={'Authentication code'} type='text' />
          <Link className={styles.enter__forgot} to='/'>Forgot your password ?</Link>
          <Link to='/profile' className={clsx(styles.enter__btn, styles.enter__submit)}>LOGIN</Link>
          <button type="button" className={clsx(styles.enter__btn, styles.enter__google)}><span>Continue with Google</span><img src={googleImg} alt="google account" /></button>
        </form>
        <div className={styles.enter__bottom}>
          <span>Don't have an account?</span>
          <button type="button" className={styles.enter__login}>Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default EnterForm