import React from 'react'
import styles from './News.module.scss'
import newsImg from '../../../../assets/images/latest-news.png'
import { Link } from 'react-router-dom'
const News = () => {
  return (
    <div className={styles.news}>
      <div className={styles.news__inner}>
        <h6 className={styles.news__title}>Latest news</h6>
        <div className={styles.news__img}>
          <div className={styles.news__subtitle}>Lorem Ipsum</div>
          <img src={newsImg} alt="news" />
        </div>
        <div className={styles.news__text}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          </p>
        </div>
        <div className={styles.news__bottom}>
          <div className={styles.news__date}>10 july 2023</div>
          <Link to={'/'} className={styles.news__link}>Read more</Link>
        </div>
      </div>
    </div>
  )
}

export default News