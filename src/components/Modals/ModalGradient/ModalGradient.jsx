import React from 'react'
import './ModalGradient.scss'
import { ReactComponent as CloseIcon } from '../../../assets/images/svg/close.svg'
import clsx from 'clsx'
const ModalGradient = ({ title, onClose, isOpen, children, className, classNameTitle }) => {
  const onWrapperClick = (e) => {
    if (e.target.classList.contains('modal-gradient__wrapper')) onClose()
  }
  return (
    <>
      {isOpen &&
        <div className={'modal-gradient'}>
          <div className="modal-gradient__wrapper" onClick={onWrapperClick}>
            <div className={clsx(className, "modal-gradient__content")}>
              <div className="modal-gradient__header">
                <div className={clsx(classNameTitle, "modal-gradient__title")}>{title}</div>
                <button className="modal-gradient__close" onClick={() => onClose()} ><CloseIcon /></button>
              </div>
              {children}
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default ModalGradient