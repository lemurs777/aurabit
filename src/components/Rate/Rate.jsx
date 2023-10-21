import React from 'react'
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs'
import styles from './Rate.module.scss'
import clsx from 'clsx'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import ButtonColor from '../Buttons/ButtonColor'
const Rate = () => {
  const rateListShortTerm = [
    {
      tariff: 'Basic',
      percent: `1.1% <span>daily</span>`,
      price: `$<span>10</span>&nbsp;<span>-</span>&nbsp;$<span>500</span>`,
      serviceList: [
        'Daily accruals',
        'Support 24/7',
        'Instant Payouts',
        'Deposit is returned ',
      ],
    },
    {
      tariff: 'ADVANCED',
      percent: `1.3% <span>daily</span>`,
      price: `$<span>10</span>&nbsp;<span>-</span>&nbsp;$<span>500</span>`,
      type: 'popular',
      label: '- Most popular plan -',
      serviceList: [
        'Daily accruals',
        'Support 24/7',
        'Instant Payouts',
        'Deposit is returned ',
      ],
    },
    {
      tariff: 'PRO',
      percent: `1.6% <span>daily</span>`,
      price: `$<span>10</span>&nbsp;<span>-</span>&nbsp;$<span>500</span>`,
      serviceList: [
        'Daily accruals',
        'Support 24/7',
        'Instant Payouts',
        'Deposit is returned ',
        'Special offers',
      ],
    },
    {
      tariff: 'EXCLUSIVE',
      percent: `2% <span>daily</span>`,
      price: `$<span>10</span>&nbsp;<span>-</span>&nbsp;$<span>500</span>`,
      serviceList: [
        'Daily accruals',
        'Support 24/7',
        'Instant Payouts',
        'Deposit is returned ',
        'Special offers',
        'Bonus program +',
      ],
    },
  ]
  const rateListLongTerm = [
    {
      tariff: 'Basic',
      percent: `1.2% <span>daily</span>`,
      price: `$<span>10</span>&nbsp;<span>-</span>&nbsp;$<span>500</span>`,
      serviceList: [
        'Daily accruals',
        'Support 24/7',
        'Instant Payouts',
        'Deposit is returned ',
      ],
    },
    {
      tariff: 'ADVANCED',
      percent: `1.4% <span>daily</span>`,
      price: `$<span>10</span>&nbsp;<span>-</span>&nbsp;$<span>500</span>`,
      type: 'popular',
      label: '- Most popular plan -',
      serviceList: [
        'Daily accruals',
        'Support 24/7',
        'Instant Payouts',
        'Deposit is returned ',
      ],
    },
    {
      tariff: 'PRO',
      percent: `1.7% <span>daily</span>`,
      price: `$<span>10</span>&nbsp;<span>-</span>&nbsp;$<span>500</span>`,
      serviceList: [
        'Daily accruals',
        'Support 24/7',
        'Instant Payouts',
        'Deposit is returned ',
        'Special offers',
      ],
    },
    {
      tariff: 'EXCLUSIVE',
      percent: `2.2% <span>daily</span>`,
      price: `$<span>10</span>&nbsp;<span>-</span>&nbsp;$<span>500</span>`,
      serviceList: [
        'Daily accruals',
        'Support 24/7',
        'Instant Payouts',
        'Deposit is returned ',
        'Special offers',
        'Bonus program +',
      ],
    },
  ]
  return (
    <div className={styles.rate}>


      <Tabs className={styles.tab}>
        <TabList className={clsx(styles.tab__list)}>
          <Tab
            className={styles.tab__btn}
            selectedClassName={clsx(styles.tab__btnActive)}
          >
            SHORT TERM
          </Tab>
          <Tab
            className={styles.tab__btn}
            selectedClassName={styles.tab__btnActive}
          >
            LONG TERM
          </Tab>
        </TabList>

        <TabPanel>
          {/*<div className={styles.rate__list}>*/}
          <div className={styles.slider}>
            <div className={styles.slider__nav}>
              <button className='rate-prev'><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 -1.57361e-06C8.05888 -2.44269e-06 2.44269e-06 8.05886 1.57361e-06 18C7.04528e-07 27.9411 8.05888 36 18 36C27.9411 36 36 27.9411 36 18C36 8.05886 27.9411 -7.0453e-07 18 -1.57361e-06ZM14.0537 19.8541C12.9375 18.7379 12.9541 16.923 14.0907 15.8274L21.8941 8.30524C22.397 7.82041 22.4117 7.01971 21.9269 6.51678C21.4421 6.01381 20.6413 5.99913 20.1384 6.48395L12.335 14.0062C10.1795 16.0839 10.1479 19.5259 12.2649 21.6429L20.1218 29.4998C20.6158 29.9937 21.4166 29.9937 21.9106 29.4998C22.4046 29.0059 22.4046 28.205 21.9106 27.711L14.0537 19.8541Z" fill="#2C80BC" />
              </svg>
              </button>
              <button className='rate-next'><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05886 27.9411 0 18 0C8.05888 0 0 8.05886 0 18C0 27.9411 8.05888 36 18 36ZM21.9463 16.1459C23.0625 17.2621 23.0459 19.077 21.9094 20.1726L14.1059 27.6948C13.603 28.1796 13.5883 28.9803 14.0731 29.4832C14.5579 29.9862 15.3587 30.0009 15.8616 29.516L23.665 21.9938C25.8205 19.9161 25.8521 16.4741 23.7351 14.3571L15.8782 6.5002C15.3842 6.00626 14.5834 6.00626 14.0894 6.5002C13.5954 6.99415 13.5954 7.79504 14.0894 8.28899L21.9463 16.1459Z" fill="#2C80BC" />
              </svg></button>
            </div>

            <Swiper
              slidesPerView={1}
              className='swiper-rate'
              modules={[Navigation]}
              navigation={

                {
                  prevEl: '.rate-prev',
                  nextEl: '.rate-next'
                }
              }
              breakpoints={{
                768: {
                  slidesPerView: 4
                }
              }}
            >


              {rateListShortTerm.map(item => (
                <SwiperSlide key={item.tariff} className='slide-rate'>
                  <div

                    //modules={[Navigation]}
                    //key={item.tariff}
                    className={clsx(
                      styles.item,
                      item.type ? styles.itemActive : null
                    )}
                  >
                    <div className={styles.item__head}>
                      <div className={styles.item__tariff}>{item.tariff}</div>
                      <div
                        className={styles.item__percent}
                        dangerouslySetInnerHTML={{ __html: item.percent }}
                      ></div>
                      <div
                        className={styles.item__price}
                        dangerouslySetInnerHTML={{ __html: item.price }}
                      ></div>
                    </div>
                    <div className={styles.item__body}>
                      <ul className={styles.item__list}>
                        {item.serviceList.map(list => (
                          <li>{list}</li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.item__bottom}>
                      <ButtonColor>get started</ButtonColor>
                      {item.label && (
                        <div className={styles.item__label}>{item.label}</div>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </TabPanel>
        <TabPanel>
          {/*<div className={styles.rate__list}>*/}
          <div className={styles.slider}>
            <div className={styles.slider__nav}>
              <button className='rate-prev'><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 -1.57361e-06C8.05888 -2.44269e-06 2.44269e-06 8.05886 1.57361e-06 18C7.04528e-07 27.9411 8.05888 36 18 36C27.9411 36 36 27.9411 36 18C36 8.05886 27.9411 -7.0453e-07 18 -1.57361e-06ZM14.0537 19.8541C12.9375 18.7379 12.9541 16.923 14.0907 15.8274L21.8941 8.30524C22.397 7.82041 22.4117 7.01971 21.9269 6.51678C21.4421 6.01381 20.6413 5.99913 20.1384 6.48395L12.335 14.0062C10.1795 16.0839 10.1479 19.5259 12.2649 21.6429L20.1218 29.4998C20.6158 29.9937 21.4166 29.9937 21.9106 29.4998C22.4046 29.0059 22.4046 28.205 21.9106 27.711L14.0537 19.8541Z" fill="#2C80BC" />
              </svg>
              </button>
              <button className='rate-next'><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05886 27.9411 0 18 0C8.05888 0 0 8.05886 0 18C0 27.9411 8.05888 36 18 36ZM21.9463 16.1459C23.0625 17.2621 23.0459 19.077 21.9094 20.1726L14.1059 27.6948C13.603 28.1796 13.5883 28.9803 14.0731 29.4832C14.5579 29.9862 15.3587 30.0009 15.8616 29.516L23.665 21.9938C25.8205 19.9161 25.8521 16.4741 23.7351 14.3571L15.8782 6.5002C15.3842 6.00626 14.5834 6.00626 14.0894 6.5002C13.5954 6.99415 13.5954 7.79504 14.0894 8.28899L21.9463 16.1459Z" fill="#2C80BC" />
              </svg></button>
            </div>

            <Swiper
              slidesPerView={1}
              className='swiper-rate'
              modules={[Navigation]}
              navigation={

                {
                  prevEl: '.rate-prev',
                  nextEl: '.rate-next'
                }
              }
              breakpoints={{
                768: {
                  slidesPerView: 4
                }
              }}
            >


              {rateListLongTerm.map(item => (
                <SwiperSlide key={item.tariff} className='slide-rate'>
                  <div

                    //modules={[Navigation]}
                    //key={item.tariff}
                    className={clsx(
                      styles.item,
                      item.type ? styles.itemActive : null
                    )}
                  >
                    <div className={styles.item__head}>
                      <div className={styles.item__tariff}>{item.tariff}</div>
                      <div
                        className={styles.item__percent}
                        dangerouslySetInnerHTML={{ __html: item.percent }}
                      ></div>
                      <div
                        className={styles.item__price}
                        dangerouslySetInnerHTML={{ __html: item.price }}
                      ></div>
                    </div>
                    <div className={styles.item__body}>
                      <ul className={styles.item__list}>
                        {item.serviceList.map(list => (
                          <li>{list}</li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.item__bottom}>
                      <ButtonColor>get started</ButtonColor>
                      {item.label && (
                        <div className={styles.item__label}>{item.label}</div>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </TabPanel>
      </Tabs>

    </div>
  )
}

export default Rate
