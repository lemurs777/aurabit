import React from 'react'
import { AddWallet, TotalBalance, WalletBalance, Wallets, WalletPrice, History } from '../components'
import Search from '../components/Search'

const WalletsProfilePage = () => {
  return (
    <main className="main main--profile">
      <div className="container">
        <div className="walletProfile">
          <aside className="walletProfile__aside">
            <TotalBalance />
            <Wallets />
            <AddWallet />
          </aside>
          <div className="walletProfile__page">
            <div className="walletProfile__row">
              <div className="walletProfile__balance">
                <div className="desktop">
                  <WalletBalance />
                </div>
              </div>
              <WalletPrice />
            </div>
            <Search />
            <History />

          </div >
        </div>
      </div>
    </main>
  )
}

export default WalletsProfilePage