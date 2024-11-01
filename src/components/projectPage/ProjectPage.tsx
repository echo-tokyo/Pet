import { Link, useParams } from 'react-router-dom'
import { IProjects } from '../../types/types'
import { useAppSelector } from '../../store/hooks'
import './projectPage.scss'
import { useEffect, useState } from 'react'
import GlobalStyles from '../../GlobalStyles'
import { PreviewStyles } from '../../GlobalStyles'
import ModalProj from '../modals/modalProj/ModalProj'
import ModalProjDel from '../modals/modalProjDel/ModalProjDel'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { Pagination, Navigation } from 'swiper/modules';
import Footer from '../footer/Footer'
import landingData from '../../data/landing'

const ProjectPage:React.FC = () => {
	const {id} = useParams()
	console.log(id)

	const projects = useAppSelector(state => state.landing.landingData.projects)
	const currentProject:IProjects | undefined = projects.find(el => el.id === Number(id))

	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
	const [isModalDelOpen, setIsModalDelOpen] = useState<boolean>(false)
	const [isPreview, setIsPreview] = useState<boolean>(false)
	
	// Закрытие превью искейпом
	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Escape') { 
			setIsPreview(false)
		}
	}
	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown)
		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [])
	
	// FIXME: есть точно такой же кусок кода в '../info/Info.tsx', который закрывает модалку кликом по окну. Желательно засунуть в redux 
	document.addEventListener('click', e => {
		if (e.target instanceof HTMLElement && !e.target?.closest('.modal, .modalOpen')) {
			setIsModalOpen(false)
			setIsModalDelOpen(false)
		}
	})

	return (
		<>
		{isModalOpen && (
			<>
				<GlobalStyles />
				<ModalProj currentProject={currentProject}/>
			</>
		)}
		{isModalDelOpen && (
			<>
				<GlobalStyles />
				<ModalProjDel currentProject={currentProject}/>
			</>
		)}

		{isPreview && (
			<>
			<PreviewStyles />
			<div className="preview">
				<div className="preview__items">
					<h3>{currentProject?.name}</h3>
					<button onClick={() => setIsPreview(false)}>X</button>
				</div>
				<img src={(document.querySelector('.swiper-slide-active')?.children[0] as HTMLImageElement)?.src} alt="" />
			</div>
			</>
		)}

		<div className="projectPage">
			<div className="projectPage__header">
				<h2>{currentProject?.name}</h2>
				<Link to={`/landing/${landingData.id}`}><p>Вернуться на главную</p></Link>
			</div>

			<Swiper slidesPerView={'auto'} spaceBetween={30} pagination={{type: 'fraction',}} navigation={true} modules={[Pagination, Navigation]} className="mySwiper" onClick={() => (isModalOpen === false && isModalDelOpen === false) && setIsPreview(!isPreview)}>
				<SwiperSlide><img className='projectPage__slide' src={currentProject?.image} alt="" /></SwiperSlide>	
				{currentProject?.slides?.map((el, index) => <SwiperSlide key={index}><img className='projectPage__slide' src={el}/></SwiperSlide>)}
			</Swiper>

			<div className="projectPage__desc">
				<h3>Описание</h3>
				<p>{currentProject?.desc}</p>
			</div>

			{localStorage.getItem('admin') && 
				<div className="projectPage__inputs">
					<input className='modalOpen' type='button' value='добавить слайд' onClick={() => setIsModalOpen(true)}/>
					<input className='modalOpen' type='button' value='удалить слайд' onClick={() => setIsModalDelOpen(true)}/>
				</div>
			}

		</div>
		<Footer />
		</>
	)
}

export default ProjectPage