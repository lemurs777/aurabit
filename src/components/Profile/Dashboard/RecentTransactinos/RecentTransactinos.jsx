import React from 'react'
import styles from './RecentTransactinos.module.scss'
import clsx from 'clsx'
const RecentTransactinos = () => {
  const transactionList = [
    {
      id: 1,
      name: 'Deposit',
      time: '2023-09-06 23:25:26',
      sum: '0.007755411 BTC',
      status: 'Completed',
      spending: false
    },
    {
      id: 2,
      name: 'Withdraw',
      time: '2023-09-06 23:25:26',
      sum: '-20 USDT',
      status: 'In progress',
      spending: true
    },
    {
      id: 3,
      name: 'Deposit',
      time: '2023-09-06 23:25:26',
      sum: '0.00055984 LTC',
      status: 'Completed',
      spending: false
    },
    {
      id: 4,
      name: 'Withdraw',
      time: '2023-09-06 23:25:26',
      sum: '-10 USDT',
      status: 'In progress',
      spending: true
    },
    {
      id: 5,
      name: 'Deposit',
      time: '2023-09-06 23:25:26',
      sum: '+200 USDT',
      status: 'Completed',
      spending: false
    }
  ]
  return (
    <div className={styles.transaction}>
      <h6 className={styles.transaction__title}>Recent transactinos</h6>
      <div className={styles.transaction__body}>
        <ul className={styles.transaction__list}>

          {transactionList.map(transaction => (
            <li className={styles.item} key={transaction.id}>
              <div className={styles.item__name}>{transaction.name}</div>
              <div className={clsx(styles.item__sum, transaction.spending ? styles.item__spending : null)}>{transaction.sum}</div>
              <div className={styles.item__time}>{transaction.time}</div>
              <div className={styles.item__status}>{transaction.status}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default RecentTransactinos