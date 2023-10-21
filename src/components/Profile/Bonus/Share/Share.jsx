import React from 'react'
import styles from './Share.module.scss'
import ButtonForm from '../../../Buttons/ButtonForm'
import clsx from 'clsx'
const Share = () => {
  const inputs = [
    {
      label: 'YouTube  ',
      price: ' $1-$20',
      status: true,
      checkStatus: 'waiting',
      statusLabel: 'Waiting for answer'
    },
    {
      label: 'Instagram ',
      price: ' $0.5 - $2',
      status: true,
      checkStatus: 'approved',
      statusLabel: 'Approved 09:08:03'
    },
    {
      label: 'TikTok ',
      price: '$0.5 - $10',
      status: false,
    },
    {
      label: 'Telegram  ',
      price: '$0.5 - $5',
      status: false,
    },
    {
      label: 'Facebook ',
      price: ' $1 - 5$',
      status: false,
    },
  ]
  return (
    <div className={styles.share}>
      <div className={styles.share__inner}>
        <h3 className={styles.share__title}>Share your investment experience with loved ones. Send us a link to your publication and get a bonus</h3>
        <div className={styles.share__items}>

          {inputs.map(item => (
            <div className={styles.item} key={item.label}>
              <div className={styles.item__inner}>
                <div className={styles.item__label}>{item.label} <span> &nbsp;{item.price}</span></div>
                <div className={styles.item__input}>
                  <div className={clsx(styles.item__status, item.checkStatus === 'approved' ? styles.item__approved : null)}>{item.statusLabel}</div>
                  <input type="text" disabled={item.status} />
                </div>
              </div>
              {!item.status && (
                <ButtonForm title={'Send'} className={styles.item__btn} />
              )}
            </div>
          ))}
        </div>
        <div className={styles.share__text}>
          <p>
            Attention ! We do not guarantee that each publication will be approved and rewarded. The bonus depends on the quality of the publication and is paid at the discretion of the moderators.
          </p>
          <p>
            You can send us a verification link once a week
          </p>
        </div>
      </div>
    </div>
  )
}

export default Share