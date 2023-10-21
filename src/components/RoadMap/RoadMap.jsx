import React from 'react'

import styles from './RoadMap.module.scss'
import Title from '../Title'

const RoadMap = () => {
	return (
		<div className={styles.roadmap}>
			<Title className={styles.roadmap__title} decor={'Roadmap'} />
			<div className={styles.roadmap__map}></div>
		</div>
	)
}

export default RoadMap
