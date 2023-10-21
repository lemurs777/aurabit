import React from 'react'
import styles from './History.module.scss'
import clsx from 'clsx'
import HistoryItem from './HistoryItem'
import receiveImg from '../../../assets/images/mobile/receive.svg'
import sentImg from '../../../assets/images/mobile/sent.svg'
const History = () => {
  const historyList = [
    {
      id: 1,
      title: 'Replenished BTC',
      date: '12:14 AM on 21 Jul 2023',
      to: ' I1sd3sd3sdsd31321sdsdSDDSdssd3',
      from: 'I1sd3sd3sdsd31321sdsdSDDSdssd3',
      send: '0.25469 BTC',
      receive: '$555.26',
      type: 'send'
    },
    {
      id: 2,
      title: 'Withdrawn BTC',
      date: '12:14 AM on 21 Jul 2023',
      to: ' I1sd3sd3sdsd31321sdsdSDDSdssd3',
      from: 'I1sd3sd3sdsd31321sdsdSDDSdssd3',
      send: '0.28469 BTC',
      receive: '$515.26',
      type: 'receive'
    },
    {
      id: 3,
      title: 'Replenished BTC',
      date: '12:14 AM on 21 Jul 2023',
      to: ' I1sd3sd3sdsd31321sdsdSDDSdssd3',
      from: 'I1sd3sd3sdsd31321sdsdSDDSdssd3',
      send: '0.25439 BTC',
      receive: '$559.26',
      type: 'send'
    },
    {
      id: 4,
      title: 'Withdrawn BTC',
      date: '12:14 AM on 21 Jul 2023',
      to: ' I1sd3sd3sdsd31321sdsdSDDSdssd3',
      from: 'I1sd3sd3sdsd31321sdsdSDDSdssd3',
      send: '0.25469 BTC',
      receive: '$555.26',
      type: 'receive'
    },
    {
      id: 1,
      title: 'Replenished BTC',
      date: '12:14 AM on 21 Jul 2023',
      to: ' I1sd3sd3sdsd31321sdsdSDDSdssd3',
      from: 'I1sd3sd3sdsd31321sdsdSDDSdssd3',
      send: '0.25469 BTC',
      receive: '$555.26',
      type: 'send'
    },
    {
      id: 2,
      title: 'Withdrawn BTC',
      date: '12:14 AM on 21 Jul 2023',
      to: ' I1sd3sd3sdsd31321sdsdSDDSdssd3',
      from: 'I1sd3sd3sdsd31321sdsdSDDSdssd3',
      send: '0.28469 BTC',
      receive: '$515.26',
      type: 'receive'
    },
    {
      id: 3,
      title: 'Replenished BTC',
      date: '12:14 AM on 21 Jul 2023',
      to: ' I1sd3sd3sdsd31321sdsdSDDSdssd3',
      from: 'I1sd3sd3sdsd31321sdsdSDDSdssd3',
      send: '0.25439 BTC',
      receive: '$559.26',
      type: 'send'
    },
    {
      id: 4,
      title: 'Withdrawn BTC',
      date: '12:14 AM on 21 Jul 2023',
      to: ' I1sd3sd3sdsd31321sdsdSDDSdssd3',
      from: 'I1sd3sd3sdsd31321sdsdSDDSdssd3',
      send: '0.25469 BTC',
      receive: '$555.26',
      type: 'receive'
    },
  ]
  const list = [
    {
      text: 'Receive',
      img: receiveImg,
      currency: '0.25469 BTC',
      current: '$555.26'
    },
    {
      text: 'Sent',
      img: sentImg,
      currency: '0.25469 BTC',
      current: '$555.26'
    },
    {
      text: 'Receive',
      img: receiveImg,
      currency: '0.25469 BTC',
      current: '$555.26'
    },
    {
      text: 'Sent',
      img: sentImg,
      currency: '0.25469 BTC',
      current: '$555.26'
    },
    {
      text: 'Receive',
      img: receiveImg,
      currency: '0.25469 BTC',
      current: '$555.26'
    },
    {
      text: 'Sent',
      img: sentImg,
      currency: '0.25469 BTC',
      current: '$555.26'
    },
    {
      text: 'Receive',
      img: receiveImg,
      currency: '0.25469 BTC',
      current: '$555.26'
    },
    {
      text: 'Sent',
      img: sentImg,
      currency: '0.25469 BTC',
      current: '$555.26'
    },
  ]
  const filterBtn = ['All' | 'Replenished' | 'Withdrawn' | 'Reinvested']
  return (
    <>
      <div className="desktop">


        <div className={styles.history}>
          <div className={styles.history__header}>
            <h3 className={styles.history__title}>Bitcoin transactions history</h3>
            <div className={styles.history__btns}>
              <button className={clsx(styles.history__btn, styles.history__btnActive)} type='button'>All</button>
              <button className={styles.history__btn} type='button'>Replenished</button>
              <button className={styles.history__btn} type='button'>Withdrawn</button>
              <button className={styles.history__btn} type='button'>Reinvested</button>
            </div>
          </div>
          <div className={styles.history__body}>
            <div className={styles.history__items}>

              {historyList.map(item => (
                <HistoryItem data={item} />
              ))}
            </div>
            <div className={styles.history__arrows}>
              <button className={styles.history__arrow}><svg xmlns="http://www.w3.org/2000/svg" width="13" height="17" viewBox="0 0 13 17" fill="none">
                <path d="M11.4331 15L3.93623 11.1379C1.73359 10.0032 1.73359 6.99684 3.93623 5.86212L11.4331 2" stroke="#97969A" stroke-width="3" stroke-linecap="round" />
              </svg></button>
              <button className={styles.history__arrow}><svg xmlns="http://www.w3.org/2000/svg" width="12" height="17" viewBox="0 0 12 17" fill="none">
                <path d="M1.99512 2L8.65901 5.86212C10.6169 6.99684 10.6169 10.0032 8.65901 11.1379L1.99512 15" stroke="#97969A" stroke-width="3" stroke-linecap="round" />
              </svg></button>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile">
        <div className={styles.mobile}>
          <div className={styles.mobile__title}>Transaction history</div>
          <ul className={styles.mobile__list}>
            {list.map((item, index) => (
              <li key={index} className={styles.mobItem}>
                <div className={styles.mobItem__row}>

                  <div className={styles.mobItem__img}><img src={item.img} alt={item.title} /></div>
                  <div className={styles.mobItem__type}>{item.text}</div>

                  <div className={styles.mobItem__col}>
                    <div className={styles.mobItem__currency}>{item.currency}</div>
                    <div className={styles.mobItem__current}>{item.current}</div>
                  </div>
                </div>

              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default History