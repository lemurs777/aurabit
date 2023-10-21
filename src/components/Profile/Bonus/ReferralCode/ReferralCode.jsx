import React from 'react'
import styles from './ReferralCode.module.scss'
import qrImg from '../../../../assets/images/qr.jpg'
import ButtonForm from '../../../Buttons/ButtonForm'
import Input from '../../../UI/Forms/Input'
const ReferralCode = () => {
  return (
    <div className={styles.code}>
      <div className={styles.code__inner}>
        <div className={styles.code__head}>
          <h3 className={styles.code__title}>Referral code</h3>
        </div>
        <div className={styles.code__qr}>
          <img src={qrImg} alt="QR" />
        </div>
        {/*<div className={styles.code__linkName}>Referral link</div>
        <input className={styles.code__input} type="text" placeholder='https://aurabit.ai/partner=coprofil' />*/}
        <Input className={styles.code__input} placeholder={'https://aurabit.ai/partner=coprofil'} label={'Referral link'} />
        <ButtonForm className={styles.code__btn} title={'Copy'} />
      </div>
    </div>
  )
}

export default ReferralCode