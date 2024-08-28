import React, { useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import ModalAdd from '../modals/modalAdd/ModalAdd'
import ModalDel from '../modals/modalDel/ModalDel'
import './info.scss'

const GlobalStyles = createGlobalStyle`
	body{
		overflow: hidden;
	}
	header, .container, .wrapper, .stack, .services, .contacts{
		opacity: 0.2;
    transition: opacity 0.3s ease-out; 
		cursor: pointer;
	}	
`

const Info: React.FC = () => {
	const [isModalAddOpen, setIsModalAddOpen] = useState<boolean>(false)
	const [isModalDelOpen, setIsModalDelOpen] = useState<boolean>(false)

	document.addEventListener('click', e => {
		if (e.target instanceof HTMLElement && !e.target?.closest('.modal, .modalOpen')) {
			setIsModalAddOpen(false)
			setIsModalDelOpen(false)
		}
	})
	console.log('add' ,isModalAddOpen)
	console.log('del', isModalDelOpen)
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
					<li className='header__list-item'><a href='#'>Портфолио</a></li>
					<li className='header__list-item'><a href='#'>Стэк</a></li>
					<li className='header__list-item'><a href='#'>Услуги</a></li>
					{window.location.pathname === '/admin' && (
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
						<p className='web__text-subtitle'>
							Это искусство и наука создания веб-сайтов, которые <br /> помогут
							тебе осуществить свои идеи в реальность, <br /> сделать твою
							онлайн-жизнь ярче, эффективнее и <br /> комфортнее.
						</p>
					</div>
				</div>
				<div className='about'>
					<div className='about__pic pic'></div>
					<div className='about__text'>
						<h2 className='about__text-title'>Обо мне</h2>
						<p className='about__text-subtitle'>
							В мире цифрового искусства я рисую веб-сайты, <br /> придавая им
							форму и жизнь. Моя миссия - создавать <br /> привлекательные и
							функциональные интерфейсы, <br /> которые вдохновляют и увлекают
							пользователей.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Info
