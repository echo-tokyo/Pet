import '../modal.scss'
const ModalDel = () => {
	return (
		<div className='modal'>
			<div className='modal__items'>
				<h3 className='modal__items-title'>Что добавить на страницу ?</h3>
				<form action='' className='modal__items-select'>
					<select name='select' id=''>
						<option value='project' className='modal__select-item'>Проект</option>
						<option value='stack' className='modal__select-item'>Стэк</option>
						<option value='service' className='modal__select-item'>Услуга</option>
					</select>
					<input type='submit' name='' id='' value='Далее' />
				</form>
			</div>
		</div>
	)
}

export default ModalDel