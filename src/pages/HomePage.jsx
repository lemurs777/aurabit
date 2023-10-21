import React from 'react'
import HomeHero from '../components/HomeHero'
import HowStart from '../components/HowStart/HowStart'
import Investment from '../components/Investment/Investment'
import Why from '../components/Why'
import Bounty from '../components/Bounty'
import Banner from '../components/Banner'
import Partners from '../components/Partners'
import SocialMedia from '../components/SocialMedia'

const HomePage = () => {
	return (
		<main className='main main--home'>
			<div className='home'>
				<div className='decor'></div>
				<HomeHero />
				<HowStart />
				<Investment />
				<Why />
				<Bounty />
				<Banner
					btnText={'JOIN NOW'}
					text={'Use advanced technologies to achieve financial success.'}
					title={'Start earning today'}
				/>
				<Partners />
				<SocialMedia />
			</div>
		</main>
	)
}

export default HomePage
