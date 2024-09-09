import { useParams } from 'react-router-dom'
import { IProjects } from '../../types/types'
import { useAppSelector } from '../../store/hooks'
import './projectPage.scss'
import { useState } from 'react'
import GlobalStyles from '../../GlobalStyles'
import ModalProj from '../modals/modalProj/ModalProj'

const ProjectPage:React.FC = () => {
	const {id} = useParams()
	const projectsList = useAppSelector(state => state.projects.projectsList)
	const currentProject:IProjects | undefined = projectsList.find(el => el.id === Number(id))
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
	
	// TODO: есть точно такой же кусок кода в '../info/Info.tsx', который закрывает модалку кликом по окну. Желательно засунуть в redux 
	document.addEventListener('click', e => {
		if (e.target instanceof HTMLElement && !e.target?.closest('.modal, .modalOpen')) {
			setIsModalOpen(false)
		}
	})

	let index = 0
	const prev = ():void => {
		const slides = document.querySelectorAll('.projectPage__slide')
		slides[index].classList.remove('block')
		index--
		if(index < 0){
			index = slides.length - 1
		}
		slides[index].classList.add('block')
	}
	const next = ():void => {
		const slides = document.querySelectorAll('.projectPage__slide')
		slides[index].classList.remove('block')
		index++
		if(index > slides.length - 1){
			index = 0
		}
		slides[index].classList.add('block')
	}
	
	return (
		<>
		{isModalOpen && (
			<>
				<GlobalStyles />
				<ModalProj currentProject={currentProject}/>
			</>
		)}
		<div className="projectPage">
			<h2>Страница проекта: {currentProject?.name}</h2>
			<div className="projectPage__info">
				<div className="projectPage__slider">
					<img className='projectPage__slide block' src={currentProject?.image} alt="" />
					{currentProject?.slides?.map((el, index) => <img className='projectPage__slide' src={el} key={index}/>)}
				</div>
				<div className="projectPage__inputs">
					<input type="button" value='назад' onClick={() => prev()}/>
					<input type="button" value='вперед' onClick={() => next()}/>
					{localStorage.getItem('isAdmin') === 'true' && (<input className='modalOpen' type='button' value='добавить слайд' onClick={() => setIsModalOpen(true)}/>)}
				</div>
				<div className="projectPage__desc">
					<h3>{currentProject?.name}</h3>
					<p>{currentProject?.desc}</p>
				</div>
			</div>
		</div>
		</>
	)
}

export default ProjectPage