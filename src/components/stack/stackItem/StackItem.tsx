import React from 'react'
import { IStack } from '../../../types/types'

interface ITechItem {
	tech: IStack
}

const StackItem:React.FC<ITechItem> = (props) => {
	const {tech} = props
	return (
		<div className="stack__item">
			<img src={tech.image} alt={tech.name} />
			<h3 className="stack__item-desc">{tech.name}</h3>
		</div>
	)
}

export default StackItem