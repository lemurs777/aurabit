import React, { useState } from 'react'
import styles from './ModalReplenishment.module.scss'
import Modal from '../Modal/Modal'
import btcImg from '../../../assets/images/wallets/btc.svg'
import ButtonForm from '../../Buttons/ButtonForm'
import clsx from 'clsx'
import Select, { components } from 'react-select'
import { ReactComponent as SelectArrowIcon } from '../../../assets/images/svg/select-arrow.svg'
import qrImg from '../../../assets/images/qr.jpg'
const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <SelectArrowIcon />
    </components.DropdownIndicator>
  )
}
const ModalReplenishment = ({ isOpen, onClose }) => {
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
    <Modal title={'Replenishment'} isOpen={isOpen} onClose={onClose} className={styles.modal}>
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
        </div>
        <div className={styles.modal__qr}>
          <div className={styles.qr}>
            <div className={styles.qr__text}>Scan or copy</div>
            <div className={styles.qr__address}>
              <label>Address</label>
              <div className={styles.qr__inner}>
                <span>bc1q2pv7wnt3dqv2yj3s7kehges77h3z57ph7d6</span>
                <button type='button' className={styles.qr__btn}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3.36 1.32C3.36 0.590984 3.95098 0 4.68 0H16.68C17.409 0 18 0.590984 18 1.32V13.32C18 14.049 17.409 14.64 16.68 14.64H4.68C3.95098 14.64 3.36 14.049 3.36 13.32V1.32Z" fill="#AAA3FF" fill-opacity="0.84" />
                  <path d="M0 4.68C0 3.95098 0.590984 3.36 1.32 3.36H13.32C14.049 3.36 14.64 3.95098 14.64 4.68V16.68C14.64 17.409 14.049 18 13.32 18H1.32C0.590984 18 0 17.409 0 16.68V4.68Z" fill="#AAA3FF" fill-opacity="0.84" />
                </svg></button>
              </div>
            </div>
            <div className={styles.qr__img}><img src={qrImg} alt="" /></div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ModalReplenishment