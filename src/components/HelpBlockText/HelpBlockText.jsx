import React from 'react'
import styles from './HelpBlockText.module.scss'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
const HelpBlockText = ({ data }) => {
  return (
    <div className={styles.textBlock}>
      <div className={styles.textBlock__head}>
        <h2 className={clsx(styles.textBlock__title, 'titleMd')}>{data.title}</h2>
        <Link to='/profile/help' className={styles.textBlock__btn}>Back to menu</Link>
      </div>
      <div className={styles.textBlock__text} dangerouslySetInnerHTML={{ __html: data.text }}></div>
    </div>
  )
}

export default HelpBlockText