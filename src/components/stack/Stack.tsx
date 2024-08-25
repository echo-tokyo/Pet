import { useAppSelector } from '../../store/hooks'
import './stack.scss'
import StackItem from './stackItem/StackItem'

const Stack:React.FC = () => {
	const stackList = useAppSelector(state => state.stack.stackList)
	return (
		<div className="stack">
			<div className="stack__text">
				<h2 className="stack__text-title">Стэк технологий</h2>
				<p className="stack__text-subtitle">Основной набор инструментов, который помогает мне <br /> в разработке веб-приложений</p>
			</div>
			<div className="stack__items">
				{stackList.map(el => <StackItem key={el.id} tech={el}/>)}
			</div>
		</div>
	)
}

export default Stack