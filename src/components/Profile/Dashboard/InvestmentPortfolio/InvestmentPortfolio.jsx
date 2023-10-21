import React from 'react'
import styles from './InvestmentPortfolio.module.scss'
import chartImg from '../../../../assets/images/chart.png'
import DashboardButton from '../../../Buttons/DashboardButton'
import depositImg from '../../../../assets/images/page/profile/dashboard-btns/deposit.svg'
import ProgressBar from '../../../ProgressBar'
const InvestmentPortfolio = () => {
  return (
    <div className={styles.invest}>
      <div className={styles.invest__inner}>
        <div className={styles.invest__left}>
          <div className={styles.invest__head}>
            <h3 className={styles.invest__title}>Investment portfolio</h3>
            <div className={styles.invest__id}>#548341</div>
          </div>
          <div className={styles.invest__sum}>3.3145 <span>LTC</span></div>
          <div className={styles.invest__chart}>
            <img src={chartImg} alt="chart" />
          </div>
        </div>
        <div className={styles.invest__right}>
          <div className={styles.invest__list}>
            <li className={styles.item}>
              <div className={styles.item__name}>Compounding</div>
              <div className={styles.item__info}>On</div>
            </li>
            <li className={styles.item}>
              <div className={styles.item__name}>Next profit</div>
              <div className={styles.item__info}>03:00:2024</div>
            </li>
            <li className={styles.item}>
              <div className={styles.item__name}>Payback</div>
              <div className={styles.item__info}>16%</div>
            </li>
            <li className={styles.item}>
              <div className={styles.item__name}>30 days from 45</div>
              <div className={styles.item__info}>70%</div>
            </li>
          </div>
          {/*<div className={styles.invest__line}>
            <span style={{ width: '70%' }}></span>
          </div>*/}
          <ProgressBar width={'70%'} />
          <DashboardButton className={styles.invest__btnMd} text={'Top up'} icon={depositImg} />
        </div>
      </div>
    </div>
  )
}

export default InvestmentPortfolio