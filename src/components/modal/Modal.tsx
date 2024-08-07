import { useState } from 'react'
import './modal.scss'
import { IProjectData } from '../../types/types'

const Modal: React.FC = () => {
	const [selectedOption, setSelectedOption] = useState<string>('project')

	const getSelectedOption = ():void => {
		const selectedEl = document.querySelector('select') as HTMLSelectElement
		const formData = {
			option: selectedEl.value,
		}
		setSelectedOption(formData.option)
	}

	const getSelectedData = (e:React.FormEvent<HTMLFormElement>):void => {
		e.preventDefault()
		const nameInp = document.querySelector('#name') as HTMLInputElement
		const descInp = document.querySelector('#desc') as HTMLInputElement
		const imageInp = document.querySelector('#image') as HTMLInputElement
		const reader = new FileReader()
		const formData: IProjectData = {
			name: nameInp?.value,
			desc: descInp?.value,
			image: null
		}
		reader.onload = (): void => {
			formData.image = reader.result;
			console.log(formData)
		}
		if (imageInp.files && imageInp.files[0]) {
			reader.readAsDataURL(imageInp.files[0])
		}
	}

	return (
		<div className="modal">
			<div className="modal__items">
				<h3 className='modal__items-title'>Что добавить на страницу ?</h3>
				<form action="" className="modal__items-select" onChange={() => getSelectedOption()} onSubmit={(e) => getSelectedData(e)}>
					<select name="select" id="">
						<option value="project" className="modal__select-item">Проект</option>
						<option value="stack" className="modal__select-item">Стэк</option>
						<option value="service" className="modal__select-item">Услуга</option>
					</select>
					{selectedOption === 'project' && (
						<>
						<input id='name' type="text" placeholder='Название проекта' required/>
						<textarea id="desc" placeholder='Описание'></textarea>
						<input id='image' type="file" placeholder='Обложка проекта' />
						</>
					)}
					<input type="submit" name="" id="" value='Далее'/>
				</form>
			</div>
		</div>
	)
}

export default Modal