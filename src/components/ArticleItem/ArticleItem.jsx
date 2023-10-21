import React from 'react'

import { Link } from 'react-router-dom'
import styles from './ArticleItem.module.scss'
import clsx from 'clsx'

const ArticleItem = ({ item, className }) => {



  return (
    <div className={clsx(styles.newsArticle, className)}>
      <div className={styles.newsArticle__img}>
        <img src={item.img} alt={item.title} />
      </div>
      <h5 className={styles.newsArticle__title}>{item.title}</h5>
      <div className={styles.newsArticle__text}>
        <p>{item.text}</p>
      </div>
      <div className={styles.newsArticle__footer}>
        <div className={styles.newsArticle__date}>{item.date}</div>
        <Link to={item.path}>Read more</Link>
      </div>
    </div>
  )
}

export default ArticleItem