import React from 'react'
import styles from './ModalGradientCompounding.module.scss'
import clsx from 'clsx'
import ModalGradient from '../ModalGradient/ModalGradient'
import ModalGradientButton from '../../UI/Buttons/ModalGradientButton'
import successImg from '../../../assets/images/success.png'

const ModalGradientCompounding = ({ isOpen, onClose }) => {

  return (

    <ModalGradient title={'Compounding'} isOpen={isOpen} onClose={onClose} className={styles.modal}>


      <div className={styles.modal__text}><p>Compounding (Reinvestment) is an option in which the profit received or part of it is added to the main body of the deposit in order to maximize the profit on the deposit.
      </p>
        <p><b>Off</b> - Profit on the deposit is credited to the account wallet and is available for withdrawal at any time</p>
        <br />
        <p><b>50/50</b> - profit is accrued in equal parts to the wallet and to the deposit, increasing its amount</p>
        <br />
        <p><b>100%</b> - profit on the deposit is credited back to the main body of the deposit, ensuring exponential growth of the deposit. Such a deposit will bring maximum profit, but it can only be withdrawn at the end of its term.</p>
      </div>
    </ModalGradient>
  )
}

export default ModalGradientCompounding