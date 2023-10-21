import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import styles from './Referral.module.scss'
import 'swiper/css'

import speakerImg from '../../assets/images/page/bounty/speaker.png'
import mutualImg from '../../assets/images/page/bounty/mutual.png'
import networkImg from '../../assets/images/page/bounty/network.png'

const Referral = () => {
  const slider = [
    {
      title: 'Recommend Aurabit',
      content:
        "Earn from 7% or more on your partners' investments. Increase your affiliate turnover and your remuneration will also increase",
      img: speakerImg,
    },
    {
      title: 'Expand your partner network',
      content:
        'Build a huge network of partners by attracting active participants. A 5-level referral program will allow you to receive substantial rewards',
      img: networkImg,
    },
    {
      title: 'Mutual benefits!',
      content:
        "It's incredibly easy to interest your referrals in joining Aurabit through your link. Your referrals will receive a 1.5% bonus on all their deposits",
      img: mutualImg,
    },
  ]
  return (
    <div className={styles.referral}>
      <div className='container'>
        <div className={styles.referral__inner}>
          <h2 className={styles.referral__title}>
            Referral <span>program</span>
          </h2>
          <div className={styles.referral__text}>
            <p>
              In addition to investment opportunities, you have the chance to
              earn even more through our generous referral program.
            </p>
          </div>
          <div className={styles.referral__slider}>
            <div className={styles.referral__navs}>
              <button className="referral-prev referral-nav-btn"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="44" viewBox="0 0 26 44" fill="none">
                <path d="M23 42L5 22L23 2" stroke="#848484" stroke-width="6" />
              </svg></button>
              <button className="referral-next referral-nav-btn"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="44" viewBox="0 0 26 44" fill="none">
                <path d="M3 2L21 22L3 42" stroke="#848484" stroke-width="6" />
              </svg></button>
            </div>
            <Swiper
              slidesPerView={1}
              spaceBetween={50}
              modules={[Navigation]}
              className={styles.slider}
              navigation={

                {
                  prevEl: '.referral-prev',
                  nextEl: '.referral-next'
                }
              }
              breakpoints={{
                768: {
                  slidesPerView: 3
                }
              }}
            >
              {slider.map(slide => (
                <SwiperSlide key={slide.title}>
                  <div className={styles.slide}>
                    <div className={styles.slide__img}>
                      <img src={slide.img} alt={slide.title} />
                    </div>
                    <h5 className={styles.slide__title}>{slide.title}</h5>
                    <div className={styles.slide__text}>
                      <p>{slide.content}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Referral
