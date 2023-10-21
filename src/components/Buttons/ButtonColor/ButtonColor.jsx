import React from 'react'
import styles from './ButtonColor.module.scss'
import clsx from 'clsx'
const ButtonColor = ({ children, className }) => {
	return (
		<button className={clsx(styles.btn, className)} type='button'>
			{children}
		</button>
	)
}

export default ButtonColor
