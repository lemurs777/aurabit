import React from 'react'
import styles from './TrialDeposit.module.scss'
import trialImg from '../../assets/images/page/investment/trial.svg'
import ButtonColor from '../Buttons/ButtonColor'
import clsx from 'clsx'
const TrialDeposit = ({ className, classNameBlock }) => {
  const list = [
    '3 days',
    'Support 24/7',
    'Daily accruals',
    'Instant Payouts',
    'Deposit is returned ',
  ]
  return (
    <div className={clsx(className, styles.trial)}>
      <div className={styles.trial__inner}>
        <div className={styles.trial__row}>
          <div className={styles.trial__content}>
            <h3 className={styles.trial__title}>Trial deposit</h3>
            <div className={styles.trial__text}>
              <p>Want to quickly check how Aurabit works?</p>
              <p>
                You can test accruals, the speed of payment and withdrawal of
                funds using a test deposit.
              </p>
            </div>
          </div>
          <div className={clsx(classNameBlock, styles.trialBlock)}>
            <div className={styles.trialBlock__icon}>
              <img src={trialImg} alt='trial deposit' />
            </div>
            <div className={styles.trialBlock__col}>
              <div className={styles.trialBlock__percent}>
                0.5% <span>daily</span>
              </div>
              <div className={styles.trialBlock__price}>
                <span>$</span>10 - <span>$</span>100
              </div>
              <div className="desktop">
                <ButtonColor className={styles.trialBlock__btn}>get started</ButtonColor>
              </div>
            </div>
            <div className={styles.trialBlock__col}>
              <ul className={styles.trialBlock__list}>
                {list.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mobile">
                <ButtonColor className={styles.trialBlock__btn}>get started</ButtonColor>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default TrialDeposit
