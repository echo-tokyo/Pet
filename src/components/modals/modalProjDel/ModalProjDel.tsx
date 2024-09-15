import { IProjects } from '../../../types/types'

interface IProps {
	currentProject: IProjects | undefined
}

const ModalProjDel:React.FC<IProps> = ({currentProject}) => {
	const slideSelect = (e:React.MouseEvent<HTMLImageElement, MouseEvent>) => {
		console.log(e.target)
	}
	return (
		<div className='modal'>
			<div className='modal__items'>
				<h3 className='modal__items-title'>Удалите слайд</h3>
				<form action='' className='modal__items-select'>
					<div className="modal__slides">{currentProject?.slides?.map((el, index) => <img key={index} src={el} onClick={(e) => slideSelect(e)}/>)}</div>
					<input type='submit' name='' id='' value='Удалить' />
				</form>
			</div>
		</div>
	)
}

export default ModalProjDel