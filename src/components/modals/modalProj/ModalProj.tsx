import '../modal.scss'

const ModalProj = () => {
	const addFile = (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const imageInp = document.querySelector('#image') as HTMLInputElement
		const reader = new FileReader()
		reader.onload = (): void => {
			console.log(reader.result)
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