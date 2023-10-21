import React from 'react'
import styles from './ModalAddWallet.module.scss'
import Modal from '../Modal'
import btcImg from '../../../assets/images/wallets/btc.svg'
import ethImg from '../../../assets/images/wallets/eth.svg'
import usdtImg from '../../../assets/images/wallets/usdt.svg'
import xrpImg from '../../../assets/images/wallets/xrp.svg'
import trxImg from '../../../assets/images/wallets/trx.svg'
import bnbImg from '../../../assets/images/wallets/bnb.svg'
import algoImg from '../../../assets/images/wallets/algo.svg'
import ltcImg from '../../../assets/images/wallets/ltc.svg'
import adaImg from '../../../assets/images/wallets/ada.svg'
import dotImg from '../../../assets/images/wallets/dot.svg'
import busdImg from '../../../assets/images/wallets/busd.svg'
import avaxImg from '../../../assets/images/wallets/avax.svg'
const ModalAddWallet = ({ isOpen, onClose }) => {
  const walletList = [
    {
      icon: btcImg,
      title: 'BTC',
      name: 'Bitcoin'
    },
    {
      icon: ethImg,
      title: 'ETH',
      name: 'Ethereum'
    },
    {
      icon: usdtImg,
      title: 'USDT',
      name: 'Tether'
    },
    {
      icon: xrpImg,
      title: 'XRP',
      name: 'Ripple'
    },
    {
      icon: trxImg,
      title: 'TRX',
      name: 'Tron'
    },
    {
      icon: bnbImg,
      title: 'BNB',
      name: 'Bnb'
    },
    {
      icon: algoImg,
      title: 'ALGO',
      name: 'Algorand'
    },
    {
      icon: ltcImg,
      title: 'LTC',
      name: 'Litecoin'
    },
    {
      icon: adaImg,
      title: 'ADA',
      name: 'Cardano'
    },
    {
      icon: dotImg,
      title: 'DOT',
      name: 'Polcadot'
    },
    {
      icon: busdImg,
      title: 'BUSD',
      name: 'Binance USD'
    },
    {
      icon: avaxImg,
      title: 'AVAX',
      name: 'Avalanche'
    },
  ]
  return (
    <Modal title={'Select a wallet to add'} isOpen={isOpen} onClose={onClose} className={styles.modal}>
      <ul className={styles.modal__list}>
        {walletList.map(wallet => (
          <li key={wallet.title} className={styles.wallet}>
            <div className={styles.wallet__content}>
              <div className={styles.wallet__icon}><img src={wallet.icon} alt={wallet.title} /></div>
              <div className={styles.wallet__info}>
                <h4 className={styles.wallet__title}>{wallet.title}</h4>
                <span>{wallet.name}</span>
              </div>
            </div>
            <button type="button" className={styles.wallet__add}>Add</button>
          </li>
        ))}
      </ul>
    </Modal>
  )
}

export default ModalAddWallet