import React, { useState } from 'react'
import ModalAdd from '../modals/modalAdd/ModalAdd'
import ModalDel from '../modals/modalDel/ModalDel'
import './info.scss'
import { useAppSelector } from '../../store/hooks'
import GlobalStyles from '../../GlobalStyles'

interface IProps {
	landingData: {
    id: string;
    title_desc: string;
    about_desc: string;
	}
}

const Info: React.FC<IProps> = ({landingData}) => {

	const projects = useAppSelector(state => state.projects.projectsList)
	const stack = useAppSelector(state => state.stack.stackList)
	
	document.addEventListener('click', e => {
		if (e.target instanceof HTMLElement && !e.target?.closest('.modal, .modalOpen')) {
			setIsModalAddOpen(false)
			setIsModalDelOpen(false)
		}
	})

  const [isModalAddOpen, setIsModalAddOpen] = useState<boolean>(false)
	const [isModalDelOpen, setIsModalDelOpen] = useState<boolean>(false)

	return (
		<>
			{isModalAddOpen && (
				<>
					<GlobalStyles />
					<ModalAdd />
				</>
			)}
			{isModalDelOpen && (
				<>
					<GlobalStyles />
					<ModalDel />
				</>
			)}

			<header className='header'>
				<ul className='header__list'>
					{projects.length > 0 && (<li className='header__list-item'><a href='#projects'>Портфолио</a></li>)}
					{stack.length > 0 && (<li className='header__list-item'><a href='#stack'>Стэк</a></li>)}
					<li className='header__list-item'><a href='#services'>Услуги</a></li>
					{localStorage.getItem('isAdmin') === 'true' && (
					<>
						<li className='header__list-item'> 
							<p className='modalOpen' onClick={(): void => {
								setIsModalAddOpen(true)
								setIsModalDelOpen(false)
							}}>Добавить элемент</p>
						</li>
						<li className='header__list-item'>
							<p className='modalOpen' onClick={(): void => {
								setIsModalDelOpen(true)
								setIsModalAddOpen(false)
							}}>Удалить элемент</p>
						</li>
					</>
					)}
				</ul>
			</header>
			<div className='container'>
				<div className='web'>
					<div className='web__pic pic'></div>
					<div className='web__text'>
						<h2 className='web__text-title'>Веб-разработка</h2>
						<p className='web__text-subtitle'>{landingData.title_desc}</p>
					</div>
				</div>
				<div className='about'>
					<div className='about__pic pic'></div>
					<div className='about__text'>
						<h2 className='about__text-title'>Обо мне</h2>
						<p className='about__text-subtitle'>{landingData.about_desc}</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Info