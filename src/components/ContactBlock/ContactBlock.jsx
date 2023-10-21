import React from 'react'
import styles from './ContactBlock.module.scss'

const ContactBlock = ({ title, text, children }) => {
  return (
    <div className={styles.contact}>

      <div className={styles.contact__row}>
        <div className={styles.contact__col}>
          <div className={styles.contact__content}>
            <h6 className={styles.contact__title}>{title}</h6>
            <div className={styles.contact__text}>
              <p>{text}</p>
            </div>
          </div>
          {children[0]}
        </div>
        <div className={styles.contact__col}>{children[1]}{children[2]}</div>
      </div>

    </div>
  )
}

export default ContactBlock
