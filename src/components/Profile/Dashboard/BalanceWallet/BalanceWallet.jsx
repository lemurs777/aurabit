import React, { useState } from 'react'
import styles from './BalanceWallet.module.scss'
import DashboardButton from '../../../Buttons/DashboardButton'
import walletImg from '../../../../assets/images/page/profile/dashboard-btns/wallet.svg'
import addImg from '../../../../assets/images/page/profile/dashboard-btns/add.svg'
import depositImg from '../../../../assets/images/page/profile/dashboard-btns/deposit.svg'
import withdrawImg from '../../../../assets/images/page/profile/dashboard-btns/withdraw.svg'
import reinvestImg from '../../../../assets/images/page/profile/dashboard-btns/reinvest.svg'
import swapImg from '../../../../assets/images/page/profile/dashboard-btns/swap.svg'
import btcImg from '../../../../assets/images/wallets/btc.svg'
import ethImg from '../../../../assets/images/wallets/eth.svg'
import usdtImg from '../../../../assets/images/wallets/usdt.svg'
import xrpImg from '../../../../assets/images/wallets/xrp.svg'
import trxImg from '../../../../assets/images/wallets/trx.svg'
import clsx from 'clsx'
import ModalAddWallet from '../../../Modals/ModalAddWallet'
const BalanceWallet = () => {
  const [addWalletModal, setAddWalletModal] = useState(false)
  const wallets = [
    {
      icon: btcImg,
      title: 'BTC',
      subtitle: 'Bitcoin',
      sum: '$154',
      current: '0.00012563'
    },
    {
      icon: ethImg,
      title: 'ETH',
      subtitle: 'Ethereum',
      sum: '$154',
      current: '0.00012563'
    },
    {
      icon: usdtImg,
      title: 'USDT',
      subtitle: 'Tether',
      sum: '$154',
      current: '0.00012563'
    },
    {
      icon: xrpImg,
      title: 'XRP',
      subtitle: 'Ripple',
      sum: '$154',
      current: '0.00012563'
    },
    {
      icon: trxImg,
      title: 'TRX',
      subtitle: 'Tron',
      sum: '$154',
      current: '0.00012563'
    }
  ]
  return (
    <>

      <div className={styles.balance}>
        <div className={styles.balance__inner}>
          <div className={styles.balance__head}>
            <div className={styles.balance__headLeft}>
              <h3 className={styles.balance__title}>Wallet balance</h3>
              <div className={styles.balance__currency}>
                $450 <span>+0.9% today</span>
              </div>
            </div>
            <DashboardButton className={styles.balance__btn} icon={walletImg} text={'To wallets'} />
          </div>
          <div className={styles.balance__wallets}>
            {wallets.map(wallet => (
              <div className={styles.wallet}>
                <div className={styles.wallet__icon}><img src={wallet.icon} alt={wallet.title} /></div>
                <div className={styles.wallet__info}>
                  <h6 className={styles.wallet__title}>{wallet.title}</h6>
                  <span>{wallet.subtitle}</span>
                </div>
                <div className={styles.wallet__currency}>
                  <div className={styles.wallet__sum}>{wallet.sum}</div>
                  <div className={styles.wallet__current}>{wallet.current}</div>
                </div>
              </div>
            ))}
            <DashboardButton handleClick={() => setAddWalletModal(true)} className={clsx(styles.balance__btn, styles.wallet__add)} icon={addImg} text={'Add wallet'} />
          </div>
          <div className={styles.balance__btns}>
            <DashboardButton className={styles.balance__btn} icon={depositImg} text={'Deposit'} />
            <DashboardButton className={styles.balance__btn} icon={withdrawImg} text={'Withdraw'} />
            <DashboardButton className={styles.balance__btn} icon={reinvestImg} text={'Reinvest'} />
            <DashboardButton className={styles.balance__btn} icon={swapImg} text={'Swap'} />
          </div>
        </div>
      </div>
      <ModalAddWallet isOpen={addWalletModal} onClose={() => setAddWalletModal(false)} />

    </>
  )
}

export default BalanceWallet