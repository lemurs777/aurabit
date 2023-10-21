import React from 'react'

import styles from './HelpSearch.module.scss'
import clsx from 'clsx'

import { ReactComponent as SearchIcon } from '../../assets/images/svg/search.svg'
const HelpSearch = ({ title, text }) => {
  return (
    <div className={styles.help}>
      <div className={styles.help__inner}>
        <h1 className={styles.help__title}>{title}</h1>
        <div className={styles.help__text}>
          <p>{text}</p>
        </div>
        <form className={clsx(styles.help__search, styles.search)}>
          <input type="text" />
          <button className={styles.search__btn} type='submit'><SearchIcon /></button>
        </form>
      </div>
    </div>
  )
}

export default HelpSearch