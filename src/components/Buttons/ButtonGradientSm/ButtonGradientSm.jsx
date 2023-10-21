import clsx from 'clsx'
import React, { ReactNode } from 'react'
import styles from './ButtonGradientSm.module.scss'

const ButtonGradientSm = ({ children, title, className, type = 'button' }) => {
	return (
		<button type={type} className={clsx(styles.btn, className)}>
			<span>{title}</span>
			{children}
		</button>
	)
}

export default ButtonGradientSm
