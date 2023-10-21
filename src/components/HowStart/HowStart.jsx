import React from 'react'

import Title from '../Title'

import styles from './HomeStart.module.scss'

import accountImg from '../../assets/images/howStart/registration.svg'
import investImg from '../../assets/images/howStart/invest.svg'
import profitImg from '../../assets/images/howStart/profit.svg'

const HowStart = () => {
	const startItems = [
		{
			title: 'Create an account',
			color: '#0085FF',
			subtext: 'And set your security settings',
			infoText: 'Clients',
			quantity: '3156',
			img: accountImg,
		},
		{
			title: 'Invest',
			color: '#6C2BD9',
			subtext: 'Choose the offer that suits you',
			infoText: 'Investments',
			quantity: '$14M',
			img: investImg,
		},
		{
			title: 'Get profit',
			color: '#9E02C7',
			subtext: 'every 24 hours',
			infoText: 'Paid',
			quantity: '$5,5M',
			img: profitImg,
		},
	]
	return (
		<div className={styles.howStart}>
			<div className='container'>
				<div className={styles.howStart__inner}>
					<Title
						className={styles.howStart__title}
						decor={' earning ?'}
						text={'How to start'}
					/>
					<ol className={styles.howStart__items}>
						{startItems.map(item => (
							<li className={styles.item} key={item.title}>
								<div className={styles.item__head}>
									<div className={styles.item__icon}>
										<img src={item.img} alt={item.title} />
									</div>
									<h5
										className={styles.item__title}
										style={{ color: `${item.color}` }}
									>
										{item.title}
									</h5>
									<div className={styles.item__subtext}>{item.subtext}</div>
								</div>
								<div className={styles.item__bottom}>
									<div className={styles.item__info}>
										<span>{item.infoText}</span>
									</div>
									<div className={styles.item__quantity}>
										<span>{item.quantity}</span>
									</div>
								</div>
							</li>
						))}
					</ol>
				</div>
			</div>
		</div>
	)
}

export default HowStart
