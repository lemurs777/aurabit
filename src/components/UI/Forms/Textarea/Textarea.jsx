import React from 'react'
import styles from './Textarea.module.scss'

const Textarea = ({ label, placeholder }) => {
	return (
		<div className={styles.textarea}>
			<label>{label}</label>
			<textarea placeholder={placeholder} />
		</div>
	)
}

export default Textarea
