import React from 'react'
import styles from './Registration.module.scss'
import clsx from 'clsx'
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs'

import Input from '../UI/Forms/Input'
import Checkbox from '../UI/Forms/Checkbox'

import googleImg from '../../assets/images/social/google.png'

const Registration = () => {
  return (
    <main className='main main--registration'>
      <div className={styles.reg}>
        <div className={clsx(styles.reg__container, 'container')}>
          <div className={styles.reg__inner}>
            <h3 className={styles.reg__title}>Registration</h3>
            <div className={styles.reg__row}>
              <div className={styles.reg__inner}>
                <div className={styles.reg__col}>
                  <form className={styles.reg__form} action="#">
                    <Input label={'Email or username'} />
                    <Input label={'Password'} type='password' />
                    <Input label={'Confirm Password'} type='password' />
                    <Checkbox label={`I agree to the terms and conditions of Aurabit`} className={styles.reg__checkbox} />
                    <button type="submit" className={clsx(styles.reg__btn, styles.reg__submit)}>Register</button>
                    <button type="button" className={clsx(styles.reg__btn, styles.reg__google)}><span>Continue with Google</span><img src={googleImg} alt="google account" /></button>

                  </form>
                  <div className={styles.reg__bottom}>
                    <span>Already have an account?</span>
                    <button type="button" className={styles.reg__login}>Login</button>
                  </div>
                </div>
              </div>
              <div className={styles.reg__tabs}>
                <Tabs className={styles.tab}>
                  <TabList className={clsx(styles.tab__list)}>
                    <Tab
                      className={styles.tab__btn}
                      selectedClassName={clsx(styles.tab__btnActive)}
                    >
                      User agreement
                    </Tab>
                    <Tab
                      className={styles.tab__btn}
                      selectedClassName={styles.tab__btnActive}
                    >
                      Terms and conditions
                    </Tab>
                  </TabList>

                  <TabPanel className={styles.tab__content} selectedClassName={styles.tab__contentSelected}>
                    <div className={styles.tab__text}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    </div>
                  </TabPanel>
                  <TabPanel className={styles.tab__content} selectedClassName={styles.tab__contentSelected}>
                    <div className={styles.tab__text}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Registration