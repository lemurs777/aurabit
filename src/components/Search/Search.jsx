import React from 'react'
import styles from './Search.module.scss'
const Search = () => {
  return (
    <div className={styles.search}>
      <h4 className={styles.search__title}>Bitcoin withdrawal address</h4>
      <form className={styles.search__form} action="#">
        <input type="text" />
        <button type="submit" className={styles.search__btn}>Save</button>
      </form>
    </div>
  )
}

export default Search