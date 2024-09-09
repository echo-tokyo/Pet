import React, { useState } from 'react'
import ModalAdd from '../modals/modalAdd/ModalAdd'
import ModalDel from '../modals/modalDel/ModalDel'
import './info.scss'
import { useAppSelector } from '../../store/hooks'
import GlobalStyles from '../../GlobalStyles'

const Info: React.FC = () => {
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
						<p className='web__text-subtitle'> Это искусство и наука создания веб-сайтов, которые <br /> помогут тебе осуществить свои идеи в реальность, <br /> сделать твою онлайн-жизнь ярче, эффективнее и <br /> комфортнее.
						</p>
					</div>
				</div>
				<div className='about'>
					<div className='about__pic pic'></div>
					<div className='about__text'>
						<h2 className='about__text-title'>Обо мне</h2>
						<p className='about__text-subtitle'>В мире цифрового искусства я рисую веб-сайты, <br /> придавая им форму и жизнь. Моя миссия - создавать <br /> привлекательные и функциональные интерфейсы, <br /> которые вдохновляют и увлекают пользователей.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Info