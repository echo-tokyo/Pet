import { useAppDispatch } from '../../../store/hooks'
import { slideRemove } from '../../../store/projects/projects.slice'
import { IProjects } from '../../../types/types'

interface IProps {
	currentProject: IProjects | undefined
}

const ModalProjDel:React.FC<IProps> = ({currentProject}) => {
	const dispatch = useAppDispatch()
	
	const slideSelect = (e:React.MouseEvent<HTMLImageElement, MouseEvent>) => {
		const target = e.target as HTMLElement
		document.querySelectorAll('.selected').forEach(el => el.classList.remove('selected'))
		target.classList.toggle('selected')
	}
	
	const slideDelete = (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const target = document.querySelector('.selected')
		dispatch(slideRemove([currentProject, target?.id]))
		document.querySelectorAll('.selected').forEach(el => el.classList.remove('selected'))
	}

	return (
		<div className='modal'>
			<div className='modal__items'>
				<h3 className='modal__items-title'>Удалите слайд</h3>
				<form action='' className='modal__items-select' onSubmit={(e) => slideDelete(e)}>
					<div className="modal__slides">{currentProject?.slides?.map((el, index) => <img key={index} id={index.toString()} src={el} onClick={(e) => slideSelect(e)}/>)}</div>
					<input type='submit' name='' id='' value='Удалить' />
				</form>
			</div>
		</div>
	)
}

export default ModalProjDel