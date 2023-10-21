import React, { useState } from 'react'
import styles from './AddWallet.module.scss'
import addImg from './plus.svg'
import ModalAddWallet from '../../Modals/ModalAddWallet'
const AddWallet = () => {
  const [addWalletModal, setAddWalletModal] = useState(false)
  return (<>
    <button className={styles.btn} onClick={() => setAddWalletModal(true)}>
      <div className={styles.btn__inner}>
        <h6 className={styles.btn__title}>Add wallet</h6>
      </div>
      <img src={addImg} alt="img" />
    </button>
    < ModalAddWallet isOpen={addWalletModal} onClose={() => setAddWalletModal(false)} />
  </>
  )
}

export default AddWallet