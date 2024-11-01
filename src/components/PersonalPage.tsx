import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import landingData from '../data/landing'

const PersonalPage = () => {
	const nav = useNavigate()

	// получение id страницы по токену, чтобы далее перенаправить пользователя на свой сайт (id страницы и login одинаковые, но благодаря запросу узнаем, существует ли страница)
	const [landingId] = useState(landingData.id)

	return (
		<div className="personalPage">
			<h2>Моя визитная страница</h2>
			{landingId ?
			<>
			<p onClick={() => nav(`/landing/${landingId}`)}>Просмотреть как гость</p>
			<p>Редактирова</p>
			<p>Удалить</p>
			</>
			:
			<h4>Создать</h4>
			}
		</div>
	)
}

export default PersonalPage