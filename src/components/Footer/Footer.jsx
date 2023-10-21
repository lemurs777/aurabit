import React from 'react'

import styles from './Footer.module.scss'
import Logo from '../Logo'
import Subscribe from '../Subscribe'
import { Link } from 'react-router-dom'

const Footer = () => {
  const itemsList = [
    {
      title: 'Links',
      links: [
        {
          name: 'Home',
          path: '/',
        },
        {
          name: 'About Us',
          path: '/',
        },
        {
          name: 'Investments',
          path: '/',
        },
        {
          name: 'Bounty',
          path: '/',
        },
        {
          name: 'Contacts',
          path: '/',
        },
        {
          name: 'News',
          path: '/',
        },
      ],
    },
    {
      title: 'Legal',
      links: [
        {
          name: 'Documents',
          path: '/',
        },
        {
          name: 'Terms of use',
          path: '/',
        },
        {
          name: 'Terms & Conditions',
          path: '/',
        },
        {
          name: 'Privacy Policy',
          path: '/',
        },
        {
          name: 'Cookie policy',
          path: '/',
        },
      ],
    },
    {
      title: 'Media',
      links: [
        {
          name: 'Linked In',
          path: '/',
        },
        {
          name: 'Instagram',
          path: '/',
        },
        {
          name: 'YouTube',
          path: '/',
        },
        {
          name: 'TiK Tok',
          path: '/',
        },
        {
          name: 'Facebook',
          path: '/',
        },
      ],
    },
  ]
  return (
    <footer className={styles.footer}>
      <div className={styles.decor}></div>
      <div className={styles.footer__top}>
        <div className='container'>
          <div className={styles.footer__content}>
            <div className={styles.footer__left}>
              <div className={styles.footer__logo}>
                <Logo />
              </div>
              <div className={styles.subscribe}>
                <div className={styles.subscribe__title}>
                  Subscribe to our newsletter
                </div>
                <Subscribe btnText={'Subscribe'} placeholder={'Email address'} />
                <div className={styles.subscribe__text}>
                  <span>* Only important updates and offers</span>
                </div>
              </div>
            </div>
            <div className={styles.footer__right}>
              {itemsList.map(item => (
                <div className={styles.footer__col} key={item.title}>
                  <h6 className={styles.itemTitle}>{item.title}</h6>
                  <ul className={styles.item__list}>
                    {item.links.map(link => (
                      <li key={link.name}>
                        <Link className={styles.link} to={link.path}>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer__copyright}>
        <span>©Aurabit International Limited 2023</span>
      </div>
    </footer>
  )
}

export default Footer
