import React from 'react'

import styles from './Aura.module.scss'

import auraImg from '../../assets/images/page/about/aura.png'
import Title from '../Title'

const Aura = () => {
	return (
		<div className={styles.aura}>
			<div className='container'>
				<Title text={'Aura-insurance'} />
				<div className={styles.aura__row}>
					<div className={styles.aura__img}>
						<img src={auraImg} alt='aura' />
					</div>
					<div className={styles.aura__content}>
						<div className={styles.aura__text}>
							<p>
								Despite the fact that our trading strategies and proprietary
								technologies enable us to execute a significantly higher number
								of profitable trades compared to loss-making ones, we always
								acknowledge the risks that may arise in the path of investment.{' '}
							</p>
							<p>
								Therefore, we have our own insurance fund called
								Aaura-insurance, which currently amounts to $*****. The fund
								continuously accumulates a portion of the company's profits and
								serves as a safety cushion in case some trades result in various
								losses.
							</p>
							<p>
								Our agreements with clients are the most valuable asset of the
								company, defining our reputation. We take the responsibility of
								covering any loss-making trades from the Aaur-Insurance fund to
								ensure that our clients receive the expected returns when
								establishing their investment portfolios.
							</p>
						</div>
						<div className={styles.aura__label}>
							Insurance fund <span>$2.5M</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Aura
