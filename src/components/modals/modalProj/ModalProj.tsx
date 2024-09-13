import { IProjects } from '../../../types/types'
import '../modal.scss'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { setProjectsList } from '../../../store/projects/projects.slice'

interface IProps  {
	currentProject: IProjects | undefined
}

const ModalProj:React.FC<IProps> = ({currentProject}) => {
	const dispatch = useAppDispatch()
	const projects = useAppSelector(state => state.projects.projectsList)
	
	const addFile = (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const imageInp = document.querySelector('#image') as HTMLInputElement
		const reader = new FileReader()
		reader.onload = (): void => {
			dispatch(setProjectsList(projects.map(el => {
				if(el.id === currentProject?.id){
					return {
						...el,
						slides: [...(Array.isArray(el.slides) ? el.slides : []), reader.result as string]
					}
				}
				return el
			})))
		}
		if (imageInp.files && imageInp.files[0]) {
			reader.readAsDataURL(imageInp.files[0])
		}
	}

	return (
		<div className='modal'>
			<div className='modal__items'>
				<h3 className='modal__items-title'>Добавьте слайд</h3>
				<form action='' className='modal__items-select' onSubmit={(e) => addFile(e)}>
					<input id='image' type='file' required />
					<input type='submit' name='' id='' value='Добавить' />
				</form>
			</div>
		</div>
	)
}

export default ModalProj