import React from 'react'
import styles from './ModalGradientSuccessActive.module.scss'
import clsx from 'clsx'
import ModalGradient from '../ModalGradient/ModalGradient'
import ModalGradientButton from '../../UI/Buttons/ModalGradientButton'
import successImg from '../../../assets/images/success.png'

const ModalGradientSuccessActive = ({ isOpen, onClose }) => {

  return (

    <ModalGradient title={'Success !'} isOpen={isOpen} onClose={onClose} className={styles.modal}>
      <div className={styles.modal__img}><img src={successImg} alt="success" /> </div>

      <div className={styles.modal__text}><p>Deposit successfully activated</p></div>

      <div className={styles.modal__bottom}>
        <ModalGradientButton title={'Close'} />
      </div>
    </ModalGradient>
  )
}

export default ModalGradientSuccessActive