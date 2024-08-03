import './footer.scss'

const Footer = () => {
	return (
		<footer className='contacts'>
			<h3 className="contacts-title">Контактные данные</h3>
			<ul className="contacts__list">
				<li className="contacts__item"><a href="#">2two2two8eight@mail.ru</a></li>
				<li className="contacts__item"><a href="#">+7 961 407 16 55</a></li>
				<li className="contacts__item"><a href="#">Telegram</a></li>
				<li className="contacts__item"><a href="#">GitHub</a></li>
			</ul>
		</footer>
	)
}

export default Footer