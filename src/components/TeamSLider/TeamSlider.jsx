import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import avatarImg from '../../assets/images/avatar/avatar.jpg'

import { ReactComponent as TgIcon } from '../../assets/images/social/tg.svg'
import { ReactComponent as MailIcon } from '../../assets/images/social/mail.svg'

import 'swiper/css'
import styles from './TeamSlider.module.scss'
import { Link } from 'react-router-dom'
const TeamSlider = () => {
  const team = [
    {
      title: 'Joe Biden',
      profession: 'President of the U.S.A',
      img: avatarImg,
      social: [{ icon: <TgIcon /> }, { icon: <MailIcon /> }],
    },
    {
      title: 'Joe Biden',
      profession: 'President of the U.S.A',
      img: avatarImg,
      social: [{ icon: <TgIcon /> }, { icon: <MailIcon /> }],
    },
    {
      title: 'Joe Biden',
      profession: 'President of the U.S.A',
      img: avatarImg,
      social: [{ icon: <TgIcon /> }, { icon: <MailIcon /> }],
    },
    {
      title: 'Joe Biden',
      profession: 'President of the U.S.A',
      img: avatarImg,
      social: [{ icon: <TgIcon /> }, { icon: <MailIcon /> }],
    },
  ]
  return (
    <div className={styles.team}>
      <div className={styles.team__navs}>

        <button className="team-prev referral-nav-btn"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="44" viewBox="0 0 26 44" fill="none">
          <path d="M23 42L5 22L23 2" stroke="#848484" stroke-width="6" />
        </svg></button>
        <button className="team-next referral-nav-btn"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="44" viewBox="0 0 26 44" fill="none">
          <path d="M3 2L21 22L3 42" stroke="#848484" stroke-width="6" />
        </svg></button>
      </div>
      <Swiper spaceBetween={25} slidesPerView={1}

        modules={[Navigation]}
        navigation={

          {
            prevEl: '.team-prev',
            nextEl: '.team-next'
          }
        }
        breakpoints={{
          768: {
            slidesPerView: 4
          }
        }}
      >
        {team.map(item => (
          <SwiperSlide>
            <div className={styles.slide}>
              <div className={styles.slide__img}>
                <img src={item.img} alt={item.title} />
              </div>
              <div className={styles.slide__content}>
                <h6 className={styles.slide__title}>{item.title}</h6>
                <div className={styles.slide__text}>
                  <span>{item.profession}</span>
                </div>
              </div>
              <ul className={styles.slide__social}>
                {item.social.map((social, index) => (
                  <li key={index} className={styles.slide__icon}>
                    <Link>{social.icon}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  )
}

export default TeamSlider
