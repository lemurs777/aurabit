import React from 'react'
import styles from './ModalGradientNewDeposit.module.scss'
import clsx from 'clsx'
import ModalGradient from '../ModalGradient/ModalGradient'
import ModalGradientButton from '../../UI/Buttons/ModalGradientButton'
import successImg from '../../../assets/images/success.png'

const ModalGradientNewDeposit = ({ isOpen, onClose }) => {

  return (

    <ModalGradient title={'New deposit'} classNameTitle={styles.modal__title} isOpen={isOpen} onClose={onClose} className={styles.modal}>

      <div className={styles.deposit}>
        <div className={styles.deposit__current}>+ 1.445 LTC</div>
        <div className={styles.deposit__name}>B*****om</div>
      </div>
    </ModalGradient>
  )
}

export default ModalGradientNewDeposit