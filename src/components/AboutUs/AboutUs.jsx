import React from 'react'

import styles from './AboutUs.module.scss'

import Title from '../Title'

import { ReactComponent as PlayIcon } from '../../assets/images/svg/play.svg'
import playImg from '../../assets/images/page/about/frame.png'
import ButtonGradientSm from '../Buttons/ButtonGradientSm'
import bussinesImg from '../../assets/images/page/about/bussiness_model.png'
import achievementsImg from '../../assets/images/page/about/acchivements_and_goals.png'
import approachImg from '../../assets/images/page/about/cloent.png'
import clsx from 'clsx'

const AboutUs = () => {
  const aboutList = [
    {
      title: 'Bussiness model',
      text: `<p>Aurabit utilizes corporate resources, institutional funds, and online investors' capital to trade on financial markets.</p>
      <p>The company's marketing takes into account the interests of all parties, ensuring that the client sees the final profit in their wallet after all settlements have been made.</p>
      <p>To ensure a stable and reliable income, we direct investors' funds into individually formed pools (exchange accounts) for each client, which are managed through the decentralized Aurabit management system. As a result, the money of each of our clients and their profits are stored separately, ensuring the targeted use of client funds.</p>`,
      img: bussinesImg,
    },
    {
      title: 'Achievements and goals',
      text: `
      <p>Before entering the international market and launching an online investment service, we achieved stability in our corporate processes and sustainable profits using our own assets and those of institutional investors.
</p>
<p>Our main goals are to expand the business on all continents, scale the business and multiply the number of satisfied customers.</p>`,
      img: achievementsImg,
    },
    {
      title: 'Client-Centric Approach',
      text: `<p>We place our clients at the heart of everything we do. We believe that every investor deserves personalized attention and tailored solutions.</p>
      <p>Whether you are a seasoned trader or a novice investor, our dedicated team of professionals will work closely with you to understand your unique goals, risk tolerance, and investment preferences. By fostering strong relationships built on trust and transparency, we ensure that your financial needs are met effectively.</p>
      `,
      img: approachImg,
    },
  ]
  return (
    <div className={styles.about}>
      <div className='container'>
        <Title text={'About us'} className={styles.about__title} />
        <div className={styles.video}>
          <div className={styles.video__row}>
            <div className={styles.video__content}>
              <div className={styles.video__text}>
                <p>
                  Aurabit is a cutting-edge investment company operating in the
                  exciting world of financial markets. With a solid foundation
                  based on artificial intelligence and the invaluable experience
                  of industry leaders, we provide a wide range of services
                  designed to empower our clients in their investment endeavors.
                  As a British company, we pride ourselves on serving clients
                  around the world and offering unrivaled financial solutions.
                </p>
              </div>
              <ButtonGradientSm className={styles.about__pdf} title={'Download PDF'} />
            </div>
            <div className={styles.video__frame}>
              <img src={playImg} alt='video' />
              <button className={styles.video__play}>
                <PlayIcon />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.about__list}>
          {aboutList.map(item => (
            <div className={styles.item}>
              <div className={styles.item__content}>
                <h3 className={clsx(styles.item__title, 'text-gradient')}>
                  {item.title}
                </h3>
                <div className="mobile">

                  <div className={styles.item__img}>
                    <img src={item.img} alt={item.title} />
                  </div>
                </div>
                <div
                  className={styles.item__text}
                  dangerouslySetInnerHTML={{ __html: item.text }}
                ></div>
              </div>
              <div className="desktop">

                <div className={styles.item__img}>
                  <img src={item.img} alt={item.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutUs
