import React, { useState } from 'react'
import styles from './WalletBalance.module.scss'
import Button from '../../Buttons/Button'
import depositImg from '../../../assets/images/svg/deposit.svg'
import withdrawImg from '../../../assets/images/svg/withdraw.svg'
import swapImg from '../../../assets/images/svg/swap.svg'
import reinvestImg from '../../../assets/images/svg/reinvest.svg'
import { ModalWithdraw, ModalReinvest, ModalSwap, ModalReplenishment } from '../../Modals'

const WalletBalance = () => {
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
  return (<>
    <div className={styles.balance}>
      <div className={styles.balance__head}>
        <div className={styles.balance__row}>
          <div className={styles.balance__col}>
            <div className={styles.balance__item}>BTC Balance</div>
            <div className={styles.balance__bonus}>+0.9% today</div>
            <div className={styles.balance__total}>$450</div>
            <div className={styles.balance__item}>0.00045894 BTC</div>
          </div>
          <button type='button' className={styles.balance__remove}>Remove</button>
        </div>
      </div>
      <div className={styles.balance__btns}>
        {btns.map(btn => (
          <Button key={btn.title} title={btn.title} image={btn.image} handleClick={() => { if (btn.modal) btn.modal(true) }} />
        ))}
      </div>
    </div>
    < ModalWithdraw isOpen={modalWithdraw} onClose={() => setModalWithdraw(false)} />
    < ModalReinvest isOpen={modalReinvest} onClose={() => setModalReinvest(false)} />
    < ModalSwap isOpen={modalSwap} onClose={() => setModalSwap(false)} />
    < ModalReplenishment isOpen={modalReplenishment} onClose={() => setModalReplenishment(false)} />
  </>
  )
}

export default WalletBalance