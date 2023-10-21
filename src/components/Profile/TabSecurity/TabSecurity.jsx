import React, { useState } from 'react'
import { Tab, TabList, Tabs, TabPanel } from 'react-tabs'
import styles from './TabSecurity.module.scss'
import clsx from 'clsx'
import ButtonForm from '../../Buttons/ButtonForm'
import { Link } from 'react-router-dom'
import qrImg from '../../../assets/images/qr.jpg'
const TabSecurity = () => {
  const [nextStep, setNextStep] = useState(false)
  return (
    <div className={clsx(styles.security, 'frame')}>
      <Tabs className={styles.tab}>
        <TabList className={styles.tab__list}>
          <Tab className={styles.tab__btn}
            selectedClassName={styles.tab__btnActive}>
            PIN-code
          </Tab>
          <Tab className={styles.tab__btn}
            selectedClassName={styles.tab__btnActive}>
            Password changing
          </Tab>
          <Tab className={styles.tab__btn}
            selectedClassName={styles.tab__btnActive}>
            2FA
          </Tab>
        </TabList>
        <TabPanel selectedClassName={styles.tab__panelSelected} className={styles.tab__panel}>
          <div className={clsx(styles.pin, styles.tab__content)}>
            <h6 className={styles.pin__title}>Create a 4-digit password to protect payments and lock screen</h6>
            <form className={styles.pin__form} action="#">
              <div className={styles.pin__item}>
                <label>New pin-code</label>
                <div className={styles.pin__inputs}>
                  <input type="text" /><input type="text" /><input type="text" /><input type="text" />
                </div>
              </div>
              <div className={styles.pin__item}>
                <label>Repeat pin-code</label>
                <div className={styles.pin__inputs}>
                  <input type="text" /><input type="text" /><input type="text" /><input type="text" />
                </div>
              </div>
              <ButtonForm className={styles.pin__btn} title={'Save'} />
            </form>
          </div>
        </TabPanel>
        <TabPanel selectedClassName={styles.tab__panelSelected} className={styles.tab__panel}>
          <div className={clsx(styles.password, styles.tab__content)}>
            <h6 className={styles.password__title}>Create a 4-digit password to protect payments and lock screen</h6>
            <form className={styles.password__form} action="#">
              <div className={styles.password__item}>
                <div className={styles.password__itemHead}>
                  <label>Password</label>
                  <button type="button" className={styles.password__generate}>Generate strong</button>
                </div>
                <input type="password" />
              </div>
              <div className={styles.password__item}>
                <div className={styles.password__itemHead}>
                  <label>Confirm </label></div>
                <input type="password" />
              </div>
              <ButtonForm className={styles.password__btn} title={'Save'} />
            </form>

          </div>
        </TabPanel>
        <TabPanel selectedClassName={styles.tab__panelSelected} className={styles.tab__panel}>
          <div className={clsx(styles.fa, styles.tab__content)}>
            {!nextStep && (
              <div className={styles.stepOne}>
                <div className={styles.fa__apps}>
                  <Link to='/' className={styles.app}>
                    Google Play
                    <span>download app</span>
                  </Link>
                  <Link to='/' className={styles.app}>
                    AppStore
                    <span>download app</span>
                  </Link>
                </div>
                <div className={styles.fa__row}>
                  <div className={styles.qr}>
                    <div className={styles.qr__icon}>
                      <img src={qrImg} alt="qr" />
                    </div>
                    <div className={styles.qr__code}>
                      <span>A1ssc2354c3sc35s1c</span>
                      <button className={styles.qr__btn} type='button'>copy</button>
                    </div>
                  </div>
                  <div className={styles.fa__content}>
                    <div className={styles.fa__text}>
                      <p>pScan the key or enter it manually into your two-factor authentication application. We recommend using the Ggoogle 2FA app.</p>

                      <p> Attention! Be sure to keep your private key in a safe place. If the key is lost, there is no access to the smartphone, or for other reasons, access to the account can only be restored through a repeated identity verification procedure.</p>
                    </div>
                    <div className="desktop">
                      <button type='button' className={styles.fa__next} onClick={() => setNextStep(true)}>Next step</button>
                    </div>
                    <div className="mobile">
                      <div className={styles.fa__bottom}>

                        <ButtonForm className={styles.identity__btn} title={'Next step'} handleClick={() => setNextStep(true)} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {nextStep && (
              <div className={clsx(styles.stepTwo, nextStep ? styles.showNextStep : null)}>
                <div className={styles.stepTwo__inner}>
                  <div className={styles.generateCode}>
                    <div className={styles.generateCode__text}><span>Enter the generated six-digit one-time code</span></div>
                    <div className={styles.generateCode__inputs}>
                      <input type="text" /><input type="text" /><input type="text" /><input type="text" /><input type="text" /><input type="text" />
                    </div>
                  </div>
                  <div className="desktop">

                    <button type='button' className={clsx(styles.fa__next, styles.fa__btnEnd)}>Enable 2FA</button>
                  </div>
                  <div className="mobile">
                    <div className={styles.fa__bottom}>

                      <ButtonForm className={styles.identity__btn} title={'Enable 2FA'} />
                    </div>
                  </div>
                  <div className={styles.stepTwo__bottom}>
                    <div className="desktop">
                      <button type='button' className={styles.stepTwo__back} onClick={() => setNextStep(false)}>Go back</button>
                    </div>
                    <div className="mobile">
                      <ButtonForm className={styles.identity__btn} title={'Go back'} handleClick={() => () => setNextStep(false)} />
                    </div>

                  </div>
                </div>
              </div>
            )}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default TabSecurity