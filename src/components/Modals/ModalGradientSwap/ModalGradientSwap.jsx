import React from 'react'
import styles from './ModalGradientSwap.module.scss'
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
const ModalGradientSwap = ({ isOpen, onClose }) => {
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

    <ModalGradient title={'Swap AURA to wallet'} isOpen={isOpen} onClose={onClose} className={styles.modal}>
      <div className={styles.modal__select}>
        <label>Wallet</label>
        <Select options={options} classNamePrefix={'modalSelectGradient'} defaultValue={options[0]} components={{ DropdownIndicator }} />
      </div>
      <div className={styles.item}>
        <label>Amount AURA</label>
        <div className={styles.item__input}>
          <input type="number" placeholder='145' />
        </div>
      </div>


      <div className={styles.modal__bottom}>
        <ModalGradientButton title={'Cancel'} />
        <ModalGradientButton className={'reverseGradient'} title={'Confirm'} />
      </div>
    </ModalGradient>
  )
}

export default ModalGradientSwap