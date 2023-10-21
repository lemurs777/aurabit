import React from 'react'

import styles from './Mails.module.scss'
import { Link } from 'react-router-dom'

const Mails = () => {
  const mails = [
    {
      title: 'business@aurabit.ai',
      text: 'For commercial offers, discussion of advertising, B2B cooperation',
    },
    {
      title: 'Support@aurabit.ai',
      text: 'User support, consultations, problem solving',
    },
    {
      title: 'Payments@aurabit.ai',
      text: 'Payments, transactions, financial questions and offers',
    },
  ]
  return (
    <div className={styles.mails}>

      <h4 className={styles.mails__title}>Email us</h4>
      <ul className={styles.mails__list}>
        {mails.map(item => (
          <li key={item.title} className={styles.mail}>
            <h5 className={styles.mail__title}>{item.title}</h5>
            <div className={styles.mail__text}>
              <p>{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>

  )
}

export default Mails
