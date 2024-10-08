import './services.scss'

const Services = () => {
	return (
		<div className="services">
			<div className="services__item" id='services'>
				<hr />
				<div className="services__text">
					<h2 className="services__text-number">01</h2>
					<div className="services__desc">
						<h1 className="services__desc-title">Дизайн <br /> сайтов</h1>
						<div className="services__desc__info">
							<p className="services__desc__info-subtitle">Первый шаг к успешному сайту - это дизайн! Я помогу вам создать уникальный и запоминающийся образ для вашего бренда, привлечь пользователей и сделать сайт эффективным инструментом для достижения ваших целей.</p>
							<span className="services__desc__info-btn">Оставить заявку <svg width="35" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40.7071 8.70711C41.0976 8.31658 41.0976 7.68342 40.7071 7.29289L34.3431 0.928932C33.9526 0.538408 33.3195 0.538408 32.9289 0.928932C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM0 9H40V7H0V9Z" fill="black"/></svg></span>
						</div>
					</div>
				</div>
			</div>
			<div className="services__item">
				<hr />
				<div className="services__text">
					<h2 className="services__text-number">02</h2>
					<div className="services__desc">
						<h1 className="services__desc-title">Под <br /> ключ</h1>
						<div className="services__desc__info">
							<p className="services__desc__info-subtitle">Я предлагаю комплексные услуги по созданию сайтов, от разработки дизайна до наполнения контентом и настройки хостинга. Вам не нужно беспокоиться о технических деталях - я позабочусь обо всем, чтобы вы получили готовый и функциональный сайт, отвечающий вашим потребностям.</p>
							<span className="services__desc__info-btn">Оставить заявку <svg width="35" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40.7071 8.70711C41.0976 8.31658 41.0976 7.68342 40.7071 7.29289L34.3431 0.928932C33.9526 0.538408 33.3195 0.538408 32.9289 0.928932C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM0 9H40V7H0V9Z" fill="black"/></svg></span>
						</div>
					</div>
				</div>
			</div>
			
			<hr />
		</div>
	)
}

export default Services