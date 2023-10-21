import React from 'react'
import './Modal.scss'
import { ReactComponent as CloseIcon } from '../../../assets/images/svg/close.svg'
import clsx from 'clsx'
const Modal = ({ title, onClose, isOpen, children, className }) => {
  const onWrapperClick = (e) => {
    if (e.target.classList.contains('modal__wrapper')) onClose()
  }
  return (
    <>

      <div className={clsx(isOpen ? 'modal--open' : '', 'modal')}>
        <div className="modal__wrapper" onClick={onWrapperClick}>
          <div className={clsx(className, "modal__content")}>
            <div className="modal__header">
              <div className="modal__title">{title}</div>
              <button className="modal__close" onClick={() => onClose()} ><CloseIcon /></button>
            </div>
            {children}
          </div>
        </div>
      </div>

    </>
  )
}

export default Modal