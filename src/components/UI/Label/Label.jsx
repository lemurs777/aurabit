import React from 'react'
import styles from './Label.module.scss'
import clsx from 'clsx'
const Label = ({ className, children }) => {
	return <div className={clsx(styles.label, className)}>{children}</div>
}

export default Label
