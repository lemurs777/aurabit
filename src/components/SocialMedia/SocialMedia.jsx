import React from 'react'

import tgImg from '../../assets/images/social/tg.svg'
import youtubeImg from '../../assets/images/social/youtube.svg'
import fbImg from '../../assets/images/social/fb.svg'
import inImg from '../../assets/images/social/in.svg'

import styles from './SocialMedia.module.scss'
import Title from '../Title'
import { Link } from 'react-router-dom'

const SocialMedia = () => {
	const socialList = [
		{
			title: 'TG group >>>',
			text: 'Join the community and discuss news and special offers',
			img: tgImg,
			path: '/',
		},
		{
			title: 'YouTube >>>',
			text: 'News, tutorials, development plans from management and much more',
			img: youtubeImg,
			path: '/',
		},
		{
			title: 'Facebook >>>',
			text: 'Follow the news in the usual format',
			img: fbImg,
			path: '/',
		},
		{
			title: 'Linked In >>>',
			text: 'Looking for a job or want to discuss business? contact us here',
			img: inImg,
			path: '/',
		},
	]
	return (
		<div className={styles.media}>
			<div className='container'>
				<div className={styles.media__inner}>
					<Title
						className={styles.media__title}
						text={'Join our'}
						decor={'Social Media'}
					/>
					<div className={styles.media__text}>
						<p>Stay in touch with us</p>
					</div>
					<ul className={styles.media__list}>
						{socialList.map(item => (
							<li key={item.title}>
								<Link to={item.path} className={styles.item}>
									<div className={styles.item__row}>
										<div className={styles.item__img}>
											<img src={item.img} alt={item.title} />
										</div>
										<div className={styles.item__content}>
											<h5 className={styles.item__title}>{item.title}</h5>
											<div className={styles.item__text}>
												<p>{item.text}</p>
											</div>
										</div>
									</div>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default SocialMedia
