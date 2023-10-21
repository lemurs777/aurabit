import React from 'react'
import styles from './ModalGradientCongratulation.module.scss'
import clsx from 'clsx'
import ModalGradient from '../ModalGradient/ModalGradient'
import ModalGradientButton from '../../UI/Buttons/ModalGradientButton'
const ModalGradientCongratulation = ({ isOpen, onClose }) => {

  return (
    <ModalGradient title={'Deposit replenishment'} isOpen={isOpen} onClose={onClose} className={styles.modal}>
      <ul className={styles.modal__list}>
        <li className={styles.item}>
          <div className={styles.item__name}>Amount</div>
          <div className={styles.item__text}>$450</div>
        </li>
        <li className={styles.item}>
          <div className={styles.item__name}>Term</div>
          <div className={styles.item__text}>120 days</div>
        </li>
        <li className={styles.item}>
          <div className={styles.item__name}>Compounding</div>
          <div className={styles.item__text}>On</div>
        </li>
      </ul>
      <div className={styles.modal__text}>
        <p>Attention ! compounding is configured only once when activating the deposit.</p>
      </div>
      <div className={styles.modal__bottom}>
        <ModalGradientButton title={'Cancel'} />
        <ModalGradientButton className={'reverseGradient'} title={'Confirm'} />
      </div>
    </ModalGradient>
  )
}

export default ModalGradientCongratulation