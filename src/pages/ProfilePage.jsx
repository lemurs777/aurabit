import React from 'react'
import MainData from '../components/Profile/MainData'
import Contacts from '../components/Profile/Contacts'
import { Tab, TabList, Tabs, TabPanel } from 'react-tabs'

import contactImg from '../assets/images/page/profile/contacts.svg'
import kycImg from '../assets/images/page/profile/kyc.svg'
import securityImg from '../assets/images/page/profile/security.svg'
import walletImg from '../assets/images/page/profile/wallets.svg'
import Identity from '../components/Profile/Identity'
import TabWallets from '../components/Profile/TabWallets'
import TabSecurity from '../components/Profile/TabSecurity'


const ProfilePage = () => {
  return (
    <main className='main main--profile'>
      <div className="container">
        <div className="grid">
          <MainData />
          <Tabs className={'profileTab'}>
            <TabList className={'profileTab__list'}>
              <Tab className={'profileTab__btn'} selectedClassName={'profileTab__btn-active'}>
                <div className="profileTab__btn-bg"><img src={contactImg} alt="contact" /></div>
                <div className="profileTab__btn-inner">

                  <div className="profileTab__btn-title">Contacts</div>
                  <div className="profileTab__btn-text"><p>Fill in your contacts for easy communication with you</p></div>
                </div>
              </Tab>
              <Tab className={'profileTab__btn'} selectedClassName={'profileTab__btn-active'}>
                <div className="profileTab__btn-bg"><img src={kycImg} alt="kyc" /></div>
                <div className="profileTab__btn-inner">

                  <div className="profileTab__btn-title">KYC</div>
                  <div className="profileTab__btn-text"><p>Verify your identity</p></div>
                </div>
              </Tab>
              <Tab className={'profileTab__btn'} selectedClassName={'profileTab__btn-active'}>
                <div className="profileTab__btn-bg"><img src={securityImg} alt="security" /></div>
                <div className="profileTab__btn-inner">

                  <div className="profileTab__btn-title">Security</div>
                  <div className="profileTab__btn-text"><p>Set up security for login and payments</p></div>
                </div>
              </Tab>
              <Tab className={'profileTab__btn'} selectedClassName={'profileTab__btn-active'}>
                <div className="profileTab__btn-bg"><img src={walletImg} alt="wallets" /></div>
                <div className="profileTab__btn-inner">
                  <div className="profileTab__btn-title">Wallets</div>
                  <div className="profileTab__btn-text"><p>Save your wallets for convenient withdrawals</p></div>
                </div>
              </Tab>
            </TabList>

            <TabPanel className={'profileTab__panel'}>
              <Contacts />
            </TabPanel>
            <TabPanel className={'profileTab__panel'}>
              <Identity />
            </TabPanel>
            <TabPanel className={'profileTab__panel'}>
              <TabSecurity />
            </TabPanel>
            <TabPanel className={'profileTab__panel'}>
              <TabWallets />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </main>
  )
}

export default ProfilePage