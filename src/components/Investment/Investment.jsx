import React from 'react'

import Title from '../Title'

import investmentImg from '../../assets/images/investment.png'

import styles from './Investment.module.scss'
import ButtonGradientSm from '../Buttons/ButtonGradientSm'

const Investment = () => {
	return (
		<div className={styles.investment}>
			<div className='container'>
				<div className={styles.investment__inner}>
					<Title text={'Investments'} className={styles.investment__title} />
					<div className={styles.investment__row}>
						<div className={styles.investment__content}>
							<h3 className={styles.investment__subtitle}>
								Aurabit offer an advanced service to meet the needs of clients.
							</h3>
							<div className={styles.investment__text}>
								<p>
									With us, you don't need to be an expert in stock trading,
									commodities, and currencies. We provide tools and resources
									for fully automated trading. Our platform is designed to be
									convenient, intuitive, and reliable, offering you the most
									enjoyable and straightforward path to financial success.
								</p>
							</div>
							<div className={styles.investment__btns}>
								<ButtonGradientSm
									title={'Read more'}
									className={styles.investment__btn}
								/>
								<ButtonGradientSm
									title={'Invest now'}
									className={styles.investment__btn}
								/>
							</div>
						</div>
						<div className={styles.investment__img}>
							<img src={investmentImg} alt='investment' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Investment
