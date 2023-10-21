import React from 'react'
import Filter from '../components/Filter'
import ArticleItem from '../components/ArticleItem'

import slideImg from '../assets/images/page/news/news.png'

const NewsPage2 = () => {
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
  return (
    <main className='main main--news'>
      <div className='news2'>
        <div className="container">
          <div className="news__head">
            <h1 className='news__title'>Aurabit news</h1>
          </div>
          <div className="news__filter">
            <Filter name={'Filter :'} />
          </div>
          <div className="news__list">
            {news.map(item => (
              <ArticleItem key={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default NewsPage2