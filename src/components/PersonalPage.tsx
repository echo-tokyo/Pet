import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import landingData from '../data/landing'

const PersonalPage = () => {
	const nav = useNavigate()

	// для безопасности
	localStorage.removeItem('admin')

	// получение id страницы по токену, чтобы далее перенаправить пользователя на свой сайт (id страницы и login одинаковые, но благодаря запросу узнаем, существует ли страница)
	const [landingId] = useState(landingData.id)

	return (
		<div className='personalPage'>
			<h2>Моя визитная страница</h2>
			{landingId ? (
				<>
					<p onClick={() => {
						nav(`/landing/${landingId}`)
						localStorage.removeItem('admin')
					}}>
						Просмотреть как гость
					</p>

					<p onClick={() => {
							nav(`/landing/${landingId}`)
							localStorage.setItem('admin', 'true')
						}}>
						Редактировать
					</p>

					<p>Удалить</p>
				</>
			) : (
				<h4>Создать</h4>
			)}
		</div>
	)
}

export default PersonalPage
