import React from 'react'

import styles from './ScrollUp.module.scss'

import { ReactComponent as ScrollIcon } from '../../assets/images/scroll.svg'

const ScrollUp = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
	}
	return (
		<button
			className={styles.scroll}
			type='button'
			onClick={() => scrollToTop()}
		>
			<ScrollIcon />
		</button>
	)
}

export default ScrollUp
