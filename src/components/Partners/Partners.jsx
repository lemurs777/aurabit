import React from 'react'

import Title from '../Title'

import alteryx from '../../assets/images/partners/alteryx.png'
import aviva from '../../assets/images/partners/aviva.png'
import carl from '../../assets/images/partners/carl.png'
import digital from '../../assets/images/partners/digital.png'
import dimensional from '../../assets/images/partners/dimensional.png'
import london from '../../assets/images/partners/london.png'
import metamash from '../../assets/images/partners/metamash.png'
import neoteric from '../../assets/images/partners/neoteric.png'
import polychain from '../../assets/images/partners/polychain.png'
import renaissance from '../../assets/images/partners/renaissance.png'

import styles from './Partners.module.scss'
const partnerList = [
	alteryx,
	aviva,
	carl,
	digital,
	dimensional,
	london,
	metamash,
	neoteric,
	renaissance,
	polychain,
	alteryx,
	aviva,
	carl,
	digital,
	dimensional,
	london,
	metamash,
	neoteric,
	renaissance,
	polychain,
]
const Partners = () => {
	return (
		<div className={styles.partners}>
			<div className='container'>
				<div className={styles.partners__head}>
					<Title text={'Partners'} className={styles.partners__title} />
					<div className={styles.partners__label}>
						<span>24</span> Companies
					</div>
				</div>
			</div>
			{/*<marquee behavior='' direction=''>*/}
			<div className={styles.partners__items}>
				<div className={styles.item}>
					{partnerList.map((item, index) => (
						<img key={index} src={item} alt='partners' />
					))}
				</div>
			</div>
			{/*</marquee>*/}
		</div>
	)
}

export default Partners
