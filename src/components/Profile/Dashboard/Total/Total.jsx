import React from 'react'
import Card from './Card'
import styles from './Total.module.scss'
import profitImg from './profit.svg'
import walletImg from './wallet.svg'
import reinvestImg from './reinvest.svg'
const Total = () => {
  const cards = [
    {
      image: profitImg,
      name: 'Total profit',
      bonus: '+0.9%',
      current: '$456'
    },
    {
      image: walletImg,
      name: 'Withdrawn',
      current: '$350'
    },
    {
      image: reinvestImg,
      name: 'Reinvested',
      bonus: '+$0.5',
      current: '$30'
    },
  ]
  return (
    <div className={styles.total}><div className={styles.total__inner}>
      <div className={styles.total__cards}>
        {cards.map(card => (
          <Card key={card.name} bgImg={card.image} name={card.name} bonus={card.bonus} current={card.current} />
        ))}
      </div>
    </div>
    </div>
  )
}

export default Total