import React from 'react'
import cn from 'classnames'

import { LineProps } from './Line.interface'
import styles from './Line.module.scss'


const Line: React.FC<LineProps> = ({ orientation = 'horizontal' }) => {
	return (
		<div 
			className={cn(
				styles.line,
				{ [styles[`line_${orientation}`]]: orientation !== 'horizontal' }
			)} 
		/>
	)
}

export default Line
