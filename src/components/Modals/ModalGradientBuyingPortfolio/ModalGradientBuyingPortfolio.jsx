import React from 'react'
import styles from './ModalGradientBuyingPortfolio.module.scss'
import clsx from 'clsx'
import ModalGradient from '../ModalGradient/ModalGradient'
import ModalGradientButton from '../../UI/Buttons/ModalGradientButton'
import Select, { components } from 'react-select'
import { ReactComponent as SelectArrowIcon } from '../../../assets/images/svg/select-arrow.svg'
const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <SelectArrowIcon />
    </components.DropdownIndicator>
  )
}
const ModalGradientBuyingPortfolio = ({ isOpen, onClose }) => {
  const options = [
    {
      value: 'Bitcoin BTC', label: 'Bitcoin BTC'
    },
    {
      value: 'Litecoin LTC', label: 'Litecoin LTC'
    },
    {
      value: 'Ethereum TRC20', label: 'Ethereum TRC20'
    },
    {
      value: 'Cardano ADA', label: 'Cardano ADA'
    },
    {
      value: 'Tron TRX', label: 'Tron TRX'
    },
  ]
  return (

    <ModalGradient title={'Buying a portfolio'} isOpen={isOpen} onClose={onClose} className={styles.modal}>
      <div className={styles.modal__select}>
        <label>Payment system</label>
        <Select options={options} classNamePrefix={'modalSelectGradient'} defaultValue={options[0]} components={{ DropdownIndicator }} />
      </div>
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

export default ModalGradientBuyingPortfolio