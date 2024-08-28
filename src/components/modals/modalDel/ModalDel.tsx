import { useState } from 'react'
import '../modal.scss'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { setProjectsList } from '../../../store/projects/projects.slice'

const ModalDel = () => {
	const dispatch = useAppDispatch()
	const projects = useAppSelector(state => state.projects.projectsList)
	const [selectedOption, setSelectedOption] = useState<string>('project')

	const getSelectedOption = (): void => {
		const selectedEl = document.querySelector('select') as HTMLSelectElement
		const formData = {
			option: selectedEl.value,
		}
		setSelectedOption(formData.option)
	}

	const delProject = (): void => {
		const select = document.querySelector('.modal__items-projects') as HTMLSelectElement
		const selectedOption = select.value
		dispatch(setProjectsList(projects.filter(el => el.id !== Number(selectedOption))))
	}

	return (
		<div className='modal'>
			<div className='modal__items'>
				<h3 className='modal__items-title'>Что удалить со страницы ?</h3>
				<form action='' className='modal__items-select' onChange={() => getSelectedOption()} onSubmit={e => {
					e.preventDefault()
					if (selectedOption === 'project' && projects.length > 0) {
						delProject()
					} else if (selectedOption === 'stack') {
						console.log('first')
					} else {
						console.log('eeee')
					}
				}}>
					<select name='select' id=''>
						<option value='project' className='modal__select-item'>Проект</option>
						<option value='stack' className='modal__select-item'>Стэк</option>
						<option value='service' className='modal__select-item'>Услуга</option>
					</select>
					{selectedOption === 'project' && projects.length > 0 ? (
						<select className='modal__items-projects'>
							{projects.map(el => <option value={el.id} key={el.id}>{el.name}</option>)}
						</select>
					) : (
						<p>Список проектов пуст</p>
					)}
					{selectedOption === 'stack' && (
						<>
							<input id='name' type='text' placeholder='Название технологии' required />
							<input id='image' type='file' placeholder='Иконка проекта' required />
						</>
					)}
					<input type='submit' name='' id='' value='Удалить' />
				</form>
			</div>
		</div>
	)
}

export default ModalDel