import React from 'react'
import styles from './Wallets.module.scss'
import Wallet from './Wallet'

import auraImg from '../../../assets/images/wallets/aura.svg'
import btcImg from '../../../assets/images/wallets/btc.svg'
import ethImg from '../../../assets/images/wallets/eth.svg'
import usdtImg from '../../../assets/images/wallets/usdt.svg'
import xrpImg from '../../../assets/images/wallets/xrp.svg'
import trxImg from '../../../assets/images/wallets/trx.svg'
import bnbImg from '../../../assets/images/wallets/bnb.svg'

const Wallets = () => {
  const walletsList = [
    {
      title: 'AURA',
      name: 'Aurabit',
      sum: '$200',
      transfer: '200',
      icon: auraImg
    },
    {
      title: 'BTC',
      name: 'Bitcoin',
      sum: '$154',
      transfer: '0.00012563',
      icon: btcImg
    },
    {
      title: 'ETH',
      name: 'Ethereum',
      sum: '$154',
      transfer: '0.00012563',
      icon: ethImg
    },
    {
      title: 'USDT',
      name: 'Tether',
      sum: '$154',
      transfer: '0.00012563',
      icon: usdtImg
    },
    {
      title: 'XRP',
      name: 'Ripple',
      sum: '$154',
      transfer: '0.00012563',
      icon: xrpImg
    },
    {
      title: 'TRX',
      name: 'Tron',
      sum: '$154',
      transfer: '0.00012563',
      icon: trxImg
    },
    {
      title: 'BNB',
      name: 'Bnb',
      sum: '$154',
      transfer: '0.00012563',
      icon: bnbImg
    },
  ]
  return (
    <div className={styles.wallets}>
      {walletsList.map(wallet => (
        <Wallet key={wallet.title} data={wallet} />
      ))}
    </div>
  )
}

export default Wallets