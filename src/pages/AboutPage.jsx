import React from 'react'

import AboutHero from '../components/AboutHero'
import AboutUs from '../components/AboutUs'
import Banner from '../components/Banner'
import Aura from '../components/Aura/Aura'
import RoadMap from '../components/RoadMap/RoadMap'

const AboutPage = () => {
  return (
    <main className='main main--about'>
      <AboutHero />
      <AboutUs />
      <Banner
        classInner={'about__banner'}
        btnText={'JOIN NOW'}
        title={'Join us'}
        text={'and be part of our common success in achieving financial goals'}
      />
      <Aura />
      <RoadMap />
    </main>
  )
}

export default AboutPage
