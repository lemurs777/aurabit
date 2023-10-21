import React from 'react'
import styles from './ModalWithdraw.module.scss'
import Modal from '../Modal/Modal'
import btcImg from '../../../assets/images/wallets/btc.svg'
import ButtonForm from '../../Buttons/ButtonForm'
import clsx from 'clsx'
import Select, { components } from 'react-select'
import { ReactComponent as SelectArrowIcon } from '../../../assets/images/svg/select-arrow.svg'
const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <SelectArrowIcon />
    </components.DropdownIndicator>
  )
}
const ModalWithdraw = ({ isOpen, onClose }) => {
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
    <Modal title={'Withdraw'} isOpen={isOpen} onClose={onClose} className={styles.modal}>
      <div className={styles.modal__inner}>
        <div className={styles.modal__top}>
          <div className={styles.modal__icon}><img src={btcImg} alt="wallet" /></div>
          <div className={styles.modal__name}>Bitcoin BTC</div>
        </div>
        <div className={styles.modal__body}>
          <div className={styles.modal__select}>
            <label>Payment system</label>
            <Select options={options} classNamePrefix={'modalSelect'} defaultValue={options[0]} components={{ DropdownIndicator }} />
          </div>
          <div className={styles.modal__exchange}>
            <div className={styles.item}>
              <label>Amount</label>
              <div className={styles.item__input}>
                <input type="number" placeholder='$0.00' />
                <span>USD</span>
              </div>
            </div>
            <span>=</span>
            <div className={styles.item}>
              <label>Max</label>
              <div className={styles.item__input}>
                <input type="number" placeholder='0' />
                <span>BTC</span>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <label>To</label>
            <div className={styles.item__input}>
              <input type="text" placeholder='Provide wallet address' />
            </div>
          </div>
          <div className={styles.modal__btns}>
            <ButtonForm title={'Save wallet'} className={styles.modal__btn} />
            <ButtonForm title={'Send payment'} className={styles.modal__btn} />
            <ButtonForm title={'Saved'} className={clsx(styles.modal__btn, styles.modal__btnIcon)} />
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ModalWithdraw