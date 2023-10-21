import React from 'react'
import styles from './ModalGradientFailed.module.scss'
import clsx from 'clsx'
import ModalGradient from '../ModalGradient/ModalGradient'
import ModalGradientButton from '../../UI/Buttons/ModalGradientButton'
import failedImg from '../../../assets/images/failed.png'

const ModalGradientFailed = ({ isOpen, onClose }) => {

  return (

    <ModalGradient title={'Failed !'} isOpen={isOpen} onClose={onClose} className={styles.modal}>
      <div className={styles.modal__img}><img src={failedImg} alt="success" /> </div>

      <div className={styles.modal__text}><p>Insufficient funds</p></div>

      <div className={styles.modal__bottom}>
        <ModalGradientButton title={'Cancel'} />
        <ModalGradientButton className={'reverseGradient'} title={'Top up'} />
      </div>
    </ModalGradient>
  )
}

export default ModalGradientFailed