import React from 'react'

import Input from '../UI/Forms/Input'
import Textarea from '../UI/Forms/Textarea'
import ButtonForm from '../Buttons/ButtonForm'

import styles from './ContactForm.module.scss'
import Checkbox from '../UI/Forms/Checkbox'

const ContactForm = () => {
	return (
		<div className={styles.form}>
			<Input label={'Name'} type={'text'} />
			<Input label={'Email'} type='email' />
			<Textarea label={'Message'} />
			<ButtonForm title={'Send message'} />
			<Checkbox
				label={
					'I have read the privacy policy and agree to the processing of my personal data'
				}
			/>
		</div>
	)
}

export default ContactForm
