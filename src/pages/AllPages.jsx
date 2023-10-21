import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ModalGradientDeposit from '../components/Modals/ModalGradientDeposit'
import DashboardButton from '../components/Buttons/DashboardButton'
import ButtonForm from '../components/Buttons/ButtonForm'
import ModalGradientCongratulation from '../components/Modals/ModalGradientCongratulation'
import ModalGradientBuyingPortfolio from '../components/Modals/ModalGradientBuyingPortfolio'
import ModalGradientSwap from '../components/Modals/ModalGradientSwap'
import ModalGradientSuccess from '../components/Modals/ModalGradientSuccess'
import ModalGradientFailed from '../components/Modals/ModalGradientFailed'
import ModalGradientSuccessActive from '../components/Modals/ModalGradientSuccessActive'
import ModalGradientCompounding from '../components/Modals/ModalGradientCompounding'
import ModalGradientNewDeposit from '../components/Modals/ModalGradientNewDeposit'
import ModalGradientNewDepositSm from '../components/Modals/ModalGradientNewDepositSm'
import { ModalAddWallet, ModalNotifications, ModalReinvest, ModalReinvestAura, ModalReplenishment, ModalSwap, ModalSwapAura, ModalWithdraw } from '../components/Modals'
import clsx from 'clsx'
const AllPages = () => {
  const [modalNotify, setModalNotify] = useState(false)
  const [modalGradientDeposit, setModalGradientDeposit] = useState(false)
  const [modalGradientCongratulation, setModalGradientCongratulation] = useState(false)
  const [modalGradientBuyingPortfolio, setModalGradientBuyingPortfolio] = useState(false)
  const [modalGradientSwap, setModalGradientSwap] = useState(false)
  const [modalGradientSuccess, setModalGradientSuccess] = useState(false)
  const [modalGradientSuccessActive, setModalGradientSuccessActive] = useState(false)
  const [modalGradientFailed, setModalGradientFailed] = useState(false)
  const [modalGradientCompounding, setModalGradientCompounding] = useState(false)
  const [modalGradientNewDeposit, setModalGradientNewDeposit] = useState(false)
  const [modalGradientNewDepositSm, setModalGradientNewDepositSm] = useState(false)
  const [modalWithdraw, setModalWithdraw] = useState(false)
  const [modalReinvest, setModalReinvest] = useState(false)
  const [modalSwap, setModalSwap] = useState(false)
  const [modalReplenishment, setModalReplenishment] = useState(false)
  const [addWalletModal, setAddWalletModal] = useState(false)
  const [modalReinvestAura, setModalReinvestAura] = useState(false)
  const [modalSwapAura, setModalSwapAura] = useState(false)
  return (
    <>
      <main className="main main--profile">
        <div className="container">
          <div className="alls">
            <h2>Pages</h2>
            <ul className="all-pages">
              <Link to={'/'} > <ButtonForm title={'Главная'} /></Link>
              <Link to={'/about'} > <ButtonForm title={'About'} /></Link>
              <Link to={'/investment'} > <ButtonForm title={'investment'} /></Link>
              <Link to={'/bounty'} > <ButtonForm title={'bounty'} /></Link>
              <Link to={'/news'} > <ButtonForm title={'news'} /></Link>
              <Link to={'/news2'} > <ButtonForm title={'news2'} /></Link>
              <Link to={'/contact'} > <ButtonForm title={'contact'} /></Link>
              <Link to={'/registration'} > <ButtonForm title={'registration'} /></Link>
              <Link to={'/login'} > <ButtonForm title={'login'} /></Link>
              <Link to={'/lock'} > <ButtonForm title={'lock'} /></Link>
              <Link to={'/profile'} > <ButtonForm title={'profile'} /></Link>
              <Link to={'/profile/dashboard'} > <ButtonForm title={'dashboard'} /></Link>
              <Link to={'/profile/invest'} > <ButtonForm title={'invest'} /></Link>
              <Link to={'/profile/wallets'} > <ButtonForm title={'wallets'} /></Link>
              <Link to={'/profile/statistics'} > <ButtonForm title={'statistics'} /></Link>
              <Link to={'/profile/bonus'} > <ButtonForm title={'bonus'} /></Link>
              <Link to={'/profile/help'} > <ButtonForm title={'help'} /></Link>
              <Link to={'/profile/help/start'} > <ButtonForm title={'help start'} /></Link>
              <Link to={'/profile/help/security'} > <ButtonForm title={'help security'} /></Link>
              <Link to={'/profile/help/wallets'} > <ButtonForm title={'help wallets'} /></Link>
              <Link to={'/profile/help/invest'} > <ButtonForm title={'help invest'} /></Link>
              <Link to={'/profile/help/bonus'} > <ButtonForm title={'help bonus'} /></Link>
              <Link to={'/profile/help/faq'} > <ButtonForm title={'help faq'} /></Link>
              <Link to={'/terms'} > <ButtonForm title={'terms'} /></Link>
              <Link to={'/terms1'} > <ButtonForm title={'404'} /></Link>
            </ul>
            <h2>Modals</h2>
            <ul className="all-modal">
              <li>
                <ButtonForm title={'Modal gradient Deposit replenishment'} handleClick={() => setModalGradientDeposit(true)} />
              </li>
              <li>
                <ButtonForm title={'Modal gradient Confirm configuration'} handleClick={() => setModalGradientCongratulation(true)} />
              </li>
              <li>
                <ButtonForm title={'Modal gradient Buying a portfolio'} handleClick={() => setModalGradientBuyingPortfolio(true)} />
              </li>
              <li>
                <ButtonForm title={'Modal Swap AURA to wallet'} handleClick={() => setModalGradientSwap(true)} />
              </li>
              <li>
                <ButtonForm title={'Modal Deposit replenished successfully'} handleClick={() => setModalGradientSuccess(true)} />
              </li>
              <li>
                <ButtonForm title={'Modal Deposit replenished failed'} handleClick={() => setModalGradientFailed(true)} />
              </li>
              <li>
                <ButtonForm title={'Modal Deposit successfully activated'} handleClick={() => setModalGradientSuccessActive(true)} />
              </li>
              <li>
                <ButtonForm title={'Modal Compounding'} handleClick={() => setModalGradientCompounding(true)} />
              </li>
              <li>
                <ButtonForm title={'Modal New deposit'} handleClick={() => setModalGradientNewDeposit(true)} />
              </li>
              <li>
                <ButtonForm title={'Modal New deposit accent'} handleClick={() => setModalGradientNewDepositSm(true)} />
              </li>
              <li>
                <ButtonForm title={'Add wallet'} handleClick={() => setAddWalletModal(true)} />
              </li>
              <li>
                <ButtonForm title={'modalWithdraw'} handleClick={() => setModalWithdraw(true)} />
              </li>
              <li>
                <ButtonForm title={'modalReinvest'} handleClick={() => setModalReinvest(true)} />
              </li>
              <li>
                <ButtonForm title={'modalSwap'} handleClick={() => setModalSwap(true)} />
              </li>
              <li>
                <ButtonForm title={'modalReplenishment'} handleClick={() => setModalReplenishment(true)} />
              </li>
              <li>
                <ButtonForm title={'ModalNotify'} handleClick={() => setModalNotify(true)} />
              </li>
              <li>
                <ButtonForm title={'Modal Reinvest Aura'} handleClick={() => setModalReinvestAura(true)} />
              </li>
              <li>
                <ButtonForm title={'Modal Swap Aura'} handleClick={() => setModalSwapAura(true)} />
              </li>
            </ul>
          </div>
        </div>
      </main>
      <ModalGradientDeposit isOpen={modalGradientDeposit} onClose={() => setModalGradientDeposit(false)} />
      <ModalGradientCongratulation isOpen={modalGradientCongratulation} onClose={() => setModalGradientCongratulation(false)} />
      <ModalGradientBuyingPortfolio isOpen={modalGradientBuyingPortfolio} onClose={() => setModalGradientBuyingPortfolio(false)} />
      <ModalGradientSwap isOpen={modalGradientSwap} onClose={() => setModalGradientSwap(false)} />
      <ModalGradientSuccess isOpen={modalGradientSuccess} onClose={() => setModalGradientSuccess(false)} />
      <ModalGradientFailed isOpen={modalGradientFailed} onClose={() => setModalGradientFailed(false)} />
      <ModalGradientSuccessActive isOpen={modalGradientSuccessActive} onClose={() => setModalGradientSuccessActive(false)} />
      <ModalGradientCompounding isOpen={modalGradientCompounding} onClose={() => setModalGradientCompounding(false)} />
      <ModalGradientNewDeposit isOpen={modalGradientNewDeposit} onClose={() => setModalGradientNewDeposit(false)} />
      <ModalGradientNewDepositSm isOpen={modalGradientNewDepositSm} onClose={() => setModalGradientNewDepositSm(false)} />
      <ModalAddWallet isOpen={addWalletModal} onClose={() => setAddWalletModal(false)} />
      < ModalWithdraw isOpen={modalWithdraw} onClose={() => setModalWithdraw(false)} />
      < ModalReinvest isOpen={modalReinvest} onClose={() => setModalReinvest(false)} />
      < ModalSwap isOpen={modalSwap} onClose={() => setModalSwap(false)} />
      < ModalReplenishment isOpen={modalReplenishment} onClose={() => setModalReplenishment(false)} />
      <ModalNotifications isOpen={modalNotify} onClose={() => setModalNotify(false)} />
      <ModalReinvestAura isOpen={modalReinvestAura} onClose={() => setModalReinvestAura(false)} />
      <ModalSwapAura isOpen={modalSwapAura} onClose={() => setModalSwapAura(false)} />
    </>
  )
}

export default AllPages