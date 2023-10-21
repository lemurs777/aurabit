import React from 'react'
import styles from './Guarantees.module.scss'
import Title from '../Title'

import safeImg from '../../assets/images/page/investment/safe.png'
import ButtonGradient from '../Buttons/ButtonGradient'
const Guarantees = () => {
  return (
    <div className={styles.guarantee}>
      <div className='container'>
        <Title
          decor={'Guarantees for the safety of your funds'}
          className={styles.guarantee__title}
        />
        <div className={styles.guarantee__row}>
          <div className={styles.guarantee__content}>
            <div className={styles.guarantee__text}>
              <p>
                <span>
                  We understand the importance of maintaining the highest
                  standards of security and compliance.
                </span>
              </p>
              <p>
                We utilize equipment and software with the highest security
                standards. We adhere to strict regulatory requirements and
                implement reliable security measures to protect your assets and
                personal information. Your trust and confidentiality are of
                paramount importance to us, and we strive to maintain the
                highest level of professionalism and integrity.
              </p>
            </div>
            <div className={styles.guarantee__bottom}>

              <ButtonGradient
                title={'JOIN NOW'}
                className={styles.guarantee__btn}
              />
            </div>
          </div>
          <div className={styles.guarantee__img}>
            <img src={safeImg} alt='safe' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Guarantees
