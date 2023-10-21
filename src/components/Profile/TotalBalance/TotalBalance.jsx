import React, { useState } from 'react'
import styles from './TotalBalance.module.scss'
import Button from '../../Buttons/Button'
import depositImg from '../../../assets/images/mobile/deposit.svg'
import withdrawImg from '../../../assets/images/mobile/with.svg'
import swapImg from '../../../assets/images/mobile/swap.svg'
import reinvestImg from '../../../assets/images/mobile/reinv.svg'

import { ModalWithdraw, ModalReinvest, ModalSwap, ModalReplenishment } from '../../Modals'
const TotalBalance = () => {
  const [modalWithdraw, setModalWithdraw] = useState(false)
  const [modalReinvest, setModalReinvest] = useState(false)
  const [modalSwap, setModalSwap] = useState(false)
  const [modalReplenishment, setModalReplenishment] = useState(false)
  const btns = [
    {
      title: 'Deposit',
      image: depositImg,
      modal: setModalReplenishment

    },
    {
      title: 'Withdraw',
      image: withdrawImg,
      modal: setModalWithdraw
    },
    {
      title: 'Swap',
      image: swapImg,
      modal: setModalSwap
    },
    {
      title: 'Reinvest',
      image: reinvestImg,
      modal: setModalReinvest
    },
  ]
  return (
    <>
      <div className="desktop">
        <div className={styles.balance}>
          <div className={styles.balance__total}>$900</div>
          <div className={styles.balance__bonus}>+0.9%</div>
          <div className={styles.balance__name}>Total balance</div>
        </div>
      </div>
      <div className="mobile">
        <div className={styles.balance}>
          <div className={styles.balance__total}>$900</div>
          <div className={styles.balance__bonus}>+0.9% (24h)</div>
          <div className={styles.balance__btns}>
            {btns.map(btn => (
              <button key={btn.title} className={styles.btn} onClick={() => { if (btn.modal) btn.modal(true) }}>
                <div className={styles.btn__img}>
                  <img src={btn.image} alt="" />
                </div>
                <span>
                  {btn.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
      < ModalWithdraw isOpen={modalWithdraw} onClose={() => setModalWithdraw(false)} />
      < ModalReinvest isOpen={modalReinvest} onClose={() => setModalReinvest(false)} />
      < ModalSwap isOpen={modalSwap} onClose={() => setModalSwap(false)} />
      < ModalReplenishment isOpen={modalReplenishment} onClose={() => setModalReplenishment(false)} />
    </>
  )
}

export default TotalBalance