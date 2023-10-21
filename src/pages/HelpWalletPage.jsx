import React from 'react'
import HelpSearch from '../components/HelpSearch'
import HelpBlockText from '../components/HelpBlockText'
const HelpWalletPage = () => {
  const text = [
    {
      title: 'Wallets',
      text: `<p>Wallets are a section on the platform where your cryptocurrency is stored. In order to open a deposit, you first need to replenish your wallet. Your profit from deposits is credited to the balance of the wallet, which can be stored, withdrawn, reinvested or exchanged. <br/>
Make a choice in the currency menu to view the history of transactions, charges
</p>
      <p>In order to replenish the balance, use the widget on your personal account or go to the "wallets" section. Select the currency you need and click "Deposit". After that, you will be provided with a personal address to replenish the balance. Send money to the specified details and wait for the automatic transfer of funds.
</p>
      <p>To withdraw funds, you also need to select a currency, enter the amount and address. Funds are sent automatically. The duration of transaction processing depends on the workload
blockchain networks.
</p>
      <p>Currency exchange <br/>
This option is available only to verified users. The exchange commission is 1.5%. The daily number of exchange operations for one user is 5.</p>
      `
    }
  ]
  return (
    <div className='help__grid'>
      <HelpSearch title={'Knowledge base'} text={'Find quickly or explore sections'} />
      {text.map(text => (
        <HelpBlockText key={text.title} data={text} />
      ))}
    </div>
  )
}

export default HelpWalletPage