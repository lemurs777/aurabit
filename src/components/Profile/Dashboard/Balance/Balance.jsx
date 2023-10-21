import React, { useState } from 'react'
import styles from './Balance.module.scss'
import balanceBgImg from '../../../../assets/images/page/profile/aura.svg'
import DashboardButton from '../../../Buttons/DashboardButton'

import reinvestImg from '../../../../assets/images/page/profile/dashboard-btns/reinvest.svg'
import swapImg from '../../../../assets/images/page/profile/dashboard-btns/swap.svg'
import { ModalSwapAura, ModalReinvestAura } from '../../../Modals'

const Balance = () => {
  const [auraSwapModal, setAuraSwapModal] = useState(false)
  const [auraReinvestModal, setAuraReinvestModal] = useState(false)
  const list = [
    {
      name: 'Referral bonus',
      date: '2023-09-06 23:25:26',
      sum: '+178 AURA'
    },
    {
      name: 'Turnover bonus',
      date: '2023-09-06 23:25:26',
      sum: '+100 AURA'
    },
    {
      name: 'Bonus for review',
      date: '2023-09-06 23:25:26',
      sum: '+15 AURA'
    },
    {
      name: 'Promotion bonus',
      date: '2023-09-06 23:25:26',
      sum: '+200 AURA'
    }
  ]


  return (
    <>
      <div className={styles.balance} style={{ backgroundImage: `url(${balanceBgImg})` }}>
        <h3 className={styles.balance__title}>Aura balance</h3>
        <div className={styles.balance__item}>
          145
          <span>AURA</span>
        </div>
        {list ? (
          <ul className={styles.balance__list}>
            {list.map((item, index) => (
              <li key={index} className={styles.item}>
                <div className={styles.item__title}>{item.name}</div>
                <div className={styles.item__row}>
                  <div className={styles.item__date}>{item.date}</div>
                  <div className={styles.item__sum}>{item.sum}</div>
                </div>
              </li>
            ))}
          </ul>) :
          <div className={styles.balance__empty}>No transactions yet</div>
        }
        <div className={styles.balance__text}>
          <p>Aura is Aurabit's internal currency for receiving bonuses. Aura 1A course = 1$</p>
        </div>
        <div className={styles.balance__btns}>
          <DashboardButton className={styles.balance__btn} handleClick={() => setAuraReinvestModal(true)} classNameIcon={styles.balance__btnIcon} text={'Reinvest'} icon={reinvestImg} />
          <DashboardButton className={styles.balance__btn} handleClick={() => setAuraSwapModal(true)} classNameIcon={styles.balance__btnIcon} text={'Swap'} icon={swapImg} />
        </div>
      </div>
      <ModalSwapAura isOpen={auraSwapModal} onClose={() => setAuraSwapModal(false)} />
      <ModalReinvestAura isOpen={auraReinvestModal} onClose={() => setAuraReinvestModal(false)} />

    </>
  )
}

export default Balance