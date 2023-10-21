import React from 'react'
import clsx from 'clsx'

import styles from './Title.module.scss'

const Title = ({ text, decor, className }) => {
	return (
		<h2 className={clsx(styles.title, className)}>
			{text} <span>{decor}</span>
		</h2>
	)
}

export default Title
