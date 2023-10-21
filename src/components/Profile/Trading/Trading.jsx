import React from 'react'
import styles from './Trading.module.scss'
import excFomImg from '../../../assets/images/wallets/item.png'
import excToImg from '../../../assets/images/wallets/item2.png'
import clsx from 'clsx'
const Trading = () => {
  const tableTitles = [
    'exchange', 'Currency', 'Quantity (GBP)', 'Result (%)', 'Time'
  ]
  const tableItems = [
    {
      excFromIcon: excFomImg,
      excToIcon: excToImg,
      currency: 'USDC',
      quantity: '£45,420',
      result: '+0.15%',
      time: '10:25:17'
    },
    {
      excFromIcon: excFomImg,
      excToIcon: excToImg,
      currency: 'USDC',
      quantity: '£45,420',
      result: '+0.15%',
      time: '10:25:17'
    },
    {
      excFromIcon: excFomImg,
      excToIcon: excToImg,
      currency: 'USDC',
      quantity: '£45,420',
      result: '+0.15%',
      time: '10:25:17'
    },
    {
      excFromIcon: excFomImg,
      excToIcon: excToImg,
      currency: 'USDC',
      quantity: '£45,420',
      result: '+0.15%',
      time: '10:25:17'
    },
    {
      excFromIcon: excFomImg,
      excToIcon: excToImg,
      currency: 'USDC',
      quantity: '£45,420',
      result: '+0.15%',
      time: '10:25:17'
    },
    {
      excFromIcon: excFomImg,
      excToIcon: excToImg,
      currency: 'USDC',
      quantity: '£45,420',
      result: '+0.15%',
      time: '10:25:17'
    },
    {
      excFromIcon: excFomImg,
      excToIcon: excToImg,
      currency: 'USDC',
      quantity: '£45,420',
      result: '+0.15%',
      time: '10:25:17'
    },
    {
      excFromIcon: excFomImg,
      excToIcon: excToImg,
      currency: 'USDC',
      quantity: '£45,420',
      result: '+0.15%',
      time: '10:25:17'
    }
  ]
  return (
    <div className={clsx(styles.trading, 'frame')}>
      <div className={styles.trading__inner}>
        <h6 className={styles.trading__title}>Live trading</h6>
        <div className={styles.trading__table}>
          <table>
            <thead>
              <tr>
                {tableTitles.map(item => (
                  <th>
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableItems.map(item => (
                <tr>
                  <td className={styles.itemIcons}>
                    <img src={item.excFromIcon} alt={item.currency} />
                    /
                    <img src={item.excToIcon} alt={item.currency} />
                  </td>
                  <td>
                    {item.currency}
                  </td>
                  <td>
                    {item.quantity}
                  </td>
                  <td className='success'>{item.result}</td>
                  <td>{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Trading