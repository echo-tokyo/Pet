import './stack.scss'
import { IStack } from '../../types/types'
import StackItem from './stackItem/StackItem'

interface ITechsList {
	techs: IStack[]
}

const Stack:React.FC<ITechsList> = (props) => {
	const {techs} = props
	return (
		<div className="stack">
			<div className="stack__text">
				<h2 className="stack__text-title">Стэк технологий</h2>
				<p className="stack__text-subtitle">Основной набор инструментов, который помогает мне <br /> в разработке веб-приложений</p>
			</div>
			<div className="stack__items">
				{techs.map(el => <StackItem key={el.id} tech={el}/>)}
			</div>
		</div>
	)
}

export default Stack