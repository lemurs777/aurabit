import React, { useState } from 'react'
import styles from './ModalReinvestAura.module.scss'
import Modal from '../Modal/Modal'
import auraImg from '../../../assets/images/wallets/aura.svg'
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
const ModalReinvestAura = ({ isOpen, onClose }) => {
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
      id: '#548341'
    },
    {
      currency: '0.0052 BTC',
      date: 'Activated : 10 February 2023',
      id: '#548341'
    },
  ]
  const [activePortfolio, setActivePortfolio] = useState(0)
  return (
    <Modal title={'Swap to wallet'} isOpen={isOpen} onClose={onClose} className={styles.modal}>
      <div className={styles.modal__inner}>
        <div className={styles.modal__top}>
          <div className={styles.modal__icon}><img src={auraImg} alt="wallet" /></div>
          <div className={styles.modal__name}>AURA</div>
        </div>
        <div className={styles.modal__body}>

          <div className={styles.item}>
            <div className={styles.item__labels}>
              <label>Amount</label>
              <label>Max</label>
            </div>
            <div className={styles.item__input}>
              <input type="number" placeholder='0.00' />
              <span>AURA</span>
            </div>
          </div>

          <div className={styles.modal__portfolio}>
            <label>Choose portfolio</label>
            <div className={styles.modal__portfolioItems}>

              {portfolioList.map((portfolio, index) => (
                <button type='button' key={index} className={clsx(styles.portfolio, activePortfolio === index ? styles.portfolio__active : null)}
                  onClick={() => { setActivePortfolio(index) }}>
                  <div className={styles.portfolio__currency}>{portfolio.currency} <span>{portfolio.id}</span></div>
                  <div className={styles.portfolio__date}>{portfolio.date}</div>
                </button>
              ))}
            </div>
          </div>
          <div className={styles.modal__descr}>
            <p>
              Rate: 1 AURA = 1USDT
            </p>
            <p>
              Conversion to deposit currency will occur automatically
            </p>
          </div>
          <div className={styles.modal__btns}>
            <ButtonForm title={'Top up portfolio'} className={styles.modal__btn} />
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ModalReinvestAura