import React, { useState } from 'react'
import styles from './ModalNotifications.module.scss'
import Modal from '../Modal/Modal'
import ButtonForm from '../../Buttons/ButtonForm'
import { ReactComponent as RemoveIcon } from '../../../assets/images/svg/remove.svg'
import { Link } from 'react-router-dom'
const ModalNotifications = ({ isOpen, onClose }) => {
  const messages = [
    {
      title: 'Subject messaage',
      text: 'Hello, ***! Text message',
      path: '/'
    },
    {
      title: 'Subject messaage',
      text: 'Hello, ***! Text message',
      path: '/'
    },
    {
      title: 'Subject messaage',
      text: 'Hello, ***! Text message',
      path: '/'
    },
    {
      title: 'Subject messaage',
      text: 'Hello, ***! Text message',
      path: '/'
    },
  ]

  const [activePortfolio, setActivePortfolio] = useState(0)
  return (
    <Modal title={'Notifications'} isOpen={isOpen} onClose={onClose} className={styles.modal}>
      <div className={styles.modal__inner}>

        <div className={styles.modal__body}>
          <div className={styles.modal__messages}>
            {messages.map((message, index) => (
              <li key={index} className={styles.message}>
                <Link to={message.path} className={styles.message__content}>
                  <h6 className={styles.message__title}>{message.title}</h6>
                  <div className={styles.message__text}>
                    <p>{message.text}</p>
                  </div>
                </Link>
                <button className={styles.message__remove}><RemoveIcon /></button>
              </li>
            ))}
          </div>
          <div className={styles.modal__btns}>
            <ButtonForm title={'Remove all'} className={styles.modal__btn} />
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ModalNotifications