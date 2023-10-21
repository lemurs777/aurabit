import React from 'react'
import styles from './ModalGradientNewDepositSm.module.scss'
import ModalGradient from '../ModalGradient/ModalGradient'

const ModalGradientNewDepositSm = ({ isOpen, onClose }) => {

  return (

    <ModalGradient title={'New deposit'} classNameTitle={styles.modal__title} isOpen={isOpen} onClose={onClose} className={styles.modal}>

      <div className={styles.deposit}>
        <div className={styles.deposit__name}>B*****om</div>
        <div className={styles.deposit__current}>+ 1.445 <span>LTC</span></div>
      </div>
    </ModalGradient>
  )
}

export default ModalGradientNewDepositSm