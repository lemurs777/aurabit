import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import clsx from 'clsx'
import styles from './Slider.module.scss'
import kyc1Img from '../../../../assets/images/kyc_vidget.png'
import kyc2Img from '../../../../assets/images/kyc_vidget-2.png'
import kyc3Img from '../../../../assets/images/kyc_vidget-3.png'
import kyc4Img from '../../../../assets/images/kyc_vidget-4.png'
import kyc5Img from '../../../../assets/images/kyc_vidget-5.png'
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/navigation'
const Slider = () => {
  const slider = [
    {
      image: kyc1Img,
      text: 'Go through the identity verification procedure to secure your funds by 100% and restore access in case of loss of login data.',
      button: 'Identity verification',
      path: '/'
    },
    {
      image: kyc2Img,
      text: 'Two-factor authentication and a payment pincode is a great way to protect your account and payments from unauthorized access with an additional password.',
      button: 'Identity verification',
      path: '/'
    },
    {
      image: kyc3Img,
      text: 'Share your achievements in Aurabit with your loved ones and get a bonus. Attract more investments and earn solid bonuses.',
      button: 'Identity verification',
      path: '/'
    },
    {
      image: kyc4Img,
      text: 'Need advice? Our managers are always online. Write to our chat or use the knowledge base to find answers to your questions',
      button: 'Identity verification',
      path: '/'
    },
    {
      image: kyc5Img,
      text: 'Get bonuses for the experience of using the platform + 2% to your first deposit',
      button: 'Identity verification',
      path: '/'
    },
  ]
  return (
    <div className={styles.slider}>
      <Swiper
        className={styles.slider__swiper}
        slidesPerView={1}
        modules={[Navigation]}
        navigation={
          {
            nextEl: '.dashboard__btnNext',
            prevEl: '.dashboard__btnPrev'
          }
        }
      >
        {slider.map((slide, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div className={styles.slide__img}>
              <img src={slide.image} alt="slide" />
            </div>
            <div className={styles.slide__text}>
              <p>{slide.text}</p>
            </div>
            <Link to={slide.path} className={styles.slide__link}>{slide.button}</Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.slider__nav}>
        <button type='button' className={'slide-btn slide-btn--prev dashboard__btnPrev'}></button>
        <button type='button' className={'slide-btn slide-btn--next dashboard__btnNext'}></button>
      </div>
    </div>
  )
}

export default Slider