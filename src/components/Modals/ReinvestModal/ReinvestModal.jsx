import React, { useState } from 'react'
import styles from './ReinvestModal.module.scss'
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
const ReinvestModal = ({ isOpen, onClose }) => {
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
  const portfolioList = [
    {
      currency: '0.134 BTC',
      date: 'Activated : 01 January 2023',
    },
    {
      currency: '0.0052 BTC',
      date: 'Activated : 10 February 2023',
    },
  ]
  const [activePortfolio, setActivePortfolio] = useState(0)
  return (
    <Modal title={'Reinvest'} isOpen={isOpen} onClose={onClose} className={styles.modal}>
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

          <div className={styles.modal__portfolio}>
            <label>Choose portfolio</label>
            <div className={styles.modal__portfolioItems}>

              {portfolioList.map((portfolio, index) => (
                <button type='button' key={index} className={clsx(styles.portfolio, activePortfolio === index ? styles.portfolio__active : null)}
                  onClick={() => { setActivePortfolio(index) }}>
                  <div className={styles.portfolio__currency}>{portfolio.currency}</div>
                  <div className={styles.portfolio__date}>{portfolio.date}</div>
                </button>
              ))}
            </div>
          </div>
          <div className={styles.modal__btns}>
            <ButtonForm title={'Top up portfolio'} className={styles.modal__btn} />
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ReinvestModal