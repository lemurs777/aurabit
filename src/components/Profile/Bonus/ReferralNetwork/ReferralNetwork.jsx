import React from 'react'
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs'
import clsx from 'clsx'
import styles from './ReferralNetwork.module.scss'
import avatarImg from '../../../../assets/images/avatar/avatar-2.jpg'
const ReferralNetwork = () => {
  const users = [
    {
      avatar: avatarImg,
      title: 'Huesos Ebony',
      date: 'July 03,2023',
      bonus: '$16'
    },
    {
      avatar: avatarImg,
      title: 'Huesos Ebony',
      date: 'July 03,2023',
      bonus: '$16'
    },
    {
      avatar: avatarImg,
      title: 'Huesos Ebony',
      date: 'July 03,2023',
      bonus: '$16'
    },
  ]
  return (
    <div className={styles.network}>
      <div className={styles.network__inner}>
        <div className={styles.network__head}>
          <h3 className={styles.network__title}>My referral network</h3>
        </div>
        <Tabs className={styles.tab}>
          <TabList className={clsx(styles.tab__list)}>
            <Tab
              className={styles.tab__btn}
              selectedClassName={clsx(styles.tab__btnActive)}
            >
              1st level
            </Tab>
            <Tab
              className={styles.tab__btn}
              selectedClassName={styles.tab__btnActive}
            >
              2nd level
            </Tab>
            <Tab
              className={styles.tab__btn}
              selectedClassName={styles.tab__btnActive}
            >
              3rd level
            </Tab>
          </TabList>

          <TabPanel className={styles.tab__content} selectedClassName={styles.tab__contentSelected}>
            <table>
              <thead>
                <tr>
                  <th>User</th>
                  <th className='hideText desktop'>Nickname</th>
                  <th className={styles.table__date}>Join date</th>
                  <th>Bonus</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr>
                    <td className='desktop'><img src={user.avatar} alt={user.title} /></td>
                    <td className={styles.table__name}>{user.title}</td>
                    <td className={styles.table__date}>{user.date}</td>
                    <td>{user.bonus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={styles.tab__nav}>
              <button className={clsx(styles.tab__arrow, 'slide-btn')}></button>
              <button className={clsx(styles.tab__arrow, 'slide-btn slide-btn--next')}></button>
            </div>
          </TabPanel>
          <TabPanel className={styles.tab__content} selectedClassName={styles.tab__contentSelected}>
            <table>
              <thead>
                <tr>
                  <th>User</th>
                  <th className='hideText'>Nickname</th>
                  <th>Join date</th>
                  <th>Bonus</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td><img src={user.avatar} alt={user.title} /></td>
                    <td>{user.title}</td>
                    <td>{user.date}</td>
                    <td>{user.bonus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={styles.tab__nav}>
              <button className={clsx(styles.tab__arrow, 'slide-btn')}></button>
              <button className={clsx(styles.tab__arrow, 'slide-btn slide-btn--next')}></button>
            </div>
          </TabPanel>
          <TabPanel className={styles.tab__content} selectedClassName={styles.tab__contentSelected}>
            <table>
              <thead>
                <tr>
                  <th>User</th>
                  <th className='hideText'>Nickname</th>
                  <th>Join date</th>
                  <th>Bonus</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr>
                    <td><img src={user.avatar} alt={user.title} /></td>
                    <td>{user.title}</td>
                    <td>{user.date}</td>
                    <td>{user.bonus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={styles.tab__nav}>
              <button className={clsx(styles.tab__arrow, 'slide-btn')}></button>
              <button className={clsx(styles.tab__arrow, 'slide-btn slide-btn--next')}></button>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}

export default ReferralNetwork