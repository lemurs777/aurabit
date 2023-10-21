import React from 'react'
import clsx from 'clsx'

import styles from './Block.module.scss'

import ButtonGradientSm from '../Buttons/ButtonGradientSm'

const Block = ({
	classNameTitle,
	gradientTitle,
	title,
	textBg,
	children,
	btnText,
	img,
	classNameRow,
}) => {
	return (
		<div className={styles.block}>
			<div className='container'>
				<h2 className={clsx(styles.block__title, classNameTitle)}>
					{gradientTitle} <span>{title}</span>
				</h2>
				<div className={clsx(styles.block__row, classNameRow)}>
					<div className={styles.block__col}>
						<div className={styles.block__textBg}>
							<p>{textBg}</p>
						</div>
						<div className={styles.block__text}>{children}</div>
						<ButtonGradientSm title={btnText} className={styles.block__btn} />
					</div>
					<div className={styles.block__img}>
						<img src={img} alt='img' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Block
