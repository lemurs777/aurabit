import React from 'react'
import styles from './InvestList.module.scss'

import aiImg from '../../assets/images/page/investment/ai.png'
import assetsImg from '../../assets/images/page/investment/assets.png'
const InvestList = () => {
  const investList = [
    {
      title: 'Intelligent Trading with AI',
      accentText:
        'Harnessing the power of advanced artificial intelligence, we have revolutionized the way trading is conducted in financial markets.',
      text: 'Our AI-driven systems analyze vast amounts of data, swiftly detecting patterns, trends, and opportunities that might go unnoticed by human traders. This technology empowers our clients with actionable insights and timely decisions, enhancing their trading performance and enabling them to stay ahead in the competitive landscape.',
      img: aiImg,
      labels: [
        { title: 'Portfolios', counter: '154' },
        { title: 'Transactions', counter: '30M' },
      ],
    },
    {
      title: 'What assets do we deal with ?',
      accentText:
        'For our clients, we construct investment portfolios comprising instruments such as Stocks, Bonds, Commodities, Currencies, Derivatives, Mutual Funds, ETFs, and Crypto ETFs.',
      text: "You don't need to be an expert in financial markets to generate profits. Our team of traders takes care of the entire process, providing you with a user-friendly management interface.",
      img: assetsImg,
    },
  ]
  return (
    <div className={styles.invest}>
      <div className='container'>
        <div className={styles.invest__list}>
          {investList.map(item => (
            <div key={item.title} className={styles.item}>
              <div className="mobile">
                <h3 className={styles.item__title}>{item.title}</h3>
              </div>
              <div className={styles.item__row}>
                <div className={styles.item__content}>
                  <div className="desktop">
                    <h3 className={styles.item__title}>{item.title}</h3>
                  </div>
                  <div className={styles.item__text}>
                    {item.accentText && (
                      <p>
                        <span>{item.accentText}</span>
                      </p>
                    )}
                    <p>{item.text}</p>
                  </div>
                  {item.labels && (
                    <div className={styles.item__labels}>
                      {item.labels.map(label => (
                        <div key={label.title} className={styles.item__label}>
                          <div className={styles.item__counter}>
                            {label.counter}
                          </div>
                          {label.title}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className={styles.item__img}>
                  <img src={item.img} alt={item.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InvestList
