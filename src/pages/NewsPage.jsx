import React from 'react'
import Filter from '../components/Filter'
import slideImg from '../assets/images/page/news/news.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import ArticleItem from '../components/ArticleItem'
import NewsBlock from '../components/NewsBlock/NewsBlock'
import Textarea from '../components/UI/Forms/Textarea'
import Checkbox from '../components/UI/Forms/Checkbox'

import mailImg from '../assets/images/page/news/mail.png'
import Slider from '../components/Profile/Dashboard/Slider/Slider'
const NewsPage = () => {
  const news = [
    {
      img: slideImg,
      title: 'In addition to invIn addition to inv',
      text: `In addition to investment opportunities, you have the chance to earn even more through our generous referral program.
            the chance to earn even more through our generous referral program.
            to earn even more through our generous referral program.
            to earn... `,
      date: '10 july 2023',
      path: '/',
    },
    {
      img: slideImg,
      title: 'In addition to invIn addition to inv',
      text: `In addition to investment opportunities, you have the chance to earn even more through our generous referral program.
            the chance to earn even more through our generous referral program.
            to earn even more through our generous referral program.
            to earn... `,
      date: '10 july 2023',
      path: '/',
    },
    {
      img: slideImg,
      title: 'In addition to invIn addition to inv',
      text: `In addition to investment opportunities, you have the chance to earn even more through our generous referral program.
            the chance to earn even more through our generous referral program.
            to earn even more through our generous referral program.
            to earn... `,
      date: '10 july 2023',
      path: '/',
    },
    {
      img: slideImg,
      title: 'In addition to invIn addition to inv',
      text: `In addition to investment opportunities, you have the chance to earn even more through our generous referral program.
            the chance to earn even more through our generous referral program.
            to earn even more through our generous referral program.
            to earn... `,
      date: '10 july 2023',
      path: '/',
    },
  ]
  const checkboxList = [
    { value: 'All', label: 'All' },
    { value: 'Crypto', label: 'Crypto' },
    { value: 'Corporate', label: 'Corporate' },
    { value: 'Updates', label: 'Updates' },
    { value: 'Promotions', label: 'Promotions' },
    { value: 'Tutorials', label: 'Tutorials' },
  ]
  return (
    <main className='main main--news'>
      <section className='news'>
        <div className='container'>
          <div className="news__head">
            <h1 className='news__title'>Aurabit news</h1>
          </div>
          <div className="news__filter">
            <Filter name={'Filter :'} />
          </div>
          <div className='news__slider'>
            <div className='news__sliderNav'>
              <button className='news-prev'><svg xmlns="http://www.w3.org/2000/svg" width="33" height="36" viewBox="0 0 33 36" fill="none">
                <path d="M30 32L8.5 17L30 4" stroke="white" stroke-opacity="0.3" stroke-width="9" />
              </svg> </button>
              <button className='news-next'><svg xmlns="http://www.w3.org/2000/svg" width="33" height="36" viewBox="0 0 33 36" fill="none">
                <path d="M3 4L24.5 19L3 32" stroke="white" stroke-opacity="0.3" stroke-width="9" />
              </svg></button>
            </div>

            <Swiper
              spaceBetween={30}
              slidesPerView={2.8}
              modules={[Navigation]}
              className='news-swiper'
              navigation={{
                prevEl: '.news-prev',
                nextEl: '.news-next'
              }}
            >
              {news.map((item, index) => (
                <SwiperSlide key={index}>
                  <ArticleItem item={item} />
                </SwiperSlide>
              ))}
            </Swiper>

          </div>
          <div className="news__articles">
            {news.map((item, index) => (
              <ArticleItem key={index} item={item} className='news-article' />
            ))}
          </div>
          <div className="news__articles">
            <NewsBlock btnText={'Subscribe'} placeholder={'Email address'} title={'Would you like to read our news ?'} text={'Choose a category and subscribe to the newsletter'}>
              <div className="news-block">

                <div className="news-block__checkboxes">
                  {checkboxList.map(item => (
                    <Checkbox key={item.value} label={item.label} className='news__checkbox' />
                  ))}
                </div>
                <div className="news-block__img">
                  <img src={mailImg} alt="mail" />
                </div>

              </div>
            </NewsBlock>
            <NewsBlock btnText={'Send'} placeholder={'Link to article (optional)'} title={'Would you like to suggest news?'} text={'Send a link to the news or its text. Be sure to indicate the source.'} >
              <Textarea placeholder={'Description of the news or its text'} />
            </NewsBlock>
          </div>
        </div>
      </section>
    </main >
  )
}

export default NewsPage
