import React from 'react'
import styles from './TabsWallets.module.scss'
import clsx from 'clsx'
import Input from '../../UI/Forms/Input'
import ButtonForm from '../../Buttons/ButtonForm'
const TabWallets = () => {
  const walletInputs = [
    'Bitcoin BTC', 'Ethereum', 'Tether USDT TRC20', 'Algorand ALGO', 'Cardano ADA', 'Polcadot DOT'
  ]
  return (
    <div className={clsx(styles.wallet, 'frame')}>
      <h3 className={styles.wallet__title}>Wallets</h3>
      <form className={styles.wallet__form} action="#">
        {walletInputs.map(input => (
          <Input key={input} label={input} className={styles.wallet__input} />
        ))}
        <div className="desktop">
          <button type="submit" className={styles.wallet__submit}>Save</button>
        </div>
        <div className="mobile">
          <ButtonForm className={styles.identity__btn} title={'Send'} />
        </div>
      </form>
    </div>
  )
}

export default TabWallets