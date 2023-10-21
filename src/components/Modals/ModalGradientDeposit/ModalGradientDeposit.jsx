import React from 'react'
import styles from './ModalGradientDeposit.module.scss'
import clsx from 'clsx'
import ModalGradient from '../ModalGradient/ModalGradient'
import ModalGradientButton from '../../UI/Buttons/ModalGradientButton'
const ModalGradientDeposit = ({ isOpen, onClose }) => {

  return (
    <ModalGradient title={'Deposit replenishment'} isOpen={isOpen} onClose={onClose} className={styles.modal}>
      <div className={styles.modal__exchange}>
        <div className={styles.item}>
          <label>Amount LTC</label>
          <div className={styles.item__input}>
            <input type="number" placeholder='0,456974' />
          </div>
        </div>
        <span>=</span>
        <div className={styles.item}>
          <label>Amount USD</label>
          <div className={styles.item__input}>
            <input type="number" placeholder='$123' />
          </div>
        </div>
      </div>
      <div className={styles.modal__bottom}>
        <ModalGradientButton title={'Cancel'} />
        <ModalGradientButton className={'reverseGradient'} title={'Confirm'} />
      </div>
    </ModalGradient>
  )
}

export default ModalGradientDeposit