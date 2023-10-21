import React, { useState } from 'react'

import styles from './Calculator.module.scss'
import clsx from 'clsx'
import Select, { components } from 'react-select'
import { ReactComponent as SelectArrowIcon } from '../../assets/images/svg/select-arrow.svg'
import ButtonForm from '../Buttons/ButtonForm'
const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <SelectArrowIcon />
    </components.DropdownIndicator>
  )
}

const Calculator = ({ className, classNameContent }) => {
  const [value, setValue] = useState(0)
  const [amount, setAmount] = useState('$ 450')

  const amountList = [
    { title: 'Investmens amount', amount: '0.00223344', wallet: 'BTC' },
    {
      title: 'Daily',
      amount: '0.00000548',
      wallet: 'btc',
      cost: '$ 4.5',
      class: 'daily'
    },
    {
      title: 'Weekly',
      amount: '0.00000548',
      wallet: 'btc',
      cost: '$ 35',
    },
    {
      title: 'Monthly',
      amount: '0.00000548',
      wallet: 'btc',
      cost: '$ 120',
    },
    {
      title: 'Total profit',
      amount: '0.00000548',
      wallet: 'btc',
      cost: '$ 230',
      class: 'profit'
    },
  ]
  const options = [
    { value: 'Bitcoin USD', label: 'Bitcoin USD' },
    { value: 'Bitcoin USA', label: 'Bitcoin USA' },
    { value: 'Bitcoin USB', label: 'Bitcoin USB' },
    { value: 'Bitcoin USC', label: 'Bitcoin USC' },
    { value: 'Bitcoin USV', label: 'Bitcoin USV' },
    { value: 'Bitcoin USW', label: 'Bitcoin USW' },
  ]
  return (
    <div className={clsx(className, styles.calculator)}>
      <div className={styles.calculator__inner}>
        <div className={clsx(classNameContent, styles.calculator__content)}>
          <div className={clsx(styles.calculator__col, styles.profit)}>
            <h6 className={styles.profit__title}>Profit calculator</h6>
            <div className={styles.profit__row}>
              <div className={styles.profitItem}>
                <div className={styles.profitItem__head}>
                  <h6 className={styles.profitItem__title}>Currency</h6>
                </div>
                <div className={clsx(styles.profitItem__blockSelect, styles.profitItem__block)}>
                  <Select
                    components={{ DropdownIndicator }}
                    classNamePrefix='walletSelect'
                    options={options}
                    defaultValue={options[0]}
                  />
                </div>
              </div>
              <div className={clsx(styles.profitItemDeposit, styles.profitItem)}>
                <div className={styles.profitItem__head}>
                  <h6 className={styles.profitItem__title}>Deposit term</h6>
                </div>
                <div className={styles.profitItem__block}>
                  <label className={styles.radio}>
                    <input
                      defaultChecked={true}
                      className={styles.radio__input}
                      type='radio'
                      name='term'
                    />
                    <span className={styles.radio__custom}></span>
                    Short
                  </label>
                  <label className={styles.radio}>
                    <input
                      className={styles.radio__input}
                      type='radio'
                      name='term'
                    />
                    <span className={styles.radio__custom}></span>
                    Long
                  </label>
                </div>
              </div>
              <div className={styles.profitItem}>
                <div className={styles.profitItem__head}>
                  <h6 className={styles.profitItem__title}>Amount (USD)</h6>
                </div>
                <input
                  className={styles.amountInput}
                  type='text'
                  value={amount}
                  onChange={e => setAmount(e.target.value)}
                />
              </div>
              <div className={styles.profitItem}>
                <div className={styles.profitItem__head}>
                  <h6 className={styles.profitItem__title}>Compounding</h6>
                </div>
                <div className={styles.profitItem__block}>
                  <label
                    className={clsx(styles.radio, styles.radioCompounding)}
                  >
                    <input
                      defaultChecked={true}
                      className={styles.radio__input}
                      type='radio'
                      name='compounding'
                    />
                    <span className={styles.radio__custom}></span>
                    Off
                  </label>
                  <label
                    className={clsx(styles.radio, styles.radioCompounding)}
                  >
                    <input
                      className={styles.radio__input}
                      type='radio'
                      name='compounding'
                    />
                    <span className={styles.radio__custom}></span>
                    50/50
                  </label>
                  <label
                    className={clsx(styles.radio, styles.radioCompounding)}
                  >
                    <input
                      className={styles.radio__input}
                      type='radio'
                      name='compounding'
                    />
                    <span className={styles.radio__custom}></span>
                    100%
                  </label>
                </div>
              </div>
            </div>
            <div className={styles.inputRange}>
              <div className={styles.inputRange__head}>
                <div className={styles.inputRange__name}>Deposit term</div>
                <div className={styles.inputRange__name}>120 days</div>
              </div>
              <input type='range' />
            </div>
          </div>
          <div className={clsx(styles.calculator__col, styles.amount)}>
            <ul className={styles.amount__list}>
              {amountList.map(amount => (
                <li className={clsx(styles.amountItem, amount.class ? amount.class : null)} key={amount.title}>
                  <h6 className={styles.amountItem__title}>{amount.title}</h6>
                  <div className={styles.amountItem__price}>
                    {amount.amount} <span>{amount.wallet}</span>
                  </div>
                  {amount.cost && (
                    <div className={styles.amountItem__cost}>
                      {amount.cost}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div className={styles.amount__bottom}>
              <ButtonForm title={'GET STARTED'} className={styles.amount__btn} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator
